import { Tooltip } from "@mantine/core";
import React from "react";

const TooltipComponent = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <Tooltip
      label={label}
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
      {children}
    </Tooltip>
  );
};

export default TooltipComponent;
