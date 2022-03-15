package org.generation.leleland.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;


@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Value("${image.folder}")
    private String imageFolder;

    public void addViewControllers(ViewControllerRegistry registry) {

        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index").setViewName("index");
        registry.addViewController("/aboutus").setViewName("aboutus");
        registry.addViewController("/service").setViewName("service");
        registry.addViewController("/form-login").setViewName("form-login");
        registry.addViewController("/logout").setViewName("index");
        registry.addViewController("/form-upload-product").setViewName("form-upload-product");
    }


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        registry.addResourceHandler("/static")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);


        Path uploadDir = Paths.get(imageFolder);
        String uploadPath = uploadDir.toFile().getAbsolutePath();

        registry.addResourceHandler("/" + imageFolder + "/**")
                .addResourceLocations("file:" + uploadPath + "/")
                .setCachePeriod(0);


    }
}
