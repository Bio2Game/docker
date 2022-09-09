cube(`Quizzes`, {
  sql: `SELECT * FROM public.quizzes`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Domains: {
      sql: `${CUBE}.domain_id = ${Domains}.id`,
      relationship: `belongsTo`
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, date]
    }
  },

  dimensions: {
    language: {
      sql: `language`,
      type: `string`
    },

    label: {
      sql: `label`,
      type: `string`
    },

    url: {
      sql: `url`,
      type: `string`
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    description: {
      sql: `description`,
      type: `string`
    },

    localisation: {
      sql: `localisation`,
      type: `string`
    },

    date: {
      sql: `created_at`,
      type: `time`
    },
  },

  dataSource: `default`
});
