import React, { useState, useRef } from 'react';
import { Container, FormWrapper } from './SignupForm.styled';
import { useAuth } from '../../../context/AuthContext';
import { ButtonNormal, InputText } from "components";
import { notify } from "utils";

function Signup(props: any) {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
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
        notify([
          'open',
          'Something went wrong',
          error.message
        ]);
      }
    } else {
      setLoading(false);
      notify([
        'open', 
        'Something went wrong', 
        'Please fill all the inputs'
      ]);
    }
  }

  return (
    <Container>
      <FormWrapper>
        <InputText
          type={'text'}
          label={'Email'}
          placeholder={'abc@domain.com'}
          name="email"
          ref={emailRef}
        />
        <InputText
          type={'password'}
          label={'Password'}
          placeholder={'******'}
          name="password"
          ref={passwordRef}
        />
        <InputText
          type={'password'}
          label={'Confirm password'}
          placeholder={'******'}
          name="password"
          ref={confirmPasswordRef}
        />
        <ButtonNormal
          label={loading ? 'Loading...' : 'REGISTER'}
          fill="true"
          onClick={() => onSubmit()}
          disabled={loading}
        />
      </FormWrapper>
    </Container>
  )
}

export default Signup;