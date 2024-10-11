import React from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/formReducer"; // Import the action
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Validation schema using Yup
    const validationSchema = Yup.object({
        addressLineOne: Yup.string()
            .required("Address Line 1 is required"),
        addressLineSecond: Yup.string(),
        city: Yup.string()
            .required("City is required"),
        zipCode: Yup.number()
            .required("ZIP Code is required")
            .min(10000, "ZIP Code must be at least 5 digits")
            .max(999999, "ZIP Code must be at most 6 digits"),
    });

    // Use Formik for form handling
    const formik = useFormik({
        initialValues: {
            addressLineOne: '',
            addressLineSecond: '',
            city: '',
            zipCode: ''
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(setUserData(values));
            navigate("/step3");
        }
    });

    const handlePrevious = () => {
        navigate("/");
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full sm:max-w-md md:max-w-lg p-8 bg-white shadow-xl rounded-xl">
                <h2 className="text-xl font-bold text-center mb-4">Address Information</h2>
                <form onSubmit={formik.handleSubmit}>
                    {/* Address Line 1 */}
                    <div className="my-4">
                        <label htmlFor="addressLineOne" className="block mb-1">Address Line 1</label>
                        <input
                            type="text"
                            name="addressLineOne"
                            value={formik.values.addressLineOne}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter address line 1"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                        {formik.touched.addressLineOne && formik.errors.addressLineOne ? (
                            <div className="text-red-500 text-sm">{formik.errors.addressLineOne}</div>
                        ) : null}
                    </div>

                    {/* Address Line 2 */}
                    <div className="my-4">
                        <label htmlFor="addressLineSecond" className="block mb-1">Address Line 2</label>
                        <input
                            type="text"
                            name="addressLineSecond"
                            value={formik.values.addressLineSecond}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter address line 2"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                        {formik.touched.addressLineSecond && formik.errors.addressLineSecond ? (
                            <div className="text-red-500 text-sm">{formik.errors.addressLineSecond}</div>
                        ) : null}
                    </div>

                    {/* City */}
                    <div className="my-4">
                        <label htmlFor="city" className="block mb-1">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter city"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className="text-red-500 text-sm">{formik.errors.city}</div>
                        ) : null}
                    </div>

                    {/* ZIP Code */}
                    <div className="my-4">
                        <label htmlFor="zipCode" className="block mb-1">ZIP Code</label>
                        <input
                            type="number"
                            name="zipCode"
                            value={formik.values.zipCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter ZIP Code"
                            className="mt-1 block w-full border rounded-md p-2"
                        />
                        {formik.touched.zipCode && formik.errors.zipCode ? (
                            <div className="text-red-500 text-sm">{formik.errors.zipCode}</div>
                        ) : null}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center border font-semibold text-lg text-gray-500 rounded-lg">
                        <button type="button" onClick={handlePrevious} className="flex items-center justify-center w-full p-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
                            <FaArrowLeft className="mr-2" />
                            Previous
                        </button>
                        <button type="submit" className="flex items-center justify-center w-full p-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
                            Next
                            <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressInfo;
