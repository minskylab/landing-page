import React from "react";
import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack, Anchor } from "@mantine/core";
import { Sun, MapPin, At, BrandWhatsapp } from "tabler-icons-react";
import { useTranslation } from "next-i18next";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    color: variant === "gradient" ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  type: String;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  type,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });

  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        {type == "link" ? (
          <Anchor
            color="brand.4"
            href="https://wa.me/961818237?text=Me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
          >
            {description}
          </Anchor>
        ) : (
          <Text className={classes.description}>{description}</Text>
        )}
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

export function ContactIconsList({ variant }: ContactIconsListProps) {
  const { t } = useTranslation("home");

  const MOCKDATA = [
    {
      title: t("contactInformation.fields.email"),
      description: "hello@minsky.cc",
      icon: At,
      type: "text",
    },
    {
      title: t("contactInformation.fields.whatsapp"),
      description: "+51961818237",
      icon: BrandWhatsapp,
      type: "link",
    },
    {
      title: t("contactInformation.fields.address"),
      description: "Jr. Rosendo Vidaurre 641, Lima, Barranco",
      icon: MapPin,
      type: "text",
    },
    {
      title: t("contactInformation.fields.hours"),
      description: "08:00 to 18:00.",
      icon: Sun,
      type: "text",
    },
  ];

  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));

  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={theme => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={theme => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${
            theme.colors[theme.primaryColor][4]
          } 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
