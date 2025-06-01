import type { SVGProps } from 'react';

const BootstrapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#7952B3" d="M0 0h24v24H0z" />
    <path
      fill="#fff"
      d="M7.05 1.95h9.9c.99 0 1.8.81 1.8 1.8v16.5c0 .99-.81 1.8-1.8 1.8h-9.9c-.99 0-1.8-.81-1.8-1.8V3.75c0-.99.81-1.8 1.8-1.8zm.45 3.15v13.8h9V5.1h-9zm4.5 2.4c1.05 0 1.91.37 2.52.99.58.6.9 1.4.9 2.34 0 1.01-.35 1.84-.99 2.46-.6.6-1.4.92-2.43.92h-1.5V16.5h-2.1V7.5h3.6zm0 1.71h-1.5v3.09h1.5c.71 0 1.23-.21 1.59-.63.33-.42.51-.99.51-1.62 0-.6-.17-1.14-.54-1.5-.39-.39-.9-.54-1.56-.54z"
    />
  </svg>
);
export default BootstrapIcon;