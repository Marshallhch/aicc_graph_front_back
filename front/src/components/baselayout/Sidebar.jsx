import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Icons } from '../../assets/icons';
import { MdOutlineClose } from 'react-icons/md';
import { MENU_LISTS, routes } from '../../constants/menuLists';

const Sidebar = () => {
  return (
    <div className="bg-gray-950 py-5 px-4 shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] flex flex-col rounded-sm z-[1000] fixed h-full">
      <div className="sidebar-top flex justify-between items-center">
        <div className="sidebar-brand flex items-center gap-x-[12px]">
          <span className="brand-logo bg-blue-600 rounded-md w-8 h-8 flex place-content-center">
            <img src={Icons.LogoWhite} alt="" className="w-6" />
          </span>
          <span className="text-lg font-semibold text-white">AICC</span>
        </div>
        <button className="bg-white text-black p-[0.125rem] rounded-sm hover:bg-gray-300">
          <MdOutlineClose />
        </button>
      </div>

      <div className="sidebar-body">
        <BrowserRouter>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </Routes>

          <div className="sidebar-menu">
            <ul className="menu-lists">
              {MENU_LISTS.map((menu, idx) => (
                <li key={idx} className="menu-item">
                  <Link to={routes[idx].path}>
                    <span>
                      <img src={menu.icon} alt={menu.alt} />
                    </span>
                    <span>{menu.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Sidebar;
