import { Button } from "./ui/button";
import AboutSvg from '../assets/undraw_about_me_re_82bv.svg'
const About = () => {
    return (
        <div className="max-w-7xl mx-auto h-screen flex items-center">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-col justify-center items-start space-y-3 lg:px-16">
                <h1 className="text-2xl font-bold">About us</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                        Meet Your Meditation Coach
                    </h1>
                    <p className="font-lora text-center lg:text-left">
                        Mindfulness, Stress Management, Well-being
                    </p>
                    <p className="text-base md:text-lg font-lora text-center lg:text-left">
                        With over 12 years of experience, Jesy has helped hundreds of individuals discover the benefits of mindfulness, reduced stress, and mental well-being through personalized meditation programs.
                    </p>

                </div>
                <div className="flex justify-center mb-6 lg:mb-0">
                    <img className="w-72 md:w-96 lg:w-[30rem] lg:max-w-2xl animate-float" src={AboutSvg} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default About;