interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
}

interface UserProfileProps {
  params: {
    username: string;
  };
}
