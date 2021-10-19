const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "hashicorp/random@~> 3.1",
  cdktfVersion: '^0.7',
  constructsVersion: "^10.0.0",
  minNodeVersion: "12.19.0"
});

project.synth();
