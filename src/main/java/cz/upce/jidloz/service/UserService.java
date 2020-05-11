package cz.upce.jidloz.service;


import cz.upce.jidloz.model.User;
import cz.upce.jidloz.model.UserDto;

import java.util.List;

public interface UserService {

    User save(UserDto user);

    List<User> findAll();

    void delete(int id);

    User findOne(String username);

    User findById(int id);

    UserDto update(UserDto userDto);
}
