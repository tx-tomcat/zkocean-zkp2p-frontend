import * as package_1 from "../_dependencies/source/0x1/init";
import * as package_2 from "../_dependencies/source/0x2/init";
import * as package_dee9 from "../deep-book/init";
import * as package_88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd from "../zkramp/init";
import {structClassLoaderSource as structClassLoader} from "./loader";

let initialized = false; export function initLoaderIfNeeded() { if (initialized) { return }; initialized = true; package_1.registerClasses(structClassLoader);
package_2.registerClasses(structClassLoader);
package_dee9.registerClasses(structClassLoader);
package_88dfad1e68a50ade5634883b4c6dfe90eab314e6260e881799f69ac3c101d5cd.registerClasses(structClassLoader);
 }
