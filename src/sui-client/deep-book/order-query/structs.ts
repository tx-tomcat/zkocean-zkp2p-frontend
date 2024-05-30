import * as reified from "../../_framework/reified";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Order} from "../clob-v2/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== OrderPage =============================== */

export function isOrderPage(type: string): boolean { type = compressSuiType(type); return type === "0xdee9::order_query::OrderPage"; }

export interface OrderPageFields { orders: ToField<Vector<Order>>; hasNextPage: ToField<"bool">; nextTickLevel: ToField<Option<"u64">>; nextOrderId: ToField<Option<"u64">> }

export type OrderPageReified = Reified< OrderPage, OrderPageFields >;

export class OrderPage implements StructClass { static readonly $typeName = "0xdee9::order_query::OrderPage"; static readonly $numTypeParams = 0;

 readonly $typeName = OrderPage.$typeName;

 readonly $fullTypeName: "0xdee9::order_query::OrderPage";

 readonly $typeArgs: [];

 readonly orders: ToField<Vector<Order>>; readonly hasNextPage: ToField<"bool">; readonly nextTickLevel: ToField<Option<"u64">>; readonly nextOrderId: ToField<Option<"u64">>

 private constructor(typeArgs: [], fields: OrderPageFields, ) { this.$fullTypeName = composeSuiType( OrderPage.$typeName, ...typeArgs ) as "0xdee9::order_query::OrderPage"; this.$typeArgs = typeArgs;

 this.orders = fields.orders;; this.hasNextPage = fields.hasNextPage;; this.nextTickLevel = fields.nextTickLevel;; this.nextOrderId = fields.nextOrderId; }

 static reified( ): OrderPageReified { return { typeName: OrderPage.$typeName, fullTypeName: composeSuiType( OrderPage.$typeName, ...[] ) as "0xdee9::order_query::OrderPage", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderPage.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderPage.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderPage.fromBcs( data, ), bcs: OrderPage.bcs, fromJSONField: (field: any) => OrderPage.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderPage.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderPage.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => OrderPage.fetch( client, id, ), new: ( fields: OrderPageFields, ) => { return new OrderPage( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderPage.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderPage>> { return phantom(OrderPage.reified( )); } static get p() { return OrderPage.phantom() }

 static get bcs() { return bcs.struct("OrderPage", {

 orders: bcs.vector(Order.bcs), has_next_page: bcs.bool(), next_tick_level: Option.bcs(bcs.u64()), next_order_id: Option.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): OrderPage { return OrderPage.reified( ).new( { orders: decodeFromFields(reified.vector(Order.reified()), fields.orders), hasNextPage: decodeFromFields("bool", fields.has_next_page), nextTickLevel: decodeFromFields(Option.reified("u64"), fields.next_tick_level), nextOrderId: decodeFromFields(Option.reified("u64"), fields.next_order_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderPage { if (!isOrderPage(item.type)) { throw new Error("not a OrderPage type");

 }

 return OrderPage.reified( ).new( { orders: decodeFromFieldsWithTypes(reified.vector(Order.reified()), item.fields.orders), hasNextPage: decodeFromFieldsWithTypes("bool", item.fields.has_next_page), nextTickLevel: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.next_tick_level), nextOrderId: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.next_order_id) } ) }

 static fromBcs( data: Uint8Array ): OrderPage { return OrderPage.fromFields( OrderPage.bcs.parse(data) ) }

 toJSONField() { return {

 orders: fieldToJSON<Vector<Order>>(`vector<0xdee9::clob_v2::Order>`, this.orders),hasNextPage: this.hasNextPage,nextTickLevel: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.nextTickLevel),nextOrderId: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.nextOrderId),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderPage { return OrderPage.reified( ).new( { orders: decodeFromJSONField(reified.vector(Order.reified()), field.orders), hasNextPage: decodeFromJSONField("bool", field.hasNextPage), nextTickLevel: decodeFromJSONField(Option.reified("u64"), field.nextTickLevel), nextOrderId: decodeFromJSONField(Option.reified("u64"), field.nextOrderId) } ) }

 static fromJSON( json: Record<string, any> ): OrderPage { if (json.$typeName !== OrderPage.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderPage.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderPage { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderPage(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderPage object`); } return OrderPage.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderPage> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderPage object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderPage(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderPage object`); }
 return OrderPage.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
