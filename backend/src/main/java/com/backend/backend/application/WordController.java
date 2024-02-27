package com.backend.backend.application;


import com.backend.backend.infrastructure.controller.PublicApi;
import com.backend.backend.infrastructure.entity.WordEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class WordController implements PublicApi {

    private IWordService service;

    @Autowired
    public WordController(IWordService artService) {
        this.service = artService;
    }

    @Override
    public ResponseEntity getAll() {
        try {
            return ResponseEntity.ok(this.service.findAll().toString());
        } catch (Exception e){
            return new ResponseEntity<>("Error loading word: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity save(@RequestBody WordEntity art) {
        try {
            return ResponseEntity.ok(this.service.save(art));
        } catch (Exception e) {
            return new ResponseEntity<>("Error saving word: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity delete(int index) {
        try {
            this.service.delete(index);
            return (ResponseEntity) ResponseEntity.ok();
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting word: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
