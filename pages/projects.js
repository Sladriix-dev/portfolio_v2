import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import netflixImage from "../public/assets/netflix.png";
import landingPageImage from "../public/assets/landing_page.png";
import myBlogImage from "../public/assets/my_blog.png";
import pacmanImage from "../public/assets/pacman.png";
import ecommerceImage from "../public/assets/ecommerce.png";
import dashboardImage from "../public/assets/dashboard.png";
import DemoPopup from "@/components/DemoPopup";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, videoId, img, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lgproject:flex-col lgproject:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <div className="w-1/2 overflow-hidden rounded-lg lgproject:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col items-start justify-between pl-6 lgproject:w-full lgproject:pl-0 lgproject:pt-6">
        <span className="text-blue-700 dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2 dark:text-light sm:text-sm">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <DemoPopup videoId={videoId} />
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, videoId, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <div className="w-full overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className="w-full h-full flex flex-col items-start justify-between mt-4">
        <span className="text-blue-700 dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-2 lg:text-2xl">
          {title}
        </h2>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-12 md:w-10">
            <GithubIcon />
          </Link>
          <DemoPopup videoId={videoId} />
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>KF - Mes projets</title>
        <meta
          name="description"
          content="In this page you can learn more about my skills by going through all of my projects"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="L'imagination l'emporte sur la connaissance"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 mb-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Clone Netflix"
                summary="Ce projet respecte l'environnement de TypeScript avec une configuration NextJS MongoDB et Prisma connect. Concernant l'authentification j'ai utilisé NextAuth, une authentification via Google ou Github est également disponible. Les pages sont entièrement responsive.Une authentification basé sur les cookies est également présente. Des effets et des animations détaillés sont présents grâce à TailwindCSS. Pour fetch l'ensemble des datas, je me suis servis de react swr et zustand pour la gestion du state"
                videoId="NevT72bRpTM"
                github="https://github.com/Sladriix-dev/netflix"
                type="NextJS"
                img={netflixImage}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Landing Page"
                videoId="muZTLTU-lnU"
                github="https://github.com/Sladriix-dev/landing-page"
                type="NextJS"
                img={landingPageImage}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pac-man"
                videoId="nDaDp819ZRY"
                github="https://github.com/Sladriix-dev/pacman-js"
                type="Javascript"
                img={pacmanImage}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="My-Blog"
                summary="Ce projet React utilise Firestore pour le développement du serveur ainsi que Firebase pour l'authentification par email. Le blog est entièrement responsif et il se sert de Sass pour l'ensemble de son style."
                videoId="LVH5lFDsjOY"
                github="https://github.com/Sladriix-dev/my-blog"
                type="ReactJS"
                img={myBlogImage}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Site e-commerce"
                videoId="06FLWzE_MfU"
                github="https://github.com/Sladriix-dev/rezar"
                type="ReactJS & NodeJS"
                img={ecommerceImage}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Dashboard"
                videoId="06FLWzE_MfU"
                github="https://github.com/Sladriix-dev/sladz-board"
                type="Javascript"
                img={dashboardImage}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
