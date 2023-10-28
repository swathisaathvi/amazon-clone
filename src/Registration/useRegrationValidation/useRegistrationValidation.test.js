import { renderHook, act } from "@testing-library/react-hooks";
import useRegistrationValidation from "./useRegistrationValidation";

describe("useRegistrationValidation", () => {
  it("should initialize with empty userData and no errors", () => {
    const { result } = renderHook(() => useRegistrationValidation());

    expect(result.current.userData).toEqual({
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

    expect(result.current.allErrors).toEqual({});
  });

  it("should handle name validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;

    act(() => {
      validationFunctions.onNameChange("John");
    });

    expect(result.current.userData.name).toBe("John");
    expect(result.current.allErrors.name).toBe("");

    act(() => {
      validationFunctions.onNameChange("");
    });

    expect(result.current.allErrors.name).toBe("Please Enter Username");
  });

  it("should handle Gender validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;

    act(() => {
      validationFunctions.onGenderChange("Male");
    });

    expect(result.current.userData.gender).toBe("Male");
    expect(result.current.allErrors.gender).toBe("");

    act(() => {
      validationFunctions.onGenderChange("");
    });

    expect(result.current.allErrors.gender).toBe("Please select Gender");
  });

  it("should handle Date of Birth validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;

    act(() => {
      validationFunctions.onDOBChange("2023-10-11");
    });

    expect(result.current.userData.dob).toBe("2023-10-11");
    expect(result.current.allErrors.DateOfBirth).toBe("");

    act(() => {
      validationFunctions.onDOBChange("");
    });

    expect(result.current.allErrors.DateOfBirth).toBe("Please select Date of Birth");
  });

  it("should handle Phone Number validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;

    act(() => {
      validationFunctions.onPhoneNumberChange("6384674536");
    });

    expect(result.current.userData.phoneNumber).toBe("6384674536");
    expect(result.current.allErrors.phoneNumber).toBe("");

    act(() => {
      validationFunctions.onPhoneNumberChange("");
    });

    expect(result.current.allErrors.phoneNumber).toBe("Please Enter Phone Number");

    act(() => {
      validationFunctions.onPhoneNumberChange("63846745");
    });

    expect(result.current.allErrors.phoneNumber).toBe("Please Enter Valid Phone Number");

  });

  it("should handle Email validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;

    act(() => {
      validationFunctions.onEmailChange("dskj@gmail.com");
    });

    expect(result.current.userData.email).toBe("dskj@gmail.com");
    expect(result.current.allErrors.email).toBe("");

    act(() => {
      validationFunctions.onEmailChange("");
    });

    expect(result.current.allErrors.email).toBe("Please Enter Email");

    act(() => {
      validationFunctions.onEmailChange("ssd@");
    });
    expect(result.current.allErrors.email).toBe("Please Enter Valid Email");
  });

  it("should handle Password validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;

    act(() => {
      validationFunctions.onPasswordChange("password@123");
    });

    expect(result.current.userData.password).toBe("password@123");
    expect(result.current.allErrors.password).toBe("");

    act(() => {
      validationFunctions.onPasswordChange("");
    });

    expect(result.current.allErrors.password).toBe("Please Enter Password");
  });

  it("should handle Confirm Password validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;
  
    act(() => {
      validationFunctions.onConfirmPwdChange("password@123");
    });
  
    expect(result.current.allErrors.confirmPassword).toBe("Passwords does not match");
  
    act(() => {
      validationFunctions.onConfirmPwdChange("");
    });
  
    expect(result.current.allErrors.confirmPassword).toBe("Please Enter Password");
  
    act(() => {
      validationFunctions.onPasswordChange("password@123");
      validationFunctions.onConfirmPwdChange("password@1234");
    });
  
    expect(result.current.allErrors.confirmPassword).toBe("Passwords does not match");
  });
  
  it("should handle Agree terms validation", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions } = result.current;

    act(() => {
      validationFunctions.onAgreeToTerms(true);
    });

    expect(result.current.userData.agreeToTerms).toBe(true);
    expect(result.current.allErrors.agreeToTerms).toBe("");

    act(() => {
      validationFunctions.onAgreeToTerms(false);
    });

    expect(result.current.allErrors.agreeToTerms).toBe("You have to agree to the Terms and conditions");
  });


  it("should handle form submission", () => {
    const { result } = renderHook(() => useRegistrationValidation());
    const { validationFunctions, onSubmitClick } = result.current;

    act(() => {
      validationFunctions.onNameChange("John");
      validationFunctions.onEmailChange("john@example.com");
      validationFunctions.onPasswordChange("password");
      validationFunctions.onConfirmPwdChange("password");
      validationFunctions.onSubNewsLtrChange("Yes");
      validationFunctions.onAgreeToTerms(true);
    });

    act(() => {
      onSubmitClick(result.current.userData);
    });

  });
});
