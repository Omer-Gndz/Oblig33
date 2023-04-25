package com.example.oblig33;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Oppgave2 {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String filmnavn;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;
}