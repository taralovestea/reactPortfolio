import React from "react"

function header(props) {
 return <div class="header-wrapper" id="home">
 <section class="hero is-large">
    {props.children}
 </section>
</div>
}

export default header