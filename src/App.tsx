import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Globe, Award, BookOpen, Briefcase, Code, GraduationCap, Menu, X, BookText } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-stone-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection('top')} 
              className="text-stone-100 text-lg font-light hover:text-stone-300 transition-colors"
            >
              YHC
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('education')} className="text-stone-100 hover:text-stone-300 transition-colors">Education</button>
              <button onClick={() => scrollToSection('experience')} className="text-stone-100 hover:text-stone-300 transition-colors">Work Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-stone-100 hover:text-stone-300 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-stone-100 hover:text-stone-300 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('awards')} className="text-stone-100 hover:text-stone-300 transition-colors">Awards</button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-stone-100 hover:text-stone-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-900/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('education')} 
                className="block w-full text-left text-stone-100 hover:text-stone-300 transition-colors"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="block w-full text-left text-stone-100 hover:text-stone-300 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="block w-full text-left text-stone-100 hover:text-stone-300 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="block w-full text-left text-stone-100 hover:text-stone-300 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('awards')} 
                className="block w-full text-left text-stone-100 hover:text-stone-300 transition-colors"
              >
                Awards
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="top" className="bg-gradient-to-r from-stone-800 to-stone-900 text-stone-100 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">Yun-Han Chiang</h1>
            <p className="text-lg mb-10 text-stone-300">M.S. student at NYCU</p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:a0976165649@gmail.com" className="hover:text-stone-400 transition-colors flex items-center gap-2">
                <Mail size={18} /> Email
              </a>
              <a href="https://www.linkedin.com/in/yun-han-jiang/" className="hover:text-stone-400 transition-colors flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/BettyJ1020" className="hover:text-stone-400 transition-colors flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
              <a href="tel:0976165649" className="hover:text-stone-400 transition-colors flex items-center gap-2">
                <Phone size={18} /> Phone
              </a>
              <a href="https://medium.com/me/stories/public" className="hover:text-stone-400 transition-colors flex items-center gap-2">
                <BookText size={18} /> Medium
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Education */}
          <section id="education">
            <h2 className="text-xl font-normal mb-8 flex items-center gap-2 text-stone-800">
              <GraduationCap className="text-amber-700" strokeWidth={1.5} />
              Education
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-stone-200 pl-6 py-1">
                <h3 className="text-lg font-medium text-stone-900">National Yang Ming Chiao Tung University (NYCU)</h3>
                <ul className="mt-3 space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>MS in Information Management | Sep 2023 – Jun 2025 (Expected)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>GPA: 4.14/4.3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Key Courses: Data Mining, Data Visualization, Operating System, Deep Learning, Generative AI</span>
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-stone-200 pl-6 py-1">
                <h3 className="text-lg font-medium text-stone-900">National Cheng Kung University (NCKU)</h3>
                <ul className="mt-3 space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>BS in Industrial and Information Management | Sep 2018 – May 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>GPA: 4.08/4.3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Awards: Academic Excellence Awards (2020, 2021)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section id="experience">
            <h2 className="text-xl font-normal mb-8 flex items-center gap-2 text-stone-800">
              <Briefcase className="text-amber-700" strokeWidth={1.5} />
              Work Experience
            </h2>
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="timeline-container relative space-y-12">
                <div className="timeline-line pl-8">
                  <div className="timeline-dot absolute left-0 top-8 w-3 h-3">
                    <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-20 text-right text-sm text-amber-700 font-medium">
                      2024
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                    <h3 className="text-lg font-medium text-stone-900">Data Analytics Intern | TSMC</h3>
                    <p className="text-stone-600 mt-1">Jul 2024 – Aug 2024 | Hsinchu, TW</p>
                    <ul className="mt-3 space-y-2 text-stone-600">
                      <li className="flex items-start gap-2">
                        <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                        <span>Extracted key customer demand patterns using feature engineering and statistical analysis with Python, enabling data-driven business insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                        <span>Developed and optimized a RandomForestClassifier model for demand classification, improving prediction efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                        <span>Boosted model accuracy to ~80%, achieving a 20% improvement over the baseline and enhancing decision-making reliability</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-line pl-8">
                  <div className="timeline-dot absolute left-0 top-8 w-3 h-3">
                    <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-20 text-right text-sm text-amber-700 font-medium">
                      2023
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                    <h3 className="text-lg font-medium text-stone-900">Software Engineer Intern | Syntec</h3>
                    <p className="text-stone-600 mt-1">Aug 2023 – Jun 2024 | Hsinchu, TW</p>
                    <ul className="mt-3 space-y-2 text-stone-600">
                      <li className="flex items-start gap-2">
                        <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                        <span>Optimized an internal enterprise system using C# and ASP.NET Core Web API by implementing new features and resolving issues based on user requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                        <span>Maintained the BPM system with HTML and JavaScript, facilitating smoother workflow approvals and improving cross-departmental collaboration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                        <span>Automated API testing with Cypress and Postman, reducing manual testing efforts and improving system stability for internal users</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Experience List */}
            <div className="md:hidden space-y-8">
              <div className="border-l-2 border-stone-200 pl-6 py-1">
                <h3 className="text-lg font-medium text-stone-900">CPO PPD Intern | TSMC</h3>
                <p className="text-stone-600 mt-1">Jul 2024 – Aug 2024 | Hsinchu, TW</p>
                <ul className="mt-3 space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Extracted key customer demand patterns using feature engineering and statistical analysis (Python)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Developed and optimized Random Forest Classifier for demand classification, boosting accuracy to ~80%</span>
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-stone-200 pl-6 py-1">
                <h3 className="text-lg font-medium text-stone-900">Software Engineer Intern | Syntec</h3>
                <p className="text-stone-600 mt-1">Aug 2023 – Jun 2024 | Hsinchu, TW</p>
                <ul className="mt-3 space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Developed internal enterprise system using C# and ASP.NET Core Web API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Maintained BPM system with HTML/JavaScript to streamline workflow approvals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Automated API testing with Cypress and Postman</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects">
            <h2 className="text-xl font-normal mb-8 flex items-center gap-2 text-stone-800">
              <Code className="text-amber-700" strokeWidth={1.5} />
              Projects
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-stone-200 pl-6 py-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-stone-900">Full-Stack Web App: Workout Tracker</h3>
                  <a href="https://main.dq0gogdiqu6x5.amplifyapp.com/" className="text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-2">
                    <Globe size={18} /> Live Demo
                  </a>
                </div>
                <p className="text-stone-600 mt-1">Feb 2025 – Present</p>
                <div className="mt-4 relative">
                  <div className="overflow-x-auto pb-4 hide-scrollbar">
                    <div className="flex gap-4" style={{ width: 'max-content' }}>
                    <div className="w-[750px] overflow-hidden rounded-lg shadow-md aspect-video flex-shrink-0">
                      <img 
                        src="/images/demo_2.gif" 
                        alt="Workout Progress" 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    </div>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Tech Stack: React + Vite, FastAPI, SQLite, SQLAlchemy, AWS Amplify, Render</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Features: User authentication, isolated data management, secure workout routine editing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Deployed frontend to AWS Amplify and backend to Render, resolving integration issues and applying CI/CD workflows</span>
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-stone-200 pl-6 py-1">
                <h3 className="text-lg font-medium text-stone-900">NLP and Rule-Based Keyword Extraction</h3>
                <p className="text-stone-600 mt-1">Jul 2022 – Dec 2022</p>
                <ul className="mt-3 space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Techniques: pandas, frequency analysis, POS tagging, NLP tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Achievement: Increased recall from 65% to 91% in keyword extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                    <span>Implemented custom rule-based algorithms for domain-specific keyword extraction</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills">
            <h2 className="text-xl font-normal mb-8 flex items-center gap-2 text-stone-800">
              <BookOpen className="text-amber-700" strokeWidth={1.5} />
              Skills
            </h2>
            <div className="border-l-2 border-stone-200 pl-6 py-1">
              <div className="space-y-4">
                <div>
                  <h3 className="text-stone-900">Front/Back end</h3>
                  <p className="text-stone-600 mt-1">React, FastAPI, C#, SQL, HTML, CSS, JavaScript, JQuery, d3.js, Figma</p>
                </div>
                <div>
                  <h3 className="text-stone-900">DevOps Tools</h3>
                  <p className="text-stone-600 mt-1">Git, Linux, VSCode, Jupyter Notebook, AWS (Amplify, RDS, Lambda), Docker, Kubernetes</p>
                </div>
                <div>
                  <h3 className="text-stone-900">Programming Languages</h3>
                  <p className="text-stone-600 mt-1">Python, C++, Shell Script</p>
                </div>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section id="awards">
            <h2 className="text-xl font-normal mb-8 flex items-center gap-2 text-stone-800">
              <Award className="text-amber-700" strokeWidth={1.5} />
              Awards & Certifications
            </h2>
            <div className="border-l-2 border-stone-200 pl-6 py-1">
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                  <span>TOEIC Score: 910</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                  <span>2023 College Student Research Creativity Award & Outstanding Undergraduate Graduation Project in NCKU IIM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                  <span>2022 3rd Place, National Digital Humanities Big Data Competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 mt-2 rounded-full bg-stone-400"></span>
                  <span>2021 Honorable Mention, NCKU Literature Award</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-stone-100 text-stone-600 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Yun-Han Chiang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;