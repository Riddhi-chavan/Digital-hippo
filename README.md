![Digital Hippo Marketplace Logo](https://github.com/user-attachments/assets/9cb181b1-67a0-4386-afd6-b3887f787874)


# Digital Hippo Marketplace

## Overview

Digital Hippo Marketplace is a platform where users can buy UI kits and icon files using real money. The website features a seller dashboard, an admin panel, and a secure payment system, ensuring a smooth and safe user experience. The platform is built using various modern technologies to ensure efficiency, responsiveness, and reliability.

## Table of Contents
- [About the Project](#about-the-project)
  - [Features](#Features)
  - [Screenshots](#screenshots)
  - [Demo](#demo)
  - [Live Demo](#live-demo)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Clone Project](#clone-project)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contact](#contact)

## About the Project

### Features
- **User Authentication and Verification**: Users can sign up, log in, and verify their accounts via email.
- **Secure Payments**: Integrated with Stripe for secure transactions.
- **Responsive Design**: Fully responsive design that works efficiently on all devices.
- **Seller Dashboard**: Sellers can manage their digital assets and track sales.
- **Admin Panel**: Admins can oversee the platform, manage users, and handle transactions.
- **Cart Management**: Add and remove items from the cart and proceed to checkout seamlessly.
- **Email Notifications**: Users receive email notifications for account verification and order confirmations.

### Screenshots
![screencapture-digital-hippo-production-526d-up-railway-app-2024-05-27-17_01_20](https://github.com/user-attachments/assets/c109fb2f-c932-4913-b27c-40980ee836cd)
![screencapture-digital-hippo-production-526d-up-railway-app-product-6643ca15f7cb3646bebb0142-2024-05-27-17_01_42](https://github.com/user-attachments/assets/dfa226ed-e488-4e2b-84a8-47bfbd574db7)
![screencapture-digital-hippo-production-526d-up-railway-app-cart-2024-05-27-17_02_04](https://github.com/Riddhi-chavan/Digital-hippo/assets/130183432/916adffb-aad2-41cd-bec5-1a4a7af19d83)
![screencapture-checkout-stripe-c-pay-cs-test-b1xV88uYDwt8462i3vRXTBHgQ451aSfF6elTdZsebBLsiF4jb41Be1vyux-2024-05-27-17_02_27](https://github.com/user-attachments/assets/772d37d0-8890-4d3d-bb85-a362a7759165)
![screencapture-digital-hippo-production-526d-up-railway-app-thank-you-2024-05-27-17_00_58](https://github.com/user-attachments/assets/067aa387-ebfb-489f-9309-3ed1990bc25a)



### Demo
https://github.com/user-attachments/assets/f8b67f32-6337-466e-a743-ae77186acaf3

### Live Demo
[click here for live demo ](https://digital-hippo-production-526d.up.railway.app/)

### Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS, Swiper
- **Backend**: Node.js, Express, Payload CMS
- **Database**: MongoDB
- **State Management**: Zustand
- **Payment Gateway**: Stripe
- **Email Service**: Nodemailer
- **Styling**: Tailwind css 

## Getting Started

### Prerequisites
- **Node.js**: Install Node.js from [here](https://nodejs.org/en)
- **Stripe Account**: Sign up for a Stripe account [here](https://stripe.com)
- **MongoDB**: Set up a MongoDB database [here](https://www.mongodb.com)
- **SMTP Email Service**: Set up an email service for Nodemailer

### Installation

#### Clone Project
```bash
git clone https://github.com/Riddhi-chavan/Digital-Hippo-Marketplace.git
cd Digital-Hippo-Marketplace
```
## Backend Setup

1. **Install the dependencies:**
    ```bash
    npm install
    ```

2. **Set up environment variables:**
    - Create a `.env` file in the backend directory and add the following:
        ```bash
        MONGO_URI=your-mongodb-uri
        STRIPE_SECRET_KEY=your-stripe-secret-key
        JWT_SECRET=your-jwt-secret
        EMAIL_SERVICE=your-email-service
        EMAIL_USER=your-email-user
        EMAIL_PASS=your-email-pass
        ```

3. **Start the backend server:**
    ```bash
    npm run dev
    ```

## Frontend Setup

1. **Set up environment variables:**
    - Create a .env.local file
     in the frontend directory and add the following:
     ---
  
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
      

2. **Start the frontend server:**
    ```bash
    npm run dev
    ```

    ### Tailwind CSS Configuration

1. **Install Tailwind CSS:**
    ```bash
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    ```

2. **Generate Tailwind CSS configuration file:**
    ```bash
    npx tailwindcss init
    ```

   3. **Update `tailwind.config.js` with your custom configuration if needed.**


## Configuration

Ensure all necessary configurations, such as API keys and database connections, are correctly set up in the environment variables.

## Usage

- Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
- Register or log in as a user to start purchasing digital assets.
- Use the seller dashboard to upload and manage your digital products.
- Admins can log in to the admin panel to manage the entire platform.

## Contact

Email: riddhic164@gmail.com

Project Link: [https://github.com/Riddhi-chavan/Digital-hippo](https://github.com/Riddhi-chavan/Digital-hippo)

Thank you for checking out my project! If you have any suggestions or find issues, feel free to open an issue or submit a pull request. Your feedback is highly appreciated!
