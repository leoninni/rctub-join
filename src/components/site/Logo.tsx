interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 338 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RCTUB"
      role="img"
    >
      {/* Base horizontal platform — starts before "R" */}
      <rect x="2" y="74" width="43" height="5" rx="2.5" fill="white" />

      {/* A-frame mount legs */}
      <line x1="12" y1="74" x2="20" y2="63" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <line x1="36" y1="74" x2="28" y2="63" stroke="white" strokeWidth="5" strokeLinecap="round" />

      {/* Base pivot */}
      <circle cx="24" cy="62" r="4.5" fill="white" />

      {/* Lower arm segment — rises above "R" */}
      <line x1="24" y1="57" x2="88" y2="11" stroke="white" strokeWidth="8" strokeLinecap="round" />

      {/* Elbow joint — large */}
      <circle cx="89" cy="10" r="11" stroke="white" strokeWidth="6" fill="#1a1a1a" />
      <circle cx="89" cy="10" r="4" fill="white" />

      {/* Upper arm segment */}
      <line x1="98" y1="16" x2="126" y2="51" stroke="white" strokeWidth="7" strokeLinecap="round" />

      {/* Wrist joint — smaller */}
      <circle cx="128" cy="53" r="8" stroke="white" strokeWidth="5" fill="#1a1a1a" />
      <circle cx="128" cy="53" r="3" fill="white" />

      {/* Gripper upper finger */}
      <path
        d="M133 48 Q146 39 152 50"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Gripper lower finger */}
      <path
        d="M133 58 Q146 68 152 61"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Letter R — sits after arm base, arm rises above it */}
      <text
        x="45"
        y="72"
        fontFamily="'Space Grotesk', 'Arial', sans-serif"
        fontSize="62"
        fontWeight="700"
        fill="white"
        letterSpacing="-1"
      >
        R
      </text>

      {/* Letters TUB — after the C formed by the arm claw */}
      <text
        x="156"
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
