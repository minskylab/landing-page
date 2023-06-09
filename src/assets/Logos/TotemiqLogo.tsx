type TotemiqLogoProps = {
  scale?: number;
  fillColor?: string;
};

export default function TotemiqLogo({ scale = 1, fillColor }: TotemiqLogoProps) {
  return (
    <svg
      width={442 * scale}
      height={316 * scale}
      viewBox="0 0 442 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M126.781 63.6377L189.788 0.631348H315.8L252.794 63.6377H126.781Z" fill="#FFBA32" />
      <path
        d="M252.799 63.6377L189.793 126.644L189.793 252.657L252.799 189.65L252.799 63.6377Z"
        fill={fillColor ?? "#221C35"}
      />
      <path
        d="M441.811 0.631345L378.805 63.6377L378.805 189.65L441.811 126.644L441.811 0.631345Z"
        fill={fillColor ?? "#221C35"}
      />
      <path
        d="M63.7896 126.644L0.783206 189.65L0.783211 315.663L63.7896 252.657L63.7896 126.644Z"
        fill={fillColor ?? "#221C35"}
      />
      <path d="M315.811 252.657L252.804 315.663H126.791L189.798 252.657H315.811Z" fill="#FFBA32" />
      <path d="M0.783203 63.6377H126.796L0.783203 189.65V63.6377Z" fill="#EB1B22" />
      <path d="M441.816 252.656H315.804L441.816 126.644V252.656Z" fill="#4868D7" />
      <rect x="63.7871" y="126.644" width="126.013" height="126.013" fill="#4868D7" />
      <rect x="252.787" y="63.6377" width="126.013" height="126.013" fill="#EB1B22" />
    </svg>
  );
}
