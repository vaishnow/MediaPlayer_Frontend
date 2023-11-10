import React, { useState } from "react";
import { Link } from "react-router-dom";
import Add from "../components/Add";
import View from "../components/View";
import { Row, Col } from "react-bootstrap";
import Category from "../components/Category";

function Home() {
  const [uploadVideoStatus, setUploadVideoStatus] = useState({});

  return (
    <>
      <div className="d-flex justify-content-between p-5 m-0 align-items-center">
        <div className="p-5 m-0">
          <Add setUploadVideoStatus={setUploadVideoStatus} />
        </div>
        <Link
          to={"/watch-history"}
          style={{ textDecoration: "none", color: "#cccccc" }}
        >
          <h5>Watch History</h5>
        </Link>
      </div>
      <Row className="w-100">
        <Col lg={9}>
          <h4>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus} className="w-100" />
        </Col>
        <Col lg={3}>
          <Category />
        </Col>
      </Row>
    </>
  );
}

export default Home;
