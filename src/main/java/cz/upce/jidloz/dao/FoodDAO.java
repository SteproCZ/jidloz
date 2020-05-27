package cz.upce.jidloz.dao;

import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.FoodAndAddress;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
//public interface FoodDAO extends JpaRepository<Food, Integer> {
public interface FoodDAO extends PagingAndSortingRepository<Food, Integer> {
    public Page<Food> findAll(Pageable pageable);
    public Page<Food> findAllByIdProducer(int idProducer, Pageable pageable);
    public List<Food> findAllByIdProducer(int idProducer);
    public Page<Food> findAllByIdUserAndCategory(int idUser, String category, Pageable pageable);
    public Page<Food> findAllByIdUserAndIdProducer(int idUser, int idProducer, Pageable pageable);
    public Page<Food> findAllByCategory(String category, Pageable pageable);
    public Page<Food> findAllByIdUser(int idUser, Pageable pageable);
    public List<Food> findAllByIdUser(int idUser);
    public void removeFoodById(int id);
    public Food findById(int id);
    public void deleteById(int id);
}
