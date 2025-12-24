import Image from "next/image";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiPython, SiC, SiHaskell } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { BsFiletypeSql} from "react-icons/bs";
import {DiProlog} from "react-icons/di"
import {MdOutlineMail} from "react-icons/md";

export default function Home() {
  return (
    <main>
      <nav> {/* Navegator between sections */}
        <a href="#me">About Me</a>
        <a href="#projects"> Projects</a>
        <a href="#contacts"> Contacts</a>
      </nav>
      <section id="me"> {/* About Me + Skills */}
        <h1>About Me</h1>
        <h3>Introduction</h3>
        <p>I'm Rita, a Computer Science student at FCUP, every day more in love with learning about creating and solving problems.</p>
        <p>Right now, I'm living the more exciting phase of this learning journey: the discovery. As a final year student, my current focus is trying new areas. More than dominating an unique language, my goal is to learn how to build a solid base for my future.</p>
        <p>This portfolio is a reflexion of my learning journey, with my university projects, but a way for me to explore new areas and document my personal projects.</p>
        <h3>Skills</h3>
        <p>I'm organized, responsible and a good leader. I'm good at working in team, but also alone. I really enjoy learning new things by myself, to find what I really enjoy and to be flexible.</p>
        <p>Relatively to actual knowledge, below is a list of languages I've learned over the past 2 and a half years, from the most to least used:</p>
        <ol>
          <li className="flex items-center gap-3">
            <FaJava title="Java" />
            <span>Java</span>
          </li>
          <li className="flex items-center gap-3">
            <SiC title="C" />
            <span>C</span>
          </li>
          <li className="flex items-center gap-3">
            <PiFileCpp title="Cpp" />
            <span>C++</span>
          </li>
          <li className="flex items-center gap-3">
            <SiPython title="Python" />
            <span>Python</span>
          </li>
          <li className="flex items-center gap-3">
            <BsFiletypeSql title="SQL" />
            <span>SQL</span>
          </li>
          <li className="flex items-center gap-3">
            <FaHtml5 title="HTML" />
            <span>HTML</span>
          </li>
          <li className="flex items-center gap-3">
            <FaCss3Alt title="CSS" />
            <span>CSS</span>
          </li>
          <li className="flex items-center gap-3">
            <SiJavascript title="JavaScript" />
            <span>JavaScript</span>
          </li>  
          <li className="flex items-center gap-3">
            <FaReact title="React.js" />
            <span>React.js</span>
          </li>
          <li className="flex items-center gap-3">
            <SiNextdotjs title="Next.js" />
            <span>Next.js</span>
          </li>
          <li className="flex items-center gap-3">
            <SiTailwindcss title="Tailwindcss"/>
            <span>Tailwindcss</span>
          </li>
          <li className="flex items-center gap-3">
            <SiHaskell title="Haskell" />
            <span>Haskell</span>
          </li>
          <li className="flex items-center gap-3">
            <DiProlog title="Prolog" />
            <span>Prolog</span>
          </li>
        </ol>
      </section>
      <section id="projects"> {/* Projects */}
        <h1>My Projects</h1>
        <p>Over the past year and a half, I've developed some projects for university, that made me learn a lot about the basics of CS, from compilers to web servers. Below are presented these projects.</p>
        <div>
          <Image></Image> {/* get images from each project */}
          <a href="https://github.com/ritamaria05/oscarsDatabase">Oscars Database</a> {/* try opening a new tab */}
          <p>Project made for Database course, using Python, SQL and HTML/CSS/JS, with a given dataset about the Oscars Ceremony and winners. The wesbite allows the user to find each year's winners, details about movies, about directors and actors, like how many wins and nominations they have, when and for what.</p>
        </div>
        <div>
          <Image></Image>
          <a href="https://github.com/MaxSa2004/Chat_Server_Communication_Networks">Chat Server</a>
          <p>Project made for Communication Networks course, in Java, that allows users to chat in chat rooms, all controlled by a server.</p>
        </div>
        <div>
          <Image></Image>
          <a href="https://github.com/ritamaria05/Prolog_Recommendation_System">Movie Recommendation System</a>
          <p>Project made for Logical Programming course, in Prolog, that allows users to register and add films to their list and from what they added and how they rated them, the system recommends them similar movies.</p>
        </div>
        <div>
          <Image></Image>
          <a href="https://github.com/ritamaria05/ConnectedFour">Connected Four</a>
          <p>Project made for Artifitial Inteligence course, in Python, to play Connected Four with another Player and With AI (with MCTS or a previously trained decision tree).</p>
        </div>
        <div>
          <Image></Image>
          <a href="https://github.com/MaxSa2004/Ada_Compiler">Ada Compiler</a>
          <p>Project made for Compilers course, in C, with a given subset of the Ada language. It explores areas such as lexical analysis and semantics, and code generator.</p>
        </div>
        <div>
          <Image></Image>
          <a href="https://github.com/MaxSa2004/Tab_Tech-Web-Project">Tâb</a>
          <p>Project made for Tech Web course, using HTML, CSS, JavaScript and Node.js, to play a game called Tâb between to players online or with AI.</p>
        </div>
      </section>
      <section id="contacts"> {/* Contacts */}
        <h1>Contact Me</h1>
          <a href="https://www.linkedin.com/in/rita-moreira-308056210/" className="flex items-center gap-3"><FaLinkedin></FaLinkedin>Linkedin</a>
          <a href="https://github.com/ritamaria05" className="flex items-center gap-3"><FaGithub></FaGithub>Github</a>
          <a href="https://discord.com/users/693081966454505473" className="flex items-center gap-3"><FaDiscord></FaDiscord>Discord</a>
          <a href="https://www.instagram.com/_ritaa.moreiraa_/" className="flex items-center gap-3"><FaInstagram></FaInstagram>Instagram</a>
          <a href="mailto:rita.moreira.1414@gmail.com" className="flex items-center gap-3"><MdOutlineMail></MdOutlineMail>E-mail: rita.moreira.1414@gmail.com</a>
      </section>
    </main>
  );
}
