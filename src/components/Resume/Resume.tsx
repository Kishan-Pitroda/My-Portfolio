import React from "react";
import {
  Card,
  Grid,
  Container,
  CardContent,
  Avatar,
  Typography,
  Link,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/system";
import avatar from "../../assets/images/avatar2.jpg";
import "./Resume.css";

const Resume: React.FC = () => {
  const redirectToSocialMedia = (path: string) => {
    window.open(path, "_blank");
  };
  return (
    <Grid container>
      <Grid item xs={12} className="top-view-resume">
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            mt: 4,
          }}
        >
          <Card sx={{ width: "100%" }} className="card-resume">
            <CardContent className="card-content-resume">
              <Grid container>
                <Grid item xs={7}>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                      fontSize: "18px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    KISHAN PITRODA
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
                    Software Engineer
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                      paddingTop: "5px",
                    }}
                  >
                    <MailOutlineIcon sx={{ paddingRight: "10px" }} />
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#000",
                      }}
                    >
                      pitrodak1@gmail.com
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                      paddingTop: "5px",
                    }}
                  >
                    <PhoneIphoneIcon sx={{ paddingRight: "10px" }} />
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#000",
                      }}
                    >
                      8980477072
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                      paddingTop: "5px",
                    }}
                  >
                    <LocationOnIcon sx={{ paddingRight: "10px" }} />
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#000",
                      }}
                    >
                      C.T.M, Ahmedabad.
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                      paddingTop: "5px",
                    }}
                  >
                    <InstagramIcon
                      onClick={() =>
                        redirectToSocialMedia(
                          "https://www.instagram.com/i_m_pitroda/"
                        )
                      }
                      className="instagram"
                    />
                    <FacebookIcon
                      onClick={() =>
                        redirectToSocialMedia(
                          "https://www.facebook.com/profile.php?id=100004412537197"
                        )
                      }
                      className="social-media-icon-resume"
                    />
                    <TwitterIcon
                      onClick={() =>
                        redirectToSocialMedia(
                          "https://twitter.com/Im_PITRODA_7"
                        )
                      }
                      className="social-media-icon-resume"
                    />
                    <LinkedInIcon
                      onClick={() =>
                        redirectToSocialMedia(
                          "https://www.linkedin.com/in/kishan-pitroda-a6579716a/"
                        )
                      }
                      className="social-media-icon-resume"
                    />
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Avatar
                      alt="Kishan Pitroda"
                      src={avatar}
                      sx={{
                        width: { xs: 100, sm: 140 },
                        height: "100%",
                        border: "5px solid #61dafb",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Grid>
      <Grid container className="intermediate-view-resume">
        <Grid item xs={12}>
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: 4,
            }}
          >
            <Card sx={{ width: "100%" }} className="card-resume-intermediate">
              <CardContent className="card-content-resume">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Education
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{ borderLeft: "5px solid #fff" }}
                      className="card-resume-education"
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#61dafb",
                          }}
                        >
                          Bachelor of Engineering
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          L.D.College of Engineering
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          2016-2020
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          CGPA: 8.50
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{ borderLeft: "5px solid #fff" }}
                      className="card-resume-education"
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#61dafb",
                          }}
                        >
                          High School (11th-12th)
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          Vivekanand Vidyalaya
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          2014-2016
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          Percentage: 76.20%
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{ borderLeft: "5px solid #fff" }}
                      className="card-resume-education"
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#61dafb",
                          }}
                        >
                          High School (10th)
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          Ashwamegh High School
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          2013-2014
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          Percentage: 86.33%
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: 4,
            }}
          >
            <Card sx={{ width: "100%" }} className="card-resume-intermediate">
              <CardContent className="card-content-resume">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Work Experience
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Card
                      sx={{ borderLeft: "5px solid #fff" }}
                      className="card-resume-education"
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          Currently working as a Software Engineer at Tatvasoft.
                          I have hands on experience in front-end technologies
                          like React, Vue, javascript, typescript, material-ui,
                          vuetify, bootstrap, css, scss and so on. I have
                          hands-on experience in writing unit and snapshot test
                          with different tools like enzyme, react-test-renderer,
                          react-testing-library. I also have experience in
                          contact center platform called twilio flex which is
                          backed by react. I worked on 5+ development and
                          maintenance projects.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: 4,
            }}
          >
            <Card sx={{ width: "100%" }} className="card-resume-intermediate">
              <CardContent className="card-content-resume">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Skills
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Card
                      sx={{ borderLeft: "5px solid #fff" }}
                      className="card-resume-education"
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#61dafb",
                          }}
                        >
                          Programming Languages & Tools
                        </Typography>
                        <Grid
                          container
                          sx={{
                            pt: 1,
                            color: "#fff",
                          }}
                          className="tech-icon-container"
                        >
                          <span>
                            <i className="devicon-javascript-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-typescript-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-html5-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-css3-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-react-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-vuejs-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-github-plain"></i>
                          </span>
                          <span>
                            <i className="devicon-bootstrap-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-windows8-plain colored"></i>
                          </span>
                          <span>
                            <i className="devicon-visualstudio-plain colored"></i>
                          </span>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: 4,
            }}
          >
            <Card sx={{ width: "100%" }} className="card-resume-intermediate">
              <CardContent className="card-content-resume">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Hobbies
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Card
                      sx={{ borderLeft: "5px solid #fff" }}
                      className="card-resume-education"
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          Apart from being a web developer, I enjoy most of my
                          time listening and playing music. I love playing
                          piano🎹 in my spare time!. Also I love travelling,
                          whenever got chance I prefer to travel with my family
                          or friends.
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          I spend a large amount of my free time exploring the
                          latest technolgy advancements in the frontend web
                          technology and coding👨‍💻 in my personal projects!
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: 4,
            }}
          >
            <Card sx={{ width: "100%" }} className="card-resume-intermediate">
              <CardContent className="card-content-resume">
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Personal Projects
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Card
                      sx={{ borderLeft: "5px solid #fff" }}
                      className="card-resume-education"
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          <li>
                            <Link
                              className="project-link"
                              underline="none"
                              href="https://covidcasetracker-by-impitroda.web.app/"
                            >
                              Covid19 Case Tracker Web App
                            </Link>
                          </li>
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          <li>
                            <Link
                              underline="none"
                              href="/"
                              className="project-link"
                            >
                              My Personalize Web App
                            </Link>
                          </li>
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                          }}
                        >
                          <li>
                            <Link
                              className="project-link"
                              underline="none"
                              href="https://tictactoe-by-impitroda.web.app/"
                            >
                              Tic-Tac-Toe Game Web App
                            </Link>
                          </li>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Resume;
