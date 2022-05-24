import React from "react";
import { Link as LinkMui } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardList({ val }) {
  return (
    <Grid item key={val?.id} alignContent="center" justifyContent="center">
      <LinkMui component={Link} to={`/anime/${val?.id}`} underline="none">
        <Card
          sx={{
            maxWidth: 345,
            // maxHeight: 500,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={val?.coverImage?.extraLarge}
              alt={val?.title?.english}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textDecoration: "none !important" }}
              >
                {val?.title?.english ? val?.title?.english : val?.title?.romaji}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </LinkMui>
    </Grid>
  );
}
