package com.ambatenne.server.profile

import com.ambatenne.server.profile.UserProfile
import java.util.*

interface UserProfileDAO {
    fun getUserProfilesList(): List<UserProfile>
    fun findUserProfile(id: UUID): UserProfile?
    fun saveUserProfile(userProfile: UserProfile)
}