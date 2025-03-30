package com.pinggy.assignment.backend.DTO;

import lombok.Data;

@Data
public class Post {
    private String title;
    private String body;
    private String pinggyAuthHeader;

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPinggyAuthHeader() {
        return pinggyAuthHeader;
    }

    public void setPinggyAuthHeader(String pinggyAuthHeader) {
        this.pinggyAuthHeader = pinggyAuthHeader;
    }
}
