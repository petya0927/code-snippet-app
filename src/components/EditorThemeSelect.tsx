import { Select } from "@mantine/core";
import { IconBrush } from "@tabler/icons-react";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types/types";

const EditorThemeSelect = () => {
  const { themes, editorTheme, setEditorTheme, isScreenshotOpen } =
    useContext<AppContextType>(AppContext);

  return !isScreenshotOpen ? (
    <Select
      data={themes}
      value={editorTheme}
      placeholder="Editor theme"
      onChange={(value) => setEditorTheme(value as string)}
      radius="md"
      classNames={{
        input:
          "border-none w-32 pr-0 h-8 leading-none min-h-0 whitespace-nowrap overflow-hidden overflow-ellipsis block w-full",
        rightSection: "hidden",
      }}
      icon={<IconBrush size={18} />}
    />
  ) : null;
};

export default EditorThemeSelect;
