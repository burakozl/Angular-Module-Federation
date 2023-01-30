import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare function name(): any;

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ApplayoutComponent implements OnInit {


  ngOnInit(): void {
    name();
  }

}
