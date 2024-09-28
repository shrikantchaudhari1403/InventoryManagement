
INSERT INTO dbo.tbl_MBL_Information (File_No,MBL_No,Office,BL_Type,Post_Date,Carrier_Bkg_No,ITN_No,Carrier,BL_Acct_Carrier,Shipping_Agent,Oversea_Agent,Notify,Forwarding_Agent,Co_Loader,isCOExists,CO
,Direct_Master,Vessel,Voyage,Place_of_Receipt,Place_of_Receipt_ETD,Port_of_Loading,ETD,Place_Of_Discharge,ETA,Place_Of_Delivery,Place_Of_Delivery_ETA,Final_Destination,Final_ETA,Empty_Pickup,Delivery_ToPier
,Freight,Ship_Mode,SVC_TermFrom,SVC_TermTo,Container_Qty,OBL_Type,Doc_Cut_Of_Date,Post_cut_Of_Date,Rail_cut_Of_Date,BL_Cancelled,BL_Cancelled_Date,Reasons_For_Cancel,Cancelled_By,Bussiness_Reffered_By
,Booking_Agent,Frt_Released,Frt_Released_Date,Released_By)
VALUES('F001', 'MBL001', 'NY', 'Export', '2024-09-01', 'CBK001', 'ITN001', 'Carrier A', 'Carrier A Acct',     'Shipping Agent A', 'Oversea Agent A', 'Notify A', 'Forwarding Agent A', 'Co-Loader A', 0, 'CO A', 
    1, 'Vessel A', 'Voyage A', 'Place A', '2024-09-02', 'Port A', '2024-09-03', 'Discharge A',     '2024-09-04', 'Delivery A', '2024-09-05', 'Destination A', '2024-09-06', 'Empty Pickup A', 
    'Delivery Pier A', 'Freight A', 'Ship Mode A', 'SVC1', 'SVC2', 10, 'OBL Type A',     '2024-08-30', '2024-08-29', '2024-08-28', 0, NULL, 'Reason A', 'Cancelled By A', 'Referred By A',     0, 0, NULL, 'Released By A')

	

INSERT INTO dbo.tbl_MBL_Information (File_No,MBL_No,Office,BL_Type,Post_Date,Carrier_Bkg_No,ITN_No,Carrier,BL_Acct_Carrier,Shipping_Agent,Oversea_Agent,Notify,Forwarding_Agent,Co_Loader,isCOExists,CO
,Direct_Master,Vessel,Voyage,Place_of_Receipt,Place_of_Receipt_ETD,Port_of_Loading,ETD,Place_Of_Discharge,ETA,Place_Of_Delivery,Place_Of_Delivery_ETA,Final_Destination,Final_ETA,Empty_Pickup,Delivery_ToPier
,Freight,Ship_Mode,SVC_TermFrom,SVC_TermTo,Container_Qty,OBL_Type,Doc_Cut_Of_Date,Post_cut_Of_Date,Rail_cut_Of_Date,BL_Cancelled,BL_Cancelled_Date,Reasons_For_Cancel,Cancelled_By,Bussiness_Reffered_By
,Booking_Agent,Frt_Released,Frt_Released_Date,Released_By)
VALUES('F002', 'MBL002', 'LA', 'Export', '2024-09-02', 'CBK002', 'ITN002', 'Carrier B', 'Carrier B Acct',     'Shipping Agent B', 'Oversea Agent B', 'Notify B', 'Forwarding Agent B', 'Co-Loader B', 1, 'CO B', 
    1, 'Vessel B', 'Voyage B', 'Place B', '2024-09-03', 'Port B', '2024-09-04', 'Discharge B',     '2024-09-05', 'Delivery B', '2024-09-06', 'Destination B', '2024-09-07', 'Empty Pickup B', 
    'Delivery Pier B', 'Freight B', 'Ship Mode B', 'SVC1', 'SVC2', 15, 'OBL Type B',     '2024-08-31', '2024-08-30', '2024-08-29', 1, '2024-09-01', 'Reason B', 'Cancelled By B', 'Referred By B',    1, 1, '2024-09-02', 'Released By B'),

 ('F003', 'MBL003', 'SF', 'Import', '2024-09-03', 'CBK003', 'ITN003', 'Carrier C', 'Carrier C Acct',     'Shipping Agent C', 'Oversea Agent C', 'Notify C', 'Forwarding Agent C', 'Co-Loader C', 0, 'CO C',   0, 'Vessel C', 'Voyage C', 'Place C', '2024-09-04', 'Port C', '2024-09-05', 'Discharge C',     '2024-09-06', 'Delivery C', '2024-09-07', 'Destination C', '2024-09-08', 'Empty Pickup C', 
    'Delivery Pier C', 'Freight C', 'Ship Mode C', 'SVC1', 'SVC2', 20, 'OBL Type C',     '2024-09-01', '2024-08-31', '2024-08-30', 0, NULL, 'Reason C', 'Cancelled By C', 'Referred By C',     0, 0, NULL, 'Released By C')


INSERT INTO dbo.tbl_MBL_Information (File_No,MBL_No,Office,BL_Type,Post_Date,Carrier_Bkg_No,ITN_No,Carrier,BL_Acct_Carrier,Shipping_Agent,Oversea_Agent,Notify,Forwarding_Agent,Co_Loader,isCOExists,CO
,Direct_Master,Vessel,Voyage,Place_of_Receipt,Place_of_Receipt_ETD,Port_of_Loading,ETD,Place_Of_Discharge,ETA,Place_Of_Delivery,Place_Of_Delivery_ETA,Final_Destination,Final_ETA,Empty_Pickup,Delivery_ToPier
,Freight,Ship_Mode,SVC_TermFrom,SVC_TermTo,Container_Qty,OBL_Type,Doc_Cut_Of_Date,Post_cut_Of_Date,Rail_cut_Of_Date,BL_Cancelled,BL_Cancelled_Date,Reasons_For_Cancel,Cancelled_By,Bussiness_Reffered_By
,Booking_Agent,Frt_Released,Frt_Released_Date,Released_By)
 VALUES ('F004', 'MBL004', 'CHI', 'Export', '2024-09-04', 'CBK004', 'ITN004', 'Carrier D', 'Carrier D Acct',     'Shipping Agent D', 'Oversea Agent D', 'Notify D', 'Forwarding Agent D', 'Co-Loader D', 1, 'CO D', 
    1, 'Vessel D', 'Voyage D', 'Place D', '2024-09-05', 'Port D', '2024-09-06', 'Discharge D',     '2024-09-07', 'Delivery D', '2024-09-08', 'Destination D', '2024-09-09', 'Empty Pickup D', 
    'Delivery Pier D', 'Freight D', 'Ship Mode D', 'SVC1', 'SVC2', 5, 'OBL Type D',     '2024-09-02', '2024-09-01', '2024-08-31', 0, NULL, 'Reason D', 'Cancelled By D', 'Referred By D',     0, 0, NULL, 'Released By D')


INSERT INTO dbo.tbl_MBL_Information (File_No,MBL_No,Office,BL_Type,Post_Date,Carrier_Bkg_No,ITN_No,Carrier,BL_Acct_Carrier,Shipping_Agent,Oversea_Agent,Notify,Forwarding_Agent,Co_Loader,isCOExists,CO
,Direct_Master,Vessel,Voyage,Place_of_Receipt,Place_of_Receipt_ETD,Port_of_Loading,ETD,Place_Of_Discharge,ETA,Place_Of_Delivery,Place_Of_Delivery_ETA,Final_Destination,Final_ETA,Empty_Pickup,Delivery_ToPier
,Freight,Ship_Mode,SVC_TermFrom,SVC_TermTo,Container_Qty,OBL_Type,Doc_Cut_Of_Date,Post_cut_Of_Date,Rail_cut_Of_Date,BL_Cancelled,BL_Cancelled_Date,Reasons_For_Cancel,Cancelled_By,Bussiness_Reffered_By
,Booking_Agent,Frt_Released,Frt_Released_Date,Released_By)
VALUES    ('F005', 'MBL005', 'MIA', 'Import', '2024-09-05', 'CBK005', 'ITN005', 'Carrier E', 'Carrier E Acct',     'Shipping Agent E', 'Oversea Agent E', 'Notify E', 'Forwarding Agent E', 'Co-Loader E', 0, 'CO E', 
    0, 'Vessel E', 'Voyage E', 'Place E', '2024-09-06', 'Port E', '2024-09-07', 'Discharge E',     '2024-09-08', 'Delivery E', '2024-09-09', 'Destination E', '2024-09-10', 'Empty Pickup E', 
    'Delivery Pier E', 'Freight E', 'Ship Mode E', 'SVC1', 'SVC2', 8, 'OBL Type E',     '2024-09-03', '2024-09-02', '2024-09-01', 1, '2024-09-04', 'Reason E', 'Cancelled By E', 'Referred By E',     1, 1, '2024-09-05', 'Released By E')


