interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 300 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RCTUB"
      role="img"
    >
      {/* Letter R */}
      <text
        x="0"
        y="72"
        fontFamily="'Space Grotesk', 'Arial', sans-serif"
        fontSize="62"
        fontWeight="700"
        fill="white"
        letterSpacing="-1"
      >
        R
      </text>

      {/* Base horizontal platform */}
      <rect x="53" y="74" width="40" height="5" rx="2.5" fill="white" />

      {/* Base A-frame mount legs */}
      <line x1="63" y1="74" x2="70" y2="63" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <line x1="82" y1="74" x2="75" y2="63" strokeWidth="5" stroke="white" strokeLinecap="round" />

      {/* Base pivot */}
      <circle cx="72" cy="62" r="4" fill="white" />

      {/* Lower arm segment */}
      <line x1="72" y1="58" x2="100" y2="13" stroke="white" strokeWidth="8" strokeLinecap="round" />

      {/* Elbow joint — large */}
      <circle cx="100" cy="12" r="11" stroke="white" strokeWidth="6" fill="#1a1a1a" />
      <circle cx="100" cy="12" r="4" fill="white" />

      {/* Upper arm segment */}
      <line x1="109" y1="18" x2="133" y2="51" stroke="white" strokeWidth="7" strokeLinecap="round" />

      {/* Wrist joint — smaller */}
      <circle cx="135" cy="53" r="8" stroke="white" strokeWidth="5" fill="#1a1a1a" />
      <circle cx="135" cy="53" r="3" fill="white" />

      {/* Gripper upper finger */}
      <path
        d="M140 48 Q152 39 157 50"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Gripper lower finger */}
      <path
        d="M140 58 Q152 69 157 61"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Letters TUB */}
      <text
        x="155"
        y="72"
        fontFamily="'Space Grotesk', 'Arial', sans-serif"
        fontSize="62"
        fontWeight="700"
        fill="white"
        letterSpacing="-1"
      >
        TUB
      </text>
    </svg>
  );
}
