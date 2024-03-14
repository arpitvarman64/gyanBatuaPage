import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../Assets/footerlogo.png";
import playstore from "../Assets/playstore.png";
import apple from "../Assets/apple.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
const Footer = () => {
  const theme = useTheme();
  const styles = {
    footer: {
      width: {xs:"100%",sm:"90%"},
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: { md: "20px", xs: "0" },
      height: { xs: "120rem",sm:"85rem" , md:"auto" },
      position: "relative",
    },
    logowrapper: {
      display: "flex",
    },
    logoheading: {
      color: "#0856CC", // Corrected color value
      fontFamily: "Alumni Sans",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 800,
      //   lineHeight: "28px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      [theme.breakpoints.up("md")]: {
        fontSize: "20px", // Smaller font size for tablets and medium screens
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "20px", // Even smaller font size for small screens
      },
    },
    logopara: {
      color: "#242424", // Corrected color value
      fontFamily: "Shippori Mincho B1",
      fontSize: "10.544px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "11.502px",
      letterSpacing: "0.738px",
    },
    logopara2: {
      color: "#636880", // Corrected color value
      fontFamily: "Roboto Condensed",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    globleheading: {
      color: "#262626", // Corrected color value
      fontFamily: "Roboto Condensed",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    golblepara: {
      color: "#575757", // Corrected color value
      fontFamily: "Roboto Condensed",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px",
    },
    getHeading: {
      color: "#262626", // Corrected color value
      fontFamily: "Roboto Condensed",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      marginBottom: "1rem",
    },
    getlogo:{
      position: "absolute",
      left: "1rem",
      bottom: "2rem",
      [theme.breakpoints.down("md")]: {
        left: "1rem",
      bottom: "2rem",
      },
    },
    bottomtext: {
      color: "#262626", // Corrected color value
      fontFamily: "Roboto Condensed",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
  };
  const learningSection = [
    "What is Gyan Batua?",
    "Who can benefit from Gyan Batua",
    "What is Live Resume & My Barcode on Gyan Batua",
    "How do I record my learning journey and what happens next?",
    "How do I activate AI matchmaking engine for me",
    "How do I monetize my skills on Gyan Batua",
    "Navigating the Gyan Batua",
    "Introduction to Gyan Coins",
    "Agriculture and Environmental Sciences",
    "Transaction Fees Explained",
    "What is Gyan Chain for Tracking Skill Ownership and Exchange",
    "How do I secure my Educational Assets on Gyan Batua",
    "Key Differentiators of Gyan Batua",
  ];
  const resourcesSection = [
    "Blog",
    "FAQs",
    "Community",
    "Partners",
    "Litepaper",
    "Whitepaper",
    "Platform Specific",
    "Tax & Fee",
    "Privacy Policy",
    "Terms & Conditions",
    "Data Privacy",
    "Roadmap",
  ];
  const categories = [
    "Health and Medicine",
    "Engineering and Technology",
    "Business and Finance",
    "Arts and Design",
    "Education and Training",
    "Information Technology",
    "Legal Services",
    "Trades and Services",
    "Agriculture and Environmental Sciences",
    "Media and Communication",
    "Sports and Fitness",
    "Hospitality and Tourism",
    "Public Service and Government",
    "Research and Development",
    "Arts and Creative Professions",
    "Hospitality and Tourism",
    "Public Service and Government",
    "Research and Development",
    "Arts and Creative Professions",
  ];
  return (
    <Box>
      <Box sx={styles.footer}>
        <Box sx={{ width: "95%", margin: "0 auto" }}>
          <Grid container>
            <Grid item xs={12} md={3} sm={12} marginTop="1.5rem">
              <Box sx={styles.logowrapper}>
                <img src={logo}></img>
                <Box marginLeft="0.5rem">
                  <Typography sx={styles.logoheading}>GyanBatua</Typography>
                  <Typography sx={styles.logopara}>
                    YOUR SKILLS WALLET
                  </Typography>
                </Box>
              </Box>
              <Box marginTop="1.5rem" width="80%">
                <Typography sx={styles.logopara2}>
                  Gyan Batua is redefining matchmaking for skills. Create your
                  own Skills Wallet, generate a unique QR code, and maintain a
                  Live Resume. Get noticed, showcase your talents, and trade
                  your abilities seamlessly.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} md={1.5} sm={6}  marginTop="1.5rem">
              <Box>
                <Typography sx={styles.globleheading}>My Account</Typography>
                <Box marginTop="1rem">
                  <Typography sx={styles.golblepara}>Batua</Typography>
                  <Typography sx={styles.golblepara}>Watchlist</Typography>
                  <Typography sx={styles.golblepara}>Drops</Typography>
                </Box>
              </Box>
              <Box>
                <Typography sx={styles.globleheading} marginTop="1rem">
                  Stats
                </Typography>
                <Box marginTop="1rem">
                  <Typography sx={styles.golblepara}>Ranking</Typography>
                  <Typography sx={styles.golblepara}>Activity</Typography>
                </Box>
              </Box>
              <Box>
                <Typography sx={styles.globleheading} marginTop="1rem">
                  Company
                </Typography>
                <Box marginTop="1rem">
                  <Typography sx={styles.golblepara}>About Us</Typography>
                  <Typography sx={styles.golblepara}>Careers</Typography>
                  <Typography sx={styles.golblepara}>Media</Typography>
                  <Typography sx={styles.golblepara}>Contacts</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={1.5} sm={6} marginTop="1.5rem">
              <Box>
                <Typography sx={styles.globleheading}>Resources</Typography>
                <Box marginTop="1rem">
                  {resourcesSection.map((item, index) => (
                    <Typography key={index} sx={styles.golblepara}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sm={6} marginTop="1.5rem">
              <Box>
                <Typography sx={styles.globleheading}>Marketplace</Typography>
                <Box marginTop="1rem">
                  {categories.map((category, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex",  }}
                    >
                      <Typography sx={styles.golblepara}>{category}</Typography>
                      <KeyboardArrowDownIcon color="action" />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sm={6} marginTop="1.5rem">
              <Box>
                <Typography sx={styles.globleheading}>Learning</Typography>
                <Box marginTop="1rem">
                  {learningSection.map((item, index) => (
                    <Typography key={index} sx={styles.golblepara}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={styles.getlogo}
        >
          <Typography sx={styles.getHeading}>Get the App</Typography>
          <Box>
            <img style={{ width: "10rem" }} src="/"></img>
            <img
              style={{ width: "10rem", marginLeft: "1rem" }}
              src={apple}
            ></img>
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" marginTop="1rem">
        <Typography sx={styles.bottomtext}>
          All trademarks are the property of their respective owners. All rights
          reserved © 2023 Mobiloitte Technologies India Pvt Ltd
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
