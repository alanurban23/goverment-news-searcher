import { TextField } from "@mui/material";
import React, { FC, useEffect, useRef } from "react";

export interface SearchProps {
    setSearch: any;
}

export const Search: FC<SearchProps> = ({setSearch}: SearchProps) => {
    
  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Wbisz słowo kluczowe... min 4 znaki"
        variant="outlined"
        onChange={(event) => setSearch(event.target.value)}
      />
    </>
  );
}
