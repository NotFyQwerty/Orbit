import { Link } from "react-router";

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/sign-in">Sign in</Link>
      <Link to="/sign-up">Sign up</Link>
    </>
  );
}
