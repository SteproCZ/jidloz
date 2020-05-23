package cz.upce.jidloz.controller;

import cz.upce.jidloz.dao.FoodDAO;
import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.FoodDto;
import cz.upce.jidloz.service.FoodService;
import cz.upce.jidloz.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @PostMapping("/addFood")
    public void addFood(@RequestBody FoodDto food) {
        System.out.println(food);
        foodService.save(food);
    }

    @PostMapping("/reserveFood")
    public void reserveFoodById(@RequestBody Food food) {
        foodService.reserveFood(food);
    }

    @PostMapping("/getFoodById")
    public Food get(@RequestBody int id) {
        return foodService.findById(id);
    }

    @PostMapping("/getAllFood")
    public Page<Food> getAllFood(Pageable pageable) {
        return foodService.findAll(pageable);
    }

    @PostMapping("/getAllFoodByIdProducer")
    public Page<Food> getAllFoodByIdProducer(@RequestBody int idProducer, Pageable pageable) {
        return foodService.findAllByIdProducer(idProducer, pageable);
    }

    @PostMapping("/findAllByCategory")
    public Page<Food> findAllByCategory(@RequestBody String category, Pageable pageable) {
        return foodService.findAllByCategory(category, pageable);
    }

    @Transactional
    @PostMapping("/removeFoodById")
    public void removeFoodById(@RequestBody int id) {
        foodService.removeFoodById(id);
    }
}
