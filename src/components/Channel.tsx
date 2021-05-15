import { SyntheticEvent, useState, FC} from 'react'
import { useUser } from '../context/user'
import { firebase, firestore } from "../services/firebase"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';

interface IMessage {
    id: string,
    text: string,
    uid: string,
    photoURL: string,
    displayName: string,
    createdAt: firebase.firestore.Timestamp
}


interface IChannel {
    title: string
}

const Channel: FC<IChannel> = ({title}) => {

    const messagesRef = firestore.collection(`${title}_messages`)
    const messageQuery = messagesRef.orderBy("createdAt").limit(100)
    const [text, setText] = useState("")
    const { user } = useUser()
    const [messages, loading] = useCollectionData<IMessage>(messageQuery, { idField: "id"});
    
    const sendMessage = (event: SyntheticEvent) => {
        event.preventDefault()

        if ( text.trim().length < 2) {
            return;
        }

        if (user) {
            const { displayName, photoURL, uid } = user;
            messagesRef.add({
                text,
                photoURL, 
                displayName,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp() ,
            })
        }
        setText("")
    }

    if (loading) {
        return <section className="bg-blueGray-800 min-w-screen min-h-screen pl-60 text-white">Loading...</section>
    }
    
    return (
        
        <section className="bg-blueGray-800 min-w-screen min-h-screen pl-60 pt-8 flex flex-col justify-between">
            <h1 className="text-white text-5xl text-center mb-4">Welcome to # {title}</h1>
            <section className="w-full pr-8 pl-8 flex-grow">
                {messages && messages.map(({text, id, displayName, uid, photoURL}) => (
                   <Message key={id} text={text} displayName={displayName} photoURL={photoURL} uid={uid}/>
                ))}
            </section>
            <form onSubmit={sendMessage} className="fixed bottom-0 bg-blueGray-800 w-full pb-8 pl-4">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="rounded-xl focus:outline-none py-2 pl-4 bg-blueGray-600 text-white w-4/5"/>
                <button className="px-8 py-2 bg-indigo-900 rounded-r-xl text-white focus:outline-none hover:bg-indigo-800 relative right-24">Enviar</button>
            </form>
        </section>
    )
}

export default Channel
