import * as core from "./core/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(core.Order);
loader.register(core.AdminCap);
loader.register(core.OrderClaim);
loader.register(core.OrderEntry);
loader.register(core.VerifiedEvent);
loader.register(core.ZKRamp);
 }
