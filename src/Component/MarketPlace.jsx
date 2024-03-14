import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const MarketPlace = () => {
  const [age, setAge] = React.useState("");
  const textStyle = {
    color: "#FFF",
    fontFamily: "Roboto Condensed",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };
  const tickStyle = {
    color: "#262626",
    fontFamily: "Roboto Condensed",
    fontSize: "13px",
    fontStyle: "normal",
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const availText = {
    color: "#878787",
    fontFamily: "Roboto Condensed",
    fontSize: "12px",
    fontStyle: "normal",
    
  };

  const btnStyle = {
    borderRadius: "10px",
    background: "#FFF",
    width: "113px",
    height: "44px",
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
    border: "none",
    fontWeight:600,
  };

  const data = [
    { value: "52", label: "Sessions" },
    { value: "410", label: "Owner" },
    { value: "2,032", label: "Sessions" },
    { value: "74", label: "Sessions" },
  ];
  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      url: "/asets/card1.png",
      Sem: "1",
      Avail_ses: "/1000",
      Price: "1999",
    },
    {
      id: 2,
      title: "Card 2",
      url: "/asets/card2.png",
      Sem: "2",
      Avail_ses: "/1000",
      Price: "1999",
    },
    {
      id: 3,
      title: "Card 3",
      url: "/asets/card3.png",
      Sem: "3",
      Avail_ses: "/1000",
      Price: "1999",
    },
    {
      id: 4,
      title: "Card 4",
      url: "/asets/card4.png",
      Sem: "4",
      Avail_ses: "/1000",
      Price: "1999",
    },
    {
      id: 5,
      title: "Card 5",
      url: "/asets/card1.png",
      Sem: "5",
      Avail_ses: "/1000",
      Price: "1999",
    },
    {
      id: 6,
      title: "Card 6",
      url: "/asets/card2.png",
      Sem: "6",
      Avail_ses: "/1000",
      Price: "1999",
    },
    {
      id: 7,
      title: "Card 7",
      url: "/asets/card3.png",
      Sem: "7",
      Avail_ses: "/1000",
      Price: "1999",
    },
    {
      id: 8,
      title: "Card 8",
      url: "/asets/card4.png",
      Sem: "8",
      Avail_ses: "/1000",
      Price: "1999",
    },
  ];

  return (
    <Box style={{ width: "100%", overflow: "hidden" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ position: "relative",overflowY:'hidden' }}
      >
        <img src="/asets/marketBanner.png" width="100%" height="auto" alt="" />
        <Stack
          direction="column"
          display="flex"
          spacing={2}
          position="absolute"
          justifyContent="center"
          textAlign="center"
          sx={{
            height: "auto",
            width: { xs: "90%", sm: "60%", md: "41%" },
            top: { xs: "10%", sm: "5%", md: "21%", lg: "38%" },
            left: { xs: "5%", sm: "3%", md: "5%" },
            '@media (max-width: 540px)': {
              left: "5%",top:'18px'
            },
            '@media (max-width: 320px)': {
              left: "5%",top:'2px'
            },
            '@media (min-width: 1501px)': {
              left: "5%",top:'49%' 
            },
          }}
        >
          <img src="/asets/marketlogo.png" height="80px" width="85px" alt="" />
          <Typography style={textStyle} textAlign="justify">
            B.Tech Mechanical Engineering
          </Typography>
          <Typography
            style={{
              ...textStyle,
              display: { xs: "none !important", sm: "block" },
              fontSize: { xs: "0px", sm: "30px", md: "30px" }, // Adjust font size accordingly
            }}
            fontSize={{
              xs: "12px !important",
              sm: "14px !important",
              md: "16px!important",
            }}
            textAlign="justify"
          >
            Explore the transformative potential of IoT, AI/ML, Blockchain, and
            Digital Twin Metaverse, AR-VR applications in the realm of
            Mechanical Engineering.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          display="flex"
          position="absolute"
          sx={{
            left: { xs: "50%", sm: "70%" },
            top: { xs: "40%", sm: "76%", md: "209px", lg: "260px" },
            '@media (min-width: 1501px)': {
              left: "70%",top:'82%' 
            },
            transform: { xs: "translateX(-50%)", sm: "none" },
          }}
        >
          {data.map((item, index) => (
            <Stack key={index} sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                style={textStyle}
                fontSize={{
                  xs: "12px !important",
                  sm: "20px !important",
                  md: "30px !important",
                }}
              >
                {item.value}
              </Typography>
              <Typography
                style={textStyle}
                fontSize={{
                  xs: "12px !important",
                  sm: "10px !important",
                  md: "16px !important",
                }}
                fontWeight="400px"
              >
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          padding: "27px 67px 43px 65px",
          marginRight: { sm: "0px", md: "50vh" },
          '@media (max-width: 768px)': {
            padding: "20px 25px", 
            marginRight: "0px", 
          },
          '@media (max-width: 550px)': {
            padding: "20px 25px", 
            marginRight: "0px", 
          },
        }}
      >
        <Typography
          textAlign="justify"
          fontSize={{
            xs: '14px !important',
            sm: '16px !important',
            md: '18px !important',
            lg: '22px !important',
          }}
          lineHeight={{
            xs: '22px !important',
            sm: '24px !important',
            md: '26px !important',
            lg: '28px !important',
          }}
          color="#636880"
        >
          These technologies empower us to create smart, efficient systems that
          monitor, predict, and optimize mechanical processes, ultimately
          leading to enhanced productivity, reduced downtime, and cost savings.
          Join our special sessions to harness the power of Industry 4.0 and
          revolutionize the field of mechanical engineering.
        </Typography>
      </Box>
      <Box style={{ padding: "0 1257px 30px 4.5%",backgroundColor:'#fff',margin:'auto' }}>
        <Stack
          direction="row"
          spacing={2}
          style={{
            width: "40vh",
            height:'6vh',
            backgroundColor: "rgba(198, 198, 198, 0.17)",
            borderRadius: "10px",
          }}
        >
          <Button sx={{...btnStyle,color:'#000 !important',textTransform:'none'}} variant="outlined">
            Items
          </Button>
          <Button sx={{ border:'none',color:'#707070',textTransform:'none'}} variant="outlined">
            Offers
          </Button>
          <Button sx={{ border:'none',color:'#707070',textTransform:'none' }} variant="outlined">
            Analytics
          </Button>
        </Stack>
      </Box>
      <Box
        style={{
          padding: "20px",
          width: "92%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Divider />
      </Box>
      <Box style={{ padding: "20px", width: "92%", margin: "auto" }}>
        <Grid container direction="row" spacing={1.5}>
          <Grid item xs={12} sm={6} md={6}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Semester
              </InputLabel>
              <Select
                sx={{ backgroundColor: "rgba(198, 198, 198, 0.17)" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select Semester"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Price Low to High
              </InputLabel>
              <Select
                sx={{ backgroundColor: "rgba(198, 198, 198, 0.17)" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Price Low to High"
                onChange={handleChange}
              >
                <MenuItem value={10}>one</MenuItem>
                <MenuItem value={20}>two</MenuItem>
                <MenuItem value={30}>Three</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#0856CC",
                width:'100%',
                height: "56px",
              }}
            >
              <Typography>Search</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          padding: "20px",
          marginLeft: { sm: "13px", md: "18px", lg: "34px" },
          marginBottom: "20px",
          textAlign: "start",
        }}
      >
        <Typography style={{ ...textStyle, color: "#000 !important" }}>
          Available Sessions
        </Typography>
      </Box>
      <Box style={{ margin: "auto", width: "93%" }}>
        <Grid container spacing={2}>
          {cardsData.map((card) => (
            <Grid key={card.id} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: "100%",
                  border: "1px solid #cdcdcd ",
                  borderRadius: "10px",
                  boxShadow:'none'
                }}
              >
                <CardMedia
                  sx={{ height: "219px", margin: "10px", borderRadius: "10px" }}
                  image={card.url}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    style={{
                      color: "#262626",
                      fontFamily: "Roboto Condensed",
                      fontSize: "18px",
                      display: "flex",
                      fontWeight: 500,
                      textAlign: "flex-start",
                    }}
                  >
                    Mechanical Engineering
                  </Typography>
                  <Typography
                    style={{
                      color: "#262626",
                      fontFamily: "Roboto Condensed",
                      fontSize: "18px",
                      display: "flex",
                      textAlign: "flex-start",
                      fontWeight: 400,
                    }}
                  >
                    Semester-{card.Sem}
                  </Typography>
                </CardContent>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "auto",
                    height: "53px",
                    borderRadius: "10px",
                    background: "#F3F3F3",
                    margin: "0 10px 10px",
                  }}
                >
                  <Stack direction='column' sx={{margin:{md:'20px',sm:'45px',xs:'45px',lg:'45px'}}}>
                  <Typography style={availText}>Available Sessions</Typography>
                  <Typography style={{...tickStyle,color:'#0856CC'}}><span style={{color:'#000'}}>482</span><span/>{card.Avail_ses}</Typography>
                  </Stack>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ height: "40px" }}
                  />
                   <Stack direction='column' sx={{margin:{md:'20px',sm:'60px',xs:'60px',lg:'60px'}}}>
                  <Typography style={availText}>Price</Typography>
                  <Typography style={{...tickStyle,color:'#0856CC'}}>₹{card.Price}</Typography>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MarketPlace;
