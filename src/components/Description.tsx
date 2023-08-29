import { Textarea } from "@mantine/core";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types/types";

const Description = () => {
  const { currentSnippet, setSnippet } = useContext<AppContextType>(AppContext);

  return (
    <Textarea
      placeholder="Add description"
      value={currentSnippet?.description}
      onChange={(event) => {
        if (!currentSnippet) return;
        setSnippet({
          ...currentSnippet,
          description: event.currentTarget.value,
        });
      }}
      classNames={{
        input: "border-none bg-transparent min-h-0 p-0",
      }}
    />
  );
};

export default Description;
