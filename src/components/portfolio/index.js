import React from "react";
import "./style.css";
import Navbar from "../navbar"
import PastWork from "../myWork";
import SkillSet from "../skills";
import Contact from "../contactMe";
import Services from "../services";
import Resume from "../resume";
import HeroBody from "../heroBody";
import HeroFooter from "../heroFooter";
import AboutMe from "../aboutMe";
import Header from "../header";

export default function portfolio() {
    return <div>
        <div class="preloader-wrapper">
            <div class="preloader">
                <img src="img/preloader.gif" alt="" />
            </div>
        </div>
        <form action="#home">
            <button id="toTop" title="Go to top">
                <i class="fas fa-angle-up"></i>
            </button>
        </form>
        <Header>
                <Navbar />
                <HeroBody />
                <HeroFooter />
                </Header>
        
        <div class="main-content">
            <AboutMe />
            <Resume />
            <Services />
            <SkillSet />
            <PastWork />
        </div>
        <Contact />
    </div>
}