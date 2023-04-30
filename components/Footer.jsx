import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-l dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; Tous droits réservés.</span>
        <div className="flex items-center">
          Fait par{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          <Link href="/" className="underline underline-offset-2">
            Kévin Forget
          </Link>
        </div>
        <Link
          href="https://github.com/Sladriix-dev"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          En savoir plus
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
