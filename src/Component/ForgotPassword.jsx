import { Box, Button, FormControl, Paper, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


const ForgotPassword = () => {
    const linkStyle = {
        color: "#3760F1", 
        textAlign: "center",
        fontFamily: "Roboto Condensed",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        textDecoration:'none',
        margin:'30px'
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
                  padding: "75px 40px 50px",
                  marginTop: "120px",
                  width: "500px", 
                height: "350px", 
                }}
                elevation={0.1}
              >
                
                <Typography
                  style={{
                    marginTop: "23px",
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "Roboto Condensed",
                    textTransform: "uppercase",
                    fontStyle: "normal",
                  }}
                  variant="h3"
                >
                 Forgot Your Password
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
                      lineHeight:'20px'
                    }}
                  >
                    If you've forgotten your password, don't worry. We're here to help you regain access to your Gyan Batua account.
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
                      style={{ height: '20px',paddingBottom:'30px' }}
                    />
                    <ErrorMessage
                    style={{color:'red',textAlign:'start',marginTop:
                  '8px'}}
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </FormControl>
                </Box>

                <Box
                  style={{
                    padding: "20px 0 5px 0",
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
                      height: "50px",
                      fontWeight: 700,
                      fontSize:'16px',
                      backgroundColor: "#0856CC",
                      fontFamily: "Roboto Condensed",
                      textTransform:'none',borderRadius:'5px'
                    }}
                  >
                    Continue
                  </Button>
                </Box>
                <Box pt={6} style={{marginTop:'30px'}} >
                 
                    <span>
                      <a style={linkStyle} href="#2">Terms of use</a>|{" "}
                      <a style={linkStyle} href="#1">privacy policy</a>
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

export default ForgotPassword;
