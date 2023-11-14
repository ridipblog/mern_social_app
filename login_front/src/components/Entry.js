import { useState } from "react";
export default function Entry(props) {
    return (
        <div className="flex_div reg_div reg_image_div">
            <h1>{props.propText[0]}</h1>
            <p>{props.propText[1]}</p>
            <div className="flex_div reg_image_div_1">
                <hr></hr>
                <p>Join With Our Product</p>
                <hr></hr>
            </div>
            <div className="flex_div reg_image_div_1">
                <a href="/"><i className="fa-brands fa-twitter"></i></a>
                <a href="/"><i className="fa-brands fa-google"></i></a>
                <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
        </div>
    )
}