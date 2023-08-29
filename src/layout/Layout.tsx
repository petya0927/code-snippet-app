import { Divider, Group, Stack } from "@mantine/core";
import Menu from "../components/Menu";
import Search from "../components/Search";
import SnippetList from "../components/SnippetList";
import Snippet from "../components/Snippet";
import FolderList from "../components/FolderList";
import { AppContextProvider } from "../AppContext";

const Layout = () => {
  return (
    <Group className="h-screen" spacing={0} noWrap>
      <AppContextProvider>
        <Stack
          className="h-screen p-2 w-full min-w-[100px]"
          spacing={16}
          style={{ flex: 1 }}
        >
          <Menu />
          <FolderList />
        </Stack>
        <Divider orientation="vertical" />
        <Stack
          className="h-screen w-full min-w-[100px]"
          spacing={0}
          style={{ flex: 2 }}
        >
          <Search />
          <Divider />
          <SnippetList />
        </Stack>
        <Divider orientation="vertical" />
        <Stack
          className="h-screen w-full min-w-[100px]"
          spacing={0}
          style={{ flex: 3 }}
        >
          <Snippet />
        </Stack>
      </AppContextProvider>
    </Group>
  );
};

export default Layout;
