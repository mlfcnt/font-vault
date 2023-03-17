import React, { Dispatch, SetStateAction } from "react";
import { Badge, Box, Navbar as MantineNavbar, NavLink } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import { useDeviceName } from "../../rust-commands/device-commands";
import { useLocalFonts } from "../../rust-commands/local-fonts";

export type NavLink = "my-local-fonts";

type Props = {
  opened: boolean;
  activeNavLink: string;
  setActiveNavLink: Dispatch<SetStateAction<NavLink>>;
};

export const Navbar = ({ opened, activeNavLink, setActiveNavLink }: Props) => {
  const os = useOs();
  const { data: deviceName } = useDeviceName();
  const { data: localFonts = [] } = useLocalFonts();
  return (
    <MantineNavbar
      p="xs"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Box w={240}>
        <NavLink
          label="My local fonts"
          description={`${deviceName || "..."} - ${os.toUpperCase()}`}
          icon={
            <Badge size="sm" variant="filled" color="blue">
              {localFonts.length}
            </Badge>
          }
          onClick={() => setActiveNavLink("my-local-fonts")}
        />
        <NavLink
          label="My other devices"
          disabled
          description="Coming soon"
          onClick={() => setActiveNavLink("my-local-fonts")}
        />
      </Box>
    </MantineNavbar>
  );
};
