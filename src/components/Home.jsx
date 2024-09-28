import AnimatedCursor from "react-animated-cursor";
import About from "./About";
import Benefits from "./Benefits";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Services from "./Services";
import StartJourney from "./StartJourney";
import Testimonies from "./Testimonies";
import { useTheme } from "./Provider/ThemeProvider";
import Footer from "./Footer";

const HomePage = () => {
    const { theme } = useTheme();
    return (
        <div id='home'>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Benefits />
            <Testimonies />
            <Pricing />
            <StartJourney />
            <Contact />
            <Footer/>
            <AnimatedCursor
                innerSize={8}
                outerSize={10}
                color={`${theme === 'dark' ? '255, 255, 255' : '0, 0, 0'}`}
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={7}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    'h1',
                    'h2',
                    'p',
                    'li'
                ]}
            />
        </div>
    );
};

export default HomePage;