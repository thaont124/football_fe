package com.gr.football_fe;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HomeController {
    @GetMapping("")
    public String index(){
        return "index";
    }

    @GetMapping("assignAuto")
    public String assignRefereeAuto(){
        return "assignRefereeAuto";
    }
    @GetMapping("assign")
    public String assignReferee(){
        return "assignReferee";
    }

    @GetMapping("statistic")
    public String statistic(){
        return "indexStatistic";
    }

    @GetMapping("statisticBySpectator")
    public String statisticBySpectator(){
        return "statisticsBySpectator";
    }
}
