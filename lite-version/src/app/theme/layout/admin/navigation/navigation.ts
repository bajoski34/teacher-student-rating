import { AuthenticationService } from './../../../../services/authentication.service';
import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
let user = AuthenticationService.prototype.getUser();
if(user){
  user = user['user']['id'];
}else{
  user = null;
}
const NavigationItems = [
  {
    id: 'home',
    title: 'Home',
    type: 'group',
    role: [1,2,3],
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/authenticated/dashboard/analytics',
        icon: 'feather icon-home'
      }
    ]
  },
  {
    id: 'teacher',
    title: 'Teacher',
    type: 'group',
    role: [2],
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'my_assessment',
        title: 'My performance',
        type: 'item',
        url: '/authenticated/teacher/my-performance',
        icon: 'feather icon-home'
      },
      {
        id: 'students',
        title: 'View department students',
        type: 'item',
        url: '/authenticated/teacher/department-student',
        icon: 'feather icon-home'
      },
    ]
  },
  {
    id: 'department',
    title: 'department management',
    type: 'group',
    role: [1],
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'Department',
        title: 'Department',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'Add-new-department',
            title: 'Add new department',
            type: 'item',
            url: '/authenticated/add-new-department',
            external: false
          },
          {
            id: 'view-department-list',
            title: 'View department list',
            type: 'item',
            url: '/authenticated/view-department-list',
            external: false
          }
        ]
      }
    ]
  },
  // {
  //   id: 'rating',
  //   title: 'rate',
  //   type: 'group',
  //   role: [3],
  //   icon: 'feather icon-align-left',
  //   children: [
  //     {
  //       id: 'rating',
  //       title: 'Rating',
  //       type: 'collapse',
  //       icon: 'feather icon-menu',
  //       children: [
  //         {
  //           id: 'rate-teachers',
  //           title: 'Rate teacher',
  //           type: 'item',
  //           url: '/authenticated/rate-teacher/' + user,
  //           external: false
  //         },
  //         {
  //           id: 'teachers-rating-overiew',
  //           title: 'Rating Overview',
  //           type: 'item',
  //           url: '/authenticated/teacher-rating-overview',
  //           external: false
  //         },
  //       ]
  //     }
  //   ]
  // },
  {
    id: 'teacher',
    title: 'teacher management',
    type: 'group',
    role: [1],
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'Teachers',
        title: 'Teachers',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'Add-new-teacher',
            title: 'Add new teacher',
            type: 'item',
            url: '/authenticated/add-new-teacher',
            external: false
          },
          {
            id: 'view-teachers-list',
            title: 'View teachers list',
            type: 'item',
            url: '/authenticated/view-teachers-list',
            external: false
          }
        ]
      }
    ]
  },
  // {
  //   id: 'add_courses',
  //   title: 'add courses',
  //   type: 'group',
  //   icon: 'feather icon-list',
  //   role: [1],
  //   children: [
  //     {
  //       id: 'Add Course',
  //       title: 'Add new Course',
  //       type: 'item',
  //       icon: 'feather icon-file-text',
  //       url: '/authenticated/add-new-course',
  //     }
  //   ]
  // },
  // {
  //   id: 'my_courses',
  //   title: 'courses',
  //   type: 'group',
  //   role: [1,2,3],
  //   icon: 'feather icon-align-left',
  //   children: [
  //     {
  //       id: 'Courses',
  //       title: 'Courses',
  //       type: 'collapse',
  //       icon: 'feather icon-menu',
  //       children: [
  //         {
  //           id: 'view-all-courses',
  //           title: 'View all courses',
  //           type: 'item',
  //           url: '/authenticated/view-course-list',
  //           external: false
  //         },
  //         {
  //           id: 'view-course-list',
  //           title: 'View past assessment',
  //           type: 'item',
  //           url: '/authenticated/view-enrolled-course-list/' + user,
  //           external: false
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    id: 'teachers',
    title: 'teachers',
    type: 'group',
    role: [1,3],
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'teachers',
        title: 'Teachers',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'view-teachers-list',
            title: 'View teachers to rate',
            type: 'item',
            url: '/authenticated/view-unrated-teachers',
            external: false
          },
          {
            id: 'view-rated-teachers',
            title: 'View rated teachers',
            type: 'item',
            url: '/authenticated/view-rated-teachers',
            external: false
          }
        ]
      }
    ]
  },
  {
    id: 'students',
    title: 'student management',
    type: 'group',
    role: [1],
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'students',
        title: 'Students',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'add-new-student',
            title: 'Add new student',
            type: 'item',
            url: '/authenticated/add-new-student',
            external: false
          },
          {
            id: 'view-student-list',
            title: 'View student list',
            type: 'item',
            url: '/authenticated/view-student-list',
            external: false
          }
        ]
      }
    ]
  }
  ,
  {
    id: 'ui-element',
    title: 'UI ELEMENT & FORMS',
    type: 'group',
    icon: 'feather icon-layers',
    role: [1,2,3],
    children: [
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: '/authenticated/basic/alert'
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/authenticated/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/authenticated/basic/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumbs & Pagination',
            type: 'item',
            url: '/authenticated/basic/breadcrumb-paging'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/authenticated/basic/cards'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/authenticated/basic/collapse'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: '/authenticated/basic/carousel'
          },
          {
            id: 'grid-system',
            title: 'Grid System',
            type: 'item',
            url: '/authenticated/basic/grid-system'
          },
          {
            id: 'progress',
            title: 'Progress',
            type: 'item',
            url: '/authenticated/basic/progress'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/authenticated/basic/modal'
          },
          {
            id: 'spinner',
            title: 'Spinner',
            type: 'item',
            url: '/authenticated/basic/spinner'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/authenticated/basic/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/authenticated/basic/typography'
          },
          {
            id: 'tooltip-popovers',
            title: 'Tooltip & Popovers',
            type: 'item',
            url: '/authenticated/basic/tooltip-popovers'
          },
          {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/authenticated/basic/other'
          }
        ]
      },
      {
        id: 'forms-element',
        title: 'Form Elements',
        type: 'item',
        url: '/authenticated/forms/basic',
        icon: 'feather icon-file-text'
      }
    ]
  },
  {
    id: 'table',
    title: 'Table & Charts',
    type: 'group',
    icon: 'feather icon-list',
    role: [1,2,3],
    children: [
      {
        id: 'bootstrap',
        title: 'Bootstrap Table',
        type: 'item',
        url: '/authenticated/tbl-bootstrap/bt-basic',
        icon: 'feather icon-server'
      },
      {
        id: 'apex',
        title: 'Apex Chart',
        type: 'item',
        url: '/authenticated/charts/apex',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'feather icon-file-text',
    role: [1,2,3],
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/authenticated/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/authenticated/auth/signin',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'reset-password',
            title: 'Reset Password',
            type: 'item',
            url: '/authenticated/auth/reset-password',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'change-password',
            title: 'Change Password',
            type: 'item',
            url: '/authenticated/auth/change-password',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        type: 'collapse',
        icon: 'feather icon-sliders',
        children: [
          {
            id: 'error',
            title: 'Error',
            type: 'item',
            url: '/authenticated/maintenance/error',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'coming-soon',
            title: 'Maintenance',
            type: 'item',
            url: '/authenticated/maintenance/coming-soon',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  }
];
@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
