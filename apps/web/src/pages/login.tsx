import { SimpleInput, InputWithAddon } from "@repo/ui/input";
import { SimpleButton } from "@repo/ui/button";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { log } from "console";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ msg: "" });
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e:any) => {
    const value = e.target.value;
    setFormData({...formData,  [e.target.name]:value })
  };
  const handleFormSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {

      const res = await axios.post('http://localhost:3000/api/login');
      const data = await res.data;

      console.log(data);
      
      
    } catch (error:any) {
      console.log(error.message);
      setError({msg : `${error.message}`});
      
    }

    setLoading(false)
    

  };

  return (
    <div className="p-5 mx-auto max-w-lg my-28">
      <h1 className="text-3xl text-center">Log In</h1>
      <form className="flex flex-col gap-4 my-7" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="enter email"
          className="p-3 border border-blue-700 rounded-md"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="enter password"
          className="p-3 border border-blue-700 rounded-md"
          onChange={handleChange}
        />

        <button className="p-2 border border-black rounded-md text-white bg-pink-600 hover:bg-pink-500 font-semibold uppercase">
          {loading ? "logging in..." : "log in"}
        </button>
      </form>

      {error && <span className="text-red-600 ">{error.msg}</span>}
      <div>dont have an account? </div>
    </div>
  );
};

export default Login;
