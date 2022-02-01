package com.ambatenne.server.filestore

import aws.sdk.kotlin.services.s3.S3Client
import aws.sdk.kotlin.services.s3.model.GetObjectRequest
import aws.smithy.kotlin.runtime.content.ByteStream
import aws.smithy.kotlin.runtime.content.toByteArray
import com.ambatenne.server.bucket.BucketName
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class FileStorage(@Autowired var s3: S3Client) {

    suspend fun saveFile(fileKey: String, fileMetadata: MutableMap<String, String>, fileBody: ByteStream) {
        val putObjectResponse = s3.putObject {
            bucket = BucketName.IMAGES.bName
            key = fileKey
            metadata = fileMetadata
            body = fileBody
        }

        println("Successfully uploaded the file with the etag: ${putObjectResponse.eTag}")
    }

    suspend fun downloadFile(fileKey: String): Result<ByteArray> {

        val getObjectRequest = GetObjectRequest {
            bucket = BucketName.IMAGES.bName
            key = fileKey
        }

        var result: Result<ByteArray> = Result.failure(Exception("Something went wrong!"))

        s3.getObject(getObjectRequest) { getObjectResponse ->

            result = if (getObjectResponse.body != null) {
                Result.success(getObjectResponse.body!!.toByteArray())
            } else {
                Result.failure(Exception("File body returned from S3 is null"))
            }

        }

        return result

    }

}