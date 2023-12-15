import axios from "axios";

const Login = () => {

    const handleLogin = async () => {
        console.log('hi')
        const req = await axios.post('http://localhost:3000/api/login', {
            username: 'krsih',
            password: '10'
        })
        const res = await req.data;
        console.log(res);
    }

    return (
        <button onClick={handleLogin} >Login</button>
    )
}

export default Login;