import { motion } from "motion/react";
import { useI18n } from "../i18n";

export default function CTA() {
    const { t } = useI18n();

    return (
        <section className="max-w-[1280px] mx-auto px-6 py-24 text-center">
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">{t.ctaTitle}</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_20px_-5px_rgba(19,91,236,0.5)] hover:-translate-y-1 cursor-pointer">
                        {t.ctaBtn1}
                    </button>
                    <button className="w-full sm:w-auto bg-[#232f48] hover:bg-[#2e3b56] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 cursor-pointer">
                        {t.ctaBtn2}
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
