import { Sparkles } from 'lucide-react';
import ServiceSvg from '../assets/undraw_chore_list_re_2lq8.svg'
const Services = () => {
    return (
        <div className="max-w-6xl mx-auto h-screen flex items-center">
            <div className="flex flex-col lg:flex-row-reverse items-center">
                <div className="flex flex-col justify-center items-start space-y-3 lg:px-12">
                    <h1 className="text-2xl font-bold">Services</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                        Tailored Meditation Programs
                    </h1>
                    <p className="text-base md:text-lg font-lora text-center lg:text-left">
                        We offer a range of programs designed to suit every need—whether you're a beginner or looking to deepen your practice.
                    </p>
                    <ul>
                        <li className='flex gap-2 p-4 font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                            <Sparkles />
                            <b>Beginners Meditation:</b><p>Start your mindfulness journey.</p>
                        </li>
                        <li className='flex gap-2 p-4 font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                            <Sparkles />
                            <b>Stress Management:</b><p>Tools to cope with daily life stress.</p>
                        </li>
                        <li className='flex gap-2 p-4 font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                            <Sparkles />
                            <b>Corporate Programs:</b><p>Meditation for the workplace.</p>
                        </li>
                        <li className='flex gap-2 p-4 font-lora rounded-sm mb-2 border-black border hover:scale-105 transition-all'>
                        <Sparkles />
                        <b>Deep Meditation:</b><p>Advanced techniques for seasoned meditators.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center mb-6 lg:mb-0">
                    <img className="w-72 md:w-96 lg:w-[30rem] lg:max-w-2xl animate-float" src={ServiceSvg} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Services;