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
var react_redux_1 = require("react-redux");
var react_filterable_table_1 = require("react-filterable-table");
require("./filterabletable.css");
var react_1 = require("react");
var nativeShipments_1 = require("../../redux/actions/nativeShipments/nativeShipments");
var react_modal_1 = require("react-modal");
function NegativeShipment() {
    var localData = react_redux_1.useSelector(function (state) { return state.NativeShipments; });
    var _a = react_1.useState(false), modalIsOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState({}), rowData = _b[0], setRowData = _b[1];
    var _c = react_1.useState('View Records'), actionName = _c[0], setActionName = _c[1];
    var _d = react_1.useState({}), formData = _d[0], setFormData = _d[1];
    var _e = react_1.useState({}), formDataAdd = _e[0], setFormDataAdd = _e[1];
    var _f = react_1.useState(false), isEdit = _f[0], setIsEdit = _f[1];
    var _g = react_1.useState(false), isAdd = _g[0], setIsAdd = _g[1];
    var _h = react_1.useState(), department = _h[0], setDepartment = _h[1];
    var _j = react_1.useState(), fileNo = _j[0], setFileNo = _j[1];
    var _k = react_1.useState(), profit = _k[0], setProfit = _k[1];
    var _l = react_1.useState(), rowId = _l[0], setRowId = _l[1];
    var dispatch = react_redux_1.useDispatch();
    var PanelsDispatch = new nativeShipments_1.NativeShipmentDispatcher(dispatch);
    var customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px'
        }
    };
    react_1.useEffect(function () {
        PanelsDispatch.getAllNativeShipmentsData();
    }, []);
    var editRow = function (rowData) {
        setActionName('Edit Record');
        setDepartment(rowData.record.mawbNo);
        setFileNo(rowData.record.fileNo);
        setProfit(rowData.record.profit);
        setRowId(rowData.record.id);
        setIsEdit(true);
        setIsAdd(false);
        setFormData(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a["mawbNo"] = rowData.record.mawbNo, _a)));
        });
        setFormData(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a["fileNo"] = rowData.record.fileNo, _a)));
        });
        setFormData(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a["profit"] = rowData.record.profit, _a)));
        });
        setFormData(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a["id"] = rowData.record.id, _a)));
        });
    };
    var updateRow = function (e) {
        e.preventDefault();
        console.log("dkkd", formData);
        PanelsDispatch.updateNativeShipmentsData(formData);
        setIsEdit(false);
    }; //
    var addRow = function (e) {
        e.preventDefault();
        console.log("dkkd", formDataAdd);
        PanelsDispatch.AddNativeShipmentsData(formDataAdd);
        setIsEdit(false);
        setIsAdd(false);
        setFormDataAdd({});
    }; //
    var backAdd = function (e) {
        e.preventDefault();
        setActionName('View Records');
        setIsEdit(false);
        setIsAdd(false);
    };
    var backEdit = function (e) {
        e.preventDefault();
        setActionName('View Records');
        setIsEdit(false);
        setIsAdd(false);
    };
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
        setActionName('View Records');
    }
    var handleChange = function (event) {
        var name = event.target.name;
        var value = event.target.value;
        setFormData(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleChangeAdd = function (event) {
        var name = event.target.name;
        var value = event.target.value;
        setFormDataAdd(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a[name] = value, _a)));
        });
    };
    function deleteRecord(rowData) {
        setActionName('Delete Record');
        setIsOpen(true);
        setRowId(rowData.record.id);
        //setIsOpen(false); id
    }
    function addRecord() {
        setActionName('Add Record');
        setIsAdd(true);
        setIsEdit(false);
    }
    function confirmDelete(e) {
        e.preventDefault();
        setIsOpen(false);
        PanelsDispatch.deleteNativeShipmentRecord(rowId);
    }
    var fields = [
        { id: 'id', name: 'mawbNo', displayName: "MAWB Number", inputFilterable: false, exactFilterable: false, sortable: true },
        { id: 'id', name: 'fileNo', displayName: "File No", inputFilterable: false, exactFilterable: false, sortable: true },
        // { id:'id',name: 'mawbNo', displayName: "ETD", inputFilterable: false, exactFilterable: false, sortable: true },
        // { id:'id',name: 'mawbNo', displayName: "ETA", inputFilterable: false, exactFilterable: false, sortable: true },
        { id: 'id', name: 'createdBy', displayName: "Created By", inputFilterable: false, sortable: true },
        { id: 'id', name: 'profit', displayName: "Profit", inputFilterable: false, exactFilterable: false, sortable: true },
        // { id:'id',name: 'mawbNo', displayName: "No", inputFilterable: false, exactFilterable: false, sortable: true },
        {
            name: '', displayName: "Action", inputFilterable: false, exactFilterable: false, sortable: false,
            render: function (rowData) {
                return React.createElement(React.Fragment, null,
                    React.createElement("div", null,
                        React.createElement("span", { onClick: function () {
                                editRow(rowData);
                            } },
                            React.createElement("img", { style: { height: '20px', width: '30px', cursor: 'pointer' }, src: '../src/assets/edit.svg' })),
                        React.createElement("span", { onClick: function () {
                                deleteRecord(rowData);
                            } },
                            React.createElement("img", { style: { height: '20px', width: '30px', cursor: 'pointer' }, src: '../src/assets/trash.svg' }))));
            }
        }
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(react_modal_1["default"], { isOpen: modalIsOpen, onAfterOpen: afterOpenModal, onRequestClose: closeModal, style: customStyles, contentLabel: "Example Modal", overlayClassName: "Overlay" },
                    React.createElement("form", { style: { textAlign: 'center' } },
                        React.createElement("div", { className: '' },
                            React.createElement("div", { className: '' },
                                React.createElement("h3", null, "Are you sure you want delete this record?"),
                                React.createElement("button", { className: "btn-login", onClick: function () { confirmDelete(event); } }, "Yes"),
                                React.createElement("button", { className: "btn-login", style: { marginLeft: '10px', backgroundColor: '#1a213d' }, onClick: function () { closeModal(); } }, "No")))))),
            React.createElement("div", { className: "table-card" },
                React.createElement("div", { className: "title-card" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6 title row" },
                            React.createElement("div", null,
                                React.createElement("span", { className: "title-text" }, "NEGATIVE PROFIT SHIPMENTS"),
                                React.createElement("span", { className: "info-text" }, actionName))),
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("div", { style: { float: 'right' } },
                                React.createElement("button", { className: 'refresh' }, "Refresh"))))),
                !isEdit ? React.createElement("div", null, !isAdd ? React.createElement("div", null,
                    React.createElement("div", { style: { float: 'left' } },
                        "Add New Record",
                        React.createElement("span", { onClick: function () {
                                addRecord();
                            } },
                            React.createElement("img", { style: { height: '20px', width: '30px', cursor: 'pointer' }, src: '../src/assets/add-circle-svgrepo-com.svg' }))),
                    React.createElement(react_filterable_table_1["default"], { namespace: "People", initialSort: "name", data: localData.data, fields: fields, noRecordsMessage: "There are no people to display", noFilteredRecordsMessage: "No people match your filters!", showHeaderFilters: false, pageSize: 10, pagesizes: 10, pagersVisible: true, topPagerVisible: false }),
                    " ") : React.createElement(React.Fragment, null,
                    React.createElement("form", { style: { padding: '30px' } },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "exampleInputEmail1" }, "MAWB Number"),
                                    React.createElement("input", { type: "text", className: "form-control", id: "exampleInputEmail1", name: "mawbNo", value: (formDataAdd === null || formDataAdd === void 0 ? void 0 : formDataAdd.mawbNo) || '', "aria-describedby": "emailHelp", placeholder: "Department Name", defaultValue: department, onChange: handleChangeAdd }))),
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "exampleInputEmail1" }, "File No."),
                                    React.createElement("input", { type: "text", className: "form-control", id: "exampleInputEmail1", name: "fileNo", value: (formDataAdd === null || formDataAdd === void 0 ? void 0 : formDataAdd.fileNo) || '', "aria-describedby": "emailHelp", placeholder: "File No.", defaultValue: fileNo, onChange: handleChangeAdd })))),
                        React.createElement("div", { className: "row", style: { paddingTop: '30px' } },
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "exampleInputEmail1" }, "Profit"),
                                    React.createElement("input", { type: "number", className: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Profit", name: "profit", value: (formDataAdd === null || formDataAdd === void 0 ? void 0 : formDataAdd.profit) || '', defaultValue: profit, onChange: handleChangeAdd }))),
                            React.createElement("div", { className: "col-md-6" })),
                        React.createElement("div", { style: { float: 'right' } },
                            React.createElement("button", { type: "submit", className: "btn-login", style: { marginTop: "20px", marginRight: '10px' }, onClick: function () { return addRow(event); } }, "Submit"),
                            React.createElement("button", { type: "submit", className: "btn-login", style: { marginLeft: '20px', marginTop: "20px" }, onClick: function () { return backAdd(event); } }, "Back"))))) : React.createElement(React.Fragment, null,
                    React.createElement("form", { style: { padding: '30px' } },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "exampleInputEmail1" }, "MAWB Number"),
                                    React.createElement("input", { type: "text", className: "form-control", id: "exampleInputEmail1", name: "mawbNo", value: (formData === null || formData === void 0 ? void 0 : formData.mawbNo) || '', "aria-describedby": "emailHelp", placeholder: "Department Name", defaultValue: department, onChange: handleChange }))),
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "exampleInputEmail1" }, "File No."),
                                    React.createElement("input", { type: "text", className: "form-control", id: "exampleInputEmail1", name: "fileNo", value: (formData === null || formData === void 0 ? void 0 : formData.fileNo) || '', "aria-describedby": "emailHelp", placeholder: "File No.", defaultValue: fileNo, onChange: handleChange })))),
                        React.createElement("div", { className: "row", style: { paddingTop: '30px' } },
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "exampleInputEmail1" }, "Profit"),
                                    React.createElement("input", { type: "number", className: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Profit", name: "profit", value: (formData === null || formData === void 0 ? void 0 : formData.profit) || '', defaultValue: profit, onChange: handleChange }))),
                            React.createElement("div", { className: "col-md-6" })),
                        React.createElement("div", { style: { float: 'right' } },
                            React.createElement("button", { type: "submit", className: "btn-login", style: { marginRight: '10px', marginTop: "20px" }, onClick: function () { return updateRow(event); } }, "Submit"),
                            React.createElement("button", { type: "submit", className: "btn-login", style: { marginTop: "20px" }, onClick: function () { return backEdit(event); } }, "Back"))))))));
}
exports["default"] = NegativeShipment;
