import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  CollapsibleTable,
  ProvinceData,
} from "../src/components/CollapsibleTable";
import { States } from "../src/components/States";
import { Provinces } from "../src/components/Provinces";
import { Search } from "../src/components/Search";
import { useEffect, useState } from "react";
import { State } from "../src/models/State";
import { DateRange } from "../src/components/DateRange";
import moment from "moment";
import { Province } from "../src/models/Province";
import { mergeArrays } from "../src/data/mergeArrays";

interface Query {
  provinces?: Array<string>;
  states?: Array<string>;
  search?: string;
  startDate?: string;
  endDate?: string;
}

interface ProvinceWithState {
  name: string;
  stateName: string;
  flat: string;
}

export default function Home() {
  const [selectedProvinceWithState, setSelectedProvinceWithState] = useState<
    ProvinceWithState[]
  >([]);
  const [selectedStates, setSelectedStates] = useState<State[]>([]);
  const [search, setSearch] = useState<string>();
  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [dateTo, setDateTo] = useState<Date>(new Date());
  const [query, setQuery] = useState<Query>();
  const [states, setStates] = useState<ProvinceData[]>([]);

  const prepareDataToSend = async () => {
    console.log(selectedStates);
    const dataToSend = {
      provinces: selectedProvinceWithState.map((province) =>
        province.flat.toLocaleLowerCase()
      ),
      states: selectedStates.map((state) => state.key),
      search: search,
      startDate: moment(dateFrom).format("YYYY-MM-DD"),
      endDate: moment(dateTo).format("YYYY-MM-DD"),
    };

    console.log("dataToSenddddddddddddd", dataToSend);

    setQuery(dataToSend);
  };

  const submitQuery = async () => {
    const response = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(query),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setStates(data);
  };

  useEffect(() => {
    prepareDataToSend();
  }, [selectedProvinceWithState, search, selectedStates, dateFrom, dateTo]);

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          color="default"
          sx={{ textAlign: "center" }}
        >
          County Employment Office News
        </Typography>
        ;
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <States setSelectedStates={setSelectedStates} />
          </Grid>
          <Grid item xs={6}>
            <Provinces
              selectedStates={selectedStates}
              setSelectedProvinces={setSelectedProvinceWithState}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              xs={6}
              sx={{ justifyContent: "center", display: "flex", m: "auto" }}
            >
              <Box sx={{ mr: 2 }}>
                <DateRange
                  label={"Data od"}
                  onChangeDate={setDateFrom}
                  value={dateFrom}
                />
              </Box>
              <Box>
                <DateRange
                  label={"Data do"}
                  onChangeDate={setDateTo}
                  value={dateTo}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              xs={6}
              sx={{ justifyContent: "center", display: "flex", m: "auto" }}
            >
              <Search setSearch={setSearch} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => submitQuery()}
              >
                Szukaj
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <CollapsibleTable states={states}></CollapsibleTable>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
