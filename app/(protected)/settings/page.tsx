"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();
  //AuthJs terbaru tidak mendukung action di dalam onClick button
  return (
    <div className="bg-white p-10 rounded-xl">
      <form action={logout}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
