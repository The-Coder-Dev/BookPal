import { Button } from "@/components/ui/button"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

const LogoutButton = () => {

    const router = useRouter();

    const onLogout = async () => {
        authClient.signOut({
            fetchOptions: ({
                onSuccess: () => {
                    router.push("/sign-in")
                }
            })
        })
    }

  return (
    <Button onClick={onLogout}>
        Logout
    </Button>
  )
}

export default LogoutButton