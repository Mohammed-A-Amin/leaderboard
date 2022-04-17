import React, { useEffect, useState } from 'react'
import ProfileItem from '../Profiles/ProfileItem'
import { getUsersRanked} from '../../API'

export default function Board() {
    const [users, setBoard] = useState<UserProfile[]>([])
    let [currentLang, setLang] = useState("")

    useEffect(() => {
        setLang("Suite")
        fetchUsers("suite")
    }, [])

    const fetchUsers = (lang:string): void => {
        getUsersRanked(lang)
            .then(({ data: { users } }: UserProfile[] | any) => setBoard(users))
            .catch((err: Error) => console.log(err))
    }


    return (
        <div className="board">
            <div className="profile">
                <h1 className='leaderboard'> HNC Leaderboard</h1>
                <div className="duration">
                    <button onClick={() => {
                        setLang("Suite")
                        fetchUsers("suite")
                    }}> Web Suite</button>
                    <button onClick={() => {
                        setLang("HTML")
                        fetchUsers("HTML")
                    }}> HTML</button>
                    <button onClick={() => {
                        setLang("CSS")
                        fetchUsers("CSS")
                    }}> CSS</button>
                    <button onClick={() => {
                        setLang("JS")
                        fetchUsers("JS")
                    }}> JS</button>
                </div>
                <div className = "profiles">
                {users.map((user: UserProfile, i: number) => (
                    <div>
                        <span><ProfileItem user={user} place = {i+1} lang = {currentLang}/></span>
                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}

