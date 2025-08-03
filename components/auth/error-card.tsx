import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper headerLabel="Oops! Something went error" backButtonLabel="Back to login" backButtonHref="/auth/login">
      <div>
        <ExclamationTriangleIcon className="w-full text-destructive" />
      </div>
    </CardWrapper>
  );
};
