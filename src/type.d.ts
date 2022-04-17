interface UserProfile {
    _id: string,
    userName: string,
    realName: string,
    totalLines: number,
    htmlLines: number,
    cssLines: number,
    jsLines: number,
    posts: number,
    avgTotalPoints: number,
    avgHTMLPoints: number,
    avgCSSPoints: number,
    avgJSPoints: number,
    pfpSrc: string
}

interface UserProfileProps {
    user: UserProfile,
    place: number,
    lang: string
}

type APIResponseType = {
    message: string,
    status: string, 
    users: UserProfile[]
}