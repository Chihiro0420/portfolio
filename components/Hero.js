import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#E9B8B8", "#9ECDC9", "#A8B7CD"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-1/2 mx-auto text-center lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">Hi, I’m Chihiro</h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">A Developer &</h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">A Programmer</h1>
          </RainbowHighlight>
        </RoughNotationGroup>
        <p className="py-4">I'm a Web Developer in Auckland. I have the ability to learn and collaborate in a rapidly changing environment and compositions. I love coding and creating web design.</p>
      </div>
    </div>
  );
}
