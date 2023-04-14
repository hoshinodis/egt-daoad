const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.getContractFactory("DaoStaking");
  const contract = await token.deploy(
    "0xCEdc57A73EFC5a9B599340f348D3Ccc44e225018",
    "0x01385B66cfc7E4B0657812cED9023D5692608956",
    "0xE83aea3CcE8d3C479CEebbF0e10DD2F39F10F0d0",
    "0x2C5400E6dCa8e2254f16bDa9409AafD19E8be466"
  );

  console.log("Contract address:", contract.address);
  //0x439e963F9149413fBB6a8F9594C5dEDE2f25cD2b
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
