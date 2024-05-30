import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export function new_( txb: TransactionBlock, typeArg: string, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::new`, typeArguments: [typeArg], arguments: [ ], }) }

export interface AccountAvailableBalanceArgs { custodian: ObjectArg; owner: string | TransactionArgument }

export function accountAvailableBalance( txb: TransactionBlock, typeArg: string, args: AccountAvailableBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_available_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.owner, `address`) ], }) }

export interface AccountBalanceArgs { custodian: ObjectArg; owner: string | TransactionArgument }

export function accountBalance( txb: TransactionBlock, typeArg: string, args: AccountBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.owner, `address`) ], }) }

export interface AccountLockedBalanceArgs { custodian: ObjectArg; owner: string | TransactionArgument }

export function accountLockedBalance( txb: TransactionBlock, typeArg: string, args: AccountLockedBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_locked_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.owner, `address`) ], }) }

export interface BorrowMutAccountBalanceArgs { custodian: ObjectArg; owner: string | TransactionArgument }

export function borrowMutAccountBalance( txb: TransactionBlock, typeArg: string, args: BorrowMutAccountBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::borrow_mut_account_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.owner, `address`) ], }) }

export interface DecreaseUserAvailableBalanceArgs { custodian: ObjectArg; accountCap: ObjectArg; quantity: bigint | TransactionArgument }

export function decreaseUserAvailableBalance( txb: TransactionBlock, typeArg: string, args: DecreaseUserAvailableBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::decrease_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`) ], }) }

export interface DecreaseUserLockedBalanceArgs { custodian: ObjectArg; owner: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function decreaseUserLockedBalance( txb: TransactionBlock, typeArg: string, args: DecreaseUserLockedBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::decrease_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.owner, `address`), pure(txb, args.quantity, `u64`) ], }) }

export interface IncreaseUserAvailableBalanceArgs { custodian: ObjectArg; owner: string | TransactionArgument; quantity: ObjectArg }

export function increaseUserAvailableBalance( txb: TransactionBlock, typeArg: string, args: IncreaseUserAvailableBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::increase_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.owner, `address`), obj(txb, args.quantity) ], }) }

export interface IncreaseUserLockedBalanceArgs { custodian: ObjectArg; accountCap: ObjectArg; quantity: ObjectArg }

export function increaseUserLockedBalance( txb: TransactionBlock, typeArg: string, args: IncreaseUserLockedBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::increase_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), obj(txb, args.accountCap), obj(txb, args.quantity) ], }) }

export interface LockBalanceArgs { custodian: ObjectArg; accountCap: ObjectArg; quantity: bigint | TransactionArgument }

export function lockBalance( txb: TransactionBlock, typeArg: string, args: LockBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::lock_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), obj(txb, args.accountCap), pure(txb, args.quantity, `u64`) ], }) }

export function mintAccountCap( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::mint_account_cap`, arguments: [ ], }) }

export interface UnlockBalanceArgs { custodian: ObjectArg; owner: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function unlockBalance( txb: TransactionBlock, typeArg: string, args: UnlockBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::unlock_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.owner, `address`), pure(txb, args.quantity, `u64`) ], }) }

export interface WithdrawAssetArgs { custodian: ObjectArg; quantity: bigint | TransactionArgument; accountCap: ObjectArg }

export function withdrawAsset( txb: TransactionBlock, typeArg: string, args: WithdrawAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::withdraw_asset`, typeArguments: [typeArg], arguments: [ obj(txb, args.custodian), pure(txb, args.quantity, `u64`), obj(txb, args.accountCap) ], }) }

export function accountOwner( txb: TransactionBlock, accountCap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_owner`, arguments: [ obj(txb, accountCap) ], }) }

export function createChildAccountCap( txb: TransactionBlock, adminAccountCap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::create_child_account_cap`, arguments: [ obj(txb, adminAccountCap) ], }) }

export function deleteAccountCap( txb: TransactionBlock, accountCap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::delete_account_cap`, arguments: [ obj(txb, accountCap) ], }) }
