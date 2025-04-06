import React from "react";
import RobotViewer from "./object3D";

interface HeroProps {
    setIsChatbotActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Hero(props: HeroProps) {
    return (
        <header className="w-full px-4 py-12 text-center sm:py-16">
            <div className="animate-float flex justify-center">
                <h1 className="flex flex-row items-center gap-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                    <RobotViewer rotate={false} height={80} />
                    JeevanPath
                </h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
                Your AI-Powered Journey to Lifelong Learning
            </p>

            <div className="flex justify-center">
                <button
                    onClick={() => props.setIsChatbotActive(true)}
                    className="flex flex-row items-center gap-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all transform hover:scale-105 hover:shadow-lg">
                    <RobotViewer rotate={true} height={30} />
                    Start Learning Journey
                </button>
            </div>
        </header>
    );
}

export default Hero;
