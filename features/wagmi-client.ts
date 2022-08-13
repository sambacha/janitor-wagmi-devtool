import { configureChains, createClient, defaultChains } from "wagmi"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

// Configure chains & providers with the Alchemy provider.
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.PLASMO_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider()
])

type Client = ReturnType<typeof createClient>

// Set up client
export const client: Client = createClient({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true
      }
    })
  ],
  provider,
  webSocketProvider
});
export type SendReturnResult = { result: any };
export type SendReturn = any;

export type Send = (
  method: string,
  params?: any[],
) => Promise<SendReturnResult | SendReturn>;
export type SendOld = ({
  method,
}: {
  method: string;
}) => Promise<SendReturnResult | SendReturn>;
