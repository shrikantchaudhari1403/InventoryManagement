import Leftsidebar from "./leftsidebar/Leftsidebar"
import Topnavbar from "./topnavbar/Topnavbar"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const Layout = () => {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") == "true") {
      setIsLogedIn(true)
    }
    else{
      setIsLogedIn(false)
    }

  }, [localStorage.getItem("isAuthenticated")])

  const updateLogin = () => {
    setIsLogedIn(true)
    setIsOpen(false)
     localStorage.setItem("isAuthenticated", "true")
     setTimeout(function(){
      navigate('/home')
      setIsOpen(false)
    },0.100);
    ;

  }
  const logoutUser = () => {
    navigate('/');
    setIsLogedIn(false)
    setIsOpen(true)
    localStorage.removeItem("isAuthenticated")
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'400px'

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

      {isLogedIn == true ? <Leftsidebar /> :
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
        <form>
          <input className='modalInput' placeholder=' User name'/>
          <input className='modalInput mt-3' type="password" placeholder=' Password'/>
          <div className='row mt-3'>
            <div className='col-3'>
            <button className="btn-login ml-2" type="submit" onClick={(e)=>{e.preventDefault ,updateLogin()}}>Login</button>
            </div>
            <div className='col-4 mt-3'>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="remember-me"/>
            <label htmlFor="vehicle1">Remember</label>
            </div>
            <div className='col-5 mt-3'>
              <a>Fogot password?</a>
            </div>
          </div>
        </form>
      </Modal>
      </div>
      }
      <div className="home_content">
        <Topnavbar updateLogin={updateLogin} logoutUser={logoutUser} isLogedIn={isLogedIn} />
      </div>

    </div>
  )

}
export default Layout
