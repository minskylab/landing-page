type GammaIllustrationProps = {
  scale?: number;
};

export const GammaIllustration = ({ scale = 1 }: GammaIllustrationProps) => {
  return (
    <svg
      width={scale * 34}
      height={scale * 52}
      viewBox="0 0 34 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.874 16.8395C35.4127 27.3314 19.6613 49.0937 8.5568 51.7806C-2.5482 54.4675 14.4606 31.74 8.55674 23.8321C2.54122 15.775 -1.29821 1.88226 16.2994 0.103584C26.8724 -0.965072 30.3354 6.34756 32.874 16.8395Z"
        fill="#FF9D43"
        fillOpacity="0.26"
      />
      <path
        d="M4.56571 7.74146C-0.0200458 21.8042 8.84314 28.8011 16.6112 25.7179C27.6263 21.3461 27.9321 6.08862 23.8853 6.08862C16.6113 7.50751 10.24 24.8942 12.7238 46.8933"
        stroke="#EA7E3C"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};
