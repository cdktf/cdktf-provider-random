# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Id <a name="@cdktf/provider-random.Id"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/id.html random_id}.

#### Initializer <a name="@cdktf/provider-random.Id.Initializer"></a>

```typescript
import { Id } from '@cdktf/provider-random'

new Id(scope: Construct, id: string, config: IdConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.Id.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Id.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-random.Id.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.IdConfig`](#@cdktf/provider-random.IdConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.Id.resetKeepers"></a>

```typescript
public resetKeepers()
```

##### `resetPrefix` <a name="@cdktf/provider-random.Id.resetPrefix"></a>

```typescript
public resetPrefix()
```


#### Properties <a name="Properties"></a>

##### `b64Std`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.b64Std"></a>

- *Type:* `string`

---

##### `b64Url`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.b64Url"></a>

- *Type:* `string`

---

##### `byteLengthInput`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.byteLengthInput"></a>

- *Type:* `number`

---

##### `dec`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.dec"></a>

- *Type:* `string`

---

##### `hex`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.hex"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.id"></a>

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Id.property.keepersInput"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `prefixInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Id.property.prefixInput"></a>

- *Type:* `string`

---

##### `byteLength`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.byteLength"></a>

- *Type:* `number`

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `prefix`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.prefix"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Id.property.tfResourceType"></a>

- *Type:* `string`

---

### Integer <a name="@cdktf/provider-random.Integer"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/integer.html random_integer}.

#### Initializer <a name="@cdktf/provider-random.Integer.Initializer"></a>

```typescript
import { Integer } from '@cdktf/provider-random'

new Integer(scope: Construct, id: string, config: IntegerConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.IntegerConfig`](#@cdktf/provider-random.IntegerConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.Integer.resetKeepers"></a>

```typescript
public resetKeepers()
```

##### `resetSeed` <a name="@cdktf/provider-random.Integer.resetSeed"></a>

```typescript
public resetSeed()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.id"></a>

- *Type:* `string`

---

##### `maxInput`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.maxInput"></a>

- *Type:* `number`

---

##### `minInput`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.minInput"></a>

- *Type:* `number`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.result"></a>

- *Type:* `number`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Integer.property.keepersInput"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `seedInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Integer.property.seedInput"></a>

- *Type:* `string`

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `max`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.max"></a>

- *Type:* `number`

---

##### `min`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.min"></a>

- *Type:* `number`

---

##### `seed`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.seed"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Integer.property.tfResourceType"></a>

- *Type:* `string`

---

### Password <a name="@cdktf/provider-random.Password"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/password.html random_password}.

#### Initializer <a name="@cdktf/provider-random.Password.Initializer"></a>

```typescript
import { Password } from '@cdktf/provider-random'

new Password(scope: Construct, id: string, config: PasswordConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.Password.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Password.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-random.Password.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.PasswordConfig`](#@cdktf/provider-random.PasswordConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.Password.resetKeepers"></a>

```typescript
public resetKeepers()
```

##### `resetLower` <a name="@cdktf/provider-random.Password.resetLower"></a>

```typescript
public resetLower()
```

##### `resetMinLower` <a name="@cdktf/provider-random.Password.resetMinLower"></a>

```typescript
public resetMinLower()
```

##### `resetMinNumeric` <a name="@cdktf/provider-random.Password.resetMinNumeric"></a>

```typescript
public resetMinNumeric()
```

##### `resetMinSpecial` <a name="@cdktf/provider-random.Password.resetMinSpecial"></a>

```typescript
public resetMinSpecial()
```

##### `resetMinUpper` <a name="@cdktf/provider-random.Password.resetMinUpper"></a>

```typescript
public resetMinUpper()
```

##### `resetNumber` <a name="@cdktf/provider-random.Password.resetNumber"></a>

```typescript
public resetNumber()
```

##### `resetOverrideSpecial` <a name="@cdktf/provider-random.Password.resetOverrideSpecial"></a>

```typescript
public resetOverrideSpecial()
```

##### `resetSpecial` <a name="@cdktf/provider-random.Password.resetSpecial"></a>

```typescript
public resetSpecial()
```

##### `resetUpper` <a name="@cdktf/provider-random.Password.resetUpper"></a>

```typescript
public resetUpper()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.id"></a>

- *Type:* `string`

---

##### `lengthInput`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.lengthInput"></a>

- *Type:* `number`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.result"></a>

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.keepersInput"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `lowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.lowerInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minLowerInput"></a>

- *Type:* `number`

---

##### `minNumericInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minNumericInput"></a>

- *Type:* `number`

---

##### `minSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minSpecialInput"></a>

- *Type:* `number`

---

##### `minUpperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minUpperInput"></a>

- *Type:* `number`

---

##### `numberInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.numberInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.overrideSpecialInput"></a>

- *Type:* `string`

---

##### `specialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.specialInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.upperInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.length"></a>

- *Type:* `number`

---

##### `lower`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.lower"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLower`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minLower"></a>

- *Type:* `number`

---

##### `minNumeric`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minNumeric"></a>

- *Type:* `number`

---

##### `minSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minSpecial"></a>

- *Type:* `number`

---

##### `minUpper`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minUpper"></a>

- *Type:* `number`

---

##### `number`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.number"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.overrideSpecial"></a>

- *Type:* `string`

---

##### `special`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.special"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upper`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.upper"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Password.property.tfResourceType"></a>

- *Type:* `string`

---

### Pet <a name="@cdktf/provider-random.Pet"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/pet.html random_pet}.

#### Initializer <a name="@cdktf/provider-random.Pet.Initializer"></a>

```typescript
import { Pet } from '@cdktf/provider-random'

new Pet(scope: Construct, id: string, config?: PetConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.PetConfig`](#@cdktf/provider-random.PetConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.Pet.resetKeepers"></a>

```typescript
public resetKeepers()
```

##### `resetLength` <a name="@cdktf/provider-random.Pet.resetLength"></a>

```typescript
public resetLength()
```

##### `resetPrefix` <a name="@cdktf/provider-random.Pet.resetPrefix"></a>

```typescript
public resetPrefix()
```

##### `resetSeparator` <a name="@cdktf/provider-random.Pet.resetSeparator"></a>

```typescript
public resetSeparator()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.id"></a>

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.keepersInput"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `lengthInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.lengthInput"></a>

- *Type:* `number`

---

##### `prefixInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.prefixInput"></a>

- *Type:* `string`

---

##### `separatorInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.separatorInput"></a>

- *Type:* `string`

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.length"></a>

- *Type:* `number`

---

##### `prefix`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.prefix"></a>

- *Type:* `string`

---

##### `separator`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.separator"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Pet.property.tfResourceType"></a>

- *Type:* `string`

---

### RandomProvider <a name="@cdktf/provider-random.RandomProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/random random}.

#### Initializer <a name="@cdktf/provider-random.RandomProvider.Initializer"></a>

```typescript
import { RandomProvider } from '@cdktf/provider-random'

new RandomProvider(scope: Construct, id: string, config?: RandomProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.RandomProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.RandomProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-random.RandomProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.RandomProviderConfig`](#@cdktf/provider-random.RandomProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-random.RandomProvider.resetAlias"></a>

```typescript
public resetAlias()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-random.RandomProvider.property.aliasInput"></a>

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-random.RandomProvider.property.alias"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.RandomProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### Shuffle <a name="@cdktf/provider-random.Shuffle"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/shuffle.html random_shuffle}.

#### Initializer <a name="@cdktf/provider-random.Shuffle.Initializer"></a>

```typescript
import { Shuffle } from '@cdktf/provider-random'

new Shuffle(scope: Construct, id: string, config: ShuffleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.ShuffleConfig`](#@cdktf/provider-random.ShuffleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.Shuffle.resetKeepers"></a>

```typescript
public resetKeepers()
```

##### `resetResultCount` <a name="@cdktf/provider-random.Shuffle.resetResultCount"></a>

```typescript
public resetResultCount()
```

##### `resetSeed` <a name="@cdktf/provider-random.Shuffle.resetSeed"></a>

```typescript
public resetSeed()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.id"></a>

- *Type:* `string`

---

##### `inputInput`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.inputInput"></a>

- *Type:* `string`[]

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.result"></a>

- *Type:* `string`[]

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Shuffle.property.keepersInput"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `resultCountInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Shuffle.property.resultCountInput"></a>

- *Type:* `number`

---

##### `seedInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Shuffle.property.seedInput"></a>

- *Type:* `string`

---

##### `input`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.input"></a>

- *Type:* `string`[]

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `resultCount`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.resultCount"></a>

- *Type:* `number`

---

##### `seed`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.seed"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Shuffle.property.tfResourceType"></a>

- *Type:* `string`

---

### String <a name="@cdktf/provider-random.String"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/string.html random_string}.

#### Initializer <a name="@cdktf/provider-random.String.Initializer"></a>

```typescript
import { String } from '@cdktf/provider-random'

new String(scope: Construct, id: string, config: StringConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.String.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.String.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-random.String.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.StringConfig`](#@cdktf/provider-random.StringConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.String.resetKeepers"></a>

```typescript
public resetKeepers()
```

##### `resetLower` <a name="@cdktf/provider-random.String.resetLower"></a>

```typescript
public resetLower()
```

##### `resetMinLower` <a name="@cdktf/provider-random.String.resetMinLower"></a>

```typescript
public resetMinLower()
```

##### `resetMinNumeric` <a name="@cdktf/provider-random.String.resetMinNumeric"></a>

```typescript
public resetMinNumeric()
```

##### `resetMinSpecial` <a name="@cdktf/provider-random.String.resetMinSpecial"></a>

```typescript
public resetMinSpecial()
```

##### `resetMinUpper` <a name="@cdktf/provider-random.String.resetMinUpper"></a>

```typescript
public resetMinUpper()
```

##### `resetNumber` <a name="@cdktf/provider-random.String.resetNumber"></a>

```typescript
public resetNumber()
```

##### `resetOverrideSpecial` <a name="@cdktf/provider-random.String.resetOverrideSpecial"></a>

```typescript
public resetOverrideSpecial()
```

##### `resetSpecial` <a name="@cdktf/provider-random.String.resetSpecial"></a>

```typescript
public resetSpecial()
```

##### `resetUpper` <a name="@cdktf/provider-random.String.resetUpper"></a>

```typescript
public resetUpper()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.id"></a>

- *Type:* `string`

---

##### `lengthInput`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.lengthInput"></a>

- *Type:* `number`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.result"></a>

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.keepersInput"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `lowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.lowerInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.minLowerInput"></a>

- *Type:* `number`

---

##### `minNumericInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.minNumericInput"></a>

- *Type:* `number`

---

##### `minSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.minSpecialInput"></a>

- *Type:* `number`

---

##### `minUpperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.minUpperInput"></a>

- *Type:* `number`

---

##### `numberInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.numberInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.overrideSpecialInput"></a>

- *Type:* `string`

---

##### `specialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.specialInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.String.property.upperInput"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.length"></a>

- *Type:* `number`

---

##### `lower`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.lower"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLower`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.minLower"></a>

- *Type:* `number`

---

##### `minNumeric`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.minNumeric"></a>

- *Type:* `number`

---

##### `minSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.minSpecial"></a>

- *Type:* `number`

---

##### `minUpper`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.minUpper"></a>

- *Type:* `number`

---

##### `number`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.number"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.overrideSpecial"></a>

- *Type:* `string`

---

##### `special`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.special"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upper`<sup>Required</sup> <a name="@cdktf/provider-random.String.property.upper"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.String.property.tfResourceType"></a>

- *Type:* `string`

---

### Uuid <a name="@cdktf/provider-random.Uuid"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/uuid.html random_uuid}.

#### Initializer <a name="@cdktf/provider-random.Uuid.Initializer"></a>

```typescript
import { Uuid } from '@cdktf/provider-random'

new Uuid(scope: Construct, id: string, config?: UuidConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.Uuid.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Uuid.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-random.Uuid.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.UuidConfig`](#@cdktf/provider-random.UuidConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.Uuid.resetKeepers"></a>

```typescript
public resetKeepers()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Uuid.property.id"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Uuid.property.result"></a>

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Uuid.property.keepersInput"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Uuid.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Uuid.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### IdConfig <a name="@cdktf/provider-random.IdConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { IdConfig } from '@cdktf/provider-random'

const idConfig: IdConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `byteLength`<sup>Required</sup> <a name="@cdktf/provider-random.IdConfig.property.byteLength"></a>

- *Type:* `number`

The number of random bytes to produce. The minimum value is 1, which produces eight bits of randomness.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id.html#byte_length Id#byte_length}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.keepers"></a>

- *Type:* {[ key: string ]: `string`} | [`cdktf.IResolvable`](#cdktf.IResolvable)

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id.html#keepers Id#keepers}

---

##### `prefix`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.prefix"></a>

- *Type:* `string`

Arbitrary string to prefix the output value with.

This string is supplied as-is, meaning it is not guaranteed to be URL-safe or base64 encoded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id.html#prefix Id#prefix}

---

### IntegerConfig <a name="@cdktf/provider-random.IntegerConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { IntegerConfig } from '@cdktf/provider-random'

const integerConfig: IntegerConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `max`<sup>Required</sup> <a name="@cdktf/provider-random.IntegerConfig.property.max"></a>

- *Type:* `number`

The maximum inclusive value of the range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#max Integer#max}

---

##### `min`<sup>Required</sup> <a name="@cdktf/provider-random.IntegerConfig.property.min"></a>

- *Type:* `number`

The minimum inclusive value of the range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#min Integer#min}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#keepers Integer#keepers}

---

##### `seed`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.seed"></a>

- *Type:* `string`

A custom seed to always produce the same value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#seed Integer#seed}

---

### PasswordConfig <a name="@cdktf/provider-random.PasswordConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PasswordConfig } from '@cdktf/provider-random'

const passwordConfig: PasswordConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.PasswordConfig.property.length"></a>

- *Type:* `number`

The length of the string desired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#length Password#length}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#keepers Password#keepers}

---

##### `lower`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.lower"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#lower Password#lower}

---

##### `minLower`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minLower"></a>

- *Type:* `number`

Minimum number of lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#min_lower Password#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minNumeric"></a>

- *Type:* `number`

Minimum number of numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#min_numeric Password#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minSpecial"></a>

- *Type:* `number`

Minimum number of special characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#min_special Password#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minUpper"></a>

- *Type:* `number`

Minimum number of uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#min_upper Password#min_upper}

---

##### `number`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.number"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#number Password#number}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.overrideSpecial"></a>

- *Type:* `string`

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#override_special Password#override_special}

---

##### `special`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.special"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#special Password#special}

---

##### `upper`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.upper"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password.html#upper Password#upper}

---

### PetConfig <a name="@cdktf/provider-random.PetConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PetConfig } from '@cdktf/provider-random'

const petConfig: PetConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#keepers Pet#keepers}

---

##### `length`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.length"></a>

- *Type:* `number`

The length (in words) of the pet name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#length Pet#length}

---

##### `prefix`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.prefix"></a>

- *Type:* `string`

A string to prefix the name with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#prefix Pet#prefix}

---

##### `separator`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.separator"></a>

- *Type:* `string`

The character to separate words in the pet name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#separator Pet#separator}

---

### RandomProviderConfig <a name="@cdktf/provider-random.RandomProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RandomProviderConfig } from '@cdktf/provider-random'

const randomProviderConfig: RandomProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-random.RandomProviderConfig.property.alias"></a>

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random#alias RandomProvider#alias}

---

### ShuffleConfig <a name="@cdktf/provider-random.ShuffleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ShuffleConfig } from '@cdktf/provider-random'

const shuffleConfig: ShuffleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `input`<sup>Required</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.input"></a>

- *Type:* `string`[]

The list of strings to shuffle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#input Shuffle#input}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#keepers Shuffle#keepers}

---

##### `resultCount`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.resultCount"></a>

- *Type:* `number`

The number of results to return.

Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#result_count Shuffle#result_count}

---

##### `seed`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.seed"></a>

- *Type:* `string`

Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.

*Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#seed Shuffle#seed}

---

### StringConfig <a name="@cdktf/provider-random.StringConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StringConfig } from '@cdktf/provider-random'

const stringConfig: StringConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.StringConfig.property.length"></a>

- *Type:* `number`

The length of the string desired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#length String#length}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#keepers String#keepers}

---

##### `lower`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.lower"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#lower String#lower}

---

##### `minLower`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.minLower"></a>

- *Type:* `number`

Minimum number of lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_lower String#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.minNumeric"></a>

- *Type:* `number`

Minimum number of numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_numeric String#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.minSpecial"></a>

- *Type:* `number`

Minimum number of special characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_special String#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.minUpper"></a>

- *Type:* `number`

Minimum number of uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_upper String#min_upper}

---

##### `number`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.number"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#number String#number}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.overrideSpecial"></a>

- *Type:* `string`

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#override_special String#override_special}

---

##### `special`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.special"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#special String#special}

---

##### `upper`<sup>Optional</sup> <a name="@cdktf/provider-random.StringConfig.property.upper"></a>

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#upper String#upper}

---

### UuidConfig <a name="@cdktf/provider-random.UuidConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UuidConfig } from '@cdktf/provider-random'

const uuidConfig: UuidConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.keepers"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/uuid.html#keepers Uuid#keepers}

---



