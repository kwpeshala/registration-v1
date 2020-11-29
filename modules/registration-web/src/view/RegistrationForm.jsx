import React, { Component } from 'react'
import {createUser} from '../service/Action'
import {getUsers} from '../service/Action'


class RegistrationForm extends Component {
    state = {
        isLoading: true,
        groups: [],
        genderList:[],
        bankNameList :[],
        email:"",
        firstName:"",
        gender:"",
        bankName:"",
        dateOfBirth:""
    };

    async componentDidMount() {
        const response = await fetch('/api/users');
        const body = await response.json();
        const genderResponse = await  fetch('/api/gender');
        const genderResponseBody = await  genderResponse.json();
        const bankResponse = await  fetch('/api/bank');
        const bankResponseBody = await bankResponse.json();
        const defaultGender = genderResponseBody[0];
        const defaultBankName=bankResponseBody[0];

        this.setState({ groups: body, isLoading: false, genderList:genderResponseBody, bankNameList:bankResponseBody,
            gender :defaultGender, bankName: defaultBankName});
        

    }

    render() {
        const {groups, isLoading, genderList, bankNameList} = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }

        const changeHandler = (event) => {
            let nam = event.target.name;
            let val = event.target.value;
            this.setState({[nam]: val});
        };

        const handleSubmit = (event) => {
            const user={
                'email':this.state.email,
                "firstName":this.state.firstName,
                'gender':this.state.gender
            };

            fetch('/api/add/user', {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {
                console.log(response);
                return response.json();
            });


            console.log(user);
        };

        return (
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <div>
                    <label>
                        Email:
                        <input
                            name="email"
                            type="email"
                            // value={email}
                             onChange={changeHandler}
                            required />
                    </label>
                </div>

                <div>
                    <label>
                        First Name:
                        <input
                            name="firstName"
                            type="text"
                            // value={password}
                            onChange={changeHandler}
                            required />
                    </label>
                </div>

                <div>
                    <label>
                        Date of Birth:
                        <input
                            name="dateOfBirth"
                            type="date"
                            // value={password}
                            onChange={changeHandler}
                            required />
                    </label>
                </div>

                <div>
                    <label>
                        Gender:
                        <select
                            name="gender"
                            // value={gender}
                            onChange={changeHandler}
                            required>
                            {/*<option key=""></option>*/}
                            {genderList.map(gender => (
                            <option key={gender}>{gender}</option>
                            ))}
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Bank Name:
                        <select
                            name="bankName"
                            // value={gender}
                            onChange={changeHandler}
                            required>
                            {/*<option key=""></option>*/}
                            {bankNameList.map(bank => (
                                <option key={bank}>{bank}</option>
                            ))}
                        </select>
                    </label>
                </div>

                {/*<div>*/}
                    {/*<label>*/}
                        {/*<input*/}
                            {/*name="acceptedTerms"*/}
                            {/*type="checkbox"*/}
                            {/*// onChange={e => setAcceptedTerms(e.target.value)}*/}
                            {/*required />*/}
                        {/*I accept the terms of service*/}
                    {/*</label>*/}
                {/*</div>*/}

                <div>
                    <button>Submit</button>
                </div>


            </form>
        );
    }
}

export default RegistrationForm