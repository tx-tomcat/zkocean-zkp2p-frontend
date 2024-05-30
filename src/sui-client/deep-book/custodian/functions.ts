import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export function new_( txb: TransactionBlock, typeArg: string, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::new`, typeArguments: [typeArg], arguments: [ ], }) }

export interface AccountAvailableBalanceArgs { custodian: ObjectArg; user: string | TransactionArgument }

export function accountAvailableBalance( txb: TransactionBlock, typeArg: string, args: AccountAvailableBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::account_available_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.user, `0x2::object::ID`) ], }) }

export interface AccountBalanceArgs { custodian: ObjectArg; user: string | TransactionArgument }

export function accountBalance( txb: TransactionBlock, typeArg: string, args: AccountBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::account_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.user, `0x2::object::ID`) ], }) }

export interface AccountLockedBalanceArgs { custodian: ObjectArg; user: string | TransactionArgument }

export function accountLockedBalance( txb: TransactionBlock, typeArg: string, args: AccountLockedBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::account_locked_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.user, `0x2::object::ID`) ], }) }

export interface BorrowMutAccountBalanceArgs { custodian: ObjectArg; user: string | TransactionArgument }

export function borrowMutAccountBalance( txb: TransactionBlock, typeArg: string, args: BorrowMutAccountBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::borrow_mut_account_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.user, `0x2::object::ID`) ], }) }

export interface DecreaseUserAvailableBalanceArgs { custodian: ObjectArg; accountCap: ObjectArg; quantity: bigint | TransactionArgument }

export function decreaseUserAvailableBalance( txb: TransactionBlock, typeArg: string, args: DecreaseUserAvailableBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::decrease_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`) ], }) }

export interface DecreaseUserLockedBalanceArgs { custodian: ObjectArg; user: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function decreaseUserLockedBalance( txb: TransactionBlock, typeArg: string, args: DecreaseUserLockedBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::decrease_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.user, `0x2::object::ID`), pure(txb, args.quantity, `u64`) ], }) }

export interface IncreaseUserAvailableBalanceArgs { custodian: ObjectArg; user: string | TransactionArgument; quantity: ObjectArg }

export function increaseUserAvailableBalance( txb: TransactionBlock, typeArg: string, args: IncreaseUserAvailableBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::increase_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.user, `0x2::object::ID`), obj(txb, args.quantity) ], }) }

export interface IncreaseUserLockedBalanceArgs { custodian: ObjectArg; accountCap: ObjectArg; quantity: ObjectArg }

export function increaseUserLockedBalance( txb: TransactionBlock, typeArg: string, args: IncreaseUserLockedBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::increase_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), obj(txb, args.accountCap), obj(txb, args.quantity) ], }) }

export interface LockBalanceArgs { custodian: ObjectArg; accountCap: ObjectArg; quantity: bigint | TransactionArgument }

export function lockBalance( txb: TransactionBlock, typeArg: string, args: LockBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::lock_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`) ], }) }

export function mintAccountCap( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::mint_account_cap`, arguments: [ ], }) }

export interface UnlockBalanceArgs { custodian: ObjectArg; user: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function unlockBalance( txb: TransactionBlock, typeArg: string, args: UnlockBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::unlock_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.user, `0x2::object::ID`), pure(txb, args.quantity, `u64`) ], }) }

export interface WithdrawAssetArgs { custodian: ObjectArg; quantity: bigint | TransactionArgument; accountCap: ObjectArg }

export function withdrawAsset( txb: TransactionBlock, typeArg: string, args: WithdrawAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian::withdraw_asset`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.quantity, `u64`), obj(txb, args.accountCap) ], }) }
