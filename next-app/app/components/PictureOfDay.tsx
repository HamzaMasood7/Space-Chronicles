"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';


interface PicDay {
  title: string;
  explanation: string;
  url: string;
  hdUrl: string
  date: string
}


const PictureOfDay = () => {

  const [data, setData] = useState<PicDay | null>(null);
  useEffect(() => {
    const apiUrl = 'http://localhost:5000/earth/today';



    axios
      .get(apiUrl)
      .then((response) => {
        const responseData: PicDay = response.data;
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData(null);
      });
  }, []);


  return (
    <div>
      {data ? (
        <>



          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={data.hdUrl} alt={data.title} /></figure>
            <div className="card-body text-center">
              <h2 className="card-title">
                {data.title}
                {/* <div className="badge badge-secondary">{data.explanation}</div> */}
              </h2>
              {/* <p>{data.explanation}</p> */}
              <div className="card-actions justify-end">
                {/* <div className="badge badge-outline">{data.explanation}</div> */}
                <div className="badge badge-outline">{data.date}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button className="btn btn-square">
          <span className="loading loading-spinner"></span>
        </button>
      )}
    </div>
  )
}

export default PictureOfDay
