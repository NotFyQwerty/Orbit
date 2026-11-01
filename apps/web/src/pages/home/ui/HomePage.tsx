import { Link } from "react-router";
import { setThemePreference } from "@/shared/theme";

export function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Orbit</h1>
      <Link to="/sign-in">Sign in</Link>
      <Link to="/sign-up">Sign up</Link>
      <div className="mt-4 flex gap-2">
        <button onClick={() => setThemePreference("system")}>System</button>
        <button onClick={() => setThemePreference("light")}>Light</button>
        <button onClick={() => setThemePreference("dark")}>Dark</button>
      </div>
    </>
  );
}
