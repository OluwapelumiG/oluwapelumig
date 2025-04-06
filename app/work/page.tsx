'use client'
import { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLaravel, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiCodeigniter, SiDjango, SiVuedotjs } from 'react-icons/si';

export default function Home(): JSX.Element {
  const [selectedStack, setSelectedStack] = useState<string>('all');

  const projects = [
    {
      name: 'Pora Intro',
      url: 'https://poraintro.com',
      description: 'Dating platform landing page and user management system',
      stack: ['react', 'node.js', 'mongodb']
    },
    {
      name: 'The Ark App', 
      url: 'https://thearkapp.com',
      description: 'Mobile application for community engagement',
      stack: ['react', 'node.js', 'mongodb']
    },
    {
      name: 'Campus-Gigs',
      url: 'https://campus-gigs.vercel.app',
      description: 'Platform connecting students with job opportunities',
      stack: ['next.js', 'typescript', 'tailwindcss']
    },
    {
      name: 'SendBills Blog',
      url: 'http://gist.sendbills.com.ng',
      description: 'Content management system and blog platform',
      stack: ['php', 'laravel', 'mysql']
    },
    {
      name: 'SendBills Invoice',
      url: 'http://sendbills.com.ng',
      description: 'Invoice generation and management software',
      stack: ['php', 'laravel', 'mysql']
    },
    {
      name: 'Face Verification Tool',
      url: 'https://faceverify-virid.vercel.app',
      description: 'AI-powered face verification system',
      stack: ['python', 'next.js', 'typescript']
    },
    {
      name: 'Tic-Ma-Toe',
      url: 'https://github.com/OluwapelumiG/tic-ma-toe',
      description: 'Advanced Tic-tac-toe game implementation',
      stack: ['react', 'typescript']
    },
    {
      name: 'Routine App',
      url: 'https://github.com/OluwapelumiG/RoutineApp',
      description: 'Daily routine management application',
      stack: ['react-native', 'node.js']
    },
    {
      name: 'Reminder App',
      url: 'https://github.com/OluwapelumiG/reminder',
      description: 'Task reminder and scheduling application',
      stack: ['react', 'node.js']
    },
    {
      name: 'QR Scanner',
      url: 'https://github.com/OluwapelumiG/qr_scanner_basic',
      description: 'Mobile QR code scanning application',
      stack: ['react-native']
    },
    {
      name: 'Poly Projects',
      url: 'https://github.com/OluwapelumiG/poly-projects',
      description: 'Collection of polytechnic academic projects',
      stack: ['php', 'mysql']
    },
    {
      name: 'Gas-Man',
      url: 'https://github.com/OluwapelumiG/gas-man',
      description: 'Gas sales and management application',
      stack: ['php', 'laravel', 'mysql']
    }
  ];

  const stackFilters = ['all', 'next.js', 'typescript', 'node.js', 'mongodb', 'postgresql', 'python', 'react', 'php', 'laravel', 'mysql', 'react-native'];

  const filteredProjects = selectedStack === 'all' 
    ? projects 
    : projects.filter(project => project.stack.includes(selectedStack));

  const getStackIcon = (stack: string) => {
    const iconProps = { className: "inline-block mr-2 text-xl" };
    switch(stack) {
      case 'react': return <FaReact {...iconProps} className="text-blue-400" />;
      case 'react-native': return <FaReact {...iconProps} className="text-purple-400" />;
      case 'next.js': return <SiNextdotjs {...iconProps} className="text-white" />;
      case 'typescript': return <SiTypescript {...iconProps} className="text-blue-600" />;
      case 'node.js': return <FaNodeJs {...iconProps} className="text-green-600" />;
      case 'mongodb': return <SiMongodb {...iconProps} className="text-green-500" />;
      case 'postgresql': return <SiPostgresql {...iconProps} className="text-blue-500" />;
      case 'mysql': return <FaDatabase {...iconProps} className="text-orange-500" />;
      case 'tailwindcss': return <SiTailwindcss {...iconProps} className="text-cyan-400" />;
      case 'php': return <FaPhp {...iconProps} className="text-purple-500" />;
      case 'laravel': return <FaLaravel {...iconProps} className="text-red-500" />;
      case 'python': return <FaPython {...iconProps} className="text-yellow-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400">
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <h1 className="glitch-effect text-4xl md:text-6xl font-mono font-bold mb-6">
          <span className="text-blue-500">&lt;</span>
          projects/
          <span className="text-blue-500">/&gt;</span>
        </h1>
        
        <div className="typing-effect font-mono text-lg mb-8">
          $ ls -la | grep "stack"
        </div>

        <div className="mb-8 font-mono">
          <div className="text-yellow-400 mb-4"># Filter by stack:</div>
          <div className="flex flex-wrap gap-2">
            {stackFilters.map(stack => (
              <button
                key={stack}
                onClick={() => setSelectedStack(stack)}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedStack === stack 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-white/5 text-green-300 hover:bg-green-500/10'
                }`}
              >
                {stack}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="font-mono">
                <div className="text-yellow-400 mb-2">
                  # {project.name}
                </div>
                <div className="text-gray-400 text-sm mb-4">
                  $ curl {project.url}
                </div>
                <div className="text-green-300 mb-4">
                  {project.description}
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <span className="text-purple-400">stack</span>: [
                  {project.stack.map((tech, i) => (
                    <span key={i} className="ml-2">
                      {getStackIcon(tech)}
                      {tech}
                      {i < project.stack.length - 1 ? ',' : ''}
                    </span>
                  ))}
                  ]
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}