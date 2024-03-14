import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const About = () => {
  const textDesign = {
    color: "#262626",
    fontFamily: "Roboto Condensed",
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    margin: "20px",
    textAlign: "left",
    textJustify: "inter-word",
  };
  const headingText = {
    fontFamily: "Roboto Condensed",
    fontWeight: 700,
    fontSize:'15px'
  };

  const contentText = {
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    fontSize:'13px',
   color:'#636880'
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box>
        <img
          src="/asets/aboutBanner.png"
          alt="no_image"
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "80%" },
          marginBottom: "8vh !important",
          width: "100%",
          margin: "auto",
          marginTop: { xs: "0vh", md: "8vh" },
          "@media (max-width: 600px)": {
            maxWidth: "90%",
          },
          "@media (min-width: 960px)": {
            maxWidth: "90%",
          },
          "@media (min-width: 1280px)": {
            maxWidth: "70%",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5.5}>
            <Typography
              sx={{
                color: "#262626",
                textAlign: "center",
                fontFamily: "Roboto Condensed",
                fontSize: { xs: "30px", sm: "40px", md: "80px" },
                lineHeight:'14vh',
                fontWeight: 700,
                marginTop: { xs: "8vh", md: "12vh" },
                marginBottom:'10vh'
              }}
            >
              Why GyanBatua
            </Typography>
            <img
              sx={{
                width: { xs: "20%", md: "108.863px" },
                height: { xs: "20%", md: "142.001px" },
                marginTop: { xs: "8vh", md: "1vh" },
              }}
              src="/asets/package.png"
              alt="no_image"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6.5}>
            <Typography
              sx={{ ...textDesign, fontSize: { xs: "10px", md: "15px" } }}
            >
              In the ever-changing landscape of career and skill development,
              selecting the right platform is a decision of paramount
              importance. Gyan Batua stands apart as your dedicated partner in
              lifelong learning and career advancement.
            </Typography>
            <Typography
              sx={{ ...textDesign, fontSize: { xs: "10px", md: "15px" } }}
            >
              Gyan Batua is a comprehensive Learning Records Management System
              (LRMS) that empowers you to showcase a wide spectrum of skills and
              learnings. Whether you're a plumber, programmer, artist, or a
              student with diverse interests and your expertise.
            </Typography>
            <Typography
              sx={{ ...textDesign, fontSize: { xs: "10px", md: "15px" } }}
            >
              Bid farewell to outdated Word or PDF resumes. Gyan Batua
              transforms your profile and skills into a unique QR code, ensuring
              that potential employers and collaborators have immediate access
              to your latest qualifications and achievements.
            </Typography>
            <Typography
              sx={{ ...textDesign, fontSize: { xs: "10px", md: "15px" } }}
            >
              Every time you add a new skill or achieve a milestone, you earn
              Gyan Coins. These tokens are not just a measure of your
              accomplishments; they are the currency of our upcoming Skills
              Marketplace. Use Gyan Coins to further your knowledge and make
              your journey of skill enhancement even more rewarding.
            </Typography>
            <Typography
              sx={{ ...textDesign, fontSize: { xs: "10px", md: "15px" } }}
            >
              Our forthcoming Skills Marketplace is a revolution in the world of
              career and skill development. It transcends the traditional
              job-seeking experience, creating a dynamic platform where skills
              are exchanged using Gyan Coins. This dynamic ecosystem makes
              learning accessible to all users.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#F7F9FC",
          marginBottom: "8vh !important",
          width: "100%",
          margin: "auto",
          marginTop: { xs: "0vh", md: "8vh" },
        }}>
        <Grid container spacing={2} style={{width:'80%',margin:'auto'}}>
          <Grid item xs={2} sm={2} md={2} lg={1.5}></Grid>
          <Grid direction="column" item xs={12} md={5.5}>
            <Box style={{ textAlign: "left"}}>
              <img
                style={{
                  width: "90px",
                  height: "auto",
                  marginTop: "15vh",
                  marginBottom:'10px'
                }}
                src="/asets/Group.png"
                alt="no_image"
              />
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "45px", lg:'40px' },
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontFamily: "Roboto Condensed",
                }}
              >
                <span>OUR</span>
                <span style={{ color: "#0856CC", marginLeft: "5px" }}>
                  VISION
                </span>
              </Typography>
              <Typography
                sx={{
                  width:{xs:'30vh', sm:"54vh"},
                  fontFamily: "Roboto Condensed",
                  fontWeight: 400,
                  color:'#262626',
                  fontSize: { xs: "10px", md: "16px", lg:'18px' },
                  textAlign: "left",
                }}
              >
                Empowering individuals to harness their skills in cutting-edge
                technologies, envision the ultimate knowledge wallet, and unlock
                boundless global opportunities.
              </Typography>
            </Box>
          </Grid>
          
          <Grid
            item
            xs={12}
            md={4}
            direction="column"
            style={{ marginBottom: "5%" }}
          >
            <Box style={{ textAlign: "justify" }}>
              <img
                style={{
                  width: "70px",
                  height: "auto",
                  marginTop: "15vh",
                  marginBottom:'10px'
                }}
                src="/asets/tick.png"
                alt="no_image"
              />
              <Typography
                sx={{
                
                  fontSize: { xs: "20px", md: "45px", lg:'40px' },
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontFamily: "Roboto Condensed",
                }}
              >
                <span>OUR</span>
                <span style={{ color: "#0856CC", marginLeft: "5px" }}>
                  MISSION
                </span>
              </Typography>
              <Typography
                sx={{
                  width:{xs:'30vh', sm:"54vh",lg:'60vh'},
                  fontFamily: "Roboto Condensed",
                  fontWeight: 400,
                  fontSize: { xs: "10px", md: "16px", lg:'18px' },
                  textAlign: "left",
                  color:'#262626',
                }}
              >
                To ensure the creation of a seamless bridge between skills and
                opportunities, linking curriculum studies to technology use
                cases, where users can chronicle their learning journey, connect
                with global prospects, and elevate their professional
                trajectories using Blockchain-enabled platform and AI-powered
                matchmaking.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "80%" },
          width: "100%",
          margin: "auto",
          marginTop: { xs: "0vh", md: "8vh" },
          "@media (max-width: 600px)": {
            maxWidth: "90%",
          },
          "@media (min-width: 960px)": {
            maxWidth: "90%",
          },
          "@media (min-width: 1280px)": {
            maxWidth: "70%",
          },
        }}
      >
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              fontWeight: 700,
              fontSize: "45px",
            }}
          >
            GyanBatua Key Features
          </Typography>

          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              fontWeight: 400,
              fontSize: "17px",
            }}
          >
            Gyan Batua is your ideal platform for career and skill development.
            Here's why:
          </Typography>
        </Stack>
        <Grid container spacing={2} sx={{ mt: "40px", mb: "30px" }}>
          <Grid item xs={0} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <Box style={{ width: "250px" }}>
              <Typography style={{ ...headingText, textAlign: "justify" }}>
                Comprehensive Skill Showcase
              </Typography>
              <Typography style={{ ...contentText, textAlign: "justify" }}>
                We celebrate a diverse range of skills, from plumbing to
                programming. Your expertise finds its home here.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box style={{ width: "250px" }}>
              <Typography style={{ ...headingText, textAlign: "justify" }}>
                Dynamic Live Resume
              </Typography>
              <Typography style={{ ...contentText, textAlign: "justify" }}>
                We celebrate a diverse range of skills, from plumbing to
                programming. Your expertise finds its home here.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <img src="/asets/keyDesign.png" width="100%" alt="no_image" />
        </Box>
        <Grid container spacing={2} sx={{ mt: "40px", mb: "30px" }}>
          <Grid item xs={0} sm={0} md={0} lg={2.5}></Grid>
          <Grid item xs={12} sm={4} md={3.5} lg={3}>
            <Box style={{ width: "230px" }}>
              <Typography style={{ ...headingText, textAlign: "left" }}>
                AI-Powered Matchmaking
              </Typography>
              <Typography style={{ ...contentText, textAlign: "left" }}>
                Our AI engine finds the perfect opportunities for you, aligning
                with your skills and preferences
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3.5}>
            <Box sx={{ width: "230px" }}>
              <Typography style={{ ...headingText, textAlign: "left" }}>
                Earn Gyan Coins
              </Typography>
              <Typography style={{ ...contentText, textAlign: "left" }}>
                Get rewarded for your skills. Gyan Coins are your currency for
                expanding your knowledge in our Skills Marketplace.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={4} lg={3}>
            <Box sx={{ width: "230px" }}>
              <Typography style={{ ...headingText, textAlign: "left" }}>
                Skills Marketplace
              </Typography>
              <Typography style={{ ...contentText, textAlign: "left" }}>
                Experience a groundbreaking platform for skills exchange using
                Gyan Coins.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
