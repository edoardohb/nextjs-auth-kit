import { auth } from "@/server/auth"

export default async function Page() {
  const session = await auth();

  return (
    <pre className="whitespace-pre-wrap break-words bg-background p-4 rounded-lg">
      <code>
        {JSON.stringify(session, null, 2)}
      </code>
    </pre>
  )
}