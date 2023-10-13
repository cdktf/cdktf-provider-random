# `random_shuffle`

Refer to the Terraform Registory for docs: [`random_shuffle`](https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle).

# `shuffle` Submodule <a name="`shuffle` Submodule" id="@cdktf/provider-random.shuffle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Shuffle <a name="Shuffle" id="@cdktf/provider-random.shuffle.Shuffle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle random_shuffle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.shuffle.Shuffle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

new Shuffle(Construct Scope, string Id, ShuffleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig">ShuffleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-random.shuffle.ShuffleConfig">ShuffleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetKeepers">ResetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetResultCount">ResetResultCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetSeed">ResetSeed</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-random.shuffle.Shuffle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-random.shuffle.Shuffle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-random.shuffle.Shuffle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-random.shuffle.Shuffle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktf/provider-random.shuffle.Shuffle.resetKeepers"></a>

```csharp
private void ResetKeepers()
```

##### `ResetResultCount` <a name="ResetResultCount" id="@cdktf/provider-random.shuffle.Shuffle.resetResultCount"></a>

```csharp
private void ResetResultCount()
```

##### `ResetSeed` <a name="ResetSeed" id="@cdktf/provider-random.shuffle.Shuffle.resetSeed"></a>

```csharp
private void ResetSeed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-random.shuffle.Shuffle.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

Shuffle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.shuffle.Shuffle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

Shuffle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

Shuffle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.result">Result</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.inputInput">InputInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepersInput">KeepersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput">ResultCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seedInput">SeedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.input">Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCount">ResultCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seed">Seed</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-random.shuffle.Shuffle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-random.shuffle.Shuffle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.shuffle.Shuffle.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.shuffle.Shuffle.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.shuffle.Shuffle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.shuffle.Shuffle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.shuffle.Shuffle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.shuffle.Shuffle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.shuffle.Shuffle.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.shuffle.Shuffle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-random.shuffle.Shuffle.property.result"></a>

```csharp
public string[] Result { get; }
```

- *Type:* string[]

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-random.shuffle.Shuffle.property.inputInput"></a>

```csharp
public string[] InputInput { get; }
```

- *Type:* string[]

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktf/provider-random.shuffle.Shuffle.property.keepersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeepersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResultCountInput`<sup>Optional</sup> <a name="ResultCountInput" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput"></a>

```csharp
public double ResultCountInput { get; }
```

- *Type:* double

---

##### `SeedInput`<sup>Optional</sup> <a name="SeedInput" id="@cdktf/provider-random.shuffle.Shuffle.property.seedInput"></a>

```csharp
public string SeedInput { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-random.shuffle.Shuffle.property.input"></a>

```csharp
public string[] Input { get; }
```

- *Type:* string[]

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktf/provider-random.shuffle.Shuffle.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResultCount`<sup>Required</sup> <a name="ResultCount" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCount"></a>

```csharp
public double ResultCount { get; }
```

- *Type:* double

---

##### `Seed`<sup>Required</sup> <a name="Seed" id="@cdktf/provider-random.shuffle.Shuffle.property.seed"></a>

```csharp
public string Seed { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShuffleConfig <a name="ShuffleConfig" id="@cdktf/provider-random.shuffle.ShuffleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.shuffle.ShuffleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

new ShuffleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Input,
    System.Collections.Generic.IDictionary<string, string> Keepers = null,
    double ResultCount = null,
    string Seed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.input">Input</a></code> | <code>string[]</code> | The list of strings to shuffle. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount">ResultCount</a></code> | <code>double</code> | The number of results to return. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.seed">Seed</a></code> | <code>string</code> | Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.input"></a>

```csharp
public string[] Input { get; set; }
```

- *Type:* string[]

The list of strings to shuffle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#input Shuffle#input}

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#keepers Shuffle#keepers}

---

##### `ResultCount`<sup>Optional</sup> <a name="ResultCount" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount"></a>

```csharp
public double ResultCount { get; set; }
```

- *Type:* double

The number of results to return.

Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#result_count Shuffle#result_count}

---

##### `Seed`<sup>Optional</sup> <a name="Seed" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.seed"></a>

```csharp
public string Seed { get; set; }
```

- *Type:* string

Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.

**Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/shuffle#seed Shuffle#seed}

---



