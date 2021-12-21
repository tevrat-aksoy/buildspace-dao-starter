import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xC80A5051F52b271743E63AFC84b5C16CCc99F9bF"
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 1000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
