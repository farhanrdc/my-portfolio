"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const judul = ` BIOGRAPHY`;

const parag1 = `I am Farhan Ramadhan, a graduate of National University, majoring in Information Systems, Faculty of Communication and Information Technology.`;

const parag2 = `While I was studying, I took part in the Independent Campus program twice, namely the Artificial Intelligence for Gen Y (August 2021 - February 2022) and the Artificial Intelligence Mastery program (February 2022 - July 2022).`;

const parag3 = `During high school, 
• I served as head of the broadcast Islam division at SMAN 5 Depok.
• The person responsible for the funds for the tablik akbar event at 
SMAN 5 Depok is named SAKHUSA in 2018.
• Responsible for funds for the nature meditation event at SMAN 5 Depok 
in 2017.
• Responsible for equipment for the Japanese festival held by the Japanese Club organization from SMAN 5 Depok in 2018.`;



export function Judul() {
    return <TextGenerateEffect words={judul} className="mt-8 font-bold text-5xl leading-relaxed"/>;
}

export function Parag1() {
  return <TextGenerateEffect words={parag1} className="mt-2 font-normal text-lg text-justify"/>;
}

export function Parag2() {
    return <TextGenerateEffect words={parag2} className="mt-2 font-normal text-lg text-justify"/>;
}

export function Parag3() {
    return <TextGenerateEffect words={parag3} className="mt-2 font-normal text-lg text-justify whitespace-pre-wrap"/>;
}

