import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../public/assets/profilePic2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000, delay: 0.8 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>KF - Qui suis-je ?</title>
        <meta
          name="description"
          content="This page explains who I am and traces my professional background"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="La passion alimente le but !"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* BIOGRAPHIE */}

            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 mdabout:order-2 mdabout:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biographie
              </h2>
              <p className="font-medium text-lg">
                Bonjour, je suis Kévin, un développeur front-end passionné par
                la création de sites beaux, fonctionnels, et des expériences
                numériques centrées sur l&apos;utilisateur. Avec 2 ans d&apos;expérience
                dans le domaine. je cherche toujours des façons nouvelles et
                novatrices de donner vie aux visions de mes clients.
              </p>
              <p className="my-4 font-medium text-lg">
                Je crois que le design ne consiste pas seulement à rendre les
                choses jolies - il s&apos;agit de résoudre des problèmes et créer des
                expériences intuitives et agréables pour les utilisateurs.
              </p>
              <p className="font-medium text-lg">
                Que je travaille sur un site Web, une application mobile ou
                autre produit numérique, j&apos;apporte mon engagement envers
                l&apos;excellence du design et la pensée centrée sur l&apos;utilisateur à
                chaque projet sur lequel je travaille. J&apos;attends avec impatience
                l&apos;occasion d&apos;apporter mes compétences et ma passion à votre
                prochain projet.
              </p>
            </div>

            {/* PROFILE IMAGE */}

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 mdabout:order-1 mdabout:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Kévin"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* ANIMATED NUMBERS */}

            <div className="col-span-2 flex flex-col items-end justify-between h-[80%] xl:col-span-8 xl:flex-row xl:items-center mdabout:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  +<AnimatedNumbers value={15} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  clients satisfaits
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  +<AnimatedNumbers value={30} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projets terminés
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  +<AnimatedNumbers value={2} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  années d&apos;expérience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
