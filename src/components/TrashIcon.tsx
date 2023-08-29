import { ActionIcon, Tooltip } from "@mantine/core";
import { IconSkull, IconTrash, IconTrashFilled } from "@tabler/icons-react";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { AppContextType, SnippetType } from "../types/types";
import TooltipComponent from "./TooltipComponent";

const TrashIcon = ({ snippet }: { snippet: SnippetType }) => {
  const { toggleRemoveSnippet, removeSnippetPermanent, setCurrentSnippet } =
    useContext<AppContextType>(AppContext);

  return (
    <>
      <TooltipComponent
        label={snippet.isDeleted ? "Restore snippet" : "Delete snippet"}
      >
        <ActionIcon
          variant="light"
          color="red"
          radius="md"
          className={`cursor-pointer ${
            snippet.isDeleted ? "text-red-500" : "text-gray-400"
          } hover:text-red-500`}
          onClick={() => toggleRemoveSnippet(snippet?.id)}
        >
          {snippet.isDeleted ? (
            <IconTrashFilled size={18} />
          ) : (
            <IconTrash size={18} />
          )}
        </ActionIcon>
      </TooltipComponent>
      {snippet.isDeleted && (
        <TooltipComponent label="Delete snippet permanently">
          <ActionIcon
            variant="light"
            color="red"
            radius="md"
            className="cursor-pointer text-gray-400 hover:animate-pulse hover:text-red-700"
            onClick={() => {
              removeSnippetPermanent(snippet?.id);
              setCurrentSnippet(null);
            }}
          >
            <IconSkull size={18} />
          </ActionIcon>
        </TooltipComponent>
      )}
    </>
  );
};

export default TrashIcon;
