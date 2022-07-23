package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.LibroModel;
import com.example.demo.services.LibroServices;

@RestController
@RequestMapping("/libro")
public class LibroController {
    @Autowired
    LibroServices libroServices;

    @GetMapping()
    public ArrayList<LibroModel> obtenerLibros(){
        return libroServices.obtenerLibro();
    }

    @PostMapping()
    public LibroModel guardarLibro(@RequestBody LibroModel libro){
        return this.libroServices.guardarLibro(libro);
    }
}
