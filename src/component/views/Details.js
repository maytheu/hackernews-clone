import React from "react";

import "./details.css";
import laca from "../../assets/img/laca_126.jpg";
function Details() {
  return (
    <div className="new-container">
      <div className="new-title">Trending</div>
      <div className="footer-top"></div>
      <div className="new-media">
        <div className="new-headline">
          <div className="new-hint">team news</div>
          <div className="new-headlines">
            Team news: Lacazette, Odegaard, Aubamayang
          </div>
          <div className="reporter">Arsenal Media 21 Apr 2021</div>
        </div>
        <div className="new-img">
          <img src={laca} alt="img" />
        </div>
      </div>
      <div className="new-details">
        <p>
          <strong>
            We’ve checked-in with our medical team ahead of Friday’s Premier
            League match against Everton.
          </strong>
        </p>
        <p>This is the latest update:</p>
        <p>
          <strong>Pierre-Emerick Aubameyang</strong>
        </p>
        <p>
          Auba continues to recover after contracting malaria on international
          duty. Auba will be unavailable for Friday’s match against Everton, but
          is hoping to resume light training by the end of this week.
        </p>
        <p>
          <strong>Alex Lacazette</strong>
        </p>
        <p>
          Left hamstring. Alex has sustained a strain to his left hamstring and
          will be unavailable for Friday’s match against Everton. He will
          continue to work with the medical team and will be assessed ahead of
          next week’s matches.
        </p>
        <p>
          <strong>David Luiz</strong>
        </p>
        <p>
          Right knee. David is making very good progress and is hoping to
          integrate back into light training with the squad next week.
        </p>
        <p>
          <strong>Martin Odegaard</strong>
        </p>
        <p>
          Right ankle. Martin is now back in light training and will be assessed
          ahead of the Everton match regarding his availability.
        </p>
        <p>
          <strong>Kieran Tierney</strong>
        </p>
        <p>
          Left knee. Kieran sustained ligament damage to his left knee during
          the match against Liverpool on April 3. Kieran continues to make
          positive progress and is hoping to be back in training within two to
          three weeks.{" "}
        </p>
        <p>
          There were no further health or injury issues from Thursday’s match
          against Slavia Prague. All other players in the men’s first-team squad
          are currently available for selection.
        </p>
        <p>
          <i>
            Copyright 2021 The Arsenal Football Club plc. Permission to use
            quotations from this article is granted subject to appropriate
            credit being given to www.arsenal.com as the source.
          </i>
        </p>
      </div>
    </div>
  );
}

export default Details;
