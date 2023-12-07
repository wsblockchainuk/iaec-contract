// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const IAECCOIN = await ethers.getContractFactory('IAEC');
    console.log('Deploying IAEC...');
    const iaec = await IAECCOIN.deploy();
    await iaec.deployed();
    console.log('Box deployed to:', iaec.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });