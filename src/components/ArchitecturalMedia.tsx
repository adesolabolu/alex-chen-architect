import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  svgType?: 'hillside' | 'loft' | 'cabin' | 'library' | 'coastal' | 'pavilion' | 'portrait';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  svgType = 'hillside',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col justify-between bg-[#e0ddd4] text-[#2b2b2b] p-6 overflow-hidden select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <ArchitecturalDiagram svgType={svgType} className="w-full h-full opacity-80" />
        <div className="relative z-10 flex items-end justify-between border-t border-[#2b2b2b]/20 pt-3 mt-auto">
          <div>
            <div className="font-serif text-lg leading-tight">{fallbackTitle || alt}</div>
            {fallbackSubtitle && (
              <div className="text-xs text-[#4e4e4e] mt-0.5">{fallbackSubtitle}</div>
            )}
          </div>
          <span className="font-mono text-[11px] text-[#4e4e4e] tabular-nums">ARCON · 1:100</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

interface ArchitecturalDiagramProps {
  svgType: 'hillside' | 'loft' | 'cabin' | 'library' | 'coastal' | 'pavilion' | 'portrait';
  className?: string;
}

export const ArchitecturalDiagram: React.FC<ArchitecturalDiagramProps> = ({
  svgType,
  className = 'w-full h-64',
}) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Subtle architectural grid lines */}
      <defs>
        <pattern id={`arch-grid-${svgType}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#2b2b2b"
            strokeWidth="0.5"
            strokeOpacity="0.12"
          />
        </pattern>
      </defs>
      <rect width="800" height="450" fill={`url(#arch-grid-${svgType})`} />

      {/* Equatorial solar path arc + solar microgrid node */}
      <path
        d="M 90 380 Q 400 30 710 380"
        stroke="#2b2b2b"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.45"
      />
      <circle cx="530" cy="134" r="15" fill="#fff388" stroke="#2b2b2b" strokeWidth="1.5" />

      {svgType === 'hillside' && (
        <g>
          {/* Elevated Flood-Safe Podium Line */}
          <path d="M 40 380 L 760 380" stroke="#2b2b2b" strokeWidth="2" />
          {/* Cantilevered Solar Roof & Smart Villa Volumes */}
          <rect
            x="200"
            y="205"
            width="340"
            height="85"
            fill="#ebe9e3"
            stroke="#2b2b2b"
            strokeWidth="2"
          />
          <polygon
            points="160,205 580,165 580,190 160,205"
            fill="#fff388"
            stroke="#2b2b2b"
            strokeWidth="1.5"
          />
          <rect
            x="240"
            y="290"
            width="310"
            height="90"
            fill="#d8d5cb"
            stroke="#2b2b2b"
            strokeWidth="2"
          />
          {/* Motorized Iroko Louvers */}
          <line x1="250" y1="205" x2="250" y2="290" stroke="#2b2b2b" strokeWidth="1.2" />
          <line x1="290" y1="205" x2="290" y2="290" stroke="#2b2b2b" strokeWidth="1.2" />
          <line x1="330" y1="205" x2="330" y2="290" stroke="#2b2b2b" strokeWidth="1.2" />
          <line x1="370" y1="205" x2="370" y2="290" stroke="#2b2b2b" strokeWidth="1.2" />
          <line x1="410" y1="205" x2="410" y2="290" stroke="#2b2b2b" strokeWidth="1.2" />
        </g>
      )}

      {svgType === 'loft' && (
        <g>
          <rect
            x="160"
            y="130"
            width="480"
            height="250"
            fill="#ebe9e3"
            stroke="#2b2b2b"
            strokeWidth="2.5"
          />
          {/* Acoustic Baffle Ceiling & Lithium Power Core */}
          <rect
            x="220"
            y="145"
            width="360"
            height="14"
            fill="#fff388"
            stroke="#2b2b2b"
            strokeWidth="1.5"
          />
          <rect
            x="380"
            y="231"
            width="130"
            height="149"
            fill="#d8d5cb"
            stroke="#2b2b2b"
            strokeWidth="1.5"
          />
          {/* Double-skin STC-64 acoustic curtain wall */}
          <rect x="180" y="165" width="75" height="190" stroke="#2b2b2b" strokeWidth="1.5" />
          <rect x="550" y="165" width="60" height="190" stroke="#2b2b2b" strokeWidth="1.5" />
          <line x1="120" y1="380" x2="680" y2="380" stroke="#2b2b2b" strokeWidth="2" />
        </g>
      )}

      {svgType === 'cabin' && (
        <g>
          <line x1="100" y1="370" x2="700" y2="370" stroke="#2b2b2b" strokeWidth="2" />
          {/* Cantilevered Bifacial Solar Canopy */}
          <rect
            x="170"
            y="165"
            width="460"
            height="16"
            fill="#fff388"
            stroke="#2b2b2b"
            strokeWidth="2"
          />
          <rect
            x="220"
            y="200"
            width="360"
            height="170"
            fill="#ebe9e3"
            stroke="#2b2b2b"
            strokeWidth="2"
          />
          <line x1="340" y1="200" x2="340" y2="370" stroke="#2b2b2b" strokeWidth="1.5" />
          <line x1="460" y1="200" x2="460" y2="370" stroke="#2b2b2b" strokeWidth="1.5" />
        </g>
      )}

      {svgType === 'library' && (
        <g>
          <line x1="80" y1="380" x2="720" y2="380" stroke="#2b2b2b" strokeWidth="2" />
          {/* Elevated +1.8m Flood-Resilient Podium */}
          <rect
            x="160"
            y="325"
            width="460"
            height="55"
            fill="#d8d5cb"
            stroke="#2b2b2b"
            strokeWidth="2"
          />
          <rect
            x="180"
            y="195"
            width="420"
            height="130"
            fill="#ebe9e3"
            stroke="#2b2b2b"
            strokeWidth="2"
          />
          <rect
            x="160"
            y="180"
            width="460"
            height="15"
            fill="#fff388"
            stroke="#2b2b2b"
            strokeWidth="1.5"
          />
        </g>
      )}

      {(svgType === 'coastal' || svgType === 'pavilion' || svgType === 'portrait') && (
        <g>
          <path d="M 80 375 L 720 375" stroke="#2b2b2b" strokeWidth="2" />
          {/* Marine concrete piers */}
          <line x1="220" y1="320" x2="220" y2="375" stroke="#2b2b2b" strokeWidth="4" />
          <line x1="390" y1="320" x2="390" y2="375" stroke="#2b2b2b" strokeWidth="4" />
          <line x1="540" y1="320" x2="540" y2="375" stroke="#2b2b2b" strokeWidth="4" />
          <rect
            x="180"
            y="210"
            width="400"
            height="110"
            fill="#ebe9e3"
            stroke="#2b2b2b"
            strokeWidth="2"
          />
          <polygon
            points="155,210 610,175 610,210"
            fill="#fff388"
            stroke="#2b2b2b"
            strokeWidth="1.5"
          />
        </g>
      )}

      {/* Nigerian Autonomous Systems Telemetry Callouts */}
      <g className="font-mono" fill="#2b2b2b" fontSize="10">
        <text x="48" y="195">SOLAR PV ARRAY (32–40 kWp)</text>
        <text x="48" y="285">STC-64 ACOUSTIC ENVELOPE</text>
        <text x="48" y="368">+1.80m FLOOD-SAFE DATUM</text>
        <text x="560" y="138">EQUATORIAL SUN 82°</text>
      </g>
    </svg>
  );
};
