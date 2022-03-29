import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WorkIcon from "@mui/icons-material/Work";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const history = useHistory();

  const redirectToPage = (path: string) => {
    history.push(path);
  };

  return (
    <div>
      <Box
        sx={{
          padding: {
            xs: "40px 24px",
            sm: "60px 100px",
            md: "80px 250px",
            lg: "120px 300px",
          },
        }}
        className="text-content"
      >
        <Typography
          variant="h6"
          component="h6"
          className="green-text"
          sx={{ my: 2 }}
        >
          Hi there, I'm,
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ my: 2, fontFamily: "'Montserrat', sans-serif" }}
        >
          Kishan Pitroda,
        </Typography>
        <Typography variant="subtitle1" component="p" className="green-text">
          I'm software engineer in Ahmedabad. I mostly focus on front-end of the
          web. Welcome to my corner of the internet. I'm glad you're here!
        </Typography>
      </Box>
      <Grid container className="card-container">
        <Grid item xs={12} sm={4} className="card-grid">
          <Card
            variant="outlined"
            sx={{ width: "230px", height: "190px" }}
            className="card"
            onClick={() => redirectToPage("gallery")}
          >
            <CardContent sx={{ color: "white" }}>
              <PhotoLibraryIcon color="secondary" fontSize="large" />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Gallery
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color="secondary"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  p: 1,
                }}
              >
                You can watch some of my pictures here
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} className="card-grid">
          <Card
            variant="outlined"
            sx={{ width: "230px", height: "190px" }}
            className="card"
            onClick={() => redirectToPage("resume")}
          >
            <CardContent sx={{ color: "white" }}>
              <WorkIcon color="secondary" fontSize="large" />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Resume
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color="secondary"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  p: 1,
                }}
              >
                It covers my IT professional career details
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} className="card-grid">
          <Card
            variant="outlined"
            sx={{ width: "230px", height: "190px" }}
            className="card"
            onClick={() => redirectToPage("biodata")}
          >
            <CardContent sx={{ color: "white" }}>
              <ContactPageIcon color="secondary" fontSize="large" />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontFamily: "'Montserrat', sans-serif", p: 1 }}
              >
                Biodata
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color="secondary"
                sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                You can see my personal, family, education and some other
                details.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
