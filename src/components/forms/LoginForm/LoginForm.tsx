import React, { useRef, useState } from "react";
import {
  Container,
  FormWrapper,
  Footer,
  NotMember,
  Link,
} from "./LoginForm.styled";
import { useAuth } from "context/AuthContext";
import { ButtonNormal, InputText } from "components";
import { notify } from "utils";
import { FormLabel } from "components/headings";

function LoginForm(props: any) {
  const { signin } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setLoading(false);
      notify(["open", "Something went wrong", "Please fill all the inputs"]);

      return;
    }

    setLoading(true);
    try {
      await signin(email, password);
    } catch (error) {
      setLoading(false);
      notify(["open", "Something went wrong", error.message]);
    }
  };

  return (
    <Container>
      <FormLabel title={"Log in"} />
      <FormWrapper>
        <InputText
          type={"text"}
          label={"Email"}
          placeholder={"abc@domain.com"}
          name="email"
          ref={emailRef}
        />
        <InputText
          type={"password"}
          label={"Password"}
          placeholder={"******"}
          name="password"
          ref={passwordRef}
        />
        <ButtonNormal
          label={loading ? "Loading..." : "Log in"}
          fill="true"
          onClick={() => onSubmit()}
          disabled={loading}
        />
        <Footer>
          <NotMember>Not yet a member?</NotMember>
          <Link>Create account</Link>
        </Footer>
      </FormWrapper>
    </Container>
  );
}

export default LoginForm;
