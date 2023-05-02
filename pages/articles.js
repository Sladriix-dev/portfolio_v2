import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import paginationImage from "../public/assets/pagination.jpg";
import loadingImage from "../public/assets/loading.jpg";
import formImage from "../public/assets/form.png";
import higherImage from "../public/assets/higher.jpg";
import sophrologieImage from "../public/assets/sophrologie.jpg";
import meditationImage from "../public/assets/meditation.jpg";
import cleanImage from "../public/assets/clean.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-blue-700 dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-8 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ one: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-blue-700 dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>KF - Articles</title>
        <meta
          name="description"
          content="This page explains who I am and traces my professional background"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Les mots peuvent changer le monde"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Construire un composant de pagination personnalisé dans Reactjs à partir de zéro"
              summary="Apprenez à créer un composant de pagination personnalisé dans      ReactJS à partir de zéro.
                Suivez ce guide étape par étape pour intégrer le composant Pagination dans votre projet ReactJS."
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              img={paginationImage}
              time="12 min"
            />
            <FeaturedArticle
              title="Créer de superbes écrans de chargement avec ReactJS"
              summary="Apprenez à créer de superbes écrans de chargement dans React avec 3 méthodes différentes.
              Découvrez comment utiliser React-Loading, React-Lottie et créer un écran de chargement personnalisé dans le but d'améliorer l'expérience utilisateur."
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
              img={loadingImage}
              time="7 min"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Tous les articles
          </h2>
          <ul>
            <Article
              title="Les formulaires de validation en ReactJS"
              img={formImage}
              date="11 avril 2023"
              link="https://www.freecodecamp.org/news/how-to-validate-forms-in-react"
            />
            <Article
              title="Mettre en oeuvre les principes du clean code"
              img={cleanImage}
              date="6 septembre 2022"
              link="https://www.insidegroup.fr/actualites/principes-demarche-cleancode"
            />
            <Article
              title="Les composants d'ordre supérieur de React"
              img={higherImage}
              date="20 juillet 2022"
              link="https://blog.logrocket.com/understanding-react-higher-order-components"
            />
            <Article
              title="La sophrologie comment ça marche ?"
              img={sophrologieImage}
              date="21 mai 2020"
              link="https://www.mcommemutuelle.com/magazine/la-sophrologie-comme-outil-de-prevention-et-de-bien-etre-au-travail"
            />
            <Article
              title="Pourquoi pratiquer la méditation ?"
              img={meditationImage}
              date="16 mai 2020"
              link="https://www.laboratoire-lescuyer.com/blog/nos-conseils-sante/a-quoi-sert-la-meditation"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
