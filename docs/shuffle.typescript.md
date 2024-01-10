# `shuffle` Submodule <a name="`shuffle` Submodule" id="@cdktf/provider-random.shuffle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Shuffle <a name="Shuffle" id="@cdktf/provider-random.shuffle.Shuffle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/shuffle random_shuffle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.shuffle.Shuffle.Initializer"></a>

```typescript
import { shuffle } from '@cdktf/provider-random'

new shuffle.Shuffle(scope: Construct, id: string, config: ShuffleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig">ShuffleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-random.shuffle.Shuffle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-random.shuffle.ShuffleConfig">ShuffleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetKeepers">resetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetResultCount">resetResultCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.resetSeed">resetSeed</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-random.shuffle.Shuffle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-random.shuffle.Shuffle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.shuffle.Shuffle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-random.shuffle.Shuffle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-random.shuffle.Shuffle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-random.shuffle.Shuffle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-random.shuffle.Shuffle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-random.shuffle.Shuffle.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.shuffle.Shuffle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-random.shuffle.Shuffle.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-random.shuffle.Shuffle.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.Shuffle.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.shuffle.Shuffle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-random.shuffle.Shuffle.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-random.shuffle.Shuffle.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.shuffle.Shuffle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-random.shuffle.Shuffle.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-random.shuffle.Shuffle.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeepers` <a name="resetKeepers" id="@cdktf/provider-random.shuffle.Shuffle.resetKeepers"></a>

```typescript
public resetKeepers(): void
```

##### `resetResultCount` <a name="resetResultCount" id="@cdktf/provider-random.shuffle.Shuffle.resetResultCount"></a>

```typescript
public resetResultCount(): void
```

##### `resetSeed` <a name="resetSeed" id="@cdktf/provider-random.shuffle.Shuffle.resetSeed"></a>

```typescript
public resetSeed(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Shuffle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-random.shuffle.Shuffle.isConstruct"></a>

```typescript
import { shuffle } from '@cdktf/provider-random'

shuffle.Shuffle.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement"></a>

```typescript
import { shuffle } from '@cdktf/provider-random'

shuffle.Shuffle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource"></a>

```typescript
import { shuffle } from '@cdktf/provider-random'

shuffle.Shuffle.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.shuffle.Shuffle.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport"></a>

```typescript
import { shuffle } from '@cdktf/provider-random'

shuffle.Shuffle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Shuffle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Shuffle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Shuffle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/shuffle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.Shuffle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Shuffle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.result">result</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.inputInput">inputInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepersInput">keepersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput">resultCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seedInput">seedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.input">input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.resultCount">resultCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.seed">seed</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.shuffle.Shuffle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-random.shuffle.Shuffle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.shuffle.Shuffle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-random.shuffle.Shuffle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-random.shuffle.Shuffle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.shuffle.Shuffle.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.shuffle.Shuffle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.shuffle.Shuffle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.shuffle.Shuffle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.shuffle.Shuffle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.Shuffle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.shuffle.Shuffle.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.shuffle.Shuffle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.shuffle.Shuffle.property.result"></a>

```typescript
public readonly result: string[];
```

- *Type:* string[]

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-random.shuffle.Shuffle.property.inputInput"></a>

```typescript
public readonly inputInput: string[];
```

- *Type:* string[]

---

##### `keepersInput`<sup>Optional</sup> <a name="keepersInput" id="@cdktf/provider-random.shuffle.Shuffle.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resultCountInput`<sup>Optional</sup> <a name="resultCountInput" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCountInput"></a>

```typescript
public readonly resultCountInput: number;
```

- *Type:* number

---

##### `seedInput`<sup>Optional</sup> <a name="seedInput" id="@cdktf/provider-random.shuffle.Shuffle.property.seedInput"></a>

```typescript
public readonly seedInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-random.shuffle.Shuffle.property.input"></a>

```typescript
public readonly input: string[];
```

- *Type:* string[]

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.shuffle.Shuffle.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resultCount`<sup>Required</sup> <a name="resultCount" id="@cdktf/provider-random.shuffle.Shuffle.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* number

---

##### `seed`<sup>Required</sup> <a name="seed" id="@cdktf/provider-random.shuffle.Shuffle.property.seed"></a>

```typescript
public readonly seed: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.shuffle.Shuffle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShuffleConfig <a name="ShuffleConfig" id="@cdktf/provider-random.shuffle.ShuffleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.shuffle.ShuffleConfig.Initializer"></a>

```typescript
import { shuffle } from '@cdktf/provider-random'

const shuffleConfig: shuffle.ShuffleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.input">input</a></code> | <code>string[]</code> | The list of strings to shuffle. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount">resultCount</a></code> | <code>number</code> | The number of results to return. |
| <code><a href="#@cdktf/provider-random.shuffle.ShuffleConfig.property.seed">seed</a></code> | <code>string</code> | Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.input"></a>

```typescript
public readonly input: string[];
```

- *Type:* string[]

The list of strings to shuffle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/shuffle#input Shuffle#input}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/shuffle#keepers Shuffle#keepers}

---

##### `resultCount`<sup>Optional</sup> <a name="resultCount" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* number

The number of results to return.

Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/shuffle#result_count Shuffle#result_count}

---

##### `seed`<sup>Optional</sup> <a name="seed" id="@cdktf/provider-random.shuffle.ShuffleConfig.property.seed"></a>

```typescript
public readonly seed: string;
```

- *Type:* string

Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.

**Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/shuffle#seed Shuffle#seed}

---



