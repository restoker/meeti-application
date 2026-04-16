import { generatePageTitle } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: generatePageTitle("Forgot Password")
}

export default function ForgotPage() {
    return (
        <div>
            <h1>Forgot Password</h1>
        </div>
    );
}