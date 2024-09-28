import { motion } from 'framer-motion';
import CtaSvg from '../assets/undraw_meditating_re_aiqa.svg'
import { Button } from './ui/button';
const StartJourney = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 mb-24 px-6 md:px-12 lg:mt-40 lg:mb-44">
            <div
                className="flex flex-col gap-10 lg:flex-row-reverse items-center">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col justify-center items-start space-y-3 lg:px-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                        Ready to Begin Your Meditation Journey?
                    </h1>
                    <p className="font-lora text-center lg:text-left">
                        Join hundreds of others in finding your inner peace.
                    </p>
                    <Button className='font-lora'>Book a Session</Button>
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex justify-center mb-6 lg:mb-0">
                    <img className="w-72 md:w-96 lg:w-[30rem] lg:max-w-2xl animate-float" src={CtaSvg} alt="hero" />
                </motion.div>
            </div>
        </div>
    );
};

export default StartJourney;