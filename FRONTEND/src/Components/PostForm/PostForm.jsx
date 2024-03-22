import React, { useState } from "react";
import Sidebar from "../Navigation/Sildebar";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate=useNavigate()
  const [val, setVal] = useState({ title: "", description: "" })

  const onchange=(e)=>{
     
      setVal({...val,[e.target.name]:e.target.value})
  }

  function postFeed(e) {
    const title=val.title;
    const description=val.description;
    
    e.preventDefault();
    fetch("http://localhost:5000/api/feed/addFeed", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "auth_Token":localStorage.getItem('token')
      },
      body: JSON.stringify({title,description})
    }).then((result) => {

      result.json().then((res) => {
        alert("Posted Successful");

        navigate('/home');
      })
    })


  }
  return (
    <>
      <Sidebar />
      <div className="p-6 sm:ml-64">
        <div className="max-w-3xl mx-auto  mb-24 bg-white p-5 rounded-md shadow-md mt-20">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              onChange={onchange}
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              onChange={onchange}
              rows="4"
              placeholder="Enter description"
            ></textarea>
          </div>
          <button onClick={postFeed} className="group relative rounded-3xl inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>
            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
              POST
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostForm;