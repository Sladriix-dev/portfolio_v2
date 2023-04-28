import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import profilePic from "../public/assets/profilePic.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>KevinF Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Kévin Forget"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Transformer la Vision en Réalité avec le Code et le Design" className="!text-6xl" />
              <p className="my-4 text-base font-medium">
                En tant que développeur front-end qualifié je me consacre à
                transformer des idées en applications Web innovantes. Explorez
                mes derniers projets, mettant en valeur mon
                expertise en React.js et en développement web.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link 
                  href="/CV_Kévin_Forget.pdf" 
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Mon&nbsp;CV<LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link 
                  href="mailto:kevin.forget0805@gmail.com" 
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
