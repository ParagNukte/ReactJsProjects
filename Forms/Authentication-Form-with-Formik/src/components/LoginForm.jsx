import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Back Arrow */}
        <Link to="/" className="absolute top-4 left-3 text-2xl text-black hover:text-gray-700  animate-bounce">
          <IoIosArrowBack />
        </Link>

        <h2 className="text-3xl font-semibold text-center mb-6 text-black">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 text-black p-3 w-full border rounded-md"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1 text-black p-3 w-full border rounded-md"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-700 transition-all"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-4 text-black text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
