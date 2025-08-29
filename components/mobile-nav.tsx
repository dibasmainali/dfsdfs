"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface MobileNavProps {
  onDownloadResume: () => void
}

export function MobileNav({ onDownloadResume }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    console.log("MobileNav mounted successfully")
  }, [])

  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", isOpen)
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    console.log("Close menu clicked")
    setIsOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.warn("Section not found:", sectionId)
    }
    closeMenu()
  }

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="p-3 text-foreground min-h-[44px] min-w-[44px]"
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="p-3 text-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px]"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-md">
          <div className="flex flex-col h-full bg-background">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-4 border-b border-border bg-card">
              <div className="text-xl font-bold text-primary">SABINA</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                className="p-3 min-h-[44px] min-w-[44px] hover:bg-muted"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 bg-background">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full text-left text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 py-4 px-4 rounded-lg min-h-[48px] flex items-center border border-transparent hover:border-border/30"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('education')}
                    className="w-full text-left text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 py-4 px-4 rounded-lg min-h-[48px] flex items-center border border-transparent hover:border-border/30"
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="w-full text-left text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 py-4 px-4 rounded-lg min-h-[48px] flex items-center border border-transparent hover:border-border/30"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('achievements')}
                    className="w-full text-left text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 py-4 px-4 rounded-lg min-h-[48px] flex items-center border border-transparent hover:border-border/30"
                  >
                    Achievements
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className="w-full text-left text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 py-4 px-4 rounded-lg min-h-[48px] flex items-center border border-transparent hover:border-border/30"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full text-left text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 py-4 px-4 rounded-lg min-h-[48px] flex items-center border border-transparent hover:border-border/30"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            {/* Download Resume Button */}
            <div className="p-4 border-t border-border bg-card">
              <Button 
                onClick={() => {
                  console.log("Download resume clicked")
                  onDownloadResume()
                  closeMenu()
                }}
                className="w-full bg-primary hover:bg-primary/90 min-h-[48px] text-base font-medium shadow-lg"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
