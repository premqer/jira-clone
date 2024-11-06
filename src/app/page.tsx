"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useCurrent } from "@/features/auth/api/use-current";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useLogout } from "@/features/auth/api/use-logout";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/user-button";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  // const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }

  }, [data]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
