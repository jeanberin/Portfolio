import type { SVGProps } from 'react';

const MsSqlServerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5 4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2H5V4zm0 14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2H5v2zm14-3V7c0-1.1-.9-2-2-2h-1.5v2H17v2h-2V7h-2v2h-2V7H9v2H7V7H5.5v2H4V7c0-1.1-.9-2-2-2S0 5.9 0 7v10c0 1.1.9 2 2 2s2-.9 2-2V9h1.5v10H12v-2h-1.5V9H12v2h2V9h1.5v2H17V9h2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2s-2-.9-2-2v-2h-1.5v2H15v2h4c1.1 0 2-.9 2-2v-2h-2z M12 13.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 4.5 12 4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
    <path fill="#cc2927" d="M4.5 9.5h3V8h-3zM4.5 12.5h3V11h-3zM4.5 15.5h3V14h-3z" />
    <text x="12" y="19" fontFamily="Arial, sans-serif" fontSize="4" fill="white" textAnchor="middle" dominantBaseline="middle">SQL</text>
  </svg>
);
export default MsSqlServerIcon;