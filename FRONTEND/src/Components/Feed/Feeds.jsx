import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import Sidebar from "../Navigation/Sildebar";

const Feeds = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    getfeeds();
  },[])

  const getfeeds =  () => {
    fetch("http://localhost:5000/api/feed/fetchallfeeds").then((res) => {
      res.json().then((res)=>{
        setData(res)
      })
    })
  }

  return (
    <>
      <Sidebar />
      <div className="p-6 sm:ml-64">
        {data.map((item) => {
          return (
            <div className="max-w-3xl mx-auto bg-cyan-700 p-5 rounded-md shadow-md  mt-20">
              {/* User Information */}
              <div className="flex items-center mb-4 ">
                {/* <img src={"NicePng_profile-icon-png_2024687.png"} alt="Profile" className="w-10 h-10 rounded-full mr-4" /> */}
                <div className="flex  w-full">
                  <p className="text-lg w-80 text-white font-semibold">
                    {item.username}
                  </p>
                  <p className="text-white w-96 pt-1   flex justify-end ">
                    ID: {item.enrollment}
                  </p>
                </div>
              </div>

              {/* Title and Description Divs */}
              <div className="mb-4 border rounded-md p-4">
                <div className="mb-2">
                  <label
                    htmlFor="title"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    {item.title}
                  </label>
                </div>

                <div>
                  <div className=" p-1 ">
                    <div
                      contentEditable="false"
                      className="placeholder-text text-sm  text-white"
                      placeholder="Enter description..."
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Like and Comment Buttons */}
              {/* <div className="flex">
                                <button className="flex items-center bg-blue-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                                <FaThumbsUp className="text-sm mr-1" /> Like
                                </button>
                                <button className="flex items-center bg-gray-500 text-white py-1 px-2 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray">
                                    <FaComment className="text-sm mr-1" /> Comment
                                </button>
                            </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feeds;