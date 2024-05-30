import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export function owner( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::owner`, arguments: [ obj(txb, order) ], }) }

export interface AccountBalanceArgs { pool: ObjectArg; accountCap: ObjectArg }

export function accountBalance( txb: TransactionBlock, typeArgs: [string, string], args: AccountBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::account_balance`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap) ], }) }

export function quantity( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::quantity`, arguments: [ obj(txb, order) ], }) }

export interface BatchCancelOrderArgs { pool: ObjectArg; orderIds: Array<bigint | TransactionArgument> | TransactionArgument; accountCap: ObjectArg }

export function batchCancelOrder( txb: TransactionBlock, typeArgs: [string, string], args: BatchCancelOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::batch_cancel_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.orderIds, `vector<u64>`), obj(txb, args.accountCap) ], }) }

export interface CancelAllOrdersArgs { pool: ObjectArg; accountCap: ObjectArg }

export function cancelAllOrders( txb: TransactionBlock, typeArgs: [string, string], args: CancelAllOrdersArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::cancel_all_orders`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap) ], }) }

export interface CancelOrderArgs { pool: ObjectArg; orderId: bigint | TransactionArgument; accountCap: ObjectArg }

export function cancelOrder( txb: TransactionBlock, typeArgs: [string, string], args: CancelOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::cancel_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.orderId, `u64`), obj(txb, args.accountCap) ], }) }

export function orderId( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::order_id`, arguments: [ obj(txb, order) ], }) }

export function createAccount( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_account`, arguments: [ ], }) }

export interface CreatePoolArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: ObjectArg }

export function createPool( txb: TransactionBlock, typeArgs: [string, string], args: CreatePoolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool`, typeArguments: typeArgs, arguments: [ pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), obj(txb, args.creationFee) ], }) }

export interface DepositBaseArgs { pool: ObjectArg; coin: ObjectArg; accountCap: ObjectArg }

export function depositBase( txb: TransactionBlock, typeArgs: [string, string], args: DepositBaseArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::deposit_base`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.coin), obj(txb, args.accountCap) ], }) }

export interface DepositQuoteArgs { pool: ObjectArg; coin: ObjectArg; accountCap: ObjectArg }

export function depositQuote( txb: TransactionBlock, typeArgs: [string, string], args: DepositQuoteArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::deposit_quote`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.coin), obj(txb, args.accountCap) ], }) }

export function destroyEmptyLevel( txb: TransactionBlock, level: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::destroy_empty_level`, arguments: [ obj(txb, level) ], }) }

export interface EmitOrderCanceledArgs { poolId: string | TransactionArgument; order: ObjectArg }

export function emitOrderCanceled( txb: TransactionBlock, typeArgs: [string, string], args: EmitOrderCanceledArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::emit_order_canceled`, typeArguments: typeArgs, arguments: [ pure(txb, args.poolId, `0x2::object::ID`), obj(txb, args.order) ], }) }

export interface EmitOrderFilledArgs { poolId: string | TransactionArgument; takerClientId: bigint | TransactionArgument; takerAddress: string | TransactionArgument; order: ObjectArg; baseAssetQuantityFilled: bigint | TransactionArgument; takerCommission: bigint | TransactionArgument; makerRebates: bigint | TransactionArgument }

export function emitOrderFilled( txb: TransactionBlock, typeArgs: [string, string], args: EmitOrderFilledArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::emit_order_filled`, typeArguments: typeArgs, arguments: [ pure(txb, args.poolId, `0x2::object::ID`), pure(txb, args.takerClientId, `u64`), pure(txb, args.takerAddress, `address`), obj(txb, args.order), pure(txb, args.baseAssetQuantityFilled, `u64`), pure(txb, args.takerCommission, `u64`), pure(txb, args.makerRebates, `u64`) ], }) }

export interface GetLevel2BookStatusArgs { openOrders: ObjectArg; price: bigint | TransactionArgument; timeStamp: bigint | TransactionArgument }

export function getLevel2BookStatus( txb: TransactionBlock, args: GetLevel2BookStatusArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_level2_book_status`, arguments: [ obj(txb, args.openOrders), pure(txb, args.price, `u64`), pure(txb, args.timeStamp, `u64`) ], }) }

export function openOrders( txb: TransactionBlock, tickLevel: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::open_orders`, arguments: [ obj(txb, tickLevel) ], }) }

export interface GetLevel2BookStatusAskSideArgs { pool: ObjectArg; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: ObjectArg }

export function getLevel2BookStatusAskSide( txb: TransactionBlock, typeArgs: [string, string], args: GetLevel2BookStatusAskSideArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_level2_book_status_ask_side`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.priceLow, `u64`), pure(txb, args.priceHigh, `u64`), obj(txb, args.clock) ], }) }

export interface GetLevel2BookStatusBidSideArgs { pool: ObjectArg; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: ObjectArg }

export function getLevel2BookStatusBidSide( txb: TransactionBlock, typeArgs: [string, string], args: GetLevel2BookStatusBidSideArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_level2_book_status_bid_side`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.priceLow, `u64`), pure(txb, args.priceHigh, `u64`), obj(txb, args.clock) ], }) }

export function getMarketPrice( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_market_price`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export interface GetOrderStatusArgs { pool: ObjectArg; orderId: bigint | TransactionArgument; accountCap: ObjectArg }

export function getOrderStatus( txb: TransactionBlock, typeArgs: [string, string], args: GetOrderStatusArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_order_status`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.orderId, `u64`), obj(txb, args.accountCap) ], }) }

export interface InjectLimitOrderArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; originalQuantity: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; expireTimestamp: bigint | TransactionArgument; accountCap: ObjectArg }

export function injectLimitOrder( txb: TransactionBlock, typeArgs: [string, string], args: InjectLimitOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::inject_limit_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), pure(txb, args.price, `u64`), pure(txb, args.originalQuantity, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.isBid, `bool`), pure(txb, args.selfMatchingPrevention, `u8`), pure(txb, args.expireTimestamp, `u64`), obj(txb, args.accountCap) ], }) }

export function isBid( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::is_bid`, arguments: [ obj(txb, order) ], }) }

export function expireTimestamp( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::expire_timestamp`, arguments: [ obj(txb, order) ], }) }

export interface ListOpenOrdersArgs { pool: ObjectArg; accountCap: ObjectArg }

export function listOpenOrders( txb: TransactionBlock, typeArgs: [string, string], args: ListOpenOrdersArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::list_open_orders`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap) ], }) }

export interface MatchAskArgs { pool: ObjectArg; accountCap: ObjectArg; clientOrderId: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; baseBalance: ObjectArg; computeMetadata: boolean | TransactionArgument }

export function matchAsk( txb: TransactionBlock, typeArgs: [string, string], args: MatchAskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::match_ask`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap), pure(txb, args.clientOrderId, `u64`), pure(txb, args.priceLimit, `u64`), pure(txb, args.currentTimestamp, `u64`), obj(txb, args.baseBalance), pure(txb, args.computeMetadata, `bool`) ], }) }

export interface MatchBidArgs { pool: ObjectArg; accountCap: ObjectArg; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: ObjectArg; computeMetadata: boolean | TransactionArgument }

export function matchBid( txb: TransactionBlock, typeArgs: [string, string], args: MatchBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::match_bid`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap), pure(txb, args.clientOrderId, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.priceLimit, `u64`), pure(txb, args.currentTimestamp, `u64`), obj(txb, args.quoteBalance), pure(txb, args.computeMetadata, `bool`) ], }) }

export interface MatchBidWithQuoteQuantityArgs { pool: ObjectArg; accountCap: ObjectArg; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: ObjectArg; computeMetadata: boolean | TransactionArgument }

export function matchBidWithQuoteQuantity( txb: TransactionBlock, typeArgs: [string, string], args: MatchBidWithQuoteQuantityArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::match_bid_with_quote_quantity`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap), pure(txb, args.clientOrderId, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.priceLimit, `u64`), pure(txb, args.currentTimestamp, `u64`), obj(txb, args.quoteBalance), pure(txb, args.computeMetadata, `bool`) ], }) }

export function orderIsBid( txb: TransactionBlock, orderId: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::order_is_bid`, arguments: [ pure(txb, orderId, `u64`) ], }) }

export interface PlaceLimitOrderArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: ObjectArg; accountCap: ObjectArg }

export function placeLimitOrder( txb: TransactionBlock, typeArgs: [string, string], args: PlaceLimitOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_limit_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), pure(txb, args.price, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.selfMatchingPrevention, `u8`), pure(txb, args.isBid, `bool`), pure(txb, args.expireTimestamp, `u64`), pure(txb, args.restriction, `u8`), obj(txb, args.clock), obj(txb, args.accountCap) ], }) }

export interface PlaceMarketOrderArgs { pool: ObjectArg; accountCap: ObjectArg; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: ObjectArg; quoteCoin: ObjectArg; clock: ObjectArg }

export function placeMarketOrder( txb: TransactionBlock, typeArgs: [string, string], args: PlaceMarketOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_market_order`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap), pure(txb, args.clientOrderId, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.isBid, `bool`), obj(txb, args.baseCoin), obj(txb, args.quoteCoin), obj(txb, args.clock) ], }) }

export interface RemoveOrderArgs { openOrders: ObjectArg; usrOpenOrders: ObjectArg; tickIndex: bigint | TransactionArgument; orderId: bigint | TransactionArgument; owner: string | TransactionArgument }

export function removeOrder( txb: TransactionBlock, args: RemoveOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::remove_order`, arguments: [ obj(txb, args.openOrders), obj(txb, args.usrOpenOrders), pure(txb, args.tickIndex, `u64`), pure(txb, args.orderId, `u64`), pure(txb, args.owner, `address`) ], }) }

export function usrOpenOrders( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::usr_open_orders`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export interface SwapExactBaseForQuoteArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; accountCap: ObjectArg; quantity: bigint | TransactionArgument; baseCoin: ObjectArg; quoteCoin: ObjectArg; clock: ObjectArg }

export function swapExactBaseForQuote( txb: TransactionBlock, typeArgs: [string, string], args: SwapExactBaseForQuoteArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_base_for_quote`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`), obj(txb, args.baseCoin), obj(txb, args.quoteCoin), obj(txb, args.clock) ], }) }

export interface SwapExactQuoteForBaseArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; accountCap: ObjectArg; quantity: bigint | TransactionArgument; clock: ObjectArg; quoteCoin: ObjectArg }

export function swapExactQuoteForBase( txb: TransactionBlock, typeArgs: [string, string], args: SwapExactQuoteForBaseArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_quote_for_base`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`), obj(txb, args.clock), obj(txb, args.quoteCoin) ], }) }

export interface WithdrawBaseArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; accountCap: ObjectArg }

export function withdrawBase( txb: TransactionBlock, typeArgs: [string, string], args: WithdrawBaseArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::withdraw_base`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), obj(txb, args.accountCap) ], }) }

export interface WithdrawQuoteArgs { pool: ObjectArg; quantity: bigint | TransactionArgument; accountCap: ObjectArg }

export function withdrawQuote( txb: TransactionBlock, typeArgs: [string, string], args: WithdrawQuoteArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::withdraw_quote`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.quantity, `u64`), obj(txb, args.accountCap) ], }) }

export function asks( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::asks`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export function bids( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::bids`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export function makerRebateRate( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::maker_rebate_rate`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export function takerFeeRate( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::taker_fee_rate`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export function tickSize( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::tick_size`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export interface CleanUpExpiredOrdersArgs { pool: ObjectArg; clock: ObjectArg; orderIds: Array<bigint | TransactionArgument> | TransactionArgument; orderOwners: Array<string | TransactionArgument> | TransactionArgument }

export function cleanUpExpiredOrders( txb: TransactionBlock, typeArgs: [string, string], args: CleanUpExpiredOrdersArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::clean_up_expired_orders`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.clock), pure(txb, args.orderIds, `vector<u64>`), pure(txb, args.orderOwners, `vector<address>`) ], }) }

export function cloneOrder( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::clone_order`, arguments: [ obj(txb, order) ], }) }

export interface CreateCustomizedPoolArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; creationFee: ObjectArg }

export function createCustomizedPool( txb: TransactionBlock, typeArgs: [string, string], args: CreateCustomizedPoolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_customized_pool`, typeArguments: typeArgs, arguments: [ pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), pure(txb, args.takerFeeRate, `u64`), pure(txb, args.makerRebateRate, `u64`), obj(txb, args.creationFee) ], }) }

export interface CreateCustomizedPoolV2Args { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; creationFee: ObjectArg }

export function createCustomizedPoolV2( txb: TransactionBlock, typeArgs: [string, string], args: CreateCustomizedPoolV2Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_customized_pool_v2`, typeArguments: typeArgs, arguments: [ pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), pure(txb, args.takerFeeRate, `u64`), pure(txb, args.makerRebateRate, `u64`), obj(txb, args.creationFee) ], }) }

export interface CreateCustomizedPoolWithReturnArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; creationFee: ObjectArg }

export function createCustomizedPoolWithReturn( txb: TransactionBlock, typeArgs: [string, string], args: CreateCustomizedPoolWithReturnArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_customized_pool_with_return`, typeArguments: typeArgs, arguments: [ pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), pure(txb, args.takerFeeRate, `u64`), pure(txb, args.makerRebateRate, `u64`), obj(txb, args.creationFee) ], }) }

export interface CreatePool_Args { takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: ObjectArg }

export function createPool_( txb: TransactionBlock, typeArgs: [string, string], args: CreatePool_Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool_`, typeArguments: typeArgs, arguments: [ pure(txb, args.takerFeeRate, `u64`), pure(txb, args.makerRebateRate, `u64`), pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), obj(txb, args.creationFee) ], }) }

export interface CreatePoolWithReturnArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: ObjectArg }

export function createPoolWithReturn( txb: TransactionBlock, typeArgs: [string, string], args: CreatePoolWithReturnArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool_with_return`, typeArguments: typeArgs, arguments: [ pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), obj(txb, args.creationFee) ], }) }

export interface CreatePoolWithReturn_Args { takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: ObjectArg }

export function createPoolWithReturn_( txb: TransactionBlock, typeArgs: [string, string], args: CreatePoolWithReturn_Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool_with_return_`, typeArguments: typeArgs, arguments: [ pure(txb, args.takerFeeRate, `u64`), pure(txb, args.makerRebateRate, `u64`), pure(txb, args.tickSize, `u64`), pure(txb, args.lotSize, `u64`), obj(txb, args.creationFee) ], }) }

export function deletePoolOwnerCap( txb: TransactionBlock, poolOwnerCap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::delete_pool_owner_cap`, arguments: [ obj(txb, poolOwnerCap) ], }) }

export function originalQuantity( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::original_quantity`, arguments: [ obj(txb, order) ], }) }

export interface MatchedOrderMetadataArgs { poolId: string | TransactionArgument; takerAddress: string | TransactionArgument; order: ObjectArg; baseAssetQuantityFilled: bigint | TransactionArgument; takerCommission: bigint | TransactionArgument; makerRebates: bigint | TransactionArgument }

export function matchedOrderMetadata( txb: TransactionBlock, typeArgs: [string, string], args: MatchedOrderMetadataArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::matched_order_metadata`, typeArguments: typeArgs, arguments: [ pure(txb, args.poolId, `0x2::object::ID`), pure(txb, args.takerAddress, `address`), obj(txb, args.order), pure(txb, args.baseAssetQuantityFilled, `u64`), pure(txb, args.takerCommission, `u64`), pure(txb, args.makerRebates, `u64`) ], }) }

export function matchedOrderMetadataInfo( txb: TransactionBlock, typeArgs: [string, string], matchedOrderMetadata: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::matched_order_metadata_info`, typeArguments: typeArgs, arguments: [ obj(txb, matchedOrderMetadata) ], }) }

export function tickLevel( txb: TransactionBlock, order: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::tick_level`, arguments: [ obj(txb, order) ], }) }

export interface PlaceLimitOrderIntArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: ObjectArg; accountCap: ObjectArg; computeMetadata: boolean | TransactionArgument }

export function placeLimitOrderInt( txb: TransactionBlock, typeArgs: [string, string], args: PlaceLimitOrderIntArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_limit_order_int`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), pure(txb, args.price, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.selfMatchingPrevention, `u8`), pure(txb, args.isBid, `bool`), pure(txb, args.expireTimestamp, `u64`), pure(txb, args.restriction, `u8`), obj(txb, args.clock), obj(txb, args.accountCap), pure(txb, args.computeMetadata, `bool`) ], }) }

export interface PlaceLimitOrderWithMetadataArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: ObjectArg; accountCap: ObjectArg }

export function placeLimitOrderWithMetadata( txb: TransactionBlock, typeArgs: [string, string], args: PlaceLimitOrderWithMetadataArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_limit_order_with_metadata`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), pure(txb, args.price, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.selfMatchingPrevention, `u8`), pure(txb, args.isBid, `bool`), pure(txb, args.expireTimestamp, `u64`), pure(txb, args.restriction, `u8`), obj(txb, args.clock), obj(txb, args.accountCap) ], }) }

export interface PlaceMarketOrderIntArgs { pool: ObjectArg; accountCap: ObjectArg; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: ObjectArg; quoteCoin: ObjectArg; clock: ObjectArg; computeMetadata: boolean | TransactionArgument }

export function placeMarketOrderInt( txb: TransactionBlock, typeArgs: [string, string], args: PlaceMarketOrderIntArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_market_order_int`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap), pure(txb, args.clientOrderId, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.isBid, `bool`), obj(txb, args.baseCoin), obj(txb, args.quoteCoin), obj(txb, args.clock), pure(txb, args.computeMetadata, `bool`) ], }) }

export interface PlaceMarketOrderWithMetadataArgs { pool: ObjectArg; accountCap: ObjectArg; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: ObjectArg; quoteCoin: ObjectArg; clock: ObjectArg }

export function placeMarketOrderWithMetadata( txb: TransactionBlock, typeArgs: [string, string], args: PlaceMarketOrderWithMetadataArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_market_order_with_metadata`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), obj(txb, args.accountCap), pure(txb, args.clientOrderId, `u64`), pure(txb, args.quantity, `u64`), pure(txb, args.isBid, `bool`), obj(txb, args.baseCoin), obj(txb, args.quoteCoin), obj(txb, args.clock) ], }) }

export function poolSize( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::pool_size`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export function quoteAssetTradingFeesValue( txb: TransactionBlock, typeArgs: [string, string], pool: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::quote_asset_trading_fees_value`, typeArguments: typeArgs, arguments: [ obj(txb, pool) ], }) }

export interface SwapExactBaseForQuoteWithMetadataArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; accountCap: ObjectArg; quantity: bigint | TransactionArgument; baseCoin: ObjectArg; quoteCoin: ObjectArg; clock: ObjectArg }

export function swapExactBaseForQuoteWithMetadata( txb: TransactionBlock, typeArgs: [string, string], args: SwapExactBaseForQuoteWithMetadataArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_base_for_quote_with_metadata`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`), obj(txb, args.baseCoin), obj(txb, args.quoteCoin), obj(txb, args.clock) ], }) }

export interface SwapExactQuoteForBaseWithMetadataArgs { pool: ObjectArg; clientOrderId: bigint | TransactionArgument; accountCap: ObjectArg; quantity: bigint | TransactionArgument; clock: ObjectArg; quoteCoin: ObjectArg }

export function swapExactQuoteForBaseWithMetadata( txb: TransactionBlock, typeArgs: [string, string], args: SwapExactQuoteForBaseWithMetadataArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_quote_for_base_with_metadata`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.clientOrderId, `u64`), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`), obj(txb, args.clock), obj(txb, args.quoteCoin) ], }) }

export interface UsrOpenOrdersExistArgs { pool: ObjectArg; owner: string | TransactionArgument }

export function usrOpenOrdersExist( txb: TransactionBlock, typeArgs: [string, string], args: UsrOpenOrdersExistArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::usr_open_orders_exist`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.owner, `address`) ], }) }

export interface UsrOpenOrdersForAddressArgs { pool: ObjectArg; owner: string | TransactionArgument }

export function usrOpenOrdersForAddress( txb: TransactionBlock, typeArgs: [string, string], args: UsrOpenOrdersForAddressArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::usr_open_orders_for_address`, typeArguments: typeArgs, arguments: [ obj(txb, args.pool), pure(txb, args.owner, `address`) ], }) }

export interface WithdrawFeesArgs { poolOwnerCap: ObjectArg; pool: ObjectArg }

export function withdrawFees( txb: TransactionBlock, typeArgs: [string, string], args: WithdrawFeesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::clob_v2::withdraw_fees`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolOwnerCap), obj(txb, args.pool) ], }) }
