import type { SVGProps } from 'react';

const SqlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path fill="#00758F" d="M64 10c-24.853 0-45 13.431-45 30v18c0 16.569 20.147 30 45 30s45-13.431 45-30V40c0-16.569-20.147-30-45-30zm0 10c19.33 0 35 8.954 35 20s-15.67 20-35 20-35-8.954-35-20 15.67-20 35-20z"/>
    <path fill="#00758F" d="M64 60c-24.853 0-45 13.431-45 30v18c0 16.569 20.147 30 45 30s45-13.431 45-30V90c0-16.569-20.147-30-45-30zm0 10c19.33 0 35 8.954 35 20s-15.67 20-35 20-35-8.954-35-20 15.67-20 35-20z"/>
    <text x="64" y="77" fontFamily="Arial, sans-serif" fontSize="30" fill="white" textAnchor="middle" fontWeight="bold">SQL</text>
  </svg>
);
export default SqlIcon;
