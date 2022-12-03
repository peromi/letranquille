import React from "react";
import { data } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

function HomeContainer({ children }) {
    const [showmenu, setShowmenu] = React.useState(false);

    React.useEffect(() => {
        document.getElementById("tidio-chat").style.display = "block"
        document.getElementById("tidio-chat-code").style.display = "block"
        const script = document.createElement('script');
      
        script.src = "//code.tidio.co/pobhvmnpeedkipkjry5ua9i5dkdjmxsd.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div className="flex flex-col">
            <div className="fixed top-0 left-0 right-0 flex justify-between pr-2 pl-2 md:pl-[160px] md:pr-[160px] pb-2 pt-2 items-center bg-white ">
                <div className="w-[183px]">
                    <img src={data.longlogo} className="w-[120px]" />
                </div>

                <ul className="hidden md:flex md:gap-x-[35px] md:font-bold  md:block">
                    <li className="hover:text-red-600">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-red-600">
                        <Link to="/story">Stories</Link>
                    </li>
                    <li className="hover:text-red-600">
                        <Link to="/membership">Membership</Link>
                    </li>
                    <li className="hover:text-red-600">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-red-600">
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>

                <div className="md:gap-x-[24px] md:flex md:w-[183px] md:font-bold md:justify-end hidden md:block">
                    <Link to="/register" className="hover:text-red-600">
                        Sign Up
                    </Link>
                    <Link to="/login" className="hover:text-red-600">
                        Login
                    </Link>
                </div>
                <button
                    onClick={() => {
                        setShowmenu(!showmenu);
                    }}
                    className="md:hidden hover:text-yellow-600 text-red-800"
                >
                    {showmenu == true ? (
                        <i className="fi fi-rr-cross text-2xl text-red-800"></i>
                    ) : (
                        <i className="fi fi-rr-menu-burger text-2xl text-red-800"></i>
                    )}
                </button>
            </div>
            {showmenu && (
                <div className="flex flex-col fixed md:hidden left-0 right-0 top-0 bg-white h-[100%] z-50">
                    <div className="mt-[80px] flex flex-col justify-start items-center flex-1 ">
                        <ul className=" flex flex-col items-center gap-y-3   text-2xl font-bold">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/story">Story</Link>
                            <Link to="/membership">Membership</Link>
                            <Link to="/contact-us">Contact Us</Link>
                        </ul>
                        <div className="w-[34px] h-[3px]  bg-black rounded-full my-6" />
                        <ul className="flex flex-col items-center gap-y-3   text-2xl font-bold">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Sign Up</Link>
                        </ul>
                    </div>
                </div>
            )}
            <div>{children}</div>

            <div className="mt-20" />
            <div className=" pl-6 h-[58px] bg-red-600 flex justify-between items-center text-white">
                <p>Copyright &copy; 2022. All rights reserved</p>

                <div className="flex justify-center items-center gap-x-[34px]">
                    <ul className="hidden md:flex md:gap-[12px] md:font-bold">
                        <Link to="/community-guideline">
                            Community Guideline
                        </Link>
                        <Link to="/dating-safety">Dating Safety</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/refund-policy">Refund Policy</Link>
                        <Link to="/terms-of-use">Terms of use</Link>
                        <Link to="/cookie-policy">Cookie Policy</Link>
                    </ul>
                    <ul className="flex gap-x-[12px] pr-6">
                        <li>
                            <i className="fi fi-brands-instagram"></i>
                        </li>
                        <li>
                            <i className="fi fi-brands-facebook"></i>
                        </li>
                        <li>
                            <i className="fi fi-brands-twitter"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomeContainer;
