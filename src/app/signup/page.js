"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [role, setRole] = useState("client");
  return (
    <section className="signup-section">
      <main className="wrap">
        <header className="brand">
          <h1>CUTZCLUB</h1>
        </header>

        <section className="role">
      <input
        type="radio"
        id="role-client"
        name="role"
        value="client"
        checked={role === "client"}
        onChange={() => setRole("client")}
        className="hidden" // hide default radio
      />
      <label
        className={`pill ${role === "client" ? "" : "pill--muted"}`}
        htmlFor="role-client"
      >
        I’m A Client
      </label>

      {/* Barber */}
      <input
        type="radio"
        id="role-barber"
        name="role"
        value="barber"
        checked={role === "barber"}
        onChange={() => setRole("barber")}
        className="hidden"
      />
      <label
        className={`pill ${role === "barber" ? "" : "pill--muted"}`}
        htmlFor="role-barber"
      >
        I’m A Barber
      </label>
    </section>

        <section className="card">
          <h2>Sign Up</h2>
          <form
            action="#"
            method="post"
            className="form"
            autoComplete="on"
            noValidate
          >
            {/* Name */}
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Name" required />
            </div>

            {/* Email */}
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" required />
            </div>

            {/* Password */}
            <div className="field relative">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                minLength={8}
                required
              />
              <button
                type="button"
                className="eye absolute right-2 top-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  // 👁 Eye Open SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // 👁 Eye Closed SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.041-3.362m2.978-2.978A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.411M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="field">
              <label htmlFor="confirm">Confirm Password</label>
              <input
                id="confirm"
                name="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                minLength={8}
                required
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  // Eye Open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // Eye Closed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.041-3.362m2.978-2.978A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.411M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Submit */}
            <button type="submit" className="btn">
              Sign Up
            </button>
            <p className="login">
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </form>
        </section>
      </main>
    </section>
  );
}
