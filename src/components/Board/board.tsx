import React from 'react'
import Profiles from '../Profiles/profiles'

export default function Board(){
    return (
       <div className="board">
           <h1 className='leaderboard'> HNC Leaderboard</h1>
           <div className="duration">
                <button> Web Suite</button>
                <button> HTML</button>
                <button> CSS</button>
                <button> JS</button>
           </div>

           <Profiles></Profiles>
       </div>

    )
}

