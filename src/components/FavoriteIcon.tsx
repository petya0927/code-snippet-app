import React, { useContext } from "react";
import { IconStarFilled, IconStar } from "@tabler/icons-react";
import { AppContextType, SnippetType } from "../types/types";
import { AppContext } from "../AppContext";
import { ActionIcon, Tooltip } from "@mantine/core";

const FavoriteIcon = ({
  snippet,
  isClickable = true,
}: {
  snippet: SnippetType;
  isClickable?: boolean;
}) => {
  const { setSnippet } = useContext<AppContextType>(AppContext);

  const toggleFavorite = () => {
    setSnippet({ ...snippet, isFavorite: !snippet.isFavorite });
  };

  return isClickable ? (
    <Tooltip
      label={snippet.isFavorite ? "Remove from favorites" : "Add to favorites"}
      position="bottom"
      withArrow
      transitionProps={{
        transition: "fade",
        duration: 100,
      }}
      classNames={{
        tooltip: "text-xs p-1 bg-black text-white",
      }}
    >
      <ActionIcon
        variant="light"
        color="yellow"
        radius="md"
        onClick={toggleFavorite}
        className={`cursor-pointer hover:text-yellow-400 ${
          snippet.isFavorite ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        {snippet.isFavorite ? (
          <IconStarFilled size={18} />
        ) : (
          <IconStar size={18} />
        )}
      </ActionIcon>
    </Tooltip>
  ) : (
    <div
      className={`${snippet.isFavorite ? "text-yellow-400" : "text-gray-400"}`}
    >
      {snippet.isFavorite ? (
        <IconStarFilled size={18} />
      ) : (
        <IconStar size={18} />
      )}
    </div>
  );
};

export default FavoriteIcon;
