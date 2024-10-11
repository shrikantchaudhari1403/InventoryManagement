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
var react_1 = require("react");
var react_select_1 = require("react-select");
require("./index.css");
var Menu = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_select_1.components.Menu, __assign({}, props),
            react_1["default"].createElement("div", null,
                props.selectProps.fetchingData ? (react_1["default"].createElement("span", { className: "fetching" }, "Fetching data...")) : (react_1["default"].createElement("div", null, props.children)),
                react_1["default"].createElement("button", { className: "change-data", onClick: props.selectProps.changeOptionsData }, "Change data")))));
};
var Option = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_select_1.components.Option, __assign({}, props),
            react_1["default"].createElement("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                } },
                react_1["default"].createElement("div", null, props.children),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("button", { onClick: function (e) {
                            e.stopPropagation();
                            console.log("Edit clicked: ", props.data.id);
                        } }, "Edit"),
                    react_1["default"].createElement("button", { onClick: function (e) {
                            e.stopPropagation();
                            console.log("Delete clicked: ", props.data.id);
                        } }, "Delete"))))));
};
var CustomSelect = function (_a) {
    var options = _a.options, changeOptionsData = _a.changeOptionsData, fetchingData = _a.fetchingData, onChange = _a.onChange, value = _a.value, name = _a.name;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_select_1["default"], { name: name, options: options, components: { Menu: Menu }, fetchingData: fetchingData, changeOptionsData: changeOptionsData, onChange: onChange, value: value })));
};
exports["default"] = CustomSelect;
