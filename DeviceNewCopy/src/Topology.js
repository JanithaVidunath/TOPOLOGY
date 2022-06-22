import Topology from 'react-network-topology';
const services =  [
  {
    id: 'frontend-app',
    name: 'Frontend',
    status: 'active',
    connections: ['graphql-server'],
    nodes: [
      {
        status: 'running',
        count: 1
      },
      {
        status: 'failed',
        count: 1
      }
    ],
    instancesActive: true,
    instancesHealthy: {
      total: 2,
      healthy: 0
    },
    transitionalStatus: false,
    reversed: true
  },
  {
    id: 'graphql-server',
    name: 'GraphQL',
    status: 'active',
    connections: ['api-server'],
    nodes: [
      {
        status: 'running',
        count: 2
      }
    ],
    instancesActive: true,
    instancesHealthy: {
      total: 2,
      healthy: 2
    },
    transitionalStatus: false,
    reversed: true
  },
  {
    id: 'api-server',
    name: 'API',
    status: 'active',
    connections: ['graphql-server'],
    nodes: [
      {
        status: 'running',
        count: 1
      },
      {
        status: 'failed',
        count: 1
      },
      {
        status: 'unknown',
        count: 1
      }
    ],
    instancesActive: true,
    instancesHealthy: {
      total: 3,
      healthy: 2
    },
    transitionalStatus: false,
    reversed: false
  }
];

const Network = () =>
    <Topology services={services}  />


export default Network;