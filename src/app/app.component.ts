import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  
  public barChartData: ChartDataSets[] = [
    { data: [65, 67, 70, 75, 80, 90], label: 'Js' },
    { data: [50, 48, 47, 49, 44, 40], label: '.Net' },
    { data: [40, 30, 28, 25, 22, 20], label: 'Java' },
  ];
  
  constructor() { }
  
  ngOnInit() {
  }
}
