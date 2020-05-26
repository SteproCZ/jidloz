package cz.upce.jidloz.controller;

import cz.upce.jidloz.model.Food;
import cz.upce.jidloz.model.Statistic;
import cz.upce.jidloz.model.StatisticDto;
import cz.upce.jidloz.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StatisticController {

    @Autowired
    private StatisticService statisticService;

    @PostMapping("/addStatistic")
    public void addStatistic(@RequestBody StatisticDto statisticDto) {
        statisticService.addStatistic(statisticDto);
    }

    @PostMapping("/statisticIncrementation")
    public void statisticIncrementation(@RequestBody String category) {
        statisticService.statisticIncrementation(category);
    }

    @PostMapping("/getAllStatistic")
    public List<Statistic> getAllFoodByIdUser() {
        return statisticService.findAll();
    }
}
