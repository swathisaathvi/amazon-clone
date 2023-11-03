import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  renderHook,
} from "@testing-library/react";
import Registration from "./Registration";
import "@testing-library/jest-dom";

describe("Registration Component", () => {
    it("renders the Registration component", () => {
      render(<Registration />);
      expect(screen.getByText("Register Here").toBeInTheDocument);
    });

    it("validate the name input", async () => {
      render(<Registration />);
      const registerButton = screen.getByText("Register");
      expect(registerButton).toBeDisabled();
      const nameInput = screen.getByTestId("name");

      fireEvent.change(nameInput, { target: { value: "" } });
      expect(screen.findByText('Please Enter Username')).toBeTruthy();

      fireEvent.change(nameInput, { target: { value: "John" } });
      expect(screen.findByText('Please Enter Username')).not.toBeInTheDocument;
    });

  it("validate the Gender input", async () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeDisabled();
    const genderInput = screen.getByTestId("gender");

    fireEvent.change(genderInput, { target: { value: "" } });
    expect(screen.findByText("Please select Gender")).toBeTruthy();

    fireEvent.change(genderInput, { target: { value: "Male" } });
    expect(screen.findByText("Please select Gender")).not.toBeInTheDocument;
  });

  it("validate the Date of Birth input", async () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeDisabled();
    const dobInput = screen.getByTestId("dob");

    fireEvent.change(dobInput, { target: { value: "" } });
    expect(screen.findByText("Please select Date of Birth")).toBeTruthy();

    fireEvent.change(dobInput, { target: { value: "2022-12-10" } });
    expect(screen.findByText("Please select Date of Birth")).not
      .toBeInTheDocument;
  });

  it("validate the phone Number input", async () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeDisabled();
    const phoneInput = screen.getByTestId("phoneNumber");

    fireEvent.change(phoneInput, { target: { value: "" } });
    expect(screen.findByText("Please Enter Phone Number")).toBeTruthy();

    fireEvent.change(phoneInput, { target: { value: "8899" } });
    expect(screen.findByText("Please Enter Valid Phone Number")).toBeTruthy();

    fireEvent.change(phoneInput, { target: { value: "0123456789" } });
    expect(screen.findByText("Please Enter Phone Number")).not
      .toBeInTheDocument;
    expect(screen.findByText("Please Enter Valid Phone Number")).not
      .toBeInTheDocument;
  });

  it("validate the Email input", async () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeDisabled();
    const emailInput = screen.getByTestId("email");

    fireEvent.change(emailInput, { target: { value: "" } });
    expect(screen.findByText("Please Enter Email")).toBeTruthy();

    fireEvent.change(emailInput, { target: { value: "seeey" } });
    expect(screen.findByText("Please Enter Valid Email")).toBeTruthy();

    fireEvent.change(emailInput, { target: { value: "0123456789" } });
    expect(screen.findByText("Please Enter Email")).not.toBeInTheDocument;
    expect(screen.findByText("Please Enter Valid Email")).not.toBeInTheDocument;
  });

  it("validate the password input", async () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeDisabled();
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(passwordInput, { target: { value: "" } });
    expect(screen.findByText('Please Enter Password"')).toBeTruthy();

    fireEvent.change(passwordInput, { target: { value: "32y8jde" } });
    expect(screen.findByText("Please Enter Password")).not.toBeInTheDocument;
  });

  it("validate the confirmPassword input", async () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeDisabled();

    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "sdgdg" } });

    const confirmPwdInput = screen.getByTestId("confirmPassword");
    fireEvent.change(confirmPwdInput, { target: { value: "" } });
    expect(screen.findByText('Please Enter Password"')).toBeTruthy();

    fireEvent.change(confirmPwdInput, { target: { value: "sdgsdgd" } });
    expect(screen.findByText('Passwords does not match"')).toBeTruthy();

    fireEvent.change(passwordInput, { target: { value: "sdgdg" } });
    expect(screen.findByText("Please Enter Password")).not.toBeInTheDocument;
    expect(screen.findByText('Passwords does not match"')).not
      .toBeInTheDocument;
  });

  it("validate the news letter input", async () => {
    render(<Registration />);
    const newsletterYes = screen.getByTestId("newsletterYes");
    const newsletterNo = screen.getByTestId("newsletterNo");

    expect(newsletterNo).toBeChecked();
    expect(newsletterYes).not.toBeChecked();

    fireEvent.click(newsletterYes);

    expect(newsletterYes).toBeChecked();
    expect(newsletterNo).not.toBeChecked();

    fireEvent.click(newsletterNo);
  });

  it("validate the Agree terms input", async () => {
    render(<Registration />);
    const agreeTermsInput = screen.getByTestId("agreeToTerms");
    fireEvent.click(agreeTermsInput);
    fireEvent.click(agreeTermsInput);
    expect(
      screen.findByText("You have to agree to the Terms and conditions")
    ).toBeTruthy();
    fireEvent.click(agreeTermsInput);
    expect(screen.findByText("You have to agree to the Terms and conditions"))
      .not.toBeInTheDocument;
  });

  it("validate Submit button Click", async () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeDisabled();
    const nameInput = screen.getByTestId("name");
    fireEvent.change(nameInput, { target: { value: "John" } });
    const genderInput = screen.getByTestId("gender");
    fireEvent.change(genderInput, {target: {value: "Male"}})
    fireEvent.change(genderInput, { target: { value: "" } });
    expect(screen.findByText("Please select Gender")).toBeInTheDocument;
    fireEvent.change(genderInput, { target: { value: "Male" } });
    expect(screen.findByText("Please select Gender")).not.toBeInTheDocument;
    const dobInput = screen.getByTestId('dob');
    fireEvent.change(dobInput, { target: { value: "2022-12-10" } });
    const phoneInput = screen.getByTestId('phoneNumber');
    fireEvent.change(phoneInput, { target: { value: "0123456789" } });
    const emailInput = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: "sw@email.com" } });
    const passwordInput = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: "ss35d" } });
    const confirmPwdInput = screen.getByTestId('confirmPassword');
    fireEvent.change(confirmPwdInput, { target: { value: "ss35d" } });
    const newsletterYes = screen.getByTestId("newsletterYes");
    fireEvent.click(newsletterYes);
    const agreeTermsInput = screen.getByTestId("agreeToTerms");
    fireEvent.click(agreeTermsInput);
    // expect(registerButton).not.toBeDisabled();
    // fireEvent.click(registerButton);
  });

  // it("validate Submit button Click", async () => {
  //   render(<Registration />);
  //   const registerButton = screen.getByText("Register");

  //   // Initially, the button should be disabled
  //   expect(registerButton).toBeDisabled();

  //   const nameInput = screen.getByTestId("name");
  //   fireEvent.change(nameInput, { target: { value: "John" } });

  //   const genderInput = screen.getByTestId("gender");
  //   fireEvent.change(genderInput, { target: { value: "Male" } });

  //   const dobInput = screen.getByTestId("dob");
  //   fireEvent.change(dobInput, { target: { value: "2022-12-10" } });

  //   const phoneInput = screen.getByTestId("phoneNumber");
  //   fireEvent.change(phoneInput, { target: { value: "0123456789" } });

  //   const emailInput = screen.getByTestId("email");
  //   fireEvent.change(emailInput, { target: { value: "sw@email.com" } });

  //   const passwordInput = screen.getByTestId("password");
  //   fireEvent.change(passwordInput, { target: { value: "ss35d" } });

  //   const confirmPwdInput = screen.getByTestId("confirmPassword");
  //   fireEvent.change(confirmPwdInput, { target: { value: "ss35d" } });

  //   const newsletterYes = screen.getByTestId("newsletterYes");
  //   fireEvent.click(newsletterYes);

  //   const agreeTermsInput = screen.getByTestId("agreeToTerms");
  //   fireEvent.click(agreeTermsInput);

  //   // Now, the button should be enabled
  //   //expect(registerButton).not.toBeDisabled();

  //   // Simulate the click on the "Register" button
  //   fireEvent.click(registerButton);
  // });
});
