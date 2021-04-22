import { Link } from "react-router-dom";

import adidas from "../../assets/img/adidas.png";
import rwander from "../../assets/img/visit-rwanda.png";
import emirates from "../../assets/img/emirates.png";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-top"></div>
      <div className="footer-section">
        <div className="sponsors">
          <div className="top-sponsor">
            <a href="https://addidas.co.uk/football">
              <img src={adidas} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={emirates} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={rwander} alt="adidas" />
            </a>
          </div>
          <div className="patner">
            <a href="https://addidas.co.uk/football">
              <img src={adidas} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={emirates} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={rwander} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={adidas} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={emirates} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={rwander} alt="adidas" />
            </a>
          </div>
          <div className="affiliate">
            <a href="https://addidas.co.uk/football">
              <img src={adidas} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={emirates} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={rwander} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={adidas} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={emirates} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={rwander} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={adidas} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={emirates} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={rwander} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={adidas} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={emirates} alt="adidas" />
            </a>
            <a href="https://addidas.co.uk/football">
              <img src={rwander} alt="adidas" />
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-links">
          <Link to="#">Terms of use</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Cookie policy </Link>
          <Link to="#">Website accessibility statement</Link>
          <Link to="#">Inviqa</Link>
          <Link to="#">Phase2</Link>
          <Link to="#">Ostmoderm</Link>
          <Link to="#">Website feedback</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
