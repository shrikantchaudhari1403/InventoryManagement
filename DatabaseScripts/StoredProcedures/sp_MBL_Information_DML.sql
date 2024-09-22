-- 
CREATE OR ALTER PROC dbo.sp_MBL_Information_DML
		@prm_DMLType Varchar(1),
		@prm_File_No					VARCHAR(20),
		@prm_MBL_NO						VARCHAR(20),
		@prm_Office						VARCHAR(50) = NULL ,
		@prm_BL_Type					VARCHAR(50)= NULL,
		@prm_Post_Date					DATETIME = NULL,
		@prm_Carrier_Bkg_No				VARCHAR(20) = NULL,
		@prm_ITN_No						VARCHAR(20) = NULL,
		@prm_Carrier					VARCHAR(200)= NULL ,
		@prm_BL_Acct_Carrier			VARCHAR(200)= NULL,
		@prm_Shipping_Agent				VARCHAR(200)= NULL,
		@prm_Oversea_Agent				VARCHAR(200)= NULL,
		@prm_Notify						VARCHAR(200)= NULL,
		@prm_Forwarding_Agent			VARCHAR(200)= NULL,
		@prm_Co_Loader					VARCHAR(200)= NULL,
		@prm_isCOExists					BIT,
		@prm_CO							VARCHAR(200)= NULL,
		@prm_Direct_Master				BIT = NULL,
		@prm_Vessel						VARCHAR(50)= NULL,
		@prm_Voyage						VARCHAR(200)= NULL,
		@prm_Place_of_Receipt			VARCHAR(200)= NULL,
		@prm_Place_of_Receipt_ETD		DATETIME = NULL,
		@prm_Port_of_Loading			VARCHAR(200)= NULL,
		@prm_ETD						DATETIME  = NULL,
		@prm_Place_Of_Discharge			VARCHAR(200)= NULL,
		@prm_ETA						DATETIME = NULL,
		@prm_Place_Of_Delivery			VARCHAR(200)= NULL,
		@prm_Place_Of_Delivery_ETA		DATETIME= NULL,
		@prm_Final_Destination			VARCHAR(200)= NULL,
		@prm_Final_ETA					DATETIME = NULL,
		@prm_Empty_Pickup				VARCHAR(50) = NULL,
		@prm_Delivery_ToPier			VARCHAR(50) = NULL,
		@prm_Freight					VARCHAR(50) = NULL,
		@prm_Ship_Mode					VARCHAR(10) = NULL,
		@prm_SVC_TermFrom				VARCHAR(10) = NULL,
		@prm_SVC_TermTo					VARCHAR(10) = NULL,
		@prm_Container_Qty				INT = NULL,
		@prm_OBL_Type					VARCHAR(50) = NULL,
		@prm_Doc_Cut_Of_Date			DATETIME = NULL,
		@prm_Post_cut_Of_Date			DATETIME = NULL,
		@prm_Rail_cut_Of_Date			DATETIME = NULL,
		@prm_BL_Cancelled				BIT = NULL,  
		@prm_BL_Cancelled_Date			DATETIME,
		@prm_Reasons_For_Cancel			VARCHAR(200) = NULL,
		@prm_Cancelled_By				VARCHAR(200),
		@prm_Bussiness_Reffered_By		VARCHAR(200) = NULL,       
		@prm_Booking_Agent				BIT = NULL,                  
		@prm_Frt_Released				BIT = NULL, 
		@prm_Frt_Released_Date			DATETIME,
		@prm_Released_By				VARCHAR(200) = NULL
AS
BEGIN 
	DECLARE @varFile_No					VARCHAR(20),
			@varMBL_NO					VARCHAR(20),
			@varOffice					VARCHAR(50)  ,
			@varBL_Type					VARCHAR(20),
			@varPost_Date				DATETIME,
			@varCarrier_Bkg_No			VARCHAR(20),
			@varITN_No					VARCHAR(20),
			@varCarrier					VARCHAR(200),
			@varBL_Acct_Carrier			VARCHAR(200),
			@varShipping_Agent			VARCHAR(200),
			@varOversea_Agent			VARCHAR(200),
			@varNotify					VARCHAR(200),
			@varForwarding_Agent		VARCHAR(200),
			@varCo_Loader				VARCHAR(200),
			@varisCOExists				BIT,
			@varCO						VARCHAR(200),
			@varDirect_Master			BIT,
			@varVessel					VARCHAR(50),
			@varVoyage					VARCHAR(200),
			@varPlace_of_Receipt		VARCHAR(200),
			@varPlace_of_Receipt_ETD	DATETIME ,
			@varPort_of_Loading			VARCHAR(200),
			@varETD						DATETIME ,
			@varPlace_Of_Discharge		VARCHAR(200),
			@varETA						DATETIME,
			@varPlace_Of_Delivery       VARCHAR(200),
			@varPlace_Of_Delivery_ETA   DATETIME,
			@varFinal_Destination		VARCHAR(200),
			@varFinal_ETA				DATETIME,
			@varEmpty_Pickup			VARCHAR(50),
			@varDelivery_ToPier			VARCHAR(50),
			@varFreight					VARCHAR(50),
			@varShip_Mode				VARCHAR(50),
			@varSVC_TermFrom			VARCHAR(10),
			@varSVC_TermTo				VARCHAR(10),
			@varContainer_Qty			INT ,
			@varOBL_Type				VARCHAR(50),
			@varDoc_Cut_Of_Date			DATETIME,
			@varPost_cut_Of_Date		DATETIME,
			@varRail_cut_Of_Date		DATETIME,
			@varBL_Cancelled			BIT,
			@varBL_Cancelled_Date		DATETIME,
			@varReasons_For_Cancel		VARCHAR(200),
			@varCancelled_By			VARCHAR(200),
			@varBussiness_Reffered_By	VARCHAR(200),       
			@varBooking_Agent			BIT ,                     ---
			@varFrt_Released			BIT ,
			@varFrt_Released_Date		DATETIME, 
			@varReleased_By				VARCHAR(200)

	set	@varFile_No					=	@prm_File_No
	set	@varMBL_NO					=	@prm_MBL_NO
	set	@varOffice					=	@prm_Office
	set	@varBL_Type					=	@prm_BL_Type
	set	@varPost_Date				=	@prm_Post_Date
	set	@varCarrier_Bkg_No			=	@prm_Carrier_Bkg_No
	set	@varITN_No					=	@prm_ITN_No
	set	@varCarrier					=	@prm_Carrier
	set	@varBL_Acct_Carrier			=	@prm_BL_Acct_Carrier
	set	@varShipping_Agent			=	@prm_Shipping_Agent
	set	@varOversea_Agent			=	@prm_Oversea_Agent
	set	@varNotify					=	@prm_Notify
	set	@varForwarding_Agent		=	@prm_Forwarding_Agent
	set	@varCo_Loader				=	@prm_Co_Loader
	set	@varisCOExists				=	@prm_isCOExists
	set	@varCO						=	@prm_CO
	set	@varDirect_Master			=	@prm_Direct_Master
	set	@varVessel					=	@prm_Vessel
	set	@varVoyage					=	@prm_Voyage
	set	@varPlace_of_Receipt		=	@prm_Place_of_Receipt
	set	@varPlace_of_Receipt_ETD	=	@prm_Place_of_Receipt_ETD
	set	@varPort_of_Loading			=	@prm_Port_of_Loading
	set	@varETD						=	@prm_ETD
	set	@varPlace_Of_Discharge		=	@prm_Place_Of_Discharge
	set	@varETA						=	@prm_ETA
	set	@varPlace_Of_Delivery       =	@prm_Place_Of_Delivery       
	set	@varPlace_Of_Delivery_ETA   =	@prm_Place_Of_Delivery_ETA   
	set	@varFinal_Destination		=	@prm_Final_Destination
	set	@varFinal_ETA				=	@prm_Final_ETA
	set	@varEmpty_Pickup			=	@prm_Empty_Pickup
	set	@varDelivery_ToPier			=	@prm_Delivery_ToPier
	set	@varFreight					=	@prm_Freight
	set	@varShip_Mode				=	@prm_Ship_Mode
	set	@varSVC_TermFrom			=	@prm_SVC_TermFrom
	set	@varSVC_TermTo				=	@prm_SVC_TermTo
	set	@varContainer_Qty			=	@prm_Container_Qty
	set	@varOBL_Type				=	@prm_OBL_Type
	set	@varDoc_Cut_Of_Date			=	@prm_Doc_Cut_Of_Date
	set	@varPost_cut_Of_Date		=	@prm_Post_cut_Of_Date
	set	@varRail_cut_Of_Date		=	@prm_Rail_cut_Of_Date
	set	@varBL_Cancelled			=	@prm_BL_Cancelled
	set	@varReasons_For_Cancel		=	@prm_Reasons_For_Cancel
	set	@varCancelled_By			=	@prm_Cancelled_By
	set	@varBussiness_Reffered_By	=	@prm_Bussiness_Reffered_By
	set	@varBooking_Agent			=	@prm_Booking_Agent
	set	@varFrt_Released			=	@prm_Frt_Released
	set	@varFrt_Released_Date		=   @prm_Frt_Released_Date 
	set	@varReleased_By				=	@prm_Released_By

IF @prm_DMLType = 'I' AND NOT EXISTS(SELECT 1 FROM dbo.tbl_MBL_Information WHERE	File_No	=	@varFile_No AND MBL_NO	=	@varMBL_NO)
BEGIN
	INSERT INTO dbo.tbl_MBL_Information(
		 File_No					
		,MBL_No					
		,Office					
		,BL_Type					
		,Post_Date				
		,Carrier_Bkg_No			
		,ITN_No					
		,Carrier					
		,BL_Acct_Carrier			
		,Shipping_Agent			
		,Oversea_Agent			
		,Notify					
		,Forwarding_Agent		
		,Co_Loader				
		,isCOExists				
		,CO						
		,Direct_Master			
		,Vessel					
		,Voyage					
		,Place_of_Receipt		
		,Place_of_Receipt_ETD	
		,Port_of_Loading			
		,ETD						
		,Place_Of_Discharge		
		,ETA						   
		,Place_Of_Delivery          
		,Place_Of_Delivery_ETA   
		,Final_Destination		
		,Final_ETA				
		,Empty_Pickup			
		,Delivery_ToPier			
		,Freight					
		,Ship_Mode				
		,SVC_TermFrom			
		,SVC_TermTo				
		,Container_Qty			
		,OBL_Type				
		,Doc_Cut_Of_Date			
		,Post_cut_Of_Date		
		,Rail_cut_Of_Date		
		,BL_Cancelled			
		,BL_Cancelled_Date		
		,Reasons_For_Cancel		
		,Cancelled_By			
		,Bussiness_Reffered_By	
		,Booking_Agent			
		,Frt_Released			
		,Frt_Released_Date		
		,Released_By				
		
		)
	VALUES(
		 @varFile_No					
		,@varMBL_No					
		,@varOffice					
		,@varBL_Type					
		,@varPost_Date				
		,@varCarrier_Bkg_No			
		,@varITN_No					
		,@varCarrier					
		,@varBL_Acct_Carrier			
		,@varShipping_Agent			
		,@varOversea_Agent			
		,@varNotify					
		,@varForwarding_Agent		
		,@varCo_Loader				
		,@varisCOExists				
		,@varCO						
		,@varDirect_Master			
		,@varVessel					
		,@varVoyage					
		,@varPlace_of_Receipt		
		,@varPlace_of_Receipt_ETD	
		,@varPort_of_Loading			
		,@varETD						
		,@varPlace_Of_Discharge		
		,@varETA						
		,@varPlace_Of_Delivery       
		,@varPlace_Of_Delivery_ETA   
		,@varFinal_Destination		
		,@varFinal_ETA				
		,@varEmpty_Pickup			
		,@varDelivery_ToPier			
		,@varFreight					
		,@varShip_Mode				
		,@varSVC_TermFrom			
		,@varSVC_TermTo				
		,@varContainer_Qty			
		,@varOBL_Type				
		,@varDoc_Cut_Of_Date			
		,@varPost_cut_Of_Date		
		,@varRail_cut_Of_Date		
		,@varBL_Cancelled			
		,@varBL_Cancelled_Date		
		,@varReasons_For_Cancel		
		,@varCancelled_By			
		,@varBussiness_Reffered_By	
		,@varBooking_Agent			
		,@varFrt_Released			
		,@varFrt_Released_Date		
		,@varReleased_By				
		)
END
ELSE IF @prm_DMLType ='U'
	 BEGIN
		UPDATE dbo.tbl_MBL_Information 
		SET  
			 Office						=	@varOffice					
			,BL_Type					=	@varBL_Type				
			,Post_Date					=	@varPost_Date				
			,Carrier_Bkg_No				=	@varCarrier_Bkg_No			
			,ITN_No						=	@varITN_No					
			,Carrier					=	@varCarrier				
			,BL_Acct_Carrier			=	@varBL_Acct_Carrier		
			,Shipping_Agent				=	@varShipping_Agent			
			,Oversea_Agent				=	@varOversea_Agent			
			,Notify						=	@varNotify					
			,Forwarding_Agent			=	@varForwarding_Agent		
			,Co_Loader					=	@varCo_Loader				
			,isCOExists					=	@varisCOExists				
			,CO							=	@varCO						
			,Direct_Master				=	@varDirect_Master			
			,Vessel						=	@varVessel					
			,Voyage						=	@varVoyage					
			,Place_of_Receipt			=	@varPlace_of_Receipt		
			,Place_of_Receipt_ETD		=	@varPlace_of_Receipt_ETD	
			,Port_of_Loading			=	@varPort_of_Loading		
			,ETD						=	@varETD					
			,Place_Of_Discharge			=	@varPlace_Of_Discharge		
			,ETA						=	@varETA					   
			,Place_Of_Delivery			=	@varPlace_Of_Delivery         
			,Place_Of_Delivery_ETA  	=	@varPlace_Of_Delivery_ETA  
			,Final_Destination			=	@varFinal_Destination		
			,Final_ETA					=	@varFinal_ETA				
			,Empty_Pickup				=	@varEmpty_Pickup			
			,Delivery_ToPier			=	@varDelivery_ToPier		
			,Freight					=	@varFreight				
			,Ship_Mode					=	@varShip_Mode				
			,SVC_TermFrom				=	@varSVC_TermFrom			
			,SVC_TermTo					=	@varSVC_TermTo				
			,Container_Qty				=	@varContainer_Qty			
			,OBL_Type					=	@varOBL_Type				
			,Doc_Cut_Of_Date			=	@varDoc_Cut_Of_Date		
			,Post_cut_Of_Date			=	@varPost_cut_Of_Date		
			,Rail_cut_Of_Date			=	@varRail_cut_Of_Date		
			,BL_Cancelled				=	@varBL_Cancelled			
			,BL_Cancelled_Date			=	@varBL_Cancelled_Date		
			,Reasons_For_Cancel			=	@varReasons_For_Cancel		
			,Cancelled_By				=	@varCancelled_By			
			,Bussiness_Reffered_By		=	@varBussiness_Reffered_By	
			,Booking_Agent				=	@varBooking_Agent			
			,Frt_Released				=	@varFrt_Released			
			,Frt_Released_Date			=	@varFrt_Released_Date		
			,Released_By				=	@varReleased_By			
		WHERE	File_No	=	@varFile_No
			AND MBL_NO	=	@varMBL_NO
		END
		 ELSE IF @prm_DMLType ='D'
			  BEGIN
				DELETE FROM dbo.tbl_MBL_Information 
				WHERE File_No	=	@varFile_No
				AND MBL_NO	=	@varMBL_NO
			 END
		 ELSE IF @prm_DMLType ='S'
			  BEGIN
				SELECT  File_No					
					   ,MBL_No					
					   ,Office					
					   ,BL_Type					
					   ,Post_Date				
					   ,Carrier_Bkg_No			
					   ,ITN_No					
					   ,Carrier					
					   ,BL_Acct_Carrier			
					   ,Shipping_Agent			
					   ,Oversea_Agent			
					   ,Notify					
					   ,Forwarding_Agent		
					   ,Co_Loader				
					   ,isCOExists				
					   ,CO						
					   ,Direct_Master			
					   ,Vessel					
					   ,Voyage					
					   ,Place_of_Receipt		
					   ,Place_of_Receipt_ETD	
					   ,Port_of_Loading			
					   ,ETD						
					   ,Place_Of_Discharge		
					   ,ETA						  
					   ,Place_Of_Delivery          
					   ,Place_Of_Delivery_ETA   
					   ,Final_Destination		
					   ,Final_ETA				
					   ,Empty_Pickup			
					   ,Delivery_ToPier			
					   ,Freight					
					   ,Ship_Mode				
					   ,SVC_TermFrom			
					   ,SVC_TermTo				
					   ,Container_Qty			
					   ,OBL_Type				
					   ,Doc_Cut_Of_Date			
					   ,Post_cut_Of_Date		
					   ,Rail_cut_Of_Date		
					   ,BL_Cancelled			
					   ,BL_Cancelled_Date		
					   ,Reasons_For_Cancel		
					   ,Cancelled_By			
					   ,Bussiness_Reffered_By	
					   ,Booking_Agent			
					   ,Frt_Released			
					   ,Frt_Released_Date		
					   ,Released_By	
				FROM dbo.tbl_MBL_Information 
				WHERE File_No	=	@varFile_No
				  AND MBL_NO	=	@varMBL_NO
			 END

END
GO