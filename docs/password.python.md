# `password` Submodule <a name="`password` Submodule" id="@cdktf/provider-random.password"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Password <a name="Password" id="@cdktf/provider-random.password.Password"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.password.Password.Initializer"></a>

```python
from cdktf_cdktf_provider_random import password

password.Password(
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
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.length">length</a></code> | <code>typing.Union[int, float]</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.lower">lower</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minLower">min_lower</a></code> | <code>typing.Union[int, float]</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minNumeric">min_numeric</a></code> | <code>typing.Union[int, float]</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minSpecial">min_special</a></code> | <code>typing.Union[int, float]</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minUpper">min_upper</a></code> | <code>typing.Union[int, float]</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.number">number</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.numeric">numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.overrideSpecial">override_special</a></code> | <code>str</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.special">special</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.upper">upper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.password.Password.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.Password.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.Password.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.password.Password.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.password.Password.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.Password.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.Password.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.Password.Initializer.parameter.length"></a>

- *Type:* typing.Union[int, float]

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#length Password#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.password.Password.Initializer.parameter.keepers"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#keepers Password#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.password.Password.Initializer.parameter.lower"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#lower Password#lower}

---

##### `min_lower`<sup>Optional</sup> <a name="min_lower" id="@cdktf/provider-random.password.Password.Initializer.parameter.minLower"></a>

- *Type:* typing.Union[int, float]

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_lower Password#min_lower}

---

##### `min_numeric`<sup>Optional</sup> <a name="min_numeric" id="@cdktf/provider-random.password.Password.Initializer.parameter.minNumeric"></a>

- *Type:* typing.Union[int, float]

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_numeric Password#min_numeric}

---

##### `min_special`<sup>Optional</sup> <a name="min_special" id="@cdktf/provider-random.password.Password.Initializer.parameter.minSpecial"></a>

- *Type:* typing.Union[int, float]

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_special Password#min_special}

---

##### `min_upper`<sup>Optional</sup> <a name="min_upper" id="@cdktf/provider-random.password.Password.Initializer.parameter.minUpper"></a>

- *Type:* typing.Union[int, float]

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_upper Password#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.password.Password.Initializer.parameter.number"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#number Password#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.password.Password.Initializer.parameter.numeric"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#numeric Password#numeric}

---

##### `override_special`<sup>Optional</sup> <a name="override_special" id="@cdktf/provider-random.password.Password.Initializer.parameter.overrideSpecial"></a>

- *Type:* str

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#override_special Password#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.password.Password.Initializer.parameter.special"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#special Password#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.password.Password.Initializer.parameter.upper"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#upper Password#upper}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.password.Password.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.password.Password.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.password.Password.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-random.password.Password.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-random.password.Password.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-random.password.Password.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-random.password.Password.resetKeepers">reset_keepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetLower">reset_lower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinLower">reset_min_lower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinNumeric">reset_min_numeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinSpecial">reset_min_special</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinUpper">reset_min_upper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetNumber">reset_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetNumeric">reset_numeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetOverrideSpecial">reset_override_special</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetSpecial">reset_special</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetUpper">reset_upper</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-random.password.Password.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-random.password.Password.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.password.Password.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.password.Password.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-random.password.Password.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-random.password.Password.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-random.password.Password.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-random.password.Password.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-random.password.Password.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-random.password.Password.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-random.password.Password.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-random.password.Password.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-random.password.Password.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-random.password.Password.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-random.password.Password.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-random.password.Password.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-random.password.Password.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-random.password.Password.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-random.password.Password.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-random.password.Password.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-random.password.Password.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_keepers` <a name="reset_keepers" id="@cdktf/provider-random.password.Password.resetKeepers"></a>

```python
def reset_keepers() -> None
```

##### `reset_lower` <a name="reset_lower" id="@cdktf/provider-random.password.Password.resetLower"></a>

```python
def reset_lower() -> None
```

##### `reset_min_lower` <a name="reset_min_lower" id="@cdktf/provider-random.password.Password.resetMinLower"></a>

```python
def reset_min_lower() -> None
```

##### `reset_min_numeric` <a name="reset_min_numeric" id="@cdktf/provider-random.password.Password.resetMinNumeric"></a>

```python
def reset_min_numeric() -> None
```

##### `reset_min_special` <a name="reset_min_special" id="@cdktf/provider-random.password.Password.resetMinSpecial"></a>

```python
def reset_min_special() -> None
```

##### `reset_min_upper` <a name="reset_min_upper" id="@cdktf/provider-random.password.Password.resetMinUpper"></a>

```python
def reset_min_upper() -> None
```

##### `reset_number` <a name="reset_number" id="@cdktf/provider-random.password.Password.resetNumber"></a>

```python
def reset_number() -> None
```

##### `reset_numeric` <a name="reset_numeric" id="@cdktf/provider-random.password.Password.resetNumeric"></a>

```python
def reset_numeric() -> None
```

##### `reset_override_special` <a name="reset_override_special" id="@cdktf/provider-random.password.Password.resetOverrideSpecial"></a>

```python
def reset_override_special() -> None
```

##### `reset_special` <a name="reset_special" id="@cdktf/provider-random.password.Password.resetSpecial"></a>

```python
def reset_special() -> None
```

##### `reset_upper` <a name="reset_upper" id="@cdktf/provider-random.password.Password.resetUpper"></a>

```python
def reset_upper() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-random.password.Password.isConstruct"></a>

```python
from cdktf_cdktf_provider_random import password

password.Password.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-random.password.Password.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_random import password

password.Password.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-random.password.Password.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_random import password

password.Password.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-random.password.Password.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_random import password

password.Password.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Password to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Password that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Password to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.password.Password.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.bcryptHash">bcrypt_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepersInput">keepers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lowerInput">lower_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLowerInput">min_lower_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumericInput">min_numeric_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecialInput">min_special_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpperInput">min_upper_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numberInput">number_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numericInput">numeric_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecialInput">override_special_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.specialInput">special_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upperInput">upper_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lower">lower</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLower">min_lower</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumeric">min_numeric</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecial">min_special</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpper">min_upper</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.number">number</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numeric">numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecial">override_special</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.special">special</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upper">upper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.password.Password.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-random.password.Password.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.password.Password.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-random.password.Password.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-random.password.Password.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-random.password.Password.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.Password.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.Password.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.password.Password.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.password.Password.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.Password.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.Password.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bcrypt_hash`<sup>Required</sup> <a name="bcrypt_hash" id="@cdktf/provider-random.password.Password.property.bcryptHash"></a>

```python
bcrypt_hash: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.password.Password.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `keepers_input`<sup>Optional</sup> <a name="keepers_input" id="@cdktf/provider-random.password.Password.property.keepersInput"></a>

```python
keepers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="@cdktf/provider-random.password.Password.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lower_input`<sup>Optional</sup> <a name="lower_input" id="@cdktf/provider-random.password.Password.property.lowerInput"></a>

```python
lower_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_lower_input`<sup>Optional</sup> <a name="min_lower_input" id="@cdktf/provider-random.password.Password.property.minLowerInput"></a>

```python
min_lower_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numeric_input`<sup>Optional</sup> <a name="min_numeric_input" id="@cdktf/provider-random.password.Password.property.minNumericInput"></a>

```python
min_numeric_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special_input`<sup>Optional</sup> <a name="min_special_input" id="@cdktf/provider-random.password.Password.property.minSpecialInput"></a>

```python
min_special_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper_input`<sup>Optional</sup> <a name="min_upper_input" id="@cdktf/provider-random.password.Password.property.minUpperInput"></a>

```python
min_upper_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-random.password.Password.property.numberInput"></a>

```python
number_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `numeric_input`<sup>Optional</sup> <a name="numeric_input" id="@cdktf/provider-random.password.Password.property.numericInput"></a>

```python
numeric_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_special_input`<sup>Optional</sup> <a name="override_special_input" id="@cdktf/provider-random.password.Password.property.overrideSpecialInput"></a>

```python
override_special_input: str
```

- *Type:* str

---

##### `special_input`<sup>Optional</sup> <a name="special_input" id="@cdktf/provider-random.password.Password.property.specialInput"></a>

```python
special_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upper_input`<sup>Optional</sup> <a name="upper_input" id="@cdktf/provider-random.password.Password.property.upperInput"></a>

```python
upper_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.password.Password.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.Password.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktf/provider-random.password.Password.property.lower"></a>

```python
lower: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_lower`<sup>Required</sup> <a name="min_lower" id="@cdktf/provider-random.password.Password.property.minLower"></a>

```python
min_lower: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numeric`<sup>Required</sup> <a name="min_numeric" id="@cdktf/provider-random.password.Password.property.minNumeric"></a>

```python
min_numeric: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special`<sup>Required</sup> <a name="min_special" id="@cdktf/provider-random.password.Password.property.minSpecial"></a>

```python
min_special: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper`<sup>Required</sup> <a name="min_upper" id="@cdktf/provider-random.password.Password.property.minUpper"></a>

```python
min_upper: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-random.password.Password.property.number"></a>

```python
number: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktf/provider-random.password.Password.property.numeric"></a>

```python
numeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_special`<sup>Required</sup> <a name="override_special" id="@cdktf/provider-random.password.Password.property.overrideSpecial"></a>

```python
override_special: str
```

- *Type:* str

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktf/provider-random.password.Password.property.special"></a>

```python
special: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktf/provider-random.password.Password.property.upper"></a>

```python
upper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.password.Password.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordConfig <a name="PasswordConfig" id="@cdktf/provider-random.password.PasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.password.PasswordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_random import password

password.PasswordConfig(
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
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.length">length</a></code> | <code>typing.Union[int, float]</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lower">lower</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minLower">min_lower</a></code> | <code>typing.Union[int, float]</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minNumeric">min_numeric</a></code> | <code>typing.Union[int, float]</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minSpecial">min_special</a></code> | <code>typing.Union[int, float]</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minUpper">min_upper</a></code> | <code>typing.Union[int, float]</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.number">number</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.numeric">numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial">override_special</a></code> | <code>str</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.special">special</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.upper">upper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.PasswordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.PasswordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-random.password.PasswordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-random.password.PasswordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.PasswordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.PasswordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.PasswordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.PasswordConfig.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#length Password#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.password.PasswordConfig.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#keepers Password#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.password.PasswordConfig.property.lower"></a>

```python
lower: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#lower Password#lower}

---

##### `min_lower`<sup>Optional</sup> <a name="min_lower" id="@cdktf/provider-random.password.PasswordConfig.property.minLower"></a>

```python
min_lower: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_lower Password#min_lower}

---

##### `min_numeric`<sup>Optional</sup> <a name="min_numeric" id="@cdktf/provider-random.password.PasswordConfig.property.minNumeric"></a>

```python
min_numeric: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_numeric Password#min_numeric}

---

##### `min_special`<sup>Optional</sup> <a name="min_special" id="@cdktf/provider-random.password.PasswordConfig.property.minSpecial"></a>

```python
min_special: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_special Password#min_special}

---

##### `min_upper`<sup>Optional</sup> <a name="min_upper" id="@cdktf/provider-random.password.PasswordConfig.property.minUpper"></a>

```python
min_upper: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#min_upper Password#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.password.PasswordConfig.property.number"></a>

```python
number: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#number Password#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.password.PasswordConfig.property.numeric"></a>

```python
numeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#numeric Password#numeric}

---

##### `override_special`<sup>Optional</sup> <a name="override_special" id="@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial"></a>

```python
override_special: str
```

- *Type:* str

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#override_special Password#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.password.PasswordConfig.property.special"></a>

```python
special: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#special Password#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.password.PasswordConfig.property.upper"></a>

```python
upper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/password#upper Password#upper}

---



