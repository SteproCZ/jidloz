package cz.upce.jidloz.controller;

import cz.upce.jidloz.dao.ProducerDAO;
import cz.upce.jidloz.model.ApiResponse;

import cz.upce.jidloz.model.Producer;
import cz.upce.jidloz.model.ProducerDto;
import cz.upce.jidloz.service.ProducerService;
import cz.upce.jidloz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProducerController {

    private final ProducerDAO producerDAO;

    public ProducerController(ProducerDAO producerDAO) {
        this.producerDAO = producerDAO;
    }


    @Autowired
    private ProducerService producerService;

    @PostMapping("/registrationProducer")
    public ApiResponse<Void> registrationProducer(@RequestBody ProducerDto producer) {

        //kontrola existujcího účtu
        boolean existsByEmail = producerDAO.existsByEmail(producer.getEmail());
        boolean existsByPhone = producerDAO.existsByPhone(producer.getPhone());

        producer.setPassword(producer.getPassword());

        if (existsByEmail || existsByPhone) {
            System.out.println("User exist!");
            return new ApiResponse<>(HttpStatus.OK.value(), "Phone or email is already in use!", null);
        }else{
            //zápis do DB
            System.out.println("Registration: " + producer.getName());
            return new ApiResponse<>(HttpStatus.OK.value(), "Producer saved successfully.", producerService.save(producer));
        }
    }


    /*
    @PostMapping("/loginProducent")
    public Producer login(@RequestBody Producer producer) {
        Optional<Producer> foundProducer = producerDAO.findByEmail(producer.getEmail());
        if (foundProducer.isPresent()) {
            if (foundProducer.get().getPassword().equals(producer.getPassword())) {
                System.out.println("login: " + foundProducer.get().getName());
                foundProducer.get().setPassword(null);
                foundProducer.get().setEmail(null);
                foundProducer.get().setPhone(null);
                return foundProducer.get();
            }
        }
        return new Producer();
    }*/
}
