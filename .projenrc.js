const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "hashicorp/random@~> 3.1"
});

project.synth();
