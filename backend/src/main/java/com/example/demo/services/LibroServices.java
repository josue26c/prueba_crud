package com.example.demo.services;

import java.lang.StackWalker.Option;
import java.util.ArrayList;
import java.util.Optional;

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

    public Optional<LibroModel> obtenerLibroPorId(Long id){
        return libroRepository.findById(id);
    }

    public boolean eliminarLibro(Long id){
        try{
            libroRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
