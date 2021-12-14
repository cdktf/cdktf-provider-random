const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "hashicorp/random@~> 3.1",
  cdktfVersion: '^0.6',
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
});

project.synth();
