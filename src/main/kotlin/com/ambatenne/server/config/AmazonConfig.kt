package com.ambatenne.server.config

import aws.sdk.kotlin.services.s3.S3Client
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AmazonConfig {

    @Bean
    fun s3(): S3Client {
        return S3Client { region = "eu-central-1" }
    }

}