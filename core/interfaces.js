const isProductionEnv = false;
const URI = isProductionEnv ? 'https://flow-admin.flowclub.com' : 'https://flow-admin-uat.blueo.tech';

const urlHandler = (path) => {
    return `${URI}${path}`;
}

export default {
    'allNews': urlHandler('/public/api/news/news/allNews'),
    'allNews': urlHandler('/public/api/activity/activityNotice/recentActivity'),
}