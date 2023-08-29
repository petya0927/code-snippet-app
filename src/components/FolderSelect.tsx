import { Select } from "@mantine/core";
import { IconFolder } from "@tabler/icons-react";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types/types";

const FolderSelect = () => {
  const { folders, currentSnippet, setSnippet } =
    useContext<AppContextType>(AppContext);

  const folderOptions = folders.map((folder) => ({
    value: folder.id,
    label: folder.name,
  }));

  return (
    <Select
      data={folderOptions}
      placeholder={folderOptions.length > 0 ? "Not in folder" : "No folders"}
      disabled={folderOptions.length === 0}
      defaultValue={currentSnippet?.folder}
      value={currentSnippet?.folder}
      allowDeselect
      onChange={(value) => {
        if (!currentSnippet) return;
        setSnippet({ ...currentSnippet, folder: value as string });
      }}
      radius="md"
      classNames={{
        root: "w-full lg:max-w-[200px]",
        input:
          "border-none w-32 pr-0 h-8 leading-none min-h-0 whitespace-nowrap overflow-hidden overflow-ellipsis block w-full",
        rightSection: "hidden",
      }}
      icon={<IconFolder size={18} />}
      rightSectionWidth={0}
      rightSection={<></>}
    />
  );
};

export default FolderSelect;
