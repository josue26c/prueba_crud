package com.example.demo.models;

import org.springframework.format.annotation.DateTimeFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Libro")
public class LibroModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;
    private String nombre;
    private String autor;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date fecha_publicacion;
    private int numero_ejemplares;
    private Double costo;


}
