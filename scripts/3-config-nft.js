import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC80A5051F52b271743E63AFC84b5C16CCc99F9bF"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Chemex",
        description:
          "This NFT will give you access to CoffeDAO and wonderful coffees!",
        image: readFileSync("scripts/assets/chemex.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
