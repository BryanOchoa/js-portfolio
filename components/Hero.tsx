import { Spotlight } from "./ui/spotlight-new";
import { BackgroundLines } from "./ui/background-lines";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { SlActionRedo } from "react-icons/sl";

const Hero = () => {
  return (
    <div className="pb-20 pt-16">
      <div>
        <Spotlight />
      </div>
      <div>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-full dark:bg-black-100 absolute top-0 left-0" ></BackgroundLines>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex
        flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Welcome to My Portfolio
            </h2>

            <TextGenerateEffect 
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Turning Curiosity into Code, One Line at a Time. "
            />
            <p className="text-center md:tracking-wider md-4 text-sm md:text-lg lg:text-2xl mb-5"> Hello my name is Bryan, a future <u>Pro</u>grammer! </p>

            <a href="#about">
              <MagicButton 
              title="My Project's"
              icon={<SlActionRedo />}
              position="right"
              
              />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
