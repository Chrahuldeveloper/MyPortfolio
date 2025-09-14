const TerminalInput = document.getElementById("TerminalInput");
const helpCommand = document.getElementById("helpCommand");
const aboutCommand = document.getElementById("aboutCommand");
const terminalBox = document.getElementById("terminalBox");

TerminalInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    terminalBox.classList.remove("hidden");
    const command = TerminalInput.value.trim();

    switch (command) {
      case "help":
        terminalBox.innerHTML += `
          <div class="bg-black text-gray-200 font-mono p-4">
            <h1 class="text-green-400 font-semibold">$ help</h1>
            <p class="mt-2">Available commands:</p>
            <pre class="mt-2 text-sm sm:text-base">
help           - Show this help message
about          - Learn more about me
skills         - View my technical skills
projects       - Browse my projects
resume         - Download my resume
social (name)  - Open social profile (github/linkedin/twitter)
contact        - Get my contact information
clear          - Clear terminal output
            </pre>
            <p class="mt-4">Special commands:</p>
            <pre class="mt-2 text-sm sm:text-base">
sudo hire-me - ????
            </pre>
          </div>
        `;
        break;

      case "about":
        terminalBox.innerHTML += `
          <div class="bg-black text-gray-200 font-mono p-4 space-y-3.5">
            <h1 class="text-green-400 font-semibold">$ about</h1>
            <h2 class="text-white font-bold">About Rahul</h2>
            <p>==================</p>
            <p>
              I'm a passionate developer with 5+ years of experience building web applications
              that users love. I specialize in React, LinkScript, and modern web technologies,
              with a keen eye for design and user experience.<br><br>
              When I'm not coding, you'll find me contributing to open source projects,
              writing technical blog posts, or exploring the latest in web development.<br><br>
              <strong>Current focus:</strong> Building scalable applications with React, Next.js, and Node.js<br>
              <strong>Location:</strong> Hyderabad, IN<br>
              <strong>Experience:</strong> 5+ years in full-stack development
            </p>
          </div>
        `;
        break;

      case "skills":
        terminalBox.innerHTML += `
  <div class="bg-black text-green-400 font-mono p-4">
    <h1 class="text-green-400 font-semibold">$ skills</h1>
    <h2 class="mt-2 text-lg">Technical Skills</h2>
    <p class="text-green-500">________________________</p>

    <!-- Programming -->
    <p class="mt-4 font-bold">Programming:</p>
    <div class="mt-2 space-y-1">
      <div class="flex items-center justify-between">
        <span>Java</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:80%"></div>
        </div>
        <span>80%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>JavaScript/TypeScript</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:90%"></div>
        </div>
        <span>90%</span>
      </div>
    </div>

    <!-- Web Development -->
    <p class="mt-4 font-bold">Web Development:</p>
    <div class="mt-2 space-y-1">
      <div class="flex items-center justify-between">
        <span>React/Next.js</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:95%"></div>
        </div>
        <span>95%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Node.js/Express</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:85%"></div>
        </div>
        <span>85%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Databases (MongoDB, MySQL, PostgreSQL)</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:82%"></div>
        </div>
        <span>82%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>GraphQL/Redux</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:75%"></div>
        </div>
        <span>75%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Cloud (GCP, AWS, Azure)</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:70%"></div>
        </div>
        <span>70%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Docker</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:80%"></div>
        </div>
        <span>80%</span>
      </div>
    </div>

    <!-- App Development -->
    <p class="mt-4 font-bold">App Development:</p>
    <div class="mt-2 space-y-1">
      <div class="flex items-center justify-between">
        <span>React Native</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:85%"></div>
        </div>
        <span>85%</span>
      </div>
    </div>

    <!-- Miscellaneous -->
    <p class="mt-4 font-bold">Miscellaneous:</p>
    <div class="mt-2 space-y-1">
      <div class="flex items-center justify-between">
        <span>DSA</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:75%"></div>
        </div>
        <span>75%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Git/GitHub</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:95%"></div>
        </div>
        <span>95%</span>
      </div>
      <div class="flex items-center justify-between">
        <span>OOPs Concepts</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:85%"></div>
        </div>
        <span>85%</span>
      </div>
    </div>
  </div>
  `;
        break;

      case "projects":
        terminalBox.innerHTML += `
      <div class="bg-black text-slate-200 font-mono p-4">
        <h1 class="text-green-500 font-semibold">$ projects</h1>
        <h2 class="mt-2 text-lg">Featured Projects</h2>
        <p class="text-slate-200">==================</p>

        <!-- Project 1 -->
        <div class="mt-4">
          <p>[1] <span class="font-bold">TaskFlow – Project Management App</span></p>
          <p class="pl-6">A full-stack task management application built with React and Node.js</p>
          <p class="pl-6">Features real-time collaboration and advanced analytics</p>
          <p class="pl-6">→ Link</p>
        </div>

        <!-- Project 2 -->
        <div class="mt-4">
          <p>[2] <span class="font-bold">WeatherWise – Weather Dashboard</span></p>
          <p class="pl-6">Beautiful weather app with location-based forecasts and alerts</p>
          <p class="pl-6">Built with React, LinkScript, and OpenWeather API</p>
          <p class="pl-6">→ Link</p>
        </div>

        <!-- Project 3 -->
        <div class="mt-4">
          <p>[3] <span class="font-bold">DevPortfolio – Portfolio Template</span></p>
          <p class="pl-6">Customizable developer portfolio template with dark/light themes</p>
          <p class="pl-6">Features MDX blog, project showcase, and contact forms</p>
          <p class="pl-6">→ Link</p>
        </div>

        <!-- Project 4 -->
        <div class="mt-4">
          <p>[4] <span class="font-bold">ChatBot AI – Customer Support Bot</span></p>
          <p class="pl-6">AI-powered chatbot for customer service automation</p>
          <p class="pl-6">Built with Python, TensorFlow, and React frontend</p>
          <p class="pl-6">→ Link</p>
        </div>

      </div>
    `;
        break;

      case `socials`:
        terminalBox.innerHTML += `
       <div class="bg-black text-slate-200 font-mono p-4">
        <h1 class="text-green-500 font-semibold">$ Socials</h1>
        <h2 class="mt-2 text-lg">Follow me on Socials</h2>
        <p class="text-slate-200">==================</p>
        </div>

        <div class="mt-4">
          <p>[1] <span class="font-bold">Github</span></p>
          <p class="pl-6 text-slate-500 font-semibold">→ Link</p>
        </div>

        <div class="mt-4">
          <p>[2] <span class="font-bold">X</span></p>
          <p class="pl-6 text-slate-500 font-semibold">→ Link</p>
         </div>


        <div class="mt-4">
          <p>[3] <span class="font-bold">Linkdin</span></p>
          <p class="pl-6 text-slate-500 font-semibold">→ Link</p>
         </div>

          `;
        break;

      case "resume":
        terminalBox.innerHTML += `
        <div class="bg-black  font-mono p-4">
        <h1 class="text-green-500 font-semibold">$ resume</h1>
        <h2 class="mt-2 text-green-500 text-lg font-semibold">Opening resume</h2>
        <p class="text-slate-200">==================</p>
        </div>
                  `;
        window.open(
          "https://drive.google.com/file/d/1zscHjuRE7eqTQASA3RwbkpL-wB25CLup/view?usp=sharing&usp=embed_facebook",
          "_blank"
        );
        break;

      case "clear":
        terminalBox.innerHTML = "";
        break;

      default:
        terminalBox.innerHTML += `
          <div>
            <span class="text-red-500">Command not found: ${command}. Link "help" for available commands.</span>
          </div>
        `;
        break;
    }

    terminalBox.scrollTop = terminalBox.scrollHeight;

    TerminalInput.value = "";
  }
});
