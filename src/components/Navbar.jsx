import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <nav className="flex justify-between items-center bg-black text-white p-4">
        <h1 className="text-2xl cursor-pointer"><Link to="/">Company Logo</Link></h1>
        <ul className="flex gap-6 uppercase">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       </nav>
    </div>
  )
}

export default Navbar