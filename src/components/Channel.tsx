import { SyntheticEvent, useState } from 'react'
import { useUser } from '../context/user'
import { firebase, firestore } from "../services/firebase"
import { useCollectionData } from 'react-firebase-hooks/firestore';

interface IMessage {
    id: string,
    text: string,
    uid: string,
    photoURL: string,
    displayName: string,
    createdAt: firebase.firestore.Timestamp
}

const messagesRef = firestore.collection("Messages")
const messageQuery = messagesRef.orderBy("createdAt").limit(100)

const Channel = () => {
    const [text, setText] = useState("")
    const { logout, user } = useUser()
    const [messages, loading, error] = useCollectionData<IMessage>(messageQuery, { idField: "id"});

    console.log(error);
    
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
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <section>
            <button onClick={logout}>Logout</button>
            <section>
                {messages && messages.map(({text, id, displayName}) => (
                    <div key={id}>
                        [{displayName}:] {text}
                    </div>
                ))}
            </section>
            <form onSubmit={sendMessage}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Channel
