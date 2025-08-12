import { NewPasswordForm } from "@/components/auth/new-password-from";
import { Suspense } from "react";

const NewPasswordPage = () => {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
