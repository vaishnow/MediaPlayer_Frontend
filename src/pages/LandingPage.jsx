import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <div>
      <Row>
        <Col></Col>
        <Col lg={5}>
          <h5 className="py-3 mt-5">
            Welcome to <span className="text-warning">Medhu Player</span>
          </h5>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur exercitationem dignissimos rerum iste nam itaque eum,
            fugit repellat cupiditate sapiente! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Porro iure quos dolorum, expedita
            assumenda asperiores ipsam. Numquam ea tenetur quam.
          </p>
          <button onClick={()=>navigateByUrl('/home')} className="btn btn-warning my-3 ">Get Started<i class="fa-solid fa-chevron-right ms-3"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img
            className="w-75"
            src="https://media.giphy.com/media/Yq2DaPfhTMb3GEZWju/giphy.gif"
            alt=""
          />
        </Col>
      </Row>
      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column">
        <h3>Features</h3>
        <div className="cards d-flex justify-content-around align-items-center">
          <Card className="p-1 m-3" style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "16rem" }}
              variant="top"
              src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"
            />
            <Card.Body>
              <Card.Title>Managing Video</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non
                maxime pariatur quae expedita deleniti accusantiumn et facilis,
                commodi maiores.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-1 m-3" style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "16rem" }}
              variant="top"
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif
"
            />
            <Card.Body>
              <Card.Title>Categorizing Video</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non
                maxime pariatur quae expedita deleniti accusantium et facilis,
                commodi maiores.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-1 m-3" style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "16rem" }}
              variant="top"
              src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif
"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non
                maxime pariatur quae expedita deleniti accusantium et facilis,
                commodi maiores.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container w-100 border my-5">
        <Row>
          <Col lg={6} className="p-4">
            <h3 className="text-warning">Simple Fast and Powerful</h3>
            <p>
              <span className="fs-4">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Voluptatem voluptatum, quisquam cumque velit ex quos molestiae reiciendis aliquid earum assumenda praesentium culpa magni eveniet tempora modi accusamus ipsa nisi nostrum!
            </p>
            <p>
              <span className="fs-4">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Voluptatem voluptatum, quisquam cumque velit ex quos molestiae reiciendis aliquid earum assumenda praesentium culpa magni eveniet tempora modi accusamus ipsa nisi nostrum!
            </p>
            <p>
              <span className="fs-4">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Voluptatem voluptatum, quisquam cumque velit ex quos molestiae reiciendis aliquid earum assumenda praesentium culpa magni eveniet tempora modi accusamus ipsa nisi nostrum!
            </p>
          </Col>
          <Col lg={6} className="p-4"><iframe width="500" height="415" src="https://www.youtube-nocookie.com/embed/wr9M-CoxP7A?si=UBZ_vvdgvDkjhOIV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
