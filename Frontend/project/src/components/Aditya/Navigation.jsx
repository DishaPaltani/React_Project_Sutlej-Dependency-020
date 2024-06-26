import './css-compo/Navigation.css';
import {FiHeart} from 'react-icons/fi';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";


const Navigation = ({ handleInputChange, query }) => {
    return (
      <nav>
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your wine."
          />
        </div>
        {/* <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div> */}
      </nav>
    );
  };


export default Navigation;
