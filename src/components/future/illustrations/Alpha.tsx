type AlphaIllustrationProps = {
  scale?: number;
};

export const AlphaIllustration = ({ scale = 0.8 }: AlphaIllustrationProps) => {
  return (
    <svg
      width={scale * 68}
      height={scale * 63}
      viewBox="0 0 68 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.8252 31.1401C59.6588 42.8509 53.4056 44.7566 41.0111 47.7557C28.616 50.7548 23.7526 56.5823 17.1628 47.7557C10.4485 38.7626 23.4937 11.3525 41.0111 10.9218C58.5279 10.4911 53.9916 19.4293 56.8252 31.1401Z"
        fill="#FF9D43"
        fillOpacity="0.26"
      />
      <path
        d="M37.7085 13.4218C37.7085 13.4218 36.2943 20.9416 32.1076 26.7782C26.8861 34.0566 23.5115 41.6698 15.8465 39.7534C6.9392 37.5267 8.43231 18.8295 18.8087 15.9671C32.832 12.0984 33.3524 48.2342 48.9361 34.2876"
        stroke="#EA7E3C"
        strokeWidth="5.31988"
        strokeLinecap="round"
      />
    </svg>
  );
};
