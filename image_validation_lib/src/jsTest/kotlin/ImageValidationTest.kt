import kotlin.test.Test
import kotlin.test.assertEquals

class ImageValidationTest {
    private val file = byteArrayOf()

    @Test
    fun testFaceFinding() {
        val actual = isHumanImage(file)
        actual.then { res ->
            assertEquals(true, res)
        }.catch { err -> println(err) }
    }

}