import { Container, Input, ScrollArea, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useLocalFonts } from "../../rust-commands/local-fonts";
import { IconSearch } from "@tabler/icons-react";

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
              localFonts.filter((x) =>
                x
                  .toLocaleLowerCase()
                  .includes(e.target.value.toLocaleLowerCase())
              )
            )
          }
          icon={<IconSearch />}
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
