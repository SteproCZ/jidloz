package cz.upce.jidloz.controller;

import cz.upce.jidloz.dao.FoodDAO;
import cz.upce.jidloz.model.Food;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class FoodController {

    private final FoodDAO foodDAO;

    public FoodController(FoodDAO foodDAO) {
        this.foodDAO = foodDAO;
    }

    @PostMapping("/addFood")
    public void addFood(@RequestBody Food food) {
        foodDAO.save(food);
    }

    @PostMapping("/getAllFood")
    public List<Food> getAllFood() {
        return foodDAO.findAll();
    }

    @PostMapping("/getAllFoodByIdProducer")
    public List<Food> getAllFoodByIdProducer(@RequestBody int idProducer) {
        return foodDAO.findAllByIdProducer(idProducer);
    }

    @Transactional
    @PostMapping("/removeFoodById")
    public void removeFoodById(@RequestBody int id) {
        foodDAO.removeFoodById(id);
    }



}
