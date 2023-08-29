import { Group, Stack, Text } from "@mantine/core";
import { SnippetType } from "../types/types";
import FavoriteIcon from "./FavoriteIcon";

const SnippetListItem = ({
  snippet,
  isActive,
}: {
  snippet: SnippetType;
  isActive: boolean;
}) => {
  return (
    <Stack spacing={8}>
      <Group position="apart" noWrap>
        {snippet.title ? (
          <Text className="text-base truncate">{snippet.title}</Text>
        ) : (
          <Text className="text-base truncate">Untitled snippet</Text>
        )}
        <FavoriteIcon snippet={snippet} isClickable={false} />
      </Group>
      <Group
        spacing={2}
        position="apart"
        className="w-full flex-col md:flex-row items-start"
        noWrap
      >
        <Text
          color={isActive ? "white" : "gray.6"}
          className="uppercase truncate"
        >
          {snippet.language}
        </Text>
        <Text color={isActive ? "white" : "gray.6"} className="truncate">
          {new Date(snippet.createdAt).toLocaleDateString("us-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </Text>
      </Group>
    </Stack>
  );
};

export default SnippetListItem;
