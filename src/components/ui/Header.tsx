import {
  Burger,
  MediaQuery,
  Header as MantineHeader,
  useMantineTheme,
  Title,
  ActionIcon,
  useMantineColorScheme,
  Flex,
} from "@mantine/core";
import React, { Dispatch, SetStateAction } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

type Props = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ opened, setOpened }: Props) => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((opened) => !opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Flex justify={"space-around"} align="center" gap={"xl"}>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
          </ActionIcon>
          <Title align="center">Font Vault</Title>
        </Flex>
      </div>
    </MantineHeader>
  );
};
