

import { useState } from 'react';
import './Leftsidebar.css'
import { Link, useLocation } from 'react-router-dom';
function Leftsidebar(props: any) {
  const { pathname } = useLocation();
  const [isShow,setIsShow] = useState(false)

  const openCollapsableToggle = ()=>{
    setIsShow(!isShow)
  }

  const openNav = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle('active');
  }
  return (<>
    <div>
      <div className="sidebar">
      {/* <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">

                    <p className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={()=>{openCollapsableToggle()}}>
                      Collapsible Group Item #1
                    </p>

                </div>
                <div id="collapseOne" className={`collapse${isShow ? 'show':""}`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                   <ul>
                     <li><Link to={'/new-shipment'}>New Shipment</Link></li>
                   </ul>
                  </div>
                </div>
              </div>

            </div> */}
        <ul className="nav_list mt-4">

          <li className={pathname == '/home' ? 'active' :""}>
              <Link to="/home">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/home.svg'} />
              </Link>

              </li>
            <li className={pathname == '/dashboard' ? 'active' :""}>
            <Link to={'/dashboard'} >
            <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/stats.svg'} />
             </Link>
            </li>
            <li className={pathname == '/negative-shipment' ? 'active' :""}>
            <Link to={'/negative-shipment'} >
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/calender.svg'} />
              </Link>
              </li>

            <li className={pathname == '/settings' ? 'active' :""}>
            <Link to={'/settings'} >
            <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/setting.svg'} />
            </Link>
              </li>

            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/stats.svg'} />
              </Link></li>
            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/setting.svg'} />
              </Link></li>
            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/stats.svg'} />
              </Link></li>
            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/calender.svg'} />
              </Link></li>
            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/setting.svg'} />
              </Link></li>
            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/stats.svg'} />
              </Link></li>
            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/calender.svg'} />
              </Link></li>
            <li>
            <Link to="">
              <img style={{ height: '20px', width: '30px', cursor: 'pointer' }} src={'../src/assets/setting.svg'} />
              </Link></li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src="https://lh3.googleusercontent.com/a-/AOh14GjvKOdrR_Z-N4oaIqPg10NRav_6D9tiKWHNFXXftQ=s288-p-rw-no" alt="" />
              <div className="name_job">
                <div className="name">Serif Sadi Senkule</div>
                <div className="job">Software Developer</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default Leftsidebar;
