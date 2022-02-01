package com.ambatenne.libs.image.validation

import kotlinx.coroutines.runBlocking
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class ImageValidationTest {

    @Test
    fun testFaceFinding() = runBlocking {
        val actual = isHumanImage(File("../../desktop/growth.png").readBytes())
        assertEquals(false, actual)
    }

}