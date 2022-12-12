import React from "react";
import "./Paintings.css";
import NavBar from "../Components/Navbar/navBar";
import Footer from "../Components/footer/footer"
import IM1 from "../assets/im1.jpg";
import IM2 from "../assets/im2.jpg";

export default function Paintings() {
  return (
    <div className="homeLayout">
      <NavBar paintings={"active"}></NavBar>

      <div className="paintingsTitle">
        <h1>My Paintings</h1>
        <h4>Monaliza Afework</h4>
      </div>

      <div className="paintings">
        <div className="painting">
          <div className="paintingImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM1} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM1} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM1} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM1} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM1} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="painting">
          <div className="paintingImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
