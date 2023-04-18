# `random_string`

Refer to the Terraform Registory for docs: [`random_string`](https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string).

# `stringResource` Submodule <a name="`stringResource` Submodule" id="@cdktf/provider-random.stringResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StringResource <a name="StringResource" id="@cdktf/provider-random.stringResource.StringResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string random_string}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.stringResource.StringResource.Initializer"></a>

```python
from cdktf_cdktf_provider_random import string_resource

stringResource.StringResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  length: typing.Union[int, float],
  keepers: typing.Mapping[str] = None,
  lower: typing.Union[bool, IResolvable] = None,
  min_lower: typing.Union[int, float] = None,
  min_numeric: typing.Union[int, float] = None,
  min_special: typing.Union[int, float] = None,
  min_upper: typing.Union[int, float] = None,
  number: typing.Union[bool, IResolvable] = None,
  numeric: typing.Union[bool, IResolvable] = None,
  override_special: str = None,
  special: typing.Union[bool, IResolvable] = None,
  upper: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.length">length</a></code> | <code>typing.Union[int, float]</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lower">lower</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minLower">min_lower</a></code> | <code>typing.Union[int, float]</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minNumeric">min_numeric</a></code> | <code>typing.Union[int, float]</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minSpecial">min_special</a></code> | <code>typing.Union[int, float]</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minUpper">min_upper</a></code> | <code>typing.Union[int, float]</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.number">number</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.numeric">numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.overrideSpecial">override_special</a></code> | <code>str</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.special">special</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.upper">upper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.length"></a>

- *Type:* typing.Union[int, float]

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.keepers"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lower"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#lower StringResource#lower}

---

##### `min_lower`<sup>Optional</sup> <a name="min_lower" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minLower"></a>

- *Type:* typing.Union[int, float]

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_lower StringResource#min_lower}

---

##### `min_numeric`<sup>Optional</sup> <a name="min_numeric" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minNumeric"></a>

- *Type:* typing.Union[int, float]

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `min_special`<sup>Optional</sup> <a name="min_special" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minSpecial"></a>

- *Type:* typing.Union[int, float]

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_special StringResource#min_special}

---

##### `min_upper`<sup>Optional</sup> <a name="min_upper" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minUpper"></a>

- *Type:* typing.Union[int, float]

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.number"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#number StringResource#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.numeric"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#numeric StringResource#numeric}

---

##### `override_special`<sup>Optional</sup> <a name="override_special" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.overrideSpecial"></a>

- *Type:* str

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.special"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.upper"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#upper StringResource#upper}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetKeepers">reset_keepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetLower">reset_lower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinLower">reset_min_lower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinNumeric">reset_min_numeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinSpecial">reset_min_special</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinUpper">reset_min_upper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetNumber">reset_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetNumeric">reset_numeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetOverrideSpecial">reset_override_special</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetSpecial">reset_special</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetUpper">reset_upper</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-random.stringResource.StringResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-random.stringResource.StringResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-random.stringResource.StringResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-random.stringResource.StringResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_keepers` <a name="reset_keepers" id="@cdktf/provider-random.stringResource.StringResource.resetKeepers"></a>

```python
def reset_keepers() -> None
```

##### `reset_lower` <a name="reset_lower" id="@cdktf/provider-random.stringResource.StringResource.resetLower"></a>

```python
def reset_lower() -> None
```

##### `reset_min_lower` <a name="reset_min_lower" id="@cdktf/provider-random.stringResource.StringResource.resetMinLower"></a>

```python
def reset_min_lower() -> None
```

##### `reset_min_numeric` <a name="reset_min_numeric" id="@cdktf/provider-random.stringResource.StringResource.resetMinNumeric"></a>

```python
def reset_min_numeric() -> None
```

##### `reset_min_special` <a name="reset_min_special" id="@cdktf/provider-random.stringResource.StringResource.resetMinSpecial"></a>

```python
def reset_min_special() -> None
```

##### `reset_min_upper` <a name="reset_min_upper" id="@cdktf/provider-random.stringResource.StringResource.resetMinUpper"></a>

```python
def reset_min_upper() -> None
```

##### `reset_number` <a name="reset_number" id="@cdktf/provider-random.stringResource.StringResource.resetNumber"></a>

```python
def reset_number() -> None
```

##### `reset_numeric` <a name="reset_numeric" id="@cdktf/provider-random.stringResource.StringResource.resetNumeric"></a>

```python
def reset_numeric() -> None
```

##### `reset_override_special` <a name="reset_override_special" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideSpecial"></a>

```python
def reset_override_special() -> None
```

##### `reset_special` <a name="reset_special" id="@cdktf/provider-random.stringResource.StringResource.resetSpecial"></a>

```python
def reset_special() -> None
```

##### `reset_upper` <a name="reset_upper" id="@cdktf/provider-random.stringResource.StringResource.resetUpper"></a>

```python
def reset_upper() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-random.stringResource.StringResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_random import string_resource

stringResource.StringResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.stringResource.StringResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_random import string_resource

stringResource.StringResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_random import string_resource

stringResource.StringResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepersInput">keepers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lowerInput">lower_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLowerInput">min_lower_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumericInput">min_numeric_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput">min_special_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpperInput">min_upper_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numberInput">number_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numericInput">numeric_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput">override_special_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.specialInput">special_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upperInput">upper_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lower">lower</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLower">min_lower</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumeric">min_numeric</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecial">min_special</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpper">min_upper</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.number">number</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numeric">numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial">override_special</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.special">special</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upper">upper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.stringResource.StringResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-random.stringResource.StringResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.stringResource.StringResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.stringResource.StringResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.stringResource.StringResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.stringResource.StringResource.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `keepers_input`<sup>Optional</sup> <a name="keepers_input" id="@cdktf/provider-random.stringResource.StringResource.property.keepersInput"></a>

```python
keepers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="@cdktf/provider-random.stringResource.StringResource.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lower_input`<sup>Optional</sup> <a name="lower_input" id="@cdktf/provider-random.stringResource.StringResource.property.lowerInput"></a>

```python
lower_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_lower_input`<sup>Optional</sup> <a name="min_lower_input" id="@cdktf/provider-random.stringResource.StringResource.property.minLowerInput"></a>

```python
min_lower_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numeric_input`<sup>Optional</sup> <a name="min_numeric_input" id="@cdktf/provider-random.stringResource.StringResource.property.minNumericInput"></a>

```python
min_numeric_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special_input`<sup>Optional</sup> <a name="min_special_input" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput"></a>

```python
min_special_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper_input`<sup>Optional</sup> <a name="min_upper_input" id="@cdktf/provider-random.stringResource.StringResource.property.minUpperInput"></a>

```python
min_upper_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-random.stringResource.StringResource.property.numberInput"></a>

```python
number_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `numeric_input`<sup>Optional</sup> <a name="numeric_input" id="@cdktf/provider-random.stringResource.StringResource.property.numericInput"></a>

```python
numeric_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_special_input`<sup>Optional</sup> <a name="override_special_input" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput"></a>

```python
override_special_input: str
```

- *Type:* str

---

##### `special_input`<sup>Optional</sup> <a name="special_input" id="@cdktf/provider-random.stringResource.StringResource.property.specialInput"></a>

```python
special_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upper_input`<sup>Optional</sup> <a name="upper_input" id="@cdktf/provider-random.stringResource.StringResource.property.upperInput"></a>

```python
upper_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResource.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResource.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResource.property.lower"></a>

```python
lower: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_lower`<sup>Required</sup> <a name="min_lower" id="@cdktf/provider-random.stringResource.StringResource.property.minLower"></a>

```python
min_lower: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numeric`<sup>Required</sup> <a name="min_numeric" id="@cdktf/provider-random.stringResource.StringResource.property.minNumeric"></a>

```python
min_numeric: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special`<sup>Required</sup> <a name="min_special" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecial"></a>

```python
min_special: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper`<sup>Required</sup> <a name="min_upper" id="@cdktf/provider-random.stringResource.StringResource.property.minUpper"></a>

```python
min_upper: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResource.property.number"></a>

```python
number: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResource.property.numeric"></a>

```python
numeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_special`<sup>Required</sup> <a name="override_special" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial"></a>

```python
override_special: str
```

- *Type:* str

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResource.property.special"></a>

```python
special: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResource.property.upper"></a>

```python
upper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.stringResource.StringResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StringResourceConfig <a name="StringResourceConfig" id="@cdktf/provider-random.stringResource.StringResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.stringResource.StringResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_random import string_resource

stringResource.StringResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  length: typing.Union[int, float],
  keepers: typing.Mapping[str] = None,
  lower: typing.Union[bool, IResolvable] = None,
  min_lower: typing.Union[int, float] = None,
  min_numeric: typing.Union[int, float] = None,
  min_special: typing.Union[int, float] = None,
  min_upper: typing.Union[int, float] = None,
  number: typing.Union[bool, IResolvable] = None,
  numeric: typing.Union[bool, IResolvable] = None,
  override_special: str = None,
  special: typing.Union[bool, IResolvable] = None,
  upper: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.length">length</a></code> | <code>typing.Union[int, float]</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lower">lower</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower">min_lower</a></code> | <code>typing.Union[int, float]</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric">min_numeric</a></code> | <code>typing.Union[int, float]</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial">min_special</a></code> | <code>typing.Union[int, float]</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper">min_upper</a></code> | <code>typing.Union[int, float]</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.number">number</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric">numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial">override_special</a></code> | <code>str</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.special">special</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.upper">upper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lower"></a>

```python
lower: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#lower StringResource#lower}

---

##### `min_lower`<sup>Optional</sup> <a name="min_lower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower"></a>

```python
min_lower: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_lower StringResource#min_lower}

---

##### `min_numeric`<sup>Optional</sup> <a name="min_numeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric"></a>

```python
min_numeric: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `min_special`<sup>Optional</sup> <a name="min_special" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial"></a>

```python
min_special: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_special StringResource#min_special}

---

##### `min_upper`<sup>Optional</sup> <a name="min_upper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper"></a>

```python
min_upper: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.number"></a>

```python
number: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#number StringResource#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric"></a>

```python
numeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#numeric StringResource#numeric}

---

##### `override_special`<sup>Optional</sup> <a name="override_special" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial"></a>

```python
override_special: str
```

- *Type:* str

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.special"></a>

```python
special: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.upper"></a>

```python
upper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#upper StringResource#upper}

---



