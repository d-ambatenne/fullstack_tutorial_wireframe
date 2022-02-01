package com.ambatenne.server.profile

import java.util.*
import javax.persistence.*

@Entity(name = "userProfile")
@Table(name = "user_profile")
class UserProfile (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    var userProfId: UUID = UUID.randomUUID(),

    @Column(name = "username")
    var userName: String = "",

    @Column(name = "s3_image_key")
    var UPFileImageLink: String? = null)