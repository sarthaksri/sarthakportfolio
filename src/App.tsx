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
      {/* Cursor follower - hidden on mobile */}
      <div 
        className="hidden lg:block fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-100 mix-blend-difference"
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
          {/* Desktop only: diagonal split */}
          <div 
            className="hidden lg:block absolute inset-0 bg-white"
            style={{
              clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0% 100%)',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full px-4 md:px-8">
            {/* Mobile/Tablet Layout (under 1000px) - Single line name */}
            <div className="lg:hidden text-center pt-20">
              {/* Full name in one line */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-8 mix-blend-difference">
                SARTHAK SRIVASTAVA
              </h1>
              
              {/* Job titles stacked */}
              <div className="space-y-6 mb-8">
                <div className="text-black">
                  <div className="text-sm sm:text-base md:text-lg font-bold mb-4 transform rotate-1">
                    SOFTWARE DEVELOPMENT ENGINEER
                  </div>
                  <div className="w-20 md:w-28 h-1 bg-black mx-auto mb-4"></div>
                  <p className="text-sm sm:text-base font-medium leading-tight">
                    MAKING<br/>
                    LIFE EASIER<br/>
                    WITH TECHNOLOGY
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-white">
                  <div className="text-sm sm:text-base md:text-lg font-bold mb-4 transform -rotate-1">
                    SOFTWARE DEVELOPER
                  </div>
                  <div className="w-20 md:w-28 h-1 bg-white mx-auto mb-4"></div>
                  <p className="text-sm sm:text-base font-medium leading-tight">
                    CLEAN CODE<br/>
                    CAFFEINE LOAD<br/>
                    VICTORY BESTOWED
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Layout (1000px+) - Original diagonal split design */}
            {/* Left side - Black text on white */}
            <div className="hidden lg:block lg:absolute left-0 lg:left-8 top-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 w-full lg:w-2/5">
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
            <div className="hidden lg:block lg:absolute right-0 lg:right-8 top-auto lg:top-1/2 lg:transform lg:-translate-y-1/2 w-full lg:w-2/5 text-right">
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
      <section className="py-16 md:py-32 px-4 md:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-20 transform -rotate-1">
            EXPERIENCE_
          </h2>
          
          <div className="space-y-8 md:space-y-16">
            {[
              {
                year: "Jan 2026 - Present",
                title: "PUBLIC TECHNOLOGIST",
                company: "MINISTRY OF STATISTICS AND PROGRAM IMPLEMENTATION",
                description: "BUILD FOR BHARAT FELLOWSHIP 2026 (BHARAT DIGITAL) | DEVELOPER",
                location: "NEW DELHI",
                tech: "REACT / NODE / LLM",
                link: "https://www.bharatdigital.io/fellowship"
              },
              {
                year: "JUN 2025 - AUG 2025",
                title: "SUMMER INTERN", 
                company: "OPTUM GLOBAL SOLUTIONS (UNITEDHEALTH GROUP)",
                description: "TECHNICAL DEVELOPMENT PROGRAM INTERN",
                location: "HYDERABAD",
                tech: "FASTAPI / APACHE AIRFLOW / SPRINGBOOT / ORACLE SQL / LLM",
                link: "https://drive.google.com/file/d/1cM15nzywTWQ-9saDmh9EhcgxadGR26rG/view"
              },
              {
                year: "FEB 2024 - JUL 2024",
                title: "BACKEND ENGINEER",
                company: "SMARTSAVAARI PVT LTD",
                description: "STARTUP ON REDEFINING MOBILITY",
                location: "REMOTE",
                tech: "NODE / EXPRESS / MONGOOSE",
                link: "https://drive.google.com/file/d/1w5jVo_IJasFAqnuif4-wUzjrFhdrzABy/view"
              }
            ].map((job, index) => (
              <div key={index} className="group">
                <div 
                  className="border-4 border-black p-4 md:p-8 transform hover:rotate-1 transition-transform duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                  onClick={() => window.open(job.link, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="text-5xl md:text-8xl font-black opacity-20 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-right">
                      <div className="text-lg md:text-3xl font-black mb-2">{job.year}</div>
                      <div className="w-12 md:w-16 h-1 bg-black ml-auto"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-black mb-2 group-hover:italic transition-all">
                    {job.title}
                  </h3>
                  <div className="text-lg md:text-2xl font-bold mb-2 opacity-70">
                    {job.company}
                  </div>
                  <div className="text-base md:text-xl font-bold mb-2 opacity-70">
                    {job.location}
                  </div>
                  <p className="text-sm md:text-lg font-medium mb-2 leading-tight">
                    {job.description}
                  </p>
                  <div className="text-xs md:text-sm font-black tracking-widest opacity-50">
                    {job.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Grid Chaos */}
      <section className="py-16 md:py-32 px-4 md:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-20 text-right transform rotate-1">
            _PROJECTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto md:h-screen">
            {/* Project 1 - Large */}
            <div 
              className="md:col-span-7 md:row-span-2 bg-white text-black p-6 md:p-8 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer min-h-[300px]"
              onClick={() => window.open('https://github.com/sarthaksri/Blind-coding-frontend', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">01</div>
                <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                  BLIND CODING<br/>PLATFORM
                </h3>
                <p className="text-sm md:text-lg font-medium mb-6">
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
              className="md:col-span-5 bg-white text-black p-6 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer min-h-[250px]"
              onClick={() => window.open('https://expenses.sarthaksri.xyz/', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">02</div>
                <h3 className="text-xl md:text-2xl font-black mb-4">
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
              className="md:col-span-3 bg-white text-black p-6 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer min-h-[200px]"
              onClick={() => window.open('https://github.com/sarthaksri/prelim-event.git', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">03</div>
                <h3 className="text-lg md:text-xl font-black mb-4">
                  QUIZZING PLATFORM BACKEND
                </h3>
              </div>
              <div className="text-xs font-black tracking-widest opacity-70">
                NODE / EXPRESS / MONGOOSE
              </div>
            </div>

            {/* Project 4 - Wide */}
            <div 
              className="md:col-span-9 bg-white text-black p-6 flex flex-col md:flex-row items-start md:items-center justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white cursor-pointer min-h-[200px]"
              onClick={() => window.open('https://github.com/sarthaksri/ai-chatbot-framework', '_blank')}
            >
              <div>
                <div className="text-xs font-black tracking-widest mb-2 opacity-50">04</div>
                <h3 className="text-2xl md:text-3xl font-black">AI CHATBOT FRAMEWORK</h3>
              </div>
              <div className="text-left md:text-right mt-4 md:mt-0">
                <div className="text-xs font-black tracking-widest opacity-70 mb-2">
                  PYTHON / FASTAPI
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Bold Grid */}
      <section className="py-16 md:pb-32 px-4 md:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-20 transform -rotate-1">
            ACHIEVEMENTS_
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: "🏆",
                title: "SMART INDIA HACKATHON",
                organization: "WINNER",
                year: "2024",
                description: "WINNER IN PROBLEM STATEMENT NUMBER 1691 : ADAPTING COMMAND AREA TO SHIFTING AGRICULTURAL PRACTICES"
              },
              {
                icon: "🏆",
                title: "MAKEATHON 5",
                organization: "FIRST RUNNER UP",
                year: "2023",
                description: "MLH HACKATHON ORGANISED BY MICROSOFT LEARN STUDENT CHAPTER AT THAPAR. BUILT A SOLUTION AROUND BLOOD BANK SUPPLY."
              }
            ].map((achievement, index) => (
              <div 
                key={index} 
                className="group border-4 border-black p-6 md:p-8 transform hover:-rotate-1 transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl md:text-6xl">{achievement.icon}</div>
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-black">{achievement.year}</div>
                    <div className="w-12 md:w-16 h-1 bg-black ml-auto mt-2"></div>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:italic transition-all">
                  {achievement.title}
                </h3>
                <div className="text-base md:text-lg font-bold mb-4 opacity-70">
                  {achievement.organization}
                </div>
                <p className="text-sm md:text-base font-medium leading-tight opacity-80">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Typography Chaos */}
      <section className="py-16 md:pt-16 px-4 md:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-16 text-right transform rotate-2">
            _SKILLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Column 1 */}
            <div>
              <div className="space-y-6 md:space-y-8">
                <div className="group">
                  <div className="text-2xl md:text-4xl font-black mb-2 group-hover:italic transition-all">FRONTEND</div>
                  <div className="text-base md:text-lg font-medium opacity-70 leading-tight">
                    REACT • VITE • HTML<br/>
                  </div>
                </div>

                <div className="group">
                  <div className="text-2xl md:text-4xl font-black mb-2 group-hover:italic transition-all">BACKEND</div>
                  <div className="text-base md:text-lg font-medium opacity-70 leading-tight">
                    NODE.JS • PYTHON • EXPRESS • FASTAPI<br/>
                    REST • MICROSERVICES
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <div className="space-y-6 md:space-y-8">
                <div className="group">
                  <div className="text-2xl md:text-4xl font-black mb-2 group-hover:italic transition-all">DATABASE</div>
                  <div className="text-base md:text-lg font-medium opacity-70 leading-tight">
                    SQL • MONGODB • MONGOOSE<br/>
                  </div>
                </div>
                
                <div className="group">
                  <div className="text-2xl md:text-4xl font-black mb-2 group-hover:italic transition-all">DEVOPS</div>
                  <div className="text-base md:text-lg font-medium opacity-70 leading-tight">
                    VERCEL • DOCKER<br/>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <div className="space-y-6 md:space-y-8">
                <div className="group">
                  <div className="text-2xl md:text-4xl font-black mb-2 group-hover:italic transition-all">AI</div>
                  <div className="text-base md:text-lg font-medium opacity-70 leading-tight">
                    LLM • PROMPT ENGINEERING • RAG<br/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal Bold */}
      <section className="py-16 md:py-32 px-4 md:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-8xl font-black mb-10 md:mb-16">
            LET'S BUILD_
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-16 mb-10 md:mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-lg md:text-xl font-black px-6 md:px-8 py-3 md:py-4 transform hover:rotate-2"
              onClick={() => window.open('https://github.com/sarthaksri', '_blank')}
            >
              <Github className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6" />
              GITHUB
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-lg md:text-xl font-black px-6 md:px-8 py-3 md:py-4 transform hover:-rotate-2"
              onClick={() => window.open('https://www.linkedin.com/in/sarthaksri017/', '_blank')}
            >
              <Linkedin className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6" />
              LINKEDIN
            </Button>
          </div>
          
          <div className="text-base md:text-2xl font-black tracking-widest opacity-50">
            sarthaksri017@gmail.com
          </div>
        </div>
      </section>
    </div>
  )
}
