import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface MulArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function mul( txb: TransactionBlock, args: MulArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::mul`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }

export function countLeadingZeros( txb: TransactionBlock, x: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::count_leading_zeros`, arguments: [ pure(txb, x, `u128`) ], }) }

export interface DivRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function divRound( txb: TransactionBlock, args: DivRoundArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::div_round`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }

export interface MulRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function mulRound( txb: TransactionBlock, args: MulRoundArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::mul_round`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }

export interface UnsafeDivArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeDiv( txb: TransactionBlock, args: UnsafeDivArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_div`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }

export interface UnsafeDivRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeDivRound( txb: TransactionBlock, args: UnsafeDivRoundArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_div_round`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }

export interface UnsafeMulArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeMul( txb: TransactionBlock, args: UnsafeMulArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_mul`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }

export interface UnsafeMulRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeMulRound( txb: TransactionBlock, args: UnsafeMulRoundArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_mul_round`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }
