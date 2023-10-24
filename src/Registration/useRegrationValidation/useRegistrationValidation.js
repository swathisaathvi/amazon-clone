import { useEffect, useState } from "react";

export default function useRegistrationValidation() {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: "",
    agreeToTerms: false
  })
  const [allErrors, setErrors] = useState({});

  useEffect(() => {
    onNameChange("");
  }, []);

  function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function onNameChange(name) {
    setName(name);
    if (name.length === 0) {
      setErrors({
        name: "Please Enter Username",
      });
    } else {
      setErrors({});
    }
  }

  function onHandleChange(e) {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setUserData({ ...userData, [name]: inputValue });
    switch (name) {
      case "name":
      case "gender":
      case "dob":
      case "phoneNumber":
      case "email":
      case "password":
      case "confirmPassword":
        const Name = name.charAt(0).toUpperCase() + name.slice(1);
        if (inputValue.length === 0) {
          setErrors({
            [name]: `Please Enter ${name === "phoneNumber" ? "Phone Number" :
              name === "dob" ? "Date of Birth" :
                Name}`
          });
        } else if (
          (name === "phoneNumber" && inputValue.length !== 10) ||
          (name === "email" && !isValidEmail(inputValue))
        ) {
          setErrors({
            [name]: `Invalid ${name === "phoneNumber" ? "Phone Number" : Name}`
          });
        } else if (name === "confirmPassword" && inputValue !== userData.password) {
          setErrors({ [name]: "Passwords does not match" });
        }
        else {
          setErrors({});
        }
        break;
      case "newsletter":
      case "agreeToTerms":
        setErrors({});
        if (name === "agreeToTerms" && !inputValue) {
          setErrors({ [name]: "You must agree to the terms and conditions" });
        }
        break;
      default:
        break;
    }
  }

  return {
    name,
    allErrors,
    userData,
    onNameChange,
    onHandleChange
  };

  // function onHandleChange(e) {
  //   const { name, value, type, checked } = e.target;
  //   const inputValue = type === "checkbox" ? checked : value;
  //   setName(name);
  //   switch (true) {
  //     case name == "name":
  //       if (inputValue.length == 0) {
  //         setErrors({ name: "Please Enter Username" })
  //       }
  //       else {
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         });
  //         setErrors({});
  //       }
  //       break;
  //     case name == "gender":
  //       if (inputValue.length == 0) {
  //         setErrors({ gender: "Please select Gender" })
  //       }
  //       else {
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         });
  //         setErrors({});
  //       }
  //       break;
  //     case name == "dob":
  //       if (inputValue.length == 0) {
  //         setErrors({ dob: "Please Enter Date of Birth" })
  //       }
  //       else {
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         });
  //         setErrors({});
  //       }
  //       break;
  //     case name == "phoneNumber":
  //       if (inputValue.length == 0) {
  //         setErrors({ phoneNumber: "Please Enter Phone Number" })
  //       }
  //       else if (inputValue.length !== 10) {
  //         setErrors({ phoneNumber: "Phone Number should be 10 digits" })
  //       }
  //       else {
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         });
  //         setErrors({});
  //       }
  //       break;
  //     case name == "email":
  //       if (inputValue.length == 0) {
  //         setErrors({ email: "Email is required" })
  //       }
  //       else if (!isValidEmail(inputValue)) {
  //         setErrors({ email: "Invalid email format" })
  //       }
  //       else {
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         });
  //         setErrors({});
  //       }
  //       break;
  //     case name == "password":
  //       if (inputValue.length == 0) {
  //         setErrors({ password: "Password is required" });
  //       }
  //       else {
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         });
  //         setErrors({});
  //       }
  //       break;
  //     case name == "confirmPassword":
  //       if (inputValue.length == 0) {
  //         setErrors({ confirmPassword: "Confirm Password is required" })
  //       }
  //       else if (inputValue !== userData.password) {
  //         setErrors({ confirmPassword: "Passwords do not match" })
  //       }
  //       else {
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         });
  //         setErrors({});
  //       }
  //       break;
  //     case name == "newsletter":
  //       setErrors({});
  //       setUserData({
  //         ...userData,
  //         [name]: inputValue
  //       })
  //     case name == "agreeToTerms":
  //       if (!inputValue) {
  //         setErrors({ agreeToTerms: "You must agree to the terms and conditions" });
  //       }
  //       else {
  //         setErrors({});
  //         setUserData({
  //           ...userData,
  //           [name]: inputValue
  //         })
  //       }
  //   }

  //   return {
  //     name,
  //     allErrors,
  //     onNameChange,
  //   };
  // }

}
