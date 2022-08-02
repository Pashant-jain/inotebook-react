import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import Editmodal from "./modal/Editmodal";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, deletenote } = context;
  const [showModal, setShowModal] = useState(false);
  const [handleEditClick, sethandleEditClick] = useState(null);
  const handleEditModal = (_id, title, description, tag, index) => {
    setShowModal(true);
    const update = {
      index: index,
      _id: _id,
      user: _id,
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    sethandleEditClick(update);
  };

  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h2>You Notes</h2>
        {notes.length === 0 ? (
          "no notes are there"
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Discription</th>
                <th scope="col">Tag</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => {
                return (
                  <tr key={note._id}>
                    <td>{note.title}</td>
                    <td>{note.description}</td>
                    <td>{note.tag}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleEditModal(
                            note._id,
                            note.title,
                            note.description,
                            note.tag,
                            index
                          );
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          deletenote(note._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {showModal && (
          <Editmodal
            show={showModal}
            handleClose={() => setShowModal(false)}
            handleEditClick={handleEditClick}
          />
        )}
      </div>
    </>
  );
};

export default Notes;
