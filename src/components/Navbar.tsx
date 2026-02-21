import { motion } from "motion/react";
import { Bot, ArrowRight, Menu, Globe } from "lucide-react";
import { useI18n } from "../i18n";

export default function Navbar() {
    const { lang, setLang, t } = useI18n();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass-card rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-5xl w-full shadow-2xl shadow-primary/10 transition-all duration-300 hover:border-primary/30"
            >
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white">
                        <Bot size={18} />
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight hidden sm:block">ForgeTech</span>
                </div>

                {/* Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {t.navLinks.map((link) => (
                        <a
                            key={link}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer"
                            href="#"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Language Switch + CTA + Mobile Menu */}
                <div className="flex items-center gap-3">
                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === "en" ? "zh" : "en")}
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-all px-3 py-1.5 rounded-full border border-slate-700 hover:border-white/30 cursor-pointer"
                        aria-label="Switch language"
                    >
                        <Globe size={14} />
                        <span>{lang === "en" ? "中文" : "EN"}</span>
                    </button>

                    <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_-3px_rgba(19,91,236,0.6)] hover:shadow-[0_0_25px_-5px_rgba(19,91,236,0.8)] flex items-center gap-2 group cursor-pointer">
                        <span>{t.getStarted}</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="md:hidden text-white cursor-pointer">
                        <Menu size={24} />
                    </button>
                </div>
            </motion.div>
        </nav>
    );
}
