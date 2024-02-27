package com.backend.backend.application;

import com.backend.backend.infrastructure.entity.WordEntity;

import java.util.List;

public interface IWordService {
    List<WordEntity> findAll();
    WordEntity save(WordEntity entity);
    void delete(int index);
}
