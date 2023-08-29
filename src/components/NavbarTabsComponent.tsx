import React, { useContext } from "react";
import { Tabs } from "@mantine/core";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types/types";

const NavbarTabsComponent = ({ children }: { children: React.ReactNode }) => {
  const { currentFolder, setCurrentFolder } =
    useContext<AppContextType>(AppContext);

  return (
    <Tabs
      orientation="vertical"
      variant="pills"
      color="gray"
      value={currentFolder || ""}
      defaultValue={currentFolder || ""}
      onTabChange={(value) => setCurrentFolder(value?.toString() || "all")}
      classNames={{
        root: "w-full overflow-auto flex-wrap",
        tabsList: "gap-1 w-full",
        tab: "px-2 py-1 w-full rounded-md max-w-full",
        tabLabel:
          "whitespace-nowrap overflow-hidden overflow-ellipsis flex-1 inline",
        tabRightSection: "ml-2 w-fit",
      }}
    >
      {children}
    </Tabs>
  );
};

export default NavbarTabsComponent;
