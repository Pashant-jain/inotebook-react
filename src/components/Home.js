import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import Notes from './Notes';
import noteContext from '../context/notes/noteContext';

export const Home = () => {
    const context = useContext(noteContext);
    const {isconnect } = context;

    return (
        <div>
            {isconnect ? <Notes/> : 
            <div>
                <h1>please <Link to={'/login'}>login</Link> to make notes</h1>
            </div>
            }
             
        </div>
    )
}
