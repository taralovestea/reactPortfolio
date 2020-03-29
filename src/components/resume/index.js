import React from "react";
import "./style.css";

export default function resume() {
return <div class="section-dark resume">
<div class="container">
    <div
        class="columns is-multiline"
        data-aos="fade-in"
        data-aos-easing="linear"
    >
        <div class="column is-12 about-me">
            <h1 class="title has-text-centered section-title">
                View My Resume
</h1>
        </div>
        <div class="column is-10 has-text-centered is-offset-1">
            <h2 class="subtitle">
                My experience is a culmination of my love of adventure and my sense of purpose.
</h2>
            <a href="path_to_file" download="file:///Users/taraaelisabeth/Desktop/My_New_Resume.pdf"> </a>
            <button class="button">
                Download Resume&emsp;<i class="fad fa-download fa-lg"></i>
            </button>

        </div>
    </div>
</div>
</div>

}