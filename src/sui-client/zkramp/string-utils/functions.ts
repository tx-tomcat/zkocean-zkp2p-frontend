import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export function charToDigit( txb: TransactionBlock, c: number | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::string_utils::char_to_digit`, arguments: [ pure(txb, c, `u8`) ], }) }

export interface ConvertPackedBytesToStringArgs { packedBytes: Array<number | TransactionArgument> | TransactionArgument; signals: bigint | TransactionArgument; packSize: bigint | TransactionArgument }

export function convertPackedBytesToString( txb: TransactionBlock, args: ConvertPackedBytesToStringArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::string_utils::convert_packed_bytes_to_string`, arguments: [ pure(txb, args.packedBytes, `vector<u8>`), pure(txb, args.signals, `u64`), pure(txb, args.packSize, `u64`) ], }) }

export function stringToU64( txb: TransactionBlock, s: string | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::string_utils::string_to_u64`, arguments: [ pure(txb, s, `0x1::string::String`) ], }) }
