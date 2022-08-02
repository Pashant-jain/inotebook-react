import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import noteContext from "../../context/notes/noteContext";

export default function Editmodal(props) {
  const context = useContext(noteContext);
  const {editnoteFnc} = context;
  const update = {
    index:props.handleEditClick.index,
    _id: props.handleEditClick.id,
    user: props.handleEditClick,
    title: props.handleEditClick.title,
    description: props.handleEditClick.description,
    tag: props.handleEditClick.tag,
    date: "2021-09-03T14:20:09.668Z",
    __v: 0,
  };
  const [note, setNote] = useState(update);
  const onEdit = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const updateNote = (e) => {
    editnoteFnc(note.id, note.title, note.description, note.tag,note.index);
    props.handleClose();
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="my-3">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="emailHelp"
                value={note.title}
                onChange={onEdit}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={note.description}
                onChange={onEdit}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                onChange={onEdit}
                value={note.tag}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateNote(note);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
