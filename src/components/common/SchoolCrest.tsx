import React from 'react';

interface SchoolCrestProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({
  className = '',
  size = 'md',
  variant = 'color',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const getColors = () => {
    if (variant === 'light') {
      return {
        outer: '#ffffff',
        accent: '#fde047',
        fill: '#0f2942',
        inner: '#ffffff',
      };
    }
    if (variant === 'dark') {
      return {
        outer: '#1e293b',
        accent: '#b45309',
        fill: '#0f172a',
        inner: '#cbd5e1',
      };
    }
    return {
      outer: '#1e3a8a',
      accent: '#d97706',
      fill: '#0f2942',
      inner: '#ffffff',
    };
  };

  const colors = getColors();

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Shield Boundary */}
        <path
          d="M50 4C24 4 12 14 12 42C12 70 50 94 50 94C50 94 88 70 88 42C88 14 76 4 50 4Z"
          fill={colors.fill}
          stroke={colors.accent}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Shield Inset */}
        <path
          d="M50 9C28 9 17 18 17 42C17 66 50 87 50 87C50 87 83 66 83 42C83 18 72 9 50 9Z"
          stroke={colors.accent}
          strokeWidth="1.2"
          strokeDasharray="2 1.5"
          opacity="0.85"
        />

        {/* Heraldic Divider Cross */}
        <path
          d="M50 14V82M21 44H79"
          stroke={colors.accent}
          strokeWidth="1.5"
          opacity="0.45"
        />

        {/* Open Book of Knowledge in Top Left Quadrant */}
        <g transform="translate(28, 25) scale(0.65)">
          <path
            d="M2 18C5 15 11 15 15 17C19 15 25 15 28 18V5C25 2 19 2 15 4C11 2 5 2 2 5V18Z"
            fill="none"
            stroke={colors.inner}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 4V17" stroke={colors.inner} strokeWidth="1.5" />
        </g>

        {/* Torch / Flame of Enlightenment in Top Right Quadrant */}
        <g transform="translate(56, 24) scale(0.65)">
          <path
            d="M12 3C12 3 7 7 7 11C7 14 9.5 16 12 16C14.5 16 17 14 17 11C17 7 12 3 12 3Z"
            fill={colors.accent}
          />
          <path
            d="M10 16L9 24H15L14 16"
            fill={colors.inner}
            stroke={colors.accent}
            strokeWidth="1.5"
          />
        </g>

        {/* Star of Excellence in Bottom Left */}
        <polygon
          points="35,62 36.5,66 41,66 37.5,69 39,73 35,70 31,73 32.5,69 29,66 33.5,66"
          fill={colors.accent}
        />

        {/* Olive Laurel / Quill in Bottom Right */}
        <g transform="translate(58, 58) scale(0.6)">
          <path
            d="M2 22L16 8C18 6 21 7 21 7C21 7 22 10 20 12L6 26"
            stroke={colors.inner}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M15 11L17 13" stroke={colors.accent} strokeWidth="2" />
        </g>

        {/* Central Monogram 'R' for Right Choice */}
        <circle cx="50" cy="44" r="8.5" fill={colors.fill} stroke={colors.accent} strokeWidth="2" />
        <text
          x="50"
          y="48"
          fill={colors.accent}
          fontSize="11"
          fontWeight="bold"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          textAnchor="middle"
        >
          R
        </text>
      </svg>
    </div>
  );
};
