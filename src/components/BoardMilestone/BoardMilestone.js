import React, { useState, useEffect, useRef } from 'react';
import { isEmpty, cloneDeep } from 'lodash';
import './BoardMilestone.scss';
import { Container as BootstrapContainer, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getAllColumnByBoard, createNewMilestone, getAllMileByBoard, updateMile, deleteMile } from 'Actions/ApiCall'
import { Link } from "react-router-dom";
import AlarmIcon from '@mui/icons-material/Alarm';
import moment from "moment";

function BoardMilestone() {

  const [columns, setColumns] = useState([])
  const [allMileStone, setMileStone] = useState([])
  const [MileStoneId, setMileStoneId] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const [culumnId, setCulmnId] = useState()
  const [title, setTitle] = useState()
  const [status, setStatus] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const boardId = id
    getAllColumn(boardId)
    getAllMileStone(boardId)
  }, [])



  const getAllColumn = async (id) => {
    let res = await getAllColumnByBoard(id);
    setColumns(res)
    console.log("check res: ", res)
  }

  const getAllMileStone = async (id) => {
    let res = await getAllMileByBoard(id);
    console.log("check res: ", res)
    setMileStone(res)
  }

  const onChangeInput = (e, id) => {
    let result = e.target.value
    if (id == "startDate") {
      setStartDate(result)
      console.log(startDate)
    }
    if (id == "endDate") {
      setEndDate(result)
      console.log(endDate)
    }
    if (id == "culumnId") {
      setCulmnId(result)
      console.log(culumnId)
    }
    if (id == "title") {
      setTitle(result)

    }

  }


  const onCreateNew = async () => {
    if (status) {
      let res = await createNewMilestone({
        boardId: id,
        columnId: culumnId,
        title: title,
        startDate: new Date(startDate).getTime(),
        endDate: new Date(endDate).getTime(),
      })
      getAllMileStone(id)
    }
    else {
      let res = await updateMile(MileStoneId, {
        startDate: new Date(startDate).getTime(),
        endDate: new Date(endDate).getTime(),
        title: title
      })
      getAllMileStone(id)

    }


  }

  const handleEditMileStone = (item) => {
    console.log("check item : ", item)
    setMileStoneId(item._id)
    setStartDate(item.startDate);
    setEndDate(item.endDate);
    setTitle(item.title);
    setCulmnId(item.columnId);
    setStatus(!status)
  }

  const handleDelete = async (id) => {
    if (id) {
      let check = window.confirm("You want to delete!")
      if (check) {
        await deleteMile(id)
        getAllMileStone(id)
      }
    }
  }




  return (

    <div className="board-content">
      <div><button onClick={() => onCreateNew()}>{status ? "Create New Milestone" : "Update MileStone"}</button></div>
      <div className="row">
        <div className="col-6 form-group">
          <label>Start date</label>
          <input value={startDate} type="date" className="form-control" onChange={(e) => onChangeInput(e, "startDate")}></input>
        </div>
        <div className="col-6 form-group">
          <label>End date</label>
          <input value={endDate} type="date" className="form-control" onChange={(e) => onChangeInput(e, "endDate")}></input>
        </div>
        <div className="col-6 form-group">
          <label>title</label>
          <input value={title} type="text" className="form-control" onChange={(e) => onChangeInput(e, "title")}></input>
        </div>
        <div className="col-6 form-group">
          <label>Column</label>
          <select value={culumnId} className="form-control" onChange={(e) => onChangeInput(e, "culumnId")}>
            {columns && columns.length > 0 && columns.map((item, index) => {
              return (<option value={item._id}>{item.title}</option>)
            })
            }
          </select>
        </div>

        <div className="container">
          <table >
            <tr>
              <th>Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
            {allMileStone && allMileStone.length > 0 && allMileStone.map((item, index) => {
              return (<tr>
                <td>{item.title}</td>
                <td>  {moment(item.startDate).format(
                  "DD/MM/YYYY"
                )}</td>
                <td>{moment(item.endDate).format(
                  "DD/MM/YYYY"
                )}</td>
                <td>
                  <button onClick={() => handleEditMileStone(item)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>)

            })}

          </table>
        </div>
      </div>

    </div>
  )
}

export default BoardMilestone;
