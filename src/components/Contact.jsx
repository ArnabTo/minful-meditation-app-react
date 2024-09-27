import ContactSvg from '../assets/undraw_contact_us_re_4qqt.svg'
const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 mb-24 px-4 md:px-8 lg:px-12 lg:mt-40 lg:mb-44">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side: Text */}
                <div className="lg:w-1/2 flex flex-col space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left text-black dark:text-white">
                        Get in Touch
                    </h1>
                    <p className="text-base md:text-lg font-lora text-center lg:text-left text-gray-700 dark:text-gray-300">
                        Have any questions or need help? Reach out to us and we’ll be happy to assist you.
                    </p>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 border border-gray-500 bg-white  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 border border-gray-500 bg-white  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="p-3 border border-gray-500 bg-white  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <button
                            type="submit"
                            className="bg-black dark:bg-white text-white dark:text-black font-bold py-3 rounded-md hover:red dark:hover:bg-gray-300 transition">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side: SVG */}
                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                    <img
                        src={ContactSvg}
                        alt="Contact Us"
                        className="w-72 md:w-96 lg:w-[30rem] animate-float"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;