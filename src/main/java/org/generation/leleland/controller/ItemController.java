package org.generation.leleland.controller;


import org.generation.leleland.component.FileUploadUtil;
import org.generation.leleland.controller.DTO.ItemDTO;
import org.generation.leleland.repository.entity.Item;
import org.generation.leleland.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.print.attribute.standard.Sides;
import java.io.IOException;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Value("${image.folder}")
    private String imageFolder;

    private final ItemService itemService;

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item> getItems() {
        return this.itemService.all();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Item findById(@PathVariable Integer id) {
        return this.itemService.findById(id);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        this.itemService.delete(id);
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(@RequestParam(name="name", required = true) String name,
                     @RequestParam(name="description", required = true) String description,
                     @RequestParam(name="imageUrl", required = true) String imageUrl,
                     @RequestParam(name="price", required = true) double price,
                     @RequestParam("imageFile")MultipartFile multipartFile) throws IOException {

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(imageFolder, fileName, multipartFile);

        String fullPath = imageFolder + '/' + imageUrl;

        ItemDTO itemDTO = new ItemDTO(name, description, fullPath, price);
        this.itemService.save(new Item(itemDTO));
    }

}
