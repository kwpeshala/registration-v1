import React, {Component} from 'react'
import InputField from "./InputField";
import DropDownField from "./DropDownField";

class RegistrationForm extends Component {

    constructor(prop) {
        super(prop);

        this.state = {
            isLoading: true,
            genderList: [],
            bankNameList: [],
            email: "",
            firstName: "",
            gender: "",
            bankName: "",
            dateOfBirth: ""
        };
    }


    async componentDidMount() {
        const response = await fetch('/api/users');
        const body = await response.json();
        const genderResponse = await fetch('/api/gender');
        const genderResponseBody = await genderResponse.json();
        const bankResponse = await fetch('/api/bank');
        const bankResponseBody = await bankResponse.json();
        const defaultGender = genderResponseBody[0];
        const defaultBankName = bankResponseBody[0];

        this.setState({
            groups: body, isLoading: false, genderList: genderResponseBody, bankNameList: bankResponseBody,
            gender: defaultGender, bankName: defaultBankName
        });


    }

    render() {
        const {isLoading, genderList, bankNameList} = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }

        const changeHandler = (event) => {
            let nam = event.target.name;
            let val = event.target.value;
            this.setState({[nam]: val});
        };

        const handleSubmit = () => {
            fetch('/api/add/user', {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
                return response.json();
            });
            this.props.history.push("./success");
        };

        return (
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <InputField fieldName={"Username "}
                            field={"username"}
                            fieldType={"text"}
                            fieldChange={changeHandler}
                            fieldRequired={true}
                />

                <InputField fieldName={"First Name "}
                            field={"firstName"}
                            fieldType={"text"}
                            fieldChange={changeHandler}
                            fieldRequired={false}
                />

                <InputField fieldName={"Last Name "}
                            field={"lastName"}
                            fieldType={"text"}
                            fieldChange={changeHandler}
                            fieldRequired={false}
                />

                <InputField fieldName={"NIC "}
                            field={"nic"}
                            fieldType={"text"}
                            fieldChange={changeHandler}
                            fieldRequired={false}
                />

                <InputField fieldName={"Date of Birth "}
                            field={"dateOfBirth"}
                            fieldType={"date"}
                            fieldChange={changeHandler}
                            fieldRequired={false}
                />

                <DropDownField fieldName={"Gender "}
                               field={"gender"}
                               fieldChange={changeHandler}
                               fieldRequired={true}
                               optionList={genderList.map(gender => (
                                   <option key={gender}>{gender}</option>
                               ))}

                />

                <InputField fieldName={"Phone Number "}
                            field={"msisdn"}
                            fieldType={"text"}
                            fieldChange={changeHandler}
                            fieldRequired={false}
                />

                <InputField fieldName={"Email Address "}
                            field={"email"}
                            fieldType={"email"}
                            fieldChange={changeHandler}
                            fieldRequired={true}
                />

                <DropDownField fieldName={"Bank Name "}
                               field={"bankName"}
                               fieldChange={changeHandler}
                               fieldRequired={true}
                               optionList={bankNameList.map(bank => (
                                   <option key={bank}>{bank}</option>
                               ))}

                />

                <InputField fieldName={"Account Number "}
                            field={"accountNumber"}
                            fieldType={"text"}
                            fieldChange={changeHandler}
                            fieldRequired={false}
                />


                <div>
                    <button>Submit</button>
                </div>


            </form>
        );
    }
}

export default RegistrationForm