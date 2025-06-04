import profile from "../assets/profile.jpg";
import resume from "../assets/MansiVerma_FrontendDeveloper.pdf";

const language = [
  "ReactJs",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "TypeScript",
  "Git",
  "GitHub",
];

const project = [
  {
    name: "ConnectDash 🔍",
    description:
      "Because who doesn't want to stalk engagement metrics in style? Graphs, charts & PDF reports for your inner data nerd.",
    lang: "TypeScript",
    link: "https://github.com/Mansiverma30/ConnectDash",
    demo: "https://connect-dash-55y8.vercel.app/",
  },
  {
    name: "RoomVista 🛋️",
    description:
      "Paint walls, toss textures & feel like you're hosting your own interior design show. Pure 2D, pure joy.",
    lang: "JavaScript",
    link: "https://github.com/Mansiverma30/RoomVista",
    demo: "https://roomvista.netlify.app/",
  },
  {
    name: "CodeNest 🐣",
    description:
      "Coming soon: CodeNest — a playful learning hub with flashcards, topic decks, a code playground, and progress tracking. Designed to make coding feel like a game, not a grind.",
    lang: "JavaScript",
    type: "In Progress 🚧",
  },

  {
    name: "Password Generator 🔐",
    description:
      "Generates strong passwords faster than you can say '1234' (don't use that).",
    lang: "JavaScript",
    link: "https://github.com/Mansiverma30/password-generator",
    type: "Mini Projects 🛠️",
    demo: "https://password-generator-bymansi.netlify.app/",
  },
  {
    name: "Currency Converter 💱",
    description:
      "Exchange rates without the exchange of your patience. Real-time, smooth, and super simple.",
    lang: "JavaScript",
    link: "https://github.com/Mansiverma30/currency-converter",
    type: "Mini Projects 🛠️",
    demo: "https://currencyconverter-bymansi.netlify.app/",
  },
  {
    name: "ToDo App 📋",
    description:
      "For when your brain has 72 tabs open — organize tasks, strike 'em off, and feel like a boss.",
    lang: "JavaScript",
    link: "https://github.com/Mansiverma30/todo-app",
    type: "Mini Projects 🛠️",
    demo: "https://creative-baklava-50e4cc.netlify.app/",
  },
  {
    name: "Client Portfolio 🌐",
    description:
      "Designed and developed a fully responsive portfolio site for a freelance client. Delivered pixel-perfect layouts with smooth interactions.",
    lang: "JavaScript",
    type: "Freelance Work 💼",
    demo: "https://uniqueegraphy.in/",
  },
];

export default function Content() {
  return (
    <div className="bg-[#FFF8F0] text-gray-800 p-6 min-h-screen font-sans flex flex-col">
      <main className="flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            {/* Profile */}
            <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-center text-center border border-pink-100">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-300">
                <img
                  src={profile}
                  alt="Mansi"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold mt-4">Mansi Verma</h2>
              <p className="italic text-pink-600 font-medium mt-1">
                Frontend Wizard 🧙‍♀️ (JS + Tailwind spells only)
              </p>
              <a
                href={resume}
                download
                className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition-all"
              >
                Steal My Resume ✨
              </a>
            </div>

            {/* About Me */}
            <div className="bg-white rounded-3xl shadow-md p-6 border border-green-100">
              <h3 className="text-xl font-bold mb-2">About Me 💻</h3>
              <p className="text-sm text-gray-600">
                I'm Mansi Verma, a frontend developer passionate about building
                clean, interactive user interfaces with React, TypeScript, and
                Tailwind CSS. I love turning ideas into experiences that feel
                smooth and purposeful. I’m a straight-talker (don’t worry, I’m
                not rude — just real 😄) and a fast learner, always chasing
                growth. When I’m not coding, I’m either watching cricket or
                catching up on some much-loved sleep 😴.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-3xl shadow-md p-6 border border-yellow-100">
              <h3 className="text-xl font-bold mb-2">Tech Stack 🚀</h3>
              <p className="text-sm text-gray-600 mb-4 italic">
                Tools I use to make browsers cry (tears of joy).
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {language.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-3xl shadow-md p-6 border border-green-100">
              <h3 className="text-xl font-bold mb-2">Certified? You bet 📜</h3>
              <p className="text-sm text-gray-600">
                I've got certificates to prove I didn’t just copy-paste from
                Stack Overflow. Real courses, real bugs, real caffeine.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="bg-white rounded-3xl shadow-md p-6 border border-blue-100">
              <h3 className="text-xl font-bold mb-3">Fun Facts 🙈</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  Still refuses to wake up early, even for a bug-free build
                </li>
                <li>Talks to AI more than humans (hi 👋)</li>
                <li>Once wrote a component called 'Thingy'... it worked</li>
              </ul>
            </div>
          </div>

          {/* Right Panel (Projects) */}
          <div className="lg:col-span-2 h-auto">
            <div className="bg-white rounded-3xl shadow-md p-6 border border-orange-100">
              <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
                Projects Showcase ✨
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.map((proj, i) => (
                  <div
                    key={i}
                    className="bg-[#FFF5E5] hover:shadow-lg transition-all rounded-2xl p-5 border border-orange-300"
                  >
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">
                      {proj.name}
                    </h3>
                    <p className="text-sm text-gray-700">{proj.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm bg-orange-200 text-orange-900 px-2 py-1 rounded-full">
                        {proj.lang}
                      </span>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-orange-700 hover:underline"
                        >
                          View on GitHub ↗
                        </a>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm bg-orange-200 text-orange-900 px-2 py-1 rounded-full">
                        {proj.type ? proj.type : "Featured Project 🌟"}
                      </span>
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-orange-700 hover:underline"
                        >
                          Try it Live 🚀
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-700 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mansi Verma. Built with 🧠, ☕, and
            Tailwind.
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Mansiverma30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:vermamansi3003@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/mansi-verma-213288278"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
