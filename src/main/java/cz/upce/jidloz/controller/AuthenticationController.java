package cz.upce.jidloz.controller;

import cz.upce.jidloz.config.JwtTokenUtil;
import cz.upce.jidloz.model.*;
import cz.upce.jidloz.service.ProducerService;
import cz.upce.jidloz.service.UserService;
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
    /*
    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ApiResponse<AuthToken> generateToken(@RequestBody LoginUser loginUser) throws AuthenticationException {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));

        final Producer producer;
        final User user = userService.findOne(loginUser.getUsername());
        final String token = jwtTokenUtil.generateToken(user);
        final String name = user.getUsername();
        final String role = "ROLE_USER";
        final int id = user.getId();

        return new ApiResponse<>(200, "success", new AuthToken(token, name, role, id));
    }*/

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ApiResponse<AuthToken> generateToken(@RequestBody LoginUser loginUser) throws AuthenticationException {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));

        final User user = userService.findOne(loginUser.getUsername());
        final String name = user.getUsername();
        final int idUser = user.getId();

        final String role;
        Producer producer = producerService.findByIdUser(idUser);

        role = producer == null ? "ROLE_USER" : "ROLE_PRODUCER";

        final String token = jwtTokenUtil.generateToken(user, role);
        return new ApiResponse<>(200, "success", new AuthToken(token, name, role, idUser));
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public ApiResponse<Void> logout() throws AuthenticationException {
        return new ApiResponse<>(200, "success", null);
    }

}
