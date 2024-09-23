

import { useEffect, useState } from 'react';
import './Leftsidebar.css'
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Leftsidebar(props: any) {
  const { pathname } = useLocation();
  const [isShow, setIsShow] = useState(false);

  const [isActiveNav, setIsActive] = useState(false)
  const navigate = useNavigate();
  const openCollapsableToggle = () => {
    setIsActive(!isActiveNav)
  }
  const naviagetTo = (value:any)=>{
    navigate(value)
  }
  useEffect(()=>{
    if(pathname == '/new-shipment')
    {
      setIsActive(true)
    }
  },[])

  useEffect(() => {
    var sidebar = document.querySelector(".sidebar");
    sidebar?.addEventListener("mouseover", (e) => {
      setIsShow(true)
    });
    sidebar?.addEventListener("mouseleave", (e) => {
      setIsShow(false)
    })

  }, [])



  return (<>
    <div>
      <div className={!isShow ? "sidebar" : "sidebar active"} id='test'>
        {isShow ?
          <div>
            <div className={pathname == '/home' ? 'logo-container-active' : "logo-container"} onClick={()=>{naviagetTo('/home')}}>
              <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/home.svg'} />
              <span>Dashboard</span></div>
            <div id="accordion">
              <div className="card">
                <div className="logo-container" id="headingOne" onClick={() => { openCollapsableToggle() }}>
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/stats.svg'} />
                  <span>Ocean Import</span>
                  {!isActiveNav ? <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} /> : <img className="dropdown-arrow" src={'../../../src/assets/dropdownarrow.svg'} />}
                </div>
                <div id="collapseOne" className={`collapse${isActiveNav ? 'show' : ""}`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'} onClick={()=>{naviagetTo('/new-shipment')}}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/flight.svg'} />
                  <span>Air Import</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/flight.svg'} />
                  <span>Air Export</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/truck.svg'} />
                  <span>Truck</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/stats.svg'} />
                  <span>Misc</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/warehouse.svg'} />
                  <span>Warehouse</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/business.svg'} />
                  <span>Accounting</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/stats.svg'} />
                  <span>Sales</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/partner.svg'} />
                  <span>Trade Partner</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/edit.svg'} />
                  <span>Report</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/links.svg'} />
                  <span>Security Filing</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/setting.svg'} />
                  <span>Settings</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/links.svg'} />
                  <span>Useful Links</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="logo-container" id="headingOne">
                  <img style={{ height: '17px', width: '17px', cursor: 'pointer', margin: '0px 10px 10px 0px' }} src={'../../../src/assets/edit.svg'} />
                  <span>Import Shipment</span>
                  <img className="arrow-left" src={'../../../src/assets/left-arrow.svg'} />
                </div>
                <div id="collapseOne" className={`collapse`} aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <div className={pathname == '/new-shipment' ? 'logo-container-active' : 'logo-container'}>New shipment</div>
                    <div className='logo-container'>My shipment List</div>
                    <div className='logo-container'>Master B/L List</div>
                    <div className='logo-container'>House B/L List</div>
                    <div className='logo-container'>My Containers</div>
                    <div className='logo-container'>EDI History</div>
                  </div>
                </div>
              </div>


            </div>

          </div>
          :
          <ul className="nav_list">
            <li className={pathname == '/home' ? 'active' : ""}>
              <Link to="/home">
                <img className='li-item' src={'../src/assets/home.svg'} />
              </Link>
            </li>
            <li className={pathname == '/dashboard' ? 'active' : ""}>
              <Link to={'/dashboard'} >
                <img className='li-item' src={'../src/assets/stats.svg'} />
              </Link>
            </li>
            <li className={pathname == '/negative-shipment' ? 'active' : ""}>
              <Link to={'/negative-shipment'} >
                <img className='li-item' src={'../../../src/assets/flight.svg'} />
              </Link>
            </li>
            <li className={pathname == '/settings' ? 'active' : ""}>
              <Link to={'/settings'} >
                <img className='li-item' src={'../../../src/assets/flight.svg'} />
              </Link>
            </li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/truck.svg'} />
              </Link>
            </li>
            <li>
              <Link to="">
                <img className='li-item' src={'../src/assets/setting.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/warehouse.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/business.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../src/assets/stats.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/partner.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/edit.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/links.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/partner.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/edit.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/links.svg'} />
              </Link></li>
              <li>
              <Link to="">
                <img className='li-item' src={'../src/assets/setting.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/warehouse.svg'} />
              </Link></li>
            <li>
              <Link to="">
                <img className='li-item' src={'../../../src/assets/business.svg'} />
              </Link></li>
          </ul>}

      </div>
    </div>
  </>)
}
export default Leftsidebar;
