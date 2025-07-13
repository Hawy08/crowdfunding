const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('CrowdContractModule', (m) => {
  const crowdContract = m.contract('CrowdContract', []); // pass constructor args if needed

  return { crowdContract };
});
