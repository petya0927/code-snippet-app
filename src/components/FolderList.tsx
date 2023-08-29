import { Stack, Tabs, Text, Group, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import NavbarTabsComponent from "./NavbarTabsComponent";
import { useContext } from "react";
import { FolderType, AppContextType } from "../types/types";
import { AppContext } from "../AppContext";
import FolderListItem from "./FolderListItem";
import TooltipComponent from "./TooltipComponent";

const FolderList = () => {
  const { folders, createFolder } = useContext<AppContextType>(AppContext);

  return (
    <Stack spacing={4} className="overflow-auto relative h-full">
      <Group
        position="apart"
        className="w-full z-10 sticky top-0"
        bg="dark.7"
        noWrap
      >
        <Text className="font-bold text-xs uppercase">Folders</Text>
        <TooltipComponent label="Create new folder">
          <IconPlus
            size={18}
            className="cursor-pointer"
            onClick={() => {
              createFolder();
            }}
          />
        </TooltipComponent>
      </Group>
      <NavbarTabsComponent>
        <Tabs.List>
          {folders.length > 0 ? (
            folders.map((folder: FolderType) => (
              <FolderListItem key={folder.id} folder={folder} />
            ))
          ) : (
            <Text className="text-sm text-center">No folders</Text>
          )}
        </Tabs.List>
      </NavbarTabsComponent>
    </Stack>
  );
};

export default FolderList;
