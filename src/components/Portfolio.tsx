import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n";

const projectImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAgXdGWcfY53VOTr-TFV-jFHE-LkuwSabOEilEUpbdwBeNmNsZm9duxPpAoJ8d7b56b2f5F7gXAqIH7qEAt-z1XtJ0blLxwCsOego2VKD0W4dFch1hgqf1LKSuLLxuQq3BPaGSSmz4g7zbwbw3hURQAOHtR4IKhv0FuQYVDxCmlr_eS19s_TJulsitwwo9x_R7A6a9g9hGQRGNK2WnM-awrZLGkmSz90kJTwHF1RtpvcavRWgoi3cOuMUUbXOcHQcrOsBMSwtKDuW4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAbsH2EYXiCvSuh5dDLgZD8n4m_uOq2vaeAokNsON-96aJ5fyzaIEZZyWRwR8N-1MKMDUbqojxmJXtleC358L9EycYCErS9OAAt11suLsF6DXy0Xs_mngD3xQhnNLPRyo0oulR9ADwiMTUXDmPKxtl1Ywt5SBGJstGDqj8E9DDX8TLsTwkt5N2f0merHDICXaVlaxQ7SBnW25cngTj27E2uRyeR3r5ivHNfLMJ7QnxOoqJq-UlIxNCqAzemhiqDvRDNZ3L7R6W_uo4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBTJfyrZZghJm7NnjVsmHCvfhNEb2tlF6Mmp2XZVLuTtHWyNOOL9oyg2BfqN0u-KadJRXz6Fv-BZK6DDGDhsu59aG0aFhNRaeWoimFHFqaA9gX5gSQgDOrfEZYohnxMZ-Y--Apj-OaEqHRLGopU9vyLKIwECZrMX98lSq6mFrupAJrZTN-rkTQg8fATwyuROzJyo_AZYLjZv5a2wnPGy4rDLZgTU3UCYtyuzzfiBx2rEdvo5Phtum0Eb3XqV46C8GTVSl9J9EvmaII",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBTgK6WoSf8HIFEkUK9mpmrOvQE1qJWbE7TC54VXJfRDI7Gk38u8-bjIclcipDBrdCn64qtQzL5s-EG-ZdOR50faSKtPd_ccAZPM6ZlKpyXg7K124yje1hAYatIMLmz738BjUBOn563-fhL-HelW3_ShgEwu-15fN-O5TbBMcgKSHcMcKAAovZOmHUUBBwn-GHE6BME0uiGB0QvH4Tx5BWFp7ZttrMNQrxs11_V8Oeg3LNTvrLoxZhQBqwped3ai6RXd_ChRz5r8Y",
];

export default function Portfolio() {
    const { t } = useI18n();

    return (
        <section className="max-w-[1280px] mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">{t.selectedWorks}</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{t.portfolioTitle}</h2>
                </div>
                <button className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
                    <span className="text-sm font-medium">{t.viewAllProjects}</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.projects.map((project, idx) => (
                    <motion.article
                        key={idx}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative rounded-xl bg-[#192233] overflow-hidden border border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(19,91,236,0.5)] hover:-translate-y-1"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img
                                src={projectImages[idx]}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-[#232f48] text-slate-300 text-xs font-medium">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                            <a className="inline-flex items-center text-sm font-bold text-white hover:text-primary transition-colors cursor-pointer" href="#">
                                {t.viewCaseStudy} <ArrowUpRight size={16} className="ml-1" />
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
