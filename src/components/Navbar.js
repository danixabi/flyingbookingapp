import "./NavBar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">SoleraBooking.com</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
      <div className="navPages">
        <button className="navPageButton">Home</button>
        <button className="navPageButton">Flights</button>
        <button className="navPageButton">Contact</button>
        <button className="navPageButton">My Flights</button>
      </div>
    </div>
  );
};

export default Navbar;
