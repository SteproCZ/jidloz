package cz.upce.jidloz.service;

import cz.upce.jidloz.model.Producer;
import cz.upce.jidloz.model.ProducerDto;


import java.util.List;

public interface ProducerService {
    Producer save(ProducerDto user);
    List<Producer> findAll();
    void delete(int id);

    Producer findOne(String username);

    Producer findById(int id);

    ProducerDto update(ProducerDto userDto);
}
