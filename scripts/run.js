const main = async () => {
    const [owner, randomPerson1, randomPerson2] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let wavers;
    let waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson1).wave();
    waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson2).wave();
    waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson2).wave();
    waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson1).wave();
    waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
    wavers = await waveContract.getAllWavers();
    console.log("All Wavers:", wavers);

    await waveContract.getWaversMap();
}
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();