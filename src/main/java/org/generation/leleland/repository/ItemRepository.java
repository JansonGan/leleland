package org.generation.leleland.repository;

import org.generation.leleland.repository.entity.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Integer> {
}
