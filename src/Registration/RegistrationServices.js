import React from 'react';

export const handleInputChange = (event, formData, setFormData) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
        ...formData,
        [name]: inputValue,
    });
};

export const isValidEmail = (email) => {
    // Implement your email validation logic here
    // This is a simple example, you may want to use a library or regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateForm = (formData, setErrors) => {
    const newErrors = {};
    switch (true) {
        case !formData.name:
            newErrors.name = "Name is Required";
            break;
        case !formData.gender:
            newErrors.gender = "Gender is Required";
            break;
        case !formData.dob:
            newErrors.dob = "Date of Birth is required";
            break;
        case !formData.phoneNumber:
            newErrors.phoneNumber = "Phone Number is required";
            break;
        case formData.phoneNumber.length !== 10:
            newErrors.phoneNumber = "Phone Number should be 10 digits"
            break;
        case !formData.email:
            newErrors.email = "Email is required";
            break;
        case !isValidEmail(formData.email):
            newErrors.email = "Invalid email format";
            break;
        case !formData.password:
            newErrors.password = "Password is required";
            break;
        case !formData.confirmPassword:
            newErrors.confirmPassword = "Confirm Password is required";
            break;
        case formData.password !== formData.confirmPassword:
            newErrors.confirmPassword = "Passwords do not match";
            break;
        case formData.newsletter === undefined:
            newErrors.newsletter = "News letter is Required";
            break;
        case !formData.agreeToTerms:
            newErrors.agreeToTerms = "You must agree to the terms and conditions";
            break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

export const handleRegister = (e,formData, setErrors) => {
    const isValid = validateForm(formData, setErrors)
    if (isValid) {
        alert("Form submitted successfully");
    } else {
        e.preventDefault();
    }
};
