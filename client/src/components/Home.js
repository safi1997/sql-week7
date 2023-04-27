import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  let navigate = useNavigate();
  const showCreatePage = () => {
    navigate("/create");
  };

  const showPostPage = () => {
    navigate("/posts");
  };
  return (
    <div>
      <Navbar className="mb-5" />

      <div className="container d-flex justify-content-around mt-5">
        <div className="w-50">
          <p className="text-white fs-1">Bloggy</p>
          <h5 className="text-white">Where words come to life</h5>

          <button onClick={showCreatePage} className="btn bg-light w-75 mb-3">
            create
          </button>

          <button
            onClick={showPostPage}
            className="btn bg-danger text-white w-75"
          >
            view posts
          </button>
        </div>
        <div className="w-50">
          <img
            src="https://hicoders.ch/wp-content/uploads/2022/03/11-Fullstack-Web-Programming.png"
            alt="..."
            className="w-75"
          />
        </div>
      </div>
      <div className="card mt-5 mx-5 quote">
        <div className="card-header text-center">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="fs-6 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nesciunt omnis reprehenderit tenetur rem consequatur
              voluptatum soluta assumenda, adipisci illum ab nam, error sapiente
              deleniti quo rerum aperiam sit quasi numquam tempora. Ratione
              deserunt ad expedita vitae eligendi! Quasi velit quod architecto
              consequuntur in voluptatum ea voluptas delectus tempore quam?
              Quasi velit quod architecto consequuntur in voluptatum ea voluptas
              delectus tempore quam? Quasi velit quod architecto consequuntur in
              voluptatum ea voluptas delectus tempore quam?
            </p>
            <footer className="blockquote-footer text-center">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;
