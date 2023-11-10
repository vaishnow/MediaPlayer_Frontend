import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getAllVideos } from "../services/allAPI";

function View({ uploadVideoStatus }) {
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false);
  const [allVideo, setAllVideo] = useState([]);
  const getAllUploadedVideos = async () => {
    const response = await getAllVideos();
    const { data } = response;
    setAllVideo(data);
  };
  console.log(allVideo);

  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoStatus(false);
  }, [uploadVideoStatus,deleteVideoStatus]);
  return (
    <>
      <Row>
        {allVideo.length > 0 ? (
          allVideo.map((video) => (
            <Col xs={12} sm={6} md={6} lg={4} xl={3} className="p-3">
              <VideoCard
                displayVideo={video}
                setDeleteVideoStatus={setDeleteVideoStatus}
              />
            </Col>
          ))
        ) : (
          <p>Nothing to Display</p>
        )}
      </Row>
    </>
  );
}

export default View;
