import React from "react";
import { Link } from "react-router-dom";
export default function ErrorPage() {
    return(
        <div>
            Looks like you got lost press this button to go back to home page...
            <button><Link to="/">home</Link></button>
        </div>
    )
}