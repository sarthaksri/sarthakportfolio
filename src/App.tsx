import { useState, useEffect } from 'react'
import { Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-100 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isLoaded ? 1 : 0})`
        }}
      />

      {/* Hero Section - Diagonal Split */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Diagonal background split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div 
            className="absolute inset-0 bg-white"
            style={{
              clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0% 100%)'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full px-8">
            {/* Left side - Black text on white */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-2/5">
              <div className="text-black">
                <h1 className="text-8xl font-black leading-none mb-4 transform -rotate-2">
                  SARTHAK
                </h1>
                <div className="text-2xl font-bold mb-8 transform rotate-1">
                  SOFTWARE DEVELOPMENT ENGINEER
                </div>
                <div className="w-32 h-1 bg-black mb-8"></div>
                <p className="text-lg font-medium leading-tight">
                  MAKING<br/>
                  LIFE EASIER<br/>
                  WITH TECHNOLOGY
                </p>
              </div>
            </div>

            {/* Right side - White text on black */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-2/5 text-right">
              <div className="text-white">
                <h1 className="text-8xl font-black leading-none mb-4 transform rotate-2">
                  SRIVASTAVA
                </h1>
                <div className="text-2xl font-bold mb-8 transform -rotate-1">
                  FULL-STACK DEVELOPER
                </div>
                <div className="w-32 h-1 bg-white mb-8 ml-auto"></div>
                <p className="text-lg font-medium leading-tight">
                  CLEAN CODE<br/>
                  CAFFEINE LOAD<br/>
                  VICTORY BESTOWED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="w-px h-16 bg-white mx-auto mb-4 animate-pulse"></div>
          <div className="text-xs font-bold tracking-widest mix-blend-difference">SCROLL</div>
        </div>
      </section>

      {/* Experience Section - Brutalist Cards */}
      <section className="py-32 px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-20 transform -rotate-1">
            EXPERIENCE_
          </h2>
          
          <div className="space-y-16">
            {[
              {
                year: "Jan 2026 - Present",
                title: "PUBLIC TECHNOLOGIST",
                company: "MINISTRY OF STATISTICS AND PROGRAM IMPLEMENTATION",
                description: "BUILD FOR BHARAT FELLOWSHIP 2026 (BHARAT DIGITAL) | DEVELOPER",
                tech: "REACT / NODE / LLM",
                link: "https://www.bharatdigital.io/fellowship"
              },
              {
                year: "JUN 2025 - AUG 2025",
                title: "SUMMER INTERN", 
                company: "OPTUM GLOBAL SOLUTIONS (UNITEDHEALTH GROUP)",
                description: "TECHNICAL DEVELOPMENT PROGRAM INTERN",
                tech: "FASTAPI / APACHE AIRFLOW / SPRINGBOOT / ORACLE SQL / LLM",
                link: "https://drive.google.com/file/d/1cM15nzywTWQ-9saDmh9EhcgxadGR26rG/view"
              },
              {
                year: "FEB 2024 - JUL 2024",
                title: "BACKEND ENGINEER",
                company: "SMARTSAVAARI PVT LTD",
                description: "STARTUP ON REDEFINING MOBILITY",
                tech: "NODE / EXPRESS / MONGOOSE",
                link: "https://drive.google.com/file/d/1w5jVo_IJasFAqnuif4-wUzjrFhdrzABy/view"
              }
            ].map((job, index) => (
              <div key={index} className="group">
                <div 
                  className="border-4 border-black p-8 transform hover:rotate-1 transition-transform duration-300 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                  onClick={() => window.open(job.link, '_blank')}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-8xl font-black opacity-20 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black mb-2">{job.year}</div>
                      <div className="w-16 h-1 bg-black ml-auto"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-black mb-2 group-hover:italic transition-all">
                    {job.title}
                  </h3>
                  <div className="text-xl font-bold mb-4 opacity-70">
                    {job.company}
                  </div>
                  <p className="text-lg font-medium mb-6 leading-tight">
                    {job.description}
                  </p>
                  <div className="text-sm font-black tracking-widest opacity-50">
                    {job.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Grid Chaos */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-right transform rotate-1">
            _PROJECTS
          </h2>
          
          <div className="grid grid-cols-12 gap-4 h-screen">
            {/* Project 1 - Large */}
            <div 
              className="col-span-7 row-span-2 bg-white text-black p-8 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer"
              onClick={() => window.open('https://github.com/sarthaksri/Blind-coding-frontend', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">01</div>
                <h3 className="text-4xl font-black mb-4 leading-tight">
                  BLIND CODDING<br/>PLATFORM
                </h3>
                <p className="text-lg font-medium mb-6">
                  FULL-STACK PLATFORM FOR A LIVE BLIND CODING PROGRAMMING PLATFORM
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xs font-black tracking-widest opacity-70">
                  REACT / NODE / EXPRESS / MONGOOSE / DOCKER / NGROK
                </div>
                <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </div>
            </div>

            {/* Project 2 - Medium */}
            <div 
              className="col-span-5 bg-white text-black p-6 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer"
              onClick={() => window.open('https://expenses.sarthaksri.xyz/', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">02</div>
                <h3 className="text-2xl font-black mb-4">
                  EXPENSE TRACKER
                </h3>
                <p className="text-sm font-medium">
                  TRACK YOUR DAILY EXPENSES
                </p>
              </div>
              <div className="text-xs font-black tracking-widest opacity-70 mt-4">
                REACT / EXPRESS / MONGOOSE
              </div>
            </div>

            {/* Project 3 - Small */}
            <div 
              className="col-span-3 bg-white text-black p-6 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer"
              onClick={() => window.open('https://github.com/sarthaksri/prelim-event.git', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">03</div>
                <h3 className="text-xl font-black mb-4">
                  QUIZZING PLATFORM BACKEND
                </h3>
              </div>
              <div className="text-xs font-black tracking-widest opacity-70">
                NODE / EXPRESS / MONGOOSE
              </div>
            </div>

            {/* Project 4 - Wide */}
            <div 
              className="col-span-9 bg-white text-black p-6 flex items-center justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer"
              onClick={() => window.open('https://github.com/sarthaksri/ai-chatbot-framework', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-2 opacity-50">04</div>
                <h3 className="text-3xl font-black">AI CHATBOT FRAMEWORK</h3>
              </div>
              <div className="text-right">
                <div className="text-xs font-black tracking-widest opacity-70 mb-2">
                  PYTHON / FASTAPI
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Typography Chaos */}
      <section className="py-32 px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16 transform -rotate-2">
            SKILLS_
          </h2>
          
          <div className="grid grid-cols-3 gap-12">
            {/* Column 1 */}
            <div>
              <div className="space-y-8">
                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">FRONTEND</div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    REACT • VITE • HTML<br/>
                  </div>
                </div>

                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">BACKEND</div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    NODE.JS • PYTHON • EXPRESS • FASTAPI<br/>
                    REST • MICROSERVICES
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <div className="space-y-8">
                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">DATABASE</div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    SQL • MONGODB • MONGOOSE<br/>
                  </div>
                </div>
                
                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">DEVOPS</div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    VERCEL • DOCKER<br/>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <div className="space-y-8">
                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">AI</div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    LLM • PROMPT ENGINEERING • RAG<br/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal Bold */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-8xl font-black mb-16">
            LET'S BUILD_
          </h2>
          
          <div className="flex justify-center space-x-16 mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-black px-8 py-4 transform hover:rotate-2"
              onClick={() => window.open('https://github.com/sarthaksri', '_blank')}
            >
              <Github className="mr-4 h-6 w-6" />
              GITHUB
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-black px-8 py-4 transform hover:-rotate-2"
              onClick={() => window.open('https://www.linkedin.com/in/sarthaksri017/', '_blank')}
            >
              <Linkedin className="mr-4 h-6 w-6" />
              LINKEDIN
            </Button>
          </div>
          
          <div className="text-2xl font-black tracking-widest opacity-50">
            sarthaksri017@gmail.com
          </div>
        </div>
      </section>
    </div>
  )
}
