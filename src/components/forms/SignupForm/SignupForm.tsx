import React, { useState, useRef } from 'react';
import { Container, FormWrapper } from './SignupForm.styled';
import { useAuth } from '../../../context/AuthContext';
import { ButtonNormal, InputText } from "components";
import { notify } from "utils";
import {  useMutation } from '@apollo/client';
import { CREATE_COACHEE } from 'graphql/mutations/createCoachee.mutation';

function Signup(props: any) {
  const { signup, coacheeCreated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [createCoachee] = useMutation(CREATE_COACHEE);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!email || !password || !confirmPassword) {
      setLoading(false);
      notify([
        'open', 
        'Something went wrong', 
        'Please fill all the inputs'
      ]);

      return;
    }

    let firebaseUser;

    setLoading(true);
    try {
      firebaseUser = await signup(email, password);
    } catch (error) {
      setLoading(false);
      notify([
        'open',
        'Something went wrong',
        error.message
      ]);
    }
    console.log("FIREBASE")
    try {
      await createCoachee({ variables: {
        createCoachee: {
            firebaseAuthId: firebaseUser?.user?.uid,
            firstName: email,
            lastName:email + "last",
            email,
            dateOfBirth: "1995-01-01"
          }
        }  
      });     
      } catch (error) {
      setLoading(false);
      notify([
        'open',
        'Something went wrong'
      ]);
    }
    
    coacheeCreated();
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