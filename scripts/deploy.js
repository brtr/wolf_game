const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("WOOL");
  const nft = await NFT.deploy();   //CONTRACT INFO
  await nft.deployed();

  console.log("Contract deployed to:", nft.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
