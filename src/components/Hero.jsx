import HeroPng from '../assets/undraw_meditation_re_gll0.svg';
import { Button } from './ui/button';

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 mb-24 px-6 md:px-12 lg:mt-40 lg:mb-44">
            <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="flex flex-col justify-center items-start space-y-3 lg:px-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                        Achieve Inner Peace <br className="hidden lg:block" /> with Expert Meditation Guidance
                    </h1>
                    <p className="text-base md:text-lg font-lora text-center lg:text-left">
                        Unlock the power of mindfulness to enhance your <br className='hidden lg:block'></br> life, reduce stress, and find tranquility
                    </p>
                    <p className="font-lora text-center lg:text-left">
                        Guided by an experienced meditation trainer,<br className='hidden lg:block'></br> embark on a path to calm and clarity
                    </p>
                    <Button className="font-playfair self-center lg:self-start px-4 text-lg">Start Your Journey</Button>
                </div>
                <div className="flex justify-center mb-6 lg:mb-0">
                    <img className="w-72 md:w-96 lg:w-[30rem] lg:max-w-2xl animate-float" src={HeroPng} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
