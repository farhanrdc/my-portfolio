"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = ` Welcome to my portfolio website, where my innovation and creativity
converge. With a keen eye for aesthetics and a mastery of code, my
portfolio showcases a diverse collection of projects that reflect my
commitment to excellence.
`;

const words1 = ` Website Portfolio Farhan Ramadhan`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="font-normal text-lg"/>;
}

export function TextGenerateEffectTitle() {
  return <TextGenerateEffect words={words1} className="mt-8 font-bold text-5xl leading-relaxed"/>;
}