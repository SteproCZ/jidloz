package cz.upce.jidloz.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Food implements Serializable {
    @Id
    @GeneratedValue
    private int id;
    @Column
    private int idProducer;
    @Column
    private int idUser;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private int price;
}
