# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Id <a name="@cdktf/provider-random.Id"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/id random_id}.

#### Initializers <a name="@cdktf/provider-random.Id.Initializer"></a>

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

```typescript
public readonly b64Std: string;
```

- *Type:* `string`

---

##### `b64Url`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.b64Url"></a>

```typescript
public readonly b64Url: string;
```

- *Type:* `string`

---

##### `dec`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.dec"></a>

```typescript
public readonly dec: string;
```

- *Type:* `string`

---

##### `hex`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.hex"></a>

```typescript
public readonly hex: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `byteLengthInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Id.property.byteLengthInput"></a>

```typescript
public readonly byteLengthInput: number;
```

- *Type:* `number`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Id.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `prefixInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Id.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* `string`

---

##### `byteLength`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.byteLength"></a>

```typescript
public readonly byteLength: number;
```

- *Type:* `number`

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `prefix`<sup>Required</sup> <a name="@cdktf/provider-random.Id.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Id.property.tfResourceType"></a>

- *Type:* `string`

---

### Integer <a name="@cdktf/provider-random.Integer"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/integer random_integer}.

#### Initializers <a name="@cdktf/provider-random.Integer.Initializer"></a>

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

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.result"></a>

```typescript
public readonly result: number;
```

- *Type:* `number`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Integer.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `maxInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Integer.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* `number`

---

##### `minInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Integer.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* `number`

---

##### `seedInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Integer.property.seedInput"></a>

```typescript
public readonly seedInput: string;
```

- *Type:* `string`

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `max`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* `number`

---

##### `min`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* `number`

---

##### `seed`<sup>Required</sup> <a name="@cdktf/provider-random.Integer.property.seed"></a>

```typescript
public readonly seed: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Integer.property.tfResourceType"></a>

- *Type:* `string`

---

### Password <a name="@cdktf/provider-random.Password"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/password random_password}.

#### Initializers <a name="@cdktf/provider-random.Password.Initializer"></a>

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

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `lengthInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* `number`

---

##### `lowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.lowerInput"></a>

```typescript
public readonly lowerInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minLowerInput"></a>

```typescript
public readonly minLowerInput: number;
```

- *Type:* `number`

---

##### `minNumericInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minNumericInput"></a>

```typescript
public readonly minNumericInput: number;
```

- *Type:* `number`

---

##### `minSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minSpecialInput"></a>

```typescript
public readonly minSpecialInput: number;
```

- *Type:* `number`

---

##### `minUpperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.minUpperInput"></a>

```typescript
public readonly minUpperInput: number;
```

- *Type:* `number`

---

##### `numberInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.numberInput"></a>

```typescript
public readonly numberInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.overrideSpecialInput"></a>

```typescript
public readonly overrideSpecialInput: string;
```

- *Type:* `string`

---

##### `specialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.specialInput"></a>

```typescript
public readonly specialInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Password.property.upperInput"></a>

```typescript
public readonly upperInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* `number`

---

##### `lower`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLower`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* `number`

---

##### `minNumeric`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* `number`

---

##### `minSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* `number`

---

##### `minUpper`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* `number`

---

##### `number`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* `string`

---

##### `special`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upper`<sup>Required</sup> <a name="@cdktf/provider-random.Password.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Password.property.tfResourceType"></a>

- *Type:* `string`

---

### Pet <a name="@cdktf/provider-random.Pet"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/pet random_pet}.

#### Initializers <a name="@cdktf/provider-random.Pet.Initializer"></a>

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

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `lengthInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* `number`

---

##### `prefixInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* `string`

---

##### `separatorInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Pet.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* `string`

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* `number`

---

##### `prefix`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* `string`

---

##### `separator`<sup>Required</sup> <a name="@cdktf/provider-random.Pet.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Pet.property.tfResourceType"></a>

- *Type:* `string`

---

### RandomProvider <a name="@cdktf/provider-random.RandomProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/random random}.

#### Initializers <a name="@cdktf/provider-random.RandomProvider.Initializer"></a>

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

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-random.RandomProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.RandomProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### Shuffle <a name="@cdktf/provider-random.Shuffle"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/shuffle random_shuffle}.

#### Initializers <a name="@cdktf/provider-random.Shuffle.Initializer"></a>

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

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.result"></a>

```typescript
public readonly result: string[];
```

- *Type:* `string`[]

---

##### `inputInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Shuffle.property.inputInput"></a>

```typescript
public readonly inputInput: string[];
```

- *Type:* `string`[]

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Shuffle.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `resultCountInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Shuffle.property.resultCountInput"></a>

```typescript
public readonly resultCountInput: number;
```

- *Type:* `number`

---

##### `seedInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Shuffle.property.seedInput"></a>

```typescript
public readonly seedInput: string;
```

- *Type:* `string`

---

##### `input`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.input"></a>

```typescript
public readonly input: string[];
```

- *Type:* `string`[]

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `resultCount`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* `number`

---

##### `seed`<sup>Required</sup> <a name="@cdktf/provider-random.Shuffle.property.seed"></a>

```typescript
public readonly seed: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.Shuffle.property.tfResourceType"></a>

- *Type:* `string`

---

### StringResource <a name="@cdktf/provider-random.StringResource"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/string random_string}.

#### Initializers <a name="@cdktf/provider-random.StringResource.Initializer"></a>

```typescript
import { StringResource } from '@cdktf/provider-random'

new StringResource(scope: Construct, id: string, config: StringResourceConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.parameter.config"></a>

- *Type:* [`@cdktf/provider-random.StringResourceConfig`](#@cdktf/provider-random.StringResourceConfig)

---

#### Methods <a name="Methods"></a>

##### `resetKeepers` <a name="@cdktf/provider-random.StringResource.resetKeepers"></a>

```typescript
public resetKeepers()
```

##### `resetLower` <a name="@cdktf/provider-random.StringResource.resetLower"></a>

```typescript
public resetLower()
```

##### `resetMinLower` <a name="@cdktf/provider-random.StringResource.resetMinLower"></a>

```typescript
public resetMinLower()
```

##### `resetMinNumeric` <a name="@cdktf/provider-random.StringResource.resetMinNumeric"></a>

```typescript
public resetMinNumeric()
```

##### `resetMinSpecial` <a name="@cdktf/provider-random.StringResource.resetMinSpecial"></a>

```typescript
public resetMinSpecial()
```

##### `resetMinUpper` <a name="@cdktf/provider-random.StringResource.resetMinUpper"></a>

```typescript
public resetMinUpper()
```

##### `resetNumber` <a name="@cdktf/provider-random.StringResource.resetNumber"></a>

```typescript
public resetNumber()
```

##### `resetOverrideSpecial` <a name="@cdktf/provider-random.StringResource.resetOverrideSpecial"></a>

```typescript
public resetOverrideSpecial()
```

##### `resetSpecial` <a name="@cdktf/provider-random.StringResource.resetSpecial"></a>

```typescript
public resetSpecial()
```

##### `resetUpper` <a name="@cdktf/provider-random.StringResource.resetUpper"></a>

```typescript
public resetUpper()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `lengthInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* `number`

---

##### `lowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.lowerInput"></a>

```typescript
public readonly lowerInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLowerInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.minLowerInput"></a>

```typescript
public readonly minLowerInput: number;
```

- *Type:* `number`

---

##### `minNumericInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.minNumericInput"></a>

```typescript
public readonly minNumericInput: number;
```

- *Type:* `number`

---

##### `minSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.minSpecialInput"></a>

```typescript
public readonly minSpecialInput: number;
```

- *Type:* `number`

---

##### `minUpperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.minUpperInput"></a>

```typescript
public readonly minUpperInput: number;
```

- *Type:* `number`

---

##### `numberInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.numberInput"></a>

```typescript
public readonly numberInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.overrideSpecialInput"></a>

```typescript
public readonly overrideSpecialInput: string;
```

- *Type:* `string`

---

##### `specialInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.specialInput"></a>

```typescript
public readonly specialInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upperInput`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResource.property.upperInput"></a>

```typescript
public readonly upperInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* `number`

---

##### `lower`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `minLower`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* `number`

---

##### `minNumeric`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* `number`

---

##### `minSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* `number`

---

##### `minUpper`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* `number`

---

##### `number`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `overrideSpecial`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* `string`

---

##### `special`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `upper`<sup>Required</sup> <a name="@cdktf/provider-random.StringResource.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-random.StringResource.property.tfResourceType"></a>

- *Type:* `string`

---

### Uuid <a name="@cdktf/provider-random.Uuid"></a>

Represents a {@link https://www.terraform.io/docs/providers/random/r/uuid random_uuid}.

#### Initializers <a name="@cdktf/provider-random.Uuid.Initializer"></a>

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

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="@cdktf/provider-random.Uuid.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* `string`

---

##### `keepersInput`<sup>Optional</sup> <a name="@cdktf/provider-random.Uuid.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `keepers`<sup>Required</sup> <a name="@cdktf/provider-random.Uuid.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

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

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `byteLength`<sup>Required</sup> <a name="@cdktf/provider-random.IdConfig.property.byteLength"></a>

```typescript
public readonly byteLength: number;
```

- *Type:* `number`

The number of random bytes to produce. The minimum value is 1, which produces eight bits of randomness.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id#byte_length Id#byte_length}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id#keepers Id#keepers}

---

##### `prefix`<sup>Optional</sup> <a name="@cdktf/provider-random.IdConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* `string`

Arbitrary string to prefix the output value with.

This string is supplied as-is, meaning it is not guaranteed to be URL-safe or base64 encoded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id#prefix Id#prefix}

---

### IntegerConfig <a name="@cdktf/provider-random.IntegerConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { IntegerConfig } from '@cdktf/provider-random'

const integerConfig: IntegerConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `max`<sup>Required</sup> <a name="@cdktf/provider-random.IntegerConfig.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* `number`

The maximum inclusive value of the range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer#max Integer#max}

---

##### `min`<sup>Required</sup> <a name="@cdktf/provider-random.IntegerConfig.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* `number`

The minimum inclusive value of the range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer#min Integer#min}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer#keepers Integer#keepers}

---

##### `seed`<sup>Optional</sup> <a name="@cdktf/provider-random.IntegerConfig.property.seed"></a>

```typescript
public readonly seed: string;
```

- *Type:* `string`

A custom seed to always produce the same value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer#seed Integer#seed}

---

### PasswordConfig <a name="@cdktf/provider-random.PasswordConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PasswordConfig } from '@cdktf/provider-random'

const passwordConfig: PasswordConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.PasswordConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* `number`

The length of the string desired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#length Password#length}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#keepers Password#keepers}

---

##### `lower`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#lower Password#lower}

---

##### `minLower`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* `number`

Minimum number of lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_lower Password#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* `number`

Minimum number of numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_numeric Password#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* `number`

Minimum number of special characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_special Password#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* `number`

Minimum number of uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#min_upper Password#min_upper}

---

##### `number`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#number Password#number}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* `string`

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#override_special Password#override_special}

---

##### `special`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#special Password#special}

---

##### `upper`<sup>Optional</sup> <a name="@cdktf/provider-random.PasswordConfig.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/password#upper Password#upper}

---

### PetConfig <a name="@cdktf/provider-random.PetConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PetConfig } from '@cdktf/provider-random'

const petConfig: PetConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet#keepers Pet#keepers}

---

##### `length`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* `number`

The length (in words) of the pet name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet#length Pet#length}

---

##### `prefix`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* `string`

A string to prefix the name with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet#prefix Pet#prefix}

---

##### `separator`<sup>Optional</sup> <a name="@cdktf/provider-random.PetConfig.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* `string`

The character to separate words in the pet name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet#separator Pet#separator}

---

### RandomProviderConfig <a name="@cdktf/provider-random.RandomProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RandomProviderConfig } from '@cdktf/provider-random'

const randomProviderConfig: RandomProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-random.RandomProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

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

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `input`<sup>Required</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.input"></a>

```typescript
public readonly input: string[];
```

- *Type:* `string`[]

The list of strings to shuffle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle#input Shuffle#input}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle#keepers Shuffle#keepers}

---

##### `resultCount`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* `number`

The number of results to return.

Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle#result_count Shuffle#result_count}

---

##### `seed`<sup>Optional</sup> <a name="@cdktf/provider-random.ShuffleConfig.property.seed"></a>

```typescript
public readonly seed: string;
```

- *Type:* `string`

Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.

*Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle#seed Shuffle#seed}

---

### StringResourceConfig <a name="@cdktf/provider-random.StringResourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StringResourceConfig } from '@cdktf/provider-random'

const stringResourceConfig: StringResourceConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `length`<sup>Required</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* `number`

The length of the string desired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.lower"></a>

```typescript
public readonly lower: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#lower StringResource#lower}

---

##### `minLower`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.minLower"></a>

```typescript
public readonly minLower: number;
```

- *Type:* `number`

Minimum number of lowercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#min_lower StringResource#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.minNumeric"></a>

```typescript
public readonly minNumeric: number;
```

- *Type:* `number`

Minimum number of numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#min_numeric StringResource#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.minSpecial"></a>

```typescript
public readonly minSpecial: number;
```

- *Type:* `number`

Minimum number of special characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#min_special StringResource#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.minUpper"></a>

```typescript
public readonly minUpper: number;
```

- *Type:* `number`

Minimum number of uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.number"></a>

```typescript
public readonly number: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include numeric characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#number StringResource#number}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.overrideSpecial"></a>

```typescript
public readonly overrideSpecial: string;
```

- *Type:* `string`

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.special"></a>

```typescript
public readonly special: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="@cdktf/provider-random.StringResourceConfig.property.upper"></a>

```typescript
public readonly upper: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include uppercase alphabet characters in the result.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string#upper StringResource#upper}

---

### UuidConfig <a name="@cdktf/provider-random.UuidConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UuidConfig } from '@cdktf/provider-random'

const uuidConfig: UuidConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `keepers`<sup>Optional</sup> <a name="@cdktf/provider-random.UuidConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/uuid#keepers Uuid#keepers}

---



