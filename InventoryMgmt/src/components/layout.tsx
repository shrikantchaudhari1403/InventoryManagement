import Leftsidebar from "./leftsidebar/Leftsidebar";
import Topnavbar from "./topnavbar/Topnavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../redux/reducers/UserLogin";
import { UserDataReuestModel } from "../shared/request/login";
import { LOGIN } from "../redux/types";
import { UserLoginDispatcher } from "../redux/actions/login/userLogin";
import { toast } from "react-toastify";

const Layout = () => {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [collapsableSidebar, setCollapsableSidebar] = useState(false);
  const dispatch = useDispatch();
  const PanelsDispatch = new UserLoginDispatcher(dispatch);
  const authResponse = useSelector((state: any) => state.authResponse);
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setForData] = useState<UserDataReuestModel>({});
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

  const updateSidebarState = () => {
    console.log("jdjd==========");
    setCollapsableSidebar(!collapsableSidebar);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setForData((values) => ({ ...values, [name]: value }));
  };

  const updateLogin = (e: any) => {
    e.preventDefault();
    PanelsDispatch.userLoginRequest(formData);
  };

  const logoutUser = () => {
    toast.success("Logging Out..");
    navigate("/");
    setIsLogedIn(false);
    setIsOpen(true);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("token");
    dispatch({ type: LOGIN.LOGIN_SUCCESS, payload: {} });
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      {isLogedIn == true ? (
        <Leftsidebar  />
      ) : (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
          >
            <h3 className="modalTitle">Sign In</h3>
            <form method="POST" encType="multipart/form-data">
              <input
                type="text"
                className="modalInput"
                name="Email"
                value={formData?.Email || ""}
                onChange={handleChange}
                placeholder=" User name"
              />
              <input
                className="modalInput mt-3"
                type="password"
                name="Password"
                value={formData.Password || ""}
                onChange={handleChange}
                placeholder=" Password"
              />
              <div className="row mt-3">
                <div className="col-3">
                  <button
                    className="btn-login ml-2"
                    onClick={() => updateLogin(event)}
                  >
                    Login
                  </button>
                </div>
                <div className="col-4 mt-3">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="remember-me"
                  />
                  <label htmlFor="vehicle1">Remember</label>
                </div>
                <div className="col-5 mt-3">
                  <a>Fogot password?</a>
                </div>
              </div>
            </form>
          </Modal>
        </div>
      )}
      <div className="home_content">
        {/* <Topnavbar updateLogin={updateLogin} logoutUser={logoutUser} isLogedIn={isLogedIn} /> */}
        <Topnavbar
          logoutUser={logoutUser}
          isLogedIn={isLogedIn}
          updateSidebarState={updateSidebarState}
        />
      </div>
    </div>
  );
};
export default Layout;
