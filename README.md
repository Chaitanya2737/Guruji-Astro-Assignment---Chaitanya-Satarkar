# Multi-Step Form Project

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## About the Project

**Multi-Step Form Project** Multi-Step Form Project is a web application designed to collect user information through a multi-step form, ensuring data is accurately entered before submission. This project was developed using React.js, Formik, and Yup, with the primary goal of simplifying the user data collection process across multiple form steps and providing a review before submission.

### Key Objectives:

- Improve User Experience: By dividing form input into manageable steps, users can focus on one section at a time, making the process less overwhelming.
- Data Validation: Each step utilizes Formik and Yup for real-time validation, ensuring that users provide accurate information before proceeding.
- Local Storage Utilization: The application leverages the browser's local storage to temporarily save user data throughout the multi-step form process. This ensures that users can navigate between steps without losing their progress. Upon final submission, the collected data is stored persistently, enabling easy retrieval and verification. This feature enhances user convenience, making it suitable for users who may need to complete the form at their own pace.

## Features

- Form validation: Each step includes validation to ensure all required fields are filled in correctly.
- Data persistence: User data is saved to localStorage upon form submission.
- Responsive Design: The form layout is fully responsive, adapting to different screen sizes.
- Dark Mode Support: The project includes light/dark mode based on user preference.

## Technologies Used

This project was built using the following technologies:

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Redux
  - React Icons
  - Formik (for form handling)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Chaitanya2737/Guruji-Astro-Assignment---Chaitanya-Satarkar.git
   ```

2. **Navigate to the project directory:** 

   ```bash 
   cd Guruji-Astro-Assignment---Chaitanya-Satarkar
   ```

3. **Install dependencies:** 

   ```bash
   npm install
   ```

4. **Run the project:** 

   ```bash
   npm start
   ```


## Usage

To use the application, follow these steps:

1. **Fill out the form:**

   - Navigate through the different steps of the form by clicking **Next** after each step.
   - Provide your information, such as:
     - **User Information:** Name, Mobile Number, Email
     - **Address Information:** Address Line 1, Address Line 2, City, ZIP Code

2. **Review your information:**

   - After completing the form, you will be directed to the **Confirmation** page.
   - Here, you can review all the details you've entered.
   - If you need to make changes, click on the **Previous** button to go back to the relevant step.

3. **Submit the form:**
   - Once you are satisfied with the information displayed on the Confirmation page, click the **Submit** button.
   - Your data will be saved in `localStorage` for future use, or it will be sent to the backend for processing (depending on your application’s setup).
   - You may see a success message indicating that your information has been submitted successfully.



## Contact

- **Name:** Chaitanya Satarkar
- **GitHub:** [https://github.com/Chaitanya2737/](https://github.com/Chaitanya2737/)
- **LinkedIn:** [https://linkedin.com/in/chaitanya-satarkar-29b515172/](https://linkedin.com/in/chaitanya-satarkar-29b515172/)
- **Tel:** 9130452737
