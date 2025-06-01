import type { SVGProps } from 'react';

const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#F05032"
      d="M23.5 10.6L13.9 1a.9.9 0 00-1.3 0L3.1 10.6a.9.9 0 000 1.3L12.6 23a.9.9 0 001.3 0l9.6-11.1a.9.9 0 000-1.3zM13 20.9L13 13l-5 5-1.4-1.4 5-5-2.1-2.1 1.4-1.4 2.1 2.1V3.1l8.1 9.4-8.1 8.4z"
    />
    <circle fill="#F05032" cx="6.6" cy="11.4" r="2.1" />
    <circle fill="#F05032" cx="13" cy="11.4" r="2.1" />
    <circle fill="#F05032" cx="13" cy="4.8" r="2.1" />
  </svg>
);
export default GitIcon;