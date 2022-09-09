cube(`Questions`, {
  sql: `SELECT * FROM public.questions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Quizzes: {
      sql: `${CUBE}.quiz_id = ${Quizzes}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    explication: {
      sql: `explication`,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    question: {
      sql: `question`,
      type: `string`
    },
    
    label: {
      sql: `label`,
      type: `string`
    },
    
    responses: {
      sql: `responses`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
