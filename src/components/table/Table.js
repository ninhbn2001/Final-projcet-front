import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchAllBoard, deleteBoard } from 'Actions/ApiCall'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ModalBoard from 'components/Common/ModalBoard';


const List = () => {
  const navigate = useNavigate();
  const [showBoardAdd, setShowBoardAdd] = useState(false)
  const toggleShowBoardAdd = () => setShowBoardAdd(!showBoardAdd)

  const [allBoard, setallBoard] = useState([])

  const getAllBoard = async () => {
    let res = await fetchAllBoard()
    setallBoard(res)
    console.log(12, res)
  }

  useEffect(() => {
    getAllBoard()
  }, [])

  const handleView = (event) => {
    event.preventDefault();
    const id = event.target.value
    navigate(`/boardcontent/${id}`, { replace: false, state: { id: id } });
    console.log(19999, id)
  }
  const handleDeleteBoard = async (id) => {
    let check = window.confirm("You want to delete!")
    if (check) {
      await deleteBoard(id)
      getAllBoard()

    }
  }

  return (
    <TableContainer component={Paper} className="table">
      <div className="datatableTitle">
        <button className="link" onClick={toggleShowBoardAdd}>
          Add New
        </button>
        <ModalBoard openModal={showBoardAdd} toggleShowBoardAdd={toggleShowBoardAdd} />
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">Tracking ID</TableCell> */}
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Action</TableCell>
            {/* <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allBoard && allBoard.length > 0 && allBoard.map((row, index) => {
            let id = row._id;
            let linkadd = `/boardcontent/${id}`
            console.log(99999999, row)
            return (
              <TableRow key={row._id}>
                {/* <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />

                </div>
              </TableCell> */}
                <TableCell className="tableCell">{row.title}</TableCell>
                {/* <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell> */}
                {/* <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
                <TableCell className="tableCell">
                  <div className="cellAction">
                    <Link to={linkadd} style={{ textDecoration: "none" }}>
                      <button className="viewButton" value={id} onClick={handleView}
                      >View</button>
                    </Link>
                    <div
                      className="deleteButton"
                      onClick={() => handleDeleteBoard(row._id)}
                    >
                      Delete
                    </div>
                  </div>
                </TableCell>

              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
