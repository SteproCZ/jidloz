package cz.upce.jidloz.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Statistic implements Serializable {
    @Id
    @GeneratedValue
    private int id;
    @Column(nullable = false, unique = true)
    private String category;
    @Column(nullable = false)
    private int number;
}