package cz.upce.jidloz.controller;

import cz.upce.jidloz.dao.ProducerDAO;
import cz.upce.jidloz.dao.UserDAO;
import cz.upce.jidloz.model.ApiResponse;

import cz.upce.jidloz.model.ProducerDto;
import cz.upce.jidloz.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProducerController {

    private final ProducerDAO producerDAO;

    public ProducerController( ProducerDAO producerDAO) {
        this.producerDAO = producerDAO;
    }

    @Autowired
    private ProducerService producerService;

    @PostMapping("/registrationProducer")
    public ApiResponse<Void> registrationProducer(@RequestBody ProducerDto producer) {
        System.out.println(producer);
        return new ApiResponse<>(HttpStatus.OK.value(), "Producer saved successfully.", producerService.save(producer));
    }
}
