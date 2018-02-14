export const saasItem: angular.IComponentOptions = {
  bindings: {
    title: '<',
    description: '<',
    url: '<',
    image: '<',
    icon: '<'
  },
  template: require('./saas-item.html')
};
