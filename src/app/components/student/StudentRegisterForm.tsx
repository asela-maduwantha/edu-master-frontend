"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";

interface StudentDTO {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  confirmPassword?: string;
}

const validateEmail = (email: string): string | undefined => {
  if (!email) return "Email is required";
  if (!/\S+@\S+\.\S+/.test(email)) return "Email is invalid";
  return undefined;
};

const validatePassword = (password: string): string | undefined => {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return undefined;
};

const StudentRegisterForm = () => {
  const [student, setStudent] = useState<StudentDTO>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    let isValid = true;

    const emailError = validateEmail(student.email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    }

    if (!student.firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!student.lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    const passwordError = validatePassword(student.password);
    if (passwordError) {
      newErrors.password = passwordError;
      isValid = false;
    }

    if (student.password !== student.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Student registered:", student);
      // Add logic to send data to the backend here
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/register-image.jpg"
            alt="Student registration"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
            Student Registration
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={student.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-700 placeholder-gray-400"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={student.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-700 placeholder-gray-400"
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={student.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-700 placeholder-gray-400"
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={student.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-700 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={student.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-700 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Register
            </button>
          </form>

          <div className="flex items-center justify-center mt-6">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center w-full max-w-xs bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              <Image
                src="/google-icon.png"
                alt="Google Icon"
                width={20}
                height={20}
                className="mr-3"
              />
              <span className="text-gray-700 font-medium">
                Sign up with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegisterForm;
