import React, { useState } from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import flowerImage from '../images/pencil.png';
import delimage from '../images/delete.png';
import addimage from '../images/add.png';

function Homepage() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState(1);
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const run = () => {
    setId(id + 1);
    const newDetails = { title, description, id, time: new Date().toLocaleString() };
    setDetails([...details, newDetails]);
    setTitle('');
    setDescription('');
  };

  const remove = (idToDelete) => {
    const updatedDetails = details.filter((detail) => detail.id !== idToDelete);
    setDetails(updatedDetails);
  };

  const edit = (idToEdit) => {
    const itemToEdit = details.find((detail) => detail.id === idToEdit);
    if (itemToEdit) {
      setEditId(idToEdit);
      setEditTitle(itemToEdit.title);
      setEditDescription(itemToEdit.description);
    }
  };

  const saveEdit = () => {
    const updatedDetails = details.map((detail) => {
      if (detail.id === editId) {
        return { ...detail, title: editTitle, description: editDescription };
      }

      return detail;
    });
    setDetails(updatedDetails);
    closeEditForm();
  };

  const closeEditForm = () => {
    setEditId(null);
    setEditTitle('');
    setEditDescription('');
  };

 

  return (
    <div className='bg-red-50'>
      <div className="font-bold text-5xl flex justify-center p-5 m-5 mb-5 bg-red-200">
        <p className='font-cursive bg-red-200 text-5xl'>TODO LIST</p>
        <div className='font-semibold text-3xl text-white bg-red-250 flex justify-center m-5'>
          <p>Mark Your Goals Here....</p>
        </div>
      </div>

      

      <div>
        <section className="flex justify-center">
          <label htmlFor="title" className='flex justify-center font-cursive'>TITLE</label>
          <input
            id="title"
            className="border border-black bg-red-100 px-20 font-cursive"
        
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="desc" className='font-cursive'>DESCRIPTION</label>
          <input
            id="desc"
            className="border border-black bg-red-100 px-20 font-cursive"
          
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button ><Link to="/explore"> Explore Here</Link>  </button>
        </section>
      </div>

      <button className="block mx-auto bg-red-200 rounded-lg m-5" onClick={run}>
        <div className="flex items-center font-cursive">
          <span>Add To Notes..</span>
          <img src={addimage} alt="add" className="w-auto h-5 pl-1" />
        </div>
      </button>

      {details.map((detail, index) => (
        <div className='pt-5 m-5 bg-blue-200' key={index}>
          <div className='flex justify-end mr-5 divide-y divide-gray-200'>
            <button onClick={() => edit(detail.id)} className='bg-yellow-200 rounded-lg p-2 pl-5 mr-5 font-cursive'>
              <div className="flex items-center">
                Edit
                <img src={flowerImage} alt="Flower" className="w-5 h-5 ml-2" />
              </div>
            </button>
            <button onClick={() => remove(detail.id)} className='bg-yellow-200 mr-7 pl-3 pr-3 rounded-lg font-cursive'>
              <div className='flex items-center'>
                Delete
                <img src={delimage} alt="delete" className='w-5 h-5' />
              </div>
            </button>
          </div>
          <p className='font-cursive pl-5  flex justify-center  bg-orange-100 px-20 rounded-full w-auto' > <h1 className='font-bold' flex justify center>Title: </h1>{detail.id === editId ? <input type="text" className='font-cursive' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} /> : detail.title}</p>
          <p className='p-10 m-5 bg-red-100  font-cursive'>
            <h1 className='font-bold pl-10'>Description: </h1>
            <h2 className='pl-40'>{detail.id === editId ? <input type="text" className='font-medium' value={editDescription} onChange={(e) => setEditDescription(e.target.value)} /> : detail.description} </h2>
          </p>
          <p className='font-verdana'>Time: {detail.time}</p>
          {detail.id === editId && (
            <div>
              <button className='p-2 m-3 rounded-lg bg-blue-300' onClick={saveEdit}>Save</button>
              <button className='p-2 m-3 rounded-lg bg-red-300' onClick={closeEditForm}>Cancel</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Homepage;




