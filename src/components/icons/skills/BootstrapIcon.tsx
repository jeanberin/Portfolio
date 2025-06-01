import type { SVGProps } from 'react';

const BootstrapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#7952B3" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" />
    <path
      fill="#FFFFFF"
      d="M7.469 6.406c.06-.585.527-1.007 1.079-.968h6.904c.585-.04.968.452.93.968l-.75 7.5c-.04.417-.377.75-.797.75h-1.688c.038.585-.345 1.078-.93 1.117L12 15.938l-.75-.157c-.585-.04-.968-.532-.93-1.117H7.735c-.42 0-.758-.333-.797-.75l-.75-7.5zM12 8.656H9.157l.262 2.625H12V8.656zm0 3.75H9.532l.263 2.625H12v-2.625zm.375-3.75v2.625h2.25l.263-2.625H12.375zm0 3.75v2.625h2.14l.263-2.625H12.375z"
    />
  </svg>
);
export default BootstrapIcon;
