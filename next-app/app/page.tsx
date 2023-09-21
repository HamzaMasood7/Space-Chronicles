import Navbar from "./components/Navbar";
import PictureOfDay from "./components/PictureOfDay";




export default function Home() {


  return (
    <main>
      <div>
        <Navbar />

        <div className="container-flex mt-8 text-center m-4">
          <h1 className="text-white text-8xl text-center">
            Your Guide To
            <span className=" text-emerald-600">
              {" "}Space
            </span>

          </h1>
        </div>

        <div className="container-flex flex justify-center mt-36">
          <PictureOfDay />

        </div>



      </div>
    </main>
  );
}
