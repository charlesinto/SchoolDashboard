import { Location } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProgressSpinnerMode, ThemePalette } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TeachersService } from '../teachers.service';
import { Chart } from 'chart.js/dist/Chart.min.js';
import { LayoutConfigService } from 'app/core/_base/layout';

@Component({
  selector: 'kt-teacher-assessment-detail',
  templateUrl: './teacher-assessment-detail.component.html',
  styleUrls: ['./teacher-assessment-detail.component.scss'],
})
export class TeacherAssessmentDetailComponent implements OnInit {
  isloading = false;
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 40;
  colorSpinner: ThemePalette = 'primary';
  data: any;

  totalScore = 0;

  lessonPlan: any;
  subjectMatterMastery: any;
  teachingMethod: any;

  @Input() barChartData: { labels: string[]; datasets: any[] } = {
    labels: ['Lesson Plan', 'Subject Matter Mastery', 'Teaching Methodology'],
    datasets: [
      {
        label: 'Lesson Plan',
        borderColor: this.layoutConfigService.getConfig('colors.state.brand'),
        fill: false,
        borderWidth: 2,
        backgroundColor: Chart.helpers
          .color(this.layoutConfigService.getConfig('colors.state.brand'))
          .alpha(0.6)
          .rgbString(),
        // borderColor: this.color(
        //   this.layoutConfigService.getConfig('colors.state.brand')
        // )
        //   .alpha(0)
        //   .rgbString(),

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

        data: [0],
      },

      {
        label: 'Subject Matter Mastery',
        fill: false,
        borderWidth: 2,
        backgroundColor: Chart.helpers
          .color(this.layoutConfigService.getConfig('colors.state.brand'))
          .alpha(0.2)
          .rgbString(),
        borderColor: this.layoutConfigService.getConfig('colors.state.danger'),

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

        data: [0, 0],
      },
      {
        label: 'Teaching Methodology',
        fill: false,
        borderWidth: 2,
        backgroundColor: Chart.helpers
          .color(this.layoutConfigService.getConfig('colors.state.brand'))
          .alpha(0.2)
          .rgbString(),
        borderColor: this.layoutConfigService.getConfig('colors.state.danger'),

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

        data: [0, 0],
      },
    ],
  };
  @ViewChild('chart', { static: true }) chart: ElementRef;
  color = Chart.helpers.color;

  chartUI;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private teacherService: TeachersService,
    private changeDetectRef: ChangeDetectorRef,
    private layoutConfigService: LayoutConfigService
  ) {}

  ngOnInit() {
    this.initChartJS();
    this.listenForRouteChange();
  }

  listenForRouteChange() {
    this.route.queryParams.subscribe((params) => {
      const { assesmentId } = params;
      this.isloading = true;

      this.teacherService
        .getCoachingAssessmentByID(Number(assesmentId))
        .subscribe(
          (data) => {
            console.log('data: ', data);
            this.lessonPlan = data['Lesson Plan'];

            this.subjectMatterMastery = data['Subject Matter Mastery'];
            this.teachingMethod = data['Teaching Method'];
            this.data = data;
            this.totalScore = parseInt(data.score);
            console.log('total score: ', this.totalScore);

            this.isloading = false;

            this.chartUI.data = {
              labels: [
                'Lesson Plan',
                'Subject Matter Mastery',
                'Teaching Methodology',
              ],
              datasets: [
                {
                  fill: true,
                  // borderWidth: 0,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(120, 162, 235, 0.6)',
                  ],
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
                  pointBorderColor: Chart.helpers
                    .color('#000000')
                    .alpha(0)
                    .rgbString(),
                  pointHoverBackgroundColor:
                    this.layoutConfigService.getConfig('colors.state.brand'),
                  pointHoverBorderColor: Chart.helpers
                    .color('#000000')
                    .alpha(0.1)
                    .rgbString(),

                  data: [
                    this.lessonPlan.score,
                    this.subjectMatterMastery.score,
                    this.teachingMethod.score,
                  ],
                },
              ],
            };

            this.chartUI.update();

            this.changeDetectRef.detectChanges();
          },
          (error) => {
            this.isloading = false;
            this.changeDetectRef.detectChanges();
          }
        );
    });
  }
  goBack() {
    this.location.back();
  }

  initChartJS() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    this.chartUI = new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: this.barChartData,
      options: {
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        barRadius: 4,
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: true,
              stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              stacked: true,
              gridLines: true,
            },
          ],
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      },
    });
  }
}
