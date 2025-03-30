package com.pinggy.assignment.backend.Filter;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;

public class AuthFilter implements Filter {

    public static final ThreadLocal<String> AUTH_HEADER_VALUE = new ThreadLocal<>();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        // Allow OPTIONS requests (CORS preflight) to pass through
        if ("OPTIONS".equalsIgnoreCase(httpRequest.getMethod())) {
            chain.doFilter(request, response);
            return;
        }

        String authHeader = httpRequest.getHeader("PinggyAuthHeader");

        if (authHeader == null || authHeader.isEmpty()) {
            httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Missing or empty PinggyAuthHeader");
            return;
        }

        try {
            AUTH_HEADER_VALUE.set(authHeader);
            chain.doFilter(request, response);
        } finally {
            AUTH_HEADER_VALUE.remove();
        }
    }
}