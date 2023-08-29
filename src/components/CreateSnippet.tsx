import React, { useContext } from "react";
import TooltipComponent from "./TooltipComponent";
import { IconPlus } from "@tabler/icons-react";
import { AppContext } from "../AppContext";
import { AppContextType, SnippetType } from "../types/types";

const CreateSnippet = () => {
  const { createSnippet, currentFolder, setCurrentFolder, setCurrentSnippet } =
    useContext<AppContextType>(AppContext);

  const folder = currentFolder === "all" ? null : currentFolder;

  return (
    <TooltipComponent label="Create new snippet">
      <IconPlus
        onClick={() => {
          if (currentFolder === "favorites" || currentFolder === "trash") {
            setCurrentFolder("all");
          }
          const snippet = createSnippet({
            ...({} as SnippetType),
            folder: folder as string,
          });
          setCurrentSnippet(snippet);
        }}
        size={18}
        className="cursor-pointer"
      />
    </TooltipComponent>
  );
};

export default CreateSnippet;
