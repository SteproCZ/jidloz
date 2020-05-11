package cz.upce.jidloz.dao;

import java.util.Optional;

import cz.upce.jidloz.model.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProducerDAO extends JpaRepository<Producer, Integer> {
    public boolean existsByEmail(String email);
    public boolean existsByPhone(String phone);
    public Producer findByName(String name);
    public Optional<Producer> findByEmail(String email);
}
