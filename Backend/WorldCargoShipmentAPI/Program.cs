using WorldCargoHelpers;
using WorldCargoRepository.Models;
using WorldCargoShipmentAPI.Controllers.JWT;
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

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllHeaders",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .WithMethods("GET", "PUT", "POST", "DELETE");
        });
});

//builder.Services.AddCors(options =>
//{
//    options.AddDefaultPolicy(policy =>
//    {
//        policy.AllowAnyOrigin();
//        policy.AllowAnyMethod();
//        policy.AllowAnyHeader();
//        policy.WithMethods("GET", "PUT", "POST", "DELETE");
//    });
//});
builder.Services.AddScoped<IBaseService,BaseService>();
builder.Services.AddDbContext<WorldCargoDBContext>((option) =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("GoFrideDB"));
});

builder.Services.AddHttpClient();

builder.Services.AddHealthChecks().AddSqlServer(configuration.GetConnectionString("GoFrideDB") ?? "", tags:new[] { "db"});
builder.Services.AddControllers(options =>
{
    options.RespectBrowserAcceptHeader = true;

}).AddNewtonsoftJson();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddCors();
//builder.Services.AddCors(options => options.AddPolicy("CorsPolicy",
//               builder =>
//               {
//                   builder
//                   .AllowAnyOrigin()
//                   .AllowAnyMethod()
//                   .AllowAnyHeader();
//                  // .AllowCredentials();
//               }));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    // app.UseCors(
    //    options => options.WithOrigins("*").AllowAnyMethod()
    //);
    
}
app.UseCors("AllowAllHeaders");

Appconfigurations.ConnectionString = configuration.GetConnectionString("GoFrideDB") ?? "";


app.UseAuthentication();

app.UseHttpsRedirection();
app.UseRouting();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173/,http://localhost:5173/"));
//app.UseCors("AllowAll");

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



app.MapControllers();
app.Run();
