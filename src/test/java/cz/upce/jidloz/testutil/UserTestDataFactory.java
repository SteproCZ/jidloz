package cz.upce.jidloz.testutil;

import cz.upce.jidloz.dao.UserDAO;
import cz.upce.jidloz.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserTestDataFactory {

    @Autowired
    UserDAO userRepository;

    public User create() {
        User user = new User();
        user.setEmail("pavel.jetensky@seznam.cz");
        user.setPassword("a");
        userRepository.save(user);
        return user;
    }
}
