package cz.upce.jidloz.service;

import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.FoodDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FoodService {

    void reserveFood(Food food);

    void save(FoodDto user);

    Page<Food> findAll(Pageable pageable);

    void deleteById(int id);

    void removeFoodById(int id);

    Food findById(int id);

    Page<Food> findAllByIdUserAndCategory(int idUser, String category, Pageable pageable);

    Page<Food> findAllByIdUser(int idUser, Pageable pageable);

    Page<Food> findAllByIdProducer(int idProducer, Pageable pageable);

    Page<Food> findAllByCategory(String category, Pageable pageable);


}

