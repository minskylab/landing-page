type DeltaIllustrationProps = {
  scale?: number;
};

export const DeltaIllustration = ({ scale = 1 }: DeltaIllustrationProps) => {
  return (
    <svg
      width={scale * 43}
      height={scale * 52}
      viewBox="0 0 43 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.1836 23.5807C37.1836 23.5807 30.2513 63.5936 1.43872 47.5884C-5.4961 35.8512 18.0748 30.3312 11.0435 20.913C3.8792 11.3173 14.2242 1.0988 32.9155 0.639248C51.6062 0.179751 37.1836 23.5807 37.1836 23.5807Z"
        fill="#FF9D43"
        fillOpacity="0.26"
      />
      <path
        d="M28.7549 13.4836C28.7549 13.4836 23.805 7.10146 17.3707 8.99229C11.7112 10.656 10.5946 15.3606 19.0641 19.1561C39.2408 24.8191 24.614 51.8822 14.8624 42.7915C6.77952 35.2565 15.1192 27.3913 23.5547 23.1736"
        stroke="#EA7E3C"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};
