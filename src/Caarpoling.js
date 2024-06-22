import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Caarpoling() {
  const [road, setRoad] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    if (option == "pickup")
      window.location.href = "http://localhost:8000/pickdata";
    else window.location.href = "http://localhost:8000/dropdata";
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          road: road,
          option: option,
          message: message,
        }),
      });
      const data = await response.json();
      console.log(data);
      //       history("/indexx");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Fragment>
      {/* Hero section */}
      <section id="infinite" className="text-white tm-font-big tm-parallax">
        {/* Navigation */}
        <nav
          style={{ marginTop: "-25px" }}
          className="navbar navbar-expand-md tm-navbar"
          id="tmNav"
        >
          <div className="container">
            <div className="tm-next">
              <a href="#infinite" className="navbar-brand">
                CAARPOLING
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="indexx"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="Caarpoling"
                  >
                    Caarpoling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="Books"
                  >
                    Books
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="Hostels"
                  >
                    Hostels
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="Swaps"
                  >
                    Swaps
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="questions"
                  >
                    Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="text-center tm-hero-text-container">
          <div className="tm-hero-text-container-inner">
            <h2 className="tm-hero-title">CAARPOLING</h2>
            <p className="tm-hero-subtitle">
              Free &amp; Low Budget Pick And Drops
            </p>
          </div>
        </div>
        <div className="tm-next tm-intro-next">
          <a href="#whatwedo" className="text-center tm-down-arrow-link">
            <i className="fas fa-2x fa-arrow-down tm-down-arrow" />
          </a>
        </div>
      </section>
      <section id="whatwedo" className="tm-section-pad-top">
        <div className="container">
          <div className="row tm-content-box">
            {/* first row */}
            <div className="col-lg-12 col-xl-12">
              <div className="tm-intro-text-container">
                <h2 className="tm-text-primary mb-4 tm-section-title">
                  Carpooling Convenience
                </h2>
                <p className="mb-4 tm-intro-text" style={{ color: "white" }}>
                  Discover the ease of carpooling with our platform. Seamlessly
                  connect with fellow travelers for efficient and eco-friendly
                  commutes. Say goodbye to solo drives and hello to shared
                  journeys, reducing costs and environmental impact along the
                  way.
                </p>
              </div>
            </div>
          </div>
          {/* first row */}
          <div className="row tm-content-box">
            {/* second row */}
            <div className="col-lg-1">
              <i className="far fa-3x fa-chart-bar text-center tm-icon" />
            </div>
            <div className="col-lg-5">
              <div className="tm-intro-text-container">
                <h2 className="tm-text-primary mb-4">
                  Swift Support for Carpoolers
                </h2>
                <p className="mb-4 tm-intro-text" style={{ color: "white" }}>
                  Benefit from our dedicated support system, designed
                  exclusively for carpooling enthusiasts. From inquiries to
                  assistance during your journey, our team ensures a smooth and
                  hassle-free experience. Drive with confidence, knowing that
                  support is just a click away.
                </p>
              </div>
            </div>
            <div className="col-lg-1">
              <i className="fas fa-3x fa-fingerprint text-center tm-icon" />
            </div>
            <div className="col-lg-5">
              <div className="tm-intro-text-container">
                <h2 className="tm-text-primary mb-4">
                  Secure Carpooling Environment
                </h2>
                <p className="mb-4 tm-intro-text" style={{ color: "white" }}>
                  Your safety is our priority. Rest assured, our platform
                  employs top-notch security measures to safeguard your personal
                  information and travel details. Enjoy peace of mind as you
                  embark on shared rides, knowing that your privacy and security
                  are our utmost concern.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* third row */}
      </section>
      <section id="gallery" className="tm-section-pad-top">
        <div className="container tm-container-gallery">
          <div className="row">
            <div className="text-center col-12">
              <h2 className="tm-text-primary tm-section-title mb-4">
                Pickup Locations
              </h2>
              <p className="mx-auto tm-section-desc" style={{ color: "white" }}>
                Hover On the Locations to see Some Sample Locations
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ marginLeft: "50px" }}>
              <div className="mx-auto tm-gallery-container">
                <div className="grid tm-gallery">
                  <a href="img/gallery-img-02.jpg">
                    <figure
                      className="effect-honey tm-gallery-item"
                      style={{ margin: "15px 15px" }}
                    >
                      <img
                        src="img/gallery-tn-02.jpg"
                        alt="Image 2"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i style={{ color: "white" }}>
                            Dha <span />
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-03.jpg">
                    <figure
                      className="effect-honey tm-gallery-item"
                      style={{ margin: "15px 15px" }}
                    >
                      <img
                        src="img/gallery-tn-03.jpg"
                        alt="Image 3"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i style={{ color: "white" }}>
                            <span>Bahria _Town</span>
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-04.jpg">
                    <figure
                      className="effect-honey tm-gallery-item"
                      style={{ margin: "15px 15px" }}
                    >
                      <img
                        src="img/gallery-tn-04.jpg"
                        alt="Image 4"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i style={{ color: "white" }}>
                            Sectariate
                            <span />
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-05.jpg">
                    <figure
                      className="effect-honey tm-gallery-item"
                      style={{ margin: "15px 15px" }}
                    >
                      <img
                        src="img/gallery-tn-05.jpg"
                        alt="Image 5"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i style={{ color: "white" }}>
                            <span>Cannt.</span>
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="tm-section-pad-top tm-parallax-2">
        <div className="container tm-container-contact">
          <div className="row">
            <div className="text-center col-12">
              <h2 className="tm-section-title mb-4" style={{ color: "blue" }}>
                Select From Above or Others
              </h2>
              <p className="mb-5" style={{ color: "white" }}>
                Select Your Pickup/Drop Location and give your Information.If a
                Best Match is Available Now ,We will Provide You Otherwise We
                Will Give Your Contact Info to Others.<br></br>
                If Your Location is not mentioned,write it in the Textbox.
              </p>
              <br />
            </div>
            <form onSubmit={handleSubmit}>
              <select
                id="road"
                name="road"
                className="tm-input"
                required
                style={{ color: "blue" }}
                value={road}
                onChange={(e) => setRoad(e.target.value)}
              >
                <option value="" disabled>
                  Select a Road
                </option>
                <option value="Mall Road">Mall Road</option>
                <option value="Hall Road">Hall Road</option>
                <option value="Gulberg Boulevard">Gulberg Boulevard</option>
                <option value="Mall Road">Mall Road</option>
                <option value="Hall Road">Hall Road</option>
                <option value="Gulberg Boulevard">Gulberg Boulevard</option>
                <option value="Main Boulevard Faisal Town">
                  Main Boulevard Faisal Town
                </option>
                <option value="MM Alam Road">MM Alam Road</option>
                <option value="Ferozepur Road">Ferozepur Road</option>
                <option value="Jail Road">Jail Road</option>
                <option value="Queen's Road">Queen's Road</option>
                <option value="Lawrence Road">Lawrence Road</option>
                <option value="Mozang Road">Mozang Road</option>
                <option value="Lytton Road">Lytton Road</option>
                <option value="Canal Bank Road">Canal Bank Road</option>
                <option value="Maulana Karbasi Road">
                  Maulana Karbasi Road
                </option>
                <option value="Wahdat Road">Wahdat Road</option>
                <option value="Raiwind Road">Raiwind Road</option>
                <option value="Walton Road">Walton Road</option>
                <option value="Lahore Ring Road">Lahore Ring Road</option>
                <option value="Model Town Link Road">
                  Model Town Link Road
                </option>
                <option value="Peco Road">Peco Road</option>
                <option value="College Road, Township">
                  College Road, Township
                </option>
                <option value="Moulana Shoukat Ali Road">
                  Moulana Shoukat Ali Road
                </option>
                <option value="Madar-e-Millat Road">Madar-e-Millat Road</option>
                <option value="Chaudhary Rehmat Ali Road">
                  Chaudhary Rehmat Ali Road
                </option>
                <option value="Bagharian Road">Bagharian Road</option>
                <option value="Nomi Road">Nomi Road</option>
                <option value="Nazaria-e-Pakistan Avenue">
                  Nazaria-e-Pakistan Avenue
                </option>
                <option value="Khayaban-e-Firdousi">Khayaban-e-Firdousi</option>
                <option value="Khayaban-e-Jinnah">Khayaban-e-Jinnah</option>
                <option value="Valancia Main Boulevard">
                  Valancia Main Boulevard
                </option>
                <option value="Wapda Avenue">Wapda Avenue</option>
                <option value="Abbaseen Avenue">Abbaseen Avenue</option>
                <option value="Lower Mall">Lower Mall</option>
                <option value="Bahawalpur Road">Bahawalpur Road</option>
                <option value="Multan Road">Multan Road</option>
                <option value="McLeod Road">McLeod Road</option>
                <option value="Napier Road">Napier Road</option>
                <option value="Mayo Hospital Road">Mayo Hospital Road</option>
                <option value="Chamberlain Road">Chamberlain Road</option>
                <option value="Railway Road">Railway Road</option>
                <option value="None">None</option>
              </select>
              <select
                id="option"
                name="option"
                className="tm-input"
                required
                style={{ color: "blue" }}
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="" disabled>
                  Select an Option
                </option>
                <option value="drop">I Will Offer Ride</option>
                <option value="pickup">I Will Take Ride</option>
              </select>
              <textarea
                id="message"
                name="message"
                rows={2}
                placeholder="Drop Your Exact Address So That We Confirm From Other Person"
                className="tm-input"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="btn tm-btn-submit">
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="contact-item">
              <a
                rel="nofollow"
                href="mailto:mail@company.com"
                className="item-link"
              >
                <i className="far fa-2x fa-envelope mr-4" />
                <span className="mb-0">mail@cfast help desk</span>
              </a>
            </div>
            <div className="contact-item">
              <a rel="nofollow" href="tel:0100200340" className="item-link">
                <i className="fas fa-2x fa-phone-square mr-4" />
                <span className="mb-0"> xxx-xxx-xxx</span>
              </a>
            </div>
            <div className="contact-item">&nbsp;</div>
          </div>
        </div>
        {/* row ending */}
      </section>
    </Fragment>
  );
}

export default Caarpoling;
