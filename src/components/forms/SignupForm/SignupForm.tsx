import React, { useState, useRef } from "react";
import { Container, FormWrapper, InputWrapper } from "./SignupForm.styled";
import { useAuth } from "../../../context/AuthContext";
import { ButtonNormal, InputText, DropDown } from "components";
import { notify } from "utils";
import { DropDownWrapper } from "components/inputs/DropDown/DropDown.styled";
import DatePIcker from "components/inputs/DatePicker/DatePIcker";
import AdSenseInput from "components/inputs/AdSenseInput/AdSenseInput";
import { AdSenseInputWrapper } from "components/inputs/AdSenseInput/AdSenseInputWrapper.styled";
import FormTitle from "../FormTitle/FormTitle";
import PickerTitleSelect from "../PickerTitleSelect/PickerTitleSelect";

function Signup(props: any) {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPasswor = confirmPasswordRef.current?.value;
    if (email && password && confirmPasswor) {
      setLoading(true);
      try {
        await signup(email, password);
      } catch (error) {
        setLoading(false);
        notify(["open", "Something went wrong", error.message]);
      }
    } else {
      setLoading(false);
      notify(["open", "Something went wrong", "Please fill all the inputs"]);
    }
  };

  return (
    <Container>
      <FormTitle title={"Sign up"} />
      <FormWrapper>
        <InputWrapper>
          <InputText
            type={"text"}
            label={"First Name"}
            placeholder={"John"}
            name="firstName"
            ref={firstNameRef}
          />
          <InputText
            type={"text"}
            label={"Last Name"}
            placeholder={"Smith"}
            name="LastName"
            ref={lastNameRef}
          />
        </InputWrapper>

        <DropDownWrapper>
          <DatePIcker />
        </DropDownWrapper>
        <InputText
          type={"text"}
          label={"Email"}
          placeholder={"abc@domain.com"}
          name="email"
          ref={emailRef}
        />
        <InputText
          type={"tel"}
          label={"Phone"}
          placeholder={"-- --- --- ---"}
          name="phone"
          ref={phoneRef}
        />
        <InputText
          type={"password"}
          label={"Password"}
          placeholder={"******"}
          name="password"
          ref={passwordRef}
        />
        <InputText
          type={"password"}
          label={"Confirm password"}
          placeholder={"******"}
          name="password"
          ref={confirmPasswordRef}
        />
        <AdSenseInputWrapper>
          <PickerTitleSelect title={"Source"} />
          <AdSenseInput></AdSenseInput>
        </AdSenseInputWrapper>
        <ButtonNormal
          label={loading ? "Loading..." : "Sign up"}
          fill="true"
          onClick={() => onSubmit()}
          disabled={loading}
        />
      </FormWrapper>
    </Container>
  );
}

export default Signup;
