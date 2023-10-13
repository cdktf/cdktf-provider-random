# `random_shuffle`

Refer to the Terraform Registory for docs: [`random_shuffle`](https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle).

# `shuffle` Submodule <a name="`shuffle` Submodule" id="@cdktf/provider-random.shuffle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Shuffle <a name="Shuffle" id="@cdktf/provider-random.shuffle.Shuffle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle random_shuffle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.shuffle.Shuffle.Initializer"></a>

```python
from cdktf_cdktf_provider_random import shuffle

shuffle.Shuffle(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input: typing.List[str],
  keepers: typing.Mapping[str] = None,
  result_count: typing.Union[int, float] = None,
  seed: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.input">input</a></code> | <code>typing.List[str]</code> | The list of strings to shuffle. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.resultCount">result_count</a></code> | <code>typing.Union[int, float]</code> | The number of results to return. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.seed">seed</a></code> | <code>str</code> | Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.input"></a>

- *Type:* typing.List[str]

The list of strings to shuffle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#input Shuffle#input}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.keepers"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#keepers Shuffle#keepers}

---

##### `result_count`<sup>Optional</sup> <a name="result_count" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.resultCount"></a>

- *Type:* typing.Union[int, float]

The number of results to return.

Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#result_count Shuffle#result_count}

---

##### `seed`<sup>Optional</sup> <a name="seed" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.seed"></a>

- *Type:* str

Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.

**Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#seed Shuffle#seed}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetKeepers">reset_keepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetResultCount">reset_result_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetSeed">reset_seed</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-random.shuffle.Shuffle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-random.shuffle.Shuffle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-random.shuffle.Shuffle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-random.shuffle.Shuffle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_keepers` <a name="reset_keepers" id="@cdktf/provider-random.shuffle.Shuffle.resetKeepers"></a>

```python
def reset_keepers() -> None
```

##### `reset_result_count` <a name="reset_result_count" id="@cdktf/provider-random.shuffle.Shuffle.resetResultCount"></a>

```python
def reset_result_count() -> None
```

##### `reset_seed` <a name="reset_seed" id="@cdktf/provider-random.shuffle.Shuffle.resetSeed"></a>

```python
def reset_seed() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-random.shuffle.Shuffle.isConstruct"></a>

```python
from cdktf_cdktf_provider_random import shuffle

shuffle.Shuffle.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.shuffle.Shuffle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_random import shuffle

shuffle.Shuffle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_random import shuffle

shuffle.Shuffle.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.result">result</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.inputInput">input_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepersInput">keepers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput">result_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seedInput">seed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.input">input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCount">result_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seed">seed</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.shuffle.Shuffle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.shuffle.Shuffle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.shuffle.Shuffle.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.shuffle.Shuffle.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.shuffle.Shuffle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.shuffle.Shuffle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.shuffle.Shuffle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.Shuffle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.shuffle.Shuffle.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.shuffle.Shuffle.property.result"></a>

```python
result: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-random.shuffle.Shuffle.property.inputInput"></a>

```python
input_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keepers_input`<sup>Optional</sup> <a name="keepers_input" id="@cdktf/provider-random.shuffle.Shuffle.property.keepersInput"></a>

```python
keepers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `result_count_input`<sup>Optional</sup> <a name="result_count_input" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput"></a>

```python
result_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seed_input`<sup>Optional</sup> <a name="seed_input" id="@cdktf/provider-random.shuffle.Shuffle.property.seedInput"></a>

```python
seed_input: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-random.shuffle.Shuffle.property.input"></a>

```python
input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.shuffle.Shuffle.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `result_count`<sup>Required</sup> <a name="result_count" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCount"></a>

```python
result_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seed`<sup>Required</sup> <a name="seed" id="@cdktf/provider-random.shuffle.Shuffle.property.seed"></a>

```python
seed: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ShuffleConfig <a name="ShuffleConfig" id="@cdktf/provider-random.shuffle.ShuffleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.shuffle.ShuffleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_random import shuffle

shuffle.ShuffleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input: typing.List[str],
  keepers: typing.Mapping[str] = None,
  result_count: typing.Union[int, float] = None,
  seed: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.input">input</a></code> | <code>typing.List[str]</code> | The list of strings to shuffle. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount">result_count</a></code> | <code>typing.Union[int, float]</code> | The number of results to return. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.seed">seed</a></code> | <code>str</code> | Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.input"></a>

```python
input: typing.List[str]
```

- *Type:* typing.List[str]

The list of strings to shuffle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#input Shuffle#input}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#keepers Shuffle#keepers}

---

##### `result_count`<sup>Optional</sup> <a name="result_count" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount"></a>

```python
result_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of results to return.

Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#result_count Shuffle#result_count}

---

##### `seed`<sup>Optional</sup> <a name="seed" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.seed"></a>

```python
seed: str
```

- *Type:* str

Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.

**Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#seed Shuffle#seed}

---



