import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    history.push("/home");
  }

  return (
    <main className="view-login">
      <section className="background-color">
        <div className="card-login">
          <h1 className="logo">Ding Ling</h1>

          <form className={(classes.root, "form-login")} id="form-login">
            <TextField className="input-login" id="email" label="E-mail" />

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                className="input-login"
                id="password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* <label className="label-login" htmlFor="password">
              Senha
            </label>
            <input
              className="input-login"
              type="password"
              name="password"
              id="password"
            /> */}

            <Link className="link-login forgot" to="/forgot">
              Esqueceu sua senha?
            </Link>
            <button onClick={login} className="btn-login">
              Entrar
            </button>

            <Link className="link-login register" to="/register">
              Criar minha conta
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
