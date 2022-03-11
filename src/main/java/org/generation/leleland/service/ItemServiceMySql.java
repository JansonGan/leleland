package org.generation.leleland.service;


import org.generation.leleland.repository.ItemRepository;
import org.generation.leleland.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceMySql implements ItemService {


    private final ItemRepository itemRepository;

    public ItemServiceMySql(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }


    @Override
    public void save(Item item) {
        this.itemRepository.save(item);
    }

    @Override
    public void delete(int itemId) {
        this.itemRepository.deleteById(itemId);
    }

    @Override
    public List<Item> all() {
        List<Item> result = new ArrayList<>();
        this.itemRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Item findById(int itemId) {
        Optional<Item> item = this.itemRepository.findById(itemId);
        return item.get();
    }
}
