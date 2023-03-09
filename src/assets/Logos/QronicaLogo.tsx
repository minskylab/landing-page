type QronicaLogoProps = {
  scale?: number;
  fillColorFront?: string;
  fillColorBack?: string;
};

export default function QronicaLogo({
  scale = 1,
  fillColorFront,
  fillColorBack,
}: QronicaLogoProps) {
  return (
    <svg
      width={196 * scale}
      height={415 * scale}
      viewBox="0 0 196 415"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M177.371 396.342C177.37 332.968 142.262 257.096 99.6426 193.801C57.0232 130.506 19.0317 85.9204 19.0317 19.6619"
        stroke={fillColorBack ?? "#86C8E4"}
        strokeWidth="35.4636"
        strokeLinecap="square"
      />
      <path
        d="M18.9804 18.0632C18.9804 123.702 18.4102 237.358 18.4102 342.997C19.2322 358.247 19.2322 377.065 19.2322 395.883C19.2322 398.15 19.7863 391.384 20.2042 389.161C23.7249 315.091 54.1422 255.624 96.7615 192.329C139.381 129.034 157.58 93.314 165.135 26.4712C165.328 24.7624 166.681 15.8488 166.725 18.9031C168.522 143.16 177.996 271.377 177.996 395.883"
        stroke={fillColorFront ?? "#2E6ECD"}
        strokeWidth="35.4636"
        strokeLinecap="square"
      />
    </svg>
  );
}
