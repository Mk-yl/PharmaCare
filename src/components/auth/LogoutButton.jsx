import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button 
      className="btn btn-outline"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Se déconnecter
    </button>
  );
}

export default LogoutButton;