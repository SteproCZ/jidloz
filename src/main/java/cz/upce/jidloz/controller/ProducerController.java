package cz.upce.jidloz.controller;

import cz.upce.jidloz.model.ApiResponse;

import cz.upce.jidloz.model.Producer;
import cz.upce.jidloz.model.ProducerDto;
import cz.upce.jidloz.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProducerController {


    @Autowired
    private ProducerService producerService;

    @PostMapping("/registrationProducer")
    public ApiResponse<Void> registrationProducer(@RequestBody ProducerDto producer) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Producer saved successfully.", producerService.save(producer));
    }

    @PostMapping("/isProducer")
    public Boolean isProducer(@RequestBody int idUser) {
        return producerService.findByIdUser(idUser) != null;
    }

    @PostMapping("/getProducerByIdUser")
    public Producer getAllFoodByIdProducer(@RequestBody int idUser) {
        return producerService.findByIdUser(idUser);
    }

}
