import { Button } from './ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto  z-20 relative rounded-b-3xl">
            <div>
                {/* Mobile view */}
                <div className="flex lg:hidden">
                    <Sheet>
                        <SheetTrigger className=' mx-4 my-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#000000"} fill={"none"}>
                                <path d="M4 5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </SheetTrigger>

                        <SheetContent side='left'>
                            <div className="grid gap-2 py-6">
                                <a href='/'>Home</a>
                                <a href='/blogs'>Blogs</a>
                                <a href='/'>Prodcasts</a>
                                <a href='/'>Contact</a>
                                <a href='/'>About</a>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="flex m-auto">
                        <img src='https://i.ibb.co/6rDQ2vR/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo-3-removebg-preview.png' width={200} height={100} alt="logo" />
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden lg:block my-4 ">
                    <div className="flex justify-center items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem className='bg-transparent'>
                                    <a href="/" >
                                        <NavigationMenuLink className='mx-2'>
                                            <span className="text-black font-medium text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all">Home</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/blogs">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className="text-black font-medium text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all">About</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className="text-black font-medium text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all">services</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className="text-black font-extrabold text-md text-xl">Mindful</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className="text-black font-medium text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all">Pricing</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <span className="text-black font-medium text-md hover:bg-black hover:text-white px-2 py-1 rounded-lg transition-all">Testimonial</span>
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="/">
                                        <NavigationMenuLink className='mx-2'>
                                            <Button variant="outline" className="border-black bg-transparent text-black font-medium text-md hover:bg-black hover:text-white hover:scale-105 transition-all">Book a session</Button>
                                        </NavigationMenuLink>
                                    </a>
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
