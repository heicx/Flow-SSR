import Bus from '../assets/bus';

export default ({ app }) => {
  app.router.beforeEach((to, from, next)=> {
    if(['tech', 'spec', 'cn-tech', 'cn-spec'].indexOf(to.name) > -1) {
        Bus.$emit('showNav', true);
    } else {
        Bus.$emit('showNav', false);
    }

    next();
  });
}
