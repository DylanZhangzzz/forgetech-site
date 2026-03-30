import { Bot, Mail, Globe, Code, Twitter, Linkedin } from "lucide-react";
import { useI18n } from "../i18n";

export default function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-[#0b0f17] border-t border-slate-800/50 py-12 px-4">
            <div className="container mx-auto max-w-7xl flex flex-col gap-8">
                {/* Top: Logo + Links */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="size-6 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white">
                            <Bot size={14} />
                        </div>
                        <span className="text-slate-300 font-bold text-base tracking-tight">{t.footerBrand}</span>
                    </div>

                    <div className="flex gap-6 text-slate-400">
                        <a className="hover:text-primary transition-colors cursor-pointer" href={`mailto:${t.footerEmail}`} aria-label="Email"><Mail size={20} /></a>
                        <a className="hover:text-primary transition-colors cursor-pointer" href="#" aria-label="Website"><Globe size={20} /></a>
                        <a className="hover:text-primary transition-colors cursor-pointer" href="#" aria-label="Code"><Code size={20} /></a>
                        <a className="hover:text-primary transition-colors cursor-pointer" href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a className="hover:text-primary transition-colors cursor-pointer" href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Middle: Company Info + Email */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-800/50 pt-8">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p className="text-sm text-slate-400">{t.footerCompany}</p>
                        <a
                            href={`mailto:${t.footerEmail}`}
                            className="text-sm text-primary hover:text-blue-400 transition-colors"
                        >
                            {t.footerEmail}
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex gap-4 text-sm text-slate-500">
                            <a href="/privacy" className="hover:text-primary transition-colors">
                                隐私政策 · Privacy Policy
                            </a>
                        </div>
                        <p className="text-sm text-slate-500">{t.footerCopyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
