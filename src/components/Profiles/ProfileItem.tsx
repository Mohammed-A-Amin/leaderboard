import { userInfo } from 'os'
import React from 'react'

type Props = UserProfileProps

export default function ProfileItem({user, place, lang}:Props){
    return (
        <div className="flex">
            <div className="item">
                <span id = "userPlace" >{place}</span>
                <img src = {user.pfpSrc}/>

                <div className="info">
                    <h3 className = 'name text-dark'>{user.realName}</h3>
                    <span>{user.userName}</span>
                </div>
            </div>
            <div className="item">
                <span>{lang} Points: {user[`avg${lang}Points` as keyof UserProfile]}</span>
            </div>
            </div>
    )
}