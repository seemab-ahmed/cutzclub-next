"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("professional"); // default role

  return (
    <section className="custom-login">
      <main className="card" aria-labelledby="login-title">
        <h1 id="login-title" className="brand">
          CUTZCLUB
        </h1>

        {/* Role Toggle */}
        <div
          className="role-toggle login-toogle"
          role="group"
          aria-label="Choose account type"
        >
          <button
            type="button"
            className={`toggle-btn ${role === "professional" ? "active" : ""}`}
            aria-pressed={role === "professional"}
            onClick={() => setRole("professional")}
          >
            I’m a Professional
          </button>
          <button
            type="button"
            className={`toggle-btn ${role === "client" ? "active" : ""}`}
            aria-pressed={role === "client"}
            onClick={() => setRole("client")}
          >
            I’m a Client
          </button>
        </div>

        {/* Form */}
        <form id="loginForm" noValidate>
          {/* hidden input for selected role */}
          <input type="hidden" name="role" id="roleInput" value={role} />

          <label className="field" aria-label="Email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              placeholder="Email"
              required
            />
          </label>

          <label className="field relative" aria-label="Password">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Password"
              minLength={6}
              required
            />
            <button
              type="button"
              className="eye absolute right-2 top-1/2 -translate-y-1/2"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                // 👁 Open Eye
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                // 👁 Closed Eye
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.041-3.362m2.978-2.978A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.411M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 18"
                  />
                </svg>
              )}
            </button>
          </label>

          <p className="helper">
            Don’t have an account?{" "}
            <Link href="/signup" aria-label="Sign up">
              Sign Up
            </Link>
          </p>

          <p id="err" className="error" role="alert">
            Please enter a valid email and password (min 6 characters).
          </p>

          <button id="loginBtn" className="btn" type="submit" disabled>
            Login
          </button>
        </form>
      </main>
    </section>
  );
}
