import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { State } from "../models/State";
import { Province } from "../models/Province";

export interface ProvinceData {
  name: string;
  provinces: Province[];
  key: string;
}

export interface StatesData {
  states: ProvinceData[];
}

interface CollapsibleTable {
  props: StatesData;
}

interface ProvinceRow {
  state: ProvinceData;
}

function ProvinceRow({ state }: ProvinceRow) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {state.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {state.name}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Powiat</TableCell>
                    <TableCell>Tytuł</TableCell>
                    <TableCell>Opis</TableCell>
                    <TableCell>Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.provinces.map((news, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {news.date}
                      </TableCell>
                      <TableCell>{news.Province}</TableCell>
                      <TableCell>{news.Title}</TableCell>
                      <TableCell>{news.Description}</TableCell>
                      <TableCell>
                        <a href={news.Title_URL}>LINK</a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const CollapsibleTable = ({ states }: StatesData) => {
  // const { states } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {states.map((state: State, index: React.Key | null | undefined) => (
            <ProvinceRow key={index} state={state} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
