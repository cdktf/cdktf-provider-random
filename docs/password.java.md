# `password` Submodule <a name="`password` Submodule" id="@cdktf/provider-random.password"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Password <a name="Password" id="@cdktf/provider-random.password.Password"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.password.Password.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.password.Password;

Password.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .length(java.lang.Number)
//  .keepers(java.util.Map<java.lang.String, java.lang.String>)
//  .lower(java.lang.Boolean)
//  .lower(IResolvable)
//  .minLower(java.lang.Number)
//  .minNumeric(java.lang.Number)
//  .minSpecial(java.lang.Number)
//  .minUpper(java.lang.Number)
//  .number(java.lang.Boolean)
//  .number(IResolvable)
//  .numeric(java.lang.Boolean)
//  .numeric(IResolvable)
//  .overrideSpecial(java.lang.String)
//  .special(java.lang.Boolean)
//  .special(IResolvable)
//  .upper(java.lang.Boolean)
//  .upper(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.lower">lower</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.number">number</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.numeric">numeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.special">special</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.Password.Initializer.parameter.upper">upper</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.password.Password.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.Password.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.Password.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.password.Password.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.password.Password.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.Password.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.Password.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.Password.Initializer.parameter.length"></a>

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#length Password#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.password.Password.Initializer.parameter.keepers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#keepers Password#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.password.Password.Initializer.parameter.lower"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#lower Password#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktf/provider-random.password.Password.Initializer.parameter.minLower"></a>

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_lower Password#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktf/provider-random.password.Password.Initializer.parameter.minNumeric"></a>

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_numeric Password#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktf/provider-random.password.Password.Initializer.parameter.minSpecial"></a>

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_special Password#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktf/provider-random.password.Password.Initializer.parameter.minUpper"></a>

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_upper Password#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.password.Password.Initializer.parameter.number"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `number`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#number Password#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.password.Password.Initializer.parameter.numeric"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#numeric Password#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktf/provider-random.password.Password.Initializer.parameter.overrideSpecial"></a>

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#override_special Password#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.password.Password.Initializer.parameter.special"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#special Password#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.password.Password.Initializer.parameter.upper"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#upper Password#upper}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-random.password.Password.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.password.Password.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.password.Password.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-random.password.Password.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-random.password.Password.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-random.password.Password.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-random.password.Password.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-random.password.Password.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-random.password.Password.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.password.Password.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-random.password.Password.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-random.password.Password.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-random.password.Password.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.password.Password.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-random.password.Password.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-random.password.Password.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-random.password.Password.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-random.password.Password.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-random.password.Password.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeepers` <a name="resetKeepers" id="@cdktf/provider-random.password.Password.resetKeepers"></a>

```java
public void resetKeepers()
```

##### `resetLower` <a name="resetLower" id="@cdktf/provider-random.password.Password.resetLower"></a>

```java
public void resetLower()
```

##### `resetMinLower` <a name="resetMinLower" id="@cdktf/provider-random.password.Password.resetMinLower"></a>

```java
public void resetMinLower()
```

##### `resetMinNumeric` <a name="resetMinNumeric" id="@cdktf/provider-random.password.Password.resetMinNumeric"></a>

```java
public void resetMinNumeric()
```

##### `resetMinSpecial` <a name="resetMinSpecial" id="@cdktf/provider-random.password.Password.resetMinSpecial"></a>

```java
public void resetMinSpecial()
```

##### `resetMinUpper` <a name="resetMinUpper" id="@cdktf/provider-random.password.Password.resetMinUpper"></a>

```java
public void resetMinUpper()
```

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-random.password.Password.resetNumber"></a>

```java
public void resetNumber()
```

##### `resetNumeric` <a name="resetNumeric" id="@cdktf/provider-random.password.Password.resetNumeric"></a>

```java
public void resetNumeric()
```

##### `resetOverrideSpecial` <a name="resetOverrideSpecial" id="@cdktf/provider-random.password.Password.resetOverrideSpecial"></a>

```java
public void resetOverrideSpecial()
```

##### `resetSpecial` <a name="resetSpecial" id="@cdktf/provider-random.password.Password.resetSpecial"></a>

```java
public void resetSpecial()
```

##### `resetUpper` <a name="resetUpper" id="@cdktf/provider-random.password.Password.resetUpper"></a>

```java
public void resetUpper()
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

```java
import com.hashicorp.cdktf.providers.random_provider.password.Password;

Password.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-random.password.Password.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.password.Password;

Password.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-random.password.Password.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.password.Password;

Password.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.password.Password.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-random.password.Password.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.password.Password;

Password.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Password.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Password to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Password that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Password to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.password.Password.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.bcryptHash">bcryptHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepersInput">keepersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lowerInput">lowerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLowerInput">minLowerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumericInput">minNumericInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecialInput">minSpecialInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpperInput">minUpperInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numberInput">numberInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numericInput">numericInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecialInput">overrideSpecialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.specialInput">specialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upperInput">upperInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.lower">lower</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.number">number</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.numeric">numeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.special">special</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.Password.property.upper">upper</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.password.Password.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-random.password.Password.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.password.Password.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-random.password.Password.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-random.password.Password.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-random.password.Password.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-random.password.Password.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.Password.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.Password.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.password.Password.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.password.Password.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.Password.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.Password.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.Password.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bcryptHash`<sup>Required</sup> <a name="bcryptHash" id="@cdktf/provider-random.password.Password.property.bcryptHash"></a>

```java
public java.lang.String getBcryptHash();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.password.Password.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.password.Password.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `keepersInput`<sup>Optional</sup> <a name="keepersInput" id="@cdktf/provider-random.password.Password.property.keepersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktf/provider-random.password.Password.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `lowerInput`<sup>Optional</sup> <a name="lowerInput" id="@cdktf/provider-random.password.Password.property.lowerInput"></a>

```java
public java.lang.Object getLowerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minLowerInput`<sup>Optional</sup> <a name="minLowerInput" id="@cdktf/provider-random.password.Password.property.minLowerInput"></a>

```java
public java.lang.Number getMinLowerInput();
```

- *Type:* java.lang.Number

---

##### `minNumericInput`<sup>Optional</sup> <a name="minNumericInput" id="@cdktf/provider-random.password.Password.property.minNumericInput"></a>

```java
public java.lang.Number getMinNumericInput();
```

- *Type:* java.lang.Number

---

##### `minSpecialInput`<sup>Optional</sup> <a name="minSpecialInput" id="@cdktf/provider-random.password.Password.property.minSpecialInput"></a>

```java
public java.lang.Number getMinSpecialInput();
```

- *Type:* java.lang.Number

---

##### `minUpperInput`<sup>Optional</sup> <a name="minUpperInput" id="@cdktf/provider-random.password.Password.property.minUpperInput"></a>

```java
public java.lang.Number getMinUpperInput();
```

- *Type:* java.lang.Number

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-random.password.Password.property.numberInput"></a>

```java
public java.lang.Object getNumberInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numericInput`<sup>Optional</sup> <a name="numericInput" id="@cdktf/provider-random.password.Password.property.numericInput"></a>

```java
public java.lang.Object getNumericInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="overrideSpecialInput" id="@cdktf/provider-random.password.Password.property.overrideSpecialInput"></a>

```java
public java.lang.String getOverrideSpecialInput();
```

- *Type:* java.lang.String

---

##### `specialInput`<sup>Optional</sup> <a name="specialInput" id="@cdktf/provider-random.password.Password.property.specialInput"></a>

```java
public java.lang.Object getSpecialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upperInput`<sup>Optional</sup> <a name="upperInput" id="@cdktf/provider-random.password.Password.property.upperInput"></a>

```java
public java.lang.Object getUpperInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.password.Password.property.keepers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.Password.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktf/provider-random.password.Password.property.lower"></a>

```java
public java.lang.Object getLower();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minLower`<sup>Required</sup> <a name="minLower" id="@cdktf/provider-random.password.Password.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

---

##### `minNumeric`<sup>Required</sup> <a name="minNumeric" id="@cdktf/provider-random.password.Password.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

---

##### `minSpecial`<sup>Required</sup> <a name="minSpecial" id="@cdktf/provider-random.password.Password.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

---

##### `minUpper`<sup>Required</sup> <a name="minUpper" id="@cdktf/provider-random.password.Password.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-random.password.Password.property.number"></a>

```java
public java.lang.Object getNumber();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktf/provider-random.password.Password.property.numeric"></a>

```java
public java.lang.Object getNumeric();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideSpecial`<sup>Required</sup> <a name="overrideSpecial" id="@cdktf/provider-random.password.Password.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktf/provider-random.password.Password.property.special"></a>

```java
public java.lang.Object getSpecial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktf/provider-random.password.Password.property.upper"></a>

```java
public java.lang.Object getUpper();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.Password.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.password.Password.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordConfig <a name="PasswordConfig" id="@cdktf/provider-random.password.PasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.password.PasswordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.password.PasswordConfig;

PasswordConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .length(java.lang.Number)
//  .keepers(java.util.Map<java.lang.String, java.lang.String>)
//  .lower(java.lang.Boolean)
//  .lower(IResolvable)
//  .minLower(java.lang.Number)
//  .minNumeric(java.lang.Number)
//  .minSpecial(java.lang.Number)
//  .minUpper(java.lang.Number)
//  .number(java.lang.Boolean)
//  .number(IResolvable)
//  .numeric(java.lang.Boolean)
//  .numeric(IResolvable)
//  .overrideSpecial(java.lang.String)
//  .special(java.lang.Boolean)
//  .special(IResolvable)
//  .upper(java.lang.Boolean)
//  .upper(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.lower">lower</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.number">number</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.numeric">numeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.special">special</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.password.PasswordConfig.property.upper">upper</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.password.PasswordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.password.PasswordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.password.PasswordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.password.PasswordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.password.PasswordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.password.PasswordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.password.PasswordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.password.PasswordConfig.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#length Password#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.password.PasswordConfig.property.keepers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#keepers Password#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.password.PasswordConfig.property.lower"></a>

```java
public java.lang.Object getLower();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#lower Password#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktf/provider-random.password.PasswordConfig.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_lower Password#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktf/provider-random.password.PasswordConfig.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_numeric Password#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_special Password#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktf/provider-random.password.PasswordConfig.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#min_upper Password#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.password.PasswordConfig.property.number"></a>

```java
public java.lang.Object getNumber();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `number`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#number Password#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.password.PasswordConfig.property.numeric"></a>

```java
public java.lang.Object getNumeric();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#numeric Password#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktf/provider-random.password.PasswordConfig.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#override_special Password#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.password.PasswordConfig.property.special"></a>

```java
public java.lang.Object getSpecial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#special Password#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.password.PasswordConfig.property.upper"></a>

```java
public java.lang.Object getUpper();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.2/docs/resources/password#upper Password#upper}

---



