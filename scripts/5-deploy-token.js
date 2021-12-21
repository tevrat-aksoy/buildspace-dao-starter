import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x280340E4dA93bB7C7349aC63c5efc3F8866657a2");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "CoffeeDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "CHE",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();