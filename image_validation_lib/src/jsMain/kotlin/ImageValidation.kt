import io.ktor.client.fetch.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.promise
import kotlin.js.Promise

@JsExport
fun isHumanImage(image: Uint8Array): Promise<Boolean> {

    return GlobalScope.promise {

        console.log("Before load")

        var model = load().await()

        console.log("After load")

        var predictions = model.estimateFaces(image, false).await()

        console.log("After estimation")
        console.log("typeof", js("predictions.length"))

        return@promise predictions.isNotEmpty()
    }

}