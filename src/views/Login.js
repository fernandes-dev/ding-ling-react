import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
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

          <form className="form-login" id="form-login">
            <label className="label-login" htmlFor="email">
              E-mail
            </label>
            <input
              className="input-login"
              type="text"
              name="email"
              id="email"
            />
            <label className="label-login" htmlFor="password">
              Senha
            </label>
            <input
              className="input-login"
              type="password"
              name="password"
              id="password"
            />

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

export default Login;
