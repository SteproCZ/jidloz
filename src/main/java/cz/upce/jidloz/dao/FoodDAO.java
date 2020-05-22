package cz.upce.jidloz.dao;

import cz.upce.jidloz.model.Food;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
//public interface FoodDAO extends JpaRepository<Food, Integer> {
public interface FoodDAO extends PagingAndSortingRepository<Food, Integer> {
    public Page<Food> findAll(Pageable pageable);
    //public List<Food> findAllByIdProducer(int idProducer);
    public Page<Food> findAllByIdProducer(int idProducer, Pageable pageable);
    public List<Food> findAllByCategory(String category);
    public void removeFoodById(int id);
    public Food findById(int id);
}
