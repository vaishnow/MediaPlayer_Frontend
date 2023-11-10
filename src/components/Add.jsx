import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { uploadAllVideo } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({ setUploadVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videos, setVideos] = useState({
    id: "",
    caption: "",
    url: "",
    embedLink: "",
  });

  console.log(videos);
  const embedVideoLink = (e) => {
    const { value } = e.target;
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`;
    setVideos({ ...videos, embedLink: link });
  };
  const handleUpload = async () => {
    const { id, caption, url, embedLink } = videos;
    if (!id || !caption || !url || !embedLink) {
      toast.warning("Please Fill Form Completely");
    } else {
      const response = await uploadAllVideo(videos);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        setUploadVideoStatus(response.data);
        toast.success(`${response.data.caption} is successfully uploaded`);
        handleClose();
      } else {
        console.log(response);
        toast.error("Something Went Wrong, Try again Later");
      }
    }
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>
          Upload new video{" "}
          <button onClick={handleShow} className="btn btn-warning">
            <i class="fa-solid fa-cloud-arrow-up"></i>
          </button>
        </h5>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form</p>
          <form className="border border-secondary rounded p-2">
            <Form.Group className="mb-3" controlId="vidID">
              <Form.Control
                type="text"
                placeholder="Enter Video ID"
                onChange={(e) => setVideos({ ...videos, id: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="vidCaption">
              <Form.Control
                type="text"
                placeholder="Enter Video Caption"
                onChange={(e) =>
                  setVideos({ ...videos, caption: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="vidImgUrl">
              <Form.Control
                type="text"
                placeholder="Enter Video image URL"
                onChange={(e) => setVideos({ ...videos, url: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="vidUrl">
              <Form.Control
                type="text"
                placeholder="Enter Video URL"
                onChange={embedVideoLink}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="warning">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="colored"
      ></ToastContainer>
    </>
  );
}

export default Add;
