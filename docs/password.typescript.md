# `password` Submodule <a name="`password` Submodule" id="@cdktf/provider-random.password"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Password <a name="Password" id="@cdktf/provider-random.password.Password"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.password.Password.Initializer"></a>

```typescript
import { password } from '@cdktf/provider-random'

new password.Password(scope: Construct, id: string, config: PasswordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-random.password.PasswordConfig">PasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.password.Password.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-random.password.Password.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-random.password.PasswordConfig">PasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.password.Password.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.password.Password.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.password.Password.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-random.password.Password.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-random.password.Password.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-random.password.Password.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-random.password.Password.resetKeepers">resetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetLower">resetLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinLower">resetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinNumeric">resetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinSpecial">resetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetMinUpper">resetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetNumeric">resetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetOverrideSpecial">resetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetSpecial">resetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.resetUpper">resetUpper</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-random.password.Password.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-random.password.Password.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.password.Password.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.password.Password.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-random.password.Password.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-random.password.Password.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-random.password.Password.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-random.password.Password.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-random.password.Password.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.password.Password.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-random.password.Password.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-random.password.Password.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-random.password.Password.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-random.password.Password.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-random.password.Password.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.password.Password.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-random.password.Password.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-random.password.Password.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeepers` <a name="resetKeepers" id="@cdktf/provider-random.password.Password.resetKeepers"></a>

```typescript
public resetKeepers(): void
```

##### `resetLower` <a name="resetLower" id="@cdktf/provider-random.password.Password.resetLower"></a>

```typescript
public resetLower(): void
```

##### `resetMinLower` <a name="resetMinLower" id="@cdktf/provider-random.password.Password.resetMinLower"></a>

```typescript
public resetMinLower(): void
```

##### `resetMinNumeric` <a name="resetMinNumeric" id="@cdktf/provider-random.password.Password.resetMinNumeric"></a>

```typescript
public resetMinNumeric(): void
```

##### `resetMinSpecial` <a name="resetMinSpecial" id="@cdktf/provider-random.password.Password.resetMinSpecial"></a>

```typescript
public resetMinSpecial(): void
```

##### `resetMinUpper` <a name="resetMinUpper" id="@cdktf/provider-random.password.Password.resetMinUpper"></a>

```typescript
public resetMinUpper(): void
```

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-random.password.Password.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetNumeric` <a name="resetNumeric" id="@cdktf/provider-random.password.Password.resetNumeric"></a>

```typescript
public resetNumeric(): void
```

##### `resetOverrideSpecial` <a name="resetOverrideSpecial" id="@cdktf/provider-random.password.Password.resetOverrideSpecial"></a>

```typescript
public resetOverrideSpecial(): void
```

##### `resetSpecial` <a name="resetSpecial" id="@cdktf/provider-random.password.Password.resetSpecial"></a>

```typescript
public resetSpecial(): void
```

##### `resetUpper` <a name="resetUpper" id="@cdktf/provider-random.password.Password.resetUpper"></a>

```typescript
public resetUpper(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-random.password.Password.isConstruct"></a>

```typescript
import { password } from '@cdktf/provider-random'

password.Password.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-random.password.Password.isTerraformElement"></a>

```typescript
import { password } from '@cdktf/provider-random'

password.Password.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-random.password.Password.isTerraformResource"></a>

```typescript
import { password } from '@cdktf/provider-random'

password.Password.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-random.password.Password.generateConfigForImport"></a>

```typescript
import { password } from '@cdktf/provider-random'

password.Password.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Password to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Password that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Password to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.password.Password.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.bcryptHash">bcryptHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepersInput">keepersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lowerInput">lowerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLowerInput">minLowerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumericInput">minNumericInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecialInput">minSpecialInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpperInput">minUpperInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numberInput">numberInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numericInput">numericInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecialInput">overrideSpecialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.specialInput">specialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upperInput">upperInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lower">lower</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLower">minLower</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumeric">minNumeric</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecial">minSpecial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpper">minUpper</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.number">number</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numeric">numeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecial">overrideSpecial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.special">special</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upper">upper</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.password.Password.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-random.password.Password.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.password.Password.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-random.password.Password.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-random.password.Password.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-random.password.Password.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.Password.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.Password.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.password.Password.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.password.Password.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.Password.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.Password.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bcryptHash`<sup>Required</sup> <a name="bcryptHash" id="@cdktf/provider-random.password.Password.property.bcryptHash"></a>

```typescript
public readonly bcryptHash: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.password.Password.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `keepersInput`<sup>Optional</sup> <a name="keepersInput" id="@cdktf/provider-random.password.Password.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktf/provider-random.password.Password.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `lowerInput`<sup>Optional</sup> <a name="lowerInput" id="@cdktf/provider-random.password.Password.property.lowerInput"></a>

```typescript
public readonly lowerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLowerInput`<sup>Optional</sup> <a name="minLowerInput" id="@cdktf/provider-random.password.Password.property.minLowerInput"></a>

```typescript
public readonly minLowerInput: number;
```

- *Type:* number

---

##### `minNumericInput`<sup>Optional</sup> <a name="minNumericInput" id="@cdktf/provider-random.password.Password.property.minNumericInput"></a>

```typescript
public readonly minNumericInput: number;
```

- *Type:* number

---

##### `minSpecialInput`<sup>Optional</sup> <a name="minSpecialInput" id="@cdktf/provider-random.password.Password.property.minSpecialInput"></a>

```typescript
public readonly minSpecialInput: number;
```

- *Type:* number

---

##### `minUpperInput`<sup>Optional</sup> <a name="minUpperInput" id="@cdktf/provider-random.password.Password.property.minUpperInput"></a>

```typescript
public readonly minUpperInput: number;
```

- *Type:* number

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-random.password.Password.property.numberInput"></a>

```typescript
public readonly numberInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numericInput`<sup>Optional</sup> <a name="numericInput" id="@cdktf/provider-random.password.Password.property.numericInput"></a>

```typescript
public readonly numericInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="overrideSpecialInput" id="@cdktf/provider-random.password.Password.property.overrideSpecialInput"></a>

```typescript
public readonly overrideSpecialInput: string;
```

- *Type:* string

---

##### `specialInput`<sup>Optional</sup> <a name="specialInput" id="@cdktf/provider-random.password.Password.property.specialInput"></a>

```typescript
public readonly specialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upperInput`<sup>Optional</sup> <a name="upperInput" id="@cdktf/provider-random.password.Password.property.upperInput"></a>

```typescript
public readonly upperInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.password.Password.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.Password.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktf/provider-random.password.Password.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLower`<sup>Required</sup> <a name="minLower" id="@cdktf/provider-random.password.Password.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* number

---

##### `minNumeric`<sup>Required</sup> <a name="minNumeric" id="@cdktf/provider-random.password.Password.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* number

---

##### `minSpecial`<sup>Required</sup> <a name="minSpecial" id="@cdktf/provider-random.password.Password.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* number

---

##### `minUpper`<sup>Required</sup> <a name="minUpper" id="@cdktf/provider-random.password.Password.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-random.password.Password.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktf/provider-random.password.Password.property.numeric"></a>

```typescript
public readonly numeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideSpecial`<sup>Required</sup> <a name="overrideSpecial" id="@cdktf/provider-random.password.Password.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* string

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktf/provider-random.password.Password.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktf/provider-random.password.Password.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.password.Password.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordConfig <a name="PasswordConfig" id="@cdktf/provider-random.password.PasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.password.PasswordConfig.Initializer"></a>

```typescript
import { password } from '@cdktf/provider-random'

const passwordConfig: password.PasswordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.length">length</a></code> | <code>number</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lower">lower</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minLower">minLower</a></code> | <code>number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minNumeric">minNumeric</a></code> | <code>number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minSpecial">minSpecial</a></code> | <code>number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minUpper">minUpper</a></code> | <code>number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.number">number</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.numeric">numeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial">overrideSpecial</a></code> | <code>string</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.special">special</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.upper">upper</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.PasswordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.PasswordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.password.PasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.password.PasswordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.PasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.PasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.PasswordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.PasswordConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#length Password#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.password.PasswordConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#keepers Password#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.password.PasswordConfig.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#lower Password#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktf/provider-random.password.PasswordConfig.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#min_lower Password#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktf/provider-random.password.PasswordConfig.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#min_numeric Password#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#min_special Password#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktf/provider-random.password.PasswordConfig.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#min_upper Password#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.password.PasswordConfig.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `number`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#number Password#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.password.PasswordConfig.property.numeric"></a>

```typescript
public readonly numeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#numeric Password#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* string

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#override_special Password#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.password.PasswordConfig.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#special Password#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.password.PasswordConfig.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/password#upper Password#upper}

---



