package cz.upce.jidloz.service;


import cz.upce.jidloz.model.Producer;
import cz.upce.jidloz.model.ProducerDto;

import java.util.List;

public interface ProducerService {

    Producer save(ProducerDto user);

    void delete(int id);

    Producer findByIdUser(int idUser);

}
