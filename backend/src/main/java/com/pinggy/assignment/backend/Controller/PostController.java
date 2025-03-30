package com.pinggy.assignment.backend.Controller;


import com.pinggy.assignment.backend.DTO.Post;
import org.springframework.web.bind.annotation.*;
import com.pinggy.assignment.backend.Filter.AuthFilter;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class PostController {

    private final List<Post> posts = new ArrayList<>();

    @PostMapping("/post")
    public Post createPost(@RequestBody Post postRequest) {
        String authHeader = AuthFilter.AUTH_HEADER_VALUE.get();

        Post response = new Post();
        response.setTitle(postRequest.getTitle());
        response.setBody(postRequest.getBody());
        response.setPinggyAuthHeader(authHeader);

        posts.add(response);
        return response;
    }

    @GetMapping("/list")
    public List<Post> getAllPosts() {
        return new ArrayList<>(posts);
    }
}