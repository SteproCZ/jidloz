package cz.upce.jidloz.controller;

import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.FoodAndAddress;
import cz.upce.jidloz.model.FoodDto;
import cz.upce.jidloz.service.FoodService;
import cz.upce.jidloz.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;


@RestController
@CrossOrigin("http://localhost:3000")
public class FoodController {

    private static int defaultIdUser = 0;

    @Autowired
    private FoodService foodService;

    @Autowired
    private StatisticService statisticService;

    @PostMapping("/addFood")
    public void addFood(@RequestBody FoodDto food) {
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

    @GetMapping("/getAllFreeFoodByIdProducer/{idUser}")
    public Page<Food> getAllFreeFoodByIdProducer(@PathVariable int idUser, Pageable pageable) {
        return foodService.findAllByIdUserAndIdProducer(defaultIdUser, idUser, pageable);
    }

    @GetMapping("/getAllFoodByIdUser/{idUser}")
    public Page<Food> getAllFoodByIdUser(@PathVariable int idUser, Pageable pageable) {
        return foodService.findAllByIdUser(idUser, pageable);
    }

    @GetMapping("/getAllByIdUserWithAddress/{idUser}")
    public Page<FoodAndAddress> getAllByIdUserWithAddress(@PathVariable int idUser, Pageable pageable) {
        return foodService.findAllByIdUserWithAddress(idUser, pageable);
    }

    @GetMapping("/getAllByIdProducerWithAddress/{idUser}")
    public Page<FoodAndAddress> findAllByIdProducerWithAddress(@PathVariable int idUser, Pageable pageable) {
        return foodService.findAllByIdProducerWithAddress(idUser, pageable);
    }

    @GetMapping("/getAllFreeFood")
    public Page<Food> getAllFreeFood(Pageable pageable, String category) {
        if(category == null || category.equals("All"))
            return foodService.findAllByIdUser(defaultIdUser, pageable);
        return foodService.findAllByIdUserAndCategory(defaultIdUser, category, pageable);
    }

    @Transactional
    @PostMapping("/removeFood")
    public void removeFood(@RequestBody Food food) {
        foodService.removeFoodById(food.getId());
        statisticService.statisticIncrementation(food.getCategory());
    }

}
