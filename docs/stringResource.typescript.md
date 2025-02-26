# `stringResource` Submodule <a name="`stringResource` Submodule" id="@cdktf/provider-random.stringResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StringResource <a name="StringResource" id="@cdktf/provider-random.stringResource.StringResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string random_string}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.stringResource.StringResource.Initializer"></a>

```typescript
import { stringResource } from '@cdktf/provider-random'

new stringResource.StringResource(scope: Construct, id: string, config: StringResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig">StringResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-random.stringResource.StringResourceConfig">StringResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetKeepers">resetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetLower">resetLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinLower">resetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinNumeric">resetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinSpecial">resetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetMinUpper">resetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetNumeric">resetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetOverrideSpecial">resetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetSpecial">resetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetUpper">resetUpper</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-random.stringResource.StringResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-random.stringResource.StringResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-random.stringResource.StringResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-random.stringResource.StringResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-random.stringResource.StringResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-random.stringResource.StringResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.stringResource.StringResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-random.stringResource.StringResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-random.stringResource.StringResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-random.stringResource.StringResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-random.stringResource.StringResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.stringResource.StringResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-random.stringResource.StringResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-random.stringResource.StringResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeepers` <a name="resetKeepers" id="@cdktf/provider-random.stringResource.StringResource.resetKeepers"></a>

```typescript
public resetKeepers(): void
```

##### `resetLower` <a name="resetLower" id="@cdktf/provider-random.stringResource.StringResource.resetLower"></a>

```typescript
public resetLower(): void
```

##### `resetMinLower` <a name="resetMinLower" id="@cdktf/provider-random.stringResource.StringResource.resetMinLower"></a>

```typescript
public resetMinLower(): void
```

##### `resetMinNumeric` <a name="resetMinNumeric" id="@cdktf/provider-random.stringResource.StringResource.resetMinNumeric"></a>

```typescript
public resetMinNumeric(): void
```

##### `resetMinSpecial` <a name="resetMinSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetMinSpecial"></a>

```typescript
public resetMinSpecial(): void
```

##### `resetMinUpper` <a name="resetMinUpper" id="@cdktf/provider-random.stringResource.StringResource.resetMinUpper"></a>

```typescript
public resetMinUpper(): void
```

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-random.stringResource.StringResource.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetNumeric` <a name="resetNumeric" id="@cdktf/provider-random.stringResource.StringResource.resetNumeric"></a>

```typescript
public resetNumeric(): void
```

##### `resetOverrideSpecial` <a name="resetOverrideSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideSpecial"></a>

```typescript
public resetOverrideSpecial(): void
```

##### `resetSpecial` <a name="resetSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetSpecial"></a>

```typescript
public resetSpecial(): void
```

##### `resetUpper` <a name="resetUpper" id="@cdktf/provider-random.stringResource.StringResource.resetUpper"></a>

```typescript
public resetUpper(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StringResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-random.stringResource.StringResource.isConstruct"></a>

```typescript
import { stringResource } from '@cdktf/provider-random'

stringResource.StringResource.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement"></a>

```typescript
import { stringResource } from '@cdktf/provider-random'

stringResource.StringResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource"></a>

```typescript
import { stringResource } from '@cdktf/provider-random'

stringResource.StringResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport"></a>

```typescript
import { stringResource } from '@cdktf/provider-random'

stringResource.StringResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StringResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StringResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StringResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StringResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepersInput">keepersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lowerInput">lowerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLowerInput">minLowerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumericInput">minNumericInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput">minSpecialInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpperInput">minUpperInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numberInput">numberInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numericInput">numericInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput">overrideSpecialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.specialInput">specialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upperInput">upperInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lower">lower</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLower">minLower</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumeric">minNumeric</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecial">minSpecial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpper">minUpper</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.number">number</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numeric">numeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial">overrideSpecial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.special">special</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upper">upper</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.stringResource.StringResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-random.stringResource.StringResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.stringResource.StringResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.stringResource.StringResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.stringResource.StringResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.stringResource.StringResource.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `keepersInput`<sup>Optional</sup> <a name="keepersInput" id="@cdktf/provider-random.stringResource.StringResource.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktf/provider-random.stringResource.StringResource.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `lowerInput`<sup>Optional</sup> <a name="lowerInput" id="@cdktf/provider-random.stringResource.StringResource.property.lowerInput"></a>

```typescript
public readonly lowerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLowerInput`<sup>Optional</sup> <a name="minLowerInput" id="@cdktf/provider-random.stringResource.StringResource.property.minLowerInput"></a>

```typescript
public readonly minLowerInput: number;
```

- *Type:* number

---

##### `minNumericInput`<sup>Optional</sup> <a name="minNumericInput" id="@cdktf/provider-random.stringResource.StringResource.property.minNumericInput"></a>

```typescript
public readonly minNumericInput: number;
```

- *Type:* number

---

##### `minSpecialInput`<sup>Optional</sup> <a name="minSpecialInput" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput"></a>

```typescript
public readonly minSpecialInput: number;
```

- *Type:* number

---

##### `minUpperInput`<sup>Optional</sup> <a name="minUpperInput" id="@cdktf/provider-random.stringResource.StringResource.property.minUpperInput"></a>

```typescript
public readonly minUpperInput: number;
```

- *Type:* number

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-random.stringResource.StringResource.property.numberInput"></a>

```typescript
public readonly numberInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numericInput`<sup>Optional</sup> <a name="numericInput" id="@cdktf/provider-random.stringResource.StringResource.property.numericInput"></a>

```typescript
public readonly numericInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="overrideSpecialInput" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput"></a>

```typescript
public readonly overrideSpecialInput: string;
```

- *Type:* string

---

##### `specialInput`<sup>Optional</sup> <a name="specialInput" id="@cdktf/provider-random.stringResource.StringResource.property.specialInput"></a>

```typescript
public readonly specialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upperInput`<sup>Optional</sup> <a name="upperInput" id="@cdktf/provider-random.stringResource.StringResource.property.upperInput"></a>

```typescript
public readonly upperInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResource.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResource.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResource.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLower`<sup>Required</sup> <a name="minLower" id="@cdktf/provider-random.stringResource.StringResource.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* number

---

##### `minNumeric`<sup>Required</sup> <a name="minNumeric" id="@cdktf/provider-random.stringResource.StringResource.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* number

---

##### `minSpecial`<sup>Required</sup> <a name="minSpecial" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* number

---

##### `minUpper`<sup>Required</sup> <a name="minUpper" id="@cdktf/provider-random.stringResource.StringResource.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResource.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResource.property.numeric"></a>

```typescript
public readonly numeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideSpecial`<sup>Required</sup> <a name="overrideSpecial" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* string

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResource.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResource.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.stringResource.StringResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StringResourceConfig <a name="StringResourceConfig" id="@cdktf/provider-random.stringResource.StringResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.stringResource.StringResourceConfig.Initializer"></a>

```typescript
import { stringResource } from '@cdktf/provider-random'

const stringResourceConfig: stringResource.StringResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.length">length</a></code> | <code>number</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lower">lower</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower">minLower</a></code> | <code>number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric">minNumeric</a></code> | <code>number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial">minSpecial</a></code> | <code>number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper">minUpper</a></code> | <code>number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.number">number</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric">numeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial">overrideSpecial</a></code> | <code>string</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.special">special</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.upper">upper</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#lower StringResource#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#min_lower StringResource#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#min_special StringResource#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `number`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#number StringResource#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric"></a>

```typescript
public readonly numeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#numeric StringResource#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* string

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.1/docs/resources/string#upper StringResource#upper}

---



