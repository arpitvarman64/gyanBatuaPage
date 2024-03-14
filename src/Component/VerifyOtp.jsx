import { Box, Button, FormControl, Paper, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import OTPInput from "otp-input-react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./VerifyOtp.css";

const VerifyOtp = () => {
  return (
    <Formik
      initialValues={{ otp: "", mobile_number: "" }}
      validationSchema={Yup.object().shape({
        otp: Yup.string()
          .required("Otp is required")
          .min(4, "Otp should be 4 digits"),
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
                padding: "40px 40px 40px",
                marginTop: "120px",
                width: "510px", 
                height: "420px", 
              }}
                elevation={0.1}
              >
                <MailOutlineIcon
                  style={{ color: "#0856CC", height: "2.5em", width: "3.5em" }}
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
                  OTP Verifications
                </Typography>
                <Box style={{ padding: "20px 10px 30px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontFamily: "Roboto Condensed",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.60)",
                      padding: " 0 63px",
                    }}
                  >
                    Please enter the 6 digit verification code that was sent to
                    45464541541 . The code is valid for 3 minutes.
                  </Typography>
                </Box>
                <Box>
                  <FormControl fullWidth>
                    <Field
                      style={{ justifyContent:'center',marginLeft:'20px' }}
                      type="text"
                      name="otp"
                      as={OTPInput}
                      inputVariant="rounded"
                      autoComplete="off"
                      autoFocus
                      OTPLength={6}
                      otpType="number"
                    />
                    <ErrorMessage
                      style={{ textAlign: "start", color: "red",marginTop:'6px' }}
                      name="otp"
                      component="div"
                      className="error-message"
                    />
                  </FormControl>
                </Box>
                <Box style={{ width: "74%", margin: "auto" }}>
                  <Typography
                    style={{
                      color: "#DC0404", // Color value should be a string and enclosed in quotes
                      textAlign: "right",
                      fontFamily: "Roboto Condensed",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      marginTop: "8px",
                    }}
                  >
                    2:58
                  </Typography>
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
                      fontWeight: 500,
                      fontSize: "16px",
                      backgroundColor: "#0856CC",
                      fontFamily: "Roboto Condensed",
                      textTransform:'none'
                    }}
                  >
                    Submit
                  </Button>
                </Box>
                <Box pt={2} className="displayEnd">
                  <div>
                    <span
                      style={{
                        color: "rgba(8, 86, 204, 0.40)",
                        textDecoration: "underline",
                        fontFamily: "Roboto Condensed",
                        fontWeight: "400",
                        cursor: "pointer",
                        fontSize: "18px",
                      }}
                      variant="h6"
                    >
                      Resend Code
                    </span>
                  </div>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default VerifyOtp;
