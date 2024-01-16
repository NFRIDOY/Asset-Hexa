import logo from "../assets/logo/logo.png"


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 mt-5 bg-base-200 text-base-content">
                <aside>
                    <img className="h-16" src={logo} alt="" />
                    <p>Finance & Accounting Services.<br />Providing reliable tech since 2023</p>
                </aside>
                <nav>
                    <header className="footer-title text-black">Services</header>
                    <a className="link link-hover">Accounting</a>
                    <a className="link link-hover">income & expense </a>
                    <a className="link link-hover">Finance</a>
                    
                </nav>
                <nav>
                    <header className="footer-title text-black">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Services</a>
                    
                </nav>
                <nav>
                    <header className="footer-title text-black">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center  p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Finance & Accounting Services Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;