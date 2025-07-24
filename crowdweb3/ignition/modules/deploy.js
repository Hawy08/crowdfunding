const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('CrowdContractModule', (m) => {
  const crowdContract = m.contract('CrowdContract', []);

  return { crowdContract };
});
