
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import Logo from '../Assets/2020 logo copywhite.png';

import './style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row1">
        <div className="col1">
          <img src={Logo} className="logooo" alt="EldoPets Logo" />
          <p>
          Image Chef Studios is a premier photography company capturing life's precious moments with artistry and passion. With a team of skilled photographers and state-of-the-art equipment, we specialize in creating stunning visual narratives that turn memories into timeless treasures. From weddings to portraits, events to landscapes, our dedication to excellence and creativity shines through in every frame we capture. Let us be the storytellers of your cherished memories, preserving them with utmost care and creativity.
          </p>
        </div>
        <div className="col1">
          <h3>
            Location
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>0100</p>
          <p>Upper Hill</p>
          <p>Nairobi, Kenya</p>
          <p className="email-id">imagechef@outlook.com</p>
          <h4>+254 - 729929832</h4>
        </div>
        <div className="col1">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/available">Gallery</Link>
            </li>
            <li>
              <Link to="/pre-reserve">About us</Link>
            </li>
            <li>
              <Link to="/about">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col1">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            <EmailIcon className="fa-solid fa-envelope"/>
            <input type="email" placeholder="Enter your email id" required />
            <button type="submit">
              <SendIcon className="fa-solid fa-arrow-right-long" />
            </button>
          </form>
          <div className="social-icons">
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <WhatsAppIcon className="icon" />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Image_Chef-Studios &copy; {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
