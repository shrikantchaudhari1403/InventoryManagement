"use strict";
exports.__esModule = true;
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./routes/routes");
var react_redux_1 = require("react-redux");
var configureStore_1 = require("./redux/store/configureStore");
var store = configureStore_1["default"]();
function App(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_redux_1.Provider, { store: store },
            React.createElement("div", null,
                React.createElement("div", { className: 'containers' },
                    React.createElement(react_router_dom_1.RouterProvider, { router: routes_1.router }))))));
}
exports["default"] = App;
