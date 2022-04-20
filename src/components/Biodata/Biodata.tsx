import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import "./Biodata.css";
import avatar from "../../assets/images/bio-pic.jpg";
import { Box } from "@mui/system";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Biodata: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={3} className="about">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Kishan Pitroda"
            src={avatar}
            sx={{ width: 160, height: 160, border: "5px solid #282c34" }}
          />
        </Box>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#000",
            mt: 2,
            mb: 1,
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          CONTACT
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000",
          }}
        >
          <PhoneIphoneIcon sx={{ paddingRight: "5px" }} />
          Phone:
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: "#282c34", mt: 1 }}
        >
          8980477072
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000",
            mt: 2,
          }}
        >
          <EmailIcon sx={{ paddingRight: "5px" }} />
          Email:
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: "#282c34", mt: 1 }}
        >
          pitrodak1@gmail.com
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000",
            mt: 2,
          }}
        >
          <HomeIcon sx={{ paddingRight: "5px" }} />
          Address:
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: "#282c34", mt: 1 }}
        >
          6, Shreeji Colony, Opp. Ganganagar, C.T.M, Amraiwadi,
          Ahmedabad-380026.
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#000",
            mt: 2,
            mb: 1,
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          EDUCATION
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000",
          }}
        >
          <SchoolIcon sx={{ paddingRight: "5px" }} />
          Qualification:
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: "#282c34", mt: 1 }}
        >
          B.E (Information Technology)
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000",
            mt: 2,
          }}
        >
          <ApartmentIcon sx={{ paddingRight: "5px" }} />
          Degree Institution:
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: "#282c34", mt: 1 }}
        >
          L.D.College of Engineering, Ahmedabad.
        </Typography>
      </Grid>
      <Grid item xs={12} md={9} className="main-view">
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#61dafb",
            mt: 2,
            mb: 1,
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Personal Details
        </Typography>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Kishan Pradipbhai Pitroda
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Date of Birth:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              05 Dec 1998
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Occupation:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Software Engineer
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Company:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Tatvasoft Software Development Company
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Height:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              5'3"
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Weight:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              52kg
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Sub Caste:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Luhar Suthar
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Native Place:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Dudapur (Dhrangadhra, District-Surendranagar)
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Hobbies:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Garba, Travelling, Cricket, Photography
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Language Known:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              English, Gujarati, Hindi, Marathi
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#61dafb",
            mt: 2,
            mb: 1,
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Family Details
        </Typography>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Father's Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Pradipbhai Ishwarbhai Pitroda
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Mother's Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Nishaben Pradipbhai Pitroda
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Sister's Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Vaibhavi Vishalkumar Panchal (Married)
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Father's Occupation:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              Fabrication Work
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "5px", textAlign: "left" }}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                color: "#61dafb",
                paddingLeft: "24px",
              }}
            >
              Contact No:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "white", px: 1 }}
            >
              9979738224
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Biodata;
