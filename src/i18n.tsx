import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "zh";

const translations = {
    en: {
        // Navbar
        navLinks: ["Home", "Services", "Portfolio", "About"],
        getStarted: "Get Started",

        // Hero
        heroBadge: "Next Gen AI Solutions",
        heroTitle1: "ForgeTech: Crafting the",
        heroTitle2: "Future of AI",
        heroDesc: "We bridge the gap between imagination and intelligence. Premium AI app design and development for visionaries ready to scale.",
        startProject: "Start Project",
        watchDemo: "Watch Demo",
        trustedBy: "Trusted by innovators at",

        // Capabilities
        capTitle: "Our Core",
        capTitleHighlight: "Capabilities",
        capDesc: "We don't just build apps; we architect intelligent ecosystems. Empowering businesses with next-generation technology and human-centric design.",
        viewAllServices: "View All Services",
        caps: [
            {
                title: "AI Strategy",
                description: "Data-driven roadmaps to integrate artificial intelligence into your business model. We identify high-impact opportunities.",
                tags: ["Data Science", "Consulting"],
            },
            {
                title: "UI/UX Design",
                description: "Human-centric interfaces that blend aesthetics with seamless functionality. We design for the future of interaction.",
                tags: ["Prototyping", "User Research"],
            },
            {
                title: "Full-Stack Dev",
                description: "Scalable, secure, and high-performance architecture for web and mobile. Built to handle complex AI workloads.",
                tags: ["Python", "React Native"],
            },
        ],
        learnMore: "Learn more",

        // Portfolio
        selectedWorks: "Selected Works",
        portfolioTitle: "Building the Future of Intelligence",
        viewAllProjects: "View All Projects",
        viewCaseStudy: "View Case Study",
        projects: [
            {
                title: "FinMind AI",
                category: "FinTech",
                description: "An advanced financial forecasting dashboard leveraging predictive algorithms to visualize market trends in real-time.",
                tags: ["React", "Python"],
            },
            {
                title: "MediScan",
                category: "HealthTech",
                description: "AI-powered diagnostic assistant that helps radiologists detect anomalies in MRI scans with 99.8% accuracy.",
                tags: ["Computer Vision", "TensorFlow"],
            },
            {
                title: "ChatUX",
                category: "GenAI",
                description: "Next-generation conversational interface design system enabling natural language interactions for enterprise tools.",
                tags: ["LLM", "OpenAI API"],
            },
            {
                title: "AutoFlow",
                category: "Automation",
                description: "A no-code automation workflow builder that connects disparate business apps into a unified intelligent pipeline.",
                tags: ["Node.js", "AWS"],
            },
        ],

        // TechStack
        techExpertise: "Our Expertise",
        techTitle: "The Engine Behind Our Innovation",
        techDesc: "We leverage the most powerful tools in the AI ecosystem to build scalable, secure, and cutting-edge solutions.",

        // CTA
        ctaTitle: "Ready to bring your vision to life?",
        ctaBtn1: "Start Your Project",
        ctaBtn2: "Schedule a Consultation",

        // Footer
        footerBrand: "ForgeTech",
        footerCompany: "Furnace Technology (Haikou) Co., Ltd",
        footerCopyright: "© 2025 ForgeTech. All rights reserved.",
        footerEmail: "contact@forgetech.site",
    },
    zh: {
        // Navbar
        navLinks: ["首页", "服务", "作品", "关于"],
        getStarted: "立即开始",

        // Hero
        heroBadge: "下一代 AI 解决方案",
        heroTitle1: "ForgeTech：锻造",
        heroTitle2: "AI 的未来",
        heroDesc: "我们在想象力与智能之间架起桥梁。为有远见的创新者提供顶级 AI 应用设计与开发服务。",
        startProject: "启动项目",
        watchDemo: "观看演示",
        trustedBy: "受到创新者信赖",

        // Capabilities
        capTitle: "核心",
        capTitleHighlight: "能力",
        capDesc: "我们不仅构建应用，更打造智能生态系统。以下一代技术和以人为本的设计赋能企业。",
        viewAllServices: "查看全部服务",
        caps: [
            {
                title: "AI 战略",
                description: "以数据驱动的路线图，将人工智能融入您的商业模式。我们识别高价值机会。",
                tags: ["数据科学", "咨询"],
            },
            {
                title: "UI/UX 设计",
                description: "以人为中心的界面，将美学与无缝功能融为一体。我们为未来的交互而设计。",
                tags: ["原型设计", "用户研究"],
            },
            {
                title: "全栈开发",
                description: "可扩展、安全、高性能的 Web 和移动端架构。专为复杂 AI 工作负载打造。",
                tags: ["Python", "React Native"],
            },
        ],
        learnMore: "了解更多",

        // Portfolio
        selectedWorks: "精选作品",
        portfolioTitle: "构建智能的未来",
        viewAllProjects: "查看全部项目",
        viewCaseStudy: "查看案例详情",
        projects: [
            {
                title: "FinMind AI",
                category: "金融科技",
                description: "先进的金融预测仪表盘，利用预测算法实时可视化市场趋势。",
                tags: ["React", "Python"],
            },
            {
                title: "MediScan",
                category: "健康科技",
                description: "AI 驱动的诊断助手，帮助放射科医生以 99.8% 的准确率检测 MRI 扫描中的异常。",
                tags: ["计算机视觉", "TensorFlow"],
            },
            {
                title: "ChatUX",
                category: "生成式 AI",
                description: "下一代对话界面设计系统，为企业工具提供自然语言交互能力。",
                tags: ["LLM", "OpenAI API"],
            },
            {
                title: "AutoFlow",
                category: "自动化",
                description: "无代码自动化工作流构建器，将分散的业务应用连接为统一的智能流水线。",
                tags: ["Node.js", "AWS"],
            },
        ],

        // TechStack
        techExpertise: "技术专长",
        techTitle: "驱动创新的引擎",
        techDesc: "我们运用 AI 生态系统中最强大的工具，构建可扩展、安全且前沿的解决方案。",

        // CTA
        ctaTitle: "准备好将您的愿景变为现实了吗？",
        ctaBtn1: "启动您的项目",
        ctaBtn2: "预约咨询",

        // Footer
        footerBrand: "ForgeTech",
        footerCompany: "熔炉科技（海口）有限公司",
        footerCopyright: "© 2025 ForgeTech 版权所有",
        footerEmail: "contact@forgetech.site",
    },
};

type Translations = typeof translations.en;

interface I18nContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");
    const t = translations[lang];

    return (
        <I18nContext.Provider value={{ lang, setLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) throw new Error("useI18n must be used within I18nProvider");
    return context;
}
