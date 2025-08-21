import { PrivyProvider } from '@privy-io/react-auth';
import './App.css';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';
import LoginButton from './LoginButton';

const solanaConnectors = toSolanaWalletConnectors({
  // By default, shouldAutoConnect is enabled
  shouldAutoConnect: true,
});

const App = () => {
  return (
    <PrivyProvider
      appId="cm4ihuook06jfc4ew4dmh5hph"
      config={{
        loginMethods: ['wallet', 'google', 'email'],
        appearance: {
          walletList: ['detected_solana_wallets', 'solflare'],
          theme: '#775045',
          walletChainType: 'solana-only',
        },
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
        solanaClusters: [
          {
            name: 'devnet',
            rpcUrl: process.env.PUBLIC_RPC_URL,
          },
        ],
      }}
    >
      <div className="content">
        <h1>Capacitor with Privy</h1>
        <LoginButton />
      </div>
    </PrivyProvider>
  );
};

export default App;
