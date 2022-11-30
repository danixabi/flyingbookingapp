import "./NavBar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">SoleraBooking.com</span>
          <div className="navItems">
            <button type="button" class="btn btn-primary">
              <a href="/Register">Register</a>
            </button>
            <button type="button" class="btn btn-primary">
              <a href="/Login">Login</a>
            </button>
          </div>
        </div>
      </div>
      <div className="navPages">
        <button type="button" class="btn btn-primary">
          <a href="/">Home</a>{" "}
        </button>
        <button type="button" class="btn btn-primary">
          <a href="/Flights">Flights</a>
        </button>

        <button type="button" class="btn btn-primary">
          <a href="/MyFlights">My Flights</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
