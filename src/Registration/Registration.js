import React, { useState } from "react";
//Used styled component to apply the styles to this file
import {
    ModContainer, InputGroup, FormContainer,
    Inputitem, FormItems, Button, Header, Select, RadioGroup, CheckGroup, ErrorMsg
} from './Registration.style.js';
import { validateForm, handleInputChange, handleRegister } from "./RegistrationServices.js";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        dob: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: "no",
        agreeToTerms: false,
    });
    const [errors, setErrors] = useState({});
    // const handleInputChange = (event) => {
    //     const { name, value, type, checked } = event.target;
    //     const inputValue = type === "checkbox" ? checked : value;

    //     setFormData({
    //         ...formData,
    //         [name]: inputValue,
    //     });
    // };

    // const isValidEmail = (email) => {
    //     // Implement your email validation logic here
    //     // This is a simple example, you may want to use a library or regex for email validation
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // };

    // const validateForm = () => {
    //     const newErrors = {};
    //     switch (true) {
    //         case !formData.name:
    //             newErrors.name = "Name is Required";
    //             break;
    //         case !formData.gender:
    //             newErrors.gender = "Gender is Required";
    //             break;
    //         case !formData.dob:
    //             newErrors.dob = "Date of Birth is required";
    //             break;
    //         case !formData.phoneNumber:
    //             newErrors.phoneNumber = "Phone Number is required";
    //             break;
    //         case formData.phoneNumber.length !== 10:
    //             newErrors.phoneNumber = "Phone Number should be 10 digits"
    //             break;
    //         case !formData.email:
    //             newErrors.email = "Email is required";
    //             break;
    //         case !isValidEmail(formData.email):
    //             newErrors.email = "Invalid email format";
    //             break;
    //         case !formData.password:
    //             newErrors.password = "Password is required";
    //             break;
    //         case !formData.confirmPassword:
    //             newErrors.confirmPassword = "Confirm Password is required";
    //             break;
    //         case formData.password !== formData.confirmPassword:
    //             newErrors.confirmPassword = "Passwords do not match";
    //             break;
    //         case formData.newsletter === undefined:
    //             newErrors.newsletter = "News letter is Required";
    //             break;
    //         case !formData.agreeToTerms:
    //             console.log(formData.newsletter);
    //             newErrors.agreeToTerms = "You must agree to the terms and conditions";
    //             break;
    //     }

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    // const handleRegister = (e) => {
    //     if (validateForm()) {
    //         console.log("Form Data:", formData);
    //         alert("Form submitted successfully");
    //     } else {
    //         e.preventDefault();
    //     }
    // };

    return (
        <ModContainer>
            <FormContainer>
                <Header>Register Here</Header>
                <FormItems>
                    <InputGroup>
                        <label>Name</label>
                        <Inputitem type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={(event) => handleInputChange(event, formData, setFormData)} />
                        {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label>Gender</label>
                        <Select name="gender"
                            defaultValue=""
                            onChange={(event) => handleInputChange(event, formData, setFormData)}>
                            <option value="" disabled>Choose an option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Select>
                        {errors.gender && <ErrorMsg>{errors.gender}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label>Date of Birth</label>
                        <Inputitem type="date"
                            name="dob"
                            onChange={(event) => handleInputChange(event, formData, setFormData)} />
                        {errors.dob && <ErrorMsg>{errors.dob}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label>Phone Number</label>
                        <Inputitem type="number"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            onChange={(event) => handleInputChange(event, formData, setFormData)} />
                        {errors.phoneNumber && <ErrorMsg>{errors.phoneNumber}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label>Email</label>
                        <Inputitem type="text"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(event) => handleInputChange(event, formData, setFormData)} />
                        {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label>Password</label>
                        <Inputitem type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(event) => handleInputChange(event, formData, setFormData)} />
                        {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label>Confirm Password</label>
                        <Inputitem type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={(event) => handleInputChange(event, formData, setFormData)} />
                        {errors.confirmPassword && (
                            <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
                        )}
                    </InputGroup>
                    <RadioGroup>
                        <label>Subscribe to Newsletter</label>
                        <div>
                            <input
                                type="radio"
                                id="yes"
                                name="newsletter"
                                value="yes"
                                checked={formData.newsletter === "yes"}
                                onChange={(event) => handleInputChange(event, formData, setFormData)}
                            />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="no"
                                name="newsletter"
                                value="no"
                                checked={formData.newsletter === "no"}
                                onChange={(event) => handleInputChange(event, formData, setFormData)}
                            />
                            <label htmlFor="no">No</label>
                        </div>
                    </RadioGroup>
                    {errors.newsletter && <ErrorMsg>{errors.newsletter}</ErrorMsg>}
                    <CheckGroup>
                        <label>Agree to Terms and Conditions</label>
                        <input type="checkbox"
                            name="agreeToTerms"
                            onChange={(event) => handleInputChange(event, formData, setFormData)} />
                    </CheckGroup>
                    {errors.agreeToTerms && <ErrorMsg>{errors.agreeToTerms}</ErrorMsg>}
                    <Button onClick={(e)=> handleRegister(e, formData, setErrors)}>
                        Register
                    </Button>
                </FormItems>
            </FormContainer>
        </ModContainer>
    )

}

export default Registration;
