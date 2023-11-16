package com.mballem.tarefas.web.controller;

import com.mballem.internal.service.ContatoService;
import com.mballem.internal.entity.Contato;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("tarefas")
public class ContatoController {

    private final ContatoService service;

    @PostMapping("/contatos")
    public ResponseEntity<Contato> create(@RequestBody Contato contato) {
        Contato contact = service.save(contato);
        return ResponseEntity.ok(contact);
    }

    @GetMapping("/contatos/{id}")
    public ResponseEntity<Contato> getContatoById(@PathVariable Long id) {
        Contato contact = service.getById(id);
        return ResponseEntity.ok(contact);
    }

    @GetMapping("/contatos/nome/{nome}")
    public ResponseEntity<Contato> getContatoByNome(@PathVariable String nome) {
        Contato contact = service.getContatoByNome(nome);
        return ResponseEntity.ok(contact);
    }

    @GetMapping("/contatos")
    public ResponseEntity<Integer> getQuantidadeDeContatos() {
        int size = service.getAll();
        return ResponseEntity.ok(size);
    }

    @GetMapping("/contatos/data")
    public ResponseEntity<List<Contato>> getContatosByDataNascimento(@RequestParam LocalDate data) {
        List<Contato> contatos = service.getByDataNascimento(data);
        return ResponseEntity.ok(contatos);
    }

    @PatchMapping("/contatos/{id}")
    public ResponseEntity<Contato> updateContatoById(@PathVariable Long id, @RequestBody Contato contato) {
        Contato contact = service.update(id, contato);
        return ResponseEntity.ok(contact);
    }

    @DeleteMapping("/contatos/{id}")
    public String deleteById(@PathVariable Long id) {
        return service.delete(id);
    }
}
