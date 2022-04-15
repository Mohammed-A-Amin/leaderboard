import React from 'react'

export default function Profiles(){
    return (
        <div id="profile">
            {item()}
           
        </div>
    )
}

function item(){
    return (
        <div className="flex">
            <div className="item">
                <img src = "https://www.hollywoodprimaryschool.co.uk/wp-content/uploads/male-placeholder.jpg"/>

                <div className="info">
                    <h3 className = 'name text-dark'> Real Name</h3>
                    <span> Username</span>
                </div>
            </div>
            <div className="item">
                <span>Points</span>
            </div>
        </div>
    )
}