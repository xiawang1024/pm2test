/*
 * @Author: xiawang1024
 * @Date: 2022-03-11 15:00:38
 * @LastEditTime: 2022-03-11 17:18:35
 * @LastEditors: xiawang1024
 * @Description: 
 * @FilePath: /pm2Project/ecosystem.config.js
 * 工作，生活，健康
 */
module.exports = {
  apps: [{
    script: 'index.js',
    watch: '.',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    env_staging: {
      NODE_ENV: 'staging'
    }
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: '110.42.202.201',
      ref: 'origin/master',
      repo: 'https://github.com/xiawang1024/pm2test.git',
      path: '/home/ubuntu/www',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
    staging: {
      user: 'ubuntu',
      host: '110.42.202.201',
      ref: 'origin/master',
      repo: 'https://github.com/xiawang1024/pm2test.git',
      path: '/home/ubuntu/www',
      env: {
        NODE_ENV: 'staginging'
      },
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env staging',
    }
  }
};
