import { Component, OnInit, ViewChild } from '@angular/core';
import { TableServiceService } from '../../services/table-service.service'; 
import { TableInterface } from '../../interfaces/table-interface';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
  imports: [MatPaginatorModule, MatTableModule,MatSortModule],
  standalone: true
})




export class TableComponentComponent implements OnInit {
  displayedColumns = ['id', 'name','email'];
  dataSource = new MatTableDataSource<TableInterface>();
  

  @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;

  constructor(
    private tableService: TableServiceService
  
  ) { }

  
  ngOnInit() {

      this.tableService.getUsers().subscribe((data: TableInterface[]) => {    
      this.dataSource.data= data;
      console.log(data);
    });

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Now it's valid
    this.dataSource.sort = this.sort; // Now it's valid
  } 



}


