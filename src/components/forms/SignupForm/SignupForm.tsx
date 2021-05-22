import React, { useState, useRef } from "react";
import { Container, FormWrapper, InputWrapper } from "./SignupForm.styled";
import { useAuth } from "../../../context/AuthContext";
import { ButtonNormal, InputText } from "components";
import { notify } from "utils";
import { useMutation } from "@apollo/client";
import { CREATE_COACHEE } from "graphql/mutations/createCoachee.mutation";

import { AdSenseInput, DatePickerInput } from "components/inputs";
import { FormLabel } from "components/headings";

function Signup(props: any) {
  const { signup, coacheeCreated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [createCoachee] = useMutation(CREATE_COACHEE);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const confirmPassword = confirmPasswordRef.current?.value;

    if (!email || !password || !confirmPassword) {
      setLoading(false);
      notify(["open", "Something went wrong", "Please fill all the inputs"]);

      return;
    }

    let firebaseUser;

    setLoading(true);
    try {
      firebaseUser = await signup(email, password);
    } catch (error) {
      setLoading(false);
      notify(["open", "Something went wrong", error.message]);
    }
    console.log("FIREBASE");
    try {
      await createCoachee({
        variables: {
          createCoachee: {
            firebaseAuthId: firebaseUser?.user?.uid,
            firstName: email,
            lastName: email + "last",
            email,
            dateOfBirth: "1995-01-01",
          },
        },
      });
    } catch (error) {
      setLoading(false);
      notify(["open", "Something went wrong"]);
    }

    coacheeCreated();
  };

  return (
    <Container>
      <FormLabel title={"Sign up"} />
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

        <DatePickerInput type="text" label="Date of Birth"></DatePickerInput>

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

        <AdSenseInput type="text" label="Sources"></AdSenseInput>

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
