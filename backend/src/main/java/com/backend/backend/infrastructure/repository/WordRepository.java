package com.backend.backend.infrastructure.repository;

import com.backend.backend.infrastructure.entity.WordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordRepository extends JpaRepository<WordEntity, Integer> {

    List<WordEntity> findByTopic(String topic);
}
