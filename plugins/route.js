import Bus from '../assets/bus';

export default ({ app }) => {
  app.router.beforeEach((to, from, next)=> {
    if(to.name === 'tech' || to.name === 'spec') {
        Bus.$emit('showNav', true);
    } else {
        Bus.$emit('showNav', false);
    }

    next();
  });
}
