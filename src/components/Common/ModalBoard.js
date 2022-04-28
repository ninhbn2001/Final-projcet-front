import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import { createNewBoard } from "../../Actions/ApiCall"


class ModalBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
    }


    onChangeInput = (e, id) => {
        let result = e.target.value;
        let copyState = { ...this.state };
        copyState[id] = result;
        this.setState({ ...copyState });
    }

    handleAddBoard = () => {
        let { title } = this.state
        let detail = {
            title: title,
        }
        let res = createNewBoard(detail)
        console.log("check res: ", res)
    }




    // addCardDetails = () => {
    //     if (!newCardTitle) {
    //         newCardTextareaRef.current.focus()
    //         return
    //     }
    //     const newCardToAdd = {
    //         boardId: column.boardId,
    //         columnId: column._id,
    //         title: newCardTitle.trim()
    //     }
    //     createNewCard(newCardToAdd).then(card => {
    //         let newColumn = cloneDeep(column)
    //         newColumn.cards.push(card)
    //         newColumn.cardOrder.push(card._id)

    //         onUpdateColumnState(newColumn)
    //         setNewCardTitle('')
    //         toggleOpenNewCardForm()
    //     })
    // }

    componentDidMount() { }

    componentDidUpdate(prevProps, prevState, snapshot) { }

    toggleModal = () => {
        this.props.toggleShowBoardAdd();
    }

    render() {
        let { openModal } = this.props
        let { title } = this.state
        console.log("check state: ", this.state)
        return <>
            <Modal

                isOpen={openModal}
                toggle={() => {
                    this.toggleModal();
                }}
                size="lg"
                centered={true}
                className="modal-user-container"
            >
                <ModalHeader
                    toggle={() => {
                        this.toggleModal();
                    }}
                >
                    Create New Board
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => this.onChangeInput(e, "title")}
                            />
                        </div>
                        {/* <div className="input-container">
                            <label>User</label>
                            <select
                                value={userId}
                                onChange={(e) => this.onChangeInput(e, "userId")}
                            >
                                {allUser && allUser.length > 0 && allUser.map((item, index) => {
                                    return (
                                        <option value={item._id}>{item.userName}</option>
                                    )
                                })}
                            </select>
                        </div> */}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => {
                            this.handleAddBoard();
                        }}
                    >
                        Save
                    </Button>{" "}
                    <Button
                        onClick={() => {
                            this.toggleModal();
                        }}
                        className="px-3"
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>;
    }
}



export default ModalBoard;