"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
require("./topnavbar.css");
var react_1 = require("react");
function Topnavbar(props) {
    var response = react_redux_1.useSelector(function (state) { return state.authResponse; });
    var _a = react_1.useState(''), fullName = _a[0], setFullName = _a[1];
    // console.log('for full name'+ authResponse);
    react_1.useEffect(function () {
        var _a;
        setFullName(JSON.stringify((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.fullName));
    }, [response]);
    var openNav = function () {
        props.updateSidebarState();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("div", { className: "modal", role: "dialog" },
                React.createElement("div", { className: "modal-dialog", role: "document" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h5", { className: "modal-title" }, "Modal title"),
                            React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                                React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("p", null, "Modal body text goes here.")),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { type: "button", className: "btn btn-primary" }, "Save changes"),
                            React.createElement("button", { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" }, "Close"))))),
            React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light nav-container" },
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("span", { className: "navbar-toggler-icon" })),
                React.createElement("div", null),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("ul", { className: "navbar-nav mr-auto" },
                        React.createElement("li", null,
                            React.createElement("img", { className: "notification", src: '../src/assets/notification.svg' })),
                        React.createElement("li", null,
                            React.createElement("img", { className: "avatar", src: '../src/assets/profile.png' }),
                            React.createElement("span", { className: 'avatarName' }, fullName !== null && fullName !== void 0 ? fullName : '')),
                        React.createElement("li", { className: "nav-item", onClick: function () {
                                props.logoutUser();
                            } },
                            React.createElement("button", { className: "btn-login ml-2" }, "Logout")),
                        React.createElement("li", { className: "nav-item" })))))));
}
exports["default"] = Topnavbar;
