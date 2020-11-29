import React from "react";
// import countries from "./countries";
import {getGender} from "../service/Action";

export default function Sample() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);
    // const [genderList, setGenderList]=genderList;

    const handleSubmit = (event) => {
        console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);

        event.preventDefault();
    }



    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>

            <div>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                </label>
            </div>

            <div>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                </label>
            </div>

            <div>
                <label>
                    Country:
                    <select
                        name="country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        required>
                        <option key=""></option>
                        {/*{genderList.map(country => (*/}
                        {/*<option key={country}>{country}</option>*/}
                        {/*))}*/}
                    </select>
                </label>
            </div>

            <div>
                <label>
                    <input
                        name="acceptedTerms"
                        type="checkbox"
                        onChange={e => setAcceptedTerms(e.target.value)}
                        required />
                    I accept the terms of service
                </label>
            </div>

            <div>
                <button>Submit</button>
            </div>


        </form>
    );
}