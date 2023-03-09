import { useState } from "react";
import { createStyles, Box } from "@mantine/core";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles(theme => ({
  link: {
    ...theme.fn.focusStyles(),
    cursor: "pointer",
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: 2.5,
    fontSize: theme.fontSizes.sm,
    height: /* rem(LINK_HEIGHT) */ LINK_HEIGHT,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
  },

  links: {
    position: "relative",
  },

  indicator: {
    transition: "transform 150ms ease",
    border: `2px solid ${theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7]}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: /* rem(INDICATOR_SIZE) */ INDICATOR_SIZE,
    width: /* rem(INDICATOR_SIZE) */ INDICATOR_SIZE,
    borderRadius: /* rem(INDICATOR_SIZE) */ INDICATOR_SIZE,
    position: "absolute",
    left: `calc(-${INDICATOR_SIZE} / 2 + ${1})`,
  },
}));

type ItemsProps = {
  name: string;
  label: string;
};

type IndustryNavProps = {
  setSelectedIndustry: (selectedIndustry: string | null) => void;
};

const IndustryNav = ({ setSelectedIndustry }: IndustryNavProps) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<number | null>(null);
  const { t } = useTranslation(["portfolio"]);
  const { pathname, query } = useRouter();

  const items = t<string, ItemsProps[]>("industries", { returnObjects: true }).map(
    ({ name, label }, index: number) => {
      return (
        <Link key={label} href={{ pathname: pathname, query: { ...query, industry: label } }}>
          <Box
            onClick={() => {
              active == index ? setActive(null) : setActive(index);
              active == index ? setSelectedIndustry(null) : setSelectedIndustry(label);
            }}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            sx={{ paddingLeft: 20 }}
          >
            {name}
          </Box>
        </Link>
      );
    }
  );

  return (
    <div>
      <div className={classes.links}>
        <div
          className={typeof active == "number" ? classes.indicator : undefined}
          style={{
            transform:
              typeof active == "number"
                ? `translateY(${active * LINK_HEIGHT + INDICATOR_OFFSET}px)`
                : undefined,
          }}
        />
        {items}
      </div>
    </div>
  );
};

export default IndustryNav;
