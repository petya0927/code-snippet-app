import { Group, Stack } from "@mantine/core";
import {
  IconCircleFilled,
  IconClipboard,
  IconClipboardCheck,
} from "@tabler/icons-react";
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { AppContextType } from "../../types/types";
import { Prism, PrismProps } from "@mantine/prism";

const ScreenshotBody = () => {
  const {
    currentSnippet,
    showScreenshotBg,
    screenshotBgColor,
    screenshotTheme,
    screenshotRef,
  } = useContext<AppContextType>(AppContext);

  return (
    <div
      className="p-8"
      style={{
        background: showScreenshotBg ? screenshotBgColor : "transparent",
      }}
      ref={screenshotRef}
    >
      <Stack
        className={`
        ${screenshotTheme === "dark" ? "bg-gray-800" : "bg-white"}
        rounded-lg shadow-xl backdrop-blur p-4
      `}
        spacing={8}
      >
        <Group position="apart">
          <Group spacing={6} noWrap>
            <IconCircleFilled size={16} className="text-red-500" />
            <IconCircleFilled size={16} className="text-yellow-500" />
            <IconCircleFilled size={16} className="text-green-500" />
          </Group>
        </Group>
        <Prism
          language={currentSnippet?.language as PrismProps["language"]}
          colorScheme={screenshotTheme}
          classNames={{
            root: "bg-transparent",
            code: "!bg-transparent text-base py-0",
            line: "px-0",
          }}
          noCopy={true}
          withLineNumbers
        >
          {currentSnippet?.code as string}
        </Prism>
      </Stack>
    </div>
  );
};

export default ScreenshotBody;
