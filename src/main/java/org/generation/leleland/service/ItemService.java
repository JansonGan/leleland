package org.generation.leleland.service;

import org.generation.leleland.repository.entity.Item;

import java.util.List;

public interface ItemService {

    void save(Item item);

    void delete(int itemId);

    List<Item> all();

    Item findById(int itemId);
}
