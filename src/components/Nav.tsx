import { Link } from "react-router-dom"
import { useUser } from "../context/user"

const Nav = () => {
    const { user, logout } = useUser()
    return (
        <div className="flex flex-col bg-blueGray-900 text-blueGray-400 pt-10 h-screen w-60 fixed left-0 bottom-0 items-center justify-between">
            <div className="text-3xl px-4 w-full mb-10">Chat with React and Firebase</div>
            <div className="flex flex-col justify-start px-4 w-full flex-grow mb-10">
                <h2 className="uppercase text-sm mb-2">Text Channels</h2>
                <Link to="/" className="hover:text-gray-300"><span className="text-2xl mr-1"># </span> General Channel</Link>
                <Link to="/react" className="hover:text-gray-300"><span className="text-2xl mr-1">#</span> React Channel</Link>
                <Link to="/css" className="hover:text-gray-300"><span className="text-2xl mr-1">#</span> Css Channel</Link>
            </div>
            <div className="bg-gray-900 w-full pt-2 flex flex-row items-center flex-wrap justify-center">
                <img src={user?.photoURL?.toString()} alt="user" className="mr-2 w-8 rounded-full"/>
                <p className=" text-sm">{user?.displayName}</p>
                <button onClick={logout} className="bg-indigo-800 rounded-md p-2 text-white my-2">Logout</button>
            </div>
        </div>
    )
}

export default Nav
