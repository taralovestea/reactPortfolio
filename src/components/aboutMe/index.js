import React from "react";
import "./style.css";

export default function aboutMe(){ 
return <div class="section-light about-me" id="about-me">
 <div class="container">
     <div class="column is-12 about-me">
         <h1 class="title has-text-centered section-title">About Me</h1>
     </div>
     <div class="columns is-multiline">
         <div
             class="column is-6 has-vertically-aligned-content"
             data-aos="fade-right"
         >
             <p class="is-larger">
                 &emsp;&emsp;<strong
                 >I have a unique background of health and wellness mixed with tech experience.
                         My creativity and calmness under pressure exemplifies my coding techniques to
   provide a great user experience. </strong>
             </p>
             <br />
             <p>
                 I strive to unite my love of the natural world with my fascination for technology and
                 the future.
</p>
             <br />
             <div class="is-divider"></div>
             <div class="columns about-links">
                 <div class="column">
                     <p class="heading">
                         <strong>Give me a ring</strong>
                     </p>
                     <p class="subheading">
                         940-597-2728
   </p>
                 </div>
                 <div class="column">
                     <p class="heading">
                         <strong>Email Me</strong>
                     </p>
                     <p class="subheading">
                         taraelisabethhughes@gmail.com
   </p>
                 </div>
                 <div class="column">
                     <p class="heading">
                         <strong>View my portfolio</strong>
                     </p>
                     <p class="subheading">
                         github.com/taralovestea
   </p>
                     <p class="heading">
                         <strong>LinkedIn</strong>
                     </p>
                     <p class="subheading">
                         www.linkedin.com/in/taraElisabethHughes
   </p>
                 </div>
             </div>
         </div>
         <div class="column is-6 right-image " data-aos="fade-left">
             <img
                 class="is-rounded"
                 src="https://picsum.photos/id/366/600/375"
                 alt=""
             />
         </div>
     </div>
 </div>
</div>
}