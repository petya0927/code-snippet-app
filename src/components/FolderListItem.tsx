import { Group, Tabs, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconCheck,
  IconEdit,
  IconFolder,
  IconTrash,
} from "@tabler/icons-react";
import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { FolderType, AppContextType } from "../types/types";

const FolderListItem = ({ folder }: { folder: FolderType }) => {
  const { setFolder, removeFolder, currentFolder } =
    useContext<AppContextType>(AppContext);
  const [editFolder, setEditFolder] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      folderName: folder.name,
    },
  });

  return (
    <Tabs.Tab
      key={folder.id}
      value={folder.id}
      icon={<IconFolder size={20} />}
      rightSection={
        currentFolder === folder.id &&
        !editFolder && (
          <Group spacing={4} noWrap>
            <IconEdit
              size={20}
              className="cursor-pointer"
              onClick={() => {
                setEditFolder(true);
              }}
            />
            <IconTrash
              size={20}
              className="cursor-pointer"
              onClick={() => {
                removeFolder(folder.id);
              }}
            />
          </Group>
        )
      }
    >
      {editFolder ? (
        <TextInput
          placeholder="Folder name"
          defaultValue={folder.name}
          rightSectionWidth={20}
          rightSection={
            <IconCheck
              size={20}
              className="cursor-pointer"
              onClick={() => {
                setFolder({
                  ...folder,
                  name: form.values.folderName,
                });
                setEditFolder(false);
              }}
            />
          }
          classNames={{
            root: "w-full",
            input:
              "border-none bg-transparent h-auto min-h-0 leading-none pl-0",
          }}
          onChange={(event) => {
            form.setValues({ folderName: event.currentTarget.value });
          }}
        />
      ) : (
        folder.name
      )}
    </Tabs.Tab>
  );
};

export default FolderListItem;
