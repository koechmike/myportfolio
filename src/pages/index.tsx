//import Image from "next/image";
//import { Inter } from "next/font/google";
import Head from "next/head";
//import { motion, scroll, stagger, useAnimate, useScroll, useSpring, useTransform } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { BsArrowUpCircleFill } from "react-icons/bs";
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};


// const inter = Inter({ subsets: ["latin"] });

// function useMenuAnimation(isOpen: boolean) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     const menuAnimations = isOpen
//       ? [
//           [
//             "nav",
//             { transform: "translateX(0%)" },
//             { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
//           ],
//           [
//             "li",
//             { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
//             { delay: stagger(0.05), at: "-0.1" }
//           ]
//         ]
//       : [
//           [
//             "li",
//             { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
//             { delay: stagger(0.05, { from: "last" }), at: "<" }
//           ],
//           ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
//         ];

//     animate([
//       [
//         "path.top",
//         { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
//         { at: "<" }
//       ],
//       ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
//       [
//         "path.bottom",
//         { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
//         { at: "<" }
//       ],
//       ...menuAnimations
//     ]);
//   }, [isOpen]);

//   return scope;
// }

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {

  // const [isOpen, setIsOpen] = useState(false);
  // const scope = useMenuAnimation(isOpen);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-[#00000083] z-0">
    {/* <ProgressBar /> */}
    <Head>
      <title>{pageInfo?.name} - Portfolio</title>
    </Head>
    
    {/* Header */}
    <Header socials={socials}/>
    
    {/* Hero */}
    <section id="hero" className="snap-start">
    <Hero pageInfo={pageInfo}/>
    </section>

    {/* About */}
    <section id="about" className="snap-center">
    <About pageInfo={pageInfo} />
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
    <WorkExperience experiences={experiences} />
    </section>

    {/* Skills */}
    <section id="skills" className="snap-start">
    <Skills skills={skills}/>
    </section>

    {/* Projects */}
    <section id="projects" className="snap-start">
    <Projects projects={projects} />
    </section>

    {/* Contact Me */}
    <section id="contact" className="snap-start">
    <ContactMe pageInfo={pageInfo}/>
    </section>

    {/* <div ref={scope}>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      <Menu />
    </div> */}
    <Link href="#hero">
    <footer className="snap-center rounded-full">
      <div>
        {/* <img 
        src={urlForImage(pageInfo?.heroImage)}
        className="filter grayscale hover:grayscale-0 cursor-pointer object-cover rounded-full"
        alt=""
        /> */}
        <BsArrowUpCircleFill
            className="md:w-14 md:h-14 h-10 w-10 bottom-2 right-2 fixed cursor-pointer animate-bounce"
            onClick={handleScrollToTop}
          />
      </div>
    </footer>
    </Link>
    </div>
  );
};
export default Home;

export const getStaticProps : GetStaticProps <Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] =  await fetchSkills();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return  {
    props : {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
     revalidate: 10,
  };
};
