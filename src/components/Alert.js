import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";

export default function Alert() {
  const context = useContext(noteContext);
  const { alerttext } = context;
  return (
    <>
      <div >
        <div
          className={`alert alert-danger alert-dismissible fade show`}
          
          role="alert"
        >
          <strong>djhjmrtf</strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
}
