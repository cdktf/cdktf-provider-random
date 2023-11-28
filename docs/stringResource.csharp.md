# `stringResource` Submodule <a name="`stringResource` Submodule" id="@cdktf/provider-random.stringResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StringResource <a name="StringResource" id="@cdktf/provider-random.stringResource.StringResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string random_string}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.stringResource.StringResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

new StringResource(Construct Scope, string Id, StringResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig">StringResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-random.stringResource.StringResourceConfig">StringResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetKeepers">ResetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetLower">ResetLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinLower">ResetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinNumeric">ResetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinSpecial">ResetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinUpper">ResetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetNumeric">ResetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetOverrideSpecial">ResetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetSpecial">ResetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetUpper">ResetUpper</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-random.stringResource.StringResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-random.stringResource.StringResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-random.stringResource.StringResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-random.stringResource.StringResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-random.stringResource.StringResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-random.stringResource.StringResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-random.stringResource.StringResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.stringResource.StringResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.stringResource.StringResource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-random.stringResource.StringResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-random.stringResource.StringResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-random.stringResource.StringResource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktf/provider-random.stringResource.StringResource.resetKeepers"></a>

```csharp
private void ResetKeepers()
```

##### `ResetLower` <a name="ResetLower" id="@cdktf/provider-random.stringResource.StringResource.resetLower"></a>

```csharp
private void ResetLower()
```

##### `ResetMinLower` <a name="ResetMinLower" id="@cdktf/provider-random.stringResource.StringResource.resetMinLower"></a>

```csharp
private void ResetMinLower()
```

##### `ResetMinNumeric` <a name="ResetMinNumeric" id="@cdktf/provider-random.stringResource.StringResource.resetMinNumeric"></a>

```csharp
private void ResetMinNumeric()
```

##### `ResetMinSpecial` <a name="ResetMinSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetMinSpecial"></a>

```csharp
private void ResetMinSpecial()
```

##### `ResetMinUpper` <a name="ResetMinUpper" id="@cdktf/provider-random.stringResource.StringResource.resetMinUpper"></a>

```csharp
private void ResetMinUpper()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-random.stringResource.StringResource.resetNumber"></a>

```csharp
private void ResetNumber()
```

##### `ResetNumeric` <a name="ResetNumeric" id="@cdktf/provider-random.stringResource.StringResource.resetNumeric"></a>

```csharp
private void ResetNumeric()
```

##### `ResetOverrideSpecial` <a name="ResetOverrideSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideSpecial"></a>

```csharp
private void ResetOverrideSpecial()
```

##### `ResetSpecial` <a name="ResetSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetSpecial"></a>

```csharp
private void ResetSpecial()
```

##### `ResetUpper` <a name="ResetUpper" id="@cdktf/provider-random.stringResource.StringResource.resetUpper"></a>

```csharp
private void ResetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StringResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-random.stringResource.StringResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

StringResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.stringResource.StringResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

StringResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

StringResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

StringResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StringResource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StringResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StringResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StringResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepersInput">KeepersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lengthInput">LengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lowerInput">LowerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLowerInput">MinLowerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumericInput">MinNumericInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput">MinSpecialInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpperInput">MinUpperInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numberInput">NumberInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numericInput">NumericInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput">OverrideSpecialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.specialInput">SpecialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upperInput">UpperInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lower">Lower</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLower">MinLower</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumeric">MinNumeric</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecial">MinSpecial</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpper">MinUpper</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.number">Number</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numeric">Numeric</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial">OverrideSpecial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.special">Special</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upper">Upper</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-random.stringResource.StringResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-random.stringResource.StringResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-random.stringResource.StringResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.stringResource.StringResource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.stringResource.StringResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.stringResource.StringResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.stringResource.StringResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.stringResource.StringResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.stringResource.StringResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.stringResource.StringResource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-random.stringResource.StringResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-random.stringResource.StringResource.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktf/provider-random.stringResource.StringResource.property.keepersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeepersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktf/provider-random.stringResource.StringResource.property.lengthInput"></a>

```csharp
public double LengthInput { get; }
```

- *Type:* double

---

##### `LowerInput`<sup>Optional</sup> <a name="LowerInput" id="@cdktf/provider-random.stringResource.StringResource.property.lowerInput"></a>

```csharp
public object LowerInput { get; }
```

- *Type:* object

---

##### `MinLowerInput`<sup>Optional</sup> <a name="MinLowerInput" id="@cdktf/provider-random.stringResource.StringResource.property.minLowerInput"></a>

```csharp
public double MinLowerInput { get; }
```

- *Type:* double

---

##### `MinNumericInput`<sup>Optional</sup> <a name="MinNumericInput" id="@cdktf/provider-random.stringResource.StringResource.property.minNumericInput"></a>

```csharp
public double MinNumericInput { get; }
```

- *Type:* double

---

##### `MinSpecialInput`<sup>Optional</sup> <a name="MinSpecialInput" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput"></a>

```csharp
public double MinSpecialInput { get; }
```

- *Type:* double

---

##### `MinUpperInput`<sup>Optional</sup> <a name="MinUpperInput" id="@cdktf/provider-random.stringResource.StringResource.property.minUpperInput"></a>

```csharp
public double MinUpperInput { get; }
```

- *Type:* double

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-random.stringResource.StringResource.property.numberInput"></a>

```csharp
public object NumberInput { get; }
```

- *Type:* object

---

##### `NumericInput`<sup>Optional</sup> <a name="NumericInput" id="@cdktf/provider-random.stringResource.StringResource.property.numericInput"></a>

```csharp
public object NumericInput { get; }
```

- *Type:* object

---

##### `OverrideSpecialInput`<sup>Optional</sup> <a name="OverrideSpecialInput" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput"></a>

```csharp
public string OverrideSpecialInput { get; }
```

- *Type:* string

---

##### `SpecialInput`<sup>Optional</sup> <a name="SpecialInput" id="@cdktf/provider-random.stringResource.StringResource.property.specialInput"></a>

```csharp
public object SpecialInput { get; }
```

- *Type:* object

---

##### `UpperInput`<sup>Optional</sup> <a name="UpperInput" id="@cdktf/provider-random.stringResource.StringResource.property.upperInput"></a>

```csharp
public object UpperInput { get; }
```

- *Type:* object

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktf/provider-random.stringResource.StringResource.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-random.stringResource.StringResource.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-random.stringResource.StringResource.property.lower"></a>

```csharp
public object Lower { get; }
```

- *Type:* object

---

##### `MinLower`<sup>Required</sup> <a name="MinLower" id="@cdktf/provider-random.stringResource.StringResource.property.minLower"></a>

```csharp
public double MinLower { get; }
```

- *Type:* double

---

##### `MinNumeric`<sup>Required</sup> <a name="MinNumeric" id="@cdktf/provider-random.stringResource.StringResource.property.minNumeric"></a>

```csharp
public double MinNumeric { get; }
```

- *Type:* double

---

##### `MinSpecial`<sup>Required</sup> <a name="MinSpecial" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecial"></a>

```csharp
public double MinSpecial { get; }
```

- *Type:* double

---

##### `MinUpper`<sup>Required</sup> <a name="MinUpper" id="@cdktf/provider-random.stringResource.StringResource.property.minUpper"></a>

```csharp
public double MinUpper { get; }
```

- *Type:* double

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-random.stringResource.StringResource.property.number"></a>

```csharp
public object Number { get; }
```

- *Type:* object

---

##### `Numeric`<sup>Required</sup> <a name="Numeric" id="@cdktf/provider-random.stringResource.StringResource.property.numeric"></a>

```csharp
public object Numeric { get; }
```

- *Type:* object

---

##### `OverrideSpecial`<sup>Required</sup> <a name="OverrideSpecial" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial"></a>

```csharp
public string OverrideSpecial { get; }
```

- *Type:* string

---

##### `Special`<sup>Required</sup> <a name="Special" id="@cdktf/provider-random.stringResource.StringResource.property.special"></a>

```csharp
public object Special { get; }
```

- *Type:* object

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-random.stringResource.StringResource.property.upper"></a>

```csharp
public object Upper { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-random.stringResource.StringResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StringResourceConfig <a name="StringResourceConfig" id="@cdktf/provider-random.stringResource.StringResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.stringResource.StringResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Random;

new StringResourceConfig {
    object Connection = null,
    object Count = null,
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
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.length">Length</a></code> | <code>double</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lower">Lower</a></code> | <code>object</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower">MinLower</a></code> | <code>double</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric">MinNumeric</a></code> | <code>double</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial">MinSpecial</a></code> | <code>double</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper">MinUpper</a></code> | <code>double</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.number">Number</a></code> | <code>object</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric">Numeric</a></code> | <code>object</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial">OverrideSpecial</a></code> | <code>string</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.special">Special</a></code> | <code>object</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.upper">Upper</a></code> | <code>object</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.length"></a>

```csharp
public double Length { get; set; }
```

- *Type:* double

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#length StringResource#length}

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#keepers StringResource#keepers}

---

##### `Lower`<sup>Optional</sup> <a name="Lower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lower"></a>

```csharp
public object Lower { get; set; }
```

- *Type:* object

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#lower StringResource#lower}

---

##### `MinLower`<sup>Optional</sup> <a name="MinLower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower"></a>

```csharp
public double MinLower { get; set; }
```

- *Type:* double

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_lower StringResource#min_lower}

---

##### `MinNumeric`<sup>Optional</sup> <a name="MinNumeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric"></a>

```csharp
public double MinNumeric { get; set; }
```

- *Type:* double

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `MinSpecial`<sup>Optional</sup> <a name="MinSpecial" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial"></a>

```csharp
public double MinSpecial { get; set; }
```

- *Type:* double

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_special StringResource#min_special}

---

##### `MinUpper`<sup>Optional</sup> <a name="MinUpper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper"></a>

```csharp
public double MinUpper { get; set; }
```

- *Type:* double

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_upper StringResource#min_upper}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.number"></a>

```csharp
public object Number { get; set; }
```

- *Type:* object

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#number StringResource#number}

---

##### `Numeric`<sup>Optional</sup> <a name="Numeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric"></a>

```csharp
public object Numeric { get; set; }
```

- *Type:* object

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#numeric StringResource#numeric}

---

##### `OverrideSpecial`<sup>Optional</sup> <a name="OverrideSpecial" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial"></a>

```csharp
public string OverrideSpecial { get; set; }
```

- *Type:* string

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#override_special StringResource#override_special}

---

##### `Special`<sup>Optional</sup> <a name="Special" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.special"></a>

```csharp
public object Special { get; set; }
```

- *Type:* object

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#special StringResource#special}

---

##### `Upper`<sup>Optional</sup> <a name="Upper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.upper"></a>

```csharp
public object Upper { get; set; }
```

- *Type:* object

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#upper StringResource#upper}

---



