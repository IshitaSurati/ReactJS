import React, { useEffect, useState } from "react";
import API from "./config/API";

function Form() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const getUser = async () => {
        try {
            const res = await API.get("/user/");
            console.log("Fetched users:", res.data);
        } catch (error) {
            console.error("Error fetching users:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const createUser = async () => {
        try {
            const res = await API.post("/user/signup", data);
            console.log("User created successfully:", res.data);
        } catch (error) {
            console.error("Error creating user:", error.response?.data || error.message);
        }
    };

    const loginUser = async () => {
        try {
            const res = await API.post("/user/login", { email: data.email, password: data.password });
            console.log("Login successful:", res.data);
        } catch (error) {
            console.error("Error logging in:", error.response?.data || error.message);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (data.name) {
            await createUser();
        } else {
            await loginUser();
        }
        setData({
            name: "",
            email: "",
            password: ""
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleInput}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleInput}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleInput}
                    required
                />
                <button type="submit">{data.name ? "Sign Up" : "Login"}</button>
            </form>
        </div>
    );
}

export default Form;
