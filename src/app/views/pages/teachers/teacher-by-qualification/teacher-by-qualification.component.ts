import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  Input,
} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TeachersService } from '../teachers.service';
import { Chart } from 'chart.js/dist/Chart.min.js';
import { LayoutConfigService } from 'app/core/_base/layout';

@Component({
  selector: 'kt-teacher-by-qualification',
  templateUrl: './teacher-by-qualification.component.html',
  styleUrls: ['./teacher-by-qualification.component.scss'],
})
export class TeacherByQualificationComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: ITeacherQualificationByState[] = [];
  displayedColumns = ['state', 'qualification', 'count'];
  dataSource = new MatTableDataSource<ITeacherQualificationByState>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<ITeacherQualificationByState>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: ITeacherQualificationByState;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  totalCount: number = 0;

  @Input() data: { labels: string[]; datasets: any[] };
  @ViewChild('chart', { static: true }) chart: ElementRef;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private teacherService: TeachersService,
    private changeDetectRef: ChangeDetectorRef,
    private layoutConfigService: LayoutConfigService
  ) {}

  ngOnInit() {
    this.getTeacherQualificationByState();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getTeacherQualificationByState() {
    this.loading = true;
    this.teacherService.getTeachersQualificationByState().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.loading = false;
        this.totalCount = data.reduce(
          (accumulate: any, currentValue: ITeacherQualificationByState) =>
            accumulate + parseInt(currentValue.count),
          0
        );
        this.changeDetectRef.detectChanges();

        this.data = {
          labels: data.map((item) => item.qualification),
          datasets: [
            {
              // label: 'dataset 1',
              backgroundColor: this.layoutConfigService.getConfig(
                'colors.state.success'
              ),
              data: data.map((item) => parseInt(item.count)),
            },
          ],
        };

        this.initChartJS();
      },
      (error) => {
        this.loading = false;
      }
    );
  }
  initChartJS() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: this.data,
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
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  onRowElementClick(event: any, element: ITeacherQualificationByState) {
    console.log(element);
    this.selection.clear();
    this.school = element;
    this.editMode = true;
  }
  closeDetailPage() {
    this.selection.clear();
    this.editMode = false;
  }
}

export interface ITeacherQualificationByState {
  state: string;
  count: string;
  qualification?: string;
}
