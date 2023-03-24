import UserProfileCard from "@/components/UserProfileCard/UserProfileCard";
import { Metadata } from "next";
import React, { Suspense } from "react";

async function getUser(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: UserProfileProps): Promise<Metadata> {
  const userData = await getUser(params.username);
  const title = userData
    ? `${userData.login}'s Profile`
    : "GitHub Profile Finder";
  return { title };
}

export default function UserProfile({
  params: { username },
}: UserProfileProps) {
  return (
    <>
      <main className="pb-4">
        <Suspense>
          <UserProfileCard name={username} />
        </Suspense>
      </main>
    </>
  );
}
