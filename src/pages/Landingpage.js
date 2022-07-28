import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/CSS/landingpage-v2.css";
import { Link } from "react-router-dom";

import bg from "../../src/assets/img/landingpage_png-phone.png";
import appstore from "../../src/assets/img/appstore.png";
import gplay from "../../src/assets/img/gplay.png";
import airbnb from "../../src/assets/img/airbnb.png";
import canon from "../../src/assets/img/canon.png";
import dell from "../../src/assets/img/dell.png";
import dropbox from "../../src/assets/img/dropbox.png";
import hnm from "../../src/assets/img/hnm.png";
import microsoft from "../../src/assets/img/microsoft.png";
import callicon from "../../src/assets/img/call-icon.png";
import lockicon from "../../src/assets/img/lock-icon.png";
import downloadicon from "../../src/assets/img/download-icon.png";
import lpimg from "../../src/assets/img/landingpage_png-phone.png";
import sherina from "../../src/assets/img/chaw.jpg";
import jessica from "../../src/assets/img/mera.jpg";
import robert from "../../src/assets/img/chandler.jpg";

function LandingPage() {
  return (
    <>
      <header className="header-saqu">
        <nav className="nav">
          <div>
            <h2 className="blue">Saqu Pay</h2>
          </div>
          <div>
            <Link to="/Login" className="m-1">
              <Button variant="success">Login</Button>
            </Link>
            <Link to="/Signup">
              <Button variant="success">Sign Up</Button>{" "}
            </Link>
          </div>
        </nav>

        <div className="header-banner">
          <div className="banner-img">
            <img src={bg} alt="banner phone" className="imgphone" />
          </div>
          <div className="banner-text">
            <h1>
              Awesome App for Saving <span className="blue">Time</span>
            </h1>
            <p>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <div className="p-3">
              <Link to="/signup">
                {" "}
                <Button variant="success">Try it free</Button>
              </Link>
            </div>
            <p>available On :</p>
            <div className="">
              <img src={appstore} alt="appstore" />
              <img src={gplay} alt="gplay" />
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="section-one">
          <img src={airbnb} className="fit-img" alt="airbnb" />
          <img src={canon} alt="canon" />
          <img src={dell} alt="dell" />
          <img src={dropbox} alt="dropbox" />
          <img src={hnm} alt="hnm" />
          <img src={microsoft} className="fit-img" alt="microsoft" />
        </div>
      </section>

      <section>
        <div className="section-two">
          <div className="section-two-text">
            <h1>
              <span className="blue">About</span> the Application
            </h1>
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
          </div>
          <div className="section-two-card">
            <div className="card">
              <img src={callicon} alt="call-icon" class="imgcard" />
              <p>24/7 Support</p>
              <p className="sizing">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="card">
              <img src={lockicon} alt="lock-icon" className="imgcard" />
              <p>Data Privacy</p>
              <p className="sizing">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
            <div className="card">
              <img src={downloadicon} class="imgcard" alt="download-icon" />
              <p>Easy Download</p>
              <p className="sizing">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-three">
          <div className="section-three-img">
            <img src={lpimg} alt="phone section three" />
          </div>
          <div className="section-three-text">
            <h1 className="sizing-h1">
              All The <span className="blue">Great</span> Saqu Pay Features.
            </h1>
            <p className="pstyle">
              <span className="sizing-font">1. </span>
              <span className="point">Small Fee</span>
              <br />
              We only charge 5% of every success transaction done in Saqu Pay
              app.
            </p>
            <p className="pstyle">
              <span className="sizing-font">2. </span>
              <span className="point">Data Secured</span>
              <br />
              All your data is secured properly in our system and it’s
              encrypted.
            </p>
            <p className="pstyle">
              <span className="sizing-font">3. </span>
              <span className="point">User Friendly</span>
              <br />
              Saqu Pay come up with modern and sleek design and not complicated.
            </p>
          </div>
        </div>
      </section>

      <Carousel className="sizing-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid imgcard-carousel"
            src={jessica}
            alt="First slide"
          />
          <Carousel.Caption className="">
            <h3>Jessica Mera</h3>
            <p>
              “I use Saqu Pay to manage all financial needs. It’s super easy to
              use and it’s 100% free app”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid imgcard-carousel"
            src={sherina}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Sherina Chaw</h3>
            <p>
              “I use this app since 2 years ago and this is the best app that
              I’ve ever use in my entire life”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid imgcard-carousel"
            src={robert}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Robert Chandler</h3>
            <p>
              “Since I’m using this app, I’m not going to move to another
              similar app. Thank you Saqu Pay!”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <footer>
        <div className="zwfooter">
          <h3>Saqu Pay</h3>
          <p className="sizing.footer">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </p>
          <hr />
          <div className="footer-contact">
            <div>
              <p>2022 Saqu Pay. All right reserved.</p>
            </div>
            <p>+62 5637 8882 9901</p>
            <p>contact@saqupay.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
