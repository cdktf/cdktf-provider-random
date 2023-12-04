/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StringResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#keepers StringResource#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * The length of the string desired. The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#length StringResource#length}
  */
  readonly length: number;
  /**
  * Include lowercase alphabet characters in the result. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#lower StringResource#lower}
  */
  readonly lower?: boolean | cdktf.IResolvable;
  /**
  * Minimum number of lowercase alphabet characters in the result. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#min_lower StringResource#min_lower}
  */
  readonly minLower?: number;
  /**
  * Minimum number of numeric characters in the result. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#min_numeric StringResource#min_numeric}
  */
  readonly minNumeric?: number;
  /**
  * Minimum number of special characters in the result. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#min_special StringResource#min_special}
  */
  readonly minSpecial?: number;
  /**
  * Minimum number of uppercase alphabet characters in the result. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#min_upper StringResource#min_upper}
  */
  readonly minUpper?: number;
  /**
  * Include numeric characters in the result. Default value is `true`. **NOTE**: This is deprecated, use `numeric` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#number StringResource#number}
  */
  readonly number?: boolean | cdktf.IResolvable;
  /**
  * Include numeric characters in the result. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#numeric StringResource#numeric}
  */
  readonly numeric?: boolean | cdktf.IResolvable;
  /**
  * Supply your own list of special characters to use for string generation.  This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#override_special StringResource#override_special}
  */
  readonly overrideSpecial?: string;
  /**
  * Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#special StringResource#special}
  */
  readonly special?: boolean | cdktf.IResolvable;
  /**
  * Include uppercase alphabet characters in the result. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#upper StringResource#upper}
  */
  readonly upper?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string random_string}
*/
export class StringResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "random_string";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StringResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StringResource to import
  * @param importFromId The id of the existing StringResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StringResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "random_string", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/random/3.6.0/docs/resources/string random_string} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StringResourceConfig
  */
  public constructor(scope: Construct, id: string, config: StringResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'random_string',
      terraformGeneratorMetadata: {
        providerName: 'random',
        providerVersion: '3.6.0',
        providerVersionConstraint: '~> 3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keepers = config.keepers;
    this._length = config.length;
    this._lower = config.lower;
    this._minLower = config.minLower;
    this._minNumeric = config.minNumeric;
    this._minSpecial = config.minSpecial;
    this._minUpper = config.minUpper;
    this._number = config.number;
    this._numeric = config.numeric;
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
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
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
    return this._length;
  }

  // lower - computed: true, optional: true, required: false
  private _lower?: boolean | cdktf.IResolvable; 
  public get lower() {
    return this.getBooleanAttribute('lower');
  }
  public set lower(value: boolean | cdktf.IResolvable) {
    this._lower = value;
  }
  public resetLower() {
    this._lower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInput() {
    return this._lower;
  }

  // min_lower - computed: true, optional: true, required: false
  private _minLower?: number; 
  public get minLower() {
    return this.getNumberAttribute('min_lower');
  }
  public set minLower(value: number) {
    this._minLower = value;
  }
  public resetMinLower() {
    this._minLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowerInput() {
    return this._minLower;
  }

  // min_numeric - computed: true, optional: true, required: false
  private _minNumeric?: number; 
  public get minNumeric() {
    return this.getNumberAttribute('min_numeric');
  }
  public set minNumeric(value: number) {
    this._minNumeric = value;
  }
  public resetMinNumeric() {
    this._minNumeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumericInput() {
    return this._minNumeric;
  }

  // min_special - computed: true, optional: true, required: false
  private _minSpecial?: number; 
  public get minSpecial() {
    return this.getNumberAttribute('min_special');
  }
  public set minSpecial(value: number) {
    this._minSpecial = value;
  }
  public resetMinSpecial() {
    this._minSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialInput() {
    return this._minSpecial;
  }

  // min_upper - computed: true, optional: true, required: false
  private _minUpper?: number; 
  public get minUpper() {
    return this.getNumberAttribute('min_upper');
  }
  public set minUpper(value: number) {
    this._minUpper = value;
  }
  public resetMinUpper() {
    this._minUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpperInput() {
    return this._minUpper;
  }

  // number - computed: true, optional: true, required: false
  private _number?: boolean | cdktf.IResolvable; 
  public get number() {
    return this.getBooleanAttribute('number');
  }
  public set number(value: boolean | cdktf.IResolvable) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // numeric - computed: true, optional: true, required: false
  private _numeric?: boolean | cdktf.IResolvable; 
  public get numeric() {
    return this.getBooleanAttribute('numeric');
  }
  public set numeric(value: boolean | cdktf.IResolvable) {
    this._numeric = value;
  }
  public resetNumeric() {
    this._numeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericInput() {
    return this._numeric;
  }

  // override_special - computed: false, optional: true, required: false
  private _overrideSpecial?: string; 
  public get overrideSpecial() {
    return this.getStringAttribute('override_special');
  }
  public set overrideSpecial(value: string) {
    this._overrideSpecial = value;
  }
  public resetOverrideSpecial() {
    this._overrideSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSpecialInput() {
    return this._overrideSpecial;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // special - computed: true, optional: true, required: false
  private _special?: boolean | cdktf.IResolvable; 
  public get special() {
    return this.getBooleanAttribute('special');
  }
  public set special(value: boolean | cdktf.IResolvable) {
    this._special = value;
  }
  public resetSpecial() {
    this._special = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialInput() {
    return this._special;
  }

  // upper - computed: true, optional: true, required: false
  private _upper?: boolean | cdktf.IResolvable; 
  public get upper() {
    return this.getBooleanAttribute('upper');
  }
  public set upper(value: boolean | cdktf.IResolvable) {
    this._upper = value;
  }
  public resetUpper() {
    this._upper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInput() {
    return this._upper;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      length: cdktf.numberToTerraform(this._length),
      lower: cdktf.booleanToTerraform(this._lower),
      min_lower: cdktf.numberToTerraform(this._minLower),
      min_numeric: cdktf.numberToTerraform(this._minNumeric),
      min_special: cdktf.numberToTerraform(this._minSpecial),
      min_upper: cdktf.numberToTerraform(this._minUpper),
      number: cdktf.booleanToTerraform(this._number),
      numeric: cdktf.booleanToTerraform(this._numeric),
      override_special: cdktf.stringToTerraform(this._overrideSpecial),
      special: cdktf.booleanToTerraform(this._special),
      upper: cdktf.booleanToTerraform(this._upper),
    };
  }
}
