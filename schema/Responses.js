cube(`Responses`, {
  sql: `SELECT * FROM public.responses`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Quizzes: {
      sql: `${CUBE}.quiz_id = ${Quizzes}.id`,
      relationship: `belongsTo`
    },

    Questions: {
      sql: `${CUBE}.question_id = ${Questions}.id`,
      relationship: `belongsTo`
    },

    Users: {
      sql: `${CUBE}.user_id = ${Users}.id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [guestId, id, date]
    }
  },

  dimensions: {
    response: {
      sql: `response`,
      type: `string`
    },

    guestId: {
      sql: `guest_id`,
      type: `string`
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    type: {
      sql: `type`,
      type: `string`
    },

    date: {
      sql: `created_at`,
      type: `time`
    },
  },

  dataSource: `default`
});
