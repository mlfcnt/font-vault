import { Container, Input, ScrollArea, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useLocalFonts } from "../../rust-commands/local-fonts";
import { LocalFontName } from "../../types";
import { IconSearch } from "@tabler/icons-react";

type Props = {
  localFonts: LocalFontName[];
};

export const MyLocalFonts = () => {
  const { data: localFonts = [] } = useLocalFonts();
  const [filteredFonts, setFilteredFonts] = useState(localFonts);

  useEffect(() => {
    setFilteredFonts(localFonts);
  }, [localFonts]);

  return (
    <Container>
      <Title align="center">My local fonts</Title>
      <Container w={300} mt="xl">
        <Input
          placeholder="Search"
          onChange={(e) =>
            setFilteredFonts(
              localFonts.filter((x) => x.includes(e.target.value))
            )
          }
          icon={<IconSearch />}
          clea
        />
      </Container>

      <ScrollArea h={300} mt={"xl"} type="auto">
        {filteredFonts.map((x) => (
          <Text>{x}</Text>
        ))}
      </ScrollArea>
    </Container>
  );
};
