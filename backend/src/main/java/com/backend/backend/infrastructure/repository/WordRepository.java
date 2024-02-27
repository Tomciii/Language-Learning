package com.backend.backend.infrastructure.repository;

import com.backend.backend.infrastructure.entity.WordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends JpaRepository<WordEntity, Integer> {

}
