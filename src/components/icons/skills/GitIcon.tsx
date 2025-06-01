import type { SVGProps } from 'react';

const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#F05033"
      d="M23.529 10.65L13.319.713a.93.93 0 00-1.316 0L2.471 10.65a.93.93 0 000 1.316l10.21 9.938a.93.93 0 001.316 0l9.532-10.296a.93.93 0 000-1.316zm-1.564.658L12.65 20.63l-8.84-8.634L12.65 3.42l8.59 8.888a.088.088 0 01-.001.122z"
    />
    <path
      fill="#F05033"
      d="M17.084 10.21l-3.567-3.567a.403.403 0 00-.57 0l-3.567 3.567a.403.403 0 10.57.57L12.65 8.078v7.844a.403.403 0 10.806 0V8.078l2.733 2.702a.403.403 0 00.57-.57z"
    />
    <circle fill="#F05033" cx="17.488" cy="10.78" r="2.148" />
    <circle fill="#F05033" cx="6.512" cy="13.22" r="2.148" />
    <circle fill="#F05033" cx="12.65" cy="6.078" r="2.148" />
  </svg>
);
export default GitIcon;
