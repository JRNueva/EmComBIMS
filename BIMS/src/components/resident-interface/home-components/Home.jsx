import HeroSection from './hero-section/HeroSection.jsx';
import AnnouncementSection from './announcement-section/AnnouncementSection.jsx';
import ServicesSection from './services-section/ServicesSection.jsx';
import FacilitiesSection from './facilities-section/FacilitiesSection.jsx';
import HotlinesSection from './hotlines-section/HoltinesSection.jsx';

export default function Home() {
    return <main>
        <HeroSection />
        <HotlinesSection />
        <AnnouncementSection />
        <ServicesSection />
        <FacilitiesSection />
    </main>
}