import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ApostopheSvg from '../assets/quote-mark-svgrepo-com.svg'
import ApostopheSvgDark from '../assets/quote-mark-svgrepo-com-dark.svg'
import RattingSvg from '../assets/star-svgrepo-com.svg'
import RattingSvgDark from '../assets/star-svgrepo-com-dark.svg'
import UnRate from '../assets/star-svgrepo-com-unrated.svg'
import { useTheme } from "./Provider/ThemeProvider";
const Testimonies = () => {
    const { theme } = useTheme();
    return (
        <div className="max-w-7xl mx-auto mt-16 mb-24 px-4 md:px-8 lg:px-12 lg:mt-40 lg:mb-44">
            <div>
                <div className="flex flex-col justify-center items-center space-y-3 px-3 lg:px-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mx-auto lg:mx-0 lg:text-left">
                        What Our Clients Say
                    </h1>
                    <p className="text-base md:text-lg font-lora text-center lg:text-center">
                        Our clients have experienced life-changing results. Here’s what they say about <br className="hidden lg:block"></br> our meditation programs.
                    </p>
                </div>
                <div className="my-16">
                    <Carousel className="w-full mx-auto">
                        <CarouselContent>
                            <CarouselItem className='w-full max-w-md'>
                                <Card>
                                    <CardHeader></CardHeader>
                                    <CardContent className="flex flex-col items-start">
                                        {
                                            theme === 'light' ?
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvg} alt="Apostrophe Icon" />
                                                :
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvgDark} alt="Apostrophe Icon" />
                                        }
                                        <p className="text-lg font-lora">
                                            I have found peace in the midst of chaos. The trainer’s guidance has transformed my daily routine.
                                        </p>
                                    </CardContent>
                                    <CardFooter className='flex flex-row justify-between'>
                                        <span>
                                            <p>- John Doe</p>
                                        </span>
                                        <span className="flex flex-row">
                                            {
                                                theme === 'light' ?
                                                    <>
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                    </>
                                                    :
                                                    <>
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                    </>
                                            }
                                        </span>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className='w-full max-w-md'>
                                <Card>
                                    <CardHeader></CardHeader>
                                    <CardContent className="flex flex-col items-start">
                                        {
                                            theme === 'light' ?
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvg} alt="Apostrophe Icon" />
                                                :
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvgDark} alt="Apostrophe Icon" />
                                        }
                                        <p className="text-lg font-lora">
                                            The mindfulness sessions have completely changed the way I manage stress. It's been a life-saver for my mental health.
                                        </p>
                                    </CardContent>
                                    <CardFooter className='flex flex-row justify-between'>
                                        <span>
                                            <p>- Emily R.</p>
                                        </span>
                                        <span className="flex flex-row">
                                            {
                                                theme === 'light' ?
                                                    <>
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                    </>
                                                    :
                                                    <>
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                    </>
                                            }
                                        </span>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className='w-full max-w-md'>
                                <Card>
                                    <CardHeader></CardHeader>
                                    <CardContent className="flex flex-col items-start">
                                        {
                                            theme === 'light' ?
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvg} alt="Apostrophe Icon" />
                                                :
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvgDark} alt="Apostrophe Icon" />
                                        }
                                        <p className="text-lg font-lora">
                                            I never realized how powerful meditation could be. The guidance I've received here has been truly transformative.
                                        </p>
                                    </CardContent>
                                    <CardFooter className='flex flex-row justify-between'>
                                        <span>
                                            <p>- Michael B.</p>
                                        </span>
                                        <span className="flex flex-row">
                                            {
                                                theme === 'light' ?
                                                    <>
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                    </>
                                                    :
                                                    <>
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                    </>
                                            }
                                        </span>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className='w-full max-w-md'>
                                <Card>
                                    <CardHeader></CardHeader>
                                    <CardContent className="flex flex-col items-start">
                                        {
                                            theme === 'light' ?
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvg} alt="Apostrophe Icon" />
                                                :
                                                <img className="w-8 h-8 mb-4" src={ApostopheSvgDark} alt="Apostrophe Icon" />
                                        }
                                        <p className="text-lg font-lora">
                                            From the first session, I felt more grounded and peaceful. This program has brought a sense of calm to my everyday life.
                                        </p>
                                    </CardContent>
                                    <CardFooter className='flex flex-row justify-between'>
                                        <span>
                                            <p>- Sarah L.</p>
                                        </span>
                                        <span className="flex flex-row">
                                            {
                                                theme === 'light' ?
                                                    <>
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvg} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                    </>
                                                    :
                                                    <>
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={RattingSvgDark} className="max-w-[1.2rem]" />
                                                        <img src={UnRate} className="max-w-[1.2rem]" />
                                                    </>
                                            }
                                        </span>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className='hidden lg:flex' />
                        <CarouselNext className='hidden lg:flex' />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonies;