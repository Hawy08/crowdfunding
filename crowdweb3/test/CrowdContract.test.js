const { expect } = require('chai');
const { ethers, network } = require('hardhat');

describe('CrowdContract', function () {
  let contract;
  let owner;
  let other;

  beforeEach(async () => {
    [owner, other] = await ethers.getSigners();
    const CrowdContract = await ethers.getContractFactory('CrowdContract');
    contract = await CrowdContract.deploy();
    await contract.waitForDeployment();
  });

  it('should create a valid campaign', async () => {
    const id = 0;
    const title = 'Test Campaign';
    const description = 'This is a test';
    const target = ethers.parseEther('1');
    const deadline = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
    const image = 'https://example.com/image.jpg';

    await contract.createCampaign(
      id,
      title,
      description,
      target,
      deadline,
      image
    );

    const campaign = await contract.campaigns(id);
    expect(campaign.owner).to.equal(owner.address);
    expect(campaign.title).to.equal(title);
    expect(campaign.targetAmount).to.equal(target);
  });

  it('should create a valid campaign', async function () {
    const id = 1;
    const deadline = Math.floor(Date.now() / 1000) + 3600;

    await expect(
      contract.createCampaign(
        id,
        'Valid Campaign',
        'This is a valid campaign',
        ethers.parseEther('1'),
        deadline,
        'https://image.url'
      )
    ).to.not.be.reverted;
  });

  it('should accept donations to a campaign', async () => {
    const id = 1;
    const target = ethers.parseEther('2');
    const deadline = Math.floor(Date.now() / 1000) + 3600;

    await contract.createCampaign(
      id,
      'Campaign 1',
      'Description',
      target,
      deadline,
      'image'
    );

    const donationAmount = ethers.parseEther('0.5');
    await contract
      .connect(other)
      .donateToCampaign(id, { value: donationAmount });

    const campaign = await contract.campaigns(id);
    expect(campaign.currentAmount).to.equal(donationAmount);
  });

  it('should not allow donation after deadline', async () => {
    const id = 2;
    const oneHour = 3600;
    const deadline = Math.floor(Date.now() / 1000) + oneHour;

    await contract.createCampaign(
      id,
      'Soon Expiring',
      'This will expire',
      ethers.parseEther('1'),
      deadline,
      'img'
    );

    // ⏩ Fast forward time by 2 hours
    await network.provider.send('evm_increaseTime', [2 * oneHour]);
    await network.provider.send('evm_mine'); // Mine the next block

    // ❌ Attempt to donate after deadline
    await expect(
      contract.donateToCampaign(id, { value: ethers.parseEther('0.1') })
    ).to.be.revertedWith('Campaign has ended');
  });

  it('should not allow donations that exceed the target amount', async () => {
    const id = 3;
    const targetAmount = ethers.parseEther('1');
    const latestBlock = await ethers.provider.getBlock('latest');
    const deadline = latestBlock.timestamp + 3600;

    await contract.createCampaign(
      id,
      'Test Campaign',
      'Testing over-donation',
      targetAmount,
      deadline,
      'https://example.com/image.jpg'
    );

    await contract.donateToCampaign(id, {
      value: ethers.parseEther('0.9'),
    });

    await expect(
      contract.donateToCampaign(id, {
        value: ethers.parseEther('0.2'),
      })
    ).to.be.revertedWith('Donation exceeds target amount');
  });
});
