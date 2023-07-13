import { Box, Dialog, TextField, Typography, styled } from "@mui/material";
import { useContext, useState } from "react";
import { LoginApi, SinUpApi } from "../services/api";
import { DataContext } from "../../context/dataprovider";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "39vw",
  height: "70vh",
  display: "flex",
  overflowX: "hidden",
  [theme.breakpoints.down("lg")]: {
    width: "100vw",
    height: "80vh",
}
}));

const InputWrapper = styled(Box)`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px 1rem 12px 1rem;
  height: 100%;
  width: 60%;
  text-align: center;
  & > p {
    font-size: 12px;
    margin-top: 2rem;
  }
`;

const BackgroundImg = styled(Box)`
  height: 100%;
  width: 40%;
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;
`;

const InputTags = styled(TextField)`
  margin-top: 1.5rem;
  font-size: 14px;
`;

const sinupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};
function LoginDialog({ openDialog, setOpenDialog }) {
  const [openSinup, setOpenSinup] = useState(false);
  const [sinupValues, setSinupValues] = useState(sinupInitialValues);
  const [loginValues, setLoginValues] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const CloseHandler = () => {
    setOpenDialog(false);
    setOpenSinup(false);
  };

  const sinupHandler = () => {
    setOpenSinup(true);
  };

  const inputValuesSinup = (e) => {
    setSinupValues({
      ...sinupValues,
      [e.target.name]: e.target.value,
    });
  };

  const inputValuesLogin = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const sinupUser = async () => {
    let response = await SinUpApi(sinupValues);
    setAccount(sinupValues.firstname);
    CloseHandler();
    console.log(response, "sinup");
  };

  const loginHandler = async () => {
    const loginResponse = await LoginApi(loginValues);

    console.log(loginResponse, "response");

    if (loginResponse === undefined) {
      setError(true);
      console.log(error);
    }

    if (loginResponse.status === 200) {
      setAccount(loginResponse.data.user.username);
      console.log(account);
      CloseHandler();
    }
  };

  return (
    <Dialog id="login-box"
      onClose={CloseHandler}
      open={openDialog}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Wrapper>
        <BackgroundImg>
          <Typography
            variant="h5"
            style={{
              marginTop: 35,
              marginLeft: 20,
              color: "white",
              fontWeight: 600,
            }}
          >
            {openSinup ? "Sinup" : "Login"}
          </Typography>
          <Typography
            style={{
              marginTop: 17,
              marginLeft: 20,
              fontSize: 16,
              color: "whitesmoke",
              textAlign: "start",
              marginRight: 30,
              fontWeight: 500,
            }}
          >
            {openSinup
              ? "Sign up with your mobile number to get started"
              : "Get access to your Orders, Wishlist and Recommendations"}
          </Typography>
        </BackgroundImg>

        {/* input tages */}
        {openSinup ? (
          <InputWrapper>
            <InputTags
              type="text"
              onChange={inputValuesSinup}
              name="firstname"
              variant="standard"
              label="Enter the firstname"
            />
            <InputTags
              type="text"
              onChange={inputValuesSinup}
              name="lastname"
              variant="standard"
              label="Enter the lastname"
            />
            <InputTags
              type="text"
              onChange={inputValuesSinup}
              name="username"
              variant="standard"
              label="Enter the username"
            />
            <InputTags
              type="email"
              onChange={inputValuesSinup}
              name="email"
              variant="standard"
              label="Enter the email"
            />
            <InputTags
              type="password"
              onChange={inputValuesSinup}
              name="password"
              variant="standard"
              label="Enter the password"
            />

            <button className="login-page-button" onClick={sinupUser}>
              Sinup
            </button>
          </InputWrapper>
        ) : (
          <InputWrapper>
            <InputTags
              variant="standard"
              onChange={inputValuesLogin}
              name="username"
              label="Enter the username..."
            />
            {error && (
              <Typography style={{ marginTop: 5, color: "red" }}>
                Please enter valid username & password
              </Typography>
            )}

            <InputTags
              variant="standard"
              onChange={inputValuesLogin}
              name="password"
              label="Enter the Password..."
            />
            <Typography>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <button className="login-page-button" onClick={loginHandler}>
              Login
            </button>
            <Typography
              onClick={sinupHandler}
              style={{
                cursor: "pointer",
                fontSize: 14,
                marginTop: "auto",
                fontWeight: 600,
                color: "#2874f0",
              }}
            >
              New to Flipkart? Create an account
            </Typography>
          </InputWrapper>
        )}
      </Wrapper>
    </Dialog>
  );
}

export default LoginDialog;
