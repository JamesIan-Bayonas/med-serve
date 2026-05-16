import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Pill, LogOut } from 'lucide-react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('medserve_token');
        navigate('/login');
    };

    const isActive = (path: string) => location.pathname === path ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-600';

    return (
        <div className="flex h-screen bg-slate-50">
            {/* SIDEBAR */}
            <div className="w-64 bg-blue-800 text-white flex flex-col shadow-xl z-10">
                <div className="p-6 border-b border-blue-700">
                    <h1 className="text-2xl font-black tracking-tight">MedServe</h1>
                    <p className="text-blue-300 text-xs font-bold tracking-widest mt-1">BRGY NANGCA</p>
                </div>
                
                <nav className="flex-1 p-4 space-y-2">
                    <button 
                        onClick={() => navigate('/dashboard')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isActive('/dashboard')}`}
                    >
                        <LayoutDashboard size={20} />
                        Dashboard
                    </button>
                    
                    <button 
                        onClick={() => navigate('/batches')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isActive('/batches')}`}
                    >
                        <Pill size={20} />
                        Batch Tracking
                    </button>
                </nav>

                <div className="p-4 border-t border-blue-700">
                    <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-red-500 hover:text-white rounded-xl font-medium transition-colors"
                    >
                        <LogOut size={20} />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 overflow-auto">
                <main className="p-8 max-w-7xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}