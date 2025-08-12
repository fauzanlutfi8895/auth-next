# 🛡️ Next.js 15 - Advanced Authentication System

## This project is a complete and modern authentication system built using the Next.js App Router and Auth.js (Next-auth v5).

This application was developed to demonstrate how to add advanced authentication to a Next.js project, covering various login methods, session management, and robust security features.

**Open https://auth-next-fauzan-luthfis-projects.vercel.app/ with your browser to see the live application.**

### 🚀 Key Features

This project is a deep dive into modern authentication, including:

**Core Functionality:**

  * 🔐 **Auth.js**: A flexible and powerful authentication system.
  * 🚀 **Next.js 15 with Server Actions**: Leverages the latest Next.js features for efficient client-server interactions.
  * 🔑 **Credentials Provider**: Standard login with email and password.
  * 🌐 **OAuth Provider**: Easy social login with Google & GitHub.
  * 🔒 **Forgot Password**: Secure password recovery functionality.
  * ✉️ **Email Verification**: Email verification for new users.
  * 📱 **Two-Factor Verification (2FA)**: Two-factor authentication.
  * 👥 **User Roles**: Defines user roles (Admin & User).
  * ⚙️ **Middleware**: Protects routes and APIs efficiently.
  * 🔄 **Next-auth Callbacks**: Customizes session and JWT behavior.

**Components & Pages:**

  * 👤 `Login`, `Register`, `Forgot Password`, `Verification` components.
  * 🚪 `Login` & `Logout` buttons.
  * ⚙️ `Settings` page: For managing profile and preferences.

**Advanced Features:**

  * 👮 **Role Gate**: Restricts content access to specific roles (admin only).
  * 🛡️ **Protect API Routes & Server Actions**: Secures endpoints and Server Actions for admins only.
  * 📧 **Change Email**: With new email verification on the `Settings` page.
  * 🔑 **Change Password**: With old password confirmation on the `Settings` page.
  * 🔔 **Enable/disable 2FA**: Toggles two-factor authentication on the `Settings` page.
  * 🔄 **Change User Role**: Allows changing user roles in the `Settings` page (for development purposes only).
  * 🧑 **`useCurrentUser` & `useRole` hooks**: Fetches user and role data on the client side.

### 🛠️ Technology Stack

  * **Frontend**: React.js
  * **Backend**: **Next.js Server Actions** (Node.js)
  * **Authentication**: Auth.js, NextAuth.js v5
  * **UI/Styling**: Tailwind CSS, Shadcn/UI
  * **Database**: Prisma ORM (supports PostgreSQL), NeonDB
  * **Emails**: Resend API
  * **Deployment**: Vercel

### 🖼️ Screenshots

\<br\>
\<br\>

\<details\>
\<summary\>\<b\>View All Screenshots\</b\>\</summary\>
\<br\>
\</details\>

### 📚 Tutorial & References

This project was inspired by a tutorial by **Code With Antonio**. Learn more about implementing these features from the following resources:

  * **Video Tutorial**: [Code With Antonio - Next Auth V5 - Advanced Guide (2024)](https://youtu.be/1MTyCvS05V4?si=dbTWLtDTTUOr27v-)
  * **Auth.js Docs**: [https://authjs.dev/](https://authjs.dev/)
  * **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
  * **Shadcn/UI Docs**: [https://ui.shadcn.com/](https://ui.shadcn.com/)
  * **Resend API**: [https://resend.com/](https://resend.com/)
  * **Node.js**: [https://nodejs.org/en](https://nodejs.org/en)

### 🚀 How to Run the Project

1.  Clone this repository:
    ```bash
    git clone https://github.com/fauzanlutfi8895/auth-next.git
    cd auth-next
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure your `.env` file with the required variables.
4.  Run the development server:
    ```bash
    npm run dev
    ```

-----

### ⚙️ .env Configuration

To run this project, you must create a file `.env` in your project's root directory and copy the following variables. Replace all placeholders with your actual information.

```env
# URL for the Prisma database connection.
DATABASE_URL="<YOUR_DATABASE_URL>"

# Secret key for authentication. Use 'openssl rand -base64 32' to generate a new secret.
AUTH_SECRET="<YOUR_AUTH_SECRET>"

# OAuth Provider: Google
GOOGLE_CLIENT_ID="<YOUR_GOOGLE_CLIENT_ID>"
GOOGLE_CLIENT_SECRET="<YOUR_GOOGLE_CLIENT_SECRET>"

# OAuth Provider: GitHub
GITHUB_CLIENT_ID="<YOUR_GITHUB_CLIENT_ID>"
GITHUB_CLIENT_SECRET="<YOUR_GITHUB_CLIENT_SECRET>"

# API Key for the Resend email service.
RESEND_API_KEY="<YOUR_RESEND_API_KEY>"

# The URL of your application. Use http://localhost:3000 for local development.
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

\<br\>

**⚠️ Important Note on Email Features ⚠️**

For the Email Verification, Two-Factor Authentication (2FA), and Forgot Password features, you need to add a paid domain to an email service like Resend.

If you only use localhost, these features will not work correctly because there is no verified domain that can be used to send emails. You can still log in using the Google and GitHub providers (OAuth), as they do not depend on the application's ability to send emails.
