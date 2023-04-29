import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon, YoutubeIcon } from "@/components/Icons";
import Image from "next/image";
import project1 from "../public/assets/my_blog.png";
import DemoPopup from "@/components/DemoPopup";

const FeaturedProject = ({ type, title, summary, videoId, img, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="w-1/2 overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </div>
      <div className="w-1/2 h-full flex flex-col items-start justify-between pl-6">
        <span className="text-blue-700 font-medium text-xl">{type}</span>
        <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark">{summary}</p>
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="L'imagination l'emporte sur la connaissance"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="My-Blog"
                summary="Un blog classique réalisé avec ReactJS pour le rendu client, firebase et firestore pour l'authentification par mail le tout stylisé en Sass."
                videoId="LVH5lFDsjOY"
                github="https://github.com/Sladriix-dev/my-blog"
                type="Projet Phare"
                img={project1}
              />
            </div>
            <div className="col-span-6">Projet 1</div>
            <div className="col-span-6">Projet 2</div>
          </div>
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">Projet phare</div>
            <div className="col-span-6">Projet 3</div>
            <div className="col-span-6">Projet 4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
