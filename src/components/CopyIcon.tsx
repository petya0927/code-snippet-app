import { ActionIcon, Popover, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconClipboard, IconClipboardCheck } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const CopyIcon = ({ text }: { text: string }) => {
  const clipboard = useClipboard({
    timeout: 2000,
  });

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(clipboard.copied);
  }, [clipboard.copied]);

  return (
    <Tooltip
      label={clipboard.copied ? "" : "Copy to clipboard"}
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
      <div onClick={() => clipboard.copy(text)}>
        <Popover
          opened={opened}
          classNames={{
            dropdown: "bg-green-500 text-white text-sm px-2 py-1 rounded-md",
          }}
        >
          <Popover.Target>
            <ActionIcon
              variant="light"
              color="green"
              radius="md"
              className="cursor-pointer text-gray-400 hover:text-green-500"
            >
              {clipboard.copied ? (
                <IconClipboardCheck size={18} />
              ) : (
                <IconClipboard size={18} />
              )}
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            {clipboard.copied ? "Copied!" : "Copy"}
          </Popover.Dropdown>
        </Popover>
      </div>
    </Tooltip>
  );
};

export default CopyIcon;
