export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-black text-green-400">
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-12">
          <h1 className="glitch-effect text-4xl md:text-6xl font-mono font-bold mb-6">
            <span className="text-blue-500">&lt;</span>
            blog.md
            <span className="text-blue-500">/&gt;</span>
          </h1>
          <div className="typing-effect font-mono text-lg mb-8">
            $ cat blog.md
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="font-mono">
              <div className="text-yellow-400 mb-2"># Building a Modern Web Portfolio with Next.js and TailwindCSS</div>
              <div className="text-gray-400 text-sm mb-4">
                Date: 2024-03-15<br/>
                Reading time: 10 min
              </div>
              <div className="text-green-300 mb-4">
                A comprehensive guide on creating a developer portfolio using Next.js 13+ and TailwindCSS.
                Learn how to implement modern design patterns, animations, and responsive layouts.
              </div>
              <pre className="bg-black/30 p-3 rounded text-xs">
{`// Example Next.js Page Component
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b 
      from-gray-900 to-black">
      <Header />
      <ProjectGrid />
      <Contact />
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="font-mono">
              <div className="text-yellow-400 mb-2"># Implementing Face Verification with Python and OpenCV</div>
              <div className="text-gray-400 text-sm mb-4">
                Date: 2024-03-10<br/>
                Reading time: 15 min
              </div>
              <div className="text-green-300 mb-4">
                Deep dive into building a face verification system using Python and OpenCV.
                From face detection to feature extraction and matching algorithms.
              </div>
              <pre className="bg-black/30 p-3 rounded text-xs">
{`import cv2
import numpy as np

def verify_face(image1, image2):
    # Load face detection model
    face_cascade = cv2.CascadeClassifier(
        'haarcascade_frontalface_default.xml'
    )
    # Compare faces
    return similarity_score`}
              </pre>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="typing-effect font-mono text-xl">
              $ echo "More posts coming soon..."
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}