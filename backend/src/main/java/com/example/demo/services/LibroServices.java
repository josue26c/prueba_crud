package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.LibroModel;
import com.example.demo.repositories.LibroRepository;

@Service
public class LibroServices {
    @Autowired
    LibroRepository libroRepository;

    public ArrayList<LibroModel> obtenerLibro(){
        return(ArrayList<LibroModel>)libroRepository.findAll();
    }

    public LibroModel guardarLibro(LibroModel libro){
        return libroRepository.save(libro);
    }
}
