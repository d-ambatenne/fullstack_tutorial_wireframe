@file:JsModule("@tensorflow-models/blazeface")
@file:JsNonModule

import io.ktor.client.fetch.*
import kotlin.js.Promise

external fun load(): Promise<BlazeFaceModel>
external class BlazeFaceModel {
    fun estimateFaces(image: Uint8Array, b: Boolean): Promise<Array<NormalizedFace>>
}
external interface NormalizedFace