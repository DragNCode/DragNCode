import { SimpleInput, InputWithAddon } from "@repo/ui/input";
import { SimpleButton } from "@repo/ui/button";
import { useState } from "react";
import {  useRouter } from "next/router";

const Signup: React.FC = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({ msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleFormSubmit = () => {

  };

  return (
    <div className="p-5 mx-auto max-w-lg my-28">
      <h1 className="text-3xl text-center">Register</h1>
      <form className="flex flex-col gap-4 my-7" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Enter username"
          className="p-3 border border-blue-700 rounded-md"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter email"
          className="p-3 border border-blue-700 rounded-md"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter password"
          className="p-3 border border-blue-700 rounded-md"
          onChange={handleChange}
        />

        <button className="p-2 border border-black rounded-md text-white bg-pink-600 hover:bg-pink-500 font-semibold uppercase">
          {loading ? "sigining up..." : "sign up"}
        </button>
      </form>

      {error && <span className="text-red-600">{error.msg}</span>}
      <span>already have an account? </span>
    </div>
  );
};

export default Signup;
