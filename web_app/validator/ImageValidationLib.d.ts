type Nullable<T> = T | null | undefined
export namespace kotlinx.atomicfu {
    function atomic$ref$<T>(initial: T, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicRef<T>;
    function atomic$boolean$(initial: boolean, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicBoolean;
    function atomic$int$(initial: number, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicInt;
    function atomic$long$(initial: kotlin.Long, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicLong;
}
export namespace io.ktor.util {
    function AttributesJsFn(concurrent: boolean): io.ktor.util.Attributes;
}
export function isHumanImage(image: io.ktor.client.fetch.Uint8Array): kotlin.js.Promise<boolean>;
export as namespace ImageValidationLib;