package cz.upce.jidloz.service;

import cz.upce.jidloz.model.Statistic;
import cz.upce.jidloz.model.StatisticDto;

import java.util.List;

public interface StatisticService {

    void statisticIncrementation(String category);

    void addStatistic(StatisticDto statisticDto);

    void save(StatisticDto statisticDto);

    void removeById(int id);

    Statistic findByCategory(String category);

    List<Statistic> findAll();
}
