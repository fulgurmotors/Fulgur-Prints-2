import React from "react"
import "./CreateAccount.css"

function CreateAccount() {
    return (
        <div className="createAccount">
            <div className="createAccount__container">
                <h1>Créer un compte</h1>
                <form>
                    <h5>Nom</h5>
                    <input type="text" />
                    <h5>Prénom</h5>
                    <input type="text" />
                    <h5>Email</h5>
                    <input type="text" />
                    <h5>Mot de passe</h5>
                    <input type="password" />
                    <h5>Confirmer le mot de passe</h5>
                    <input type="password" />
                    <button className="createAccount__registerButton">Créer un compte</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount