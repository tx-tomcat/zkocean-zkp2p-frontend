import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface CancelOrderArgs { ramp: ObjectArg; orderId: bigint | TransactionArgument; clock: ObjectArg }

export function cancelOrder( txb: TransactionBlock, args: CancelOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::cancel_order`, arguments: [ obj(txb, args.ramp), pure(txb, args.orderId, `u64`), obj(txb, args.clock) ], }) }

export interface AdminReleaseOrderFundsArgs { adminCap: ObjectArg; ramp: ObjectArg; orderClaimId: bigint | TransactionArgument }

export function adminReleaseOrderFunds( txb: TransactionBlock, args: AdminReleaseOrderFundsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::admin_release_order_funds`, arguments: [ obj(txb, args.adminCap), obj(txb, args.ramp), pure(txb, args.orderClaimId, `u64`) ], }) }

export interface BuyerClaimOrderFundsArgs { ramp: ObjectArg; orderClaimId: bigint | TransactionArgument; clock: ObjectArg }

export function buyerClaimOrderFunds( txb: TransactionBlock, args: BuyerClaimOrderFundsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::buyer_claim_order_funds`, arguments: [ obj(txb, args.ramp), pure(txb, args.orderClaimId, `u64`), obj(txb, args.clock) ], }) }

export interface CancelClaimOrderArgs { ramp: ObjectArg; orderClaimId: bigint | TransactionArgument }

export function cancelClaimOrder( txb: TransactionBlock, args: CancelClaimOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::cancel_claim_order`, arguments: [ obj(txb, args.ramp), pure(txb, args.orderClaimId, `u64`) ], }) }

export interface CheckOrderClaimArgs { ramp: ObjectArg; orderClaimId: bigint | TransactionArgument; clock: ObjectArg }

export function checkOrderClaim( txb: TransactionBlock, args: CheckOrderClaimArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::check_order_claim`, arguments: [ obj(txb, args.ramp), pure(txb, args.orderClaimId, `u64`), obj(txb, args.clock) ], }) }

export interface ClaimOrderArgs { ramp: ObjectArg; orderId: bigint | TransactionArgument; claimExpirationTime: bigint | TransactionArgument }

export function claimOrder( txb: TransactionBlock, args: ClaimOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::claim_order`, arguments: [ obj(txb, args.ramp), pure(txb, args.orderId, `u64`), pure(txb, args.claimExpirationTime, `u64`) ], }) }

export interface CreateOrderArgs { ramp: ObjectArg; coin: ObjectArg; paymentKey: string | TransactionArgument; hashName: string | TransactionArgument; amountToReceive: string | TransactionArgument }

export function createOrder( txb: TransactionBlock, args: CreateOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::create_order`, arguments: [ obj(txb, args.ramp), obj(txb, args.coin), pure(txb, args.paymentKey, `0x1::string::String`), pure(txb, args.hashName, `0x1::string::String`), pure(txb, args.amountToReceive, `0x1::string::String`) ], }) }

export function getValue( txb: TransactionBlock, balance: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::get_value`, arguments: [ obj(txb, balance) ], }) }

export function init( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::init`, arguments: [ ], }) }

export interface IsExistsOrderArgs { orderId: bigint | TransactionArgument; ramp: ObjectArg }

export function isExistsOrder( txb: TransactionBlock, args: IsExistsOrderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::is_exists_order`, arguments: [ pure(txb, args.orderId, `u64`), obj(txb, args.ramp) ], }) }

export interface IsExistsOrderClaimArgs { orderClaimId: bigint | TransactionArgument; ramp: ObjectArg }

export function isExistsOrderClaim( txb: TransactionBlock, args: IsExistsOrderClaimArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::is_exists_order_claim`, arguments: [ pure(txb, args.orderClaimId, `u64`), obj(txb, args.ramp) ], }) }

export interface ReleaseOrderFundsArgs { ramp: ObjectArg; orderClaimId: bigint | TransactionArgument }

export function releaseOrderFunds( txb: TransactionBlock, args: ReleaseOrderFundsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::release_order_funds`, arguments: [ obj(txb, args.ramp), pure(txb, args.orderClaimId, `u64`) ], }) }

export interface UpdateClaimOrderStatusArgs { ramp: ObjectArg; orderClaimId: bigint | TransactionArgument; status: number | TransactionArgument; claimExpirationTime: (bigint | TransactionArgument | TransactionArgument | null) }

export function updateClaimOrderStatus( txb: TransactionBlock, args: UpdateClaimOrderStatusArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::update_claim_order_status`, arguments: [ obj(txb, args.ramp), pure(txb, args.orderClaimId, `u64`), pure(txb, args.status, `u8`), pure(txb, args.claimExpirationTime, `0x1::option::Option<u64>`) ], }) }

export interface VerifyProofArgs { ramp: ObjectArg; vkBytes: Array<number | TransactionArgument> | TransactionArgument; publicInputsBytes: Array<number | TransactionArgument> | TransactionArgument; proofPointsBytes: Array<number | TransactionArgument> | TransactionArgument; orderClaimId: bigint | TransactionArgument }

export function verifyProof( txb: TransactionBlock, args: VerifyProofArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::core::verify_proof`, arguments: [ obj(txb, args.ramp), pure(txb, args.vkBytes, `vector<u8>`), pure(txb, args.publicInputsBytes, `vector<u8>`), pure(txb, args.proofPointsBytes, `vector<u8>`), pure(txb, args.orderClaimId, `u64`) ], }) }
