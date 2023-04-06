import React, { useEffect, useState, useRef } from 'react';
import logo from './logo-coffee.png';
import './NavBar.css';
import { MenuItems } from './MenuItems';

const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.class} fill={props.fill} width={props.width} height={props.height} viewBox="0 0 24 24">
    <path d="M4 18a.968.968 0 0 1-.713-.288A.964.964 0 0 1 3 17c0-.283.096-.521.288-.713A.964.964 0 0 1 4 16h16c.283 0 .521.096.713.288.192.192.288.43.287.712a.968.968 0 0 1-.288.713A.964.964 0 0 1 20 18H4Zm0-5a.968.968 0 0 1-.713-.288A.964.964 0 0 1 3 12c0-.283.096-.521.288-.713A.964.964 0 0 1 4 11h16c.283 0 .521.096.713.288.192.192.288.43.287.712a.968.968 0 0 1-.288.713A.964.964 0 0 1 20 13H4Zm0-5a.968.968 0 0 1-.713-.288A.964.964 0 0 1 3 7c0-.283.096-.521.288-.713A.964.964 0 0 1 4 6h16c.283 0 .521.096.713.288.192.192.288.43.287.712a.968.968 0 0 1-.288.713A.964.964 0 0 1 20 8H4Z" />
  </svg>
)

const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.class} fill={props.fill} width={props.width} height={props.height} viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M18.707 6.707a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293Z" clip-rule="evenodd" />
  </svg>
)

function NavBar() {

  const [iconClicked, changeIcon] = useState(false);

  let sideMenuRef = useRef();

  const MenuOnClick = () => (

    <div className={`side-menu ${iconClicked ? 'active' : 'inactive'}`} ref={sideMenuRef}>
      <ul>{MenuItems.map((item, index) => { return <li key={index}> <a class={item.class} href={item.url}>{item.title} </a></li> })}</ul>
    </div>
  )

  useEffect(() => {
    let handler = (e) => {
      if (!sideMenuRef.current.contains(e.target)) {
        changeIcon(false);
      }
    };

    document.addEventListener("mousedown", handler);

  });

  return (

    <div id="nav-parent"><nav id='nav'>
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          {MenuItems.map((item, index) => {
            return (<li key={index}>
              <a className={item.class} href={item.url}> {item.title}</a>
            </li>)
          })}


        </ul>
      </div>
      <button>
        Book a Table
      </button>
      <div className='menu-icon-div' >

        <div onClick={() => changeIcon(!iconClicked)}  >

          {iconClicked ? <CloseIcon fill="#fff" width="30px" height="30px" /> : <MenuIcon fill="#fff" width="30px" height="30px" />}
        </div>
        <MenuOnClick />
      </div>


    </nav></div>



  );
}
export default NavBar;