package cz.upce.jidloz.service.impl;

import cz.upce.jidloz.dao.ProducerDAO;
import cz.upce.jidloz.model.Producer;
import cz.upce.jidloz.model.ProducerDto;
import cz.upce.jidloz.service.ProducerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;




@Service(value = "producerService")
public class ProducerServiceImpl implements ProducerService {

    @Autowired
    private ProducerDAO ProducerDAO;


    @Override
    public void delete(int id) {
        ProducerDAO.deleteById(id);
    }

    @Override
    public Producer findByIdUser(int idUser) {
        Optional<Producer> optionalProducer = ProducerDAO.findById(idUser);
        return optionalProducer.isPresent() ? optionalProducer.get() : null;
    }

    @Override
    public Producer save(ProducerDto producer) {
        Producer producerNew = new Producer();
        producerNew.setHouseNumber(producer.getHouseNumber());
        producerNew.setStreet(producer.getStreet());
        producerNew.setPostalCode(producer.getPostalCode());
        producerNew.setCity(producer.getCity());
        producerNew.setIdUser(producer.getIdUser());
        return ProducerDAO.save(producerNew);
    }


}
