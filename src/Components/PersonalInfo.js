import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/formReducer"; // Import the action
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.isDarkMode);
    const userData = useSelector((state) => state.form);
    console.log(userData)

    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        name: ''
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setUserData(formData)); 
        console.log(mode)
        navigate("/step2")
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className={`w-full sm:max-w-md md:max-w-lg p-8 ${!mode ? "bg-primary" : "bg-secondary"} shadow-xl rounded-xl`}>
                <h2 className="text-xl font-bold text-center mb-4">
                    Personal Information
                </h2>

                <form onSubmit={handleSubmit}>
                <div className="my-4">
                        <label htmlFor="name" className="text-gray-600 sm:text-md md:text-lg font-semibold block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={`mt-1 block w-full ${!mode ? "bg-primary focus:ring-secondary focus:border-secondary " : "bg-secondary focus:ring-primary focus:border-primary "} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 p-2 text-sm`}
                        />
                    </div>


                    <div className="my-4">
                        <label htmlFor="email" className="text-gray-600 sm:text-md md:text-lg font-semibold block mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`mt-1 block w-full ${!mode ? "bg-primary focus:ring-secondary focus:border-secondary " : "bg-secondary focus:ring-primary focus:border-primary "} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 p-2 text-sm`}
                        />
                    </div>

                    <div className="my-4">
                        <label htmlFor="mobile" className="text-gray-600 sm:text-md md:text-lg font-semibold block mb-1">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            className={`mt-1 block w-full ${!mode ? "bg-primary focus:ring-secondary focus:border-secondary " : "bg-secondary focus:ring-primary focus:border-primary "} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 p-2 text-sm`}
                        />
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
