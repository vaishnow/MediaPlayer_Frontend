import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { deleteHistory, getAllHistory } from "../services/allAPI";

function WatchHistory() {
  const [history, setHistory] = useState([]);
  const watchAllHistory = async () => {
    const { data } = await getAllHistory();
    setHistory(data);
    // console.log(data);
  };
  console.log(history);
  useEffect(() => {
    watchAllHistory();
  }, []);

  /* Function to remove history */
  const removeHistory=async(id)=>{
    await deleteHistory(id)
    // refresh history
    WatchHistory()
  }
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between py-3 mt-5">
        <h5>Watch History </h5>
        <Link to={"/home"} style={{ textDecoration: "none", color: "#cccccc" }}>
          <h6>
            <i class="fa-solid fa-chevron-left me-3"></i>Back to Home
          </h6>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {(history.length > 0) ? (
            history.map((item, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>{item.caption}</td>
                <td>
                  <a href={item.embedLink} target="_blank">
                    Watch
                  </a>
                </td>
                <td>{item.timestamp}</td>
                <td><button className="btn btn-danger" onClick={()=>removeHistory(item?.id)}><i className="fa-solid fa-trash-can"></i></button></td>
              </tr>
            })
          ) : (
            <tr>Nothing to display</tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default WatchHistory;
