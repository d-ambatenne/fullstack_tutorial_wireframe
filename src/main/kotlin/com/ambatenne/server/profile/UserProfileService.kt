package com.ambatenne.server.profile

import aws.smithy.kotlin.runtime.content.ByteStream
import com.ambatenne.server.filestore.FileStorage
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.util.*

@Service
class UserProfileService(@Autowired val data: UserProfileDAOService, @Autowired val fileStore: FileStorage) {
    fun getUserProfilesList(): List<UserProfile> {
        return data.getUserProfilesList()
    }

    suspend fun uploadUserProfileImage(userProfId: UUID, file: MultipartFile){

        if (!file.isEmpty && file.contentType?.contains("image/") == true) {
            val userProfile = data.findUserProfile(userProfId)
            if (userProfile != null) {
                val metadata = mutableMapOf<String, String>("filename" to file.originalFilename.toString(),
                                                                "content-type" to file.contentType.toString(),
                                                                "size" to file.size.toString())
                val key = userProfId.toString() + '/' + file.originalFilename.toString() + UUID.randomUUID().toString()
                fileStore.saveFile(key, metadata, ByteStream.fromBytes(file.bytes))
                userProfile.UPFileImageLink = key
                data.saveUserProfile(userProfile)
            }
        }
    }

    suspend fun downloadUserProfileImage(userProfId: UUID): ByteArray {
        val userProfile = data.findUserProfile(userProfId)
        val result: Result<ByteArray>

        if (userProfile != null) {
            if (!userProfile.UPFileImageLink.isNullOrEmpty()) {
                // Download the previously uploaded user profile image

                result = fileStore.downloadFile(userProfile.UPFileImageLink!!)

                if (result.isSuccess) {
                    return result.getOrNull()!!
                } else {
                    throw result.exceptionOrNull()!!
                }

            } else {
                // Download default image if nothing was previously uploaded

                result = fileStore.downloadFile("yoda.png")

                if (result.isSuccess) {
                    return result.getOrNull()!!
                } else {
                    throw result.exceptionOrNull()!!
                }

            }
        } else {
            throw Exception("No such user profile")
        }

    }
}