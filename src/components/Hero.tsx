import { motion } from "motion/react";
import { ArrowRight, PlayCircle, RefreshCw, Brain, Zap, CheckCircle } from "lucide-react";
import { useI18n } from "../i18n";

export default function Hero() {
    const { t } = useI18n();

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(19,91,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(19,91,236,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8 text-center lg:text-left pt-10 lg:pt-0"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto lg:mx-0 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">{t.heroBadge}</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-sm">
                        {t.heroTitle1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple neon-text-glow">{t.heroTitle2}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                        {t.heroDesc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
                        <button className="h-12 px-8 rounded-full bg-primary hover:bg-blue-600 text-white font-bold transition-all shadow-[0_0_20px_-5px_rgba(19,91,236,0.5)] hover:shadow-[0_0_30px_-5px_rgba(19,91,236,0.7)] flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer">
                            {t.startProject}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="h-12 px-8 rounded-full border border-slate-700 hover:border-white/50 hover:bg-white/5 text-white font-medium transition-all w-full sm:w-auto justify-center flex items-center gap-2 backdrop-blur-sm cursor-pointer">
                            <PlayCircle size={18} className="text-primary" />
                            {t.watchDemo}
                        </button>
                    </div>

                    {/* Trusted By */}
                    <div className="pt-8 border-t border-slate-800/50 mt-4 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start opacity-70">
                        <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">{t.trustedBy}</span>
                        <div className="flex gap-6 grayscale opacity-60">
                            <div className="flex items-center gap-1"><div className="size-4 bg-slate-400 rounded-sm"></div><div className="size-4 bg-slate-400 rounded-full"></div></div>
                            <div className="flex items-center gap-1"><div className="w-4 h-4 border-2 border-slate-400 rotate-45"></div><div className="size-3 bg-slate-400 rounded-full"></div></div>
                            <div className="flex items-center gap-1"><div className="size-4 bg-slate-400 rounded-t-full"></div><div className="size-4 bg-slate-400 rounded-b-full"></div></div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end perspective-1000 group"
                >
                    <div className="relative w-full max-w-md aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent-purple/30 rounded-full blur-[80px] animate-pulse"></div>

                        {/* Main Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] glass-card rounded-3xl z-20 flex flex-col overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105 hover:-rotate-2 border-t border-l border-white/20">
                            <div className="h-1/2 bg-gradient-to-br from-slate-800 to-black relative">
                                <img
                                    alt="AI Visualization"
                                    className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0MAkQ5A1mCMqmGu1s9S-OVbeXMrJmssHNf_kFQK1jKly_eIFF-0IgxkPFhJqz9c9GCIjuCYVFqA2KjuCOs2F7txrYpXwlbyqzi8B6A0CvufZvfYbumTEA-91vvo2SAuM_YjFMDm0dHFhP5weNlOT5232Bv3ew64jHxcTQ--PJk2TLGw5d7BkGBN_YUmy1b_9_kdKgrQxl55HmJPszSBzjeOtZKQbFYuUdlywx_oi6x64IvPnmab3Bl7tmtEAuHnZQlZwxFk3N5XY"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-primary font-mono mb-1">AI_MODEL_V2.0</span>
                                        <span className="text-white font-bold text-lg">Processing Data</span>
                                    </div>
                                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center animate-spin">
                                        <RefreshCw size={14} className="text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="h-1/2 p-6 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                        <div className="h-full w-2/3 bg-primary rounded-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                                        <span>Optimizing Neural Pathways</span>
                                        <span className="text-white">67%</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <div className="flex-1 h-16 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-col gap-1">
                                        <Brain size={20} className="text-accent-purple" />
                                        <span className="text-[10px] text-slate-400 uppercase">Learn</span>
                                    </div>
                                    <div className="flex-1 h-16 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center flex-col gap-1">
                                        <Zap size={20} className="text-primary" />
                                        <span className="text-[10px] text-slate-400 uppercase">Speed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Card */}
                        <div className="absolute top-[40%] right-[5%] w-[60%] h-[60%] glass-card rounded-3xl z-10 -rotate-6 opacity-60 scale-90 border border-white/5"></div>

                        {/* Status Indicator */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute bottom-[10%] left-[0%] bg-surface-dark border border-slate-700 rounded-2xl p-4 z-30 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">System Online</div>
                                    <div className="text-slate-400 text-xs">Latency: 12ms</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
