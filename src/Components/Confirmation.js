import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Alert from "./alert"; // Import the Alert component

const Confirmation = () => {
    const userData = useSelector((state) => state.form);
    const navigate = useNavigate();
    const [alert, setAlert] = useState({ message: "", type: "" });

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            // Save user data to local storage
            window.localStorage.setItem("userData", JSON.stringify(userData));
            // Set success alert
            setAlert({ message: "Data added successfully", type: "success" });
            // Optionally navigate to another page after successful submit
            setTimeout(() => {
                navigate("/");
            }, 2000); // Navigate after 2 seconds (optional)
        } catch (error) {
            console.error("Error saving data:", error);
            // Set error alert
            setAlert({ message: "Technical error occurred", type: "error" });
        }
    };

    // Automatically hide the alert after 3 seconds
    useEffect(() => {
        if (alert.message) {
            const timeout = setTimeout(() => {
                setAlert({ message: "", type: "" });
            }, 3000); // Hide alert after 3 seconds

            // Clean up the timeout when component unmounts or alert changes
            return () => clearTimeout(timeout);
        }
    }, [alert]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full sm:max-w-md md:max-w-lg p-8 bg-white shadow-xl rounded-xl">
                <h2 className="text-xl font-bold text-center mb-4">Review Your Information</h2>

                {/* Personal Information */}
                <div className="mb-4">
                    <h3 className="font-semibold">Personal Information</h3>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Mobile:</strong> {userData.mobile}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>

                {/* Address Information */}
                <div className="mb-4">
                    <h3 className="font-semibold">Address Information</h3>
                    <p><strong>Address Line 1:</strong> {userData.addressLineOne}</p>
                    <p><strong>Address Line 2:</strong> {userData.addressLineSecond}</p>
                    <p><strong>City:</strong> {userData.city}</p>
                    <p><strong>ZIP Code:</strong> {userData.zipCode}</p>
                </div>

                {/* Display Alert if there is one */}
                {alert.message && (
                    <Alert message={alert.message} type={alert.type} onClose={() => setAlert({ message: "", type: "" })} />
                )}

                {/* Navigation Buttons */}
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center items-center border font-semibold text-lg text-gray-500 rounded-lg">
                        <button
                            type="button"
                            onClick={() => navigate("/step2")}
                            className="flex items-center justify-center w-full p-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <FaArrowLeft className="mr-2" />
                            Previous
                        </button>
                        <button
                            type="submit"
                            className="flex items-center justify-center w-full p-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Submit
                            <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Confirmation;
