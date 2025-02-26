# `shuffle` Submodule <a name="`shuffle` Submodule" id="@cdktf/provider-random.shuffle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Shuffle <a name="Shuffle" id="@cdktf/provider-random.shuffle.Shuffle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/shuffle random_shuffle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.shuffle.Shuffle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v11/shuffle"

shuffle.NewShuffle(scope Construct, id *string, config ShuffleConfig) Shuffle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig">ShuffleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-random.shuffle.ShuffleConfig">ShuffleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetKeepers">ResetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetResultCount">ResetResultCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetSeed">ResetSeed</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-random.shuffle.Shuffle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-random.shuffle.Shuffle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-random.shuffle.Shuffle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-random.shuffle.Shuffle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-random.shuffle.Shuffle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-random.shuffle.Shuffle.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.shuffle.Shuffle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-random.shuffle.Shuffle.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-random.shuffle.Shuffle.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.Shuffle.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-random.shuffle.Shuffle.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-random.shuffle.Shuffle.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.shuffle.Shuffle.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-random.shuffle.Shuffle.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-random.shuffle.Shuffle.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktf/provider-random.shuffle.Shuffle.resetKeepers"></a>

```go
func ResetKeepers()
```

##### `ResetResultCount` <a name="ResetResultCount" id="@cdktf/provider-random.shuffle.Shuffle.resetResultCount"></a>

```go
func ResetResultCount()
```

##### `ResetSeed` <a name="ResetSeed" id="@cdktf/provider-random.shuffle.Shuffle.resetSeed"></a>

```go
func ResetSeed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Shuffle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-random.shuffle.Shuffle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v11/shuffle"

shuffle.Shuffle_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v11/shuffle"

shuffle.Shuffle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v11/shuffle"

shuffle.Shuffle_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v11/shuffle"

shuffle.Shuffle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Shuffle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Shuffle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Shuffle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/shuffle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Shuffle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.result">Result</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.inputInput">InputInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepersInput">KeepersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput">ResultCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seedInput">SeedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.input">Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepers">Keepers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCount">ResultCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seed">Seed</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-random.shuffle.Shuffle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-random.shuffle.Shuffle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.shuffle.Shuffle.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.shuffle.Shuffle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.shuffle.Shuffle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.shuffle.Shuffle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.shuffle.Shuffle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.shuffle.Shuffle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.shuffle.Shuffle.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.shuffle.Shuffle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-random.shuffle.Shuffle.property.result"></a>

```go
func Result() *[]*string
```

- *Type:* *[]*string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-random.shuffle.Shuffle.property.inputInput"></a>

```go
func InputInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktf/provider-random.shuffle.Shuffle.property.keepersInput"></a>

```go
func KeepersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResultCountInput`<sup>Optional</sup> <a name="ResultCountInput" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput"></a>

```go
func ResultCountInput() *f64
```

- *Type:* *f64

---

##### `SeedInput`<sup>Optional</sup> <a name="SeedInput" id="@cdktf/provider-random.shuffle.Shuffle.property.seedInput"></a>

```go
func SeedInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-random.shuffle.Shuffle.property.input"></a>

```go
func Input() *[]*string
```

- *Type:* *[]*string

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktf/provider-random.shuffle.Shuffle.property.keepers"></a>

```go
func Keepers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResultCount`<sup>Required</sup> <a name="ResultCount" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCount"></a>

```go
func ResultCount() *f64
```

- *Type:* *f64

---

##### `Seed`<sup>Required</sup> <a name="Seed" id="@cdktf/provider-random.shuffle.Shuffle.property.seed"></a>

```go
func Seed() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ShuffleConfig <a name="ShuffleConfig" id="@cdktf/provider-random.shuffle.ShuffleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.shuffle.ShuffleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-random-go/random/v11/shuffle"

&shuffle.ShuffleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Input: *[]*string,
	Keepers: *map[string]*string,
	ResultCount: *f64,
	Seed: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.input">Input</a></code> | <code>*[]*string</code> | The list of strings to shuffle. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers">Keepers</a></code> | <code>*map[string]*string</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount">ResultCount</a></code> | <code>*f64</code> | The number of results to return. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.seed">Seed</a></code> | <code>*string</code> | Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.input"></a>

```go
Input *[]*string
```

- *Type:* *[]*string

The list of strings to shuffle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/shuffle#input Shuffle#input}

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers"></a>

```go
Keepers *map[string]*string
```

- *Type:* *map[string]*string

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/shuffle#keepers Shuffle#keepers}

---

##### `ResultCount`<sup>Optional</sup> <a name="ResultCount" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount"></a>

```go
ResultCount *f64
```

- *Type:* *f64

The number of results to return.

Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/shuffle#result_count Shuffle#result_count}

---

##### `Seed`<sup>Optional</sup> <a name="Seed" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.seed"></a>

```go
Seed *string
```

- *Type:* *string

Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.

**Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/shuffle#seed Shuffle#seed}

---



