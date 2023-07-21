type AlphaIllustrationProps = {
  scale?: number;
};

export const AlphaIllustration = ({ scale = 1 }: AlphaIllustrationProps) => {
  return (
    <svg
      width={scale * 55}
      height={scale * 46}
      viewBox="0 0 55 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.4384 22.4292C56.4906 35.0435 49.755 37.0963 36.4042 40.3267C23.0527 43.5572 17.814 49.8344 10.7159 40.3268C3.48346 30.6398 17.5352 1.11477 36.4042 0.650844C55.2726 0.186979 50.3862 9.81475 53.4384 22.4292Z"
        fill="#FF9D43"
        fillOpacity="0.26"
      />
      <path
        d="M32.8464 3.34375C32.8464 3.34375 31.3231 11.4438 26.8133 17.7307C21.189 25.5707 17.554 33.7713 9.29755 31.7071C-0.296966 29.3085 1.31136 9.16875 12.4884 6.08544C27.5936 1.91833 28.1542 40.8422 44.9403 25.8195"
        stroke="#EA7E3C"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};
