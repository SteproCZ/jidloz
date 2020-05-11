package cz.upce.jidloz.dao;

import java.util.Optional;

import cz.upce.jidloz.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserDAO extends JpaRepository<User, Integer> {
    public boolean existsByEmail(String email);
    public boolean existsByPhone(String phone);
    //public Optional<User> findByEmail(String email);
    public User findByUsername(String username);
}

