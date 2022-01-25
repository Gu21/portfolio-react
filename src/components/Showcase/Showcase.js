import React from "react";
import { NavLink } from "react-router-dom";

const Showcase = () => {
    return (
        <section>
            <div>
                <div className="logo">
                    <NavLink to="/" >
                        <li> Guillaume<span>BISSON</span></li>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
