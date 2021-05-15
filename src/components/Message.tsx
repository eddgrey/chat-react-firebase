import { FC } from 'react'
import { useUser } from '../context/user'

interface info {
    text: string;
    displayName: string;
    photoURL: string;
    uid: string,
}

const Message: FC<info> = ({text, displayName, photoURL, uid}) => {

    const { user } = useUser()
    const bgMessage = user?.uid === uid? "bg-blue-700 text-white" : "bg-gray-300"
    const displayMessage = user?.uid === uid? "justify-end" : "justify-start"

    return (
        <div className={`flex flex-row w-full ${displayMessage} h-14 items-center mb-1`}>
            <div className={`px-2 py-2 mr-2 rounded-lg ${bgMessage}`}>
                {text}
            </div>
            <img src={photoURL} alt={displayName} className=" rounded-full w-8 h-8"/>
        </div>
    )
}

export default Message
