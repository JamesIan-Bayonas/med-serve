import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'lucide-react';

// 1. The Data Contract: Tells TypeScript what data to expect from Laravel
interface UserProfile {
    id: number;
    name: string;
    email: string;
    roles: string[];
}

export default function Dashboard() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    // 2. The Authentication Handshake
    useEffect(() => {
        const fetchUserData = async () => {
            // Grab the digital ID card created by the Login page
            const token = localStorage.getItem('medserve_token');
            
            // If there is no token, kick them back to the login screen immediately
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                // Knock on Laravel's API door to get the user's data
                const response = await axios.get('http://127.0.0.1:8000/api/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                });

                setUser(response.data);
            } catch (error) {
                console.error("Authentication failed. Token might be expired.");
                // If Laravel rejects the token, destroy it and kick them out
                localStorage.removeItem('medserve_token');
                navigate('/login'); 
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    // 3. The Visual Render
    return (
        <Layout>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                 <h2 className="text-2xl font-bold text-slate-800">Welcome back!</h2>
            </div>
        </Layout>
    );
}