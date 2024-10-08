INSERT INTO dbo.tbl_HBL_Information 
(
	File_No, MBL_No, HBL_No, Booking_No, ITN_No, Customer_Ref_No, Document_No, Quotation_No,
	Actual_Shipper, Customer, Bill_To, Consignee, Notify, Customs_Broker, Trucker, HBL_Agent,
	Sales, Sub_Agent_BL, Place_Of_Receipt, Place_Of_Receipt_ETD, Port_Of_Discharge, ETA,
	Place_Of_Delivery, Place_Of_Delivery_ETA, Final_Destination, Final_ETA, FBA_FC, Empty_Pickup,
	Delivery_ToPier, Cargo_Ready_Date, Cargo_Pickup, Ship_Mode, Buying_Freight, Selling_Fright,
	Service_Term, Container_Qty, Express_BL, Cargo_Type, sales_Type, WH_Cut_Off_Date, 
	Early_Return_Date, LC_No, LC_ISSUE_Bank, LC_ISSUE_Date, Onboard, Stackable, Hold, 
	Frt_Released, Released_By, BL_Cancelled, Cancelled_By, Reason_For_Cancel
)
VALUES
-- Test Value 1
(
	'FN001', 'MBL001', 'HBL001', 'BK001', 'ITN001', 'CRN001', 'DOC001', 'QN001',
	'Shipper A', 'Customer A', 'Bill To A', 'Consignee A', 'Notify A', 'Broker A', 'Trucker A', 'Agent A',
	'Sales A', 0, 'Los Angeles', '2024-09-15 10:00:00', 'Shanghai', '2024-10-01 15:00:00',
	'New York', '2024-10-10 12:00:00', 'Chicago', '2024-10-15 14:00:00', 'FBA01', 'Pickup A',
	'Pier A', '2024-09-10 08:00:00', 'Pickup A', 'Air', 'Freight A', 'Freight A',
	'Term A', 10, 1, 'Type A', 'Type A', '2024-09-14 18:00:00',
	'2024-09-13 16:00:00', 'LC001', 'Bank A', '2024-09-05 09:00:00', '2024-09-16 14:00:00', 
	0, 0, '2024-09-17 12:00:00', 'Released A', '2024-09-20 15:00:00', 'Cancelled A', 'Reason A'
) 
---- Test Value 2
INSERT INTO dbo.tbl_HBL_Information 
(
	File_No, MBL_No, HBL_No, Booking_No, ITN_No, Customer_Ref_No, Document_No, Quotation_No,
	Actual_Shipper, Customer, Bill_To, Consignee, Notify, Customs_Broker, Trucker, HBL_Agent,
	Sales, Sub_Agent_BL, Place_Of_Receipt, Place_Of_Receipt_ETD, Port_Of_Discharge, ETA,
	Place_Of_Delivery, Place_Of_Delivery_ETA, Final_Destination, Final_ETA, FBA_FC, Empty_Pickup,
	Delivery_ToPier, Cargo_Ready_Date, Cargo_Pickup, Ship_Mode, Buying_Freight, Selling_Fright,
	Service_Term, Container_Qty, Express_BL, Cargo_Type, sales_Type, WH_Cut_Off_Date, 
	Early_Return_Date, LC_No, LC_ISSUE_Bank, LC_ISSUE_Date, Onboard, Stackable, Hold, 
	Frt_Released, Released_By, BL_Cancelled, Cancelled_By, Reason_For_Cancel
)
values
(
	'FN002', 'MBL002', 'HBL002', 'BK002', 'ITN002', 'CRN002', 'DOC002', 'QN002',
	'Shipper B', 'Customer B', 'Bill To B', 'Consignee B', 'Notify B', 'Broker B', 'Trucker B', 'Agent B',
	'Sales B', 0, 'Long Beach', '2024-09-16 10:00:00', 'Hong Kong', '2024-10-02 15:00:00',
	'Los Angeles', '2024-10-11 12:00:00', 'San Francisco', '2024-10-16 14:00:00', 'FBA02', 'Pickup B',
	'Pier B', '2024-09-11 08:00:00', 'Pickup B', 'Sea', 'Freight B', 'Freight B',
	'Term B', 20, 0, 'Type B', 'Type B', '2024-09-15 18:00:00',
	'2024-09-14 16:00:00', 'LC002', 'Bank B', '2024-09-06 09:00:00', '2024-09-17 14:00:00', 
	1, 0, '2024-09-18 12:00:00', 'Released B', '2024-09-21 15:00:00', 'Cancelled B', 'Reason B'
),

-- Test Value 3
(
	'FN003', 'MBL003', 'HBL003', 'BK003', 'ITN003', 'CRN003', 'DOC003', 'QN003',
	'Shipper C', 'Customer C', 'Bill To C', 'Consignee C', 'Notify C', 'Broker C', 'Trucker C', 'Agent C',
	'Sales C', 1, 'Miami', '2024-09-17 10:00:00', 'Yantian', '2024-10-03 15:00:00',
	'Savannah', '2024-10-12 12:00:00', 'Atlanta', '2024-10-17 14:00:00', 'FBA03', 'Pickup C',
	'Pier C', '2024-09-12 08:00:00', 'Pickup C', 'Rail', 'Freight C', 'Freight C',
	'Term C', 15, 0, 'Type C', 'Type C', '2024-09-16 18:00:00',
	'2024-09-15 16:00:00', 'LC003', 'Bank C', '2024-09-07 09:00:00', '2024-09-18 14:00:00', 
	0, 1, '2024-09-19 12:00:00', 'Released C', '2024-09-22 15:00:00', 'Cancelled C', 'Reason C'
),

-- Test Value 4
(
	'FN004', 'MBL004', 'HBL004', 'BK004', 'ITN004', 'CRN004', 'DOC004', 'QN004',
	'Shipper D', 'Customer D', 'Bill To D', 'Consignee D', 'Notify D', 'Broker D', 'Trucker D', 'Agent D',
	'Sales D', 0, 'Seattle', '2024-09-18 10:00:00', 'Kaohsiung', '2024-10-04 15:00:00',
	'Portland', '2024-10-13 12:00:00', 'Tacoma', '2024-10-18 14:00:00', 'FBA04', 'Pickup D',
	'Pier D', '2024-09-13 08:00:00', 'Pickup D', 'Truck', 'Freight D', 'Freight D',
	'Term D', 8, 1, 'Type D', 'Type D', '2024-09-17 18:00:00',
	'2024-09-16 16:00:00', 'LC004', 'Bank D', '2024-09-08 09:00:00', '2024-09-19 14:00:00', 
	0, 0, '2024-09-20 12:00:00', 'Released D', '2024-09-23 15:00:00', 'Cancelled D', 'Reason D'
),

-- Test Value 5
(
	'FN005', 'MBL005', 'HBL005', 'BK005', 'ITN005', 'CRN005', 'DOC005', 'QN005',
	'Shipper E', 'Customer E', 'Bill To E', 'Consignee E', 'Notify E', 'Broker E', 'Trucker E', 'Agent E',
	'Sales E', 0, 'Houston', '2024-09-19 10:00:00', 'Busan', '2024-10-05 15:00:00',
	'New Orleans', '2024-10-14 12:00:00', 'Dallas', '2024-10-19 14:00:00', 'FBA05', 'Pickup E',
	'Pier E', '2024-09-14 08:00:00', 'Pickup E', 'Sea', 'Freight E', 'Freight E',
	'Term E', 12, 0, 'Type E', 'Type E', '2024-09-18 18:00:00',
	'2024-09-17 16:00:00', 'LC005', 'Bank E', '2024-09-09 09:00:00', '2024-09-20 14:00:00', 
	1, 0, '2024-09-21 12:00:00', 'Released E', '2024-09-24 15:00:00', 'Cancelled E', 'Reason E'
)


 --select * from dbo.tbl_HBL_Information5 