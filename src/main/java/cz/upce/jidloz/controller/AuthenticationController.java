package cz.upce.jidloz.controller;

import cz.upce.jidloz.config.JwtTokenUtil;
import cz.upce.jidloz.model.*;
import cz.upce.jidloz.service.UserService;
import cz.upce.jidloz.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/token")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @Autowired
    private ProducerService producerService;

    @RequestMapping(value = "/generate-token/{userType}", method = RequestMethod.POST)
    public ApiResponse<AuthToken> generateToken(@RequestBody LoginUser loginUser, @PathVariable int userType) throws AuthenticationException {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));

        final Producer producer;
        final User user;
        final String token;
        final String name;
        final String role;
        final int id;

        if(userType == 0){
            user = userService.findOne(loginUser.getUsername());
            token = jwtTokenUtil.generateToken(user);
            name = user.getUsername();
            role = "ROLE_USER";
            id = user.getId();
        }else{
            producer = producerService.findOne(loginUser.getUsername());
            token = jwtTokenUtil.generateToken(producer);
            name = producer.getName();
            role = "ROLE_PRODUCER";
            id = producer.getId();
        }
        return new ApiResponse<>(200, "success",new AuthToken(token, name, role, id));
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public ApiResponse<Void> logout() throws AuthenticationException {
        return new ApiResponse<>(200, "success",null);
    }

}
