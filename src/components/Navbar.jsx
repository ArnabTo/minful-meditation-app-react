import { useEffect, useState } from 'react';
import { useTheme } from './Provider/ThemeProvider';
import { ThemeSwitch } from './ThemeSwitch';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Logo from '../assets/logo.png'
import '../App.css'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
const Navbar = () => {

    const { theme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={isScrolled ? { y: 3, opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${isScrolled ? 'fixed w-full lg:w-1/2 lg:left-1/4 mx-auto bg-glassmorphism z-50 top-0 rounded-full' : 'relative'} transition-all duration-300`}>
            <div className="max-w-7xl mx-auto">
                {/* Mobile view */}
                <div className="flex items-center lg:hidden">
                    <Sheet>
                        <SheetTrigger className=' mx-4 py-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#303036"} fill={"none"}>
                                <path d="M4 5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </SheetTrigger>

                        <SheetContent side='left'>
                            <div className="grid gap-2 py-6">
                                <Link to='home' smooth={true} duration={500}>Home</Link>
                                <Link to='about' smooth={true} duration={500}>About</Link>
                                <Link to='services' smooth={true} duration={500}>Services</Link>
                                <Link to='pricing' smooth={true} duration={500}>Pricing</Link>
                                <Link to='testimonies' smooth={true} duration={500}>Testimonial</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="m-auto">
                        <img src={Logo} alt="logo" className='max-w-[10rem]' />
                    </div>
                    <div className='pr-4'>
                        <ThemeSwitch />
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden lg:block">
                    <div className="flex justify-center items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem className='bg-transparent'>
                                    <Link to='home' smooth={true} duration={500} >
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>Home</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link to='about' smooth={true} duration={500}>
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>About</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link to='services' smooth={true} duration={500}>
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>services</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link>
                                        <NavigationMenuLink className='mx-2'>
                                            <img src={Logo} alt="logo" className='max-w-[10rem]' />
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link to='pricing' smooth={true} duration={500}>
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>Pricing</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to='testimonies' smooth={true} duration={500}>
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>Testimonial</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <ThemeSwitch />
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
