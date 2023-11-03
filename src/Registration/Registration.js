import React from "react";
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
    const { allErrors, userData, validationFunctions, onSubmitClick } = useRegistrationValidation();
    const isUserDataEmpty = Object.values(userData).some(value => value === "");
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
                            data-testid="name"
                            onChange={(event) => validationFunctions.onNameChange(event.target?.value)}
                            value={userData.name}
                        />
                        {allErrors.name && <ErrorMsg>{allErrors.name}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label>
                            <MandSpan>* </MandSpan>Gender
                        </label>
                        <Select
                            name="gender"
                            data-testid="gender"
                            onChange={(event) => validationFunctions.onGenderChange(event.target?.value)}
                            value={userData.gender}
                        >
                            <option value="" disabled>Choose an option</option>
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
                            data-testid="dob"
                            onChange={(event) => validationFunctions.onDOBChange(event.target?.value)}
                            value={userData.dob}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Phone Number</label>
                        <Inputitem
                            type="number"
                            name="phoneNumber"
                            data-testid="phoneNumber"
                            placeholder="Enter Phone Number"
                            onChange={(event) => validationFunctions.onPhoneNumberChange(event.target?.value)}
                            value={userData.phoneNumber}
                        />
                        {allErrors.phoneNumber && <ErrorMsg>{allErrors.phoneNumber}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Email</label>
                        <Inputitem
                            type="text"
                            name="email"
                            data-testid="email"
                            placeholder="Enter Email"
                            onChange={(event) => validationFunctions.onEmailChange(event.target?.value)}
                            value={userData.email}
                        />
                        {allErrors.email && <ErrorMsg>{allErrors.email}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Password</label>
                        <Inputitem
                            type="password"
                            name="password"
                            data-testid="password"
                            placeholder="Enter Password"
                            onChange={(event) => validationFunctions.onPasswordChange(event.target?.value)}
                            value={userData.password}
                        />
                        {allErrors.password && <ErrorMsg>{allErrors.password}</ErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <label><MandSpan>*  </MandSpan>Confirm Password</label>
                        <Inputitem
                            type="password"
                            name="confirmPassword"
                            data-testid="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={(event) => validationFunctions.onConfirmPwdChange(event.target?.value)}
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
                            data-testid="newsletterYes"
                            checked={userData.newsletter === "Yes"} 
                            value="Yes"
                            onChange={(event) => validationFunctions.onSubNewsLtrChange(event.target.value)}
                        />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input
                            type="radio"
                            id="no"
                            name="newsletterNo"
                            data-testid="newsletterNo"
                            checked={userData.newsletter === "No"} 
                            value="No" 
                            onChange={(event) => validationFunctions.onSubNewsLtrChange(event.target.value)}
                        />
                            <label htmlFor="no">No</label>
                        </div>
                    </RadioGroup>
                    <CheckGroup>
                        <label><MandSpan>*  </MandSpan>Agree to Terms and Conditions</label>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            data-testid="agreeToTerms"
                            checked={userData.agreeToTerms}
                            onChange={(event) => validationFunctions.onAgreeToTerms(event.target?.checked)}
                            value={userData.agreeToTerms}
                        />
                    </CheckGroup>
                    {allErrors.agreeToTerms && <ErrorMsg>{allErrors.agreeToTerms}</ErrorMsg>}
                    <Button disabled={isUserDataEmpty || !userData.agreeToTerms} onClick={()=>onSubmitClick(userData)}>
                        Register
                    </Button>
                </FormItems>
            </FormContainer>
        </ModContainer>
    );
};

export default Registration;
