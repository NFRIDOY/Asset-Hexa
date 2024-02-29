import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 mt-0 bg-emerald-50 text-base-content">
                <aside>
                    <img className="w-32 h-16" src={logo} alt="logo" />
                    <p>Finance & Accounting Services.<br />Providing reliable tech since 2023</p>
                </aside>
                <nav>
                    <header className="footer-title text-black">Services</header>
                    <Link to="/dashboard/overView" className="link link-hover">Money management</Link>
                    <Link to="/dashboard/overView" className="link link-hover">Accounting</Link>
                    <Link to="/dashboard/overView" className="link link-hover">Income & Expense </Link>
                    <Link to="/dashboard/overView" className="link link-hover">Finance</Link>
                </nav>
                <nav>
                    <header className="footer-title text-black">Company</header>
                    <Link to="/About" className="link link-hover">About us</Link>
                    <Link to="/about" className="link link-hover">Contact</Link>
                    <Link to="/dashboard/overView" className="link link-hover">Services</Link>
                    <Link to="/about" className="link link-hover">Social</Link>
                </nav>
                <nav>
                    <header className="footer-title text-black">Legal</header>
                    <Link to="/HelpDesk" className="link link-hover">Terms of use</Link>
                    <Link to="/HelpDesk" className="link link-hover">Privacy policy</Link>
                    <Link to="/HelpDesk" className="link link-hover">Cookie policy</Link>
                    <Link to="/HelpDesk" className="link link-hover">Security</Link>
                </nav>
            </footer>
            <footer className="footer footer-center  p-4 bg-emerald-100 text-base-content">
                <aside>
                   <p>Copyright © 2024 - All right reserved by Asset Hexa Ltd || <Link to={"/About"}>Developed By Hexa Scriptors™</Link></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
