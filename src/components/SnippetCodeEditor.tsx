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
      height="100%"
      onChange={onChange}
      theme={themes[0].value}
      className="w-full pl-2 h-full max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-212px)]"
    />
  ) : null;
};

export default SnippetCodeEditor;
