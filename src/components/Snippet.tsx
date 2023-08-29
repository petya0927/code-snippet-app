import { Stack, Text, Divider } from "@mantine/core";
import SnippetHeader from "./SnippetHeader";
import SnippetCodeEditor from "./SnippetCodeEditor";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types/types";
import Screenshot from "./screenshotComponents/Screenshot";

const Snippet = () => {
  const { isScreenshotOpen, currentSnippet } =
    useContext<AppContextType>(AppContext);

  return currentSnippet ? (
    <Stack className="h-full max-h-screen">
      <SnippetHeader />
      <Divider />
      {!isScreenshotOpen ? <SnippetCodeEditor /> : <Screenshot />}
    </Stack>
  ) : (
    <Text className="text-lg text-center m-auto p-4">No snippet selected</Text>
  );
};

export default Snippet;
