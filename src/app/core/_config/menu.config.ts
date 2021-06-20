export class MenuConfig {
  public defaults: any = {
    header: {
      self: {},
      items: [
        {
          title: 'Dashboards',
          root: true,
          alignment: 'left',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD',
        },
        {
          title: 'Schools',
          root: true,
          alignment: 'left',
          page: '/schools',
          // translate: 'MENU.DASHBOARD',
        },
        {
          title: 'Teachers',
          root: true,
          alignment: 'left',
          page: '/teachers',
          // translate: 'MENU.',
        },
        {
          title: 'Students',
          root: true,
          alignment: 'left',
          page: '/students',
          // translate: 'MENU.',
        },
        {
          title: 'Reports',
          root: true,
          alignment: 'left',
          toggle: 'click',
          submenu: [
            {
              title: 'School Report',
              bullet: 'dot',
              icon: 'flaticon-interface-7',
              submenu: [
                {
                  title: 'School Distribution by LGA',
                  bullet: 'dot',
                  page: '/schools/schools-by-lga',
                },
                {
                  title: 'School Distribution by State',
                  page: '/schools/schools-by-state',
                },
              ],
            },
            {
              title: 'Teacher Report',
              root: true,
              bullet: 'dot',
              icon: 'flaticon-interface-7',
              submenu: [
                // {
                //   title: 'Teacher Distribution by State',
                //   page: '/ngbootstrap/accordion',
                // },
                // {
                //   title: 'Teacher Distribution by LGA',
                //   page: '/ngbootstrap/accordion',
                // },
                // {
                //   title: 'Teacher Distribution by School',
                //   page: '/ngbootstrap/accordion',
                // },
                // {
                //   title: 'Teacher Distribution by Gender',
                //   page: '/ngbootstrap/accordion',
                // },
                {
                  title: 'Teachers Qualification',
                  page: '/ngbootstrap/accordion',
                },
              ],
              // submenu: [
              //   {
              //     title: 'Accordion',
              //     page: '/ngbootstrap/accordion',
              //   },
              //   {
              //     title: 'Alert',
              //     page: '/ngbootstrap/alert',
              //   },
              //   {
              //     title: 'Buttons',
              //     page: '/ngbootstrap/buttons',
              //   },
              //   {
              //     title: 'Carousel',
              //     page: '/ngbootstrap/carousel',
              //   },
              //   {
              //     title: 'Collapse',
              //     page: '/ngbootstrap/collapse',
              //   },
              //   {
              //     title: 'Datepicker',
              //     page: '/ngbootstrap/datepicker',
              //   },
              //   {
              //     title: 'Dropdown',
              //     page: '/ngbootstrap/dropdown',
              //   },
              //   {
              //     title: 'Modal',
              //     page: '/ngbootstrap/modal',
              //   },
              //   {
              //     title: 'Pagination',
              //     page: '/ngbootstrap/pagination',
              //   },
              //   {
              //     title: 'Popover',
              //     page: '/ngbootstrap/popover',
              //   },
              //   {
              //     title: 'Progressbar',
              //     page: '/ngbootstrap/progressbar',
              //   },
              //   {
              //     title: 'Rating',
              //     page: '/ngbootstrap/rating',
              //   },
              //   {
              //     title: 'Tabs',
              //     page: '/ngbootstrap/tabs',
              //   },
              //   {
              //     title: 'Timepicker',
              //     page: '/ngbootstrap/timepicker',
              //   },
              //   {
              //     title: 'Tooltips',
              //     page: '/ngbootstrap/tooltip',
              //   },
              //   {
              //     title: 'Typehead',
              //     page: '/ngbootstrap/typehead',
              //   },
              // ],
            },
            {
              title: 'Student Report',
              root: true,
              bullet: 'dot',
              icon: 'flaticon-interface-7',
              submenu: [
                // {
                //   title: 'Student Distribution by State',
                //   page: '/ngbootstrap/accordion',
                // },
                // {
                //   title: 'Student Distribution by LGA',
                //   page: '/ngbootstrap/accordion',
                // },
                // {
                //   title: 'Student Distribution by School',
                //   page: '/ngbootstrap/accordion',
                // },
                {
                  title: 'Distribution by Gender, Class and School',
                  page: '/students/attendance-report',
                },
              ],
              // submenu: [
              //   {
              //     title: 'Accordion',
              //     page: '/ngbootstrap/accordion',
              //   },
              //   {
              //     title: 'Alert',
              //     page: '/ngbootstrap/alert',
              //   },
              //   {
              //     title: 'Buttons',
              //     page: '/ngbootstrap/buttons',
              //   },
              //   {
              //     title: 'Carousel',
              //     page: '/ngbootstrap/carousel',
              //   },
              //   {
              //     title: 'Collapse',
              //     page: '/ngbootstrap/collapse',
              //   },
              //   {
              //     title: 'Datepicker',
              //     page: '/ngbootstrap/datepicker',
              //   },
              //   {
              //     title: 'Dropdown',
              //     page: '/ngbootstrap/dropdown',
              //   },
              //   {
              //     title: 'Modal',
              //     page: '/ngbootstrap/modal',
              //   },
              //   {
              //     title: 'Pagination',
              //     page: '/ngbootstrap/pagination',
              //   },
              //   {
              //     title: 'Popover',
              //     page: '/ngbootstrap/popover',
              //   },
              //   {
              //     title: 'Progressbar',
              //     page: '/ngbootstrap/progressbar',
              //   },
              //   {
              //     title: 'Rating',
              //     page: '/ngbootstrap/rating',
              //   },
              //   {
              //     title: 'Tabs',
              //     page: '/ngbootstrap/tabs',
              //   },
              //   {
              //     title: 'Timepicker',
              //     page: '/ngbootstrap/timepicker',
              //   },
              //   {
              //     title: 'Tooltips',
              //     page: '/ngbootstrap/tooltip',
              //   },
              //   {
              //     title: 'Typehead',
              //     page: '/ngbootstrap/typehead',
              //   },
              // ],
            },
          ],
        },
      ],
    },
    aside: {
      self: {},
      items: [
        {
          title: 'Dashboard',
          root: true,
          icon: 'flaticon2-architecture-and-city',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD',
          bullet: 'dot',
        },
        {
          title: 'Schools',
          root: true,
          icon: 'flaticon2-expand',
          page: '/schools',
        },
        {
          title: 'Teachers',
          root: true,
          icon: 'flaticon2-expand',
          page: '/teachers',
        },
        {
          title: 'Students',
          root: true,
          icon: 'flaticon2-expand',
          page: '/students',
        },
        // {
        //   title: 'Layout Builder',
        //   root: true,
        //   icon: 'flaticon2-expand',
        //   page: '/builder',
        // },
        { section: 'Reports' },
        {
          title: 'School',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-browser-2',
          submenu: [
            {
              title: 'School Distribution by State',
              page: '/schools/schools-by-state',
            },
            {
              title: 'School Distribution by LGA',
              page: '/schools/schools-by-lga',
            },
            // {
            //   title: 'School Distribution by Gender',
            //   page: '/schools/schools-by-gender',
            // },
          ],
        },
        {
          title: 'Teacher',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-digital-marketing',
          submenu: [
            // {
            //   title: 'Teacher Distribution by State',
            //   page: '/ngbootstrap/accordion',
            // },
            // {
            //   title: 'Teacher Distribution by LGA',
            //   page: '/ngbootstrap/accordion',
            // },
            // {
            //   title: 'Teacher Distribution by School',
            //   page: '/ngbootstrap/accordion',
            // },
            // {
            //   title: 'Teacher Distribution by Gender',
            //   page: '/ngbootstrap/accordion',
            // },
            {
              title: 'Teachers Qualification',
              page: '/teachers/teachers-by-qualification',
            },
            {
              title: 'Teachers Qualification By School',
              page: '/teachers/teachers-qualification-by-schoool',
            },
            {
              title: 'Subject Distribution',
              page: '/teachers/teachers-distribution-by-subject',
            },
            // {
            //   title: 'Teachers Distribution by Subject',
            //   page: '/teachers/teachers-distribution-by-subject',
            // },
          ],
          // submenu: [
          //   {
          //     title: 'Accordion',
          //     page: '/ngbootstrap/accordion',
          //   },
          //   {
          //     title: 'Alert',
          //     page: '/ngbootstrap/alert',
          //   },
          //   {
          //     title: 'Buttons',
          //     page: '/ngbootstrap/buttons',
          //   },
          //   {
          //     title: 'Carousel',
          //     page: '/ngbootstrap/carousel',
          //   },
          //   {
          //     title: 'Collapse',
          //     page: '/ngbootstrap/collapse',
          //   },
          //   {
          //     title: 'Datepicker',
          //     page: '/ngbootstrap/datepicker',
          //   },
          //   {
          //     title: 'Dropdown',
          //     page: '/ngbootstrap/dropdown',
          //   },
          //   {
          //     title: 'Modal',
          //     page: '/ngbootstrap/modal',
          //   },
          //   {
          //     title: 'Pagination',
          //     page: '/ngbootstrap/pagination',
          //   },
          //   {
          //     title: 'Popover',
          //     page: '/ngbootstrap/popover',
          //   },
          //   {
          //     title: 'Progressbar',
          //     page: '/ngbootstrap/progressbar',
          //   },
          //   {
          //     title: 'Rating',
          //     page: '/ngbootstrap/rating',
          //   },
          //   {
          //     title: 'Tabs',
          //     page: '/ngbootstrap/tabs',
          //   },
          //   {
          //     title: 'Timepicker',
          //     page: '/ngbootstrap/timepicker',
          //   },
          //   {
          //     title: 'Tooltips',
          //     page: '/ngbootstrap/tooltip',
          //   },
          //   {
          //     title: 'Typehead',
          //     page: '/ngbootstrap/typehead',
          //   },
          // ],
        },
        {
          title: 'Student',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-digital-marketing',
          submenu: [
            // {
            //   title: 'Student Distribution by State',
            //   page: '/ngbootstrap/accordion',
            // },
            // {
            //   title: 'Student Distribution by LGA',
            //   page: '/ngbootstrap/accordion',
            // },
            // {
            //   title: 'Student Distribution by School',
            //   page: '/ngbootstrap/accordion',
            // },
            {
              title: 'Distribution by Gender, Class and School',
              page: '/students/students-by-gender',
            },
          ],
          // submenu: [
          //   {
          //     title: 'Accordion',
          //     page: '/ngbootstrap/accordion',
          //   },
          //   {
          //     title: 'Alert',
          //     page: '/ngbootstrap/alert',
          //   },
          //   {
          //     title: 'Buttons',
          //     page: '/ngbootstrap/buttons',
          //   },
          //   {
          //     title: 'Carousel',
          //     page: '/ngbootstrap/carousel',
          //   },
          //   {
          //     title: 'Collapse',
          //     page: '/ngbootstrap/collapse',
          //   },
          //   {
          //     title: 'Datepicker',
          //     page: '/ngbootstrap/datepicker',
          //   },
          //   {
          //     title: 'Dropdown',
          //     page: '/ngbootstrap/dropdown',
          //   },
          //   {
          //     title: 'Modal',
          //     page: '/ngbootstrap/modal',
          //   },
          //   {
          //     title: 'Pagination',
          //     page: '/ngbootstrap/pagination',
          //   },
          //   {
          //     title: 'Popover',
          //     page: '/ngbootstrap/popover',
          //   },
          //   {
          //     title: 'Progressbar',
          //     page: '/ngbootstrap/progressbar',
          //   },
          //   {
          //     title: 'Rating',
          //     page: '/ngbootstrap/rating',
          //   },
          //   {
          //     title: 'Tabs',
          //     page: '/ngbootstrap/tabs',
          //   },
          //   {
          //     title: 'Timepicker',
          //     page: '/ngbootstrap/timepicker',
          //   },
          //   {
          //     title: 'Tooltips',
          //     page: '/ngbootstrap/tooltip',
          //   },
          //   {
          //     title: 'Typehead',
          //     page: '/ngbootstrap/typehead',
          //   },
          // ],
        },
        { section: 'Attendance' },
        {
          title: 'Student Attendance',
          root: true,
          icon: 'flaticon2-expand',
          page: '/students/attendance-report',
        },
        {
          title: 'Teacher Attendance',
          root: true,
          icon: 'flaticon2-expand',
          page: '/teachers/attendance-report',
        },
      ],
    },
  };

  public get configs(): any {
    return this.defaults;
  }
}
