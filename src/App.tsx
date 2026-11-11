import React, { useState, useEffect } from 'react';
import {
  PROJECTS,
  TESTIMONIALS,
  HERO_ARCHITECT_PORTRAIT,
  Project,
} from './data/projects';
import { ResilientImage } from './components/ArchitecturalMedia';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [inquiryProjectRef, setInquiryProjectRef] = useState('');
  const [inquiryCategory, setInquiryCategory] = useState('Autonomous Smart Villa');

  const featuredProject = PROJECTS[0];
  const gridProjects = showAllProjects ? PROJECTS.slice(1) : PROJECTS.slice(1, 5);

  const handleOpenInquire = (
    projectTitle = '',
    category = 'Autonomous Smart Villa'
  ) => {
    setSelectedProject(null);
    setInquiryProjectRef(projectTitle);
    setInquiryCategory(category);
    setConsultationOpen(true);
  };

  // Exact Scroll Reveal & Image Curtain Reveal Observers from the original HTML
  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll-visible');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const animatedElements = document.querySelectorAll('[data-animation-on-scroll]');
    animatedElements.forEach((el) => {
      if (!el.classList.contains('animate-on-scroll-visible')) {
        el.classList.add('animate-on-scroll-hidden');
      }
      scrollObserver.observe(el);
    });

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const overlay = entry.target.querySelector('.image-reveal-overlay');
            if (overlay) {
              setTimeout(() => {
                overlay.classList.add('revealed');
              }, 200);
            }
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imageElements = document.querySelectorAll('[data-image-reveal]');
    imageElements.forEach((el) => {
      imageObserver.observe(el);
    });

    return () => {
      scrollObserver.disconnect();
      imageObserver.disconnect();
    };
  }, [showAllProjects]);

  return (
    <div className="font-sans bg-bg-primary text-text-dark overflow-x-hidden">
      {/* Main Navigation */}
      <header className="fixed top-0 left-0 w-full bg-bg-primary border-b border-border-color z-50">
        <nav
          data-editable="header"
          className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-3xl py-4"
        >
          <a
            data-editable="text"
            data-path="header.logo.text"
            className="font-serif text-3xl text-text-dark"
            href="#top"
          >
            Tunde Bakare
          </a>

          <div
            className="hidden md:flex items-center gap-6"
            data-editable-list="header.navLinks"
          >
            <a
              data-editable="text"
              data-path="header.navLinks[0].text"
              className="text-sm font-medium uppercase tracking-wider hover:text-text-muted transition-colors"
              href="#work"
            >
              Work
            </a>
            <a
              data-editable="text"
              data-path="header.navLinks[1].text"
              className="text-sm font-medium uppercase tracking-wider hover:text-text-muted transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              data-editable="text"
              data-path="header.navLinks[2].text"
              className="text-sm font-medium uppercase tracking-wider hover:text-text-muted transition-colors"
              href="#process"
            >
              Approach
            </a>
          </div>

          <button
            type="button"
            onClick={() => handleOpenInquire()}
            data-editable="text"
            data-path="header.ctaButton.text"
            className="group hidden md:inline-flex items-center gap-2 bg-accent-yellow text-text-dark font-medium text-sm uppercase tracking-wider px-6 py-3 border border-border-color hover:bg-accent-hover hover:scale-105 hover:shadow-card transition-all duration-300 cursor-pointer"
          >
            Let&apos;s Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-1.5 w-6 cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span className="w-full h-0.5 bg-text-dark transition-all"></span>
            <span className="w-full h-0.5 bg-text-dark transition-all"></span>
            <span className="w-full h-0.5 bg-text-dark transition-all"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            mobileMenuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col gap-6 px-6 py-8 border-t border-border-color bg-bg-primary`}
          id="mobile-menu"
        >
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium uppercase tracking-wider"
            href="#work"
          >
            Work
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium uppercase tracking-wider"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium uppercase tracking-wider"
            href="#process"
          >
            Approach
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleOpenInquire();
            }}
            className="inline-flex items-center gap-2 bg-accent-yellow text-text-dark font-medium text-sm uppercase tracking-wider px-6 py-3 border border-border-color self-start cursor-pointer"
          >
            Let&apos;s Talk →
          </button>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(#2b2b2b 1px, transparent 1px), linear-gradient(90deg, #2b2b2b 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            ></div>
          </div>

          {/* Floating Geometric Elements */}
          <div
            className="absolute top-20 right-10 w-32 h-32 border border-border-color transform rotate-45 opacity-30 pointer-events-none"
            data-animation-on-scroll="fadeInUp"
          ></div>
          <div
            className="absolute bottom-32 left-10 w-24 h-24 bg-accent-yellow opacity-20 pointer-events-none"
            data-animation-on-scroll="fadeInUp"
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-text-muted rounded-full opacity-20 pointer-events-none"
            data-animation-on-scroll="fadeInUp"
          ></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-3xl w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content Area */}
              <div
                className="lg:col-span-7 space-y-4 relative z-10"
                data-animation-on-scroll="fadeInUp"
              >
                {/* Status Badge with Vertical Line */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-3 h-3 bg-accent-yellow border-2 border-border-color rounded-full animation-dot"></div>
                    <div className="w-0.5 h-8 bg-border-color opacity-30"></div>
                  </div>
                  <div className="pt-0.5">
                    <span className="text-xs font-medium uppercase tracking-widest">
                      Available for Select Projects — Lagos &amp; Abuja
                    </span>
                  </div>
                </div>

                {/* Main Heading with Creative Typography */}
                <div className="space-y-4">
                  <div className="overflow-hidden">
                    <h1
                      data-editable="text"
                      data-path="hero.heading"
                      className="font-serif text-6xl lg:text-8xl leading-none"
                    >
                      <span
                        className="block"
                        style={{
                          transform: 'translateY(0)',
                          transition:
                            'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
                        }}
                      >
                        Architecture
                      </span>
                    </h1>
                  </div>

                  <div className="overflow-hidden">
                    <h1
                      className="font-serif text-6xl lg:text-8xl leading-none flex items-center gap-4"
                      style={{
                        transform: 'translateY(0)',
                        transition:
                          'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.1s',
                      }}
                    >
                      <span className="relative inline-block">
                        That
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-yellow"></span>
                      </span>
                      <span
                        className="text-accent-yellow italic"
                        style={{
                          WebkitTextStroke: '2px #2b2b2b',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Powers
                      </span>
                    </h1>
                  </div>
                </div>

                {/* Subheading with Accent Bar */}
                <div className="flex gap-6 items-start max-w-xl">
                  <div className="w-1 h-24 bg-accent-yellow flex-shrink-0"></div>
                  <p
                    data-editable="text"
                    data-path="hero.subheading"
                    className="text-lg lg:text-xl text-text-muted leading-relaxed pt-2"
                  >
                    I&apos;m Tunde Bakare, a Nigerian architect designing
                    solar-autonomous smart homes that deliver 24/7 silent power,
                    acoustic serenity, and flood-resilient tropical living.
                  </p>
                </div>

                {/* Creative Info Cards */}
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="bg-bg-secondary border border-border-color p-4 hover:bg-text-dark hover:text-bg-primary transition-all duration-300 group">
                    <div className="font-serif text-3xl mb-1">34+</div>
                    <div className="text-xs uppercase tracking-wider opacity-70">
                      Autonomous Builds
                    </div>
                  </div>
                  <div className="bg-bg-secondary border border-border-color p-4 hover:bg-text-dark hover:text-bg-primary transition-all duration-300 group">
                    <div className="font-serif text-3xl mb-1">9</div>
                    <div className="text-xs uppercase tracking-wider opacity-70">
                      Design Awards
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#work"
                    className="group relative inline-flex items-center gap-3 bg-text-dark text-bg-primary font-medium text-sm uppercase tracking-wider px-8 py-4 overflow-hidden transition-all duration-300 hover:gap-5"
                  >
                    <span className="relative z-10 group-hover:text-text-dark transition-colors duration-300">
                      Explore Work
                    </span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-text-dark">
                      →
                    </span>
                    <div className="absolute inset-0 bg-text-dark"></div>
                    <div className="absolute inset-0 bg-accent-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleOpenInquire()}
                    className="inline-flex items-center gap-2 bg-transparent text-text-dark font-medium text-sm uppercase tracking-wider px-8 py-4 border-2 border-border-color hover:border-accent-yellow hover:bg-accent-yellow transition-all duration-300 cursor-pointer"
                  >
                    Let&apos;s Talk
                  </button>
                </div>
              </div>

              {/* Right Image Area with Creative Layout */}
              <div
                className="lg:col-span-5 relative"
                data-animation-on-scroll="fadeInUp"
              >
                {/* Main Image with Angled Frame */}
                <div className="relative">
                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-border-color z-20 pointer-events-none"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-border-color z-20 pointer-events-none"></div>

                  {/* Image Container */}
                  <div
                    className="relative cursor-pointer"
                    data-image-reveal=""
                    onClick={() => setSelectedProject(featuredProject)}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{
                        clipPath:
                          'polygon(0 0, 100% 8%, 100% 100%, 0% 92%)',
                      }}
                    >
                      <ResilientImage
                        src={featuredProject.imageUrl}
                        alt="Bourbon Road Autonomous Villa in Old Ikoyi, Lagos"
                        fallbackTitle={featuredProject.title}
                        fallbackSubtitle={featuredProject.location}
                        svgType="hillside"
                        className="w-full h-[500px] lg:h-[600px] object-cover"
                      />
                    </div>
                    <div
                      className="image-reveal-overlay"
                      style={{
                        clipPath:
                          'polygon(0 0, 100% 8%, 100% 100%, 0% 92%)',
                      }}
                    ></div>
                  </div>

                  {/* Floating Info Card */}
                  <div
                    onClick={() => setSelectedProject(featuredProject)}
                    className="absolute -bottom-8 left-6 lg:-left-8 bg-accent-yellow border border-border-color p-6 max-w-xs z-20 shadow-card cursor-pointer hover:bg-accent-hover transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wider mb-2 opacity-70">
                      Latest Achievement
                    </div>
                    <div className="font-serif text-xl mb-1">
                      NIA Excellence Award
                    </div>
                    <div className="text-sm">
                      Bourbon Road Villa, Ikoyi — 2024
                    </div>
                  </div>
                </div>

                {/* Small Accent Image */}
                <div
                  className="absolute -top-12 -left-12 hidden lg:block w-32 h-32 border-2 border-accent-yellow opacity-50 pointer-events-none"
                  data-animation-on-scroll="fadeInUp"
                ></div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 text-text-muted">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-0.5 h-16 bg-border-color relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-accent-yellow animate-scroll"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="py-16 px-6 lg:px-3xl bg-bg-secondary border-b border-border-color"
          data-animation-on-scroll="fadeInUp"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-5xl mb-2">34+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-text-muted">
                Completed Projects
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl mb-2">9</div>
              <div className="text-sm font-medium uppercase tracking-wider text-text-muted">
                Design Awards
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl mb-2">1.8 MW</div>
              <div className="text-sm font-medium uppercase tracking-wider text-text-muted">
                Solar Microgrids Built
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl mb-2">12+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-text-muted">
                Years of Practice
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section
          id="work"
          className="py-24 px-6 lg:px-3xl"
          data-animation-on-scroll="fadeInUp"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h5 className="inline-block text-xs font-medium uppercase tracking-wider pb-2 border-b border-dashed border-border-color mb-3">
                Selected Projects
              </h5>
              <h2 className="font-serif text-4xl lg:text-6xl">Recent Work</h2>
            </div>

            {/* Project 1 - Large Featured */}
            <div
              className="mb-20 group"
              data-animation-on-scroll="fadeInUp"
            >
              <div
                onClick={() => setSelectedProject(featuredProject)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(featuredProject);
                  }
                }}
                className="block cursor-pointer"
              >
                <div
                  className="relative overflow-hidden mb-6 bg-bg-secondary border border-border-color"
                  data-image-reveal=""
                >
                  <ResilientImage
                    src={featuredProject.imageUrl}
                    alt={featuredProject.title}
                    fallbackTitle={featuredProject.title}
                    fallbackSubtitle={featuredProject.location}
                    svgType={featuredProject.architecturalSvgType}
                    className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="image-reveal-overlay"></div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-accent-yellow border border-border-color">
                        {featuredProject.category}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-bg-secondary border border-border-color">
                        {featuredProject.secondaryTag}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-bg-secondary border border-border-color">
                        {featuredProject.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl lg:text-5xl mb-2 group-hover:text-text-muted transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-text-muted max-w-2xl">
                      {featuredProject.summary}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider group-hover:gap-4 transition-all">
                    View Project
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {gridProjects.map((project) => (
                <div
                  key={project.id}
                  className="group"
                  data-animation-on-scroll="fadeInUp"
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    className="block cursor-pointer"
                  >
                    <div
                      className="relative overflow-hidden mb-6 bg-bg-secondary border border-border-color"
                      data-image-reveal=""
                    >
                      <ResilientImage
                        src={project.imageUrl}
                        alt={project.title}
                        fallbackTitle={project.title}
                        fallbackSubtitle={project.location}
                        svgType={project.architecturalSvgType}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="image-reveal-overlay"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-accent-yellow border border-border-color">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-bg-secondary border border-border-color">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl mb-2 group-hover:text-text-muted transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted mb-4">{project.summary}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider group-hover:gap-4 transition-all">
                      View Project
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="text-center mt-16"
              data-animation-on-scroll="fadeInUp"
            >
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="inline-flex items-center gap-2 bg-text-dark text-bg-primary font-medium text-sm uppercase tracking-wider px-8 py-4 border border-border-color hover:bg-text-muted hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                {showAllProjects ? 'Show Featured Selection' : 'View All Projects'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 px-6 lg:px-3xl bg-bg-secondary border-y border-border-color"
          data-animation-on-scroll="fadeInUp"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-image-reveal="">
                <div className="relative">
                  <ResilientImage
                    src={HERO_ARCHITECT_PORTRAIT}
                    alt="Tunde Bakare"
                    fallbackTitle="Tunde Bakare"
                    fallbackSubtitle="Principal Architect · Lagos & Abuja"
                    svgType="portrait"
                    className="w-full border border-border-color"
                  />
                  <div className="image-reveal-overlay"></div>
                </div>
              </div>

              <div>
                <h5 className="inline-block text-xs font-medium uppercase tracking-wider pb-2 border-b border-dashed border-border-color mb-6">
                  About Me
                </h5>
                <h2 className="font-serif text-4xl lg:text-5xl mb-6">
                  Designing With Purpose &amp; Precision
                </h2>

                <div className="space-y-4 text-text-muted mb-8">
                  <p>
                    I&apos;m an architect based in Victoria Island, Lagos and
                    Maitama, Abuja, with a passion for engineering spaces that
                    deliver uninterrupted calm while responding to Nigeria&apos;s
                    tropical climate and urban realities.
                  </p>
                  <p>
                    After training in architectural engineering and working with
                    leading studios in London and Lagos, I founded my
                    independent practice in 2018 to build homes that eliminate
                    diesel generator reliance through integrated solar-lithium
                    microgrids and acoustic engineering.
                  </p>
                  <p>
                    My approach combines rigorous building science with deep
                    sensitivity to West African materiality—pairing Nigerian
                    Iroko, Abeokuta granite, and stabilized laterite with smart
                    automation and transparent turnkey delivery for local and
                    Diaspora families.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>
                      <strong>ARCON &amp; COREN Registered</strong> — Lagos
                      (LASBCA), Abuja (FCDA), Enugu &amp; Rivers
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>
                      <strong>Solar-Autonomous &amp; KNX Specialist</strong> —
                      Zero-diesel microgrids &amp; STC-64 acoustic envelopes
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>
                      <strong>Awards &amp; Trust</strong> — NIA Excellence
                      Award, Bi-Weekly 3D Drone Diaspora Reporting
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenInquire()}
                  className="inline-flex items-center gap-2 bg-accent-yellow text-text-dark font-medium text-sm uppercase tracking-wider px-6 py-3 border border-border-color hover:bg-accent-hover hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  Work With Me
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Design Focus */}
        <section
          className="py-24 px-6 lg:px-3xl"
          data-animation-on-scroll="fadeInUp"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h5 className="inline-block text-xs font-medium uppercase tracking-wider pb-2 border-b border-dashed border-border-color mb-3">
                What I Do
              </h5>
              <h2 className="font-serif text-4xl lg:text-6xl">Design Focus</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Focus 1 */}
              <div
                className="bg-bg-secondary border border-border-color p-8 lg:p-10 hover:bg-bg-tertiary hover:shadow-card transition-all duration-300 group"
                data-animation-on-scroll="fadeInUp"
              >
                <div className="w-16 h-16 bg-accent-yellow border border-border-color rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4">
                  Autonomous Smart Homes
                </h3>
                <p className="text-text-muted mb-6">
                  Bespoke residential architecture in Ikoyi, Maitama, and Lekki
                  engineered for 24/7 uninterrupted living and flood resilience.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Zero-Diesel Custom Villas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Acoustic Penthouse Retrofits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Turnkey Diaspora Builds
                  </li>
                </ul>
              </div>

              {/* Focus 2 */}
              <div
                className="bg-bg-secondary border border-border-color p-8 lg:p-10 hover:bg-bg-tertiary hover:shadow-card transition-all duration-300 group"
                data-animation-on-scroll="fadeInUp"
              >
                <div className="w-16 h-16 bg-accent-yellow border border-border-color rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4">
                  Solar &amp; Climate Systems
                </h3>
                <p className="text-text-muted mb-6">
                  Tropical building science that integrates solar-lithium
                  storage, passive cooling thermal mass, and pure water autonomy.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Architectural Solar-Lithium Microgrids
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Automated Borehole RO + UV Plants
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Harmattan HEPA Air Filtration
                  </li>
                </ul>
              </div>

              {/* Focus 3 */}
              <div
                className="bg-bg-secondary border border-border-color p-8 lg:p-10 hover:bg-bg-tertiary hover:shadow-card transition-all duration-300 group"
                data-animation-on-scroll="fadeInUp"
              >
                <div className="w-16 h-16 bg-accent-yellow border border-border-color rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-4">
                  Off-Grid &amp; Commercial
                </h3>
                <p className="text-text-muted mb-6">
                  High-uptime tech campuses and off-grid coastal retreats built
                  to eliminate diesel operating costs and withstand marine air.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Ilashe &amp; Coastal Off-Grid Retreats
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Zero-Downtime Tech Campuses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-yellow">•</span>
                    Boutique Hospitality &amp; Studios
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="flex flex-col lg:flex-row justify-between items-center py-24 px-6 lg:px-3xl bg-text-dark text-bg-primary"
          data-animation-on-scroll="fadeInUp"
        >
          <div
            className="hidden lg:block text-xs font-medium uppercase tracking-wider transform rotate-180"
            style={{ writingMode: 'vertical-rl' }}
          >
            My Approach
          </div>

          <div className="w-full lg:w-4/5 flex flex-col lg:flex-row border border-bg-primary">
            {/* Step 1 */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col items-center text-center gap-5 border-b lg:border-b-0 lg:border-r border-bg-primary">
              <div className="font-serif text-4xl">01</div>
              <h5 className="text-sm font-medium uppercase tracking-wider">
                Listen &amp; Audit
              </h5>
              <p className="text-bg-primary opacity-80">
                Analyzing your plot topography, flood datum, acoustic
                environment, and 24-hour energy load profile across Lagos or
                Abuja.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col items-center text-center gap-5 border-b lg:border-b-0 lg:border-r border-bg-primary">
              <div className="font-serif text-4xl">02</div>
              <h5 className="text-sm font-medium uppercase tracking-wider">
                Explore
              </h5>
              <p className="text-bg-primary opacity-80">
                Co-designing tropical spatial form, passive cooling geometry,
                and invisible solar-lithium and KNX smart infrastructure.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col items-center text-center gap-5 border-b lg:border-b-0 lg:border-r border-bg-primary">
              <div className="font-serif text-4xl">03</div>
              <h5 className="text-sm font-medium uppercase tracking-wider">
                Refine &amp; BOQ
              </h5>
              <p className="text-bg-primary opacity-80">
                Locking in ARCON/COREN drawings, inflation-protected Bills of
                Quantities (BOQ), and local timber and granite specifications.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col items-center text-center gap-5">
              <div className="font-serif text-4xl">04</div>
              <h5 className="text-sm font-medium uppercase tracking-wider">
                Build
              </h5>
              <p className="text-bg-primary opacity-80">
                Guiding construction with bi-weekly 3D drone telemetry for
                Diaspora clients and a 72-hour off-grid stress test before
                handover.
              </p>
            </div>
          </div>

          <div
            className="hidden lg:block text-xs font-medium uppercase tracking-wider"
            style={{ writingMode: 'vertical-rl' }}
          >
            My Approach
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-24 px-6 lg:px-3xl"
          data-animation-on-scroll="fadeInUp"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h5 className="inline-block text-xs font-medium uppercase tracking-wider pb-2 border-b border-dashed border-border-color mb-3">
                Client Feedback
              </h5>
              <h2 className="font-serif text-4xl lg:text-6xl">
                What Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="bg-bg-secondary border border-border-color p-8 lg:p-10"
                  data-animation-on-scroll="fadeInUp"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-sm border border-border-color bg-accent-yellow flex items-center justify-center font-serif text-xl shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-text-muted uppercase tracking-wider">
                        {item.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-text-muted italic mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex gap-1 text-accent-yellow">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-24 px-6 lg:px-3xl bg-text-dark text-bg-primary text-center"
          data-animation-on-scroll="fadeInUp"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-6xl mb-6">
              Let&apos;s Create Something Meaningful
            </h2>
            <p className="text-lg text-bg-primary opacity-80 mb-8 max-w-2xl mx-auto">
              I&apos;m currently accepting a limited number of smart-villa and
              retrofit commissions across Lagos and Abuja for 2025–2026. If you
              have a plot or project in mind, I&apos;d love to hear about it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenInquire()}
                className="inline-flex items-center gap-2 bg-accent-yellow text-text-dark font-medium text-sm uppercase tracking-wider px-8 py-4 border border-border-color hover:bg-accent-hover hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                Get in Touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
              <a
                href="#work"
                onClick={() => setShowAllProjects(true)}
                className="inline-flex items-center gap-2 bg-transparent text-bg-primary font-medium text-sm uppercase tracking-wider px-8 py-4 border border-bg-primary hover:bg-bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                View All Work
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="flex flex-col lg:flex-row justify-between items-start gap-10 px-6 lg:px-3xl"
        data-editable="footer"
      >
        <nav className="flex flex-col gap-3 pt-3xl w-full lg:w-auto">
          <a
            href="#work"
            className="text-xs font-medium uppercase tracking-wider hover:underline"
          >
            Selected Work
          </a>
          <a
            href="#about"
            className="text-xs font-medium uppercase tracking-wider hover:underline"
          >
            About Me
          </a>
          <a
            href="#process"
            className="text-xs font-medium uppercase tracking-wider hover:underline"
          >
            My Approach
          </a>
        </nav>

        <div className="flex flex-col items-center text-center gap-3 py-3xl px-2xl border-l-0 lg:border-l border-r-0 lg:border-r border-border-color flex-grow w-full lg:w-auto">
          <h3
            data-editable="text"
            data-path="footer.brand.name"
            className="font-serif text-3xl"
          >
            Tunde Bakare
          </h3>

          <div className="flex gap-3 mb-3">
            <a
              href="#work"
              aria-label="Dribbble"
              className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z"></path>
              </svg>
            </a>
            <a
              href="#work"
              aria-label="Behance"
              className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"></path>
              </svg>
            </a>
            <a
              href="#about"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>

          <h6
            data-editable="text"
            data-path="footer.brand.tagline"
            className="text-xs font-medium uppercase tracking-wider"
          >
            Smart-Home &amp; Solar-Autonomous Architect
          </h6>
          <p
            data-editable="text"
            data-path="footer.brand.description"
            className="text-text-muted max-w-md"
          >
            Crafting uninterrupted, zero-diesel architecture that harmonizes
            with tropical nature and elevates modern Nigerian living. Based in
            Lagos &amp; Abuja.
          </p>
        </div>

        <nav className="flex flex-col lg:items-end gap-3 pb-12 lg:pt-3xl w-full lg:w-auto">
          <button
            type="button"
            onClick={() => handleOpenInquire()}
            className="text-xs font-medium uppercase tracking-wider hover:underline cursor-pointer text-left lg:text-right"
          >
            Get in Touch
          </button>
          <a
            href="#work"
            onClick={() => setShowAllProjects(true)}
            className="text-xs font-medium uppercase tracking-wider hover:underline"
          >
            All Projects
          </a>
          <a
            href="mailto:studio@tundebakare.ng"
            className="text-xs font-medium uppercase tracking-wider hover:underline"
          >
            studio@tundebakare.ng
          </a>
        </nav>
      </footer>

      {/* Fullscreen Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        onInquireProject={(title, cat) => handleOpenInquire(title, cat)}
        allProjects={PROJECTS}
      />

      {/* Interactive Studio Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialProjectRef={inquiryProjectRef}
        initialCategory={inquiryCategory}
      />
    </div>
  );
}
