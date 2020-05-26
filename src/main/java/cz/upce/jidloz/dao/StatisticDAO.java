package cz.upce.jidloz.dao;

import cz.upce.jidloz.model.Statistic;
import cz.upce.jidloz.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatisticDAO extends JpaRepository<Statistic, Integer> {
    public Statistic findByCategory(String Category);
    public List<Statistic> findAll();
    public void removeById(int id);
}
