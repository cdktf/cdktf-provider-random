# `password` Submodule <a name="`password` Submodule" id="@cdktf/provider-random.password"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Password <a name="Password" id="@cdktf/provider-random.password.Password"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/password random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.password.Password.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

new Password(Construct Scope, string Id, PasswordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-random.password.PasswordConfig">PasswordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-random.password.Password.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.password.Password.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-random.password.Password.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-random.password.Password.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-random.password.Password.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-random.password.Password.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-random.password.Password.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-random.password.Password.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-random.password.Password.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-random.password.Password.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktf/provider-random.password.Password.resetKeepers"></a>

```csharp
private void ResetKeepers()
```

##### `ResetLower` <a name="ResetLower" id="@cdktf/provider-random.password.Password.resetLower"></a>

```csharp
private void ResetLower()
```

##### `ResetMinLower` <a name="ResetMinLower" id="@cdktf/provider-random.password.Password.resetMinLower"></a>

```csharp
private void ResetMinLower()
```

##### `ResetMinNumeric` <a name="ResetMinNumeric" id="@cdktf/provider-random.password.Password.resetMinNumeric"></a>

```csharp
private void ResetMinNumeric()
```

##### `ResetMinSpecial` <a name="ResetMinSpecial" id="@cdktf/provider-random.password.Password.resetMinSpecial"></a>

```csharp
private void ResetMinSpecial()
```

##### `ResetMinUpper` <a name="ResetMinUpper" id="@cdktf/provider-random.password.Password.resetMinUpper"></a>

```csharp
private void ResetMinUpper()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-random.password.Password.resetNumber"></a>

```csharp
private void ResetNumber()
```

##### `ResetNumeric` <a name="ResetNumeric" id="@cdktf/provider-random.password.Password.resetNumeric"></a>

```csharp
private void ResetNumeric()
```

##### `ResetOverrideSpecial` <a name="ResetOverrideSpecial" id="@cdktf/provider-random.password.Password.resetOverrideSpecial"></a>

```csharp
private void ResetOverrideSpecial()
```

##### `ResetSpecial` <a name="ResetSpecial" id="@cdktf/provider-random.password.Password.resetSpecial"></a>

```csharp
private void ResetSpecial()
```

##### `ResetUpper` <a name="ResetUpper" id="@cdktf/provider-random.password.Password.resetUpper"></a>

```csharp
private void ResetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-random.password.Password.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

Password.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.password.Password.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-random.password.Password.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

Password.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.password.Password.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-random.password.Password.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

Password.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.password.Password.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.password.Password.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.bcryptHash">BcryptHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepersInput">KeepersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lengthInput">LengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lowerInput">LowerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLowerInput">MinLowerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumericInput">MinNumericInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecialInput">MinSpecialInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpperInput">MinUpperInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numberInput">NumberInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numericInput">NumericInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecialInput">OverrideSpecialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.specialInput">SpecialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upperInput">UpperInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lower">Lower</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLower">MinLower</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumeric">MinNumeric</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecial">MinSpecial</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpper">MinUpper</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.number">Number</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numeric">Numeric</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecial">OverrideSpecial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.special">Special</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upper">Upper</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-random.password.Password.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-random.password.Password.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-random.password.Password.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-random.password.Password.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-random.password.Password.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-random.password.Password.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.password.Password.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.password.Password.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.password.Password.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.password.Password.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.password.Password.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.password.Password.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.password.Password.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BcryptHash`<sup>Required</sup> <a name="BcryptHash" id="@cdktf/provider-random.password.Password.property.bcryptHash"></a>

```csharp
public string BcryptHash { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.password.Password.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-random.password.Password.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktf/provider-random.password.Password.property.keepersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeepersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktf/provider-random.password.Password.property.lengthInput"></a>

```csharp
public double LengthInput { get; }
```

- *Type:* double

---

##### `LowerInput`<sup>Optional</sup> <a name="LowerInput" id="@cdktf/provider-random.password.Password.property.lowerInput"></a>

```csharp
public object LowerInput { get; }
```

- *Type:* object

---

##### `MinLowerInput`<sup>Optional</sup> <a name="MinLowerInput" id="@cdktf/provider-random.password.Password.property.minLowerInput"></a>

```csharp
public double MinLowerInput { get; }
```

- *Type:* double

---

##### `MinNumericInput`<sup>Optional</sup> <a name="MinNumericInput" id="@cdktf/provider-random.password.Password.property.minNumericInput"></a>

```csharp
public double MinNumericInput { get; }
```

- *Type:* double

---

##### `MinSpecialInput`<sup>Optional</sup> <a name="MinSpecialInput" id="@cdktf/provider-random.password.Password.property.minSpecialInput"></a>

```csharp
public double MinSpecialInput { get; }
```

- *Type:* double

---

##### `MinUpperInput`<sup>Optional</sup> <a name="MinUpperInput" id="@cdktf/provider-random.password.Password.property.minUpperInput"></a>

```csharp
public double MinUpperInput { get; }
```

- *Type:* double

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-random.password.Password.property.numberInput"></a>

```csharp
public object NumberInput { get; }
```

- *Type:* object

---

##### `NumericInput`<sup>Optional</sup> <a name="NumericInput" id="@cdktf/provider-random.password.Password.property.numericInput"></a>

```csharp
public object NumericInput { get; }
```

- *Type:* object

---

##### `OverrideSpecialInput`<sup>Optional</sup> <a name="OverrideSpecialInput" id="@cdktf/provider-random.password.Password.property.overrideSpecialInput"></a>

```csharp
public string OverrideSpecialInput { get; }
```

- *Type:* string

---

##### `SpecialInput`<sup>Optional</sup> <a name="SpecialInput" id="@cdktf/provider-random.password.Password.property.specialInput"></a>

```csharp
public object SpecialInput { get; }
```

- *Type:* object

---

##### `UpperInput`<sup>Optional</sup> <a name="UpperInput" id="@cdktf/provider-random.password.Password.property.upperInput"></a>

```csharp
public object UpperInput { get; }
```

- *Type:* object

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktf/provider-random.password.Password.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-random.password.Password.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-random.password.Password.property.lower"></a>

```csharp
public object Lower { get; }
```

- *Type:* object

---

##### `MinLower`<sup>Required</sup> <a name="MinLower" id="@cdktf/provider-random.password.Password.property.minLower"></a>

```csharp
public double MinLower { get; }
```

- *Type:* double

---

##### `MinNumeric`<sup>Required</sup> <a name="MinNumeric" id="@cdktf/provider-random.password.Password.property.minNumeric"></a>

```csharp
public double MinNumeric { get; }
```

- *Type:* double

---

##### `MinSpecial`<sup>Required</sup> <a name="MinSpecial" id="@cdktf/provider-random.password.Password.property.minSpecial"></a>

```csharp
public double MinSpecial { get; }
```

- *Type:* double

---

##### `MinUpper`<sup>Required</sup> <a name="MinUpper" id="@cdktf/provider-random.password.Password.property.minUpper"></a>

```csharp
public double MinUpper { get; }
```

- *Type:* double

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-random.password.Password.property.number"></a>

```csharp
public object Number { get; }
```

- *Type:* object

---

##### `Numeric`<sup>Required</sup> <a name="Numeric" id="@cdktf/provider-random.password.Password.property.numeric"></a>

```csharp
public object Numeric { get; }
```

- *Type:* object

---

##### `OverrideSpecial`<sup>Required</sup> <a name="OverrideSpecial" id="@cdktf/provider-random.password.Password.property.overrideSpecial"></a>

```csharp
public string OverrideSpecial { get; }
```

- *Type:* string

---

##### `Special`<sup>Required</sup> <a name="Special" id="@cdktf/provider-random.password.Password.property.special"></a>

```csharp
public object Special { get; }
```

- *Type:* object

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-random.password.Password.property.upper"></a>

```csharp
public object Upper { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-random.password.Password.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordConfig <a name="PasswordConfig" id="@cdktf/provider-random.password.PasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.password.PasswordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

new PasswordConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Length,
    System.Collections.Generic.IDictionary<string, string> Keepers = null,
    object Lower = null,
    double MinLower = null,
    double MinNumeric = null,
    double MinSpecial = null,
    double MinUpper = null,
    object Number = null,
    object Numeric = null,
    string OverrideSpecial = null,
    object Special = null,
    object Upper = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.length">Length</a></code> | <code>double</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lower">Lower</a></code> | <code>object</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minLower">MinLower</a></code> | <code>double</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minNumeric">MinNumeric</a></code> | <code>double</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minSpecial">MinSpecial</a></code> | <code>double</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minUpper">MinUpper</a></code> | <code>double</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.number">Number</a></code> | <code>object</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.numeric">Numeric</a></code> | <code>object</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial">OverrideSpecial</a></code> | <code>string</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.special">Special</a></code> | <code>object</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.upper">Upper</a></code> | <code>object</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.password.PasswordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.password.PasswordConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.password.PasswordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.password.PasswordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.password.PasswordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.password.PasswordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.password.PasswordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-random.password.PasswordConfig.property.length"></a>

```csharp
public double Length { get; set; }
```

- *Type:* double

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#length Password#length}

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktf/provider-random.password.PasswordConfig.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#keepers Password#keepers}

---

##### `Lower`<sup>Optional</sup> <a name="Lower" id="@cdktf/provider-random.password.PasswordConfig.property.lower"></a>

```csharp
public object Lower { get; set; }
```

- *Type:* object

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#lower Password#lower}

---

##### `MinLower`<sup>Optional</sup> <a name="MinLower" id="@cdktf/provider-random.password.PasswordConfig.property.minLower"></a>

```csharp
public double MinLower { get; set; }
```

- *Type:* double

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_lower Password#min_lower}

---

##### `MinNumeric`<sup>Optional</sup> <a name="MinNumeric" id="@cdktf/provider-random.password.PasswordConfig.property.minNumeric"></a>

```csharp
public double MinNumeric { get; set; }
```

- *Type:* double

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_numeric Password#min_numeric}

---

##### `MinSpecial`<sup>Optional</sup> <a name="MinSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.minSpecial"></a>

```csharp
public double MinSpecial { get; set; }
```

- *Type:* double

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_special Password#min_special}

---

##### `MinUpper`<sup>Optional</sup> <a name="MinUpper" id="@cdktf/provider-random.password.PasswordConfig.property.minUpper"></a>

```csharp
public double MinUpper { get; set; }
```

- *Type:* double

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_upper Password#min_upper}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-random.password.PasswordConfig.property.number"></a>

```csharp
public object Number { get; set; }
```

- *Type:* object

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#number Password#number}

---

##### `Numeric`<sup>Optional</sup> <a name="Numeric" id="@cdktf/provider-random.password.PasswordConfig.property.numeric"></a>

```csharp
public object Numeric { get; set; }
```

- *Type:* object

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#numeric Password#numeric}

---

##### `OverrideSpecial`<sup>Optional</sup> <a name="OverrideSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial"></a>

```csharp
public string OverrideSpecial { get; set; }
```

- *Type:* string

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#override_special Password#override_special}

---

##### `Special`<sup>Optional</sup> <a name="Special" id="@cdktf/provider-random.password.PasswordConfig.property.special"></a>

```csharp
public object Special { get; set; }
```

- *Type:* object

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#special Password#special}

---

##### `Upper`<sup>Optional</sup> <a name="Upper" id="@cdktf/provider-random.password.PasswordConfig.property.upper"></a>

```csharp
public object Upper { get; set; }
```

- *Type:* object

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#upper Password#upper}

---



