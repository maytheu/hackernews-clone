import React from "react";
import { Link } from "react-router-dom";

import jg from "../../assets/img/jg.jpg";
import logo from "../../assets/img/clubcrest2.jpg";
import loan from "../../assets/img/Willock_14.jpg";
import jg3 from "../../assets/img/jg3.jpg";

function Trending() {
  const excerpt = [
    {
      img: logo,
      hint: "club annoucement",
      headline: "An open lette to our fans",
    },
    { img: loan, hint: "news", headline: "Loan watch" },
    {
      img: jg3,
      hint: "news",
      headline: "Arsenal to play ranges in commorative",
    },
  ];
  return (
    <section>
      <div className="news-container">
        <div className="news">
          <div className="section-title">Trending</div>

          <div className="section-news">
            <div className="footer-top"></div>
            <div className="news-highlights">
              <Link to="/news/team-news-lacazette-odegaard-aubamayang">
                <div className="highlight">
                  <div className="news-image">
                    <img src={jg} alt="headline" />
                  </div>
                  <div className="news-headlines">
                    <div className="headlines-title">Team News</div>
                    <div className="headlines">
                      Team news: Lacazette, Odegaard, Aubamayang
                    </div>
                    <div className="headlines-detail">
                      Find out the latst from our medical team ahead of Friday's
                      Premier League match against Everton
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="excerpt">
            {excerpt.map((news, i) => (
              <div className="excerpt-news" key={i}>
                <div className="footer-top"></div>
                <div className="excerpt-news-image">
                  <img src={news.img} alt={news.img} />
                </div>
                <div className="excerpt-details">
                  <div className="excerpt-hint">{news.hint}</div>
                  <div className="excerpt-title">{news.headline}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="see-more">
            <div className="line"></div>
            <div className="see-more-text"> Trending - see more</div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
