package cz.upce.jidloz.controller;

import cz.upce.jidloz.dao.UserDAO;
import cz.upce.jidloz.model.ApiResponse;
import cz.upce.jidloz.model.User;
import cz.upce.jidloz.model.UserDto;
import cz.upce.jidloz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    private final UserDAO UserDAO;

    public UserController(UserDAO UserDAO) {
        this.UserDAO = UserDAO;
    }

    @Autowired
    private UserService userService;

    @PostMapping
    public ApiResponse<User> saveUser(@RequestBody UserDto user){
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",userService.save(user));
    }

    @GetMapping
    public ApiResponse<List<User>> listUser(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",userService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<User> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",userService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<UserDto> update(@RequestBody UserDto userDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",userService.update(userDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        userService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }

    @PostMapping("/registrationUser")
    public ApiResponse<Void> registrationUser(@RequestBody UserDto user) {

        //kontrola existujcího účtu
        boolean existsByEmail = UserDAO.existsByEmail(user.getEmail());
        boolean existsByPhone = UserDAO.existsByPhone(user.getPhone());

        user.setPassword(user.getPassword());
        user.setRole("USER");

        if (existsByEmail || existsByPhone) {
            System.out.println("User exist!");
            return new ApiResponse<>(HttpStatus.OK.value(), "Phone or email is already in use!", null);
        }else{
            //zápis do DB
            System.out.println("Registration: " + user.getFirstName());
            return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.", userService.save(user));
        }
    }

}
