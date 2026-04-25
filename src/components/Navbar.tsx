import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">Lisa Mega Watts</div>
      <div className="navbar-right">
        <input id="nav-toggle" type="checkbox" />
        <label htmlFor="nav-toggle" className="hamburger">
          <span />
          <span />
          <span />
        </label>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
      </div>
    </nav>
  );
}