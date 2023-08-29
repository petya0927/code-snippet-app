import { Stack, Tabs, Text } from "@mantine/core";
import { IconTrash, IconPackage, IconStar } from "@tabler/icons-react";
import NavbarTabsComponent from "./NavbarTabsComponent";

const Menu = () => {
  return (
    <Stack spacing={4} className="">
      <Text className="font-bold text-xs uppercase">Menu</Text>
      <NavbarTabsComponent>
        <Tabs.List>
          <Tabs.Tab value="all" icon={<IconPackage size={20} />}>
            All snippets
          </Tabs.Tab>
          <Tabs.Tab value="favorites" icon={<IconStar size={20} />}>
            Favorites
          </Tabs.Tab>
          <Tabs.Tab value="trash" icon={<IconTrash size={20} />}>
            Trash
          </Tabs.Tab>
        </Tabs.List>
      </NavbarTabsComponent>
    </Stack>
  );
};

export default Menu;
