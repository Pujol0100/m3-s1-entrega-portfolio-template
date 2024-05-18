import { Header } from "../../components/Header";
import { BannerSection } from "../../components/bannerSection";
import { AboutMeSection } from "../../components/aboutMeSection";
import { Footer } from "../../components/Footer";
import { ProjectsSection } from "../../components/projectsSection";
import { TechSection } from "../../components/techSection";
import '../../styles/index.css';



export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <AboutMeSection />
                <TechSection />
                <ProjectsSection />
            </main>
            <Footer />
        </>
    )
}


