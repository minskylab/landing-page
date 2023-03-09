type VaxCaninaLogo = {
  scale?: number;
};

export default function VaxcaninaLogo({ scale = 1 }: VaxCaninaLogo) {
  return (
    <svg
      width={393 * scale}
      height={314 * scale}
      viewBox="0 0 393 314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="235.199" width="156.8" height="156.8" fill="#F52828" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M392.001 156.8C392.001 70.2018 321.799 0 235.201 0L235.201 156.8H392.001Z"
        fill="#FFA53A"
      />
      <rect x="235.199" y="156.8" width="156.8" height="156.8" fill="#FFA53A" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M235.2 313.6C235.223 313.6 235.247 313.6 235.27 313.6C321.836 313.562 392 243.375 392 156.8C392 156.8 392 156.8 392 156.8L235.2 156.8L235.2 313.6Z"
        fill="#F52828"
      />
      <path
        d="M0 156.8H235.2V313.6H95.6097C42.8059 313.6 0 270.794 0 217.99V156.8Z"
        fill="#F52828"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.4012 156.8C78.4012 243.398 148.603 313.6 235.201 313.6L235.201 156.8L78.4012 156.8Z"
        fill="#FFA53A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.4024 156.753C78.4277 70.1765 148.62 4.27071e-05 235.202 3.89224e-05L235.202 156.8L78.4023 156.8"
        fill="#F52828"
      />
      <circle
        cx="39.2"
        cy="39.2"
        r="39.2"
        transform="matrix(-1 0 0 1 210.34 53.5415)"
        fill="#FFA53A"
      />
    </svg>
  );
}
