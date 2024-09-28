import { useTheme } from "./Provider/ThemeProvider";

const Footer = () => {
    const { theme } = useTheme();
    console.log(theme)
    return (
        <footer className={`text-center font-lora py-2 font-semibold ${theme === "light" ? 'bg-black text-[#d5d5d5]' : 'bg-white text-black'}`}>
            <p>© 2024 ARSDEV. All rights reserved.</p>
        </footer>
    );
};

export default Footer;