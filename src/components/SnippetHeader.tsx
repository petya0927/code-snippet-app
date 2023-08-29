import { Group, Stack, Text, TextInput } from "@mantine/core";
import { useContext } from "react";
import { AppContextType, SnippetType } from "../types/types";
import { AppContext } from "../AppContext";
import TrashIcon from "./TrashIcon";
import FavoriteIcon from "./FavoriteIcon";
import ScreenshotIcon from "./ScreenshotIcon";
import Description from "./Description";
import LanguageSelect from "./LanguageSelect";
import CopyIcon from "./CopyIcon";
import FolderSelect from "./FolderSelect";

const SnippetHeader = () => {
  const { currentSnippet, setSnippet } = useContext<AppContextType>(AppContext);

  return (
    <Stack spacing={12} className="p-3">
      <Stack spacing={8}>
        <Group spacing={8} className="items-baseline" noWrap position="apart">
          <TextInput
            className="text-lg"
            placeholder="Untitled snippet"
            value={currentSnippet?.title}
            onChange={(event) => {
              setSnippet({
                ...currentSnippet,
                title: event.currentTarget.value,
              } as SnippetType);
            }}
            classNames={{
              root: "w-full max-w-[200px]",
              input:
                "border-none bg-transparent text-base p-0 min-h-0 h-fit overflow-hidden overflow-ellipsis",
            }}
          />
          {currentSnippet?.isDeleted && (
            <Text className="text-sm text-red-500">(Removed)</Text>
          )}
        </Group>
        <Group spacing={8} className="flex-col lg:flex-row w-full" noWrap>
          <Group noWrap spacing={8} className="flex-col md:flex-row w-full">
            <FolderSelect />
            <LanguageSelect />
          </Group>
          <Group noWrap spacing={4} position="left" className="w-full lg:w-fit">
            <ScreenshotIcon />
            <CopyIcon text={currentSnippet?.code as string} />
            <FavoriteIcon snippet={currentSnippet as SnippetType} />
            <TrashIcon snippet={currentSnippet as SnippetType} />
          </Group>
        </Group>
      </Stack>
      <Description />
    </Stack>
  );
};

export default SnippetHeader;
