package com.ambatenne.server.profile

import org.hibernate.Session
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import java.util.*
import javax.persistence.EntityManager

@Repository
class UserProfileDAOService(@Autowired val entityManager: EntityManager): UserProfileDAO {

    @Transactional
    override fun getUserProfilesList(): List<UserProfile> {
        val session = entityManager.unwrap(Session::class.java)
        val query = session.createQuery("from userProfile", UserProfile::class.java)

        return query.resultList
    }

    @Transactional
    override fun findUserProfile(id: UUID): UserProfile? {
        val session = entityManager.unwrap(Session::class.java)

        return session.get(UserProfile::class.java, id)
    }

    @Transactional
    override fun saveUserProfile(userProfile: UserProfile) {
        val session = entityManager.unwrap(Session::class.java)
        session.saveOrUpdate(userProfile)
    }

}