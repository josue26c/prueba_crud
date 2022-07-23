package com.example.demo.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.LibroModel;

@Repository
public interface LibroRepository extends CrudRepository<LibroModel,Long>{
    
}
