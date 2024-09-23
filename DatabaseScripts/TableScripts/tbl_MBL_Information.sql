 --Create database WorldCargoFrieght_DB
 --GO
 USE WorldCargoFrieght_DB
 GO
  
CREATE TABLE  dbo.tbl_MBL_Information(
File_No					VARCHAR(20),
MBL_No					VARCHAR(20),
Office					VARCHAR(50)  NOT NUll,
BL_Type					VARCHAR(20),
Post_Date				DATETIME,
Carrier_Bkg_No			VARCHAR(20),
ITN_No					VARCHAR(20),
Carrier					VARCHAR(200),
BL_Acct_Carrier			VARCHAR(200),
Shipping_Agent			VARCHAR(200),
Oversea_Agent			VARCHAR(200),
Notify					VARCHAR(200),
Forwarding_Agent		VARCHAR(200),
Co_Loader				VARCHAR(200),
CO						BIT,
CO_Value				VARCHAR(200),
Direct_Master			BIT,
Vessel					VARCHAR(50),
Voyage					VARCHAR(200),
Place_of_Receipt		VARCHAR(200),
Place_of_Receipt_ETD	DATETIME ,
Port_of_Loading			VARCHAR(200),
ETD						DATETIME  NOT NULL,
Place_Of_Discharge		VARCHAR(200),
ETA						DATETIME ,
Place_Of_Delivery       VARCHAR(200),
Place_Of_Delivery_ETA   DATETIME ,
Final_Destination		VARCHAR(200),
Final_ETA				DATETIME ,
Empty_Pickup			VARCHAR(50),
Delivery_ToPier			VARCHAR(50),
Freight					VARCHAR(50),
Ship_Mode				VARCHAR(50),
SVC_Term1				VARCHAR(10),
SVC_Term2				VARCHAR(10),
Container_Qty			INT ,
OBL_Type				VARCHAR(50),
Doc_Cut_Of_Date			DATETIME,
Post_cut_Of_Date		DATETIME,
Rail_cut_Of_Date		DATETIME,
BL_Cancelled			BIT,
BL_Cancelled_Date		DATETIME,           
Reasons_For_Cancel		VARCHAR(200),
Cancelled_By			VARCHAR(200),
Bussiness_Reffered_By	VARCHAR(200),       
Booking_Agent			BIT ,                     ---
Frt_Released			BIT ,
Frt_Released_Date		DATETIME,----
Released_By				VARCHAR(200)
)





