package cz.upce.jidloz.service.impl;

import cz.upce.jidloz.dao.StatisticDAO;
import cz.upce.jidloz.dao.UserDAO;
import cz.upce.jidloz.model.*;
import cz.upce.jidloz.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "aService")
public class StatisticServiceImpl implements StatisticService {

    @Autowired
    private StatisticDAO statisticDAO;

    @Override
    public void statisticIncrementation(String category) {
        Statistic statistic = statisticDAO.findByCategory(category);
        statistic.setNumber(statistic.getNumber()+1);
        statisticDAO.save(statistic);
    }

    @Override
    public void addStatistic(StatisticDto statisticDto) {
        Statistic statistic = new Statistic();
        statistic.setNumber(statisticDto.getNumber());
        statistic.setCategory(statisticDto.getCategory());
        statistic.setId(statisticDto.getId());
        statisticDAO.save(statistic);
    }


    @Override
    public void save(StatisticDto statisticDto) {
        Statistic statistic = new Statistic();
        statistic.setCategory(statisticDto.getCategory());
        statistic.setNumber(statisticDto.getNumber());
        statisticDAO.save(statistic);
    }

    @Override
    public void removeById(int id) {
        statisticDAO.removeById(id);
    }

    @Override
    public Statistic findByCategory(String category) {
        return statisticDAO.findByCategory(category);
    }

    @Override
    public List<Statistic> findAll() {
        return statisticDAO.findAll();
    }
}
