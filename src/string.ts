// https://www.terraform.io/docs/providers/random/r/string.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#keepers String#keepers}
  */
  readonly keepers?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The length of the string desired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#length String#length}
  */
  readonly length: number;
  /**
  * Include lowercase alphabet characters in the result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#lower String#lower}
  */
  readonly lower?: boolean | cdktf.IResolvable;
  /**
  * Minimum number of lowercase alphabet characters in the result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_lower String#min_lower}
  */
  readonly minLower?: number;
  /**
  * Minimum number of numeric characters in the result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_numeric String#min_numeric}
  */
  readonly minNumeric?: number;
  /**
  * Minimum number of special characters in the result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_special String#min_special}
  */
  readonly minSpecial?: number;
  /**
  * Minimum number of uppercase alphabet characters in the result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_upper String#min_upper}
  */
  readonly minUpper?: number;
  /**
  * Include numeric characters in the result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#number String#number}
  */
  readonly number?: boolean | cdktf.IResolvable;
  /**
  * Supply your own list of special characters to use for string generation.  This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#override_special String#override_special}
  */
  readonly overrideSpecial?: string;
  /**
  * Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#special String#special}
  */
  readonly special?: boolean | cdktf.IResolvable;
  /**
  * Include uppercase alphabet characters in the result.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#upper String#upper}
  */
  readonly upper?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/random/r/string.html random_string}
*/
export class String extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "random_string";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/random/r/string.html random_string} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StringConfig
  */
  public constructor(scope: Construct, id: string, config: StringConfig) {
    super(scope, id, {
      terraformResourceType: 'random_string',
      terraformGeneratorMetadata: {
        providerName: 'random'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keepers = config.keepers;
    this._length = config.length;
    this._lower = config.lower;
    this._minLower = config.minLower;
    this._minNumeric = config.minNumeric;
    this._minSpecial = config.minSpecial;
    this._minUpper = config.minUpper;
    this._number = config.number;
    this._overrideSpecial = config.overrideSpecial;
    this._special = config.special;
    this._upper = config.upper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keepers - computed: false, optional: true, required: false
  private _keepers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get keepers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('keepers') as any;
  }
  public set keepers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length
  }

  // lower - computed: false, optional: true, required: false
  private _lower?: boolean | cdktf.IResolvable | undefined; 
  public get lower() {
    return this.getBooleanAttribute('lower') as any;
  }
  public set lower(value: boolean | cdktf.IResolvable | undefined) {
    this._lower = value;
  }
  public resetLower() {
    this._lower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInput() {
    return this._lower
  }

  // min_lower - computed: false, optional: true, required: false
  private _minLower?: number | undefined; 
  public get minLower() {
    return this.getNumberAttribute('min_lower');
  }
  public set minLower(value: number | undefined) {
    this._minLower = value;
  }
  public resetMinLower() {
    this._minLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowerInput() {
    return this._minLower
  }

  // min_numeric - computed: false, optional: true, required: false
  private _minNumeric?: number | undefined; 
  public get minNumeric() {
    return this.getNumberAttribute('min_numeric');
  }
  public set minNumeric(value: number | undefined) {
    this._minNumeric = value;
  }
  public resetMinNumeric() {
    this._minNumeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumericInput() {
    return this._minNumeric
  }

  // min_special - computed: false, optional: true, required: false
  private _minSpecial?: number | undefined; 
  public get minSpecial() {
    return this.getNumberAttribute('min_special');
  }
  public set minSpecial(value: number | undefined) {
    this._minSpecial = value;
  }
  public resetMinSpecial() {
    this._minSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialInput() {
    return this._minSpecial
  }

  // min_upper - computed: false, optional: true, required: false
  private _minUpper?: number | undefined; 
  public get minUpper() {
    return this.getNumberAttribute('min_upper');
  }
  public set minUpper(value: number | undefined) {
    this._minUpper = value;
  }
  public resetMinUpper() {
    this._minUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpperInput() {
    return this._minUpper
  }

  // number - computed: false, optional: true, required: false
  private _number?: boolean | cdktf.IResolvable | undefined; 
  public get number() {
    return this.getBooleanAttribute('number') as any;
  }
  public set number(value: boolean | cdktf.IResolvable | undefined) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number
  }

  // override_special - computed: false, optional: true, required: false
  private _overrideSpecial?: string | undefined; 
  public get overrideSpecial() {
    return this.getStringAttribute('override_special');
  }
  public set overrideSpecial(value: string | undefined) {
    this._overrideSpecial = value;
  }
  public resetOverrideSpecial() {
    this._overrideSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSpecialInput() {
    return this._overrideSpecial
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // special - computed: false, optional: true, required: false
  private _special?: boolean | cdktf.IResolvable | undefined; 
  public get special() {
    return this.getBooleanAttribute('special') as any;
  }
  public set special(value: boolean | cdktf.IResolvable | undefined) {
    this._special = value;
  }
  public resetSpecial() {
    this._special = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialInput() {
    return this._special
  }

  // upper - computed: false, optional: true, required: false
  private _upper?: boolean | cdktf.IResolvable | undefined; 
  public get upper() {
    return this.getBooleanAttribute('upper') as any;
  }
  public set upper(value: boolean | cdktf.IResolvable | undefined) {
    this._upper = value;
  }
  public resetUpper() {
    this._upper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInput() {
    return this._upper
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keepers: cdktf.hashMapper(cdktf.anyToTerraform)(this._keepers),
      length: cdktf.numberToTerraform(this._length),
      lower: cdktf.booleanToTerraform(this._lower),
      min_lower: cdktf.numberToTerraform(this._minLower),
      min_numeric: cdktf.numberToTerraform(this._minNumeric),
      min_special: cdktf.numberToTerraform(this._minSpecial),
      min_upper: cdktf.numberToTerraform(this._minUpper),
      number: cdktf.booleanToTerraform(this._number),
      override_special: cdktf.stringToTerraform(this._overrideSpecial),
      special: cdktf.booleanToTerraform(this._special),
      upper: cdktf.booleanToTerraform(this._upper),
    };
  }
}
