package cz.upce.jidloz.service.impl;

import cz.upce.jidloz.dao.FoodDAO;
import cz.upce.jidloz.dao.ProducerDAO;
import cz.upce.jidloz.dao.UserDAO;
import cz.upce.jidloz.model.*;
import cz.upce.jidloz.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value = "foodService")
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodDAO foodDAO;

    @Autowired
    private ProducerDAO producerDAO;

    @Autowired
    private UserDAO userDAO;

    @Override
    public void unReserveFood(Food food) {
        foodDAO.save(food);
    }

    @Override
    public void reserveFood(Food food) {
        foodDAO.save(food);
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
        foodDAO.save(food);
    }

    @Override
    public Page<Food> findAll(Pageable pageable) {
        /*Page<Food> list = (Page<Food>) new ArrayList<Food>();
        FoodDAO.findAll(pageable).iterator().forEachRemaining(list::);
        return list;*/
        return foodDAO.findAll(pageable);
    }

    @Override
    public void deleteById(int id) {
        foodDAO.deleteById(id);
    }



    @Override
    public void removeFoodById(int id) {
        foodDAO.removeFoodById(id);
    }

    @Override
    public Food findById(int id) {
        return foodDAO.findById(id);
    }

    @Override
    public Page<Food> findAllByIdUserAndCategory(int idUser, String category, Pageable pageable) {
        return foodDAO.findAllByIdUserAndCategory(idUser, category, pageable);
    }

    @Override
    public Page<Food> findAllByIdUser(int idUser, Pageable pageable) {
        return foodDAO.findAllByIdUser(idUser, pageable);
    }

    @Override
    public List<Food> findAllByIdUser(int idUser) {
        return foodDAO.findAllByIdUser(idUser);
    }

    @Override
    public Page<FoodAndAddress> findAllByIdUserWithAddress(int idUser, Pageable pageable) {
        List<FoodAndAddress> list = new ArrayList<>();

        List<Food> foods = foodDAO.findAllByIdUser(idUser);
        foods.forEach(food -> {
            FoodAndAddress foodAndAddress = new FoodAndAddress();
            foodAndAddress.setId(food.getId());
            foodAndAddress.setIdUser(food.getIdUser());
            foodAndAddress.setIdProducer(food.getIdProducer());
            foodAndAddress.setCategory(food.getCategory());
            foodAndAddress.setPrice(food.getPrice());
            foodAndAddress.setDescription(food.getDescription());
            foodAndAddress.setName(food.getName());

            Producer producer = producerDAO.findByIdUser(food.getIdProducer());
            foodAndAddress.setCity(producer.getCity());
            foodAndAddress.setHouseNumber(producer.getHouseNumber());
            foodAndAddress.setPostalCode(producer.getPostalCode());
            foodAndAddress.setStreet(producer.getStreet());

            User user = userDAO.getOne(food.getIdProducer());
            foodAndAddress.setPhone(user.getPhone());
            foodAndAddress.setEmail(user.getEmail());

            list.add(foodAndAddress);
        });

        int pageSize = pageable.getPageSize();
        long pageOffset = pageable.getOffset();
        long total = pageOffset + list.size() + (list.size() == pageSize ? pageSize : 0);
        Page<FoodAndAddress> page = new PageImpl<>(list, pageable,total);

        return page;
    }

    @Override
    public Page<FoodAndAddress> findAllByIdProducerWithAddress(int idProducer, Pageable pageable) {
        List<FoodAndAddress> list = new ArrayList<>();

        List<Food> foods = foodDAO.findAllByIdProducer(idProducer);

        foods.forEach(food -> {
            if(food.getIdUser() != 0){
                FoodAndAddress foodAndAddress = new FoodAndAddress();
                foodAndAddress.setId(food.getId());
                foodAndAddress.setIdUser(food.getIdUser());
                foodAndAddress.setIdProducer(food.getIdProducer());
                foodAndAddress.setCategory(food.getCategory());
                foodAndAddress.setPrice(food.getPrice());
                foodAndAddress.setDescription(food.getDescription());
                foodAndAddress.setName(food.getName());

                User user = userDAO.getOne(food.getIdUser());
                foodAndAddress.setPhone(user.getPhone());
                foodAndAddress.setEmail(user.getEmail());
                list.add(foodAndAddress);
            }
        });

        int pageSize = pageable.getPageSize();
        long pageOffset = pageable.getOffset();
        long total = pageOffset + list.size() + (list.size() == pageSize ? pageSize : 0);
        Page<FoodAndAddress> page = new PageImpl<>(list, pageable,total);

        return page;
    }


    @Override
    public Page<Food> findAllByIdProducer(int idProducer, Pageable pageable) {
        return foodDAO.findAllByIdProducer(idProducer, pageable);
    }

    @Override
    public Page<Food> findAllByIdUserAndIdProducer(int defaultIdUser, int idProducer, Pageable pageable) {
        return foodDAO.findAllByIdUserAndIdProducer(defaultIdUser, idProducer, pageable);
    }

    @Override
    public List<Food> findAllByIdProducer(int idProducer) {
        return foodDAO.findAllByIdProducer(idProducer);
    }

    @Override
    public Page<Food> findAllByCategory(String category, Pageable pageable) {
        return foodDAO.findAllByCategory(category, pageable);
    }
}
