import { WagmiConfig } from "wagmi"
import Body from "~hook/index";
import { Profile } from "~features/profile"
import { client } from "~features/wagmi-client"
import * as React from "react";

const IndexPopup = () => {
  return (
    <WagmiConfig client={client}>
      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column"
        }}>
  <Body />
      </div>
    </WagmiConfig>
  )
}

export default IndexPopup
