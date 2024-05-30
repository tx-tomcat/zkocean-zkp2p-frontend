import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface AccountBalanceArgs { pool: ObjectArg; accountCap: ObjectArg }

export function accountBalance( txb: TransactionBlock, typeArgs: [string, string], args: AccountBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::account_balance`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap) ], }) }

export interface BatchCancelOrderArgs { pool: ObjectArg; orderIds: Array<bigint | TransactionArgument> | TransactionArgument; accountCap: ObjectArg }

export function batchCancelOrder( txb: TransactionBlock, typeArgs: [string, string], args: BatchCancelOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::batch_cancel_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.orderIds, `vector<u64>`), obj(txb, args.accountCap) ], }) }

export interface CancelAllOrdersArgs { pool: ObjectArg; accountCap: ObjectArg }

export function cancelAllOrders( txb: TransactionBlock, typeArgs: [string, string], args: CancelAllOrdersArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::cancel_all_orders`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap) ], }) }

export interface CancelOrderArgs { pool: ObjectArg; orderId: bigint | TransactionArgument; accountCap: ObjectArg }

export function cancelOrder( txb: TransactionBlock, typeArgs: [string, string], args: CancelOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::cancel_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.orderId, `u64`), obj(txb, args.accountCap) ], }) }

export function createAccount( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::create_account`, arguments: [ ], }) }

export interface CreatePoolArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: ObjectArg }

export function createPool( txb: TransactionBlock, typeArgs: [string, string], args: CreatePoolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::create_pool`, typeArguments: typeArgs, arguments: [ pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), obj(txb, args.creationFee) ], }) }

export interface DepositBaseArgs { pool: ObjectArg; coin: ObjectArg; accountCap: ObjectArg }

export function depositBase( txb: TransactionBlock, typeArgs: [string, string], args: DepositBaseArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::deposit_base`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.coin), obj(txb, args.accountCap) ], }) }

export interface DepositQuoteArgs { pool: ObjectArg; coin: ObjectArg; accountCap: ObjectArg }

export function depositQuote( txb: TransactionBlock, typeArgs: [string, string], args: DepositQuoteArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::deposit_quote`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.coin), obj(txb, args.accountCap) ], }) }

export function destroyEmptyLevel( txb: TransactionBlock, level: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::destroy_empty_level`, arguments: [ obj(txb, level) ], }) }

export interface EmitOrderCanceledArgs { poolId: string | TransactionArgument; order: ObjectArg }

export function emitOrderCanceled( txb: TransactionBlock, typeArgs: [string, string], args: EmitOrderCanceledArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::emit_order_canceled`, typeArguments: typeArgs, arguments: [ pure(txb, args.poolId, `0x2::object::ID`), obj(txb, args.order) ], }) }

export interface EmitOrderFilledArgs { poolId: string | TransactionArgument; order: ObjectArg; baseAssetQuantityFilled: bigint | TransactionArgument; takerCommission: bigint | TransactionArgument; makerRebates: bigint | TransactionArgument }

export function emitOrderFilled( txb: TransactionBlock, typeArgs: [string, string], args: EmitOrderFilledArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::emit_order_filled`, typeArguments: typeArgs, arguments: [ pure(txb, args.poolId, `0x2::object::ID`), obj(txb, args.order), pure(txb, args.baseAssetQuantityFilled, `u64`), pure(txb, args.takerCommission, `u64`), pure(txb, args.makerRebates, `u64`) ], }) }

export interface GetLevel2BookStatusArgs { openOrders: ObjectArg; price: bigint | TransactionArgument; timeStamp: bigint | TransactionArgument }

export function getLevel2BookStatus( txb: TransactionBlock, args: GetLevel2BookStatusArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::get_level2_book_status`, arguments: [ obj(txb, args.openOrders), pure(txb, args.price, `u64`), pure(txb, args.timeStamp, `u64`) ], }) }

export interface GetLevel2BookStatusAskSideArgs { pool: ObjectArg; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: ObjectArg }

export function getLevel2BookStatusAskSide( txb: TransactionBlock, typeArgs: [string, string], args: GetLevel2BookStatusAskSideArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::get_level2_book_status_ask_side`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.priceLow, `u64`), pure(txb, args.priceHigh, `u64`), obj(txb, args.clock) ], }) }

export interface GetLevel2BookStatusBidSideArgs { pool: ObjectArg; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: ObjectArg }

export function getLevel2BookStatusBidSide( txb: TransactionBlock, typeArgs: [string, string], args: GetLevel2BookStatusBidSideArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::get_level2_book_status_bid_side`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.priceLow, `u64`), pure(txb, args.priceHigh, `u64`), obj(txb, args.clock) ], }) }

export function getMarketPrice( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::get_market_price`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export interface GetOrderStatusArgs { pool: ObjectArg; orderId: bigint | TransactionArgument; accountCap: ObjectArg }

export function getOrderStatus( txb: TransactionBlock, typeArgs: [string, string], args: GetOrderStatusArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::get_order_status`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.orderId, `u64`), obj(txb, args.accountCap) ], }) }

export interface InjectLimitOrderArgs { pool: ObjectArg; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; accountCap: ObjectArg }

export function injectLimitOrder( txb: TransactionBlock, typeArgs: [string, string], args: InjectLimitOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::inject_limit_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.price, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.isBid, `bool`), pure(txb, args.expireTimestamp, `u64`), obj(txb, args.accountCap) ], }) }

export interface ListOpenOrdersArgs { pool: ObjectArg; accountCap: ObjectArg }

export function listOpenOrders( txb: TransactionBlock, typeArgs: [string, string], args: ListOpenOrdersArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::list_open_orders`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap) ], }) }

export interface MatchAskArgs { pool: ObjectArg; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; baseBalance: ObjectArg }

export function matchAsk( txb: TransactionBlock, typeArgs: [string, string], args: MatchAskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::match_ask`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.priceLimit, `u64`), pure(txb, args.currentTimestamp, `u64`), obj(txb, args.baseBalance) ], }) }

export interface MatchBidArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: ObjectArg }

export function matchBid( txb: TransactionBlock, typeArgs: [string, string], args: MatchBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::match_bid`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), pure(txb, args.priceLimit, `u64`), pure(txb, args.currentTimestamp, `u64`), obj(txb, args.quoteBalance) ], }) }

export interface MatchBidWithQuoteQuantityArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: ObjectArg }

export function matchBidWithQuoteQuantity( txb: TransactionBlock, typeArgs: [string, string], args: MatchBidWithQuoteQuantityArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::match_bid_with_quote_quantity`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), pure(txb, args.priceLimit, `u64`), pure(txb, args.currentTimestamp, `u64`), obj(txb, args.quoteBalance) ], }) }

export function orderIsBid( txb: TransactionBlock, orderId: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::order_is_bid`, arguments: [ pure(txb, orderId, `u64`) ], }) }

export interface PlaceLimitOrderArgs { pool: ObjectArg; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: ObjectArg; accountCap: ObjectArg }

export function placeLimitOrder( txb: TransactionBlock, typeArgs: [string, string], args: PlaceLimitOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::place_limit_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.price, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.isBid, `bool`), pure(txb, args.expireTimestamp, `u64`), pure(txb, args.restriction, `u8`), obj(txb, args.clock), obj(txb, args.accountCap) ], }) }

export interface PlaceMarketOrderArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: ObjectArg; quoteCoin: ObjectArg; clock: ObjectArg }

export function placeMarketOrder( txb: TransactionBlock, typeArgs: [string, string], args: PlaceMarketOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::place_market_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), pure(txb, args.isBid, `bool`), obj(txb, args.baseCoin), obj(txb, args.quoteCoin), obj(txb, args.clock) ], }) }

export interface RemoveOrderArgs { openOrders: ObjectArg; usrOpenOrders: ObjectArg; tickIndex: bigint | TransactionArgument; orderId: bigint | TransactionArgument; user: string | TransactionArgument }

export function removeOrder( txb: TransactionBlock, args: RemoveOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::remove_order`, arguments: [ obj(txb, args.openOrders), obj(txb, args.usrOpenOrders), pure(txb, args.tickIndex, `u64`), pure(txb, args.orderId, `u64`), pure(txb, args.user, `0x2::object::ID`) ], }) }

export interface SwapExactBaseForQuoteArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; baseCoin: ObjectArg; quoteCoin: ObjectArg; clock: ObjectArg }

export function swapExactBaseForQuote( txb: TransactionBlock, typeArgs: [string, string], args: SwapExactBaseForQuoteArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::swap_exact_base_for_quote`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), obj(txb, args.baseCoin), obj(txb, args.quoteCoin), obj(txb, args.clock) ], }) }

export interface SwapExactQuoteForBaseArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; clock: ObjectArg; quoteCoin: ObjectArg }

export function swapExactQuoteForBase( txb: TransactionBlock, typeArgs: [string, string], args: SwapExactQuoteForBaseArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::swap_exact_quote_for_base`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), obj(txb, args.clock), obj(txb, args.quoteCoin) ], }) }

export interface WithdrawBaseArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; accountCap: ObjectArg }

export function withdrawBase( txb: TransactionBlock, typeArgs: [string, string], args: WithdrawBaseArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::withdraw_base`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), obj(txb, args.accountCap) ], }) }

export interface WithdrawQuoteArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; accountCap: ObjectArg }

export function withdrawQuote( txb: TransactionBlock, typeArgs: [string, string], args: WithdrawQuoteArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob::withdraw_quote`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), obj(txb, args.accountCap) ], }) }
