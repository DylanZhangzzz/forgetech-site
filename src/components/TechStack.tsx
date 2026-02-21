import { motion } from "motion/react";
import { useI18n } from "../i18n";

const tech = [
    { name: "Python", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjgGIrXK1iu-fYnJQqkDHziaxSURJwihBut6FF3TCep9hjNW7WowQ59iQ8uMCZRbOZjRIRUspL8ejwjBlIz45bbaZ9NO_dJZ7dmsvijyBIQdkYgFcw3n6uRMvKrzhD5TVxl2ag1xrW8dIjMWHlAFI9klywdQUqWj79kRbYz8abAN0HNHDfjmTbkPaY-GApy9rCe67Q_tgn1fXA1svOiROWbUJCF7_WzVbfiNC4oS4ehXbniHOlkrxlbHbQHz6FD6LCM2ED9x7Oo08" },
    { name: "React", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2lYSaQUr2-VF8V5kSLJNKDqq91pKCbo7RFqxB5NyQ2-UXftOeT7bL_utI-19gCXMwbhp3rC1zzCjgVjD9nowInToAT6_nzEjhzFdYlfzjtEF_UtIxyPbuvDdoHmV8r68731yP1ZErPvMlJKQb8APQRlRswKtI2YYi1UpTIH2ac8FZgQuCP9oaPk_QGw7YuSahAxud6gW2j8rMNoVlFl3hsZxK1aEuicjyGnps3u9qe_HIon5aw_smFJ_v1fZTPUPZy4tzw0yPsI" },
    { name: "TensorFlow", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVqpqhHTGCBy7hna0ibnwsF9ZZbhCRipsEyNYZTKVmwoe_z5RP8gUTHQZq-Td6LDMH0tCvck-22QYBH_GknJFnPg88LETZ33jn01dKNfWBtERO5anvdB6P7ri7fvMUBes6rHhxr9pgDxWeM-hau1go-XO5-xiIVo1llU8-bXjkv8vJDVzdLhlUaNL8DqWiyTiYI8ZQWLhxD6gaO39Xu55uqYzm3ZNtPBwtiDitf2UOThHSOzNG6ElWqyyW3WHDqwPtpAww4Hroaic" },
    { name: "PyTorch", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_dysmYPJ28-EoeoZJEVlbBMUwGB0jIW1NzfolY77Q0dejt0LxNXW86cnmKIy19MLvmAqhGPir_ry5rEXCg7tWddJxsZ01-xVvZiEWYGk9XtMJ9lVgDHaAE1UU1E8gTPi-ZqvDBiZXpX6oCRCDGpJ0Gar0sckOPhwmi6a984g08w_HplDyLCh7Lc41BpUCid1en4uMLYJoLksAInToqQ-AXLO9cQSnaGfr3_qwsm6eWNbvSzbis-KnZFbwaa-k39zGFuCRObXwwgE" },
    { name: "Docker", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBUbcn9vSjhGDqW3tpMPe9QoIcwO5GqnzlYxOnUzPQKkA0QphoFvFBPQGneHJ51t5kmR07dYY0JxTVhRDTo8pxpfSvvS_CpsZf_ISWfIhPz0G11T-PjNYgZ8tIV1GTLNtIFH7WppKPmvoZfQTm6txEIFyij7FxvV_wrQv6RCspN2B3YbXLmTWhn8xJV0e0tKulWGr7PVvYmZrWXoKcO5KngtKw68KtUWw5R-xMYxbGFC7pd9UOknmVQ-wdoQQCEsLFNSzsvtULWx0" },
    { name: "AWS", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2qCULrTRHGMW23jzH6pwuB0kZo2a55W-75mMBO22AG1E4gJdhZm7sBs3iRN1-c_LTdx9yHIiQ6BarcP8Og4PXRyO8KZpPnGlu-cTZk4CCBDQY7Fy2Lirl-PtBP51SyIxtrjOVKVLBCABBQSMRCzvDfFns2ByV_8D_8Kq390s_fhKWJXAUkMPAN00dxcyntu50tB0vAPU7BfUq6mpHIx1Yo2lNC_Opzgt93C7RbE-_XmA6mWnfU-QkHG8efstaH-9ITA6j0c9mC44" },
    { name: "Tailwind", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe4T7AYPFQ5x8uv3kMxcpuyZXtpKgCkWHfNOQ8XIbOHwqx7WJ6j_9VRPXXDbhGrcLmaUf7usK0i1dGd-uYJVOIOPdCIiVyrVUgvEB94NXTUojk7ocwiatLyOEDUDGee8J9QiY-Y692NDQlqihhjkxSSgI-tfjuAQL1UWHlrlgJOskrT5JzJF2xlcpB3gYd86D_Ug2-Em6Mha9dtQdIJiOGpTyed2cZzIMi5e_stViYLtITTa3_bHSh8RARo1u0wgBAizYYNy4HZic" },
    { name: "Next.js", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtV5pyNuxdUAapyPTiHvAIGbPCLT0fVcAnxt7PqudGg6BGRNEkbbQ6ViCd9HjmawNy1LoqH6aqe1dRgZkeD5r-sr_RskW1v9S0tOl-hPtB2PJfMFKzX-6EEV5CX5DXJ_9Oc7CD_CAPYd05SgNSbScEBHgzzsQkO80VI_DFZNqJ7Cbakcuuy1tONPA8_WAxe3V5JulfLlA1NEGPdBU86SBo0V-M7jJbNGih7xywaIaAkJal8ly6Xgduhl6evNpfJ4h66dTOYizhdfI" },
    { name: "Figma", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVs9QHx2Sijs5ghI4lGDYcHoji4L4XtD3MlEEkdu1RbGZngiAH3TJTLcBdxtc2YG80cWz5aHpM5OOC00BeURFXHy052Zrp8BZb7Q1C-tS4Isaxi25PJIfbFPUnhj2JYf7H_4i2gCgdnKkMuv6KQALTULdecg_o599x0eCIo-0X3_9aHU8erWYABNMSONkyBC1OSx8mIwAVBHYunGMaQn-MPwCxpVFbflNUOh_IuS8WFEbiCLXu1HgSU4PSmhLJ9NBS8LwPc9buaf0" }
];

export default function TechStack() {
    const { t } = useI18n();

    return (
        <section className="bg-[#0b0f17] border-y border-[#232f48]">
            <div className="max-w-[1280px] mx-auto px-6 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">{t.techExpertise}</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.techTitle}</h2>
                    <p className="text-slate-400 text-lg">{t.techDesc}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    {tech.map((item, idx) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-[#192233] flex items-center justify-center p-4 border border-[#232f48] group-hover:border-primary/50 group-hover:shadow-[0_0_20px_-5px_rgba(19,91,236,0.5)] transition-all">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className={`w-full h-full opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${item.name === 'Next.js' ? 'invert' : ''}`}
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <span className="text-sm font-medium text-slate-500 group-hover:text-white transition-colors">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
