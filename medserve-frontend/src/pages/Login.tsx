import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('admin@medserve.com'); // Default from your seeder
    const [password, setPassword] = useState('password');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email,
                password
            }, {
                headers: { 'Accept': 'application/json' }
            });

            // 1. Save the new, valid token to the browser
            localStorage.setItem('medserve_token', response.data.access_token);
            
            // 2. Redirect the user to the Dashboard
            window.location.href = '/dashboard';

        } catch (err: any) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f6fb" }}>
            <div style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>MedServe Login</h2>
                
                {error && <div style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>{error}</div>}

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
                    </div>
                    <button type="submit" style={{ width: "100%", padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}