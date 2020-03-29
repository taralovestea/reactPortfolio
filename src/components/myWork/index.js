import React from "react";
import "./style.css";

export default function PastWork(){
return  <div class="section-dark my-work" id="my-work">
<div class="container">
    <div
        class="columns is-multiline"
        data-aos="fade-in"
        data-aos-easing="linear"
    >
        <div class="column is-12">
            <h1 class="title has-text-centered section-title">My Work</h1>
        </div>


    </div>
    <div class="column is-3">
        Weather Api Website
<a href="https://taralovestea.github.io/WeatherApi/">
            <figure id="weather"
                class="image is-2by1 work-item"
            ></figure>
        </a>
    </div>
    <div class="column is-3">
        New Favorite song Website
<a href="https://taralovestea.github.io/New-Favorite-Song/">
            <figure id="favSong"
                class="image is-2by1 work-item"
            ></figure>
        </a>
    </div>
    <div class="column is-3">
        Password Generator
<a href="https://taralovestea.github.io/PasswordGenerator/">
            <figure id="password"
                class="image is-2by1 work-item"
            ></figure>
        </a>
    </div>


</div>
</div>


}