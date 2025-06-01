import type { SVGProps } from 'react';

const HtmlCssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    {/* HTML5 Shield */}
    <path fill="#E44D26" d="M6,5 L9.33,59 L32,64 L54.67,59 L58,5 L6,5 Z" />
    <path fill="#F16529" d="M32,9 L32,60.7 L50.67,56.4 L53.5,9 L32,9 Z" />
    <path fill="#EBEBEB" d="M32,26 L20.5,26 L20,20 L32,20 L32,14 L14,14 L14.5,20 L15.5,32 L32,32 L32,26 Z M32,44 L31.8,44.2 L24,42 L23.5,36 L18,36 L19,48 L31.8,51.5 L32,51.4 L32,44 Z" />
    {/* CSS3 Shield (simplified and smaller, next to HTML5) */}
    <path fill="#FFFFFF" d="M32,26 L32,32 L42.5,32 L41.5,42 L32,44 L32,51.4 L44.8,48 L46.5,20 L32,20 L32,14 L48,14 L47.5,20 L32,26 Z" />
  </svg>
);
export default HtmlCssIcon;
