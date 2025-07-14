import Header from "@/components/header";
import { CheckIcon, GithubIcon } from "@/components/icons";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";
import Work from "@/components/workExperiences";
import projectList from "@/data/projects";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const faviconTag = document.getElementById("faviconTag") as HTMLLinkElement;
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    const changeFavicon = () => {
      if (isDark.matches) faviconTag.href = "./favicon-dark.ico";
      else faviconTag.href = "./favicon.ico";
    };
    changeFavicon();
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-R7M5WNE6BT"
      ></Script>
      <Head>
        <title>@hieunm</title>
        <meta name="description" content="Portfolio of Hieu Ngo Minh" />
        <meta name="keywords" content="Portfolio, Hieu Ngo Minh, programeoww" />
        <meta name="author" content="@hieunm" />
        <link rel="icon" href="./favicon.ico" id="faviconTag" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="og:title" content="Portfolio | @hieunm" />
        <meta name="og:description" content="Portfolio of Hieu Ngo Minh" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://programeoww.github.io/" />
      </Head>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-R7M5WNE6BT');`}
      </Script>
      <main className={`md:max-w-4xl mx-auto md:pt-5 ${inter.className}`}>
        <Header />
        <div className="flex flex-col md:flex-row my-5 md:my-10 mx-5 space-x-0 md:space-x-10 space-y-10 md:space-y-0 max-w-3xl md:mx-auto">
          <div className="w-full space-y-5">
            <section className="space-y-5">
              <h1 className="text-2xl font-bold ">
                I can transform YOUR concepts into interactive and user-friendly
                front-end experiences.
              </h1>
              <h2 className="text-gray-400">Simple. Consistent. Lasting.</h2>
            </section>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-dark-blue h-[1px] w-full"
            />
            <section className="space-y-5">
              <p className="text-sm text-gray-100">
                👋 Hi, I&lsquo;m Hieu, a Front-end developer. I always keep
                myself updated and learn new technologies to apply them to my
                projects. I have the ability to work independently and
                effectively in a team, and I can solve problems and provide
                optimal solutions for challenges during the development process.
              </p>
              <a
                href={"https://github.com/programeoww/"}
                className="inline-flex border-dark-blue bg-white/5 items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-secondary-blue rounded-md px-2 md:px-3 text-xs mr-auto h-8"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden md:inline-block ml-2">My Github</span>
              </a>
            </section>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-dark-blue h-[1px] w-full"
            />
            <section data-hash="home" className="space-y-5">
              <div className="flex space-x-4 flex-col-reverse md:flex-row space-y-4 space-y-reverse md:space-y-0">
                <a
                  href={"/[Wordpress Developer] Ngo Minh Hieu.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-black bg-white shadow hover:bg-white/90 h-9 px-4 py-2"
                >
                  <MdOutlineFileDownload className="h-4 w-4" />
                  <span className="inline-block ml-2">Resume</span>
                </a>
                <button
                  onClick={() => router.push(`/#contact`)}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-black border border-white text-white shadow hover:bg-white/20 h-9 px-4 py-2"
                >
                  <CheckIcon className="h-4 w-4" />
                  <span className="inline-block ml-2">Contact Me</span>
                </button>
                {/* <div className="space-y-1">
                  <h3 className="font-medium leading-none">2 years</h3>
                  <p className="text-xs text-gray-400">Experience</p>
                </div> */}
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">
                    Ha Noi, Viet Nam 🇻🇳
                  </h3>
                  <p className="text-xs text-gray-400">Location</p>
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-dark-blue h-[1px] w-full"
              ></div>
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold ">Technical Skills</h3>
                <TechStack />
              </div>
            </section>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-dark-blue h-[1px] w-full"
            ></div>
            <section data-hash="projects" className="space-y-5">
              <h3 className="text-2xl font-semibold ">
                Projects{" "}
                <span className="text-gray-400 text-sm">
                  ({projectList.length})
                </span>
              </h3>
              <Projects />
            </section>
            <section data-hash="experience" className="space-y-5">
              <h3 className="text-2xl font-semibold ">Experience</h3>
              <Work />
            </section>
            <section data-hash="contact" className="space-y-5">
              <h3 className="text-2xl font-semibold ">Contact</h3>
              <div className="mt-5 rounded-xl border border-dark-blue shadow">
                <p className="p-6 text-sm bg-white/5">
                  Best way to reach me is through: {` `}
                  <a
                    className="underline underline-offset-4"
                    href="mailto:hieunm156@gmail.com"
                  >
                    hieunm156@gmail.com
                  </a>
                </p>
              </div>
            </section>
            <p className="mb-8 text-sm text-gray-400 text-center">
              ©2023 @hieunm. Nothin&apos; reserved.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
