package com.example.oblig33;

import org.apache.logging.log4j.util.PropertySource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
public class Oppgave2Kontroler {
    
    @Autowired
    BilletRepostery billetRepostery;

   // private final List<Oppgave2 > tickets  = new ArrayList<>();

    @PostMapping("/save")
    public Oppgave2 addTicket (Oppgave2 ticket){
        return billetRepostery.save(ticket);

    }

    @GetMapping("/show")
    public List<Oppgave2> getBillettene(){
        List<Oppgave2> tickets = billetRepostery.findAll();
        Collections.sort(tickets, new Comparator<Oppgave2>() {
            @Override
            public int compare(Oppgave2 o1, Oppgave2 o2) {
                return o1.getEtternavn().compareTo(o2.getEtternavn());
            }
        });
        return tickets;
    }

    @GetMapping("/slett")
    public void deleteTickets(){
        billetRepostery.deleteAll();
    }
}