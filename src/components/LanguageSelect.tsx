import { Select } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { AppContextType, SnippetType } from "../types/types";
import { languages } from "../utils/languages";

const LanguageSelect = () => {
  const { currentSnippet, setSnippet } = useContext<AppContextType>(AppContext);

  return (
    <Select
      data={
        Object.keys(languages).map((language) => ({
          value: language,
          label: language,
        })) as any
      }
      placeholder="Language"
      value={currentSnippet?.language}
      onChange={(value) =>
        setSnippet({
          ...currentSnippet,
          language: value as string,
        } as SnippetType)
      }
      radius="md"
      classNames={{
        root: "w-full lg:max-w-[200px]",
        input:
          "border-none w-32 pr-0 h-8 leading-none min-h-0 whitespace-nowrap overflow-hidden overflow-ellipsis block w-full",
        rightSection: "hidden",
      }}
      icon={<IconLanguage size={18} />}
    />
  );
};

export default LanguageSelect;
