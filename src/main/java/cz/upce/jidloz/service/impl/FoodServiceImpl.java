package cz.upce.jidloz.service.impl;

import cz.upce.jidloz.dao.FoodDAO;
import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.FoodDto;
import cz.upce.jidloz.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value = "foodService")
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodDAO FoodDAO;

    @Override
    public void reserveFood(Food food) {
        FoodDAO.save(food);
    }

    @Override
    public void save(FoodDto foodDto) {
        Food food = new Food();
        food.setCategory(foodDto.getCategory());
        food.setDescription(foodDto.getDescription());
        food.setId(foodDto.getId());
        food.setIdProducer(foodDto.getIdProducer());
        food.setIdUser(foodDto.getIdUser());
        food.setName(foodDto.getName());
        food.setPrice(foodDto.getPrice());
        FoodDAO.save(food);
    }

    @Override
    public Page<Food> findAll(Pageable pageable) {
        /*Page<Food> list = (Page<Food>) new ArrayList<Food>();
        FoodDAO.findAll(pageable).iterator().forEachRemaining(list::);
        return list;*/
        return FoodDAO.findAll(pageable);
    }

    @Override
    public void deleteById(int id) {
        FoodDAO.deleteById(id);
    }



    @Override
    public void removeFoodById(int id) {
        FoodDAO.removeFoodById(id);
    }

    @Override
    public Food findById(int id) {
        return FoodDAO.findById(id);
    }

    @Override
    public Page<Food> findAllByIdUserAndCategory(int idUser, String category, Pageable pageable) {
        return FoodDAO.findAllByIdUserAndCategory(idUser, category, pageable);
    }

    @Override
    public Page<Food> findAllByIdUser(int idUser, Pageable pageable) {
        return FoodDAO.findAllByIdUser(idUser, pageable);
    }

    @Override
    public Page<Food> findAllByIdProducer(int idProducer, Pageable pageable) {
        return FoodDAO.findAllByIdProducer(idProducer, pageable);
    }

    @Override
    public Page<Food> findAllByCategory(String category, Pageable pageable) {
        return FoodDAO.findAllByCategory(category, pageable);
    }
}
