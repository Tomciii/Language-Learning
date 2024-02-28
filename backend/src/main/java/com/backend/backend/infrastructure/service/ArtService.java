package com.backend.backend.infrastructure.service;

import com.backend.backend.application.IWordService;
import com.backend.backend.infrastructure.entity.WordEntity;
import com.backend.backend.infrastructure.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtService implements IWordService {

    private WordRepository repository;

    @Autowired
    public ArtService(WordRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<WordEntity> findAll(){
        return this.repository.findAll();
    }

    @Override
    public WordEntity save(WordEntity entity){
        return this.repository.save(new WordEntity(entity.getWord(), entity.getMeaning(), entity.getTopic()));
    }

    @Override
    public void delete(int index) {
         this.repository.deleteById(index);
    }

    @Override
    public List<WordEntity> findByTopic(String topic) {
        return this.repository.findByTopic(topic);
    }
}
