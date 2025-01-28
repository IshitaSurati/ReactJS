import React, { useEffect, useState } from "react";
import API from "./config/API";

function Form() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [users, setUsers] = useState([]);
    const [isLoginForm, setIsLoginForm] = useState(false);

    // Handle input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    // Fetch users from the backend
    const getUsers = async () => {
        try {
            const res = await API.get("/user/");
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error.response?.data || error.message);
        }
    };

    // Create a new user
    const createUser = async () => {
        try {
            const res = await API.post("/user/signup", data);
            console.log("User created successfully:", res.data);

            // Switch to login form after signup
            setIsLoginForm(true);
            setData({ name: "", email: "", password: "" });
        } catch (error) {
            console.error("Error creating user:", error.response?.data || error.message);
        }
    };

    // Log in an existing user
    const loginUser = async () => {
        try {
            const res = await API.post("/user/login", { email: data.email, password: data.password });
            console.log("Login successful:", res.data);
            alert("Login successful!");
        } catch (error) {
            console.error("Error logging in:", error.response?.data || error.message);
        }
    };

    // Delete a user
    const deleteUser = async (id) => {
        try {
            const res = await API.delete(`/user/delete/${id}`);
            console.log("User deleted successfully:", res.data);
            getUsers(); // Refresh the user list
        } catch (error) {
            console.error("Error deleting user:", error.response?.data || error.message);
        }
    };

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        if (isLoginForm) {
            await loginUser();
        } else {
            await createUser();
        }
    };

    // Fetch users when the component mounts
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>{isLoginForm ? "Login" : "Sign Up"}</h2>
            <form onSubmit={onSubmit}>
                {!isLoginForm && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={handleInput}
                        required
                    />
                )}
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
                <button type="submit">{isLoginForm ? "Login" : "Sign Up"}</button>
            </form>

            {!isLoginForm && (
                <p>
                    Already have an account?{" "}
                    <button type="button" onClick={() => setIsLoginForm(true)}>
                        Login here
                    </button>
                </p>
            )}

            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>{user.name} - {user.email}</span>
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Form;
