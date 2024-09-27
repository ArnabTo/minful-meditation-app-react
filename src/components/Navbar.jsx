import { useEffect, useState } from 'react';
import { useTheme } from './Provider/ThemeProvider';
import { ThemeSwitch } from './ThemeSwitch';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import '../App.css'
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
        <div className={`${isScrolled ? 'fixed w-full bg-glassmorphism z-50 top-0' : 'relative'} transition-all duration-300`}>
            <div className="max-w-7xl mx-auto">
                {/* Mobile view */}
                <div className="flex lg:hidden">
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
                                <a href='/'>Home</a>
                                <a href='/blogs'>About</a>
                                <a href='/'>Services</a>
                                <a href='/'>Pricing</a>
                                <a href='/'>Testimonial</a>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="flex m-auto">
                        <img src='https://i.ibb.co/6rDQ2vR/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo-3-removebg-preview.png' width={200} height={100} alt="logo" />
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden lg:block py-4 ">
                    <div className="flex justify-center items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem className='bg-transparent'>
                                    <a href="/" >
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>Home</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/blogs">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>About</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>services</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-extrabold text-md text-xl`}>Mindful</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>Pricing</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className={`${theme === 'light' ? 'text-black' : 'text-[#d5d5d5]'} font-medium font-lora text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all`}>Testimonial</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                               <ThemeSwitch/>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
