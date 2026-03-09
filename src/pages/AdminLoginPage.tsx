import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (data.success) {
                sessionStorage.setItem('rise_admin', 'true');
                sessionStorage.setItem('rise_user', data.username);
                navigate('/admin/dashboard');
            } else {
                setError('Invalid username or password.');
            }
        } catch {
            setError('Could not connect to server. Is the API running?');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#FDFDFD]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="bg-midnight rounded-[2.5rem] p-10 md:p-14 shadow-2xl text-white">
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-16 h-16 bg-tennis-neon rounded-2xl flex items-center justify-center shadow-lg shadow-tennis-neon/20">
                            <Lock className="text-midnight w-8 h-8" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-black text-center mb-2 tracking-tight">Blogger Dashboard</h1>
                    <p className="text-white/40 text-center font-medium mb-10">Sign in to manage blog posts.</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold p-4 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-tennis-neon text-midnight py-4 rounded-xl font-black text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-tennis-neon/20 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            <LogIn className="w-5 h-5" />
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};
