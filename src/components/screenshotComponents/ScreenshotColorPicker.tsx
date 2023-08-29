import { Group } from "@mantine/core";
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { AppContextType } from "../../types/types";

const ScreenshotColorPicker = () => {
  const { setScreenshotBgColor, screenshotBgColor, bgColors } =
    useContext<AppContextType>(AppContext);

  return (
    <Group spacing={2}>
      {bgColors.map((bgColor, index) => (
        <div
          className={`w-8 h-8 rounded-full cursor-pointer p-1 ${
            bgColor === screenshotBgColor
              ? "border-2 border-blue-500"
              : "border-2 border-transparent"
          }`}
          key={index}
          onClick={() => setScreenshotBgColor(bgColor)}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              backgroundImage: bgColor,
            }}
          />
        </div>
      ))}
    </Group>
  );
};

export default ScreenshotColorPicker;
