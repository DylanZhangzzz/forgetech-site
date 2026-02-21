import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
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
