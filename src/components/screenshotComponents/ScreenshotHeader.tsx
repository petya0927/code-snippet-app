import { ActionIcon, Checkbox, Group } from "@mantine/core";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { AppContextType } from "../../types/types";
import ScreenshotColorPicker from "./ScreenshotColorPicker";
import { exportComponentAsPNG } from "react-component-export-image";
import { IconFileDownload } from "@tabler/icons-react";
import TooltipComponent from "../TooltipComponent";

const ScreenshotHeader = () => {
  const {
    showScreenshotBg,
    setShowScreenshotBg,
    screenshotTheme,
    setScreenshotTheme,
    screenshotRef,
  } = useContext<AppContextType>(AppContext);

  return (
    <Group className="px-4" position="apart" noWrap>
      <Group
        spacing={12}
        className="flex-col lg:flex-row w-full lg:w-fit items-start lg:items-center"
      >
        <Group>
          <Checkbox
            label="Show background"
            size="xs"
            checked={showScreenshotBg}
            onChange={() => setShowScreenshotBg(!showScreenshotBg)}
            classNames={{
              label: "pl-2",
            }}
          />
          <Checkbox
            label="Dark mode"
            size="xs"
            checked={screenshotTheme === "dark"}
            onChange={() =>
              setScreenshotTheme(screenshotTheme === "dark" ? "light" : "dark")
            }
            classNames={{
              label: "pl-2",
            }}
          />
        </Group>
        <ScreenshotColorPicker />
      </Group>
      <TooltipComponent label="Save screenshot as PNG">
        <ActionIcon
          variant="light"
          color="blue"
          radius="md"
          className="cursor-pointer text-gray-400 hover:text-blue-500"
          onClick={() => exportComponentAsPNG(screenshotRef)}
        >
          <IconFileDownload size={18} />
        </ActionIcon>
      </TooltipComponent>
    </Group>
  );
};

export default ScreenshotHeader;
