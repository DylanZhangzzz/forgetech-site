import { useState, useEffect } from "react";
import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

// 简单的 hash 路由
function useHashRoute() {
    const [route, setRoute] = useState(window.location.hash || "#/");

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || "#/");
            window.scrollTo(0, 0);
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return route;
}

export default function App() {
    const route = useHashRoute();

    // 隐私政策页面 - 独立布局
    if (route === "#/privacy" || route === "#/privacy-policy") {
        return (
            <I18nProvider>
                <PrivacyPolicy />
            </I18nProvider>
        );
    }

    // 主页
    return (
        <I18nProvider>
            <div className="min-h-screen selection:bg-primary selection:text-white">
                <Navbar />
                <main>
                    <Hero />
                    <Capabilities />
                    <Portfolio />
                    <TechStack />
                    <CTA />
                </main>
                <Footer />
            </div>
        </I18nProvider>
    );
}
