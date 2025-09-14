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
      <pre id="helpTyped" class="mt-2 text-xs sm:text-base"></pre>
      <p class="mt-4">Special commands:</p>
      <pre id="specialTyped" class="mt-2 text-sm sm:text-base"></pre>
    </div>
  `;

new Typed("#helpTyped", {
  strings: [
`help           - Show this help message
about          - Learn more about me
skills         - View my technical skills
projects       - Browse my projects
resume         - Download my resume
socials        - Open social profile 
clear          - Clear terminal output`
  ],
  typeSpeed: 15,
  showCursor: false,
  onComplete: function () {
    new Typed("#specialTyped", {
      strings: ["sudo hire-me - ????"],
      typeSpeed: 15,
      showCursor: false,
    });
  }
});

  break;


      case "about":
        terminalBox.innerHTML += `
          <div class="bg-black text-gray-200 font-mono p-4 space-y-3.5">
            <h1 class="text-green-400 font-semibold">$ about</h1>
            <h2 class="text-white font-bold">About Rahul</h2>
            <p>==================</p>
            <p>
              I'm a passionate coder with 5+ years of experience building web applications and SaaS products that users love
              When I'm not coding, you'll find me contributing to open source projects, writing technical blogs, or exploring the latest in Tech             
              <strong>Location:</strong> Hyderabad, IN<br>
              <strong>Experience:</strong> 4+ years in full-stack development
            </p>
          </div>
        `;
        break;

      case "skills":
        terminalBox.innerHTML += `
  <div class="bg-black text-green-400 font-mono p-4 my-5">
    <h1 class="text-green-400 font-semibold">$ skills</h1>
    <h2 class="mt-2 text-lg">Technical Skills</h2>
    <p class="text-green-500">________________________</p>

    <!-- Programming -->
    <p class="mt-4 font-bold">Programming:</p>
    <div class="mt-2 space-y-1">
      <div class="flex items-center justify-between">
        <span class="text-sm">Java</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:80%"></div>
        </div>
        <span>80%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">JavaScript/TypeScript</span>
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
        <span class="text-sm">React/Next.js</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:95%"></div>
        </div>
        <span>95%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">Node.js/Express</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:85%"></div>
        </div>
        <span>85%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">Databases (MongoDB, MySQL, PostgreSQL)</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:82%"></div>
        </div>
        <span>82%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">GraphQL/Redux</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:75%"></div>
        </div>
        <span>75%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">Cloud (GCP, AWS, Azure)</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:70%"></div>
        </div>
        <span>70%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">Docker</span>
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
        <span class="text-sm">React Native</span>
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
        <span class="text-sm">DSA</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:75%"></div>
        </div>
        <span>75%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">Git/GitHub</span>
        <div class="flex-1 mx-2 bg-green-900 h-4">
          <div class="bg-green-400 h-4" style="width:95%"></div>
        </div>
        <span>95%</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm">OOPs Concepts</span>
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
          <p>[1] <span class="font-bold">FeedSenseAI</span></p>
          <p class="pl-6 text-sm">An AI-powered feedback management platform that converts user feedback into actionable insights. Businesses can integrate a customizable feedback form on their websites, and FeedSenseAI analyzes the data to suggest improvements, helping teams make data-driven decisions without guesswork</p>
          <p class="pl-6">→ <a href="https://feedsenseai.vercel.app/" target="_blank" class="text-blue-500 hover:underline">Link</a></p>
        </div>

        <!-- Project 2 -->
        <div class="mt-4">
          <p>[2] <span class="font-bold">Matrix</span></p>
          <p class="pl-6 text-sm">Matrix is a networking app for tech enthusiasts across various domains. With 65 active users, it helps you discover and connect with like-minded people, chat with them, and share updates about your projects. Whether you’re looking to collaborate, learn, or showcase your work, Matrix makes networking simple and meaningful.</p>
          <p class="pl-6">→ <a href="https://matrixappcom.netlify.app/" target="_blank" class="text-blue-500 hover:underline">Link</a></p>
        </div>

        <!-- Project 3 -->
        <div class="mt-4">
          <p>[3] <span class="font-bold">InterviewPrepAI</span></p>
          <p class="pl-6 text-sm">An AI-driven interview preparation platform that generates tailored interview questions based on a candidate’s profile or job description. It helps users practice effectively, identify knowledge gaps, and boost confidence for real interviews.</p>
          <p class="pl-6">→ <a href="https://chromewebstore.google.com/detail/interviewprepai/jfpbdijbapmdgnimkpdhmolmefjhbccp" target="_blank" class="text-blue-500 hover:underline">Link</a></p>
        </div>

        <!-- Project 4 -->
        <div class="mt-4">
          <p>[4] <span class="font-bold">TapNFill</span></p>
          <p class="pl-6 text-sm">A seamless productivity tool that simplifies repetitive workflows. Users can automate filling forms and repetitive tasks, saving time and reducing errors, making everyday digital interactions faster and smarter.</p>
          <p class="pl-6">→ <a href="https://chromewebstore.google.com/detail/tapnfill/mgenpnofgolhidfgggfhicbigpjmnokn" target="_blank" class="text-blue-500 hover:underline">Link</a></p>
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
          <p class="pl-6">→ <a href="https://github.com/Chrahuldeveloper" target="_blank" class="text-blue-500 hover:underline">Link</a></p>
        </div>

        <div class="mt-4">
          <p>[2] <span class="font-bold">X</span></p>
          <p class="pl-6">→ <a href="https://x.com/ChRahul_dev" target="_blank" class="text-blue-500 hover:underline">Link</a></p>
         </div>

        <div class="mb-20">
          <p>[3] <span class="font-bold">Linkdin</span></p>
          <p class="pl-6">→ <a href="https://www.linkedin.com/in/chrahuldev/" target="_blank" class="text-blue-500 hover:underline">Link</a></p>
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
