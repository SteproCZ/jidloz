package cz.upce.jidloz.dao;

import cz.upce.jidloz.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodDAO extends JpaRepository<Food, Integer> {
    public List<Food> findAll();
    public List<Food> findAllByIdProducer(int idProducer);
    public void removeFoodById(int id);
   // public List<Food> findAllByIdProducer();
}
