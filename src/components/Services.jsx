import { Sparkles } from 'lucide-react';
import ServiceSvg from '../assets/undraw_chore_list_re_2lq8.svg';

const Services = () => {
    return (
        <section className="max-w-7xl mx-auto mt-16 mb-24 px-4 md:px-8 lg:px-12 lg:mt-40 lg:mb-44" id='services'>
            <div className="flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0">
                {/* Left Section: Text */}
                <div className="flex flex-col justify-center items-start space-y-4 lg:space-y-5 lg:px-12 w-full lg:w-1/2">
                    <h1 className="text-2xl font-bold text-center lg:text-left mx-auto lg:mx-0">Services</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                        Tailored Meditation Programs
                    </h1>
                    <p className="text-base md:text-lg font-lora text-center lg:text-left">
                        We offer a range of programs designed to suit every need—whether you're a beginner or looking to deepen your practice.
                    </p>

                    {/* List of services */}
                    <ul className="w-full">
                        <li className='flex flex-col md:flex-row gap-2 px-2 lg:px-4 py-3 items-center font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                            <Sparkles />
                            <b>Beginners Meditation</b><p>Start your mindfulness journey.</p>
                        </li>
                        <li className='flex flex-col md:flex-row gap-2 px-2 lg:px-4 py-3 items-center font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                            <Sparkles />
                            <b>Stress Management:</b><p>Tools to cope with daily life stress.</p>
                        </li>
                        <li className='flex flex-col md:flex-row gap-2 px-2 lg:px-4 py-3 items-center font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                            <Sparkles />
                            <b>Corporate Programs:</b><p>Meditation for the workplace.</p>
                        </li>
                        <li className='flex flex-col md:flex-row gap-2 px-2 lg:px-4 py-3 items-center font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                            <Sparkles />
                            <b>Deep Meditation:</b><p>Advanced techniques for seasoned meditators.</p>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Image */}
                <div className="flex justify-center w-full lg:w-1/2">
                    <img className="w-60 md:w-80 lg:w-[30rem] lg:max-w-2xl animate-float" src={ServiceSvg} alt="Meditation services" />
                </div>
            </div>
        </section>
    );
};

export default Services;
