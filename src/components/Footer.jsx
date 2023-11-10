import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-secondary d-flex flex-column justify-content-center align-items-center w-100 py-5">
      <div className="row w-100 px-3 g-4">
        <div className="col-xs-12 col-md-6 col-lg-3">
          <h5>
            <i class="fa-solid fa-circle-play text-warning me-2"></i> Medhu
            Player
          </h5>
          <p style={{textAlign:'justify'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            commodi ducimus, nihil rerum voluptatum explicabo esse dolorem ut
            odio delectus ab veniam? Voluptatem dolorem deserunt excepturi
            consectetur voluptas sequi accusamus.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <h5>Links</h5>
          <ul className="p-2" style={{ listStyle: "none" }}>
            <li>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "#cccccc" }}
              >
                Landing Page
              </Link>
            </li>
            <li>
              <Link
                to={"/home"}
                style={{ textDecoration: "none", color: "#cccccc" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/watch-history"}
                style={{ textDecoration: "none", color: "#cccccc" }}
              >
                Watch History
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <h5>Guides</h5>
          <ul className="p-2" style={{ listStyle: "none" }}>
            <li>
              <Link
                to={"https://react-bootstrap.github.io/"}
                style={{ textDecoration: "none", color: "#cccccc" }}
              >
                React Bootstrap Page
              </Link>
            </li>
            <li>
              <Link
                to={"https://bootswatch.com/"}
                style={{ textDecoration: "none", color: "#cccccc" }}
              >
                Bootswatch
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <h5>Contact US</h5>
          <form className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name=""
              id=""
            />
            <button type="button" className="btn btn-warning">
              Subscribe
            </button>
          </form>
          <div className="d-flex justify-content-evenly text-light py-4">
            <Link
              to={"https://facebook.com/"}
              style={{ textDecoration: "none", color: "#cccccc" }}
            >
              <i class="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link
              to={"https://instagram.com/"}
              style={{ textDecoration: "none", color: "#cccccc" }}
            >
              <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link
              to={"https://twitter.com/"}
              style={{ textDecoration: "none", color: "#cccccc" }}
            >
              <i class="fa-brands fa-twitter fa-2x"></i>
            </Link>
            <Link
              to={"https://linkedin.com/"}
              style={{ textDecoration: "none", color: "#cccccc" }}
            >
              <i class="fa-brands fa-linkedin fa-2x"></i>
            </Link>
          </div>
        </div>
      </div>
      <p>Copyright &copy; 2023 Medhu Player , Built with React</p>
    </div>
  );
}

export default Footer;
