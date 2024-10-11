"use client";
import { WalletProvider } from "bitcoin-wallet-adapter";
import { Provider } from "react-redux";
import { store } from "@/stores";
import Header from "@/components/Layout/Header";

export default function CustomProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <WalletProvider
        customAuthOptions={{
          network: "testnet",
          appDetails: {
            name: "Galactic Kingdom",
            icon: "https://www.galactickingdom.io/Logo/Big.png",
          },
        }}
      >
        {/* <Header /> */}
        {children}
      </WalletProvider>
    </Provider>
  );
}
