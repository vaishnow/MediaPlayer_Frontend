import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { addToHistory, deleteVideo } from "../services/allAPI";
import Modal from "react-bootstrap/Modal";

function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  const removeVideo = async (id) => {
    const response = await deleteVideo(id);
    setDeleteVideoStatus(true);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const { caption, embedLink } = displayVideo;
    const today = new Date();
    let timestamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    console.log(timestamp);

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    };
    console.log(videoDetails);
    const response = await addToHistory(videoDetails);
    console.log(response);
  };

  //function to drag a card
  const dragStart=(e,id)=>{
    console.log("Dragged card",id);
    // to transfer id from videoCard to Category
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <>
      <Card draggable onDragStart={(e)=>dragStart(e,displayVideo?.id)}>
        <Card.Img
          variant="top"
          src={displayVideo.url}
          onClick={handleShow}
          style={{ height: "16rem" }}
        />
        <Card.Body className="d-flex justify-content-between py-3">
          <Card.Title>{displayVideo.caption}</Card.Title>
          <button
            className="btn btn-danger"
            id={displayVideo.id}
            onClick={() => removeVideo(displayVideo?.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <iframe
            width="100%"
            height="300px"
            src={`${displayVideo.embedLink}?autoplay=1`}
            title="MEARN Jul 23 B4||18/10/23| Amiya"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
