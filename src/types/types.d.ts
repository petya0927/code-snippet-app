export interface SnippetType {
  id: string;
  title: string;
  description: string;
  code: string;
  language:
    | "cpp"
    | "html"
    | "java"
    | "javascript"
    | "json"
    | "lezer"
    | "markdown"
    | "php"
    | "python"
    | "rust"
    | "sql"
    | "xml"
    | "less"
    | "sass"
    | "clojure"
    | "csharp"
    | null;
  folder: string;
  tags: string[];
  createdAt: string;
  isFavorite: boolean;
  isDeleted: boolean;
}

export interface FolderType {
  id: string;
  name: string;
}

export interface AppContextType {
  snippets: SnippetType[];
  createSnippet: (snippet?: SnippetType) => SnippetType;
  getSnippet: (id: string) => SnippetType | undefined;
  currentSnippet: SnippetType | null;
  setCurrentSnippet: (snippet: SnippetType | null) => void;
  getSnippetsByFolder: (folderId: string) => SnippetType[];
  setSnippets: (snippets: SnippetType[]) => void;
  setSnippet: (snippet: SnippetType) => void;
  toggleRemoveSnippet: (id: string) => void;
  removeSnippetPermanent: (id: string) => void;
  folders: FolderType[];
  getFolders: () => FolderType[];
  currentFolder: "all" | "favorites" | "trash" | string;
  setCurrentFolder: (folder: "all" | "favorites" | "trash" | string) => void;
  createFolder: () => void;
  setFolder: (Folder: FolderType) => void;
  removeFolder: (id: string) => void;
  search: string;
  setSearch: (search: string) => void;
  isScreenshotOpen: boolean;
  setIsScreenshotOpen: (isScreenshotOpen: boolean) => void;
  showScreenshotBg: boolean;
  setShowScreenshotBg: (isScreenshotBg: boolean) => void;
  screenshotBgColor: string;
  setScreenshotBgColor: (screenshotBgColor: string) => void;
  screenshotTheme: "light" | "dark";
  setScreenshotTheme: (screenshotTheme: "light" | "dark") => void;
  bgColors: string[];
  themes: { value: string; label: string }[];
  editorTheme: string;
  setEditorTheme: (editorTheme: string) => void;
  screenshotRef: MutableRefObject<HTMLDivElement | undefined>;
}

declare global {
  interface Window {
    electron: {
      storage: {
        getDataPath: () => string;
        getAllSnippets: () => SnippetType[];
        getSnippet: (key: string) => SnippetType;
        setSnippet: (key: string, json: SnippetType) => void;
        removeSnippet: (key: string) => void;
        getFolders: (key: string) => FolderType[];
        setFolders: (key: string, json: FolderType[]) => void;
      };
    };
  }
}
