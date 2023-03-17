import React, { useState } from "react";
import {
  AppShell as MantineAppShell,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { MyLocalFonts } from "./components/pages/MyLocalFonts";
import { Navbar, NavLink } from "./components/ui/Navbar";
import { Header } from "./components/ui/Header";

export const AppShell = () => {
  const [opened, setOpened] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState<NavLink>("my-local-fonts");
  const theme = useMantineTheme();

  const displayContent = () => {
    switch (activeNavLink) {
      case "my-local-fonts":
        return <MyLocalFonts />;
      default:
        return <Text>My local fonts</Text>;
    }
  };
  return (
    <MantineAppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          opened={opened}
          activeNavLink={activeNavLink}
          setActiveNavLink={setActiveNavLink}
        />
      }
      // footer={<Footer />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      {displayContent()}
    </MantineAppShell>
  );
};
