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
var Leftsidebar_1 = require("./leftsidebar/Leftsidebar");
var Topnavbar_1 = require("./topnavbar/Topnavbar");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_modal_1 = require("react-modal");
var react_redux_1 = require("react-redux");
var types_1 = require("../redux/types");
var userLogin_1 = require("../redux/actions/login/userLogin");
var react_toastify_1 = require("react-toastify");
var Layout = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(true), isLogedIn = _a[0], setIsLogedIn = _a[1];
    var _b = react_1.useState(false), modalIsOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState(false), collapsableSidebar = _c[0], setCollapsableSidebar = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var PanelsDispatch = new userLogin_1.UserLoginDispatcher(dispatch);
    var authResponse = react_redux_1.useSelector(function (state) { return state.authResponse; });
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    var _d = react_1.useState({}), formData = _d[0], setForData = _d[1];
    // useEffect(() => {
    //   if (sessionStorage.getItem("isAuthenticated") == "true") {
    //     setTimeout(function () {
    //       navigate("/home");
    //       setIsOpen(false);
    //       setIsLogedIn(true);
    //     }, 0.1);
    //   } else {
    //     setIsLogedIn(false);
    //   }
    // }, [authResponse]);
    var updateSidebarState = function () {
        console.log("jdjd==========");
        setCollapsableSidebar(!collapsableSidebar);
    };
    var handleChange = function (event) {
        var name = event.target.name;
        var value = event.target.value;
        setForData(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a[name] = value, _a)));
        });
    };
    var updateLogin = function (e) {
        e.preventDefault();
        PanelsDispatch.userLoginRequest(formData);
    };
    var logoutUser = function () {
        react_toastify_1.toast.success("Logging Out..");
        navigate("/");
        setIsLogedIn(false);
        setIsOpen(true);
        sessionStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("token");
        dispatch({ type: types_1.LOGIN.LOGIN_SUCCESS, payload: {} });
    };
    var customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px"
        }
    };
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (React.createElement("div", null,
        isLogedIn == true ? (React.createElement(Leftsidebar_1["default"], null)) : (React.createElement("div", null,
            React.createElement(react_modal_1["default"], { isOpen: modalIsOpen, onAfterOpen: afterOpenModal, onRequestClose: closeModal, style: customStyles, contentLabel: "Example Modal", overlayClassName: "Overlay" },
                React.createElement("h3", { className: "modalTitle" }, "Sign In"),
                React.createElement("form", { method: "POST", encType: "multipart/form-data" },
                    React.createElement("input", { type: "text", className: "modalInput", name: "Email", value: (formData === null || formData === void 0 ? void 0 : formData.Email) || "", onChange: handleChange, placeholder: " User name" }),
                    React.createElement("input", { className: "modalInput mt-3", type: "password", name: "Password", value: formData.Password || "", onChange: handleChange, placeholder: " Password" }),
                    React.createElement("div", { className: "row mt-3" },
                        React.createElement("div", { className: "col-3" },
                            React.createElement("button", { className: "btn-login ml-2", onClick: function () { return updateLogin(event); } }, "Login")),
                        React.createElement("div", { className: "col-4 mt-3" },
                            React.createElement("input", { type: "checkbox", id: "vehicle1", name: "vehicle1", value: "remember-me" }),
                            React.createElement("label", { htmlFor: "vehicle1" }, "Remember")),
                        React.createElement("div", { className: "col-5 mt-3" },
                            React.createElement("a", null, "Fogot password?"))))))),
        React.createElement("div", { className: "home_content" },
            React.createElement(Topnavbar_1["default"], { logoutUser: logoutUser, isLogedIn: isLogedIn, updateSidebarState: updateSidebarState }))));
};
exports["default"] = Layout;
