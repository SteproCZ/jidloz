package cz.upce.jidloz.model;

public class AuthToken {

    private String token;
    private String username;
    private String role;
    private int id;

    public AuthToken(){}

    public AuthToken(String token, String username, String role, int id){
        this.token = token;
        this.username = username;
        this.role = role;
        this.id =id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public AuthToken(String token){
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
