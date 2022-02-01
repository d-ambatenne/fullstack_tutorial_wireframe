package com.ambatenne.libs.image.validation

import com.ambatenne.libs.image.validation.prediction.objectDetectionSSD
import java.io.File
import java.io.FileOutputStream


suspend fun isHumanImage(image: ByteArray): Boolean {

    val tempFile = File.createTempFile("imgTmpFile", null, null)
    val fos = FileOutputStream(tempFile)
    fos.write(image)

    if (objectDetectionSSD(tempFile) == "person") return true

    return false
}
