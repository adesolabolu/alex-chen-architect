import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight, Compass, Layers, Check } from 'lucide-react';
import { Project } from '../data/projects';
import { ResilientImage, ArchitecturalDiagram } from './ArchitecturalMedia';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onInquireProject: (projectTitle: string, category: string) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onInquireProject,
  allProjects,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'photo' | 'section'>('photo');

  useEffect(() => {
    setActiveImageIndex(0);
    setViewMode('photo');
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2b2b2b]/80 backdrop-blur-xs p-4 lg:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-bg-primary border border-border-color shadow-hover my-auto overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header Bar */}
        <div className="flex items-center justify-between gap-4 px-6 lg:px-10 py-4 bg-bg-secondary border-b border-border-color shrink-0">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span className="font-medium text-text-dark">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Segmented Switch */}
            <div className="hidden sm:flex items-center bg-bg-primary border border-border-color p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('photo')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'photo'
                    ? 'bg-text-dark text-bg-primary'
                    : 'text-text-muted hover:text-text-dark'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Photography
              </button>
              <button
                type="button"
                onClick={() => setViewMode('section')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'section'
                    ? 'bg-text-dark text-bg-primary'
                    : 'text-text-muted hover:text-text-dark'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                Microgrid &amp; Section
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="w-10 h-10 flex items-center justify-center bg-bg-primary border border-border-color text-text-dark hover:bg-accent-yellow transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 lg:p-10 space-y-10">
          {/* Media Stage */}
          <div className="space-y-4">
            <div className="relative bg-bg-secondary border border-border-color overflow-hidden h-72 sm:h-96 lg:h-[460px]">
              {viewMode === 'photo' ? (
                <ResilientImage
                  src={project.galleryUrls[activeImageIndex] || project.imageUrl}
                  alt={`${project.title} — View ${activeImageIndex + 1}`}
                  fallbackTitle={project.title}
                  fallbackSubtitle={project.location}
                  svgType={project.architecturalSvgType}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-between p-6 bg-bg-secondary">
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                    <span>SOLAR-LITHIUM MICROGRID &amp; ACOUSTIC SECTION</span>
                    <span className="tabular-nums">ARCON DWG NO. TB-{project.year}-08</span>
                  </div>
                  <ArchitecturalDiagram
                    svgType={project.architecturalSvgType}
                    className="w-full h-72 lg:h-80"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-text-muted border-t border-border-color/20 pt-3">
                    <span>Equatorial Solar Array Tilt: 8° South-West</span>
                    <span>Inverter Transfer Latency: 0 ms (Pure Sine Wave)</span>
                  </div>
                </div>
              )}

              {project.award && (
                <div className="absolute bottom-4 left-4 bg-accent-yellow border border-border-color px-4 py-2 shadow-card">
                  <div className="text-xs font-medium text-text-dark">{project.award}</div>
                </div>
              )}
            </div>

            {/* Thumbnail Strip & View Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.galleryUrls.map((url, idx) => (
                  <button
                    key={url}
                    type="button"
                    onClick={() => {
                      setViewMode('photo');
                      setActiveImageIndex(idx);
                    }}
                    className={`relative w-20 h-14 border transition-all overflow-hidden cursor-pointer ${
                      viewMode === 'photo' && activeImageIndex === idx
                        ? 'border-border-color ring-2 ring-accent-yellow'
                        : 'border-border-color/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ResilientImage
                      src={url}
                      alt={`${project.title} thumbnail ${idx + 1}`}
                      svgType={project.architecturalSvgType}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setViewMode('section')}
                  className={`h-14 px-4 border text-xs font-mono flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    viewMode === 'section'
                      ? 'bg-accent-yellow border-border-color text-text-dark font-medium'
                      : 'bg-bg-secondary border-border-color/40 text-text-muted hover:text-text-dark'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  System Schematic
                </button>
              </div>

              <div className="text-xs text-text-muted font-mono tabular-nums">
                {project.certification}
              </div>
            </div>
          </div>

          {/* Title & Architectural Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2
                  id="modal-project-title"
                  className="font-serif text-4xl lg:text-5xl text-text-dark mb-3"
                >
                  {project.title}
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">{project.summary}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border-color/20">
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-text-dark">
                    Urban &amp; Climate Challenge
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 text-text-dark">
                    Autonomous Engineering
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Material Palette */}
              <div className="pt-4 border-t border-border-color/20">
                <h4 className="font-serif text-2xl mb-3 text-text-dark">
                  Nigerian &amp; Tropical Material Palette
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.materials.map((mat) => (
                    <div key={mat} className="flex items-center gap-2.5 text-sm text-text-muted">
                      <Check className="w-4 h-4 text-text-dark shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications & Autonomous Telemetry */}
            <div className="lg:col-span-5 bg-bg-secondary border border-border-color p-6 space-y-6">
              <div>
                <h4 className="font-serif text-2xl text-text-dark mb-4">Project Specifications</h4>
                <dl className="divide-y divide-border-color/15 text-sm">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="py-2.5 flex justify-between gap-4">
                      <dt className="text-text-muted">{spec.label}</dt>
                      <dd className="font-medium text-text-dark text-right tabular-nums">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="pt-4 border-t border-border-color/20">
                <h4 className="font-serif text-xl text-text-dark mb-3">
                  Autonomous Performance Telemetry
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-bg-primary border border-border-color/30 p-3">
                    <div className="text-text-muted mb-1">Solar-Lithium Plant</div>
                    <div className="font-mono font-medium text-text-dark tabular-nums">
                      {project.sustainabilityMetrics.solarMicrogrid}
                    </div>
                  </div>
                  <div className="bg-bg-primary border border-border-color/30 p-3">
                    <div className="text-text-muted mb-1">Diesel Independence</div>
                    <div className="font-mono font-medium text-text-dark tabular-nums">
                      {project.sustainabilityMetrics.dieselReduction}
                    </div>
                  </div>
                  <div className="bg-bg-primary border border-border-color/30 p-3">
                    <div className="text-text-muted mb-1">Acoustic Isolation</div>
                    <div className="font-mono font-medium text-text-dark tabular-nums">
                      {project.sustainabilityMetrics.acousticIsolation}
                    </div>
                  </div>
                  <div className="bg-bg-primary border border-border-color/30 p-3">
                    <div className="text-text-muted mb-1">Water Purification</div>
                    <div className="font-mono font-medium text-text-dark tabular-nums">
                      {project.sustainabilityMetrics.waterAutonomy}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onInquireProject(project.title, project.category)}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent-yellow text-text-dark font-medium text-sm px-6 py-3.5 border border-border-color hover:bg-accent-hover transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Commission a Similar System →
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer Navigation */}
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 bg-bg-secondary border-t border-border-color shrink-0">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="inline-flex items-center gap-2 text-xs font-medium text-text-dark hover:text-text-muted transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevProject.title}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="inline-flex items-center gap-2 text-xs font-medium text-text-dark hover:text-text-muted transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
