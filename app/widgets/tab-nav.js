import Vue from 'vue';

export var ABOUT_TABS = [
  {name: 'About The Conference', url: '/page/about/conference'},
  {name: 'Register', url: '/page/about/registration'},
  {name: 'Privacy Policy', url: '/page/about/privacy'},
  {name: 'Code of Conduct', url: '/page/about/code-of-conduct'},
  {name: 'Diversity Statement', url: '/page/about/diversity-statement'},
  {name: 'Fequently Asked Questions', url: '/page/about/faq'},
];

export var COMMUNITY_TABS = [
  {name: 'Local Meetups', url: '/page/community/meetups'},
  {name: 'Chat Room', url: 'https://gitter.im/pytexas/PyTexas', external: true},
  {name: 'Mailing List', url: '/page/community/mailing-list'},
  {name: 'Employers', url: '/page/community/employers'}
];

export var VENUE_TABS = [
  {name: 'Map', url: '/page/venue/map'},
  {name: 'Hotels', url: '/page/venue/hotels'}
];

var TabNav = Vue.component('tab-nav', {
  template: '#tpl-widgets-tab-nav',
  watch: {'$route': 'init'},
  data() {
    return {
      tabs: null
    };
  },
  created() {
    this.init();
  },
  filters: {
    klass(tab) {
      if (tab.active) {
        return 'md-dense md-primary';
      }
      
      return 'md-dense';
    }
  },
  methods: {
    init() {
      this.tabs = null;
      
      if (this.$route.path.indexOf('/page/about/') === 0) {
        this.tabs = [...ABOUT_TABS];
      } else if (this.$route.path.indexOf('/page/community/') === 0) {
        this.tabs = [...COMMUNITY_TABS];
      } else if (this.$route.path.indexOf('/page/venue/') === 0) {
        this.tabs = [...VENUE_TABS];
      }
      
      if (this.tabs) {
        this.tabs.forEach((tab) => {
          if (tab.url == this.$route.path) {
            tab.active = true;
          } else {
            tab.active = false;
          }
        });
      }
    }
  }
});

export default TabNav;
