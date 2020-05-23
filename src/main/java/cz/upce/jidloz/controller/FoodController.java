package cz.upce.jidloz.controller;

import cz.upce.jidloz.dao.FoodDAO;
import cz.upce.jidloz.model.Food;
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

    private final FoodDAO foodDAO;

    public FoodController(FoodDAO foodDAO) {
        this.foodDAO = foodDAO;
    }

    @PostMapping("/addFood")
    public void addFood(@RequestBody Food food) {
        foodDAO.save(food);
    }

    @Transactional
    @PostMapping("/updateFood")
    public void updateFood(@RequestBody Food food) {
        foodDAO.removeFoodById(food.getId());
        foodDAO.save(food);
    }

    @PostMapping("/getFoodById")
    public Food get(@RequestBody int id) {
        return foodDAO.findById(id);
    }
    /*
    @PostMapping("/getAllFood")
    public List<Food> getAllFood() {
        return foodDAO.findAll();
    }
    */
    @PostMapping("/getAllFood")
    public Page<Food> getAllFood(Pageable pageable) {
        return foodDAO.findAll(pageable);
    }
    /*
    @PostMapping("/getAllFoodByIdProducer")
    public List<Food> getAllFoodByIdProducer(@RequestBody int idProducer) {
        return foodDAO.findAllByIdProducer(idProducer);
    }*/

    @PostMapping("/getAllFoodByIdProducer")
    public Page<Food> getAllFoodByIdProducer(@RequestBody int idProducer, Pageable pageable) {
        return foodDAO.findAllByIdProducer(idProducer, pageable);
    }

    @PostMapping("/findAllByCategory")
    public Page<Food> findAllByCategory(@RequestBody String category, Pageable pageable) {
        return foodDAO.findAllByCategory(category, pageable);
    }

    @Transactional
    @PostMapping("/removeFoodById")
    public void removeFoodById(@RequestBody int id) {
        foodDAO.removeFoodById(id);
    }
}
