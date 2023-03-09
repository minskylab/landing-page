import { useState } from "react";
import {
  createStyles,
  Box,
  Menu,
  Button,
  UnstyledButton,
  Collapse,
  Stack,
  Group,
  Text,
} from "@mantine/core";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown, ChevronUp } from "tabler-icons-react";

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
  menuItem: {
    padding: "10px 0px",
    fontSize: 14,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

type ItemsProps = {
  name: string;
  label: string;
};

type IndustryNavProps = {
  setSelectedIndustry: (selectedIndustry: string | null) => void;
};

export const IndustryNav = ({ setSelectedIndustry }: IndustryNavProps) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<number | null>(null);
  const { t } = useTranslation(["portfolio"]);
  const router = useRouter();
  const { pathname, query } = router;
  const activeIndustry = query.industry;

  const industries = t<string, ItemsProps[]>("industries", { returnObjects: true });

  const links = industries.map(({ name, label }, index: number) => {
    return (
      <Box
        key={label}
        onClick={() => {
          if (active == index) {
            //Link activo
            setActive(null);
            setSelectedIndustry(null);
            router.push("/portfolio", undefined, { shallow: true });
          } else {
            //Link inactivo
            setActive(index);
            setSelectedIndustry(label);
            router.push({ pathname: pathname, query: { ...query, industry: label } });
          }
        }}
        className={cx(classes.link, { [classes.linkActive]: activeIndustry === label })}
        sx={{ paddingLeft: 20 }}
      >
        {name}
      </Box>
    );
  });
  industries.findIndex(i => i.label == activeIndustry);
  return (
    <div>
      <div className={classes.links}>
        <div
          className={activeIndustry ? classes.indicator : undefined}
          style={{
            transform: activeIndustry
              ? `translateY(${
                  industries.findIndex(i => i.label == activeIndustry) * LINK_HEIGHT +
                  INDICATOR_OFFSET
                }px)`
              : undefined,
          }}
        />
        {links}
      </div>
    </div>
  );
};

export const IndustryMenu = ({ setSelectedIndustry }: IndustryNavProps) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation(["portfolio"]);
  const { pathname, query } = useRouter();
  const activeIndustry = query.industry;
  const [opened, setOpen] = useState(false);

  const items = t<string, ItemsProps[]>("industries", { returnObjects: true }).map(
    ({ name, label }) => {
      return (
        <Link key={label} href={{ pathname: pathname, query: { ...query, industry: label } }}>
          <Box
            className={cx(classes.menuItem, { [classes.linkActive]: activeIndustry == label })}
            onClick={() => {
              setSelectedIndustry(label);
            }}
          >
            {name}
          </Box>
        </Link>
      );
    }
  );
  return (
    <>
      <UnstyledButton
        onClick={() => setOpen(o => !o)}
        sx={theme => ({
          width: "100%",
          borderBottom: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
        })}
      >
        <Group position="apart" pb={5}>
          <Text size="lg" weight={"bold"}>
            Industry
          </Text>
          {opened ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        <Stack spacing={0} p={10}>
          <Link href={{ pathname: pathname }}>
            <Box
              className={cx(classes.menuItem, {
                [classes.linkActive]: activeIndustry == undefined,
              })}
              onClick={() => {
                setSelectedIndustry(null);
              }}
            >
              All
            </Box>
          </Link>
          {items}
        </Stack>
      </Collapse>
    </>
  );
};
