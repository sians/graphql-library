import React, { useRef } from 'react';
import { Mutation } from "react-apollo";
import { SignMeIn } from "./operations.graphql";

const SignInForm = () => {
  const input = useRef(null);

  return (
          <div>
            <form
              onSubmit={event => {
                event.preventDefault();
                signIn({
                  variables: { email : input.current.value }
                }).then(({ data : { signIn : {token} } }) => {
                  if (token) {
                    localStorage.setItem("mlToken", token)
                  }
                });
              }}
            >
              <input
                ref={input}
                type="email"
                placeholder="your email"
              />
              <input
                type="submit"
                value="Sign in"
              />
            </form>
          </div>
    )
}

export default SignInForm;
