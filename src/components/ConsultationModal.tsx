import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectRef?: string;
  initialCategory?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialProjectRef = '',
  initialCategory = 'Autonomous Smart Villa',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Ikoyi / Victoria Island, Lagos');
  const [projectType, setProjectType] = useState(
    initialCategory || 'Autonomous Smart Villa'
  );
  const [budgetRange, setBudgetRange] = useState('₦450M – ₦950M ($280k – $600k)');
  const [timeline, setTimeline] = useState('Q3 2025 (Dry Season Mobilization)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setProjectType(
        initialCategory === 'Smart Villa'
          ? 'Autonomous Smart Villa'
          : initialCategory === 'Acoustic Retrofit'
            ? 'Smart & Acoustic Retrofit'
            : initialCategory === 'Coastal Off-Grid'
              ? '100% Off-Grid Retreat'
              : initialCategory === 'Commercial Hub'
                ? 'Zero-Downtime Commercial Hub'
                : 'Autonomous Smart Villa'
      );
    }
    if (initialProjectRef) {
      setNotes(
        `Interested in discussing an autonomous smart project modelled after ${initialProjectRef}.`
      );
    }
  }, [initialProjectRef, initialCategory]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2b2b2b]/80 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-bg-primary border border-border-color shadow-hover p-6 lg:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-border-color/20">
          <div>
            <div className="text-xs text-text-muted mb-1">
              Lagos &amp; Abuja Studio · Diaspora Turnkey Commissions
            </div>
            <h2
              id="consultation-modal-title"
              className="font-serif text-3xl lg:text-4xl text-text-dark"
            >
              Book a Site &amp; Autonomy Audit
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close consultation dialog"
            className="w-10 h-10 flex items-center justify-center bg-bg-secondary border border-border-color text-text-dark hover:bg-accent-yellow transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-6">
            <div className="w-14 h-14 mx-auto bg-accent-yellow border border-border-color flex items-center justify-center">
              <Check className="w-7 h-7 text-text-dark" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="font-serif text-3xl text-text-dark">
                Brief Received, {name || 'Client'}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Thank you for sharing your brief for a{' '}
                <strong>{projectType}</strong> in <strong>{location}</strong>.
                Tunde Bakare and our lead solar-automation engineer will reply
                to <strong>{email}</strong> within 48 hours to schedule your
                initial site or virtual Diaspora feasibility session.
              </p>
            </div>
            <div className="bg-bg-secondary border border-border-color p-4 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono tabular-nums">
              <div className="flex justify-between">
                <span className="text-text-muted">COMMISSION TYPE:</span>
                <span>{projectType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">BUDGET ENVELOPE:</span>
                <span>{budgetRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">MOBILIZATION:</span>
                <span>{timeline}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-text-dark text-bg-primary text-sm font-medium px-8 py-3.5 border border-border-color hover:bg-text-muted transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Return to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-6">
            {/* Typology Selector */}
            <div>
              <label className="block text-xs font-medium text-text-muted mb-2">
                Commission Typology
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Autonomous Smart Villa',
                  'Smart & Acoustic Retrofit',
                  '100% Off-Grid Retreat',
                  'Zero-Downtime Commercial Hub',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-3 py-2.5 text-xs font-medium border text-left transition-colors cursor-pointer ${
                      projectType === type
                        ? 'bg-accent-yellow border-border-color text-text-dark'
                        : 'bg-bg-secondary border-border-color/40 text-text-muted hover:text-text-dark'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="client-name"
                  className="block text-xs font-medium text-text-muted mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Engr. Babatunde Olatunji"
                  className="w-full bg-bg-secondary border border-border-color px-4 py-3 text-sm text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                />
              </div>
              <div>
                <label
                  htmlFor="client-email"
                  className="block text-xs font-medium text-text-muted mb-1.5"
                >
                  Email or WhatsApp Contact *
                </label>
                <input
                  id="client-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="babatunde@company.ng"
                  className="w-full bg-bg-secondary border border-border-color px-4 py-3 text-sm text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="site-location"
                  className="block text-xs font-medium text-text-muted mb-1.5"
                >
                  Site Location in Nigeria
                </label>
                <input
                  id="site-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ikoyi, Maitama, Lekki, Enugu..."
                  className="w-full bg-bg-secondary border border-border-color px-3.5 py-2.5 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                />
              </div>
              <div>
                <label
                  htmlFor="budget-select"
                  className="block text-xs font-medium text-text-muted mb-1.5"
                >
                  Target Budget (₦ / USD)
                </label>
                <select
                  id="budget-select"
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-bg-secondary border border-border-color px-3.5 py-2.5 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow tabular-nums"
                >
                  <option value="₦180M – ₦450M ($110k – $280k)">
                    ₦180M – ₦450M ($110k – $280k)
                  </option>
                  <option value="₦450M – ₦950M ($280k – $600k)">
                    ₦450M – ₦950M ($280k – $600k)
                  </option>
                  <option value="₦950M – ₦2.5B ($600k – $1.5M)">
                    ₦950M – ₦2.5B ($600k – $1.5M)
                  </option>
                  <option value="₦2.5B+ ($1.5M+ Commercial / Estate)">
                    ₦2.5B+ ($1.5M+ Commercial / Estate)
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeline-select"
                  className="block text-xs font-medium text-text-muted mb-1.5"
                >
                  Target Mobilization
                </label>
                <select
                  id="timeline-select"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-bg-secondary border border-border-color px-3.5 py-2.5 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                >
                  <option value="Immediate (Site Ready)">
                    Immediate (Site Ready)
                  </option>
                  <option value="Q3 2025 (Dry Season Mobilization)">
                    Q3 2025 (Dry Season Mobilization)
                  </option>
                  <option value="Q1 2026 (Diaspora Planning)">
                    Q1 2026 (Diaspora Planning)
                  </option>
                  <option value="Land / C-of-O Due Diligence">
                    Land / C-of-O Due Diligence
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="project-notes"
                className="block text-xs font-medium text-text-muted mb-1.5"
              >
                Power, Acoustic &amp; Spatial Goals
              </label>
              <textarea
                id="project-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us about your plot size, C-of-O status, desired zero-diesel solar autonomy, acoustic isolation needs, or Diaspora remote reporting requirements..."
                className="w-full bg-bg-secondary border border-border-color px-4 py-3 text-sm text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs text-text-muted">
                Victoria Island Studio:{' '}
                <strong className="text-text-dark">
                  studio@tundebakare.ng
                </strong>
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent-yellow text-text-dark font-medium text-sm px-8 py-3.5 border border-border-color hover:bg-accent-hover transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Request Autonomy Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
