import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'; // Importing your new global UI wrapper

// 1. The Data Contract
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

    // 2. The Authentication Engine
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('medserve_token');
            
            // Security check: No token? Go to login.
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                // Fetch the user data from Laravel
                const response = await axios.get('http://127.0.0.1:8000/api/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                });

                setUser(response.data);
            } catch (error) {
                console.error("Token invalid or expired.");
                localStorage.removeItem('medserve_token');
                navigate('/login'); 
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    // 3. The Visual Render (Now using Tailwind + Layout)
    return (
        <Layout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                {loading ? (
                    /* A professional loading skeleton */
                    <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                        </div>
                    </div>
                ) : (
                    /* The Actual Dashboard Content */
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">
                            Welcome back, {user?.name}!
                        </h2>
                        
                        <p className="text-slate-500 font-medium mb-8">
                            System Role: <span className="text-blue-600 uppercase tracking-wider font-bold">{user?.roles?.join(', ') || 'Staff'}</span>
                        </p>
                        
                        {/* Quick Actions Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-blue-900 font-bold text-lg mb-2">Inventory Management</h3>
                                <p className="text-blue-700 text-sm mb-5">Track incoming medicine deliveries and monitor expiration dates.</p>
                                <button 
                                    onClick={() => navigate('/batches')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors shadow-sm"
                                >
                                    Manage Batches &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}