import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LayoutConfigService } from 'app/core/_base/layout';
import moment from 'moment';
import {
  AppServiceService,
  ILocalGovernments,
  IState,
} from '../../../services/app-service/app-service.service';
import { School } from '../../schools/schools.component';
import { SchoolsService } from '../../schools/schools.service';

const $ = window['$'];

@Component({
  selector: 'kt-dropout-risk-analysis',
  templateUrl: './dropout-risk-analysis.component.html',
  styleUrls: ['./dropout-risk-analysis.component.scss'],
})
export class DropoutRiskAnalysisComponent implements OnInit {
  loadingFilterBox = false;
  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));
  schoolSelected = new FormControl('');
  classSelected = new FormControl('');
  dateRange = new FormControl('');
  localgovernments: ILocalGovernments[] = [];
  states: IState[] = [];
  classes = [
    'SS One',
    'SS Two',
    'SS Three',
    'JS One',
    'JS Two',
    'JS Three',
    'Primary One',
    'Primary Two',
    'Primary Three',
    'Primary Four',
    'Primary Five',
    'Primary Six',
  ];
  schools: School[] = [];
  schoolsDataBase: School[] = [];
  @Input() data: { labels: string[]; datasets: any[] };
  @Input() type: string = 'bar';
  @ViewChild('chart', { static: true }) chart: ElementRef;
  color = Chart.helpers.color;
  constructor(
    private appService: AppServiceService,
    private schoolService: SchoolsService,
    private layoutConfigService: LayoutConfigService
  ) {}

  ngOnInit() {
    this.initialDatePicker();
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
    this.getSchools();
  }
  getUserAccessibleState() {
    this.states = this.appService.getStates(
      this.appService.getUserStateAccess()
    );
  }

  getUserAccessibleLocals(states = []) {
    this.localgovernments = this.appService.getLocalGovernments(states);
  }

  onStateSelectionChange(event: any) {
    // if (this.statesSelected.value.includes('All')) {
    //   const index = this.statesSelected.value.findIndex(
    //     (item) => item === 'All'
    //   );
    //   const values = this.statesSelected.value;
    //   values.splice(index, 1);
    //   // this.statesSelected.setValue([...])
    // }
    if (this.statesSelected.value.length > 0) {
      this.getUserAccessibleLocals([this.statesSelected.value]);
      this.schools = this.schoolsDataBase.filter(
        (item) => this.statesSelected.value === item.state.trim()
      );
    } else {
      this.getUserAccessibleLocals();
      this.schools = this.schoolsDataBase;
    }
  }

  onlgaSelectionChange(event) {
    if (this.lgaSelected.value.length > 0) {
      this.schools = this.schoolsDataBase.filter(
        (item) => this.lgaSelected.value === item.lga.trim()
      );
    } else {
      this.schools = this.schoolsDataBase;
    }
  }

  private initChart() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(this.chart.nativeElement, {
      type: this.type,
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // legend: false,
        scales: {
          xAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
              },
              gridLines: false,
              ticks: {
                display: true,
                beginAtZero: true,
                fontColor: this.layoutConfigService.getConfig(
                  'colors.base.shape.3'
                ),
                fontSize: 13,
                padding: 10,
              },
            },
          ],
          yAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
              },
              gridLines: {
                color: this.layoutConfigService.getConfig(
                  'colors.base.shape.2'
                ),
                drawBorder: false,
                offsetGridLines: false,
                drawTicks: false,
                borderDash: [3, 4],
                zeroLineWidth: 1,
                zeroLineColor: this.layoutConfigService.getConfig(
                  'colors.base.shape.2'
                ),
                zeroLineBorderDash: [3, 4],
              },
              ticks: {
                max: 70,
                stepSize: 10,
                display: true,
                beginAtZero: true,
                fontColor: this.layoutConfigService.getConfig(
                  'colors.base.shape.3'
                ),
                fontSize: 13,
                padding: 10,
              },
            },
          ],
        },
        title: {
          display: false,
        },
        hover: {
          mode: 'index',
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: 'nearest',
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          backgroundColor:
            this.layoutConfigService.getConfig('colors.state.brand'),
          titleFontColor: '#ffffff',
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 5,
          },
        },
      },
    });
  }

  initialDatePicker() {
    const $this = this;
    $('input[name="daterange"]').daterangepicker(
      {
        autoUpdateInput: false,
        opens: 'left',
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, 'days'),
            moment().subtract(1, 'days'),
          ],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [
            moment().subtract(1, 'month').startOf('month'),
            moment().subtract(1, 'month').endOf('month'),
          ],
        },
      },
      function (start, end, label) {
        console.log(
          'A new date selection was made: ' +
            start.format('YYYY-MM-DD') +
            ' to ' +
            end.format('YYYY-MM-DD')
        );
        $this.dateRange.setValue(
          `${start.format('YYYY-MM-DD')} to ${end.format('YYYY-MM-DD')}`
        );
      }
    );
  }
  getSchools() {
    this.loadingFilterBox = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        this.loadingFilterBox = false;
        this.schools = data;
        this.schoolsDataBase = data;
      },
      (error) => {
        this.loadingFilterBox = false;
      }
    );
  }
}
