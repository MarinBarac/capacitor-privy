import { usePrivy } from '@privy-io/react-auth';

const LoginButton = () => {
  const { login, user, logout } = usePrivy();

  console.log(user);

  return (
    <>
      {!user && (
        <button
          onClick={() =>
            login({
              loginMethods: ['wallet', 'google', 'apple', 'email'],
            })
          }
        >
          Log in
        </button>
      )}
      {!!user && (
        <div className="login-section">
          <p>Hello {user.id}</p>
          <button onClick={logout}>Log out</button>
        </div>
      )}
    </>
  );
};

export default LoginButton;
