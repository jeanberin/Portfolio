import type { SVGProps } from 'react';

const HtmlCssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {/* HTML5 Logo Part */}
    <path fill="#E34F26" d="M1.6 21.3l1.8-20.4h17.2l-1.8 20.4-7.8 2.7z" />
    <path fill="#F16529" d="M12 2.7v19.4l6.6-2.3L19.8 2.7H12z" />
    {/* CSS3 Logo Part (simplified within HTML structure) */}
    <path fill="#EBEBEB" d="M12 10.2V7.7H8.1l.3 2.5H12zm0 5.1V12.8H11l-.2 2H9.4l-.3 3.4 3 .9v-2.6h-.1zm-.1-5.8l.1.1h4.2l-.3-3.3-.1-.1H12v3.2z" />
    <path fill="#FFFFFF" d="M12 10.2h3.7l-.3 2.5H12v-2.5zm0 7.7v2.6l3-.9.6-6.4H12v2.5h1.2l-.1 2.3H12z" />
  </svg>
);
export default HtmlCssIcon;