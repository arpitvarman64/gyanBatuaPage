import React from "react";
import {
  Box,
  Button,
  
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Login = () => {
  const logoImage = {
    marginRight: "auto",
    height: "25px",
    width: "25px",
  };
  const googleButton = {
    marginBottom: "5px",
    display: "flex",
    wordWrap: "break-word",
  };
  const btnbtn = {
    border: "1px solid #E7E7E7",
    fontSize: "14px",
    fontWeight: 400,
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "#fff",
    fontFamily: 'Roboto Condensed, sans-serif',
    height: "50px",
    color: "#000",
    // justifyContent: "space-around",
    
  };
  const linkStyle = {
    color: "#3760F1",
    textAlign: "center",
    fontFamily: "Roboto Condensed",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    textDecoration: "none",
    margin: "30px",
  };
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email address"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission logic here
        // For now, you can log the form values
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ setFieldValue, handleSubmit }) => (
        <Form>
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
                  padding: "30px 40px 40px",
                  marginTop: "20px",
                  width: "570px", 
                  height: "629px",    
                }}
                
                elevation={0.1}
              >
                <Typography
                  style={{
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "Roboto Condensed",
                    textTransform: "uppercase",
                    fontStyle: "normal",
                  }}
                >
                  SIGN IN
                </Typography>
                <Box style={{ padding: "20px 10px 30px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "Roboto Condensed",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.60)",
                      padding: " 0 63px",
                    }}
                  >
                    Your gateway to endless opportunities and skill development!
                    Please log in to access your Skills' Matchmaking Wallet.
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FormControl
                    style={{ margin: "auto", width: "74.5%" }}
                    fullWidth
                  >
                    <Field
                      type="text"
                      name="email"
                      as={TextField}
                      label="Email Address"
                      variant="outlined"
                      style={{ height: "30px", paddingBottom: "25px" }}
                    />
                    <ErrorMessage
                      style={{ color: "red", textAlign: "start",marginTop:'6px' }}
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </FormControl>
                </Box>

                <Box
                  style={{
                    padding: "30px 0 5px 0",
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "auto",
                    width: "75%",
                  }}
                >
                  <Button
                    type="button" // Change to "submit" if you want it to submit on button click
                    onClick={handleSubmit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    style={{
                      height: "55px",
                      fontWeight: 700,
                      textTransform: "none",
                      backgroundColor: "#0856CC",
                      fontFamily: "Roboto Condensed",
                    }}
                  >
                    Continue
                  </Button>
                </Box>
                <Box mt="20px">
                  <Typography
                    style={{
                      color: "#000",
                      fontFamily: "Roboto Condensed",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      textTransform: "capitalize",
                    }}
                  >
                    Don't have an account?{" "}
                    <a
                      href="#1"
                      style={{
                        textDecoration: "none",
                        fontWeight: 600,
                        color: "#0856CC",
                      }}
                    >
                      SIGN UP
                    </a>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "75%",
                    marginTop: "20px !important",
                    marginBottom: "20px !important",
                    margin: "auto",
                  }}
                >
                  <Box flexGrow={1}>
                    <div
                      style={{
                        height: "1px",
                        background: "#bdbdbd",
                        width: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    style={{ fontSize:'14px',fontWeight:400,color: "#000", margin: "0 10px" }}
                  >
                    or
                  </Typography>
                  <Box flexGrow={1}>
                    <div
                      style={{
                        height: "1px",
                        background: "#bdbdbd",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  style={{ marginTop: "30px", width: "75%", margin: "auto" }}
                >
                  <Box style={googleButton}>
                    <Button
                      style={{ ...btnbtn, justifyContent: "none !important" }}
                      fullWidth
                      type="submit"
                      variant="contained"
                      startIcon={
                        <img
                          src="/asets/google.png"
                          alt="Google Logo"
                          style={{...logoImage,marginRight:'12px'}}
                        />
                      }
                    >
                      Continue with Google
                    </Button>
                  </Box>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6} style={googleButton}>
                      <Button
                        style={btnbtn}
                        fullWidth
                        type="submit"
                        variant="contained"
                        startIcon={
                          <img
                            src="/asets/facebook.png"
                            alt="Facebook Logo"
                            style={logoImage}
                          />
                        }
                      >
                        Continue with Facebook
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6} style={googleButton}>
                      <Button
                        style={btnbtn}
                        fullWidth
                        type="submit"
                        variant="contained"
                        startIcon={
                          <img
                            src="/asets/linkedin.png"
                            alt="LinkedIn Logo"
                            style={{...logoImage,marginRight:'9px'}}
                          />
                        }
                      >
                        Continue with Linkedin
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6} style={googleButton}>
                      <Button
                        style={btnbtn}
                        fullWidth
                        type="submit"
                        variant="contained"
                        startIcon={
                          <img
                            src="/asets/microsoft.png"
                            alt="Microsoft Logo"
                            style={logoImage}
                          />
                        }
                      >
                        Continue with Microsoft
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6} style={googleButton}>
                      <Button
                        style={btnbtn}
                        fullWidth
                        type="submit"
                        variant="contained"
                        startIcon={
                          <img
                            src="/asets/apple.png"
                            alt="Apple Logo"
                            style={{...logoImage,marginRight:'24px'}}
                          />
                        }
                      >
                        Continue with Apple
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box pt={9} >
                  <span>
                    <a style={linkStyle} href="#2">
                      Terms Of Use
                    </a>
                    |{" "}
                    <a style={linkStyle} href="#1">
                      Privacy Policy
                    </a>
                  </span>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
