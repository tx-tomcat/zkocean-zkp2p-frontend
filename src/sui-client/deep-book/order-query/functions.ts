import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export function orderId( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::order_id`, arguments: [ obj(txb, order) ], }) }

export function tickLevel( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::tick_level`, arguments: [ obj(txb, order) ], }) }

export function hasNextPage( txb: TransactionBlock, page: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::has_next_page`, arguments: [ obj(txb, page) ], }) }

export interface IterAsksArgs { pool: ObjectArg; startTickLevel: (bigint | TransactionArgument | TransactionArgument | null); startOrderId: (bigint | TransactionArgument | TransactionArgument | null); minExpireTimestamp: (bigint | TransactionArgument | TransactionArgument | null); maxId: (bigint | TransactionArgument | TransactionArgument | null); ascending: boolean | TransactionArgument }

export function iterAsks( txb: TransactionBlock, typeArgs: [string, string], args: IterAsksArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::iter_asks`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.startTickLevel, `0x1::option::Option<u64>`), pure(txb, args.startOrderId, `0x1::option::Option<u64>`), pure(txb, args.minExpireTimestamp, `0x1::option::Option<u64>`), pure(txb, args.maxId, `0x1::option::Option<u64>`), pure(txb, args.ascending, `bool`) ], }) }

export interface IterBidsArgs { pool: ObjectArg; startTickLevel: (bigint | TransactionArgument | TransactionArgument | null); startOrderId: (bigint | TransactionArgument | TransactionArgument | null); minExpireTimestamp: (bigint | TransactionArgument | TransactionArgument | null); maxId: (bigint | TransactionArgument | TransactionArgument | null); ascending: boolean | TransactionArgument }

export function iterBids( txb: TransactionBlock, typeArgs: [string, string], args: IterBidsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::iter_bids`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.startTickLevel, `0x1::option::Option<u64>`), pure(txb, args.startOrderId, `0x1::option::Option<u64>`), pure(txb, args.minExpireTimestamp, `0x1::option::Option<u64>`), pure(txb, args.maxId, `0x1::option::Option<u64>`), pure(txb, args.ascending, `bool`) ], }) }

export interface IterTicksInternalArgs { ticks: ObjectArg; startTickLevel: (bigint | TransactionArgument | TransactionArgument | null); startOrderId: (bigint | TransactionArgument | TransactionArgument | null); minExpireTimestamp: (bigint | TransactionArgument | TransactionArgument | null); maxId: (bigint | TransactionArgument | TransactionArgument | null); ascending: boolean | TransactionArgument }

export function iterTicksInternal( txb: TransactionBlock, args: IterTicksInternalArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::iter_ticks_internal`, arguments: [ obj(txb, args.ticks), pure(txb, args.startTickLevel, `0x1::option::Option<u64>`), pure(txb, args.startOrderId, `0x1::option::Option<u64>`), pure(txb, args.minExpireTimestamp, `0x1::option::Option<u64>`), pure(txb, args.maxId, `0x1::option::Option<u64>`), pure(txb, args.ascending, `bool`) ], }) }

export function nextOrderId( txb: TransactionBlock, page: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::next_order_id`, arguments: [ obj(txb, page) ], }) }

export function nextTickLevel( txb: TransactionBlock, page: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::next_tick_level`, arguments: [ obj(txb, page) ], }) }

export function orders( txb: TransactionBlock, page: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::order_query::orders`, arguments: [ obj(txb, page) ], }) }
