import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PlusCircle, Trash2, LogOut, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Post {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    author: string;
    date: string;
}

export const AdminDashboardPage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem('rise_admin')) {
            navigate('/admin');
            return;
        }
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch('/api/posts/all');
            const data = await res.json();
            setPosts(data);
        } catch {
            console.error('Failed to fetch posts');
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, excerpt, content, imageUrl, author })
            });
            setTitle(''); setExcerpt(''); setContent(''); setImageUrl(''); setAuthor('');
            setShowForm(false);
            fetchPosts();
        } catch {
            alert('Failed to create post.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Delete this post?')) return;
        try {
            await fetch(`/api/posts/${id}`, { method: 'DELETE' });
            fetchPosts();
        } catch {
            alert('Failed to delete post.');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('rise_admin');
        sessionStorage.removeItem('rise_user');
        navigate('/admin');
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#FDFDFD]">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-midnight tracking-tight">Blogger Dashboard</h1>
                        <p className="text-midnight/40 font-medium mt-1">Logged in as <span className="text-energetic-orange font-bold">{sessionStorage.getItem('rise_user') || 'admin'}</span></p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="bg-tennis-neon text-midnight px-6 py-3 rounded-xl font-black flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-tennis-neon/20"
                        >
                            <PlusCircle className="w-5 h-5" /> New Post
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-midnight/5 text-midnight px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-midnight/10 transition-colors"
                        >
                            <LogOut className="w-5 h-5" /> Sign Out
                        </button>
                    </div>
                </div>

                {/* Create Post Form */}
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-midnight rounded-[2rem] p-8 md:p-12 text-white mb-12 shadow-2xl"
                    >
                        <h2 className="text-2xl font-black mb-8">Create New Post</h2>
                        <form onSubmit={handleCreate} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Title *</label>
                                    <input
                                        type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors"
                                        placeholder="Post title" required
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Author</label>
                                    <input
                                        type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors"
                                        placeholder="Author name (optional)"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Excerpt</label>
                                <input
                                    type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors"
                                    placeholder="Short description"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Image URL</label>
                                <input
                                    type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors"
                                    placeholder="https://example.com/image.jpg (optional)"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Content *</label>
                                <textarea
                                    value={content} onChange={(e) => setContent(e.target.value)} rows={8}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors resize-none"
                                    placeholder="Write your blog post content..." required
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="submit" disabled={saving}
                                    className="bg-tennis-neon text-midnight px-8 py-4 rounded-xl font-black hover:scale-105 transition-transform shadow-xl shadow-tennis-neon/20 disabled:opacity-50"
                                >
                                    {saving ? 'Publishing...' : 'Publish Post'}
                                </button>
                                <button
                                    type="button" onClick={() => setShowForm(false)}
                                    className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {/* Posts List */}
                {posts.length === 0 ? (
                    <div className="bg-[#F8F9FA] rounded-[3rem] p-16 text-center border border-midnight/5">
                        <FileText className="w-16 h-16 text-midnight/10 mx-auto mb-6" />
                        <h3 className="text-2xl font-black text-midnight mb-2">No Posts Yet</h3>
                        <p className="text-midnight/40 font-medium">Click "New Post" to create your first blog post.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white rounded-2xl p-6 border border-midnight/5 shadow-sm flex items-center justify-between gap-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-black text-midnight truncate">{post.title}</h3>
                                    <p className="text-midnight/40 text-sm font-medium mt-1">
                                        By {post.author} · {post.date}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-100 transition-colors shrink-0"
                                    title="Delete post"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
