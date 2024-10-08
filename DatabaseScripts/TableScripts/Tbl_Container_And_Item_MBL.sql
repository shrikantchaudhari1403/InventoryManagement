
CREATE TABLE dbo.Tbl_Container_And_Item_MBL (
    MBL_No					VARCHAR(20),
    Container_No						VARCHAR(20),        
    TP_SZ								VARCHAR(20),        
    Seal_No								VARCHAR(20),
	Pick_Up_No							VARCHAR(50), 
    PKG									INT,                
    Weight_KG							DECIMAL(10,2),      
    Measurement							DECIMAL(10,2),
    Display_Unit						VARCHAR(50),
	Marks								VARCHAR(20),
   [Description]                        VARCHAR(500),
   Domestic_Routing_Export_Instruction  VARCHAR(500)       
)