import getConfig from 'next/config';

export default function Home() {
  const {publicRuntimeConfig} = getConfig();
  const domain = publicRuntimeConfig.domain || 'localhost:3000';
  const protocol = publicRuntimeConfig.protocol || 'http';
  const basePath = publicRuntimeConfig.basePath;
  const landingUrl = `${protocol}://${domain}`;
  const authUrl = `${landingUrl}/auth`;
  // if you want the token, use a route in the app for the callback url to extract the token
  const callbackUrl = publicRuntimeConfig.dev
    ? `http://localhost:3000/${basePath}/api/auth/callback/paramountric`
    : `${landingUrl}/${basePath}/api/auth/callback/paramountric`;
  // ! note that the app must be registered in the auth server
  const signinUrl = `${authUrl}?redirect_uri=${callbackUrl}&client_id=${basePath}&oidc_issuer=default`;

  console.log(signinUrl);
  return (
    <main>
      <div className="m-2 p-2 flex justify-between">
        <p>Header</p>
        <a href={signinUrl}>Sign in</a>
      </div>
    </main>
  );
}
