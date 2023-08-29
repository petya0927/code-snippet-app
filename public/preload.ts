// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  storage: {
    getDataPath: () => ipcRenderer.send("get-data-path"),
    setSnippet(key: string, json: any) {
      ipcRenderer.send("set", key, json);
    },
    setFolders(key: string, json: any) {
      ipcRenderer.send("set", key, json);
    },
    getSnippet(key: string) {
      return ipcRenderer.sendSync("get", key);
    },
    getAllSnippets() {
      return ipcRenderer.sendSync("get-all");
    },
    getFolders() {
      return ipcRenderer.sendSync("get", "folders");
    },
    removeSnippet(key: string) {
      ipcRenderer.send("remove", key);
    },
  },
});
