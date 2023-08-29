import { createContext, useState, useEffect, useRef } from "react";
import { FolderType, AppContextType, SnippetType } from "./types/types";
import { JSONtoArray } from "./utils/utils";
import { uid } from "uid";
import themelist from "monaco-themes/themes/themelist.json";

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const bgColors = [
    "linear-gradient(90deg, hsla(347, 89%, 61%, 1) 0%, hsla(242, 42%, 40%, 1) 100%)",
    "linear-gradient(90deg, hsla(10, 82%, 65%, 1) 0%, hsla(290, 79%, 13%, 1) 100%)",
    "linear-gradient(90deg, hsla(192, 80%, 51%, 1) 0%, hsla(355, 85%, 63%, 1) 100%)",
    "linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%)",
    "linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
    "linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)",
  ];

  const themes = Object.keys(themelist).map((theme) => ({
    value: theme,
    label: theme,
  }));
  themes.unshift({ value: "defaultTheme", label: "Default theme" });

  const [snippets, setSnippets] = useState<SnippetType[]>([]);
  const [currentSnippet, setCurrentSnippet] = useState<SnippetType | null>(
    null
  );
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [currentFolder, setCurrentFolder] = useState<
    string | "all" | "favorites" | "trash"
  >("all");
  const [search, setSearch] = useState<string>("");
  const [isScreenshotOpen, setIsScreenshotOpen] = useState<boolean>(false);
  const [showScreenshotBg, setShowScreenshotBg] = useState<boolean>(true);
  const [screenshotBgColor, setScreenshotBgColor] = useState<string>(
    bgColors[0]
  );
  const [screenshotTheme, setScreenshotTheme] = useState<"light" | "dark">(
    "dark"
  );
  const [editorTheme, setEditorTheme] = useState<string>("defaultTheme");
  const screenshotRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setSnippets(getSnippets());
    // it's possible that folders.json doesn't exist yet
    if (getFolders().length > 0) {
      setFolders(getFolders());
    } else {
      window.electron.storage.setFolders("folders", []);
    }
  }, []);

  const createSnippet = (snippet?: SnippetType) => {
    const newSnippet: SnippetType = {
      ...snippet,
      id: uid(),
      title: "Untitled snippet",
      description: "",
      code: "",
      language: "",
      folder: "",
      isFavorite: false,
      isDeleted: false,
      tags: [],
      createdAt: new Date().toISOString(),
    };
    setSnippets((prevSnippets) => [...prevSnippets, newSnippet]);
    window.electron.storage.setSnippet(newSnippet.id, newSnippet);
    return newSnippet;
  };

  const getSnippets = () => {
    return JSONtoArray(window.electron.storage.getAllSnippets());
  };

  const getSnippet = (id: string) => {
    return snippets.find((snippet) => snippet.id === id);
  };

  const setSnippet = (snippet: SnippetType) => {
    setCurrentSnippet(snippet);
    setSnippets((prevSnippets) => {
      const newSnippets = [...prevSnippets];
      const index = newSnippets.findIndex((s) => s.id === snippet.id);
      if (index === -1) {
        newSnippets.push(snippet);
      } else {
        newSnippets[index] = snippet;
      }
      return newSnippets;
    });

    window.electron.storage.setSnippet(snippet.id, snippet);

    return snippet;
  };

  const getSnippetsByFolder = (
    folder: "all" | "favorites" | "trash" | string
  ) => {
    return snippets.filter((snippet: SnippetType) => {
      if (folder === "all") {
        return !snippet.isDeleted;
      } else if (folder === "favorites") {
        return snippet.isFavorite;
      } else if (folder === "trash") {
        return snippet.isDeleted;
      } else {
        return snippet.folder === folder && !snippet.isDeleted;
      }
    });
  };

  const removeSnippetPermanent = (id: string) => {
    setSnippets((prevSnippets) => prevSnippets.filter((s) => s.id !== id));
    window.electron.storage.removeSnippet(id);
  };

  const toggleRemoveSnippet = (id: string) => {
    const snippet = getSnippet(id);
    setSnippet({ ...snippet, isDeleted: !snippet?.isDeleted } as SnippetType);
  };

  const getFolders = () => {
    return window.electron.storage.getFolders("folders") || [];
  };

  const createFolder = () => {
    const folder = {
      id: uid(),
      name: "New folder",
    };
    setFolders((prevFolders) => [...prevFolders, folder]);
    window.electron.storage.setFolders("folders", [...folders, folder]);
  };

  const setFolder = (folder: FolderType) => {
    setFolders((prevFolders) => {
      const newFolders = [...prevFolders];
      const index = newFolders.findIndex((f) => f.id === folder.id);
      if (index === -1) {
        newFolders.push(folder);
      } else {
        newFolders[index] = folder;
      }
      return newFolders;
    });

    window.electron.storage.setFolders(
      "folders",
      folders.map((f) => {
        if (f.id === folder.id) {
          return folder;
        } else {
          return f;
        }
      })
    );
  };

  const removeFolder = (id: string) => {
    setFolders((prevFolders) => prevFolders.filter((f) => f.id !== id));
    window.electron.storage.setFolders(
      "folders",
      folders.filter((f) => f.id !== id)
    );
  };

  return (
    <AppContext.Provider
      value={{
        snippets,
        setSnippets,
        currentSnippet,
        setCurrentSnippet,
        setSnippet,
        getSnippet,
        getSnippetsByFolder,
        toggleRemoveSnippet,
        removeSnippetPermanent,
        folders,
        getFolders,
        currentFolder,
        setCurrentFolder,
        createFolder,
        setFolder,
        removeFolder,
        search,
        setSearch,
        isScreenshotOpen,
        setIsScreenshotOpen,
        showScreenshotBg,
        setShowScreenshotBg,
        screenshotBgColor,
        setScreenshotBgColor,
        screenshotTheme,
        setScreenshotTheme,
        bgColors,
        themes,
        editorTheme,
        setEditorTheme,
        screenshotRef,
        createSnippet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
