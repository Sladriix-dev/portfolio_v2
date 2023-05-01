import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-blue-700 dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Expériences
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Développeur fullstack | Alternance"
            company="Agency Inside"
            companyLink="https://agency-inside.com"
            time="octobre 2021 - septembre 2022"
            address="Neuilly-sur-Seine"
            work="Au sein d'une petite équipe et en respectant la méthode agile, j'ai travaillé sur la maintenance de l'ensemble des sites de nos clients mais j'ai également apporté de nouvelles features en fonction du besoin. Ce besoin vient inclure également la résolution de bugs et parfois même la réalisation de site internet from scratch."
          />
          <Details
            position="Développeur back-end | Projet d'étude"
            company="IPSSI"
            companyLink="https://ecole-ipssi.com"
            time="mars 2022 - juillet 2022"
            address="Paris"
            work="Dans le cadre de mon projet de fin de formation j'ai réalisé un site e-commerce from scratch composé d'une équipe de deux. J'en ai ainsi profité pour expérimenté et m'améliorer en backend. Je me suis donc occupé de la création ainsi que de la gestion de la base de données MongoDB. De plus j'ai conçu une API avec NodeJS et ainsi fait la connexion avec la partie client en ReactJS."
          />
          <Details
            position="Développeur fullstack | Stage"
            company="Prodware"
            companyLink="https://www.prodwaregroup.com"
            time="octobre 2020 - février 2021"
            address="Paris"
            work="En full remote tout en respectant la méthode agile, je me suis intégré à une équipe de 3 développeurs pour les aider dans la correction des bugs, l'ajout de nouvelles fonctionnalités ainsi qu'à la fin de mon stage j'ai pu les accompagner dans la migration de Wordpress 5.0 vers la version 5.5"
          />
          <Details
            position="Développeur front-end | Projet d'étude"
            company="Epitech"
            companyLink="https://www.epitech.eu"
            time="mai 2020 - juillet 2020"
            address="Paris"
            work="Lors de mon premier gros projet en groupe dans le cadre de ma reconversion, mon équipe et moi avons réalisé une application mobile. Je me suis principalement occupé de la partie front-end à l'aide de React Native. J'ai par la suite également réalisé un chat en ligne sur l'application."
          />
          <Details
            position="Vendeur projet"
            company="Saint-Maclou"
            companyLink="https://www.saint-maclou.com"
            time="juillet 2018 - juillet 2019"
            address="Courbevoie"
            work="En tant que vendeur projet j'étais responsable de l'accompagnement du client pour jouer le rôle de conseiller qualifié. Je me suis également occupé de la conception de devis dépendamment de l'ampleur du projet. La gestion ainsi que la plannification de rénovation étaient très importantes dans mon quotidien."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
