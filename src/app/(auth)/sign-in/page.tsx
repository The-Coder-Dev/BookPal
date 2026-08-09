import SignInView from "@/app/modules/auth/ui/view/sign-in-view";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignInPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!!session) {
    redirect("/dashboard")
  }

  return (
    <SignInView />
  )
}

export default SignInPage

