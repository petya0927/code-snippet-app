import { useContext } from "react";
import { AppContextType } from "../types/types";
import { AppContext } from "../AppContext";
import ReactCodeMirror from "@uiw/react-codemirror";
import { themes } from "../utils/themes";

const SnippetCodeEditor = () => {
  const { setSnippet, currentSnippet } = useContext<AppContextType>(AppContext);

  const onChange = (value: string) => {
    saveSnippet(value);
  };

  const saveSnippet = (value: string) => {
    if (!currentSnippet) return;
    setSnippet({ ...currentSnippet, code: value });
  };

  return themes ? (
    <ReactCodeMirror
      value={currentSnippet?.code}
      defaultValue={currentSnippet?.code}
      placeholder="Write your code here..."
      basicSetup={{
        lineNumbers: true,
        indentOnInput: true,
        closeBrackets: true,
        tabSize: 2,
      }}
      height="calc(100vh - 180px)"
      onChange={onChange}
      theme={themes[0].value}
      className="h-full w-full pl-2"
    />
  ) : null;
};

export default SnippetCodeEditor;
