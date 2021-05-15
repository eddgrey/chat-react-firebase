import { useUser } from '../context/user'

const Login = () => {
    const { login } = useUser()
    return (
        <div className="w-screen h-screen bg-blueGray-800 text-white flex flex-col items-center justify-center">
            <h2 className="text-3xl mb-10">Chat with React and Firebase</h2>
            <button className=" bg-red-700 rounded-md p-2" onClick={login}>Login with Google</button>
        </div>
    )
}

export default Login
