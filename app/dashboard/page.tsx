import { auth } from "@/server/auth"

export default async function Page() {
  const session = await auth();

  return (
    <div>{JSON.stringify(session, null, 2)}</div>
  )
}