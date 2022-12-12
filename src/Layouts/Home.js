import React from "react";
import "./Home.css";
import NavBar from "../Components/Navbar/navBar";
import Footer from "../Components/footer/footer"
import Button from "@mui/material/Button";
import MdPhone from "@mui/icons-material/Phone";
import IM1 from "../assets/im1.jpg";
import IM2 from "../assets/im2.jpg";

export default function Home() {
  return (
    <div className="homeLayout">
      <NavBar home={"active"}></NavBar>

      <div className="hero">
        <div className="heroTxt">
          <h1>Hi I'm Moni,</h1>
          <span>and I love painting.</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Libero nesciunt dolorum obcaecati fugiat.{" "}
          </p>
          <Button
            style={{ marginTop: "1.4vw", backgroundColor: "var(--primaryVar)" }}
            variant="contained"
            startIcon={<MdPhone />}
          >
            CONTACT ME
          </Button>
        </div>
        <div className="heroImg">
          <div className="heroimg"></div>
        </div>
      </div>

      <div className="recentsTitle">
        <h1>Recent Paintings</h1>
        <h4><a href="/paintings">view more</a></h4>
      </div>

      <div className="recents">
        <div className="recent">
          <div className="recentImg">
            <img src={IM1} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="recent">
          <div className="recentImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="recent">
          <div className="recentImg">
            <img src={IM1} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>

        <div className="recent">
          <div className="recentImg">
            <img src={IM2} alt="" />
          </div>
          <h3>Art Name</h3>
          <p>Art description and size of the art work.</p>
        </div>
      </div>


      <div className="aboutTitle">
        <h1>About Me</h1>
      </div>


      <div className="about">
        <div className="aboutImg">
          <div className="aboutimg"></div>
        </div>

        <div className="aboutTxt">
          <h1>Monaliza Afework</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore placeat et ducimus doloremque at similique fugiat recusandae atque! Doloribus quasi voluptatibus ut numquam! Blanditiis libero esse totam minus. Beatae.</p>
          <br /><br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore placeat.</p>
          <Button
            style={{ marginTop: "1.4vw", backgroundColor: "var(--primaryVar)" }}
            variant="contained"
            startIcon={<MdPhone />}
          >
            CONTACT ME
          </Button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
