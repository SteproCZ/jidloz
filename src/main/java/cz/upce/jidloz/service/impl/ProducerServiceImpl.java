package cz.upce.jidloz.service.impl;

import cz.upce.jidloz.dao.ProducerDAO;
import cz.upce.jidloz.model.Producer;
import cz.upce.jidloz.model.ProducerDto;

import cz.upce.jidloz.service.ProducerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service(value = "producerService")
public class ProducerServiceImpl implements UserDetailsService, ProducerService {

    @Autowired
    private ProducerDAO producerDAO;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Producer producer = producerDAO.findByName(username);
        if(producer == null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(producer.getName(), producer.getPassword(), getAuthority());
    }

    private List<SimpleGrantedAuthority> getAuthority() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_PRODUCER"));
    }

    public List<Producer> findAll() {
        List<Producer> list = new ArrayList<>();
        producerDAO.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public void delete(int id) {
        producerDAO.deleteById(id);
    }

    @Override
    public Producer findOne(String name) {
        return producerDAO.findByName(name);
    }

    @Override
    public Producer findById(int id) {
        Optional<Producer> optionalUser = producerDAO.findById(id);
        return optionalUser.isPresent() ? optionalUser.get() : null;
    }

    @Override
    public ProducerDto update(ProducerDto producerDto) {
        Producer producer = findById(producerDto.getId());
        if(producer != null) {
            BeanUtils.copyProperties(producerDto, producer, "password", "name");
            producerDAO.save(producer);
        }
        return producerDto;
    }

    @Override
    public Producer save(ProducerDto producerDto) {
        System.out.println("PRODUCER");
        System.out.println(producerDto.getName());
        System.out.println(producerDto.getEmail());

        Producer producer = new Producer();
        producer.setName(producerDto.getName());
        producer.setEmail(producerDto.getEmail());
        producer.setPhone(producerDto.getPhone());
        producer.setPassword(bcryptEncoder.encode(producerDto.getPassword()));
        producer.setCity(producerDto.getCity());
        producer.setPostalCode(producerDto.getPostalCode());
        producer.setStreet(producerDto.getStreet());
        producer.setHouseNumber(producerDto.getHouseNumber());
        return producerDAO.save(producer);
    }


}
