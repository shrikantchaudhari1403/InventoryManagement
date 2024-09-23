"use strict";
exports.__esModule = true;
exports.router = void 0;
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("../components/home/Home");
var Dashboard_1 = require("../components/dashboard/Dashboard");
var Settings_1 = require("../components/settings/Settings");
var Login_1 = require("../components/login/Login");
var layout_1 = require("../components/layout");
var NegativeShipment_1 = require("../components/negativeShipment/NegativeShipment");
var NewShipment_1 = require("../components/negativeShipment/NewShipment");
exports.router = react_router_dom_1.createBrowserRouter([
    {
        element: React.createElement(React.Fragment, null,
            React.createElement(layout_1["default"], null),
            " ",
            React.createElement(react_router_dom_1.Outlet, null)),
        children: [
            { path: '/', element: React.createElement(layout_1["default"], null) },
            { path: '/home', element: React.createElement(Home_1["default"], null) },
            { path: '/login', element: React.createElement(Login_1["default"], null) },
            { path: '/dashboard', element: React.createElement(Dashboard_1["default"], null) },
            { path: '/settings', element: React.createElement(Settings_1["default"], null) },
            { path: '/negative-shipment', element: React.createElement(NegativeShipment_1["default"], null) },
            { path: '/new-shipment', element: React.createElement(NewShipment_1["default"], null) }
        ]
    },
]);
