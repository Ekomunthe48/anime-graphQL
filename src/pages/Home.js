import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { useQuery } from "@apollo/client";
import { ANIME_COLLECT_HOME } from "../config/query";
import CardList from "../components/CardList";

export default function Home() {
  const { data, loading, error } = useQuery(ANIME_COLLECT_HOME);
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "30px", marginBottom: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignContent="center"
          justifyContent="center"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {data?.Page?.media.map((val) => {
            return <CardList val={val} />;
          })}
        </Grid>
      </Container>
    </>
  );
}
