const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  terraformProvider: "hashicorp/random@~> 3.1",
  cdktfVersion: "^0.8",
  constructsVersion: "^10.0.25",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.46.0",
});

project.synth();
