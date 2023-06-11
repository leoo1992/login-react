import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
    return (
        <div id="login" className="d-flex p-4 justify-content-center align-content-center align-self-center align-items-center">
            <h3 className="text-white">Login</h3>
            <form className="form-login border-primary w-100 p-4 rounded-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label d-block">E-mail : </label>
                    <input type="email" class="form-control border-primary W-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label d-block">Senha :</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control border-primary W-100" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
                <div className="text-center p-3">
                    <button type="submit" class="action-login btn btn-primary">Entrar</button>
                </div>
            </form>
        </div>
    );
}
export default LoginPage;