import { useState } from "react";

export default function useRegistrationValidation() {
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: "No",
    agreeToTerms: false,
  });
  const [allErrors, setErrors] = useState({});

  const validationFunctions = {
    onNameChange,
    onGenderChange,
    onDOBChange,
    onPhoneNumberChange,
    onEmailChange,
    onPasswordChange,
    onConfirmPwdChange,
    onSubNewsLtrChange,
    onAgreeToTerms
  };

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function onNameChange(Name) {
    setUserData({ ...userData, name: Name });
    if (Name.length === 0) {
      setErrors({ ...allErrors, name: "Please Enter Username" });
    } else {
      setErrors({ ...allErrors, name: "" });
    }
  }

  function onGenderChange(Gender) {
    setUserData({ ...userData, gender: Gender });
    if (Gender.length === 0) {
      setErrors({ ...allErrors, gender: "Please select Gender" });
    } else {
      setErrors({ ...allErrors, gender: "" });
    }
  }

  function onDOBChange(DateOfBirth) {
    setUserData({ ...userData, dob: DateOfBirth });
    if (DateOfBirth.length === 0) {
      setErrors({ ...allErrors, dob: "Please select Date of Birth" });
    } else {
      setErrors({ ...allErrors, dob: "" });
    }
  }

  function onPhoneNumberChange(PhoneNumber) {
    setUserData({ ...userData, phoneNumber: PhoneNumber });
    if (PhoneNumber.length === 0) {
      setErrors({ ...allErrors, phoneNumber: "Please Enter Phone Number" });
    } else if (PhoneNumber.length !== 10) {
      setErrors({
        ...allErrors,
        phoneNumber: "Please Enter Valid Phone Number",
      });
    } else {
      setErrors({ ...allErrors, phoneNumber: "" });
    }
  }

  function onEmailChange(Email) {
    setUserData({ ...userData, email: Email });
    if (Email.length === 0) {
      setErrors({ ...allErrors, email: "Please Enter Email" });
    } else if (!isValidEmail(Email)) {
      setErrors({ ...allErrors, email: "Please Enter Valid Email" });
    } else {
      setErrors({ ...allErrors, email: "" });
    }
  }

  function onPasswordChange(Password) {
    setUserData({ ...userData, password: Password });
    if (Password.length === 0) {
      setErrors({ ...allErrors, password: "Please Enter Password" });
    } else {
      setErrors({ ...allErrors, password: "" });
    }
  }

  function onConfirmPwdChange(Password) {
    setUserData({ ...userData, confirmPassword: Password });
    if (Password.length === 0) {
      setErrors({ ...allErrors, confirmPassword: "Please Enter Password" });
    } else if (Password !== userData.password) {
      setErrors({ ...allErrors, confirmPassword: "Passwords does not match" });
    } else {
      setErrors({ ...allErrors, confirmPassword: "" });
    }
  }

  function onSubNewsLtrChange(SubNewsLtr) {
    setUserData({ ...userData, newsletter: SubNewsLtr });
  }

  function onAgreeToTerms(AgreeToTerms) {
    setUserData({ ...userData, agreeToTerms: AgreeToTerms });
    if (!AgreeToTerms) {
      setErrors({
        ...allErrors,
        agreeToTerms: "You have to agree to the Terms and conditions",
      });
    } else {
      setErrors({ ...allErrors, agreeToTerms: "" });
    }
  }

  function onSubmitClick(UserData) {
    console.log(userData)
  }

  return {
    allErrors,
    userData,
    validationFunctions,
    onSubmitClick,
  };
}
