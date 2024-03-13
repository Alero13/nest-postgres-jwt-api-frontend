"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  
  /* const [email, setEmail] = useState<string>("test@test.com"); */
  const [email, setEmail] = useState("");

  //const [password, setPassword] = useState<string>("123123");

  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    //console.log(responseNextAuth)

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder=""
          name="email"
          className="form-control mb-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder=""
          name="password"
          className="form-control mb-2"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>

      {errors.length > 0 && (
        <div className="alert alert-danger mt-2">
          <ul className="mb-0">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default LoginPage;
