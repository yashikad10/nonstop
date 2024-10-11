"use client";
import { ConnectMultiButton, useWalletAddress } from "bitcoin-wallet-adapter";
import InnerMenu from "./InnerMenu";
import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { setBtcPrice, setUser } from "@/stores/reducers/generalReducer";
import { getBTCPriceInDollars } from "@/utils";

const WalletButton = () => {
  const walletDetails = useWalletAddress();
  const dispatch = useDispatch();

  const putBTCPriceInRedux = useCallback(async () => {
    try {
      const btc = await getBTCPriceInDollars();
      console.log(btc, "btc inside");
      dispatch(setBtcPrice(btc));
    } catch (error) {
      console.error("Failed to fetch BTC price", error);
    }
  }, [dispatch]);

  useEffect(() => {
    putBTCPriceInRedux();
  }, [putBTCPriceInRedux]);

  const putUserDataInRedux = useCallback(() => {
    console.log(walletDetails, "wallet-details changed");
    if (walletDetails) {
      console.log("setting user as: ", walletDetails.cardinal_address);
      dispatch(setUser(walletDetails));
    } else {
      dispatch(setUser(null));
    }
  }, [walletDetails, dispatch]);

  useEffect(() => {
    putUserDataInRedux();
  }, [walletDetails, putUserDataInRedux]);

  useEffect(() => {
    const getData = async () => {
      try {
        const body = {
          wallet: walletDetails?.wallet,
          cardinal_address: walletDetails?.cardinal_address,
          ordinal_address: walletDetails?.ordinal_address,
          cardinal_pubkey: walletDetails?.cardinal_pubkey,
        };

        console.log(body, "-------------body--------------");

        if (
          walletDetails &&
          walletDetails.connected &&
          walletDetails.ordinal_address
        ) {
          const ordinal_address = walletDetails?.ordinal_address;
          // const response = await getRunes(walletDetails);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };

    if (walletDetails) {
      getData();
    }
  }, [walletDetails]);

  return (
    <div className="mt-2">
      <ConnectMultiButton
          modalContentClass="bg-primary border rounded-xl border-accent overflow-hidden relative lg:p-16 md:p-12 p-6"
          buttonClassname={`text-white [text-wrap:nowrap] text-sm font-bold rounded flex items-center px-4 h-[40px] py-1 ${
            walletDetails
              ? '  font-bold bg-accent_dark '
              : ' font-light bg-accent'
          }`}
          headingClass="text-center text-white pt-2 pb-2 text-3xl capitalize font-bold mb-4"
          walletItemClass="w-full bg-accent_dark my-3 hover:border-accent border border-transparent cursor-pointer"
          walletLabelClass="text-lg text-white capitalize tracking-wider"
          walletImageClass="w-[30px]"
          //@ts-ignore
          InnerMenu={InnerMenu}
          icon="https://www.galactickingdom.io/Logo/Big.png"
          iconClass="w-auto pb-8"
          // balance={balanceData?.balance}
        />
    </div>
  );
};

export default WalletButton;
