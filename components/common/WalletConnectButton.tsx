'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function ConnectWalletButton() {
  return <ConnectButton showBalance={false} />;
    // <ConnectButton.Custom>
    //   {({
    //     account,
    //     chain,
    //     openAccountModal,
    //     openChainModal,
    //     openConnectModal,
    //     mounted,
    //   }) => {
    //     if (!mounted) return null;

    //     if (!account) {
    //       return (
    //         <button
    //           onClick={openConnectModal}
    //           className="
    //                 px-10 sm:px-14 py-3 sm:py-4
    //                 bg-gray-800 border-2 border-purple-400
    //                 text-white font-semibold tracking-wide rounded-xl
    //                 shadow-lg shadow-purple-400/30
    //                 transition-all duration-300 ease-out
    //                 hover:bg-gray-700 hover:scale-105 hover:shadow-purple-400/50
    //                 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
    //               "
    //            >
    //           Connect Wallet
    //         </button>
    //       );
    //     }

        

    //     return (
    //       <div
    //         onClick={openAccountModal}
    //         className="text-white px-6 py-3 rounded-xl">
    //         {account.displayName}
    //       </div>
    //     );
    //   }}
    // </ConnectButton.Custom>
  
}

