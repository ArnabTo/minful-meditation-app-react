import BenefitSvg from '../assets/undraw_personal_file_re_5joy.svg'
import ReduceSvg from '../assets/reduce-svgrepo-com.svg'
import FocusSvg from '../assets/focus-point-847-svgrepo-com.svg'
import SleepSvg from '../assets/sleep-svgrepo-com.svg'
import HealthSvg from '../assets/health-increase-svgrepo-com.svg'
const Benefits = () => {
    return (
        <div className="max-w-6xl mx-auto h-screen flex items-center">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-col justify-center items-start space-y-3 lg:px-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                        Why Meditate?
                    </h1>
                    <p className="text-base md:text-lg font-lora text-center lg:text-left">
                        Experience numerous physical and mental health benefits including improved focus, reduced anxiety, and enhanced well-being.
                    </p>
                    <ul>
                        <li className='flex items-center gap-4 p-4 font-lora rounded-sm mb-2 hover:scale-105 transition-all'>
                            <img className='max-w-[3rem]' src={ReduceSvg} alt="reduce" />
                            <span>
                                <p className='font-bold text-lg'>Reduces Stress and Anxiety</p>
                                <p>Meditation helps calm the mind and body, leading to lower stress levels and reduced anxiety, promoting overall mental peace.</p>
                            </span>
                        </li>
                        <li className='flex items-center gap-4 p-4 font-lora rounded-sm mb-2 hover:scale-105 transition-all'>
                            <img className='max-w-[3rem]' src={FocusSvg} alt="reduce" />
                            <span>
                                <p className='font-bold text-lg'>Improves Focus and Concentration</p>
                                <p>By training the mind to stay present, meditation boosts your ability to concentrate and enhances your productivity.</p>
                            </span>
                        </li>
                        <li className='flex items-center gap-4 p-4 font-lora rounded-sm mb-2 hover:scale-105 transition-all'>
                            <img className='max-w-[3rem]' src={HealthSvg} alt="reduce" />
                            <span>
                                <p className='font-bold text-lg'>Enhances Emotional Health</p>
                                <p>Regular meditation improves emotional resilience, leading to a more balanced, positive outlook on life.</p>
                            </span>
                        </li>
                        <li className='flex items-center gap-4 p-4 font-lora rounded-sm mb-2 hover:scale-105 transition-all'>
                            <img className='max-w-[3rem]' src={SleepSvg} alt="reduce" />
                            <span>
                                <p className='font-bold text-lg'>Promotes Better Sleep</p>
                                <p>Practicing mindfulness and relaxation techniques through meditation leads to deeper, more restorative sleep.</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center mb-6 lg:mb-0">
                    <img className="w-72 md:w-96 lg:w-[30rem] lg:max-w-2xl animate-float" src={BenefitSvg} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Benefits;