import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const links = <>
 <Link to ='/'> <li className='mr-4 work-sans text-xl text-[#13131380]'>Home</li></Link>
 <Link to ='/listedBooks'> <li className='mr-4 work-sans text-xl text-[#13131380]'>Listed Books</li></Link>
 <Link to ='/bookPages'> <li className='mr-4 work-sans text-xl text-[#13131380]'>Pages to Read</li></Link>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
            </ul>
          </div>
          <Link to='/' className=" text-3xl font-bold text-[#131313] work-sans">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
        <Link to=''><button className="btn bg-[#23BE0A] text-white">Sign in</button></Link>
        <Link to=''><button className="btn bg-[#59C6D2] text-white">Sign Up</button></Link>
        </div>
      </div>
    );
};

export default Navbar;