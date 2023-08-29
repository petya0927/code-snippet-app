import { Stack } from "@mantine/core";
import ScreenshotBody from "./ScreenshotBody";
import ScreenshotHeader from "./ScreenshotHeader";

const Screenshot = () => {
  return (
    <Stack className="w-full" spacing={12}>
      <ScreenshotHeader />
      <ScreenshotBody />
    </Stack>
  );
};

export default Screenshot;
