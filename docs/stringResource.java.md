# `random_string`

Refer to the Terraform Registory for docs: [`random_string`](https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string).

# `stringResource` Submodule <a name="`stringResource` Submodule" id="@cdktf/provider-random.stringResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StringResource <a name="StringResource" id="@cdktf/provider-random.stringResource.StringResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string random_string}.

#### Initializers <a name="Initializers" id="@cdktf/provider-random.stringResource.StringResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.string_resource.StringResource;

StringResource.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lower">lower</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.number">number</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.numeric">numeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.special">special</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.upper">upper</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.length"></a>

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.keepers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.lower"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#lower StringResource#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minLower"></a>

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_lower StringResource#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minNumeric"></a>

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minSpecial"></a>

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_special StringResource#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.minUpper"></a>

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.number"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#number StringResource#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.numeric"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#numeric StringResource#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.overrideSpecial"></a>

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.special"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResource.Initializer.parameter.upper"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#upper StringResource#upper}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-random.stringResource.StringResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-random.stringResource.StringResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-random.stringResource.StringResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-random.stringResource.StringResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-random.stringResource.StringResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-random.stringResource.StringResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetKeepers` <a name="resetKeepers" id="@cdktf/provider-random.stringResource.StringResource.resetKeepers"></a>

```java
public void resetKeepers()
```

##### `resetLower` <a name="resetLower" id="@cdktf/provider-random.stringResource.StringResource.resetLower"></a>

```java
public void resetLower()
```

##### `resetMinLower` <a name="resetMinLower" id="@cdktf/provider-random.stringResource.StringResource.resetMinLower"></a>

```java
public void resetMinLower()
```

##### `resetMinNumeric` <a name="resetMinNumeric" id="@cdktf/provider-random.stringResource.StringResource.resetMinNumeric"></a>

```java
public void resetMinNumeric()
```

##### `resetMinSpecial` <a name="resetMinSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetMinSpecial"></a>

```java
public void resetMinSpecial()
```

##### `resetMinUpper` <a name="resetMinUpper" id="@cdktf/provider-random.stringResource.StringResource.resetMinUpper"></a>

```java
public void resetMinUpper()
```

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-random.stringResource.StringResource.resetNumber"></a>

```java
public void resetNumber()
```

##### `resetNumeric` <a name="resetNumeric" id="@cdktf/provider-random.stringResource.StringResource.resetNumeric"></a>

```java
public void resetNumeric()
```

##### `resetOverrideSpecial` <a name="resetOverrideSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetOverrideSpecial"></a>

```java
public void resetOverrideSpecial()
```

##### `resetSpecial` <a name="resetSpecial" id="@cdktf/provider-random.stringResource.StringResource.resetSpecial"></a>

```java
public void resetSpecial()
```

##### `resetUpper` <a name="resetUpper" id="@cdktf/provider-random.stringResource.StringResource.resetUpper"></a>

```java
public void resetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-random.stringResource.StringResource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.string_resource.StringResource;

StringResource.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.string_resource.StringResource;

StringResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.stringResource.StringResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.string_resource.StringResource;

StringResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-random.stringResource.StringResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepersInput">keepersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lowerInput">lowerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLowerInput">minLowerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumericInput">minNumericInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput">minSpecialInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpperInput">minUpperInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numberInput">numberInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numericInput">numericInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput">overrideSpecialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.specialInput">specialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upperInput">upperInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.lower">lower</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.number">number</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.numeric">numeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.special">special</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.upper">upper</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-random.stringResource.StringResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-random.stringResource.StringResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-random.stringResource.StringResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-random.stringResource.StringResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-random.stringResource.StringResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-random.stringResource.StringResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.stringResource.StringResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.stringResource.StringResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-random.stringResource.StringResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-random.stringResource.StringResource.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `keepersInput`<sup>Optional</sup> <a name="keepersInput" id="@cdktf/provider-random.stringResource.StringResource.property.keepersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktf/provider-random.stringResource.StringResource.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `lowerInput`<sup>Optional</sup> <a name="lowerInput" id="@cdktf/provider-random.stringResource.StringResource.property.lowerInput"></a>

```java
public java.lang.Object getLowerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minLowerInput`<sup>Optional</sup> <a name="minLowerInput" id="@cdktf/provider-random.stringResource.StringResource.property.minLowerInput"></a>

```java
public java.lang.Number getMinLowerInput();
```

- *Type:* java.lang.Number

---

##### `minNumericInput`<sup>Optional</sup> <a name="minNumericInput" id="@cdktf/provider-random.stringResource.StringResource.property.minNumericInput"></a>

```java
public java.lang.Number getMinNumericInput();
```

- *Type:* java.lang.Number

---

##### `minSpecialInput`<sup>Optional</sup> <a name="minSpecialInput" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecialInput"></a>

```java
public java.lang.Number getMinSpecialInput();
```

- *Type:* java.lang.Number

---

##### `minUpperInput`<sup>Optional</sup> <a name="minUpperInput" id="@cdktf/provider-random.stringResource.StringResource.property.minUpperInput"></a>

```java
public java.lang.Number getMinUpperInput();
```

- *Type:* java.lang.Number

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-random.stringResource.StringResource.property.numberInput"></a>

```java
public java.lang.Object getNumberInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numericInput`<sup>Optional</sup> <a name="numericInput" id="@cdktf/provider-random.stringResource.StringResource.property.numericInput"></a>

```java
public java.lang.Object getNumericInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="overrideSpecialInput" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecialInput"></a>

```java
public java.lang.String getOverrideSpecialInput();
```

- *Type:* java.lang.String

---

##### `specialInput`<sup>Optional</sup> <a name="specialInput" id="@cdktf/provider-random.stringResource.StringResource.property.specialInput"></a>

```java
public java.lang.Object getSpecialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upperInput`<sup>Optional</sup> <a name="upperInput" id="@cdktf/provider-random.stringResource.StringResource.property.upperInput"></a>

```java
public java.lang.Object getUpperInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResource.property.keepers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResource.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResource.property.lower"></a>

```java
public java.lang.Object getLower();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minLower`<sup>Required</sup> <a name="minLower" id="@cdktf/provider-random.stringResource.StringResource.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

---

##### `minNumeric`<sup>Required</sup> <a name="minNumeric" id="@cdktf/provider-random.stringResource.StringResource.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

---

##### `minSpecial`<sup>Required</sup> <a name="minSpecial" id="@cdktf/provider-random.stringResource.StringResource.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

---

##### `minUpper`<sup>Required</sup> <a name="minUpper" id="@cdktf/provider-random.stringResource.StringResource.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResource.property.number"></a>

```java
public java.lang.Object getNumber();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResource.property.numeric"></a>

```java
public java.lang.Object getNumeric();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideSpecial`<sup>Required</sup> <a name="overrideSpecial" id="@cdktf/provider-random.stringResource.StringResource.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResource.property.special"></a>

```java
public java.lang.Object getSpecial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResource.property.upper"></a>

```java
public java.lang.Object getUpper();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-random.stringResource.StringResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-random.stringResource.StringResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StringResourceConfig <a name="StringResourceConfig" id="@cdktf/provider-random.stringResource.StringResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-random.stringResource.StringResourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.random_provider.string_resource.StringResourceConfig;

StringResourceConfig.builder()
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
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.lower">lower</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.number">number</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric">numeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include numeric characters in the result. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.special">special</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktf/provider-random.stringResource.StringResourceConfig.property.upper">upper</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.keepers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.lower"></a>

```java
public java.lang.Object getLower();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#lower StringResource#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_lower StringResource#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_special StringResource#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.number"></a>

```java
public java.lang.Object getNumber();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#number StringResource#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.numeric"></a>

```java
public java.lang.Object getNumeric();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include numeric characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#numeric StringResource#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.special"></a>

```java
public java.lang.Object getSpecial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktf/provider-random.stringResource.StringResourceConfig.property.upper"></a>

```java
public java.lang.Object getUpper();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.5.1/docs/resources/string#upper StringResource#upper}

---



