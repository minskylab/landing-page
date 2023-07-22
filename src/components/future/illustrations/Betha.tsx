type BethaIllustrationProps = {
  scale?: number;
};

export const BethaIllustration = ({ scale = 1 }: BethaIllustrationProps) => {
  return (
    <svg
      width={scale * 35}
      height={scale * 55}
      viewBox="0 0 35 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.2863 9.22172C34.8683 15.76 35.2841 36.3763 29.5053 41.9902C22.6578 48.6423 9.41603 58.229 3.87925 50.8127C-1.76226 43.2565 -2.42373 22.2453 12.2807 14.6833C26.9851 7.12127 30.9054 -0.617923 33.2863 9.22172Z"
        fill="#FF9D43"
        fillOpacity="0.26"
      />
      <path
        d="M5.98779 37.6301C40.8482 33.1679 7.93651 23.2213 15.2217 20.3297C25.5519 16.2297 24.5708 2.5 20.7756 2.5C13.9538 3.83067 8.39122 31.0213 10.7206 51.6527"
        stroke="#EA7E3C"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};
