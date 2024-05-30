import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {SUI} from "../../_dependencies/source/0x2/sui/structs";
import {Table} from "../../_dependencies/source/0x2/table/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Order =============================== */

export function isOrder(type: string): boolean { type = compressSuiType(type); return type === "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::Order"; }

export interface OrderFields { orderId: ToField<"u64">; owner: ToField<"address">; total: ToField<Balance<ToPhantom<SUI>>>; amountToSend: ToField<"u64">; collateral: ToField<"u64">; amountToReceive: ToField<String>; status: ToField<"u8">; paymentKey: ToField<String>; hashName: ToField<String> }

export type OrderReified = Reified< Order, OrderFields >;

export class Order implements StructClass { static readonly $typeName = "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::Order"; static readonly $numTypeParams = 0;

 readonly $typeName = Order.$typeName;

 readonly $fullTypeName: "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::Order";

 readonly $typeArgs: [];

 readonly orderId: ToField<"u64">; readonly owner: ToField<"address">; readonly total: ToField<Balance<ToPhantom<SUI>>>; readonly amountToSend: ToField<"u64">; readonly collateral: ToField<"u64">; readonly amountToReceive: ToField<String>; readonly status: ToField<"u8">; readonly paymentKey: ToField<String>; readonly hashName: ToField<String>

 private constructor(typeArgs: [], fields: OrderFields, ) { this.$fullTypeName = composeSuiType( Order.$typeName, ...typeArgs ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::Order"; this.$typeArgs = typeArgs;

 this.orderId = fields.orderId;; this.owner = fields.owner;; this.total = fields.total;; this.amountToSend = fields.amountToSend;; this.collateral = fields.collateral;; this.amountToReceive = fields.amountToReceive;; this.status = fields.status;; this.paymentKey = fields.paymentKey;; this.hashName = fields.hashName; }

 static reified( ): OrderReified { return { typeName: Order.$typeName, fullTypeName: composeSuiType( Order.$typeName, ...[] ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::Order", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Order.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Order.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Order.fromBcs( data, ), bcs: Order.bcs, fromJSONField: (field: any) => Order.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Order.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Order.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Order.fetch( client, id, ), new: ( fields: OrderFields, ) => { return new Order( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Order.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Order>> { return phantom(Order.reified( )); } static get p() { return Order.phantom() }

 static get bcs() { return bcs.struct("Order", {

 order_id: bcs.u64(), owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), total: Balance.bcs, amount_to_send: bcs.u64(), collateral: bcs.u64(), amount_to_receive: String.bcs, status: bcs.u8(), payment_key: String.bcs, hash_name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): Order { return Order.reified( ).new( { orderId: decodeFromFields("u64", fields.order_id), owner: decodeFromFields("address", fields.owner), total: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.total), amountToSend: decodeFromFields("u64", fields.amount_to_send), collateral: decodeFromFields("u64", fields.collateral), amountToReceive: decodeFromFields(String.reified(), fields.amount_to_receive), status: decodeFromFields("u8", fields.status), paymentKey: decodeFromFields(String.reified(), fields.payment_key), hashName: decodeFromFields(String.reified(), fields.hash_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Order { if (!isOrder(item.type)) { throw new Error("not a Order type");

 }

 return Order.reified( ).new( { orderId: decodeFromFieldsWithTypes("u64", item.fields.order_id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), total: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.total), amountToSend: decodeFromFieldsWithTypes("u64", item.fields.amount_to_send), collateral: decodeFromFieldsWithTypes("u64", item.fields.collateral), amountToReceive: decodeFromFieldsWithTypes(String.reified(), item.fields.amount_to_receive), status: decodeFromFieldsWithTypes("u8", item.fields.status), paymentKey: decodeFromFieldsWithTypes(String.reified(), item.fields.payment_key), hashName: decodeFromFieldsWithTypes(String.reified(), item.fields.hash_name) } ) }

 static fromBcs( data: Uint8Array ): Order { return Order.fromFields( Order.bcs.parse(data) ) }

 toJSONField() { return {

 orderId: this.orderId.toString(),owner: this.owner,total: this.total.toJSONField(),amountToSend: this.amountToSend.toString(),collateral: this.collateral.toString(),amountToReceive: this.amountToReceive,status: this.status,paymentKey: this.paymentKey,hashName: this.hashName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Order { return Order.reified( ).new( { orderId: decodeFromJSONField("u64", field.orderId), owner: decodeFromJSONField("address", field.owner), total: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.total), amountToSend: decodeFromJSONField("u64", field.amountToSend), collateral: decodeFromJSONField("u64", field.collateral), amountToReceive: decodeFromJSONField(String.reified(), field.amountToReceive), status: decodeFromJSONField("u8", field.status), paymentKey: decodeFromJSONField(String.reified(), field.paymentKey), hashName: decodeFromJSONField(String.reified(), field.hashName) } ) }

 static fromJSON( json: Record<string, any> ): Order { if (json.$typeName !== Order.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Order.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Order { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrder(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Order object`); } return Order.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Order> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Order object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrder(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Order object`); }
 return Order.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::AdminCap"; }

export interface AdminCapFields { id: ToField<UID> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { static readonly $typeName = "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::AdminCap"; static readonly $numTypeParams = 0;

 readonly $typeName = AdminCap.$typeName;

 readonly $fullTypeName: "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::AdminCap";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::AdminCap"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::AdminCap", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 static get bcs() { return bcs.struct("AdminCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }
 return AdminCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== OrderClaim =============================== */

export function isOrderClaim(type: string): boolean { type = compressSuiType(type); return type === "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderClaim"; }

export interface OrderClaimFields { orderId: ToField<"u64">; buyer: ToField<"address">; status: ToField<"u8">; claimExpirationTime: ToField<"u64"> }

export type OrderClaimReified = Reified< OrderClaim, OrderClaimFields >;

export class OrderClaim implements StructClass { static readonly $typeName = "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderClaim"; static readonly $numTypeParams = 0;

 readonly $typeName = OrderClaim.$typeName;

 readonly $fullTypeName: "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderClaim";

 readonly $typeArgs: [];

 readonly orderId: ToField<"u64">; readonly buyer: ToField<"address">; readonly status: ToField<"u8">; readonly claimExpirationTime: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderClaimFields, ) { this.$fullTypeName = composeSuiType( OrderClaim.$typeName, ...typeArgs ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderClaim"; this.$typeArgs = typeArgs;

 this.orderId = fields.orderId;; this.buyer = fields.buyer;; this.status = fields.status;; this.claimExpirationTime = fields.claimExpirationTime; }

 static reified( ): OrderClaimReified { return { typeName: OrderClaim.$typeName, fullTypeName: composeSuiType( OrderClaim.$typeName, ...[] ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderClaim", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderClaim.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderClaim.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderClaim.fromBcs( data, ), bcs: OrderClaim.bcs, fromJSONField: (field: any) => OrderClaim.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderClaim.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderClaim.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => OrderClaim.fetch( client, id, ), new: ( fields: OrderClaimFields, ) => { return new OrderClaim( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderClaim.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderClaim>> { return phantom(OrderClaim.reified( )); } static get p() { return OrderClaim.phantom() }

 static get bcs() { return bcs.struct("OrderClaim", {

 order_id: bcs.u64(), buyer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), status: bcs.u8(), claim_expiration_time: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderClaim { return OrderClaim.reified( ).new( { orderId: decodeFromFields("u64", fields.order_id), buyer: decodeFromFields("address", fields.buyer), status: decodeFromFields("u8", fields.status), claimExpirationTime: decodeFromFields("u64", fields.claim_expiration_time) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderClaim { if (!isOrderClaim(item.type)) { throw new Error("not a OrderClaim type");

 }

 return OrderClaim.reified( ).new( { orderId: decodeFromFieldsWithTypes("u64", item.fields.order_id), buyer: decodeFromFieldsWithTypes("address", item.fields.buyer), status: decodeFromFieldsWithTypes("u8", item.fields.status), claimExpirationTime: decodeFromFieldsWithTypes("u64", item.fields.claim_expiration_time) } ) }

 static fromBcs( data: Uint8Array ): OrderClaim { return OrderClaim.fromFields( OrderClaim.bcs.parse(data) ) }

 toJSONField() { return {

 orderId: this.orderId.toString(),buyer: this.buyer,status: this.status,claimExpirationTime: this.claimExpirationTime.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderClaim { return OrderClaim.reified( ).new( { orderId: decodeFromJSONField("u64", field.orderId), buyer: decodeFromJSONField("address", field.buyer), status: decodeFromJSONField("u8", field.status), claimExpirationTime: decodeFromJSONField("u64", field.claimExpirationTime) } ) }

 static fromJSON( json: Record<string, any> ): OrderClaim { if (json.$typeName !== OrderClaim.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderClaim.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderClaim { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderClaim(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderClaim object`); } return OrderClaim.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderClaim> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderClaim object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderClaim(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderClaim object`); }
 return OrderClaim.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== OrderEntry =============================== */

export function isOrderEntry(type: string): boolean { type = compressSuiType(type); return type === "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderEntry"; }

export interface OrderEntryFields { orderId: ToField<"u64">; owner: ToField<"address">; total: ToField<"u64">; amountToSend: ToField<"u64">; collateral: ToField<"u64">; amountToReceive: ToField<String>; status: ToField<"u8">; paymentKey: ToField<String>; hashName: ToField<String> }

export type OrderEntryReified = Reified< OrderEntry, OrderEntryFields >;

export class OrderEntry implements StructClass { static readonly $typeName = "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderEntry"; static readonly $numTypeParams = 0;

 readonly $typeName = OrderEntry.$typeName;

 readonly $fullTypeName: "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderEntry";

 readonly $typeArgs: [];

 readonly orderId: ToField<"u64">; readonly owner: ToField<"address">; readonly total: ToField<"u64">; readonly amountToSend: ToField<"u64">; readonly collateral: ToField<"u64">; readonly amountToReceive: ToField<String>; readonly status: ToField<"u8">; readonly paymentKey: ToField<String>; readonly hashName: ToField<String>

 private constructor(typeArgs: [], fields: OrderEntryFields, ) { this.$fullTypeName = composeSuiType( OrderEntry.$typeName, ...typeArgs ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderEntry"; this.$typeArgs = typeArgs;

 this.orderId = fields.orderId;; this.owner = fields.owner;; this.total = fields.total;; this.amountToSend = fields.amountToSend;; this.collateral = fields.collateral;; this.amountToReceive = fields.amountToReceive;; this.status = fields.status;; this.paymentKey = fields.paymentKey;; this.hashName = fields.hashName; }

 static reified( ): OrderEntryReified { return { typeName: OrderEntry.$typeName, fullTypeName: composeSuiType( OrderEntry.$typeName, ...[] ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderEntry", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderEntry.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderEntry.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderEntry.fromBcs( data, ), bcs: OrderEntry.bcs, fromJSONField: (field: any) => OrderEntry.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderEntry.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderEntry.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => OrderEntry.fetch( client, id, ), new: ( fields: OrderEntryFields, ) => { return new OrderEntry( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderEntry.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderEntry>> { return phantom(OrderEntry.reified( )); } static get p() { return OrderEntry.phantom() }

 static get bcs() { return bcs.struct("OrderEntry", {

 order_id: bcs.u64(), owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), total: bcs.u64(), amount_to_send: bcs.u64(), collateral: bcs.u64(), amount_to_receive: String.bcs, status: bcs.u8(), payment_key: String.bcs, hash_name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): OrderEntry { return OrderEntry.reified( ).new( { orderId: decodeFromFields("u64", fields.order_id), owner: decodeFromFields("address", fields.owner), total: decodeFromFields("u64", fields.total), amountToSend: decodeFromFields("u64", fields.amount_to_send), collateral: decodeFromFields("u64", fields.collateral), amountToReceive: decodeFromFields(String.reified(), fields.amount_to_receive), status: decodeFromFields("u8", fields.status), paymentKey: decodeFromFields(String.reified(), fields.payment_key), hashName: decodeFromFields(String.reified(), fields.hash_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderEntry { if (!isOrderEntry(item.type)) { throw new Error("not a OrderEntry type");

 }

 return OrderEntry.reified( ).new( { orderId: decodeFromFieldsWithTypes("u64", item.fields.order_id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), total: decodeFromFieldsWithTypes("u64", item.fields.total), amountToSend: decodeFromFieldsWithTypes("u64", item.fields.amount_to_send), collateral: decodeFromFieldsWithTypes("u64", item.fields.collateral), amountToReceive: decodeFromFieldsWithTypes(String.reified(), item.fields.amount_to_receive), status: decodeFromFieldsWithTypes("u8", item.fields.status), paymentKey: decodeFromFieldsWithTypes(String.reified(), item.fields.payment_key), hashName: decodeFromFieldsWithTypes(String.reified(), item.fields.hash_name) } ) }

 static fromBcs( data: Uint8Array ): OrderEntry { return OrderEntry.fromFields( OrderEntry.bcs.parse(data) ) }

 toJSONField() { return {

 orderId: this.orderId.toString(),owner: this.owner,total: this.total.toString(),amountToSend: this.amountToSend.toString(),collateral: this.collateral.toString(),amountToReceive: this.amountToReceive,status: this.status,paymentKey: this.paymentKey,hashName: this.hashName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderEntry { return OrderEntry.reified( ).new( { orderId: decodeFromJSONField("u64", field.orderId), owner: decodeFromJSONField("address", field.owner), total: decodeFromJSONField("u64", field.total), amountToSend: decodeFromJSONField("u64", field.amountToSend), collateral: decodeFromJSONField("u64", field.collateral), amountToReceive: decodeFromJSONField(String.reified(), field.amountToReceive), status: decodeFromJSONField("u8", field.status), paymentKey: decodeFromJSONField(String.reified(), field.paymentKey), hashName: decodeFromJSONField(String.reified(), field.hashName) } ) }

 static fromJSON( json: Record<string, any> ): OrderEntry { if (json.$typeName !== OrderEntry.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderEntry.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderEntry { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderEntry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderEntry object`); } return OrderEntry.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderEntry> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderEntry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderEntry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderEntry object`); }
 return OrderEntry.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== VerifiedEvent =============================== */

export function isVerifiedEvent(type: string): boolean { type = compressSuiType(type); return type === "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::VerifiedEvent"; }

export interface VerifiedEventFields { orderClaimId: ToField<"u64">; isVerified: ToField<"bool">; from: ToField<String>; timestamp: ToField<"u64"> }

export type VerifiedEventReified = Reified< VerifiedEvent, VerifiedEventFields >;

export class VerifiedEvent implements StructClass { static readonly $typeName = "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::VerifiedEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = VerifiedEvent.$typeName;

 readonly $fullTypeName: "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::VerifiedEvent";

 readonly $typeArgs: [];

 readonly orderClaimId: ToField<"u64">; readonly isVerified: ToField<"bool">; readonly from: ToField<String>; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: VerifiedEventFields, ) { this.$fullTypeName = composeSuiType( VerifiedEvent.$typeName, ...typeArgs ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::VerifiedEvent"; this.$typeArgs = typeArgs;

 this.orderClaimId = fields.orderClaimId;; this.isVerified = fields.isVerified;; this.from = fields.from;; this.timestamp = fields.timestamp; }

 static reified( ): VerifiedEventReified { return { typeName: VerifiedEvent.$typeName, fullTypeName: composeSuiType( VerifiedEvent.$typeName, ...[] ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::VerifiedEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VerifiedEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VerifiedEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VerifiedEvent.fromBcs( data, ), bcs: VerifiedEvent.bcs, fromJSONField: (field: any) => VerifiedEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VerifiedEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VerifiedEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => VerifiedEvent.fetch( client, id, ), new: ( fields: VerifiedEventFields, ) => { return new VerifiedEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VerifiedEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VerifiedEvent>> { return phantom(VerifiedEvent.reified( )); } static get p() { return VerifiedEvent.phantom() }

 static get bcs() { return bcs.struct("VerifiedEvent", {

 order_claim_id: bcs.u64(), is_verified: bcs.bool(), from: String.bcs, timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): VerifiedEvent { return VerifiedEvent.reified( ).new( { orderClaimId: decodeFromFields("u64", fields.order_claim_id), isVerified: decodeFromFields("bool", fields.is_verified), from: decodeFromFields(String.reified(), fields.from), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VerifiedEvent { if (!isVerifiedEvent(item.type)) { throw new Error("not a VerifiedEvent type");

 }

 return VerifiedEvent.reified( ).new( { orderClaimId: decodeFromFieldsWithTypes("u64", item.fields.order_claim_id), isVerified: decodeFromFieldsWithTypes("bool", item.fields.is_verified), from: decodeFromFieldsWithTypes(String.reified(), item.fields.from), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): VerifiedEvent { return VerifiedEvent.fromFields( VerifiedEvent.bcs.parse(data) ) }

 toJSONField() { return {

 orderClaimId: this.orderClaimId.toString(),isVerified: this.isVerified,from: this.from,timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VerifiedEvent { return VerifiedEvent.reified( ).new( { orderClaimId: decodeFromJSONField("u64", field.orderClaimId), isVerified: decodeFromJSONField("bool", field.isVerified), from: decodeFromJSONField(String.reified(), field.from), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): VerifiedEvent { if (json.$typeName !== VerifiedEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VerifiedEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VerifiedEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVerifiedEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VerifiedEvent object`); } return VerifiedEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<VerifiedEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VerifiedEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVerifiedEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VerifiedEvent object`); }
 return VerifiedEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ZKRamp =============================== */

export function isZKRamp(type: string): boolean { type = compressSuiType(type); return type === "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::ZKRamp"; }

export interface ZKRampFields { id: ToField<UID>; orders: ToField<Table<"u64", ToPhantom<Order>>>; orderClaims: ToField<Table<"u64", ToPhantom<OrderClaim>>>; orderList: ToField<Vector<OrderEntry>>; orderClaimList: ToField<Vector<OrderClaim>>; owner: ToField<"address">; nextOrderNonce: ToField<"u64"> }

export type ZKRampReified = Reified< ZKRamp, ZKRampFields >;

export class ZKRamp implements StructClass { static readonly $typeName = "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::ZKRamp"; static readonly $numTypeParams = 0;

 readonly $typeName = ZKRamp.$typeName;

 readonly $fullTypeName: "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::ZKRamp";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly orders: ToField<Table<"u64", ToPhantom<Order>>>; readonly orderClaims: ToField<Table<"u64", ToPhantom<OrderClaim>>>; readonly orderList: ToField<Vector<OrderEntry>>; readonly orderClaimList: ToField<Vector<OrderClaim>>; readonly owner: ToField<"address">; readonly nextOrderNonce: ToField<"u64">

 private constructor(typeArgs: [], fields: ZKRampFields, ) { this.$fullTypeName = composeSuiType( ZKRamp.$typeName, ...typeArgs ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::ZKRamp"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.orders = fields.orders;; this.orderClaims = fields.orderClaims;; this.orderList = fields.orderList;; this.orderClaimList = fields.orderClaimList;; this.owner = fields.owner;; this.nextOrderNonce = fields.nextOrderNonce; }

 static reified( ): ZKRampReified { return { typeName: ZKRamp.$typeName, fullTypeName: composeSuiType( ZKRamp.$typeName, ...[] ) as "0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::ZKRamp", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ZKRamp.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ZKRamp.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ZKRamp.fromBcs( data, ), bcs: ZKRamp.bcs, fromJSONField: (field: any) => ZKRamp.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ZKRamp.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ZKRamp.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ZKRamp.fetch( client, id, ), new: ( fields: ZKRampFields, ) => { return new ZKRamp( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ZKRamp.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ZKRamp>> { return phantom(ZKRamp.reified( )); } static get p() { return ZKRamp.phantom() }

 static get bcs() { return bcs.struct("ZKRamp", {

 id: UID.bcs, orders: Table.bcs, order_claims: Table.bcs, order_list: bcs.vector(OrderEntry.bcs), order_claim_list: bcs.vector(OrderClaim.bcs), owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), next_order_nonce: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ZKRamp { return ZKRamp.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), orders: decodeFromFields(Table.reified(reified.phantom("u64"), reified.phantom(Order.reified())), fields.orders), orderClaims: decodeFromFields(Table.reified(reified.phantom("u64"), reified.phantom(OrderClaim.reified())), fields.order_claims), orderList: decodeFromFields(reified.vector(OrderEntry.reified()), fields.order_list), orderClaimList: decodeFromFields(reified.vector(OrderClaim.reified()), fields.order_claim_list), owner: decodeFromFields("address", fields.owner), nextOrderNonce: decodeFromFields("u64", fields.next_order_nonce) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ZKRamp { if (!isZKRamp(item.type)) { throw new Error("not a ZKRamp type");

 }

 return ZKRamp.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), orders: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u64"), reified.phantom(Order.reified())), item.fields.orders), orderClaims: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u64"), reified.phantom(OrderClaim.reified())), item.fields.order_claims), orderList: decodeFromFieldsWithTypes(reified.vector(OrderEntry.reified()), item.fields.order_list), orderClaimList: decodeFromFieldsWithTypes(reified.vector(OrderClaim.reified()), item.fields.order_claim_list), owner: decodeFromFieldsWithTypes("address", item.fields.owner), nextOrderNonce: decodeFromFieldsWithTypes("u64", item.fields.next_order_nonce) } ) }

 static fromBcs( data: Uint8Array ): ZKRamp { return ZKRamp.fromFields( ZKRamp.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,orders: this.orders.toJSONField(),orderClaims: this.orderClaims.toJSONField(),orderList: fieldToJSON<Vector<OrderEntry>>(`vector<0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderEntry>`, this.orderList),orderClaimList: fieldToJSON<Vector<OrderClaim>>(`vector<0x88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd::core::OrderClaim>`, this.orderClaimList),owner: this.owner,nextOrderNonce: this.nextOrderNonce.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ZKRamp { return ZKRamp.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), orders: decodeFromJSONField(Table.reified(reified.phantom("u64"), reified.phantom(Order.reified())), field.orders), orderClaims: decodeFromJSONField(Table.reified(reified.phantom("u64"), reified.phantom(OrderClaim.reified())), field.orderClaims), orderList: decodeFromJSONField(reified.vector(OrderEntry.reified()), field.orderList), orderClaimList: decodeFromJSONField(reified.vector(OrderClaim.reified()), field.orderClaimList), owner: decodeFromJSONField("address", field.owner), nextOrderNonce: decodeFromJSONField("u64", field.nextOrderNonce) } ) }

 static fromJSON( json: Record<string, any> ): ZKRamp { if (json.$typeName !== ZKRamp.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ZKRamp.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ZKRamp { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isZKRamp(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ZKRamp object`); } return ZKRamp.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ZKRamp> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ZKRamp object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isZKRamp(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ZKRamp object`); }
 return ZKRamp.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
