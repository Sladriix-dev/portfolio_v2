import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-36">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Formations
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Développeur Fullstack & DevOps"
            time="septembre 2022 - septembre 2023"
            place="IPSSI Paris"
            info="La formation vise à former des développeurs fullstack & devOps aptes à concevoir et réaliser n’importe quel projet web, mobile, logiciel ou applicatif. Cette formation en alternance donne les compétences techniques et opérationnelles recherchées par les startups de la French tech, les agences web ou permet encore d’être autonome en devenant indépendant"
          />
          <Details
            type="Certificat Concepteur/Développeur web et mobile "
            time="octobre 2020 - avril 2021"
            place="Epitech"
            info="La spécialisation Code & Go est conçue pour vous apporter les compétences nécessaires au métier de développeur full-stack. Vous débuterez votre spécialisation par la découverte des langages essentiels pour construire vos compétences futures. Au travers de projets, vous ferez l’apprentissage du Php, Javascript ou encore Ruby. Au cours des projets suivants, vous appréhenderez l’architecture micro-services (Docker, Node, Symfony) puis le web étendu aux mobiles et aux applications de bureau (PWA, Native Apps, Webapps)."
          />
          <Details
            type="DEUG de psychologie"
            time="septembre 2015 - septembre 2017"
            place="Nanterre Université"
            info="La Psychologie se fixe comme objectifs de décrire et d’expliquer de façon vérifiable les conduites des organismes vivants en fonction des situations physiques et sociales dans lesquelles ils se trouvent. Elle postule que ces conduites peuvent être expliquées au niveau des processus mentaux, et fait de ceux-ci son objet d’étude spécifique."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
