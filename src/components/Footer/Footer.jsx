import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="justify-between footer sm:footer-horizontal bg-gray-500 text-white p-10">
                <nav>
                    <h6 className="footer-title flex items-center">
                        <img className='w-[40px] mr-2' src={logo} alt="" /> HERO.IO
                    </h6>
                </nav>

                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">

                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M18.244 2H21.5l-7.5 8.57L22 22h-5.78l-4.52-6.01L6.4 22H3.14l7.9-9.02L2 2h5.92l4.06 5.48L18.24 2zm-1.01 18h1.6L7.89 4H6.2l11.03 16z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.98h4.52V24H.24V8.98zM8.6 8.98h4.33v2.05h.06c.6-1.13 2.07-2.32 4.27-2.32 4.56 0 5.4 3 5.4 6.9V24h-4.52v-7.6c0-1.81-.03-4.15-2.53-4.15-2.53 0-2.92 1.98-2.92 4.02V24H8.6V8.98z" />
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M9 8H6v4h3v12h5V12h3.6l.4-4H14V6.33C14 5.38 14.19 5 15.12 5H18V0h-3.81C10.6 0 9 1.58 9 4.61V8z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>

            <nav className="footer sm:footer-horizontal footer-center bg-gray-700 text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </nav>
        </div>
    );
};

export default Footer;
