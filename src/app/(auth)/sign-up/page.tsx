"use client";

import { SignUpCard } from "@/features/auth/components/sign-up-card";

// layout file overrides the page file because we are not using it for reusable things
// we should create interface and define children as a required prop here becaue every sign in layout will always have children
// purpose of the layouts is that you can add reusable layouts to your pages



const SignUpPage = () => {
    return <SignUpCard />
}
 
export default SignUpPage;