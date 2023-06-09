type TeleusLogoProps = {
  scale?: number;
};

export default function TeleusLogo({ scale = 1 }: TeleusLogoProps) {
  return (
    <svg
      width={423 * scale}
      height={341 * scale}
      viewBox="0 0 423 341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M422.32 235.218C422.32 293.528 375.05 340.798 316.74 340.798V340.798C258.43 340.798 211.16 293.528 211.16 235.218L211.16 210.507L422.32 210.507L422.32 235.218Z"
        fill="#2CCEBE"
      />
      <path
        d="M130.516 130.29H422.32C422.32 58.333 363.886 3.23264e-05 291.804 3.23264e-05L0 0C0 71.9573 58.4341 130.29 130.516 130.29Z"
        fill="#FFC83D"
      />
    </svg>
  );
}
