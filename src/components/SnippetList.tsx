import {
  Button,
  Divider,
  ScrollArea,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useContext } from "react";
import { AppContextType, SnippetType } from "../types/types";
import { AppContext } from "../AppContext";
import SnippetListItem from "./SnippetListItem";

const SnippetList = () => {
  const {
    getSnippetsByFolder,
    currentSnippet,
    setCurrentSnippet,
    currentFolder,
    search,
    setIsScreenshotOpen,
    createSnippet,
  } = useContext<AppContextType>(AppContext);

  const filteredSnippets = getSnippetsByFolder(currentFolder as string)
    .filter((snippet: SnippetType) => {
      if (!search) {
        return true;
      } else {
        return snippet.title.toLowerCase().includes(search.toLowerCase());
      }
    })
    .sort((a: SnippetType, b: SnippetType) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <div className="w-full">
      {filteredSnippets.length > 0 ? (
        <Tabs
          orientation="vertical"
          variant="pills"
          color="blue"
          value={currentSnippet?.id || ""}
          defaultValue={currentSnippet?.id || ""}
          onTabChange={(value) => {
            setCurrentSnippet(
              filteredSnippets.find(
                (snippet) => snippet.id === value
              ) as SnippetType
            );
            setIsScreenshotOpen(false);
          }}
          classNames={{
            root: "w-full",
            tabsList: "gap-2 p-2",
            tab: "w-full rounded-md !z-0 mb-2 ",
            tabLabel: "rounded-md w-full",
          }}
        >
          <ScrollArea.Autosize
            mah="calc(100vh - 60px)"
            scrollbarSize={5}
            type="hover"
            className="w-full"
          >
            <Tabs.List>
              <SimpleGrid cols={1} verticalSpacing="xs">
                {filteredSnippets.map((item: SnippetType, index: number) => (
                  <Stack spacing={0} key={item.id}>
                    <Tabs.Tab value={item.id}>
                      <SnippetListItem
                        snippet={item}
                        isActive={item.id === currentSnippet?.id}
                      />
                    </Tabs.Tab>
                    {index !== filteredSnippets.length - 1 && <Divider />}
                  </Stack>
                ))}
              </SimpleGrid>
            </Tabs.List>
          </ScrollArea.Autosize>
        </Tabs>
      ) : (
        <Text className="text-base text-center mt-4 p-4 pt-0">
          No snippets found
        </Text>
      )}
    </div>
  );
};

export default SnippetList;
