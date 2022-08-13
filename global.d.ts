export {};
/**
 * @global
 * @interface Window
 * @override ethereum
 *
 */

declare global {
  interface Window {
    ENV: any;
    ethereum?: {
      send: unknown;
      isMetaMask?: true;
      enable: () => Promise<string[]>;
      on?: (...args: any[]) => void;
      removeListener?: (...args: any[]) => void;
      autoRefreshOnNetworkChange?: boolean;
    };
    web3?: Record<string, unknown>;
  }
}