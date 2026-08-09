import SignUpView from "@/app/modules/auth/ui/view/sign-up-view";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignUpPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!!session) {
        redirect("/dashboard")
    }


    return (
        <SignUpView />
    )
}

export default SignUpPage