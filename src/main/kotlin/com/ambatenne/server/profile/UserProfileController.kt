package com.ambatenne.server.profile

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import java.util.*

@RestController
@RequestMapping("api/v1/userprofile")
@CrossOrigin("*")
class UserProfileController(@Autowired val userProfileListSrv: UserProfileService) {

    @GetMapping("/list")
    fun getUserProfileList(): List<UserProfile> {
        return userProfileListSrv.getUserProfilesList()
    }

    @PostMapping(
        path = ["{userProfId}/image/upload"],
        consumes = [MediaType.MULTIPART_FORM_DATA_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    suspend fun uploadUserProfileImage(@PathVariable("userProfId") userProfId: UUID,
                                       @RequestParam("file") file: MultipartFile) {
        userProfileListSrv.uploadUserProfileImage(userProfId, file)
    }

    @GetMapping("{userProfId}/image/download")
    suspend fun downloadUserProfileImage(@PathVariable("userProfId") userProfId: UUID): ByteArray {
        return userProfileListSrv.downloadUserProfileImage(userProfId)

    }
}