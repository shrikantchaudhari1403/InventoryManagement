using GoFreightHelpers;
using GoFreightRepository.Models;
using GoFreightShipmentAPI.Controllers.JWT;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Services.Wrapper;
using System.Text;


var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
// Add services to the container.
var jwtSettings = new JwtSettings();
builder.Configuration.GetSection("JwtSettings").Bind(jwtSettings);
builder.Services.AddSingleton(jwtSettings);

builder.Services.AddSingleton<IJwtSettings,JwtSettingsRepo>();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme= JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(option => {
    option.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings.Issuer,
        ValidAudience = jwtSettings.Audience,
        IssuerSigningKey=   new  SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey)),
    };
});

builder.Services.AddAuthorization();

builder.Services.AddCors(options => {
options.AddDefaultPolicy( policy =>
{
    policy.AllowAnyOrigin();
    policy.AllowAnyMethod();
    policy.AllowAnyHeader();
    policy.WithMethods("GET", "PUT", "POST", "DELETE");
});
});
builder.Services.AddScoped<IBaseService,BaseService>();
builder.Services.AddDbContext<GoFreightDBContext>((option) =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("GoFrideDB"));
});

builder.Services.AddHealthChecks().AddSqlServer(configuration.GetConnectionString("GoFrideDB") ?? "", tags:new[] { "db"});
builder.Services.AddControllers(options =>
{
    options.RespectBrowserAcceptHeader = true;

}).AddNewtonsoftJson();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
Appconfigurations.ConnectionString = configuration.GetConnectionString("GoFrideDB") ?? "";

app.UseAuthentication();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();
app.UseAuthorization();
//app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapHealthChecks("api/health");
    endpoints.MapHealthChecks("api/health/db", new Microsoft.AspNetCore.Diagnostics.HealthChecks.HealthCheckOptions()
    {
        Predicate = (check) => check.Tags.Contains("db")
    });
});

//app.MapControllers();
app.Run();
