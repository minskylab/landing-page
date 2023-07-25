import { useMantineColorScheme } from "@mantine/core";
import {
  LogesLogo,
  NviLogo,
  PachatecLogo,
  QronicaLogo,
  RedmopLogo,
  TeleusLogo,
  TotemiqLogo,
  VaxcaninaLogo,
  WorkdystLogo,
} from "assets/Logos";

export const ProjectLogo = ({
  projectName,
  smallScreen,
}: {
  projectName: string;
  smallScreen: boolean;
}) => {
  const { colorScheme } = useMantineColorScheme();

  switch (projectName) {
    case "teleus":
      return <TeleusLogo scale={smallScreen ? 0.18 : 0.2} />;
    case "pachatec":
      return (
        <PachatecLogo
          scale={smallScreen ? 0.18 : 0.2}
          fillColor={colorScheme === "dark" ? "#245C4B" : undefined}
        />
      );
    case "nvi":
      return (
        <NviLogo
          scale={smallScreen ? 0.18 : 0.2}
          fillColor={colorScheme === "dark" ? "#F43D4E" : undefined}
        />
      );
    case "loges":
      return (
        <LogesLogo
          scale={smallScreen ? 0.18 : 0.2}
          fillPathColorMid={colorScheme === "dark" ? "#214a3e" : undefined}
        />
      );
    case "redmop":
      return <RedmopLogo scale={smallScreen ? 0.18 : 0.2} />;
    case "qronica":
      return (
        <QronicaLogo
          scale={smallScreen ? 0.18 : 0.2}
          fillColorFront={colorScheme === "dark" ? "#86C8E4" : undefined}
          fillColorBack={colorScheme === "dark" ? "#2E6ECD" : undefined}
        />
      );
    case "totemiq":
      return (
        <TotemiqLogo
          scale={smallScreen ? 0.18 : 0.2}
          fillColor={colorScheme === "dark" ? "#FFFFFF" : undefined}
        />
      );
    case "experiencia-astronomica-vr":
      return <></>;
    case "vaxcanina":
      return <VaxcaninaLogo scale={smallScreen ? 0.18 : 0.2} />;
    case "projection-mapping":
      return <></>;
    case "workdyst":
      return (
        <WorkdystLogo
          scale={smallScreen ? 0.18 : 0.2}
          fillColorFront={colorScheme === "dark" ? "#26ED7C" : undefined}
          fillColorBack={colorScheme === "dark" ? "#4661F2" : undefined}
        />
      );
    default:
      return <></>;
  }
};
