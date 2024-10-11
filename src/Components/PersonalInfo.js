import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/formReducer";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.isDarkMode);
    const navigate = useNavigate();

    // Validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        mobile: Yup.string()
            .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
            .required("Mobile number is required"),
    });

    // Use Formik for form handling
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: ''
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(setUserData(values));
            navigate("/step2");
        }
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <div className={`w-full sm:max-w-md md:max-w-lg p-8 ${!mode ? "bg-primary" : "bg-secondary"} shadow-xl rounded-xl`}>
                <h2 className="text-xl font-bold text-center mb-4">Personal Information</h2>

                <form onSubmit={formik.handleSubmit}>
                    {/* Name Field */}
                    <div className="my-4">
                        <label htmlFor="name" className="text-gray-600 sm:text-md md:text-lg font-semibold block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your name"
                            className={`mt-1 block w-full ${!mode ? "bg-primary focus:ring-secondary focus:border-secondary" : "bg-secondary focus:ring-primary focus:border-primary"} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 p-2 text-sm`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500 text-sm">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    {/* Email Field */}
                    <div className="my-4">
                        <label htmlFor="email" className="text-gray-600 sm:text-md md:text-lg font-semibold block mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your email"
                            className={`mt-1 block w-full ${!mode ? "bg-primary focus:ring-secondary focus:border-secondary" : "bg-secondary focus:ring-primary focus:border-primary"} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 p-2 text-sm`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    {/* Mobile Number Field */}
                    <div className="my-4">
                        <label htmlFor="mobile" className="text-gray-600 sm:text-md md:text-lg font-semibold block mb-1">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your mobile number"
                            className={`mt-1 block w-full ${!mode ? "bg-primary focus:ring-secondary focus:border-secondary" : "bg-secondary focus:ring-primary focus:border-primary"} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 p-2 text-sm`}
                        />
                        {formik.touched.mobile && formik.errors.mobile ? (
                            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
                        ) : null}
                    </div>

                    <div className="flex justify-center items-center border font-semibold text-lg text-gray-500 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
                        <button type="submit" className="flex items-center justify-center w-full p-2">
                            Next
                            <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;
