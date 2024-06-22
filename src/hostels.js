import React, { useState } from "react";

export default function Hostels() {
  const [genderr, setgender] = useState(""); // Define ccourses state and its setter
  const [locationn, setlocation] = useState(""); // Define cformm state and its setter
  const [pricee, setprice] = useState("");
  const [option, setoption] = useState(""); // Define dformm state and its setter
  const [usersid, setusersid] = useState("");

  const ondelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/delete/${genderr}/${locationn}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log success message
      } else {
        console.error("Error deleting hostel:", response.statusText);
        // Handle error case
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onpress = async (e) => {
    e.preventDefault();
    if (genderr == "male" && option == "required")
      window.location.href = "http://localhost:8000/malehostelsdata";
    else if (genderr == "female" && option == "required")
      window.location.href = "http://localhost:8000/femalehostelsdata";
    else if (option == "have")
      window.location.href = "http://localhost:8000/thanks";

    try {
      const response = await fetch("http://localhost:8000/hostel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender: genderr,
          location: locationn,
          price: pricee,
          option: option,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <nav
        id="main_nav"
        className="navbar navbar-expand-lg navbar-light bg-white shadow"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand h1" href="index.html">
            <i className="bx bx-buildings bx-sm text-dark" />
            <span className="text-dark h4">Fast</span>{" "}
            <span className="text-primary h4">Help Desk</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler-success"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="navbar-toggler-success"
          >
            <div className="flex-fill mx-xl-5 mb-2">
              <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
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
            <div className="navbar align-self-center d-flex">
              <a className="nav-link" href="#">
                <i className="bx bx-bell bx-sm bx-tada-hover text-primary" />
              </a>
              <a className="nav-link" href="#">
                <i className="bx bx-cog bx-sm text-primary" />
              </a>
              <a className="nav-link" href="#">
                <i className="bx bx-user-circle bx-sm text-primary" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section
        id="tmWelcome"
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/mini-profile-bg-01.jpg"
      >
        <div className="container-fluid tm-brand-container-outer">
          <div className="row">
            <div className="col-12">
              {/* Logo Area */}
              {/* Black transparent bg */}
              <div className="ml-auto mr-0 tm-bg-black-transparent text-white tm-brand-container-inner">
                <div className="tm-brand-container text-center">
                  <h1 className="tm-brand-name">Need Hostel ?</h1>
                  <p className="tm-brand-description mb-0">Not An Issue Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tm-bg-white-transparent tm-welcome-container">
          <div className="container-fluid">
            <div className="row h-100">
              <div className="col-md-7 tm-welcome-left-col">
                <div className="tm-welcome-left">
                  <h2 className="tm-welcome-title">
                    Welcome To The Best Hostel Booking Site
                  </h2>
                  <p className="pb-0">
                    Select Desired Options To Proceed and Check Vacancies
                    Available and Book The Best and Economical Hostel Around You
                    Now.
                  </p>
                </div>
              </div>
              {/* Brown bg */}
              <div className="col-md-5">
                <div className="tm-welcome-right">
                  <i className="fas fa-4x fa-address-card p-3 tm-welcome-icon" />
                  <p className="mb-0">
                    Any Student can now register/book a hostel using Fast Help
                    Desk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="tmContact"
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/mini-profile-bg-02.jpg"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="tm-contact-items-container">
                <div className="tm-contact-item">
                  <i className="fas fa-5x fa-briefcase tm-contact-item-icon" />
                  <p className="mb-0">
                    You can ask from a fellow if he/she has vacancies.
                  </p>
                </div>
                <div className="tm-contact-item">
                  <i className="fas fa-5x fa-building tm-contact-item-icon" />
                  <p className="mb-0">
                    You can check if there is a room available near university.
                  </p>
                </div>
                <div className="tm-contact-item">
                  <i className="fas fa-5x fa-balance-scale tm-contact-item-icon" />
                  <p className="mb-0">
                    This is strictly recommended to mention your gender
                    correctly to stay aways from any complications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ marginLeft: "300px" }}>
              <form
                method="POST"
                onSubmit={onpress}
                id="tmContactForm"
                className="tm-bg-white-transparent"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Gender"
                    value={genderr}
                    onChange={(e) => setgender(e.target.value)}
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_email"
                    name="contact_email"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Price/Share"
                    value={pricee}
                    onChange={(e) => setprice(e.target.value)}
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows={4}
                    id="contact_message"
                    name="contact_message"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Location of Hostel"
                    value={locationn}
                    onChange={(e) => setlocation(e.target.value)}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="formm"
                    className="formm"
                    id="formm"
                    value={option}
                    onChange={(e) => setoption(e.target.value)}
                    required=""
                    style={{
                      height: "calc(3.25rem + 1px)",
                      width: "100%",
                      fontSize: "1rem",
                      marginBottom: 30,
                    }}
                  >
                    <option value="" disabled="" selected="">
                      What do you want ?
                    </option>
                    <option value="required">I want a Hostel Vacany</option>
                    <option value="have">I have a space in Hostel</option>
                  </select>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn tm-btn-submit rounded-0 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* delete: " */}
          <h6 style={{ marginLeft: "310px", marginBottom: "50px" }}>
            If Your Desired Vacancy is Filled, Kindly Delete That Request Below
          </h6>
          <div className="row">
            <div className="col-12" style={{ marginLeft: "300px" }}>
              <form
                method="POST"
                onSubmit={ondelete}
                id="tmContactForm"
                className="tm-bg-white-transparent"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Gender"
                    value={genderr}
                    onChange={(e) => setgender(e.target.value)}
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Location of Hostel You Want to Delete"
                    value={locationn}
                    onChange={(e) => setlocation(e.target.value)}
                    required=""
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn tm-btn-submit rounded-0 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <footer className="col-12">
              <p className="text-center tm-copyright-text"></p>
            </footer>
          </div>
        </div>
        {/* container */}
      </div>
      {/* section */}
    </>
  );
}
