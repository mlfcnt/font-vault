import { Button, Collapse, Container, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useLocalFonts } from "../../rust-commands/local-fonts";
import { FontFamilyName, FontName, LocalFontRecord } from "../../types";
import { useDisclosure } from "@mantine/hooks";

export const MyLocalFonts = () => {
  const { data: localFonts } = useLocalFonts();
  const [filteredFontsRecord, setFilteredFontsRecord] =
    useState<LocalFontRecord>(localFonts?.fonts || {});

  useEffect(() => {
    setFilteredFontsRecord(localFonts?.fonts || {});
  }, [localFonts]);

  return (
    <Container>
      <Title align="center">My local fonts</Title>
      <Container w={300} mt="xl">
        {/* <Input
          placeholder="Search"
          onChange={(e) =>
            setFilteredFonts(
              localFonts?.fonts.filter((x) =>
                x
                  .toLocaleLowerCase()
                  .includes(e.target.value.toLocaleLowerCase())
              )
            )
          }
          icon={<IconSearch />}
        /> */}
      </Container>
      <DisplayLocalFonts fontRecord={filteredFontsRecord} />
    </Container>
  );
};

const DisplayLocalFonts = ({ fontRecord }: { fontRecord: LocalFontRecord }) => {
  return (
    <div>
      {Object.keys(fontRecord)
        .sort((a, b) =>
          a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
        )
        .map((fontFamilyName) => (
          <DisplayFamilyFonts
            familyName={fontFamilyName}
            fonts={fontRecord[fontFamilyName]}
          />
        ))}
    </div>
  );
};

const DisplayFamilyFonts = ({
  familyName,
  fonts,
}: {
  familyName: FontFamilyName;
  fonts: FontName[];
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div key={familyName} style={{ margin: "10px" }}>
      <Button onClick={toggle} variant="subtle">
        {familyName}
      </Button>
      <Collapse in={opened}>
        {fonts.map((fontName) => (
          <Text m={"lg"} key={fontName}>
            {fontName}
          </Text>
        ))}
      </Collapse>
    </div>
  );
};
