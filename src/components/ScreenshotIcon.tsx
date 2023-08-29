import { ActionIcon, Tooltip } from "@mantine/core";
import { IconCamera, IconCameraFilled } from "@tabler/icons-react";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types/types";

const ScreenshotIcon = () => {
  const { isScreenshotOpen, setIsScreenshotOpen } =
    useContext<AppContextType>(AppContext);

  return (
    <Tooltip
      label={isScreenshotOpen ? "Hide screenshot" : "Show screenshot preview"}
      position="bottom"
      withArrow
      transitionProps={{
        transition: "fade",
        duration: 100,
      }}
      classNames={{
        tooltip: "text-xs p-1 bg-black text-white",
      }}
    >
      <ActionIcon
        variant="light"
        color="blue"
        radius="md"
        className={`
        cursor-pointer
        hover:text-blue-400
        ${isScreenshotOpen ? "text-blue-400" : "text-gray-400"}      
      `}
        onClick={() => setIsScreenshotOpen(!isScreenshotOpen)}
      >
        {isScreenshotOpen ? (
          <IconCameraFilled size={18} />
        ) : (
          <IconCamera size={18} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};

export default ScreenshotIcon;
