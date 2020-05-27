package cz.upce.jidloz.service;

import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.FoodAndAddress;
import cz.upce.jidloz.model.FoodDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FoodService {

    void unReserveFood(Food food);

    void reserveFood(Food food);

    void save(FoodDto user);

    Page<Food> findAll(Pageable pageable);

    void deleteById(int id);

    void removeFoodById(int id);

    Food findById(int id);

    Page<Food> findAllByIdUserAndCategory(int idUser, String category, Pageable pageable);

    Page<FoodAndAddress> findAllByIdUserWithAddress(int idUser, Pageable pageable);

    Page<FoodAndAddress> findAllByIdProducerWithAddress(int idProducer, Pageable pageable);

    Page<Food> findAllByIdUser(int idUser, Pageable pageable);

    List<Food> findAllByIdUser(int idUser);

    Page<Food> findAllByIdProducer(int idProducer, Pageable pageable);

    Page<Food> findAllByIdUserAndIdProducer(int defaultIdUser, int idProducer, Pageable pageable);

    List<Food> findAllByIdProducer(int idProducer);

    Page<Food> findAllByCategory(String category, Pageable pageable);


}

