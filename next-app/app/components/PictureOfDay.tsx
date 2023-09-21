
import React from 'react';


interface PicDay {
  title: string;
  explanation: string;
  url: string;
  hdUrl: string
}


const PictureOfDay = async () => {


  const apiUrl = 'http://localhost:5000/earth/today';
  const res = await fetch(apiUrl);
  const data: PicDay = await res.json();


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
              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">{data.explanation}</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
            </div>
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  )
}

export default PictureOfDay
