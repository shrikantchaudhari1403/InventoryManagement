use WorldCargoFrieght_DB
go

CREATE or ALTER PROC dbo.sp_HBL_Information_DML

@prm_DMLType varchar(1),
@prm_File_No				VARCHAR(20),
@prm_MBL_NO					VARCHAR(20),
@prm_HBL_No					VARCHAR(20),
@prm_Booking_No				VARCHAR(20)			=NULL,
@prm_ITN_No					VARCHAR(20)			=NULL,
@prm_Customer_Ref_No		VARCHAR(50)			=NULL,
@prm_Document_No			VARCHAR(50)			=NULL,
@prm_Quotation_No			VARCHAR(50)			=NULL,
@prm_Actual_Shipper			VARCHAR(200)		=NULL,
@prm_Customer				VARCHAR(200)		=NULL,
@prm_Bill_To				VARCHAR(200)		=NULL,
@prm_Consignee				VARCHAR(50)			=NULL,
@prm_Notify					VARCHAR(200)		=NULL,
@prm_Customs_Broker			VARCHAR(50)			=NULL,
@prm_Trucker				VARCHAR(50)			=NULL,
@prm_HBL_Agent				VARCHAR(200)		=NULL,
@prm_Sales					VARCHAR(200)		=NULL,
@prm_Sub_Agent_BL			BIT					=NULL,
@prm_Place_Of_Receipt		VARCHAR(200)		=NULL,
@prm_Place_Of_Receipt_ETD	DATETIME            =NULL,
@prm_Port_Of_Discharge      VARCHAR(200)		=NULL,
@prm_ETA					DATETIME            =NULL,
@prm_Place_Of_Delivery      VARCHAR(200)		=NULL,
@prm_Place_Of_Delivery_ETA  DATETIME			=NULL,
@prm_Final_Destination		VARCHAR(200)		=NULL,
@prm_Final_ETA				DATETIME			=NULL,
@prm_FBA_FC					VARCHAR(200)		=NULL,
@prm_Empty_Pickup			DATETIME			=NULL,
@prm_Delivery_ToPier		VARCHAR(50)			=NULL,
@prm_Cargo_Ready_Date		DATETIME			=NULL,
@prm_Cargo_Pickup			VARCHAR(50)			=NULL,
@prm_Ship_Mode				VARCHAR(50)			=NULL,
@prm_Buying_Freight			VARCHAR(200)		=NULL,
@prm_Selling_Fright			VARCHAR(200)		=NULL,
@prm_Service_Term			VARCHAR(200)		=NULL,
@prm_Container_Qty			INT					=NULL,
@prm_Express_BL				BIT					=NULL,
@prm_Cargo_Type				VARCHAR(50)			=NULL,
@prm_sales_Type				VARCHAR(200)		=NULL,
@prm_WH_Cut_Off_Date		DATETIME			=NULL,
@prm_Early_Return_Date		DATETIME			=NULL,
@prm_LC_No					VARCHAR(50)			=NULL,
@prm_LC_ISSUE_BANK			VARCHAR(200)		=NULL,
@prm_LC_ISSUE_Date			DATETIME            =NULL,
@prm_Onboard				DATETIME			=NULL,
@prm_Stackable				BIT					=NULL,
@prm_Hold					BIT					=NULL,
@prm_Frt_Released			DATETIME			=NULL,               
@prm_Released_By			VARCHAR(200)		=NULL,
@prm_BL_Cancelled			DATETIME			=NULL,
@prm_Cancelled_By			VARCHAR(200)		=NULL,
@prm_Reason_For_Cancel		VARCHAR(200)		=NULL

AS
  BEGIN

  Declare 
    @varFile_No					VARCHAR(20),
	@varMBL_NO					VARCHAR(20),
	@varHBL_No					VARCHAR(20),
	@varBooking_No				VARCHAR(20),
	@varITN_No					VARCHAR(20),
	@varCustomer_Ref_No			VARCHAR(50),
	@varDocument_No				VARCHAR(50),
	@varQuotation_No			VARCHAR(50),
	@varActual_Shipper			VARCHAR(200),
	@varCustomer				VARCHAR(200),
	@varBill_To					VARCHAR(200),
	@varConsignee				VARCHAR(50),
	@varNotify					VARCHAR(200),
	@varCustoms_Broker			VARCHAR(50),
	@varTrucker					VARCHAR(50),
	@varHBL_Agent				VARCHAR(200),
	@varSales					VARCHAR(200),
	@varSub_Agent_BL			BIT,
	@varPlace_Of_Receipt		VARCHAR(200),
	@varPlace_Of_Receipt_ETD	DATETIME,
	@varPort_Of_Discharge       VARCHAR(200),
	@varETA						DATETIME ,
	@varPlace_Of_Delivery       VARCHAR(200),
	@varPlace_Of_Delivery_ETA   DATETIME ,
	@varFinal_Destination		VARCHAR(200),
	@varFinal_ETA				DATETIME ,
	@varFBA_FC					VARCHAR(200),
	@varEmpty_Pickup			DATETIME,
	@varDelivery_ToPier			VARCHAR(50),
	@varCargo_Ready_Date		DATETIME,
	@varCargo_Pickup			VARCHAR(50),
	@varShip_Mode				VARCHAR(50),
	@varBuying_Freight			VARCHAR(200),
	@varSelling_Fright			VARCHAR(200),
	@varService_Term			VARCHAR(200),
	@varContainer_Qty			INT ,
	@varExpress_BL				BIT,
	@varCargo_Type				VARCHAR(50),
	@varsales_Type				VARCHAR(200),
	@varWH_Cut_Off_Date			DATETIME,
	@varEarly_Return_Date		DATETIME,
	@varLC_No					VARCHAR(50),
	@varLC_ISSUE_BANK			VARCHAR(200),
	@varLC_ISSUE_Date			DATETIME,
	@varOnboard					DATETIME,
	@varStackable				BIT,
	@varHold					BIT,
	@varFrt_Released			DATETIME,               
	@varReleased_By				VARCHAR(200),
	@varBL_Cancelled			DATETIME,
	@varCancelled_By			VARCHAR(200),
	@varReason_For_Cancel		VARCHAR(200)

	 
		set @varFile_No								= @prm_File_No				        
		set @varMBL_NO								= @prm_MBL_NO					    
		set	@varHBL_No								= @prm_HBL_No					    
		set	@varBooking_No							= @prm_Booking_No				    
		set	@varITN_No								= @prm_ITN_No					    
		set	@varCustomer_Ref_No						= @prm_Customer_Ref_No			    
		set	@varDocument_No							= @prm_Document_No				    
		set @varQuotation_No						= @prm_Quotation_No				   
		set	@varActual_Shipper			    	    = @prm_Actual_Shipper				
		set	@varCustomer							= @prm_Customer						
		set	@varBill_To								= @prm_Bill_To						
		set	@varConsignee				            = @prm_Consignee						
		set	@varNotify								= @prm_Notify						 
		set @varCustoms_Broker						= @prm_Customs_Broker				
		set	@varTrucker								= @prm_Trucker						
		set	@varHBL_Agent							= @prm_HBL_Agent						
		set	@varSub_Agent_BL						= @prm_Sub_Agent_BL			         
		set	@varPlace_Of_Receipt					= @prm_Place_Of_Receipt				
		set	@varPlace_Of_Receipt_ETD				= @prm_Place_Of_Receipt_ETD			
		set	@varPort_Of_Discharge					= @prm_Port_Of_Discharge				
		set	@varETA									= @prm_ETA							
		set	@varPlace_Of_Delivery      				= @prm_Place_Of_Delivery				
		set	@varPlace_Of_Delivery_ETA   			= @prm_Place_Of_Delivery_ETA			
		set	@varFinal_Destination					= @prm_Final_Destination				
		set	@varFinal_ETA							= @prm_Final_ETA						
		set	@varFBA_FC								= @prm_FBA_FC						
		set	@varEmpty_Pickup						= @prm_Empty_Pickup					
		set	@varDelivery_ToPier						= @prm_Delivery_ToPier				
		set	@varCargo_Ready_Date					= @prm_Cargo_Ready_Date				
		set	@varCargo_Pickup						= @prm_Cargo_Pickup					
		set	@varShip_Mode							= @prm_Ship_Mode						
		set	@varBuying_Freight						= @prm_Buying_Freight				
		set	@varSelling_Fright						= @prm_Selling_Fright				
		set	@varService_Term						= @prm_Service_Term					
		set	@varContainer_Qty						= @prm_Container_Qty					
		set	@varExpress_BL							= @prm_Express_BL					
		set	@varCargo_Type							= @prm_Cargo_Type					
		set	@varsales_Type							= @prm_sales_Type					
		set	@varWH_Cut_Off_Date						= @prm_WH_Cut_Off_Date				
		set	@varEarly_Return_Date					= @prm_Early_Return_Date				 
		set	@varLC_No								= @prm_LC_No							
		set	@varLC_ISSUE_BANK						= @prm_LC_ISSUE_BANK
		set @varLC_ISSUE_Date			            = @prm_LC_ISSUE_Date
		set	@varOnboard								= @prm_Onboard						
		set	@varStackable							= @prm_Stackable						
		set	@varHold				    			= @prm_Hold							 
		set	@varFrt_Released						= @prm_Frt_Released					    
		set	@varReleased_By							= @prm_Released_By					
		set	@varBL_Cancelled						= @prm_BL_Cancelled					
		set	@varCancelled_By						= @prm_Cancelled_By					
		set	@varReason_For_Cancel					= @prm_Reason_For_Cancel				

IF @prm_DMLType = 'I' AND NOT EXISTS(SELECT 1 FROM dbo.tbl_HBL_Information WHERE File_No	=	@varFile_No AND MBL_NO	=	@varMBL_NO AND HBL_No  =  @varHBL_No)
BEGIN
	INSERT INTO dbo.tbl_HBL_Information(
		File_No,
		MBL_NO,
		HBL_No,
		Booking_No,
		ITN_No,
		Customer_Ref_No,
		Document_No,
		Quotation_No,
		Actual_Shipper,
		Customer,
		Bill_To,
		Consignee,
		Notify,
		Customs_Broker,
		Trucker,
		HBL_Agent,
		Sales,
		Sub_Agent_BL,
		Place_Of_Receipt,
		Place_Of_Receipt_ETD,
		Port_Of_Discharge,
		ETA,
		Place_Of_Delivery,
		Place_Of_Delivery_ETA,
		Final_Destination,
		Final_ETA,
		FBA_FC,
		Empty_Pickup,
		Delivery_ToPier,
		Cargo_Ready_Date,
		Cargo_Pickup,
		Ship_Mode,
		Buying_Freight,
		Selling_Fright,
		Service_Term,
		Container_Qty,
		Express_BL,
		Cargo_Type,
		sales_Type,
		WH_Cut_Off_Date,
		Early_Return_Date,
		LC_No,
		LC_ISSUE_BANK,
		LC_ISSUE_Date,
		Onboard,
		Stackable,
		Hold,
		Frt_Released,               
		Released_By,
		BL_Cancelled,
		Cancelled_By,
		Reason_For_Cancel		
	 )

	Values (
		@varFile_No,
		@varMBL_NO,
		@varHBL_No,
		@varBooking_No,
		@varITN_No,
		@varCustomer_Ref_No,
		@varDocument_No,
		@varQuotation_No,
		@varActual_Shipper,
		@varCustomer,
		@varBill_To,
		@varConsignee,
		@varNotify,
		@varCustoms_Broker,
		@varTrucker,
		@varHBL_Agent,
		@varSales,
		@varSub_Agent_BL,
		@varPlace_Of_Receipt,
		@varPlace_Of_Receipt_ETD,
		@varPort_Of_Discharge,
		@varETA,
		@varPlace_Of_Delivery,
		@varPlace_Of_Delivery_ETA,
		@varFinal_Destination,
		@varFinal_ETA,
		@varFBA_FC,
		@varEmpty_Pickup,
		@varDelivery_ToPier,
		@varCargo_Ready_Date,
		@varCargo_Pickup,
		@varShip_Mode,
		@varBuying_Freight,
		@varSelling_Fright,
		@varService_Term,
		@varContainer_Qty,
		@varExpress_BL,
		@varCargo_Type,
		@varsales_Type,
		@varWH_Cut_Off_Date,
		@varEarly_Return_Date,
		@varLC_No,
		@varLC_ISSUE_BANK,
		@varLC_ISSUE_Date,
		@varOnboard,
		@varStackable,
		@varHold,
		@varFrt_Released,               
		@varReleased_By,
		@varBL_Cancelled,
		@varCancelled_By,
		@varReason_For_Cancel	
		)
   END
   ELSE IF @prm_DMLType ='U'
	 BEGIN
		UPDATE dbo.tbl_HBL_Information 
		 SET  
			File_No						=	@varFile_No,
			MBL_NO						=	@varMBL_NO,
			HBL_No						=	@varHBL_No,
			Booking_No					=	@varBooking_No,
			ITN_No						=	@varITN_No,
			Customer_Ref_No				=	@varCustomer_Ref_No,
			Document_No					=	@varDocument_No,
			Quotation_No				=	@varQuotation_No,
			Actual_Shipper				=	@varActual_Shipper,
			Customer					=	@varCustomer,
			Bill_To						=	@varBill_To,
			Consignee					=	@varConsignee,
			Notify						=   @varNotify,
			Customs_Broker				=	@varCustoms_Broker,
			Trucker						=	@varTrucker,
			HBL_Agent					=	@varHBL_Agent,
			Sales						=	@varSales,
			Sub_Agent_BL				=	@varSub_Agent_BL,
			Place_Of_Receipt			=	@varPlace_Of_Receipt,
			Place_Of_Receipt_ETD		=	@varPlace_Of_Receipt_ETD,
			Port_Of_Discharge			=	@varPort_Of_Discharge,
			ETA							=	@varETA,
			Place_Of_Delivery			=	@varPlace_Of_Delivery,
			Place_Of_Delivery_ETA		=   @varPlace_Of_Delivery_ETA,
			Final_Destination			=   @varFinal_Destination,
			Final_ETA					=	@varFinal_ETA,
			FBA_FC						=	@varFBA_FC,
			Empty_Pickup				=	@varEmpty_Pickup,
			Delivery_ToPier				=	@varDelivery_ToPier,
			Cargo_Ready_Date			=	@varCargo_Ready_Date,
			Cargo_Pickup				=	@varCargo_Pickup,
			Ship_Mode					=	@varShip_Mode,
			Buying_Freight				=	@varBuying_Freight,
			Selling_Fright				=	@varSelling_Fright,
			Service_Term				=	@varService_Term,
			Container_Qty				=	@varContainer_Qty,
			Express_BL					=	@varExpress_BL,
			Cargo_Type					=	@varCargo_Type,
			sales_Type					=	@varsales_Type,
			WH_Cut_Off_Date				=	@varWH_Cut_Off_Date	,
			Early_Return_Date			=	@varEarly_Return_Date,
			LC_No						=	@varLC_No,
			LC_ISSUE_BANK				=	@varLC_ISSUE_BANK,
			LC_ISSUE_Date               =   @varLC_ISSUE_Date,
			Onboard						=	@varOnboard,
			Stackable					=	@varStackable,
			Hold						=	@varHold,
			Frt_Released				=	@varFrt_Released,             
			Released_By					=	@varReleased_By,
			BL_Cancelled				=	@varBL_Cancelled,
			Cancelled_By				=	@varCancelled_By,	
			Reason_For_Cancel			=	@varReason_For_Cancel
			WHERE	File_No	    =   @varFile_No
					AND MBL_NO	=	@varMBL_NO
					AND HBL_No  =   @varHBL_No
		END

		ELSE IF @prm_DMLType ='D'
			BEGIN
				DELETE FROM dbo.tbl_HBL_Information 
				WHERE File_No =   @varFile_No
				AND MBL_NO	  =	  @varMBL_NO
				AND HBL_No    =   @varHBL_No
			END

		ELSE IF @prm_DMLType ='S'
			 BEGIN
				 SELECT File_No,
					MBL_NO,
					HBL_No,
					Booking_No,
					ITN_No,
					Customer_Ref_No,
					Document_No,
					Quotation_No,
					Actual_Shipper,
					Customer,
					Bill_To,
					Consignee,
					Notify,
					Customs_Broker,
					Trucker,
					HBL_Agent,
					Sales,
					Sub_Agent_BL,
					Place_Of_Receipt,
					Place_Of_Receipt_ETD,
					Port_Of_Discharge,
					ETA,
					Place_Of_Delivery,
					Place_Of_Delivery_ETA,
					Final_Destination,
					Final_ETA,
					FBA_FC,
					Empty_Pickup,
					Delivery_ToPier,
					Cargo_Ready_Date,
					Cargo_Pickup,
					Ship_Mode,
					Buying_Freight,
					Selling_Fright,
					Service_Term,
					Container_Qty,
					Express_BL,
					Cargo_Type,
					sales_Type,
					WH_Cut_Off_Date,
					Early_Return_Date,
					LC_No,
					LC_ISSUE_BANK,
					LC_ISSUE_Date,
					Onboard,
					Stackable,
					Hold,
					Frt_Released,               
					Released_By,
					BL_Cancelled,
					Cancelled_By,
					Reason_For_Cancel				
					FROM dbo.tbl_HBL_Information 
						WHERE File_No  =    @varFile_No
						AND MBL_No	   =    @varMBL_No
						AND HBL_No     =    @varHBL_No
	  END
	END
GO
