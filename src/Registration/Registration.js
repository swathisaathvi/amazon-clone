import React, { useState } from "react";
//Used styled component to apply the styles to this file
import {
    ModContainer,
    InputGroup,
    FormContainer,
    Inputitem,
    FormItems,
    Button,
    Header,
    Select,
    RadioGroup,
    CheckGroup,
    ErrorMsg,
    MandSpan
} from "./Registration.style.js";

import useRegistrationValidation from "./useRegrationValidation/useRegistrationValidation.js";

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
    const { allErrors, userData, onHandleChange } = useRegistrationValidation();
    const isUserDataEmpty = Object.values(userData).some(value => value === "");
    console.log("swa234",isUserDataEmpty)
    console.log("swa222",userData)
    // const isUserDataEmpty = Object.values(userData).some(
    //     (value) => value === "" && typeof value !== "boolean"
    //   );

    return (
        <ModContainer>
            <FormContainer>
                <Header>Register Here</Header>
                <FormItems>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Name</label>
                        <Inputitem
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={(event) => onHandleChange(event)}
                            value={userData.name}
                        />
                        {allErrors.name && <ErrorMsg>{allErrors.name}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Gender</label>
                        <Select
                            name="gender"
                            defaultValue=""
                            onChange={(event) =>
                                onHandleChange(event)
                            }
                            value={userData.gender}
                        >
                            <option value="" disabled>
                                Choose an option
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Select>
                        {allErrors.gender && <ErrorMsg>{allErrors.gender}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Date of Birth</label>
                        <Inputitem
                            type="date"
                            name="dob"
                            onChange={(event) =>
                                onHandleChange(event, formData, setFormData)
                            }
                            value={userData.dob}
                        />
                        {errors.dob && <ErrorMsg>{errors.dob}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Phone Number</label>
                        <Inputitem
                            type="number"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            onChange={(event) =>
                                onHandleChange(event)
                            }
                            value={userData.phoneNumber}
                        />
                        {allErrors.phoneNumber && <ErrorMsg>{allErrors.phoneNumber}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Email</label>
                        <Inputitem
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(event) =>
                                onHandleChange(event)
                            }
                            value={userData.email}
                        />
                        {allErrors.email && <ErrorMsg>{allErrors.email}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Password</label>
                        <Inputitem
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(event) =>
                                onHandleChange(event)
                            }
                            value={userData.password}
                        />
                        {allErrors.password && <ErrorMsg>{allErrors.password}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Confirm Password</label>
                        <Inputitem
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={(event) =>
                                onHandleChange(event)
                            }
                            value={userData.confirmPassword}
                        />
                        {allErrors.confirmPassword && <ErrorMsg>{allErrors.confirmPassword}</ErrorMsg>}
                    </InputGroup>
                    <RadioGroup>
                        <label>Subscribe to Newsletter</label>
                        <div>
                            <input
                                type="radio"
                                id="yes"
                                name="newsletter"
                                value={userData.newsletter}
                                // checked={formData.newsletter === "yes"}
                                onChange={(event) =>
                                    onHandleChange(event)
                                }
                            />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="no"
                                name="newsletter"
                                value={userData.newsletter}
                                // checked={formData.newsletter === "no"}
                                onChange={(event) =>
                                    onHandleChange(event)
                                }
                            />
                            <label htmlFor="no">No</label>
                        </div>
                    </RadioGroup>
                    <CheckGroup>
                        <label><MandSpan>*  </MandSpan>Agree to Terms and Conditions</label>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            onChange={(event) =>
                                onHandleChange(event)
                            }
                            value={userData.agreeToTerms}
                        />
                    </CheckGroup>
                    {allErrors.agreeToTerms && <ErrorMsg>{allErrors.agreeToTerms}</ErrorMsg>}
                    <Button disabled={isUserDataEmpty || !userData.agreeToTerms}>
                        Register
                    </Button>
                </FormItems>
            </FormContainer>
        </ModContainer>
    );
};

export default Registration;
