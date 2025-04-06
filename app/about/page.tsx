import Image from "next/image";
import { FaCode, FaDatabase, FaBrain, FaRobot, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function About(): JSX.Element {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="glitch-effect text-4xl md:text-6xl font-bold text-center mb-8 text-white">
          <span className="text-blue-500">&lt;</span>
          About Me
          <span className="text-blue-500">/&gt;</span>
        </h1>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-12">
          <div className="typing-effect text-lg md:text-xl text-green-500 font-mono mb-6">
            $ whoami
          </div>
          <div className="font-mono text-base md:text-lg leading-relaxed mb-8 p-4 rounded-lg text-gray-300">
            <h2 className="text-2xl font-bold mb-4">Oluwapelumi Gideon, AINA</h2>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                12 Alli Olusegun Street, Ayobo, Lagos State, Nigeria
              </div>
              <div className="flex items-center">
                <MdEmail className="mr-2" />
                ainaoluwapelumigideon@gmail.com
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                (234)-906-632-4943, (234)-812-924-1613
              </div>
            </div>
            <p className="mb-4">
              I am a creative and solutions-driven Web and Mobile Developer with over five years of professional experience in developing Web Applications and two years of focused experience in Mobile Application development. Skilled in enhancing and optimizing online presence by designing, customizing, and maintaining websites and applications with a strong foundation in both front-end and back-end development.
            </p>
            <p>
              I leverage extensive knowledge in SQL and modern web development tools to deliver secure, efficient, scalable, and user-centered solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="text-blue-500 text-3xl mr-3" />
              <h2 className="text-xl font-bold font-mono text-white">Technical Stack</h2>
            </div>
            <pre className="font-mono text-sm text-gray-300">
{`{
    "languages": ["PHP", "JavaScript", "TypeScript", "Python"],
    "frameworks": ["Laravel", "React", "Next.js", "Vue.js", 
                  "Node.js", "CodeIgniter", "Django"],
    "databases": ["MySQL", "PostgreSQL", "MongoDB", "GraphQL"],
    "tools": ["Git", "Docker", "AWS", "Google Cloud"]
}`}
            </pre>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaBrain className="text-purple-500 text-3xl mr-3" />
              <h2 className="text-xl font-bold font-mono text-white">Experience</h2>
            </div>
            <div className="font-mono text-sm leading-relaxed text-gray-300">
              <div className="mb-4">
                <h3 className="text-green-400">Flyte Technologies, Lagos</h3>
                <p className="text-gray-400">Web Developer (Remote) | May 2023 – Present</p>
              </div>
              <div>
                <h3 className="text-green-400">Federal University Lokoja</h3>
                <p className="text-gray-400">Web Developer | June 2020 – October 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-green-500 text-3xl mr-3" />
              <h2 className="text-xl font-bold font-mono text-white">Education</h2>
            </div>
            <div className="font-mono text-sm leading-relaxed text-gray-300">
              <div className="mb-4">
                <h3 className="text-green-400">Federal University Lokoja</h3>
                <p>B.Sc. Computer Science | August 2024</p>
              </div>
              <div>
                <h3 className="text-green-400">Kogi State Polytechnic</h3>
                <p>National Diploma in Computer Science | August 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaRobot className="text-red-500 text-3xl mr-3" />
              <h2 className="text-xl font-bold font-mono text-white">Notable Projects</h2>
            </div>
            <div className="font-mono text-sm leading-relaxed text-gray-300">
              <ul className="list-disc list-inside">
                <li>Pora Intro & Dating App</li>
                <li>The Ark App</li>
                <li>Campus-Gigs</li>
                <li>Face Verification Tool</li>
                <li>Gas Sales Management System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
