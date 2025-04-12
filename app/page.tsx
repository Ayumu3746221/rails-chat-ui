import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  const token = cookieStore.get("accessToken");

  console.log("Cookie内のユーザー情報:", user?.value);
  console.log("Cookie内のトークン:", token?.value);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {user ? (
          <div>
            <p>ログイン中のユーザー情報:</p>
            <pre>{JSON.stringify(JSON.parse(user.value), null, 2)}</pre>
          </div>
        ) : (
          <p>ユーザー情報がありません</p>
        )}
      </main>
    </div>
  );
}
