import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";

const Faqs = () => {
  const StyledButton = styled(Button)`
    color: #7b7f87;
    font-weight: 400;
    border-radius: 0;
    width: 100%;
    font-family: "Roboto Condensed";
    text-transform: none;
    font-size: 20px;
    line-height: 18px;

    &:hover {
      border-bottom: 3px solid #0856cc;
    }
  `;
  const [expanded, setExpanded] = useState(0);

  const accordionData = [
    {
      question: "What Inspired the Creation of Gyan Batua?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "What Courses are available on Gyan Batua?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Are Gyan Batua's courses accredited?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How do I join Gyan Batua?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How can I access Gyan Batua's courses?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Are Gyan Batua's courses accredited?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Is the Course recognised by my college or any University?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "Is Gyan Batua suitable for beginners or experienced professionals?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "How does Gyan Batua ensure the privacy and security of my data?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How does the Blockchain-Based KYC with Unique QR work?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How do I earn Gyan Coins?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "How does Gyan Batua ensure the authenticity of skills listed by candidates?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "How does the AI matchmaking system enhance my recruitment process?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "What is the Watchlist Requested corner in my Gyan Batua Profile?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question:
        "Can I post job or internship opportunities on the platform as an Employer?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <img width="100%" src="/asets/bannerFaq.png" alt="no_image" />
      </Box>

      <Typography
        sx={{
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: { xs: "28px", md: "55px" },
          lineHeight: { xs: "36px", md: "70.31px" },

          color: "#262626",

          margin: "7vh auto 5vh",
        }}
      >
        FAQ's
      </Typography>

      <Box sx={{ width: "57%", margin: "auto" }}>
        <TextField
          sx={{
            width: "100%",
            backgroundColor: "rgba(198, 198, 198, 0.17)",
          }}
          variant="outlined"
          placeholder="Search"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "35px",
          marginBottom: "44px",
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: { xs: "21px", md: "35px" },
          lineHeight: { xs: "36px", md: "58.59px" },
          color: "#262626",
        }}
      >
        <h2>Have any Questions?</h2>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: "4%", md: "4", lg: "5%" }}
        sx={{ width: "40%", margin: "auto" }}
      >
        <StyledButton>Number1</StyledButton>
        <StyledButton>Number2</StyledButton>
        <StyledButton>Number3</StyledButton>
        <StyledButton>Number4</StyledButton>
        <StyledButton>Number5</StyledButton>
        <StyledButton>Number6</StyledButton>
      </Stack>

      {/* <Box
        sx={{
          marginLeft: { xs: "10px", md: "5%", lg: "200px" },
          marginRight: { xs: "10px", md: "5%", lg: "200px" },
          marginTop: { xs: "20px", md: "50px" },
        }}
        className="accord"
      >
        <Accordion
          sx={{ borderRadius: "10px", marginBottom: "20px" }}
          expanded={expanded}
          onChange={handleAccordionChange}
        >
          <AccordionSummary
            sx={{ background: "#0856CC", borderRadius: "10px" }}
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography fontWeight="500" fontSize="18px" color="#fff">
              What is Gyan Batua?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              textAlign="left"
              color="#636880"
              fontWeight="53"
              fontSize="16px"
            >
              Gyan Batua is a premier LRMS
              (Learning-Records-Management-Platform) designed to adeptly bridge
              the divide between the acquisition and application of digital
              skills. By integrating advanced Blockchain and Artificial
              Intelligence technologies, we've established a robust platform
              that efficiently aligns skill seekers with relevant opportunities
              on a global scale. Simply put, Gyan Batua is the nexus where
              digital skill enthusiasts meet their perfect match in internships,
              apprenticeships, and job roles. Our vision is grand yet clear: We
              are redefining the global ed-tech landscape by making it
              skill-centric, transparent, incentivized, and aligned with
              real-world demands.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            style={{
              borderRadius: "10px",
              marginBottom: "20px",
              borderLeft: "5px solid #0856CC",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls={`panel${index + 2}-content`}
              id={`panel${index + 2}-header`}
            >
              <Typography fontWeight="500" fontSize="18px">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                color="#636880"
                textAlign="left"
                fontWeight="53"
                fontSize="16px"
              >
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box> */}

<Box
      sx={{
        marginLeft: { xs: "10px", md: "5%", lg: "200px" },
        marginRight: { xs: "10px", md: "5%", lg: "200px" },
        marginTop: { xs: "20px", md: "50px" }
        
      }}
      className="accord"
    >
      <Accordion
        
        expanded={expanded === 1}
        onChange={handleAccordionChange(1)}
        sx={{
          borderRadius: "10px",
          marginBottom: "20px",
          '& .css-1c35hjw-MuiPaper-root-MuiAccordion-root::before': {
           
            backgroundColor:'none !important'
          },
        }}
      >
         <AccordionSummary
            sx={{ background: "#0856CC", borderRadius: "10px",backgroundColor:'none' }}
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography fontWeight="500" fontSize="18px" color="#fff">
              What is Gyan Batua?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              textAlign="left"
              color="#636880"
              fontWeight="53"
              fontSize="16px"
            >
              Gyan Batua is a premier LRMS
              (Learning-Records-Management-Platform) designed to adeptly bridge
              the divide between the acquisition and application of digital
              skills. By integrating advanced Blockchain and Artificial
              Intelligence technologies, we've established a robust platform
              that efficiently aligns skill seekers with relevant opportunities
              on a global scale. Simply put, Gyan Batua is the nexus where
              digital skill enthusiasts meet their perfect match in internships,
              apprenticeships, and job roles. Our vision is grand yet clear: We
              are redefining the global ed-tech landscape by making it
              skill-centric, transparent, incentivized, and aligned with
              real-world demands.
            </Typography>
          </AccordionDetails>
      </Accordion>

      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          style={{
            borderRadius: "10px",
            marginBottom: "20px",
            borderLeft: "5px solid #0856CC",
          }}
          expanded={expanded === index + 2}
          onChange={handleAccordionChange(index + 2)}
        >
         <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls={`panel${index + 2}-content`}
              id={`panel${index + 2}-header`}
            >
              <Typography fontWeight="500" fontSize="18px">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                color="#636880"
                textAlign="left"
                fontWeight="53"
                fontSize="16px"
              >
                {item.content}
              </Typography>
            </AccordionDetails>
        </Accordion>
      ))}
    </Box>

      {/* <Box >
        <h3>Not finding what you're looking for?</h3>
        <p style={{ color: "gray" }}>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form
        </p>
      </Box>
      <Box sx={{ marginLeft: { xs: "10px", md: "5%", lg: "200px" }, marginRight: { xs: "10px", md: "5%", lg: "200px" } }}>
        <Button sx={{ border: "1px solid blue" }}>Contact Us</Button>
      </Box> */}
      <Box sx={{ marginY: "70px" }}>
        <h2 style={{ fontFamily: "Roboto Condensed", fontSize: "30px" }}>
          Not finding what you’re looking for?{" "}
        </h2>
        <p
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "16px",
            color: "#636880",
          }}
        >
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form
        </p>
        <br />
        <Button style={{ width: "214px", margin: "18px" }} variant="outlined">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Faqs;
