import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import MatrixRain from "./components/MatrixRain";

export default function Home(): JSX.Element {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="relative px-4 backdrop-blur-sm bg-black/20 py-12 rounded-xl border border-green-500/20">
          <h1 className="text-7xl md:text-8xl font-mono text-green-400 mb-6 typing-effect">
            $ gaps
          </h1>
          <p className="text-2xl md:text-3xl text-green-200 glitch-effect mb-8">
            {`{
              role: "Software Engineer", 
              status: "Debugging Life",
              uptime: "24/7"
            }`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-600 rounded-md font-mono text-black transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              git checkout projects
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500/10 rounded-md font-mono transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              ssh connect@oluwapelumi.dev
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-4xl text-green-400 mb-8">
            $ cat about.md
          </h2>
          <div className="terminal bg-black/50 p-6 rounded-lg border border-green-500/30">
            <p className="text-green-300 font-mono leading-loose">
              <span className="text-blue-400">class</span> <span className="text-yellow-400">Developer</span> {'{'}
              <br />
              &nbsp;&nbsp;name: <span className="text-green-400">"Oluwapelumi Gideon, AINA"</span>,
              <br />
              &nbsp;&nbsp;stack: [<span className="text-green-400">"Full Stack", "Mobile", "Cloud"</span>],
              <br />
              &nbsp;&nbsp;status: <span className="text-green-400">"Actively coding dreams into reality"</span>
              <br />
              {'}'}
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-4xl text-green-400 mb-8">
            $ cat skills.json
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <h3 className="text-xl font-mono text-green-400 mb-4 flex items-center">
                <span className="text-yellow-400 mr-2">#</span> Frontend
              </h3>
              <ul className="text-green-200 font-mono space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> React.js
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> Next.js
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> TypeScript
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> TailwindCSS
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <h3 className="text-xl font-mono text-green-400 mb-4 flex items-center">
                <span className="text-yellow-400 mr-2">$</span> Backend
              </h3>
              <ul className="text-green-200 font-mono space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> Node.js
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> Python
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> Express
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> REST APIs
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <h3 className="text-xl font-mono text-green-400 mb-4 flex items-center">
                <span className="text-yellow-400 mr-2">@</span> Database
              </h3>
              <ul className="text-green-200 font-mono space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> MongoDB
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> PostgreSQL
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> Redis
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span> Firebase
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-4xl text-green-400 mb-8">
            $ cat /proc/dev/stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <div className="text-center">
                <div className="text-4xl font-mono text-green-400 mb-2">5+</div>
                <div className="text-sm font-mono text-green-200">
                  <span className="text-yellow-400">$</span> uptime --years
                </div>
                <div className="text-xs font-mono text-green-300/60 mt-2">Years of Experience</div>
              </div>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <div className="text-center">
                <div className="text-4xl font-mono text-green-400 mb-2">50+</div>
                <div className="text-sm font-mono text-green-200">
                  <span className="text-yellow-400">$</span> ls projects/completed
                </div>
                <div className="text-xs font-mono text-green-300/60 mt-2">Projects Completed</div>
              </div>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <div className="text-center">
                <div className="text-4xl font-mono text-green-400 mb-2">30+</div>
                <div className="text-sm font-mono text-green-200">
                  <span className="text-yellow-400">$</span> git repo count
                </div>
                <div className="text-xs font-mono text-green-300/60 mt-2">GitHub Repositories</div>
              </div>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <div className="text-center">
                <div className="text-4xl font-mono text-green-400 mb-2">5</div>
                <div className="text-sm font-mono text-green-200">
                  <span className="text-yellow-400">$</span> ps aux | grep active
                </div>
                <div className="text-xs font-mono text-green-300/60 mt-2">Active Projects</div>
              </div>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <div className="text-center">
                <div className="text-4xl font-mono text-green-400 mb-2">99.9%</div>
                <div className="text-sm font-mono text-green-200">
                  <span className="text-yellow-400">$</span> uptime | awk
                </div>
                <div className="text-xs font-mono text-green-300/60 mt-2">Client Satisfaction</div>
              </div>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
              <div className="text-center">
                <div className="text-4xl font-mono text-green-400 mb-2">24/7</div>
                <div className="text-sm font-mono text-green-200">
                  <span className="text-yellow-400">$</span> service availability
                </div>
                <div className="text-xs font-mono text-green-300/60 mt-2">Support & Maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-4xl text-green-400 mb-8">
            $ nc -l 3000 # Open Communication Port
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30">
              <p className="text-green-200 font-mono">
                <span className="text-blue-400">const</span> contact = {'{'}
                <br />
                &nbsp;&nbsp;email: <span className="text-green-400">"ainaoluwapelumigideon@gmail.com"</span>,
                <br />
                &nbsp;&nbsp;phone: <span className="text-green-400">"+2348129241613"</span>,
                <br />
                &nbsp;&nbsp;location: <span className="text-green-400">"Lokoja, Nigeria"</span>
                <br />
                {'}'}
              </p>
            </div>
            <div className="p-6 bg-black/50 rounded-lg border border-green-500/30">
              <div className="flex flex-col space-y-4">
                <a href="https://github.com/OluwapelumiG" target="_blank" className="flex items-center space-x-3 text-green-400 hover:text-green-300">
                  <FiGithub size={24} />
                  <span className="font-mono">github.com/OluwapelumiG</span>
                </a>
                <a href="http://linkedin.com/in/the-aina-oluwapelumi" target="_blank" className="flex items-center space-x-3 text-green-400 hover:text-green-300">
                  <FaLinkedinIn size={24} />
                  <span className="font-mono">linkedin.com/in/the-aina-oluwapelumi</span>
                </a>
                <a href="https://twitter.com/gapsaina" target="_blank" className="flex items-center space-x-3 text-green-400 hover:text-green-300">
                  <BsTwitterX size={24} />
                  <span className="font-mono">twitter.com/gapsaina</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
