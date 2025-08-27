"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Toaster } from "sonner"

export default function MechanicalEngineeringPortfolio() {
  const [activeTab, setActiveTab] = useState("academic")
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const GearIcon = ({ size = 60, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <GearIcon size={120} className="floating-gear gear-rotate text-muted-foreground absolute top-20 left-10" />
        <GearIcon
          size={80}
          className="floating-gear gear-rotate-reverse text-muted-foreground absolute top-40 right-20"
        />
        <GearIcon size={100} className="floating-gear gear-rotate text-muted-foreground absolute bottom-40 left-1/4" />
        <GearIcon
          size={60}
          className="floating-gear gear-rotate-reverse text-muted-foreground absolute bottom-20 right-1/3"
        />
        <GearIcon size={140} className="floating-gear gear-rotate text-muted-foreground absolute top-1/2 right-10" />
        <GearIcon
          size={90}
          className="floating-gear gear-rotate-reverse text-muted-foreground absolute top-60 left-1/2"
        />

        {/* Additional machine parts */}
        <div className="floating-element float-up-down absolute top-32 right-1/4 w-16 h-16 bg-muted-foreground rounded-full opacity-3"></div>
        <div className="floating-element float-left-right absolute bottom-60 left-20 w-12 h-20 bg-muted-foreground rounded-sm opacity-3"></div>
        <div className="floating-element float-up-down absolute top-80 left-1/3 w-20 h-8 bg-muted-foreground rounded-lg opacity-3"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">SABINA </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors hover-lift">
                About
              </a>
              <a href="#education" className="text-foreground hover:text-primary transition-colors hover-lift">
                Education
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors hover-lift">
                Projects
              </a>
              <a href="#achievements" className="text-foreground hover:text-primary transition-colors hover-lift">
                Achievements
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors hover-lift">
                Gallery
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors hover-lift">
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Download Resume</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`section-animate-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">SABINA</span>,<br />a mechanical engineer
                <br />I design
                <br />
                <span className="text-secondary">INNOVATIVE MACHINES</span>
                <br />
                for industry
              </h1>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-animate"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in touch →
              </Button>
              <div className="flex space-x-6 mt-8">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  ResearchGate
                </a>
              </div>
            </div>
            <div
              className={`section-animate-right transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img
                src="/professional-female-mechanical-engineer-with-lapto.png"
                alt="SABINA  - Mechanical Engineer"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-4xl font-bold mb-4">About myself</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="section-animate-left">
              <img src="/female-mechanical-engineering-student-working-on-t.png" alt="About SABINA" className="rounded-2xl shadow-lg hover-scale" />
            </div>
            <div className="section-animate-right">
              <p className="text-lg text-muted-foreground mb-6">
                I am a passionate and dedicated mechanical engineering student with a love for designing innovative
                solutions and optimizing mechanical systems. Currently in my 2nd year of bachelor's degree, I have
                developed expertise in industry-standard software and have a keen eye for precision and attention to
                detail.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-card rounded-lg border hover-lift card-hover">
                  <div className="text-2xl font-bold text-primary pulse-animate">2</div>
                  <div className="text-sm text-muted-foreground">Years of experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border hover-lift card-hover">
                  <div className="text-2xl font-bold text-primary pulse-animate">15+</div>
                  <div className="text-sm text-muted-foreground">Projects completed</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tools I use</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-card rounded-lg border hover-scale card-hover">
                    <div className="text-2xl mb-2 hover-glow">⚙️</div>
                    <div className="text-sm font-medium">AutoCAD</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg border hover-scale card-hover">
                    <div className="text-2xl mb-2 hover-glow">🔧</div>
                    <div className="text-sm font-medium">SOLIDWORKS</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg border hover-scale card-hover">
                    <div className="text-2xl mb-2 hover-glow">📊</div>
                    <div className="text-sm font-medium">ANSYS</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg border hover-scale card-hover">
                    <div className="text-2xl mb-2 hover-glow">🧮</div>
                    <div className="text-sm font-medium">Maple</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg border hover-scale card-hover">
                    <div className="text-2xl mb-2 hover-glow">📈</div>
                    <div className="text-sm font-medium">Excel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary hover-lift card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">BSc (Hons) Mechanical Engineering</h3>
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Ongoing</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Institute of Engineering, Tribhuvan University</p>
                <div className="text-sm text-muted-foreground">2023 – Present</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary hover-lift card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">+2 (Science)</h3>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">Completed</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Khwapha Secondary School</p>
                <div className="text-sm text-muted-foreground">2021 – 2023</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent hover-lift card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">SEE</h3>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">Completed</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Learners' Academy Secondary School</p>
                <div className="text-sm text-muted-foreground">2017 – 2020</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-4xl font-bold mb-4">My Engineering Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some engineering projects I've worked on using industry-standard software tools for design,
              analysis, and problem-solving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 section-animate-left">
              <Card className="border-l-4 border-l-primary hover-lift card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Mechanical Design: Gear Assembly</h3>
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      CAD Design
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Designed and modeled a complete gear assembly system using SOLIDWORKS. Performed stress analysis
                    using ANSYS to ensure optimal performance under various load conditions. Included detailed technical
                    drawings and manufacturing specifications.
                  </p>
                  <span className="text-sm text-primary font-medium">CAD Design & Analysis</span>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary hover-lift card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Thermal Analysis: Heat Exchanger</h3>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      Thermal Engineering
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Conducted comprehensive thermal analysis of a shell-and-tube heat exchanger using ANSYS. Optimized
                    design parameters and calculated heat transfer coefficients using Maple for mathematical modeling.
                  </p>
                  <span className="text-sm text-secondary font-medium">Thermal Engineering</span>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent hover-lift card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">AutoCAD Project: Machine Parts</h3>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      Technical Drafting
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Created detailed 2D technical drawings and 3D models of various machine components. Focused on
                    precision drafting and adherence to engineering standards and tolerances.
                  </p>
                  <span className="text-sm text-accent font-medium">Technical Drafting</span>
                </CardContent>
              </Card>
            </div>

            <div className="relative section-animate-right">
              <img
                src="/laptop-screen-showing-solidworks-with-mechanical-g.png"
                alt="Engineering Projects Showcase"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute bottom-4 right-4">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  SOLIDWORKS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-4xl font-bold mb-4">My Achievements</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">
              Recognition and awards for academic excellence and engineering innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow hover-lift card-hover">
              <CardContent className="p-6 text-center">
                <img
                  src="https://picsum.photos/300/200?random=1"
                  alt="Dean's List Achievement"
                  className="w-full h-40 object-cover rounded-lg mb-4 hover-scale"
                />
                <h3 className="text-lg font-semibold mb-2">Dean's List 2023</h3>
                <p className="text-muted-foreground text-sm">
                  Achieved Dean's List recognition for maintaining GPA above 3.8 in mechanical engineering coursework.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-lift card-hover">
              <CardContent className="p-6 text-center">
                <img
                  src="https://picsum.photos/300/200?random=2"
                  alt="CAD Competition Winner"
                  className="w-full h-40 object-cover rounded-lg mb-4 hover-scale"
                />
                <h3 className="text-lg font-semibold mb-2">CAD Design Competition</h3>
                <p className="text-muted-foreground text-sm">
                  First place winner in university-wide CAD design competition for innovative gear mechanism design.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-lift card-hover">
              <CardContent className="p-6 text-center">
                <img
                  src="https://picsum.photos/300/200?random=3"
                  alt="Engineering Excellence Award"
                  className="w-full h-40 object-cover rounded-lg mb-4 hover-scale"
                />
                <h3 className="text-lg font-semibold mb-2">Engineering Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Received Engineering Excellence Award for outstanding performance in thermodynamics and fluid
                  mechanics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-4xl font-bold mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">A collection of my academic journey, projects, and personal moments</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab("academic")}
                className={`px-6 py-2 rounded-md transition-colors btn-animate ${
                  activeTab === "academic"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Academic
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-6 py-2 rounded-md transition-colors btn-animate ${
                  activeTab === "projects"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-6 py-2 rounded-md transition-colors btn-animate ${
                  activeTab === "personal"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Personal
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "academic" && (
              <>
                <img
                  src="https://picsum.photos/400/300?random=10"
                  alt="Academic 1"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow hover-scale card-hover"
                />
                <img
                  src="https://picsum.photos/400/300?random=11"
                  alt="Academic 2"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=12"
                  alt="Academic 3"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=13"
                  alt="Academic 4"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=14"
                  alt="Academic 5"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=15"
                  alt="Academic 6"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </>
            )}
            {activeTab === "projects" && (
              <>
                <img
                  src="https://picsum.photos/400/300?random=20"
                  alt="Project 1"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=21"
                  alt="Project 2"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=22"
                  alt="Project 3"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=23"
                  alt="Project 4"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=24"
                  alt="Project 5"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=25"
                  alt="Project 6"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </>
            )}
            {activeTab === "personal" && (
              <>
                <img
                  src="https://picsum.photos/400/300?random=30"
                  alt="Personal 1"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=31"
                  alt="Personal 2"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=32"
                  alt="Personal 3"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=33"
                  alt="Personal 4"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=34"
                  alt="Personal 5"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img
                  src="https://picsum.photos/400/300?random=35"
                  alt="Personal 6"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Have a project in mind?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Let's discuss how we can work together</p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Designed by SABINA  and coded with precision</p>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all p-3 btn-animate hover-lift"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 4l-7 7h4v7h6v-7h4z"/>
          </svg>
        </button>
      )}

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />
    </div>
  )
}
