package cz.upce.jidloz.controller;

import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.FoodAndAddress;
import cz.upce.jidloz.model.FoodDto;
import cz.upce.jidloz.service.FoodService;
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

    private static int defaultIdUser = 0;

    @Autowired
    private FoodService foodService;

    @PostMapping("/addFood")
    public void addFood(@RequestBody FoodDto food) {
        System.out.println(food);
        foodService.save(food);
    }

    @PostMapping("/unReserveFood")
    public void unReserveFood(@RequestBody Food food) {
        foodService.unReserveFood(food);
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

    @PostMapping("/getAllFreeFood")
    public Page<Food> getAllFreeFood(Pageable pageable) {
        return foodService.findAllByIdUser(defaultIdUser, pageable);
    }

    @PostMapping("/getAllFoodByIdProducer")
    public Page<Food> getAllFoodByIdProducer(@RequestBody int idProducer, Pageable pageable) {
        return foodService.findAllByIdProducer(idProducer, pageable);
    }

    @PostMapping("/getAllFoodByIdUser")
    public Page<Food> getAllFoodByIdUser(@RequestBody int idUser, Pageable pageable) {
        return foodService.findAllByIdUser(idUser, pageable);
    }

    @PostMapping("/getAllByIdUserWithAddress")
    public Page<FoodAndAddress> getAllByIdUserWithAddress(@RequestBody int idUser, Pageable pageable) {
        return foodService.findAllByIdUserWithAddress(idUser, pageable);
    }

    @PostMapping("/getAllFreeFoodByCategory")
    public Page<Food> findAllByIdUserAndCategory(@RequestBody String category, Pageable pageable) {
         return foodService.findAllByIdUserAndCategory(defaultIdUser, category, pageable);
    }
    @PostMapping("/findAllByIdUserAndCategory")
    public Page<Food> findAllByIdUserAndCategory(@RequestBody Food food, Pageable pageable) {
        return foodService.findAllByIdUserAndCategory(food.getIdUser(), food.getCategory(), pageable);
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
