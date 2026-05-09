// Inline SVG icon components — stroke-based, sized via parent
const Icon = ({ children, size = 22, stroke = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke}
    strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

const ArrowUpRight = (p) => (
  <Icon {...p}><path d="M7 17L17 7M9 7h8v8" /></Icon>
);
const ArrowRight = (p) => (
  <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
);
const Download = (p) => (
  <Icon {...p}><path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" /></Icon>
);
const Copy = (p) => (
  <Icon {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></Icon>
);
const Mail = (p) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Icon>
);
const Check = (p) => (
  <Icon {...p}><path d="M20 6L9 17l-5-5" /></Icon>
);

// Skill icons — stylized, monoline
const FlutterIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M14.5 3L4 13.5l3 3L20.5 3h-6zM14.5 13L9 18.5 14.5 24h6L15 18.5l5.5-5.5h-6z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const FirebaseIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 18l3-13 3 5M5 18l11-12-2 14L5 18zM11 10l3 5"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);
const DartIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12L12 5l7 7-7 7-7-7zM12 5v14M5 12h14"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const ApiIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.5 6h7M6 8.5v7M18 8.5v7M8.5 18h7M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

// Social icons
const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49C19.14 20.62 22 16.78 22 12.25 22 6.58 17.52 2 12 2z"/>
  </svg>
);
const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 17.34H5.67V9.67h2.67v7.67zM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 8.84h-2.67v-3.74c0-.89-.02-2.04-1.24-2.04-1.25 0-1.43.97-1.43 1.97v3.81h-2.66V9.67h2.55v1.05h.04c.36-.67 1.22-1.38 2.5-1.38 2.68 0 3.18 1.76 3.18 4.06v3.94z"/>
  </svg>
);
const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2H21l-6.55 7.49L22 22h-6.83l-4.78-6.27L4.74 22H2l7.05-8.06L2 2h6.97l4.32 5.71L18.24 2zm-1.04 18h1.6L7.16 4H5.43l11.77 16z"/>
  </svg>
);
const DribbbleIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 3.5c2.4 3 4.5 6.5 6 11 1 3 1.5 5.5 1.5 7" />
    <path d="M3.5 9.5c4 0 9-.5 13-2.5M3 14c5-1.5 11-1 16 1.5M21 9c-3.5 0-6-.5-9-2" />
  </svg>
);

window.Icons = {
  ArrowUpRight, ArrowRight, Download, Copy, Mail, Check,
  FlutterIcon, FirebaseIcon, DartIcon, ApiIcon,
  GitHubIcon, LinkedInIcon, XIcon, DribbbleIcon,
};
