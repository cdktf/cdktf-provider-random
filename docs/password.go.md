# `random_password`

Refer to the Terraform Registory for docs: [`random_password`](https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password).

# `password` Submodule <a name="`password` Submodule" id="@cdktf/provider-random.password"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Password <a name="Password" id="@cdktf/provider-random.password.Password"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.password.Password.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v9/password"

password.NewPassword(scope Construct, id *string, config PasswordConfig) Password
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-random.password.PasswordConfig">PasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.password.Password.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-random.password.Password.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-random.password.PasswordConfig">PasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.password.Password.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.password.Password.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.password.Password.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetKeepers">ResetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetLower">ResetLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinLower">ResetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinNumeric">ResetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinSpecial">ResetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinUpper">ResetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetNumeric">ResetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetOverrideSpecial">ResetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetSpecial">ResetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetUpper">ResetUpper</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-random.password.Password.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-random.password.Password.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.password.Password.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.password.Password.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-random.password.Password.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-random.password.Password.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-random.password.Password.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-random.password.Password.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktf/provider-random.password.Password.resetKeepers"></a>

```go
func ResetKeepers()
```

##### `ResetLower` <a name="ResetLower" id="@cdktf/provider-random.password.Password.resetLower"></a>

```go
func ResetLower()
```

##### `ResetMinLower` <a name="ResetMinLower" id="@cdktf/provider-random.password.Password.resetMinLower"></a>

```go
func ResetMinLower()
```

##### `ResetMinNumeric` <a name="ResetMinNumeric" id="@cdktf/provider-random.password.Password.resetMinNumeric"></a>

```go
func ResetMinNumeric()
```

##### `ResetMinSpecial` <a name="ResetMinSpecial" id="@cdktf/provider-random.password.Password.resetMinSpecial"></a>

```go
func ResetMinSpecial()
```

##### `ResetMinUpper` <a name="ResetMinUpper" id="@cdktf/provider-random.password.Password.resetMinUpper"></a>

```go
func ResetMinUpper()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-random.password.Password.resetNumber"></a>

```go
func ResetNumber()
```

##### `ResetNumeric` <a name="ResetNumeric" id="@cdktf/provider-random.password.Password.resetNumeric"></a>

```go
func ResetNumeric()
```

##### `ResetOverrideSpecial` <a name="ResetOverrideSpecial" id="@cdktf/provider-random.password.Password.resetOverrideSpecial"></a>

```go
func ResetOverrideSpecial()
```

##### `ResetSpecial` <a name="ResetSpecial" id="@cdktf/provider-random.password.Password.resetSpecial"></a>

```go
func ResetSpecial()
```

##### `ResetUpper` <a name="ResetUpper" id="@cdktf/provider-random.password.Password.resetUpper"></a>

```go
func ResetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-random.password.Password.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v9/password"

password.Password_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-random.password.Password.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v9/password"

password.Password_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-random.password.Password.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v9/password"

password.Password_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.password.Password.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.bcryptHash">BcryptHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepersInput">KeepersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lowerInput">LowerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLowerInput">MinLowerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumericInput">MinNumericInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecialInput">MinSpecialInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpperInput">MinUpperInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numberInput">NumberInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numericInput">NumericInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecialInput">OverrideSpecialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.specialInput">SpecialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upperInput">UpperInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepers">Keepers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lower">Lower</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLower">MinLower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumeric">MinNumeric</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecial">MinSpecial</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpper">MinUpper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.number">Number</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numeric">Numeric</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecial">OverrideSpecial</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.special">Special</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upper">Upper</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-random.password.Password.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-random.password.Password.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-random.password.Password.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-random.password.Password.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-random.password.Password.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-random.password.Password.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.password.Password.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.password.Password.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.password.Password.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.password.Password.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.password.Password.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.password.Password.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.password.Password.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BcryptHash`<sup>Required</sup> <a name="BcryptHash" id="@cdktf/provider-random.password.Password.property.bcryptHash"></a>

```go
func BcryptHash() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.password.Password.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-random.password.Password.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktf/provider-random.password.Password.property.keepersInput"></a>

```go
func KeepersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktf/provider-random.password.Password.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `LowerInput`<sup>Optional</sup> <a name="LowerInput" id="@cdktf/provider-random.password.Password.property.lowerInput"></a>

```go
func LowerInput() interface{}
```

- *Type:* interface{}

---

##### `MinLowerInput`<sup>Optional</sup> <a name="MinLowerInput" id="@cdktf/provider-random.password.Password.property.minLowerInput"></a>

```go
func MinLowerInput() *f64
```

- *Type:* *f64

---

##### `MinNumericInput`<sup>Optional</sup> <a name="MinNumericInput" id="@cdktf/provider-random.password.Password.property.minNumericInput"></a>

```go
func MinNumericInput() *f64
```

- *Type:* *f64

---

##### `MinSpecialInput`<sup>Optional</sup> <a name="MinSpecialInput" id="@cdktf/provider-random.password.Password.property.minSpecialInput"></a>

```go
func MinSpecialInput() *f64
```

- *Type:* *f64

---

##### `MinUpperInput`<sup>Optional</sup> <a name="MinUpperInput" id="@cdktf/provider-random.password.Password.property.minUpperInput"></a>

```go
func MinUpperInput() *f64
```

- *Type:* *f64

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-random.password.Password.property.numberInput"></a>

```go
func NumberInput() interface{}
```

- *Type:* interface{}

---

##### `NumericInput`<sup>Optional</sup> <a name="NumericInput" id="@cdktf/provider-random.password.Password.property.numericInput"></a>

```go
func NumericInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideSpecialInput`<sup>Optional</sup> <a name="OverrideSpecialInput" id="@cdktf/provider-random.password.Password.property.overrideSpecialInput"></a>

```go
func OverrideSpecialInput() *string
```

- *Type:* *string

---

##### `SpecialInput`<sup>Optional</sup> <a name="SpecialInput" id="@cdktf/provider-random.password.Password.property.specialInput"></a>

```go
func SpecialInput() interface{}
```

- *Type:* interface{}

---

##### `UpperInput`<sup>Optional</sup> <a name="UpperInput" id="@cdktf/provider-random.password.Password.property.upperInput"></a>

```go
func UpperInput() interface{}
```

- *Type:* interface{}

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktf/provider-random.password.Password.property.keepers"></a>

```go
func Keepers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-random.password.Password.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-random.password.Password.property.lower"></a>

```go
func Lower() interface{}
```

- *Type:* interface{}

---

##### `MinLower`<sup>Required</sup> <a name="MinLower" id="@cdktf/provider-random.password.Password.property.minLower"></a>

```go
func MinLower() *f64
```

- *Type:* *f64

---

##### `MinNumeric`<sup>Required</sup> <a name="MinNumeric" id="@cdktf/provider-random.password.Password.property.minNumeric"></a>

```go
func MinNumeric() *f64
```

- *Type:* *f64

---

##### `MinSpecial`<sup>Required</sup> <a name="MinSpecial" id="@cdktf/provider-random.password.Password.property.minSpecial"></a>

```go
func MinSpecial() *f64
```

- *Type:* *f64

---

##### `MinUpper`<sup>Required</sup> <a name="MinUpper" id="@cdktf/provider-random.password.Password.property.minUpper"></a>

```go
func MinUpper() *f64
```

- *Type:* *f64

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-random.password.Password.property.number"></a>

```go
func Number() interface{}
```

- *Type:* interface{}

---

##### `Numeric`<sup>Required</sup> <a name="Numeric" id="@cdktf/provider-random.password.Password.property.numeric"></a>

```go
func Numeric() interface{}
```

- *Type:* interface{}

---

##### `OverrideSpecial`<sup>Required</sup> <a name="OverrideSpecial" id="@cdktf/provider-random.password.Password.property.overrideSpecial"></a>

```go
func OverrideSpecial() *string
```

- *Type:* *string

---

##### `Special`<sup>Required</sup> <a name="Special" id="@cdktf/provider-random.password.Password.property.special"></a>

```go
func Special() interface{}
```

- *Type:* interface{}

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-random.password.Password.property.upper"></a>

```go
func Upper() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-random.password.Password.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordConfig <a name="PasswordConfig" id="@cdktf/provider-random.password.PasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.password.PasswordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v9/password"

&password.PasswordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Length: *f64,
	Keepers: *map[string]*string,
	Lower: interface{},
	MinLower: *f64,
	MinNumeric: *f64,
	MinSpecial: *f64,
	MinUpper: *f64,
	Number: interface{},
	Numeric: interface{},
	OverrideSpecial: *string,
	Special: interface{},
	Upper: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.length">Length</a></code> | <code>*f64</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.keepers">Keepers</a></code> | <code>*map[string]*string</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lower">Lower</a></code> | <code>interface{}</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minLower">MinLower</a></code> | <code>*f64</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minNumeric">MinNumeric</a></code> | <code>*f64</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minSpecial">MinSpecial</a></code> | <code>*f64</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minUpper">MinUpper</a></code> | <code>*f64</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.number">Number</a></code> | <code>interface{}</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.numeric">Numeric</a></code> | <code>interface{}</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial">OverrideSpecial</a></code> | <code>*string</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.special">Special</a></code> | <code>interface{}</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.upper">Upper</a></code> | <code>interface{}</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.password.PasswordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.password.PasswordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.password.PasswordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.password.PasswordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.password.PasswordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.password.PasswordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.password.PasswordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-random.password.PasswordConfig.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#length Password#length}

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktf/provider-random.password.PasswordConfig.property.keepers"></a>

```go
Keepers *map[string]*string
```

- *Type:* *map[string]*string

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#keepers Password#keepers}

---

##### `Lower`<sup>Optional</sup> <a name="Lower" id="@cdktf/provider-random.password.PasswordConfig.property.lower"></a>

```go
Lower interface{}
```

- *Type:* interface{}

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#lower Password#lower}

---

##### `MinLower`<sup>Optional</sup> <a name="MinLower" id="@cdktf/provider-random.password.PasswordConfig.property.minLower"></a>

```go
MinLower *f64
```

- *Type:* *f64

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#min_lower Password#min_lower}

---

##### `MinNumeric`<sup>Optional</sup> <a name="MinNumeric" id="@cdktf/provider-random.password.PasswordConfig.property.minNumeric"></a>

```go
MinNumeric *f64
```

- *Type:* *f64

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#min_numeric Password#min_numeric}

---

##### `MinSpecial`<sup>Optional</sup> <a name="MinSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.minSpecial"></a>

```go
MinSpecial *f64
```

- *Type:* *f64

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#min_special Password#min_special}

---

##### `MinUpper`<sup>Optional</sup> <a name="MinUpper" id="@cdktf/provider-random.password.PasswordConfig.property.minUpper"></a>

```go
MinUpper *f64
```

- *Type:* *f64

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#min_upper Password#min_upper}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-random.password.PasswordConfig.property.number"></a>

```go
Number interface{}
```

- *Type:* interface{}

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#number Password#number}

---

##### `Numeric`<sup>Optional</sup> <a name="Numeric" id="@cdktf/provider-random.password.PasswordConfig.property.numeric"></a>

```go
Numeric interface{}
```

- *Type:* interface{}

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#numeric Password#numeric}

---

##### `OverrideSpecial`<sup>Optional</sup> <a name="OverrideSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial"></a>

```go
OverrideSpecial *string
```

- *Type:* *string

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#override_special Password#override_special}

---

##### `Special`<sup>Optional</sup> <a name="Special" id="@cdktf/provider-random.password.PasswordConfig.property.special"></a>

```go
Special interface{}
```

- *Type:* interface{}

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#special Password#special}

---

##### `Upper`<sup>Optional</sup> <a name="Upper" id="@cdktf/provider-random.password.PasswordConfig.property.upper"></a>

```go
Upper interface{}
```

- *Type:* interface{}

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/password#upper Password#upper}

---



