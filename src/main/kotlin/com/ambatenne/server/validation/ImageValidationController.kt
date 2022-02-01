package com.ambatenne.server.validation

import com.ambatenne.libs.image.validation.isHumanImage
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("api/v1/image")
@CrossOrigin("*")
class ImageValidationController {

    @PostMapping(
        path = ["validate"],
        consumes = [MediaType.MULTIPART_FORM_DATA_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    suspend fun validateImage(@RequestParam("file") file: MultipartFile): Boolean {
        return isHumanImage(file.bytes)
    }

}