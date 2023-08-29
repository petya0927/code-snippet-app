import React, { useContext, useEffect } from "react";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types/types";
import CreateSnippet from "./CreateSnippet";

const Search = () => {
  const { search, setSearch, currentFolder, createSnippet } =
    useContext<AppContextType>(AppContext);

  const form = useForm({
    initialValues: {
      search: "",
    },
  });

  useEffect(() => {
    form.setFieldValue("search", "");
    setSearch("");
  }, [currentFolder]);

  return (
    <TextInput
      {...form.getInputProps("search")}
      placeholder="Search snippets..."
      icon={<IconSearch size={20} />}
      rightSection={
        search ? (
          <IconX
            size={20}
            onClick={() => {
              form.setValues({ search: "" });
              setSearch("");
            }}
            className="cursor-pointer"
          />
        ) : (
          <CreateSnippet />
        )
      }
      classNames={{
        root: "px-2 py-2 w-full",
        input: "bg-transparent border-0",
      }}
      onChange={(event) => {
        form.setValues({ search: event.currentTarget.value });
        setSearch(event.currentTarget.value);
      }}
    />
  );
};

export default Search;
