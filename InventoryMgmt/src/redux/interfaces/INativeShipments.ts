// export interface IInitialShipments {
//   Shipments: IShipments
// }
// interface IShipment {
//       id:number,
//       departmentName:any,
//       fileNo:any,
//       mawbNo:any,
//       edt:any,
//       eta:any,
//       profit:any
//       createdBy:string,
//       createdDate:string,
//       modifiedBy:any,
//       modifiedDate:any
// }
// export interface IShipments {
//     data:Array<IShipment>
//     }


export interface IShipment {
  id?:any,
  departmentName?:any,
  fileNo?:any,
  mawbNo?:any,
  edt?:any,
  eta?:any,
  profit?:any
  createdBy?:string,
  createdDate?:string,
  modifiedBy?:any,
  modifiedDate?:any
  }
  
  export interface ShipmentDataResponse{
      data: IShipment[]
  }