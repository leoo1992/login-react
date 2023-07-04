import React, { useState } from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div id="login" className="d-flex p-4 justify-content-center align-content-center align-self-center align-items-center fw-bold">
            <h3 className="text-white">Login Sinduscon</h3>
            <form onSubmit={handleSubmit} className="form-login border-success w-100 p-4 rounded-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label d-block">E-mail : </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control border-primary W-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label d-block">Senha :</label>
                    </div>
                    <div class="col-auto">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword6" class="form-control border-primary W-100" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
                <div className="text-center pt-3">
                    <button type="submit" class="action-login btn btn-outline-success fw-bold">Entrar</button>
                </div> 
                <div className='text-center'>
                    <span>ou</span>
                </div>
                <div class="text-center">
                    <button class="btn btn-outline-primary fw-bold">Cadastre-se aqui</button>
                </div>
            </form>
        </div>
    );
}
export default LoginPage;