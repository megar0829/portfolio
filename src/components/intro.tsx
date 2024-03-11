import Image from "next/image";
import {introText} from "@/constants";

import {useEffect, useState} from "react";

interface Text {
  text: string
}

export default function Intro({ text }: Text) {
  const [sequence, setSequence] = useState<string>("");
  const [textCount, setTextCount] = useState<number>(0);
  const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTypingPaused) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsTypingPaused(false);
          setTextCount(0);
          setSequence("");
        }, 5000);
        return;
      }

      if (textCount >= text.length) {
        setIsTypingPaused(true);
        return;
      }

      const nextChar = text[textCount];
      setSequence((prevSequence) => prevSequence + nextChar);

      if (nextChar === "\n") {
        setTextCount((prevCount) => prevCount + 2);
      } else {
        setTextCount((prevCount) => prevCount + 1);
      }
    }, 200);

    return () => clearInterval(typingInterval);

  }, [text, textCount, isTypingPaused]);

  return (
    <section id="intro">
      <div className="intro__div">
        <span className="intro__text">{sequence}</span>
      </div>
    </section>
  )
}