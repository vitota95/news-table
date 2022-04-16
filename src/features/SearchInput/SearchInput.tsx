import React, { FC } from "react";
import { debounce } from "lodash";
import { Input } from "@chakra-ui/react";

export interface SearchInputProps {
  onChange: (text: string) => void;
}

export const SearchInput: FC<SearchInputProps> = (props) => {
  const { onChange } = props;

  const debouncedOnChange = debounce(onChange, 500);

  return (
    <Input
      aria-label="Search Input"
      placeholder="Insert your search string"
      onChange={(event) => debouncedOnChange(event.target.value)}
    />
  );
};
