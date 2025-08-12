# 🛡️ Next.js 15 - Advanced Authentication System

## This project is a complete and modern authentication system built using the Next.js App Router and Auth.js (Next-auth v5).

This application was developed to demonstrate how to add advanced authentication to a Next.js project, covering various login methods, session management, and robust security features.

**Open [link] with your browser to see the live application.**

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

  * **Video Tutorial**: [Code With Antonio - Next Auth V5 - Advanced Guide (2024)]([https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DNkWOzTEEcco%3Fsi%3DfqSbLyr6MvUwA9tr](https://youtu.be/1MTyCvS05V4?si=dbTWLtDTTUOr27v-))
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
