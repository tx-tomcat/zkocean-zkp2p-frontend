import * as reified from "../../_framework/reified";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {Table} from "../../_dependencies/source/0x2/table/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Account =============================== */

export function isAccount(type: string): boolean { type = compressSuiType(type); return type.startsWith("0xdee9::custodian::Account<"); }

export interface AccountFields<T extends PhantomTypeArgument> { availableBalance: ToField<Balance<T>>; lockedBalance: ToField<Balance<T>> }

export type AccountReified<T extends PhantomTypeArgument> = Reified< Account<T>, AccountFields<T> >;

export class Account<T extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0xdee9::custodian::Account"; static readonly $numTypeParams = 1;

 readonly $typeName = Account.$typeName;

 readonly $fullTypeName: `0xdee9::custodian::Account<${PhantomToTypeStr<T>}>`;

 readonly $typeArgs: [PhantomToTypeStr<T>];

 readonly availableBalance: ToField<Balance<T>>; readonly lockedBalance: ToField<Balance<T>>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: AccountFields<T>, ) { this.$fullTypeName = composeSuiType( Account.$typeName, ...typeArgs ) as `0xdee9::custodian::Account<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.availableBalance = fields.availableBalance;; this.lockedBalance = fields.lockedBalance; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): AccountReified<ToPhantomTypeArgument<T>> { return { typeName: Account.$typeName, fullTypeName: composeSuiType( Account.$typeName, ...[extractType(T)] ) as `0xdee9::custodian::Account<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => Account.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Account.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => Account.fromBcs( T, data, ), bcs: Account.bcs, fromJSONField: (field: any) => Account.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => Account.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => Account.fromSuiParsedData( T, content, ), fetch: async (client: SuiClient, id: string) => Account.fetch( client, T, id, ), new: ( fields: AccountFields<ToPhantomTypeArgument<T>>, ) => { return new Account( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Account.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<Account<ToPhantomTypeArgument<T>>>> { return phantom(Account.reified( T )); } static get p() { return Account.phantom }

 static get bcs() { return bcs.struct("Account", {

 available_balance: Balance.bcs, locked_balance: Balance.bcs

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): Account<ToPhantomTypeArgument<T>> { return Account.reified( typeArg, ).new( { availableBalance: decodeFromFields(Balance.reified(typeArg), fields.available_balance), lockedBalance: decodeFromFields(Balance.reified(typeArg), fields.locked_balance) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): Account<ToPhantomTypeArgument<T>> { if (!isAccount(item.type)) { throw new Error("not a Account type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Account.reified( typeArg, ).new( { availableBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.available_balance), lockedBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.locked_balance) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): Account<ToPhantomTypeArgument<T>> { return Account.fromFields( typeArg, Account.bcs.parse(data) ) }

 toJSONField() { return {

 availableBalance: this.availableBalance.toJSONField(),lockedBalance: this.lockedBalance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): Account<ToPhantomTypeArgument<T>> { return Account.reified( typeArg, ).new( { availableBalance: decodeFromJSONField(Balance.reified(typeArg), field.availableBalance), lockedBalance: decodeFromJSONField(Balance.reified(typeArg), field.lockedBalance) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): Account<ToPhantomTypeArgument<T>> { if (json.$typeName !== Account.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Account.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Account.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): Account<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAccount(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Account object`); } return Account.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<Account<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Account object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAccount(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Account object`); }
 return Account.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AccountCap =============================== */

export function isAccountCap(type: string): boolean { type = compressSuiType(type); return type === "0xdee9::custodian::AccountCap"; }

export interface AccountCapFields { id: ToField<UID> }

export type AccountCapReified = Reified< AccountCap, AccountCapFields >;

export class AccountCap implements StructClass { static readonly $typeName = "0xdee9::custodian::AccountCap"; static readonly $numTypeParams = 0;

 readonly $typeName = AccountCap.$typeName;

 readonly $fullTypeName: "0xdee9::custodian::AccountCap";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: AccountCapFields, ) { this.$fullTypeName = composeSuiType( AccountCap.$typeName, ...typeArgs ) as "0xdee9::custodian::AccountCap"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): AccountCapReified { return { typeName: AccountCap.$typeName, fullTypeName: composeSuiType( AccountCap.$typeName, ...[] ) as "0xdee9::custodian::AccountCap", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AccountCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AccountCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AccountCap.fromBcs( data, ), bcs: AccountCap.bcs, fromJSONField: (field: any) => AccountCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AccountCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AccountCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AccountCap.fetch( client, id, ), new: ( fields: AccountCapFields, ) => { return new AccountCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AccountCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AccountCap>> { return phantom(AccountCap.reified( )); } static get p() { return AccountCap.phantom() }

 static get bcs() { return bcs.struct("AccountCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): AccountCap { return AccountCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AccountCap { if (!isAccountCap(item.type)) { throw new Error("not a AccountCap type");

 }

 return AccountCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): AccountCap { return AccountCap.fromFields( AccountCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AccountCap { return AccountCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): AccountCap { if (json.$typeName !== AccountCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AccountCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AccountCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAccountCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AccountCap object`); } return AccountCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AccountCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AccountCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAccountCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AccountCap object`); }
 return AccountCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Custodian =============================== */

export function isCustodian(type: string): boolean { type = compressSuiType(type); return type.startsWith("0xdee9::custodian::Custodian<"); }

export interface CustodianFields<T extends PhantomTypeArgument> { id: ToField<UID>; accountBalances: ToField<Table<ToPhantom<ID>, ToPhantom<Account<T>>>> }

export type CustodianReified<T extends PhantomTypeArgument> = Reified< Custodian<T>, CustodianFields<T> >;

export class Custodian<T extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0xdee9::custodian::Custodian"; static readonly $numTypeParams = 1;

 readonly $typeName = Custodian.$typeName;

 readonly $fullTypeName: `0xdee9::custodian::Custodian<${PhantomToTypeStr<T>}>`;

 readonly $typeArgs: [PhantomToTypeStr<T>];

 readonly id: ToField<UID>; readonly accountBalances: ToField<Table<ToPhantom<ID>, ToPhantom<Account<T>>>>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: CustodianFields<T>, ) { this.$fullTypeName = composeSuiType( Custodian.$typeName, ...typeArgs ) as `0xdee9::custodian::Custodian<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.accountBalances = fields.accountBalances; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): CustodianReified<ToPhantomTypeArgument<T>> { return { typeName: Custodian.$typeName, fullTypeName: composeSuiType( Custodian.$typeName, ...[extractType(T)] ) as `0xdee9::custodian::Custodian<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => Custodian.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Custodian.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => Custodian.fromBcs( T, data, ), bcs: Custodian.bcs, fromJSONField: (field: any) => Custodian.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => Custodian.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => Custodian.fromSuiParsedData( T, content, ), fetch: async (client: SuiClient, id: string) => Custodian.fetch( client, T, id, ), new: ( fields: CustodianFields<ToPhantomTypeArgument<T>>, ) => { return new Custodian( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Custodian.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<Custodian<ToPhantomTypeArgument<T>>>> { return phantom(Custodian.reified( T )); } static get p() { return Custodian.phantom }

 static get bcs() { return bcs.struct("Custodian", {

 id: UID.bcs, account_balances: Table.bcs

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): Custodian<ToPhantomTypeArgument<T>> { return Custodian.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), accountBalances: decodeFromFields(Table.reified(reified.phantom(ID.reified()), reified.phantom(Account.reified(typeArg))), fields.account_balances) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): Custodian<ToPhantomTypeArgument<T>> { if (!isCustodian(item.type)) { throw new Error("not a Custodian type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Custodian.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), accountBalances: decodeFromFieldsWithTypes(Table.reified(reified.phantom(ID.reified()), reified.phantom(Account.reified(typeArg))), item.fields.account_balances) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): Custodian<ToPhantomTypeArgument<T>> { return Custodian.fromFields( typeArg, Custodian.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,accountBalances: this.accountBalances.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): Custodian<ToPhantomTypeArgument<T>> { return Custodian.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), accountBalances: decodeFromJSONField(Table.reified(reified.phantom(ID.reified()), reified.phantom(Account.reified(typeArg))), field.accountBalances) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): Custodian<ToPhantomTypeArgument<T>> { if (json.$typeName !== Custodian.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Custodian.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Custodian.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): Custodian<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCustodian(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Custodian object`); } return Custodian.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<Custodian<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Custodian object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCustodian(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Custodian object`); }
 return Custodian.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }
