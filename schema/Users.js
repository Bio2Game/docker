cube(`Users`, {
  sql: `SELECT * FROM public.users`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, username, createdAt, updatedAt, birthDate]
    }
  },
  
  dimensions: {
    contributorMobile: {
      sql: `contributor_mobile`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    loginSource: {
      sql: `login_source`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    emailcontributor: {
      sql: `${CUBE}."emailContributor"`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    website: {
      sql: `website`,
      type: `string`
    },
    
    avatarPath: {
      sql: `avatar_path`,
      type: `string`
    },
    
    languageCode: {
      sql: `language_code`,
      type: `string`
    },
    
    isAnimator: {
      sql: `is_animator`,
      type: `string`
    },
    
    localisation: {
      sql: `localisation`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    rememberMeToken: {
      sql: `remember_me_token`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    birthDate: {
      sql: `birth_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
