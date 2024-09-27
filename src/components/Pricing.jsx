import { Badge } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const Pricing = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 mb-24 px-4 md:px-8 lg:px-12 lg:mt-40 lg:mb-44">
            <div>
                <div className="flex flex-col justify-center items-center space-y-3 px-3 lg:px-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mx-auto lg:mx-0 lg:text-left">
                        Choose Your Plan
                    </h1>
                    <p className="text-base md:text-lg font-lora text-center lg:text-center">
                        Select a plan that best fits your needs.
                    </p>
                </div>
                <div className="my-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <Card className='cursor-pointer hover:scale-105 transition-all'>
                            <CardHeader>
                                <h1 className="text-5xl font-bold">Basic Plan</h1>
                                <p className="font-lora">Beginners looking to start their meditation journey.</p>
                                <span className="text-3xl font-lora font-bold">$29/month</span>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">Features:</p>
                                <ul className="font-lora list-disc px-5">
                                    <li>Access to beginner sessions twice a week.</li>
                                    <li>On-demand library of recorded sessions.</li>
                                    <li>Community forum for support.</li>
                                    <li>Email assistance for basic queries.</li>
                                    <li>Meditation progress tracker.</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className='bg-black text-[#d5d5d5] cursor-pointer hover:scale-105 transition-all'>
                            <CardHeader>
                                <h1 className="text-5xl font-bold">Advanced Plan</h1>
                                <p className="font-lora">For those wanting deeper practice and personalized support.</p>
                                <span className="text-3xl font-lora font-bold">$49/month</span>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">Features:</p>
                                <ul className="font-lora list-disc px-5">
                                    <li>Access to all-level sessions.</li>
                                    <li>Monthly webinars and workshops.</li>
                                    <li>1-on-1 coaching (30 min/month).</li>
                                    <li>Full access to advanced resources.</li>
                                    <li>Priority email and chat support.</li>
                                    <li>Weekly progress check-ins.</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className='cursor-pointer hover:scale-105 transition-all'>
                            <CardHeader>
                                <h1 className="text-5xl font-bold">Corporate Plan</h1>
                                <p className="font-lora">Tailored for businesses to promote mindfulness at work.</p>
                                <span className="text-3xl font-lora font-bold">$29/month</span>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">Features:</p>
                                <ul className="font-lora list-disc px-5">
                                    <li>Custom group meditation sessions.</li>
                                    <li>Stress management programs.</li>
                                    <li>Access to workshops and webinars.</li>
                                    <li>Monthly team progress reports.</li>
                                    <li>Dedicated support for corporate clients.</li>
                                    <li>Discounts for long-term plans.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;