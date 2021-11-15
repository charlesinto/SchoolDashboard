import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatDialogRef,
  MatPaginator,
  MatTableDataSource,
  MAT_DIALOG_DATA,
} from '@angular/material';
import moment from 'moment';
import { LayoutConfigService } from '../../../../../app/core/_base/layout';
import { Student } from '../students.component';

const $ = window['$'];

@Component({
  selector: 'kt-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: true }) chart: ElementRef;
  color = Chart.helpers.color;
  @Input() chartData: { labels: string[]; datasets: any[] } = {
    labels: ['Absent', 'Present'],
    datasets: [
      {
        fill: true,
        // borderWidth: 0,
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: this.color(
          this.layoutConfigService.getConfig('colors.state.brand')
        )
          .alpha(0)
          .rgbString(),

        pointHoverRadius: 4,
        pointHoverBorderWidth: 12,
        pointBackgroundColor: Chart.helpers
          .color('#000000')
          .alpha(0)
          .rgbString(),
        pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
        pointHoverBackgroundColor:
          this.layoutConfigService.getConfig('colors.state.brand'),
        pointHoverBorderColor: Chart.helpers
          .color('#000000')
          .alpha(0.1)
          .rgbString(),

        data: [5, 2],
      },
    ],
  };
  @Input() type: string = 'line';
  dateRange = new FormControl('');
  ELEMENT_DATA: IAttend[] = [
    {
      date: '20/06/2021',
      present: true,
      absent: false,
    },
    {
      date: '21/06/2021',
      present: true,
      absent: false,
    },
    {
      date: '22/06/2021',
      present: false,
      absent: true,
    },
    {
      date: '23/06/2021',
      present: false,
      absent: true,
    },
    {
      date: '24/06/2021',
      present: false,
      absent: true,
    },
    {
      date: '25/06/2021',
      present: false,
      absent: true,
    },
    {
      date: '26/06/2021',
      present: false,
      absent: true,
    },
    {
      date: '27/06/2021',
      present: false,
      absent: true,
    },
  ];
  displayedColumns = ['date', 'present', 'absent'];
  dataSource = new MatTableDataSource<IAttend>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  chartUI;
  constructor(
    private layoutConfigService: LayoutConfigService,
    public dialogRef: MatDialogRef<StudentDetailComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      student: Student;
    }
  ) {}

  ngOnInit() {
    this.initChart();
    this.initialDatePicker();
  }
  closeModal() {
    this.dialogRef.close();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  c() {
    this.dialogRef.close();
  }
  private initChart() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    this.chartUI = new Chart(this.chart.nativeElement, {
      type: 'pie',
      data: this.chartData,

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
}

export interface IAttend {
  date: string;
  present: boolean;
  absent: boolean;
}
