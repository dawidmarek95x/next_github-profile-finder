export default async function getUser(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
