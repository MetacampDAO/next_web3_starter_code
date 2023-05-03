import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  CTAButton,
  CTAContainer,
  CTAInfoContainer,
  HomeContainer,
  InfoDataContainer,
  MintInfoContainer,
  MintInfoData,
  MintInfoLeftContainer,
  MintInfosContainer,
  MintInfoTitle,
} from "@/styles/home";
import { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useStoreContext } from "@/utils/Store";

export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { programClient } = useStoreContext();

  return (
    <HomeContainer>
      <CTAContainer>{programClient.provider.programId.toString()}</CTAContainer>
    </HomeContainer>
  );
}
