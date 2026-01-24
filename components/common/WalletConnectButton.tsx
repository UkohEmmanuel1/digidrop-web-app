'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function ConnectWalletButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        if (!mounted) return null;

        if (!account) {
          return (
            <button
              onClick={openConnectModal}
              className="
                    px-10 sm:px-14 py-3 sm:py-4
                    bg-gray-800 border-2 border-purple-400
                    text-white font-semibold tracking-wide rounded-xl
                    shadow-lg shadow-purple-400/30
                    transition-all duration-300 ease-out
                    hover:bg-gray-700 hover:scale-105 hover:shadow-purple-400/50
                    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
                  "
               >
              Connect Wallet
            </button>
          );
        }

        if (chain?.unsupported) {
          return (
            <button
              onClick={openChainModal}
              className="bg-red-600 text-white px-6 py-3 rounded-xl"
            >
              Wrong Network
            </button>
          );
        }

        return (
          <button
            onClick={openAccountModal}
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            {account.displayName}
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}

