package cz.upce.jidloz.dao;

import java.util.Optional;

import cz.upce.jidloz.model.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProducerDAO extends JpaRepository<Producer, Integer> {
    public Producer findByIdUser(int idUser);
}
