import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/white-logo.png";
import { useHistory } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import "./Footer.css";

const Footer: React.FC = () => {
  const history = useHistory();

  const redirectToPage = (path: string) => {
    history.push(path);
  };

  const redirectToSocialMedia = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <Grid container>
      <Grid container className="footer">
        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  color: "#61dafb",
                  padding: "15px 0px 5px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Quick Links
              </Typography>
            </Grid>
            <Grid item xs={12} className="row-item">
              <Link
                component="a"
                variant="subtitle2"
                onClick={() => redirectToPage("gallery")}
                className="link"
              >
                Gallery
              </Link>
            </Grid>
            <Grid item xs={12} className="row-item">
              <Link
                component="a"
                variant="subtitle2"
                onClick={() => redirectToPage("resume")}
                className="link"
              >
                Resume
              </Link>
            </Grid>
            <Grid item xs={12} className="row-item">
              <Link
                component="a"
                variant="subtitle2"
                onClick={() => redirectToPage("biodata")}
                className="link"
              >
                Biodata
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  color: "#61dafb",
                  padding: "15px 0px 5px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Contact
              </Typography>
            </Grid>
            <Grid item xs={12} className="row-item">
              <MailOutlineIcon sx={{ paddingRight: "10px" }} />
              <Typography
                component="a"
                sx={{ color: "white" }}
                onClick={() =>
                  (window.location.href = "mailto:pitrodak1@gmail.com")
                }
                className="link"
              >
                pitrodak1@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} className="row-item">
              <PhoneIphoneIcon sx={{ paddingRight: "10px" }} />
              <Typography
                component="a"
                sx={{ color: "white" }}
                onClick={() => (window.location.href = "tel:+918980477072")}
                className="link"
              >
                8980477072
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  color: "#61dafb",
                  padding: "15px 0px 5px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Follow me on
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <InstagramIcon
                onClick={() =>
                  redirectToSocialMedia(
                    "https://www.instagram.com/i_m_pitroda/"
                  )
                }
                className="social-media-icon"
              />
              <FacebookIcon
                onClick={() =>
                  redirectToSocialMedia(
                    "https://www.facebook.com/profile.php?id=100004412537197"
                  )
                }
                className="social-media-icon"
              />
              <TwitterIcon
                onClick={() =>
                  redirectToSocialMedia("https://twitter.com/Im_PITRODA_7")
                }
                className="social-media-icon"
              />
              <LinkedInIcon
                onClick={() =>
                  redirectToSocialMedia(
                    "https://www.linkedin.com/in/kishan-pitroda-a6579716a/"
                  )
                }
                className="social-media-icon"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="copyright-section">
        <div>Copyright &#169; 2022 Kishan Pitroda</div>
        <div>
          <img alt="Kishan Pitroda" src={logo} height="25px" />
        </div>
      </Grid>
    </Grid>
  );
};
export default Footer;
