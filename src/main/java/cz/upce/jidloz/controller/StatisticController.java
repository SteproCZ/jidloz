package cz.upce.jidloz.controller;

import cz.upce.jidloz.model.Statistic;
import cz.upce.jidloz.model.StatisticDto;
import cz.upce.jidloz.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
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

    @GetMapping("/public/getAllStatistic")
    public List<Statistic> getAllFoodByIdUser() {
        return statisticService.findAll();
    }
}
