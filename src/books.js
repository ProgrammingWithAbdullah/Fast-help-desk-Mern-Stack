import React, { useState } from "react";

export default function Books() {
  const [dcourses, setdcourses] = useState(""); // Define dcourses state and its setter
  const [demail, setdemail] = useState(""); // Define demail state and its setter
  const [dformm, setformm] = useState(""); // Define dformm state and its setter
  const [dtext, setdtext] = useState(""); // Define dtext state and its setter

  const [cemail, setcemail] = useState(""); // Define cemail state and its setter
  const [ccourses, setccourses] = useState(""); // Define ccourses state and its setter

  const [cformm, setcformm] = useState(""); // Define cformm state and its setter
  const [ctext, setctext] = useState(""); // Define ctext state and its setter

  const oncollect = async (e) => {
    window.location.href = `http://localhost:8000/search/${ccourses}`;
    e.preventDefault();

    console.log("hy");
    console.log({
      cemail: cemail,
      ccourses: ccourses,
      cformm: cformm,
      ctext: ctext,
    });

    try {
      const response = await fetch("http://localhost:8000/collect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cemail: cemail,
          ccourses: ccourses,
          cformm: cformm,
          ctext: ctext,
        }),
      });
      const data = await response.json();
      console.log(data);

      // Check if the response indicates success
    } catch (error) {
      console.error("Error:", error);
      // Handle fetch error
      // Optionally display error message to the user
    }
  };

  const ondistribute = async (e) => {
    window.location.href = "http://localhost:8000/thanks";
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/distribute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          demail: demail,
          dcourses: dcourses,
          dformm: dformm,
          dtext: dtext,
        }),
      });
      const data = await response.json();
      console.log(data);

      // Handle response accordingly
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="fixed-side-navbar" style={{ marginTop: "-300px" }}>
        <ul className="nav">
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
              href="books"
            >
              Books
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link btn-outline-primary rounded-pill px-3"
              href="hostels"
            >
              Hostels
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link btn-outline-primary rounded-pill px-3"
              href="swaps"
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
      <>
        <div className="fixed-side-navbar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <span>Intro</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#our-story">
                <span>Our Story</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="parallax-content baner-content" id="home">
          <div className="container">
            <div className="first-content">
              <h1>Get Books</h1>
              <span>
                <em>You</em> Want
              </span>
              <div className="primary-button">
                <a href="#services">Welcome</a>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-content projects-content" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="owl-testimonials" className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/2nd-big-item.jpg" data-lightbox="image-1">
                        <img src="img/2nd-item.jpg" alt="" />
                      </a>
                      <div className="text-content">
                        <h4>Thomas Calculus</h4>
                        <span>14 th Ed.</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/2nd-big-item.jpg" data-lightbox="image-1">
                        <img src="img/2nd-item.jpg" alt="" />
                      </a>
                      <div className="text-content">
                        <h4>Discrete Structures</h4>
                        <span>5th Ed.</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/3rd-big-item.jpg" data-lightbox="image-1">
                        <img src="img/3rd-item.jpg" alt="" />
                      </a>
                      <div className="text-content">
                        <h4>Marketing by Kotler</h4>
                        <span>6th Ed.</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/4th-big-item.jpg" data-lightbox="image-1">
                        <img src="img/4th-item.jpg" alt="" />
                      </a>
                      <div className="text-content">
                        <h4>Differential by John</h4>
                        <span>5th Ed.</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/5th-big-item.jpg" data-lightbox="image-1">
                        <img src="img/5th-item.jpg" alt="" />
                      </a>
                      <div className="text-content">
                        <h4>Communication Skills by Yuran</h4>
                        <span>3rd Ed.</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/6th-big-item.jpg" data-lightbox="image-1">
                        <img src="img/6th-item.jpg" alt="" />
                      </a>
                      <div className="text-content">
                        <h4>Parallel Computing by Jack</h4>
                        <span>7th Ed.</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/2nd-big-item.jpg" data-lightbox="image-1">
                        <img src="img/2nd-item.jpg" alt="" />
                      </a>
                      <div className="text-content">
                        <h4>Probaility by Marie</h4>
                        <span>8th Ed.</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-item">
                      <a href="img/1st-big-item.jpg" data-lightbox="image-1">
                        <img src="img/1st-item.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-content" id="our-story">
          <div
            className="container"
            style={{ marginBottom: "50px", marginLeft: "120px" }}
          >
            <div className="row">
              <div className="col-md-8 mx-auto" style={{ width: "100%" }}>
                <div className="wrapper" style={{ maxWidth: "1000px" }}>
                  <section
                    id="first-tab-group"
                    className="tabgroup"
                    style={{ display: "flex" }}
                  >
                    <div id="tab1" style={{ width: "950px" }}>
                      <img src="img/1st-tab.jpg" alt="" />
                      <p>
                        You can share Hard copies of any book to other
                        students.Your one kind deed can contribute to someone's
                        career.Thanks.
                      </p>
                    </div>
                    <div
                      id="tab4"
                      style={{
                        height: "101.3px",
                        padding: "0px 20px 20px 20px",
                      }}
                    >
                      <img src="img/4th-tab.jpg" alt="" />
                      <p>
                        You can recieve Hard copies of any book from other
                        students.Don't forget to contribute to someone's
                        career.Thanks.
                      </p>
                    </div>
                  </section>
                  <ul className="tabs clearfix" data-tabgroup="first-tab-group">
                    <li>
                      <a href="#tab1" className="active">
                        Distribute
                      </a>
                    </li>
                    <li>
                      <a href="#tab4">Collect</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-content contact-content" id="contact-us">
          <h2 style={{ color: "black", marginLeft: 210 }}>Distribute</h2>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-form">
                  <div className="row">
                    <form
                      onSubmit={ondistribute}
                      id="contact"
                      method="post"
                      style={{ minHeight: "585px" }}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <fieldset>
                            <select
                              name="courses"
                              className="form-control"
                              id="courses"
                              value={dcourses}
                              onChange={(e) => setdcourses(e.target.value)}
                              required=""
                              style={{
                                height: "calc(5.25rem + 2px)",
                                fontSize: "1.3rem",
                                marginBottom: 30,
                              }}
                            >
                              <option value="" disabled="" selected="">
                                Select a course
                              </option>
                              <option value="Introduction to ICT">
                                Introduction to ICT (0+1)
                              </option>
                              <option value="Programming Fundamentals">
                                Programming Fundamentals (3+1)
                              </option>
                              <option value="Applied Physics">
                                Applied Physics (3+0)
                              </option>
                              <option value="Calculus & Analytical Geometry">
                                Calculus &amp; Analytical Geometry (3+0)
                              </option>
                              <option value="Pakistan Studies">
                                Pakistan Studies (3+0)
                              </option>
                              <option value="English Composition & Comprehension">
                                English Composition &amp; Comprehension (2+1)
                              </option>
                              <option value="Object Oriented Programming">
                                Object Oriented Programming (3+1)
                              </option>
                              <option value="Digital Logic Design">
                                Digital Logic Design (3+1)
                              </option>
                              <option value="Differential Equations">
                                Differential Equations (3+0)
                              </option>
                              <option value="Islamic Studies/Ethics">
                                Islamic Studies/Ethics (3+0)
                              </option>
                              <option value="Communication & Presentation Skills">
                                Communication &amp; Presentation Skills (2+1)
                              </option>
                              <option value="Data Structures">
                                Data Structures (3+1)
                              </option>
                              <option value="Computer Org. and Assembly Language">
                                Computer Org. and Assembly Language (3+1)
                              </option>
                              <option value="Discrete Structures">
                                Discrete Structures (3+0)
                              </option>
                              <option value="Linear Algebra">
                                Linear Algebra (3+0)
                              </option>
                              <option value="University Elective – I">
                                University Elective – I (3+0)
                              </option>
                              <option value="Database Systems">
                                Database Systems (3+1)
                              </option>
                              <option value="Operating Systems">
                                Operating Systems (3+1)
                              </option>
                              <option value="Design & Analysis of Algorithms">
                                Design &amp; Analysis of Algorithms (3+0)
                              </option>
                              <option value="Probability & Statistics">
                                Probability &amp; Statistics (3+0)
                              </option>
                              <option value="University Elective – II">
                                University Elective – II (3+0)
                              </option>
                              <option value="Theory of Automata">
                                Theory of Automata (3+0)
                              </option>
                              <option value="Computer Networks">
                                Computer Networks (3+1)
                              </option>
                              <option value="Software Design and Analysis">
                                Software Design and Analysis (3+0)
                              </option>
                              <option value="Technical & Business Writing">
                                Technical &amp; Business Writing (3+0)
                              </option>
                              <option value="Numerical Computing">
                                Numerical Computing (3+0)
                              </option>
                              <option value="Software Engineering">
                                Software Engineering (3+0)
                              </option>
                              <option value="Parallel & Distributed Computing">
                                Parallel &amp; Distributed Computing (3+0)
                              </option>
                              <option value="Artificial Intelligence">
                                Artificial Intelligence (3+1)
                              </option>
                              <option value="CS Elective I">
                                CS Elective I (3+0)
                              </option>
                              <option value="CS Supporting Elective">
                                CS Supporting Elective (3+0)
                              </option>
                              <option value="Final Year Project-I">
                                Final Year Project-I (0+3)
                              </option>
                              <option value="Information Security">
                                Information Security (3+0)
                              </option>
                              <option value="Professional Practices">
                                Professional Practices (3+0)
                              </option>
                              <option value="CS Elective II">
                                CS Elective II (3+0)
                              </option>
                              <option value="CS Elective – III">
                                CS Elective – III (3+0)
                              </option>
                              <option value="Final Year Project-II">
                                Final Year Project-II (0+3)
                              </option>
                              <option value="University Elective – III">
                                University Elective – III (3+0)
                              </option>
                              <option value="CS Elective IV">
                                CS Elective IV (3+0)
                              </option>
                              <option value="CS Elective V">
                                CS Elective V (3+0)
                              </option>
                              <option value="CS Elective VI">
                                CS Elective VI
                              </option>
                            </select>
                            <input
                              name="email"
                              type="number"
                              value={demail}
                              onChange={(e) => setdemail(e.target.value)}
                              className="form-control"
                              id="email"
                              placeholder="Edition You Want..."
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <select
                              name="formm"
                              className="formm"
                              id="formm"
                              value={dformm}
                              onChange={(e) => setformm(e.target.value)}
                              required=""
                              style={{
                                height: "calc(5.25rem + 2px)",
                                width: "100%",
                                fontSize: "1.3rem",
                                marginBottom: 30,
                              }}
                            >
                              <option value="" disabled="" selected="">
                                Select a form
                              </option>
                              <option value="Soft Copy">Soft Copy</option>
                              <option value="Hard Copy">Hard Copy</option>
                            </select>
                            <textarea
                              name="message"
                              rows={2}
                              value={dtext}
                              onChange={(e) => setdtext(e.target.value)}
                              className="form-control"
                              id="message"
                              placeholder="Your message..."
                              required=""
                              defaultValue={""}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="btn"
                            >
                              Place For Distribution
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ marginTop: "-73px" }}>
                <h2 style={{ color: "black", marginLeft: 180 }}>Collect</h2>
                <br />
                <div className="contact-form">
                  <div className="row">
                    <form
                      onSubmit={oncollect}
                      id="contact"
                      style={{ minHeight: "585px" }}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <fieldset>
                            <select
                              name="courses"
                              className="form-control"
                              id="courses"
                              value={ccourses}
                              onChange={(e) => setccourses(e.target.value)}
                              required=""
                              style={{
                                height: "calc(5.25rem + 2px)",
                                fontSize: "1.3rem",
                                marginBottom: 30,
                              }}
                            >
                              <option value="" disabled="" selected="">
                                Select a course
                              </option>
                              <option value="Introduction to ICT">
                                Introduction to ICT (0+1)
                              </option>
                              <option value="Programming Fundamentals">
                                Programming Fundamentals (3+1)
                              </option>
                              <option value="Applied Physics">
                                Applied Physics (3+0)
                              </option>
                              <option value="Calculus & Analytical Geometry">
                                Calculus &amp; Analytical Geometry (3+0)
                              </option>
                              <option value="Pakistan Studies">
                                Pakistan Studies (3+0)
                              </option>
                              <option value="English Composition & Comprehension">
                                English Composition &amp; Comprehension (2+1)
                              </option>
                              <option value="Object Oriented Programming">
                                Object Oriented Programming (3+1)
                              </option>
                              <option value="Digital Logic Design">
                                Digital Logic Design (3+1)
                              </option>
                              <option value="Differential Equations">
                                Differential Equations (3+0)
                              </option>
                              <option value="Islamic Studies/Ethics">
                                Islamic Studies/Ethics (3+0)
                              </option>
                              <option value="Communication & Presentation Skills">
                                Communication &amp; Presentation Skills (2+1)
                              </option>
                              <option value="Data Structures">
                                Data Structures (3+1)
                              </option>
                              <option value="Computer Org. and Assembly Language">
                                Computer Org. and Assembly Language (3+1)
                              </option>
                              <option value="Discrete Structures">
                                Discrete Structures (3+0)
                              </option>
                              <option value="Linear Algebra">
                                Linear Algebra (3+0)
                              </option>
                              <option value="University Elective – I">
                                University Elective – I (3+0)
                              </option>
                              <option value="Database Systems">
                                Database Systems (3+1)
                              </option>
                              <option value="Operating Systems">
                                Operating Systems (3+1)
                              </option>
                              <option value="Design & Analysis of Algorithms">
                                Design &amp; Analysis of Algorithms (3+0)
                              </option>
                              <option value="Probability & Statistics">
                                Probability &amp; Statistics (3+0)
                              </option>
                              <option value="University Elective – II">
                                University Elective – II (3+0)
                              </option>
                              <option value="Theory of Automata">
                                Theory of Automata (3+0)
                              </option>
                              <option value="Computer Networks">
                                Computer Networks (3+1)
                              </option>
                              <option value="Software Design and Analysis">
                                Software Design and Analysis (3+0)
                              </option>
                              <option value="Technical & Business Writing">
                                Technical &amp; Business Writing (3+0)
                              </option>
                              <option value="Numerical Computing">
                                Numerical Computing (3+0)
                              </option>
                              <option value="Software Engineering">
                                Software Engineering (3+0)
                              </option>
                              <option value="Parallel & Distributed Computing">
                                Parallel &amp; Distributed Computing (3+0)
                              </option>
                              <option value="Artificial Intelligence">
                                Artificial Intelligence (3+1)
                              </option>
                              <option value="CS Elective I">
                                CS Elective I (3+0)
                              </option>
                              <option value="CS Supporting Elective">
                                CS Supporting Elective (3+0)
                              </option>
                              <option value="Final Year Project-I">
                                Final Year Project-I (0+3)
                              </option>
                              <option value="Information Security">
                                Information Security (3+0)
                              </option>
                              <option value="Professional Practices">
                                Professional Practices (3+0)
                              </option>
                              <option value="CS Elective II">
                                CS Elective II (3+0)
                              </option>
                              <option value="CS Elective – III">
                                CS Elective – III (3+0)
                              </option>
                              <option value="Final Year Project-II">
                                Final Year Project-II (0+3)
                              </option>
                              <option value="University Elective – III">
                                University Elective – III (3+0)
                              </option>
                              <option value="CS Elective IV">
                                CS Elective IV (3+0)
                              </option>
                              <option value="CS Elective V">
                                CS Elective V (3+0)
                              </option>
                              <option value="CS Elective VI">
                                CS Elective VI
                              </option>
                            </select>
                            <input
                              name="email"
                              type="number"
                              value={cemail}
                              onChange={(e) => setcemail(e.target.value)}
                              className="form-control"
                              id="email"
                              placeholder="Edition You Want..."
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <select
                              name="formm"
                              className="formm"
                              id="formm"
                              value={cformm}
                              onChange={(e) => setcformm(e.target.value)}
                              required=""
                              style={{
                                height: "calc(5.25rem + 2px)",
                                width: "100%",
                                fontSize: "1.3rem",
                                marginBottom: 30,
                              }}
                            >
                              <option value="" disabled="" selected="">
                                Select a form
                              </option>
                              <option value="Soft Copy">Soft Copy</option>
                              <option value="Hard Copy">Hard Copy</option>
                            </select>
                            <textarea
                              name="message"
                              rows={2}
                              className="form-control"
                              value={ctext}
                              onChange={(e) => setctext(e.target.value)}
                              id="message"
                              placeholder="Your message..."
                              required=""
                              defaultValue={""}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="btn"
                            >
                              Check Availability
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="primary-button">
                  <a href="#home">Back To Top</a>
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                </ul>
                <p>
                  <a rel="nofollow noopener" href="https://templatemo.com">
                    <em>Thank You</em>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}
