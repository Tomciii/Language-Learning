package com.backend.backend.infrastructure.controller;

import com.backend.backend.infrastructure.entity.WordEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200")
public interface PublicApi {

    @GetMapping(
            value = "/public/api/getAll",
            produces = {"application/json"}
    )
    ResponseEntity getAll();

    @PostMapping(
            value = "/public/api/save",
            produces = {"application/json"}
    )
    ResponseEntity save(@RequestBody WordEntity art);

    @PostMapping(
            value = "/public/api/delete",
            produces = {"application/json"}
    )
    ResponseEntity delete(@RequestBody int index);
}
