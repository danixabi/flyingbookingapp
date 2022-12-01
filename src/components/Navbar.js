import "./NavBar.css";

const Navbar = (props) => {


  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BPBooking.com</span>
        <div className="navItems">
          <button onClick={props.goHome} className="navButton">Home</button>
          <button onClick={props.bookingCheckHandler} className="navButton">MyBookings</button>
          <button onClick={props.logOut} className="navButton">LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
