import React, { useEffect, useState, useRef } from 'react';
import './Card.scss';
import { Dropdown, Form, Button } from 'react-bootstrap';
import ModalCard from "../Common/ModalCard"
import ModalCardDetail from 'components/Common/ModalCardDetail';
import { fetchAllUser } from '../../Actions/ApiCall'

function Card(props) {
  const [allUser, setallUser] = useState([])


  const { card } = props;
  const [showCardModal, setShowCardModal] = useState(false)
  const [showCardEdit, setShowCardEdit] = useState(false)
  // const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)
  const toggleShowCardModal = () => setShowCardModal(!showCardModal)
  const toggleShowCardEdit = () => setShowCardEdit(!showCardEdit)

  const getAllUser = async () => {
    let res = await fetchAllUser()
    setallUser(res)
    console.log(12, res)
  }




  useEffect(() => {
    getAllUser()
  }, [])


  return (
    <>

      <div className="card-item"  >
        {card.cover &&
          <img
            src={card.cover}
            className="card-cover"
            alt="ninh-img"
            onMouseDown={e => e.preventDefault}
          />}
        <span>{card.title}</span>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size="sm" className="dropdown-btn" />
            <Dropdown.Menu>
              {/* <Dropdown.Item onClick={handleShow} >Remove column</Dropdown.Item> */}
              <Dropdown.Item className="drop-item" onClick={toggleShowCardModal} >Add card details</Dropdown.Item>
              <Dropdown.Item className="drop-item" onClick={toggleShowCardEdit}>Update card details</Dropdown.Item>
              {/* <CardModal openModal={showCardModal} /> */}
              <ModalCard openModal={showCardModal} toggleShowCardModal={toggleShowCardModal} allUser={allUser} card={card} />
              <ModalCardDetail openModal={showCardEdit} toggleShowCardEdit={toggleShowCardEdit} allUser={allUser} card={card} />
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </div>
    </>



  )
}

export default Card;
