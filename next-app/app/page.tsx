"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

interface PicDay {
  title: string;
  explanation: string;
  url: string;
}

export default function Home() {
  const [data, setData] = useState<PicDay | null>(null); // Annotate the type as PicDay | null

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/earth/today';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData: PicDay) => { // Annotate the type of responseData
        setData(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData(null);
      });
  }, []);

  return (
    <main>
      <div>
        <Navbar />
        {data ? (
          <>



            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={data.url} alt={data.title} /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {data.title}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                {/* <p>{data.explanation}</p> */}
                {/* <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div> */}
              </div>
            </div>
          </>
        ) : (
          'Loading...'
        )}
      </div>
    </main>
  );
}
