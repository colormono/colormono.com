const LinkedinIcon = ({ href, children }) => (
  <>
    <span className="sr-only">Linkedin</span>
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </g>
    </svg>
  </>
);

export default LinkedinIcon;
