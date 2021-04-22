import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTiktok,
  faTwitch,
  faTwitter,
  faWeibo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faDownload,
  faDungeon,
} from "@fortawesome/free-solid-svg-icons";

import "./news.css";
import newsFrame from "../../assets/img/clubcrest2.jpg";
import jg from "../../assets/img/jg.jpg";
import everton from "../../assets/img/everton.png";
import arsenal from "../../assets/img/arsenal-1.png";
import sky from "../../assets/img/sky.png";
import slavia from "../../assets/img/slaviaprague.png";

function News() {
  const socials = [
    { icon: faFacebook, href: "https://addidas.co.uk/football" },
    { icon: faTwitter, href: "https://addidas.co.uk/football" },
    { icon: faSnapchat, href: "https://addidas.co.uk/football" },
    { icon: faInstagram, href: "https://addidas.co.uk/football" },
    { icon: faDungeon, href: "https://addidas.co.uk/football" },
    { icon: faYoutube, href: "https://addidas.co.uk/football" },
    { icon: faWeibo, href: "https://addidas.co.uk/football" },
    { icon: faTwitch, href: "https://addidas.co.uk/football" },
    { icon: faTiktok, href: "https://addidas.co.uk/football" },
  ];
  return (
    <section>
      <div className="news-container">
        <div className="news">
          <div className="section-title">Thomas partey</div>

          <div className="section-news">
            <div className="footer-top"></div>
            <div className="news-highlight">
              <div className="frame">
                <img src={newsFrame} alt="frame" />
              </div>
              <div className="frame-details">
                <div className="frame-title">
                  Thomas Partey on Ghana, Atletico and Arsenal | Big Interview
                </div>
                <div className="frame-highlight">
                  We sit down for an in-depth chat with our midfielder as he
                  discusses his career path, from leaving Ghana to adapting to
                  Spanish football
                </div>
              </div>
            </div>

            <div className="excerpt">
              <div className="excerpt-frame">
                <div className="footer-top"></div>
                <div className="excerpt-image">
                  <img src={newsFrame} alt="img" />
                </div>
                <div className="excerpt-details">
                  <div className="excerpt-hint">Video</div>
                  <div className="excerpt-title">
                    In Focus: Thomas Partey v Sheffield United (a)
                  </div>
                </div>
              </div>
              <div className="excerpt-frame">
                <div className="footer-top"></div>
                <div className="excerpt-focus">
                  <img src={jg} alt="jg" />
                </div>
                <div className="excerpt-community">
                  <FontAwesomeIcon icon={faInstagram} />
                  <div className="excerpt-url">
                    <a href="https://addidas.co.uk/football">arsenal</a>
                  </div>
                </div>
              </div>
              <div className="excerpt-frame">
                <div className="footer-top"></div>
                <div className="excerpt-image">
                  <img src={jg} alt="img" />
                </div>
                <div className="excerpt-details">
                  <div className="excerpt-hint">Video</div>
                  <div className="excerpt-title">
                    Being Ghanaian is a privilege, it is a family'
                  </div>
                </div>
              </div>
            </div>
            <div className="see-more">
              <div className="line"></div>
              <div className="see-more-text"> Thomas Partey - see more</div>
              <div className="line"></div>
            </div>
          </div>
        </div>

        <div className="fixtures">
          <div className="footer-top"></div>
          <div className="schedule">
            <div className="watchlist">
              <div className="date-venue">
                fri Apr 23 - 20:00 | Emirates Stadium
              </div>
              <div className="station">
                <div className="sport">
                  <img src={sky} alt="skysport" />
                </div>
                Premier League
              </div>
            </div>
            <div className="divider-fixtures"></div>
            <div className="competition">
              <div className="home">
                <div className="team">
                  <img src={arsenal} alt="home" />
                </div>
                Arsenal
              </div>
              <div className="vs">V</div>
              <div className="home">
                <div className="team">
                  <img src={everton} alt="away" />
                </div>
                Everton
              </div>
            </div>
            <div className="divider-fixtures"></div>
            <div className="fixtures-info">
              <div className="info">news & video</div>
              <div className="info">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="info">tickets</div>
              <div className="info">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

          <div className="calender">
            sync fixtures to calender <FontAwesomeIcon icon={faDownload} />
          </div>

          <div className="footer-top"></div>
          <div className="previous">
            <div className="recent">
              <div className="recent-info">
                <div className="date-venue">Thu Apr 15 - 20:00</div>
                <div className="league">Europa league</div>
              </div>
              <div className="loc">A</div>
            </div>
            <div className="competition">
              <div className="team">
                <img src={slavia} alt="opponent" />
              </div>
              <div className="team-name">Slavia Prague</div>
              <div className="result">
                <div className="result-a">0</div>-
                <div className="result-h">4</div>
              </div>
            </div>
            <div className="divider-recent"></div>
            <div className="recents-info">
              news & video <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="social">
            <div className="social-title">Follow us</div>
            <div className="socials">
              <div className="handles">
                <div className="handle">
                  {socials.map((social, i) => (
                    <a href={social.href} key={i}>
                      <FontAwesomeIcon
                        icon={social.icon}
                        size="2x"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
