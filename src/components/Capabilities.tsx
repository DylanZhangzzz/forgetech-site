import { motion } from "motion/react";
import { ArrowRight, Brain, Layers, Terminal, ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n";

const icons = [Brain, Layers, Terminal];
const colors = ["primary", "accent-purple", "blue-400"];

export default function Capabilities() {
    const { t } = useI18n();

    return (
        <section className="relative py-24 px-4 bg-background-dark/50" id="expertise">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.capTitle} <span className="text-primary">{t.capTitleHighlight}</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {t.capDesc}
                        </p>
                    </div>
                    <button className="hidden md:flex whitespace-nowrap px-6 py-3 rounded-full border border-slate-700 text-white hover:bg-slate-800 transition-colors items-center gap-2 group cursor-pointer">
                        {t.viewAllServices}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {t.caps.map((cap, idx) => {
                        const Icon = icons[idx];
                        const color = colors[idx];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative p-1 rounded-3xl bg-gradient-to-b from-slate-700/50 to-transparent hover:from-${color}/50 transition-all duration-500`}
                            >
                                <div className={`absolute inset-0 bg-${color}/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative h-full bg-surface-dark rounded-[1.4rem] p-8 flex flex-col border border-slate-800 group-hover:border-primary/30 transition-colors overflow-hidden">
                                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${color}/20 rounded-full blur-3xl group-hover:bg-${color}/40 transition-all duration-500`}></div>
                                    <div className="size-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                                        <Icon size={30} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{cap.title}</h3>
                                    <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                                        {cap.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {cap.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a className="inline-flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors mt-auto cursor-pointer" href="#">
                                        {t.learnMore} <ArrowUpRight size={16} className="ml-1" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-8 flex justify-center md:hidden">
                    <button className="flex w-full justify-center px-6 py-4 rounded-full border border-slate-700 text-white hover:bg-slate-800 transition-colors items-center gap-2 group cursor-pointer">
                        {t.viewAllServices}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
