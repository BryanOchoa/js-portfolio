import { Spotlight } from "./ui/spotlight-new";
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight />
      </div>
      <div>
        <BackgroundLines className="h-full w-full dark:bg-black-100 flex items-center justify-center flex-col px-4" />
      </div>
    </div>
  );
};

export default Hero;
