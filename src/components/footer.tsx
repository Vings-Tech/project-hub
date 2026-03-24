import React from 'react';
import { Instagram, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl py-12 mt-auto">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-10">

                    {/* Left Side: Logo & Quote */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3 group">
                            <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                                <img
                                    src="/icon.png"
                                    alt="logo"
                                    className="h-10 w-auto object-contain transition-all duration-500"
                                />
                            </div>
                            <h2 className="text-xl font-black tracking-tight text-slate-800 dark:text-white uppercase">
                                PROJECT<span className="text-indigo-600">HUB</span>
                            </h2>
                        </div>

                        <div className="space-y-1 text-center md:text-left">
                            <p className="text-slate-500 dark:text-slate-400 font-medium italic leading-tight">
                                "The best code is the code that goes unnoticed ,<br />
                                because it works so flawlessly."
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Chat with Developer */}
                    <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto">
                        <h3 className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                            Chat with Developer
                        </h3>

                        <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 w-full md:w-auto">
                            <a
                                href="https://www.instagram.com/vingstech.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:flex-none group flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm hover:shadow-indigo-500/10"
                                title="Instagram"
                            >
                                <Instagram size={18} className="sm:w-[20px] sm:h-[20px]" />
                                <span className="text-sm font-bold">Instagram</span>
                            </a>

                            <a
                                href="https://wa.me/+918778264166"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:flex-none group flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm hover:shadow-indigo-500/10"
                                title="WhatsApp"
                            >
                                <MessageCircle size={18} className="sm:w-[20px] sm:h-[20px]" />
                                <span className="text-sm font-bold">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800/50 
flex flex-col sm:flex-row justify-between items-center gap-4">

                    {/* Left Side */}
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 text-center sm:text-left">
                        © {new Date().getFullYear()} PROJECTHUB. Crafted with passion.
                    </p>

                    {/* Right Side */}
                    <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <img
                            src="/icon.png"
                            alt="Logo"
                            className="h-10 w-auto object-contain transition-all duration-500"
                        />
                    </div>
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 text-center sm:text-right">
                        Powered by Vings Tech Projects
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;