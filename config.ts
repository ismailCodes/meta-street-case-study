import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const projectId =
  process.env.NEXT_PUBLIC_PROJECT_ID || "3b2e666a5d18356a49899f28e45a6191";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: process.env.WAGMI_PROJECT_URL || "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = defaultWagmiConfig({
  chains: [sepolia],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true,
  enableInjected: true,
  transports: {
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/cABfI72Efm9bxVEo3QiJcDJGQ1smNjcP"
    ),
  },
});
