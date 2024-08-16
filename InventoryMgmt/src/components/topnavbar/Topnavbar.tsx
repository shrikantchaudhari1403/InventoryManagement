
import './topnavbar.css'

function Topnavbar(props:any){

  return( <>
  <div>
  <div className="modal" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  <nav className="navbar navbar-expand-lg navbar-light nav-container">
            <a className="navbar-brand" href="#">LOGO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li>
                <img className= "notification" src={'../src/assets/notification.svg'} />

                {/* <img src="./../assets/profile.png" alt="Avatar" className="avatar"/> */}
                </li>
                <li>
                <img className= "avatar" src={'../src/assets/profile.png'} />
                <span className='avatarName'>Hardcore</span>
                {/* <img src="./../assets/profile.png" alt="Avatar" className="avatar"/> */}
                </li>
                <li className="nav-item active"
                onClick={()=>{
                  props.logoutUser()
                }}
                >
                  <button className="btn-login ml-2 mrl">Logout</button>

                </li>
                <li className="nav-item">

                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li> */}
              </ul>
            </div>
    </nav>
  </div>

  </>)
}
export default Topnavbar;
