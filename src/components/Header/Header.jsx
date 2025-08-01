import logo from '../../assets/Logo Icon 1.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Our Project</a></li>
                    <li><a>About us</a></li>
                    </ul>
                </div>
                <div className='flex'>
                    <img src={logo} alt="" />
                    <a className="btn btn-ghost text-3xl">Enver</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Our Project</a></li>
                    <li><a>About us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="hidden sm:inline-block w-[157px] h-[44px] border text-center py-2">Contact us</a>
            </div>
        </div>
    );
};

export default Header;