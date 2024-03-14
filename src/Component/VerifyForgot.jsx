import { Box, Button, Paper, Typography } from "@mui/material";






const VerifyForgot = () => {
    const handleSubmit={}
  return (
   
          <Box
            sx={{
              height: "calc(100vh - 100px)",
              position: "relative",
              zIndex: "999",
              filter: "drop-shadow(0px 10px 40px rgba(0, 0, 0, 0.16))",
            }}
          >
            <Box
              style={{
                borderRadius: "5px",

                backdropFilter: "blur(25px)",
                height: "initial",
                margin: "auto",
                maxWidth: " 673px",
                width: "100%",
                maxHeight: "100%",
              }}
            >
              <Paper
                style={{
                  flexDirection: "column",
                  gap: "10px",
                  padding: "30px 40px 50px",
                  marginTop: "120px",
                  width: "500px", 
                height: "320px", 
                }}
                elevation={0.1}
              >
                <img src="/asets/checkCircle.png" alt="no_image"
                  style={{ mixBlendMode: 'hard-light',width: '144px',
                  height: '123px',
                  }}
                />
                <Typography
                  style={{
                    marginTop: "23px",
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: "20px",
                    fontWeight: "900",
                    fontFamily: "Roboto Condensed",
                    textTransform: "uppercase",
                    fontStyle: "normal",
                  }}
                  variant="h3"
                >
                  Email Verified
                </Typography>
                <Box style={{ padding: "20px 10px 30px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "Roboto Condensed",
                      fontWeight: "400",
                      color: "#636880",
                      padding: " 0 63px",
                    }}
                  >
                    Live Resume of a talented individual. This unique QR code is
                    their Skills' Matchmaking Wallet. You now have access to
                    their up-to-date qualifications and achievements.
                  </Typography>
                </Box>
               
               

                <Box
                  style={{
                    padding: "0 0 5px 0",
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "auto",
                    width: "50%",
                  }}
                >
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    style={{
                      height: "50px",
                      fontSize:'17px',
                      fontWeight: 700,
                      backgroundColor: "#0856CC",
                      fontFamily: "Roboto Condensed",
                      textTransform:'none'
                    }}
                  >
                   Reset Password
                  </Button>
                </Box>
               
              </Paper>
            </Box>
          </Box>
        
  );
};

export default VerifyForgot;
