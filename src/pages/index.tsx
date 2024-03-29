import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { CTAContainer, HomeContainer } from "@/styles/home";
import { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useStoreContext } from "@/utils/Store";

export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { programClient } = useStoreContext();

  return (
    <HomeContainer>
      <CTAContainer>{programClient.programId.toString()}</CTAContainer>
    </HomeContainer>
  );
}
