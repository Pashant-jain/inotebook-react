import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "0",
      user: "0",
      title: "My a",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.509Z",
      __v: 0,
    },
    {
      _id: "1",
      user: "1",
      title: "My b",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "2",
      user: "2",
      title: "My c",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.509Z",
      __v: 0,
    },
    {
      _id: "3",
      user: "3",
      title: "My d",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "4",
      user: "4",
      title: "My e",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.509Z",
      __v: 0,
    },
    {
      _id: "5",
      user: "5",
      title: "My f",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "6",
      user: "6",
      title: "My g",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.509Z",
      __v: 0,
    },
    {
      _id: "7",
      user: "7",
      title: "My h",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
  ];
  const usersInitial = [
    {
      name: "prashant",
      email: "prashant.jain@webllisto.com",
      password: "123456",
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  const [users, setUsers] = useState(usersInitial);
  const [isconnect, setIsConnect] = useState(false);

  const addNote = (title, description, tag) => {
    console.log("Adding a new note");
    const note = {
      _id: "8",
      user: "8",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  const deletenote = (id) => {
    console.log("item deleted of id = " + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  const editnoteFnc = async (id, title, description, tag, index) => {
    let newNotes = notes;
    const element = newNotes[index];
    if (element._id !== id) {
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].tag = tag;
    }
    setNotes(newNotes);
  };
  // user states
  const addUser = (name, email, password) => {
    console.log("Adding a new user");
    const user = {
      name: name,
      email: email,
      password: password,
    };
    setUsers(users.concat(user));
  };
  const userLogin = (lemail, lpassword) => {
    let indexemail = users.find((res) => res.email === lemail);
    let indexpassword = users.find((res) => res.password === lpassword);
    if (indexemail) {
      if (indexpassword) {
        setIsConnect(true);
      } else {
        setIsConnect(false);
        alert('invalid password')
      }
    } else {
      setIsConnect(false);
      alert('invalid email')
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        addNote,
        deletenote,
        editnoteFnc,
        users,
        setUsers,
        addUser,
        userLogin,
        isconnect,
        setIsConnect,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
