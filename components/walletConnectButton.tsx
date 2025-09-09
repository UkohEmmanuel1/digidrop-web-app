// components/WalletConnectButton.tsx
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { web3Modal } from '../config/web3'; // Import web3Modal

const WalletConnectButton: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    // Open the Web3Modal
    await web3Modal.open();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md flex justify-between items-center mb-6">
      {isConnected ? (
        <div className="flex items-center space-x-4">
          <p className="text-white text-sm md:text-base">
            Connected: <span className="font-mono text-blue-400">{address?.substring(0, 6)}...{address?.substring(address.length - 4)}</span>
          </p>
          <button
            onClick={handleDisconnect}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out shadow-lg"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg text-base font-semibold"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};