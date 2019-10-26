import { Component, OnInit } from '@angular/core';
import { CategoryService } from './service/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})

export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      console.log(response.body);
      for (const category of response.body) {
        this.categories.push({
          categoryId: category.categoryId,
          categoryName: category.categoryName,
          seoUrl: category.seoUrl
        });

        console.log({
          categoryId: category.categoryId,
          categoryName: category.categoryName,
          seoUrl: category.seoUrl
        });
      }
    });
  }

  ngOnInit() {
    this.getCategories();
  }
}
