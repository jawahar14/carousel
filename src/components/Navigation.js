import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light bg-light w-100'>
        <div className='container-fluid af-max-width'>
          <a href='/' className='navbar-brand af-brand-font py-0 my-0'>
            <i className='fa fa-bullseye text-danger mr-2'></i>
            Luigi's Pizza
          </a>
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-toggle='collapse'
            data-target='#navbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse collapse af-center-items'
            id='navbar'
          >
            <ul className='d-flex af-center-items navbar-nav text-uppercase mx-auto'>
              <li className='nav-item'>
                <a href='/' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='/locations' className='nav-link'>
                  Locations
                </a>
              </li>
              <li className='nav-item'>
                <a href='/menu' className='nav-link'>
                  Menu
                </a>
              </li>
              <li className='nav-item'>
                <a href='/contact' className='nav-link'>
                  Contact
                </a>
              </li>
              <li className='nav-item'>
                <a href='/about' className='nav-link'>
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
