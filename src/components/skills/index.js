import React from "react";
import "./style.css";

export default function skillSet(){
return <div class="section-light skills" id="skills">
<div class="container">
    <div class="columns is-multiline">
        <div class="column is-12 about-me">
            <h1 class="title has-text-centered section-title">Skills</h1>
        </div>
        <div
            class="column is-6"
            data-aos="fade-in"
            data-aos-easing="linear"
        >
            <div
                class="column is-6"
                data-aos="fade-in"
                data-aos-easing="linear"
            >
                <h1>HTML</h1>
                <progress class="progress" value="85" max="100">60%</progress>
                <h1>CSS</h1>
                <progress class="progress" value="95" max="100">60%</progress>
                <h1>VsCode</h1>
                <progress class="progress" value="70" max="100">60%</progress>
                <h1>Javascript </h1>
                <progress class="progress" value="60" max="100">40%</progress>
            </div>
        </div>
    </div>
</div>
</div>

}