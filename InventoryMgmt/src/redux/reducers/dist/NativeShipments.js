"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.NativeShipments = void 0;
var index_1 = require("../types/index");
var initialState = {
    data: [
        {
            "id": 1,
            "departmentName": null,
            "fileNo": "qwqaa",
            "mawbNo": "aqqaa",
            "edt": null,
            "eta": null,
            "profit": "122",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "departmentName": null,
            "fileNo": "wewewe",
            "mawbNo": "sdsdsds",
            "edt": null,
            "eta": null,
            "profit": "232",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 1,
            "departmentName": null,
            "fileNo": "qwqaa",
            "mawbNo": "aqqaa",
            "edt": null,
            "eta": null,
            "profit": "122",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "departmentName": null,
            "fileNo": "wewewe",
            "mawbNo": "sdsdsds",
            "edt": null,
            "eta": null,
            "profit": "232",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 1,
            "departmentName": null,
            "fileNo": "qwqaa",
            "mawbNo": "aqqaa",
            "edt": null,
            "eta": null,
            "profit": "122",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "departmentName": null,
            "fileNo": "wewewe",
            "mawbNo": "sdsdsds",
            "edt": null,
            "eta": null,
            "profit": "232",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 1,
            "departmentName": null,
            "fileNo": "qwqaa",
            "mawbNo": "aqqaa",
            "edt": null,
            "eta": null,
            "profit": "122",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "departmentName": null,
            "fileNo": "wewewe",
            "mawbNo": "sdsdsds",
            "edt": null,
            "eta": null,
            "profit": "232",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 1,
            "departmentName": null,
            "fileNo": "qwqaa",
            "mawbNo": "aqqaa",
            "edt": null,
            "eta": null,
            "profit": "122",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "departmentName": null,
            "fileNo": "wewewe",
            "mawbNo": "sdsdsds",
            "edt": null,
            "eta": null,
            "profit": "232",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 1,
            "departmentName": null,
            "fileNo": "qwqaa",
            "mawbNo": "aqqaa",
            "edt": null,
            "eta": null,
            "profit": "122",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "departmentName": null,
            "fileNo": "wewewe",
            "mawbNo": "sdsdsds",
            "edt": null,
            "eta": null,
            "profit": "232",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 1,
            "departmentName": null,
            "fileNo": "qwqaa",
            "mawbNo": "aqqaa",
            "edt": null,
            "eta": null,
            "profit": "122",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "departmentName": null,
            "fileNo": "wewewe",
            "mawbNo": "sdsdsds",
            "edt": null,
            "eta": null,
            "profit": "232",
            "createdBy": "admin",
            "createdDate": "2024-08-04T15:40:10.687",
            "modifiedBy": null,
            "modifiedDate": null
        }
    ]
};
exports.NativeShipments = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case index_1.SHIPMENTS.GET_ALL_SHIPMENTS:
            return __assign(__assign({}, state), { data: action.payload.data });
        default:
            return state;
    }
};
