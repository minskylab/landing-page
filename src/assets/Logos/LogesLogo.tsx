type LogesLogoProps = {
  scale?: number;
  fillPathColorMid?: string;
};

export default function LogesLogo({ scale = 1, fillPathColorMid }: LogesLogoProps) {
  return (
    <svg
      width={340 * scale}
      height={440 * scale}
      viewBox="0 0 340 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M168.791 74.1045C168.791 74.1045 72.3648 198.629 61.7029 213.713C45.2169 237.036 154.904 393.521 154.904 393.521C154.904 393.521 253.779 262.096 268.724 238.57C283.668 215.044 168.791 74.1045 168.791 74.1045Z"
        fill={fillPathColorMid ?? "#10382C"}
      />
      <path
        d="M82.123 318.504C110.373 276.905 157.786 253.706 208.055 252.517C241.806 251.718 259.553 248.285 268.7 238.923C268.7 238.923 184.736 359.413 155.39 411.989C153.301 415.732 149.382 418.97 144.115 421.77C88.4737 451.346 46.7221 370.632 82.123 318.504Z"
        fill="#36DCA0"
      />
      <path
        d="M248.104 134.303C219.905 175.682 172.688 198.786 122.625 199.858C88.5263 200.588 70.5583 203.95 61.377 213.37C61.377 213.37 145.61 92.808 174.942 40.1251C176.35 37.5956 178.654 35.21 181.696 32.9617C234.818 -6.30077 285.302 79.7161 248.104 134.303Z"
        fill="#4AE43D"
      />
    </svg>
  );
}