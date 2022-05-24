import {
  CardMedia,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BYID, GET_FAV_ANIME } from "../config/query";
import { collectionFavVar } from "../config/cache";

export default function DetailAnime() {
  const { id } = useParams();
  const [status, setStatus] = useState(false);

  const { data, loading, error } = useQuery(GET_BYID, {
    variables: {
      idAnime: id,
    },
  });

  return (
    <>
      <Container
        maxWidth="md"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Paper>
          <CardMedia
            component="img"
            image={
              data?.Media?.bannerImage === null
                ? data?.Media?.coverImage?.extraLarge
                : data?.Media?.bannerImage
            }
            alt="Test"
          ></CardMedia>
          <Grid>
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {data?.Media?.title?.english
                  ? data?.Media?.title?.english
                  : data?.Media?.title?.romaji}
              </Typography>
              <Grid container>
                <Grid item sm={3} lg={6} textAlign="center">
                  <Typography variant="h5" color="inherit" paragraph>
                    Popularity : {data?.Media?.popularity}
                  </Typography>
                </Grid>
                <Grid item sm={12} lg={6} textAlign="center">
                  <Typography variant="h5" color="inherit" paragraph>
                    Score : {data?.Media?.averageScore}%
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body2" color="light" component="p">
                Tags:
                {data?.Media?.genres.map((e) => (
                  <Chip label={e} color="secondary" style={{ margin: 5 }} />
                ))}
              </Typography>
              <Button variant="outlined" sx={{ margin: 5 }}>
                Add To Collections
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            marginTop: "10px",
            textAlign: "justify",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Typography variant="h5" color="inherit" paragraph>
            Overview :
          </Typography>
          <Typography variant="String" color="inherit" paragraph>
            {data?.Media?.description}
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
