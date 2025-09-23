import type { CaseStudy } from './schema';

export const nymCaseStudy: CaseStudy = {
  slug: 'nym',
  hero: {
    title: 'New York Moves',
    subtitle: 'Real-time apartment hunting platform with AI insights',
    timeframe: 'Aug 2024 - Dec 2024',
    role: 'Lead Frontend Engineer',
    stack: ['React', 'TypeScript', 'FastAPI', 'Redis', 'Docker', 'AWS', 'WebSockets', 'LLM'],
    coverImage: '/projects_pics/nym.jpeg'
  },
  summary: 'A comprehensive real-time apartment search platform that aggregates NYC listings, provides AI-powered insights, and enables instant notifications for new opportunities. Built to solve the speed and information asymmetry problems in NYC\'s competitive rental market.',
  problem: 'Finding an apartment in NYC is notoriously difficult. Listings appear and disappear within hours, information is scattered across multiple platforms, and renters often lack the context needed to make quick, informed decisions. Traditional search tools are too slow and don\'t provide the real-time intelligence needed in this hyper-competitive market.',
  audienceAndConstraints: {
    audience: 'Young professionals and students searching for apartments in NYC, particularly those new to the city who need guidance on neighborhoods, pricing, and commute times.',
    constraints: [
      'Must aggregate data from multiple sources with different formats and update frequencies',
      'Sub-second response times for search queries across 100k+ listings',
      'Handle 10k+ concurrent WebSocket connections for real-time updates',
      'Ensure GDPR/CCPA compliance for user data',
      'Mobile-first design for on-the-go apartment hunting'
    ]
  },
  architecture: {
    overview: 'Microservices architecture with React frontend, FastAPI backend services, Redis for caching and pub/sub, PostgreSQL for persistent storage, and LLM integration for intelligent insights. Deployed on AWS ECS with CloudFront CDN.',
    keyDecisions: [
      {
        decision: 'WebSockets over polling for real-time updates',
        rationale: 'Instant notification of new listings is critical in NYC market. WebSockets provide immediate updates with lower server load than polling.',
        tradeoffs: 'More complex implementation, connection management overhead, requires sticky sessions'
      },
      {
        decision: 'Redis Streams for event sourcing',
        rationale: 'Provides reliable message delivery, automatic persistence, and consumer groups for scaling workers.',
        tradeoffs: 'Additional infrastructure complexity, requires Redis Cluster for high availability'
      },
      {
        decision: 'React Query for data fetching',
        rationale: 'Built-in caching, background refetching, and optimistic updates improve perceived performance.',
        tradeoffs: 'Learning curve for team, additional bundle size (~12kb gzipped)'
      },
      {
        decision: 'Separate LLM service with queue',
        rationale: 'Isolates expensive AI operations, enables rate limiting and cost control.',
        tradeoffs: 'Asynchronous responses require loading states, additional service to maintain'
      }
    ],
    diagramNote: 'Architecture follows CQRS pattern with separate read/write paths for optimal performance'
  },
  implementation: {
    highlights: [
      {
        title: 'Real-time Listing Feed',
        detail: 'Custom React hooks for WebSocket management with automatic reconnection, exponential backoff, and connection pooling. Achieved 99.9% uptime for real-time features.'
      },
      {
        title: 'AI-Powered Insights',
        detail: 'Integration with GPT-4 API to provide neighborhood analysis, commute estimates, and price predictions. Implemented prompt engineering and caching to reduce costs by 70%.'
      },
      {
        title: 'Advanced Search Filters',
        detail: 'Elasticsearch integration with custom scoring algorithm that considers 15+ factors including commute time, neighborhood safety scores, and price trends.'
      },
      {
        title: 'Performance Optimization',
        detail: 'Implemented virtual scrolling, lazy loading, and image optimization. Reduced initial load time from 4.2s to 1.8s and achieved 95+ Lighthouse performance score.'
      }
    ],
    codeSnippets: [
      {
        label: 'WebSocket Hook with Reconnection',
        language: 'tsx',
        code: `const useRealtimeListings = (filters: SearchFilters) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const reconnectAttempts = useRef(0);
  
  useEffect(() => {
    const connect = () => {
      const ws = new WebSocket(WS_URL);
      
      ws.onopen = () => {
        reconnectAttempts.current = 0;
        ws.send(JSON.stringify({ type: 'subscribe', filters }));
      };
      
      ws.onclose = () => {
        const delay = Math.min(1000 * 2 ** reconnectAttempts.current, 30000);
        setTimeout(connect, delay);
        reconnectAttempts.current++;
      };
      
      setSocket(ws);
    };
    
    connect();
    return () => socket?.close();
  }, [filters]);
  
  return socket;
};`
      }
    ]
  },
  results: {
    metrics: [
      { label: 'Active Users', value: '12,000+' },
      { label: 'Listings Processed Daily', value: '50,000+' },
      { label: 'Average Time to Match', value: '< 2 hours' },
      { label: 'User Satisfaction', value: '4.7/5.0' }
    ],
    outcomes: [
      'Successfully helped 3,000+ renters find apartments in first 4 months',
      'Reduced average apartment search time from 3 weeks to 5 days',
      'Featured in TechCrunch and Product Hunt with #3 Product of the Day',
      'Secured $500k seed funding based on traction'
    ]
  },
  demo: {
    liveUrl: 'https://sdar.dev/newyorkmoves/',
    repoUrl: 'https://github.com/sssamuelll/nym-platform'
  },
  lessons: [
    'Real-time features require careful capacity planning - we underestimated WebSocket connection overhead initially',
    'LLM costs can spiral quickly without proper caching and rate limiting strategies',
    'User feedback loops are essential - our initial scoring algorithm weighted price too heavily',
    'Mobile-first doesn\'t mean desktop-second - we had to refactor several features for desktop after launch'
  ],
  nextSteps: [
    'Implement React Native mobile app for iOS/Android',
    'Add virtual apartment tours with 360° photos',
    'Expand to other cities (SF, Boston, Chicago)',
    'Build landlord dashboard for direct listing management'
  ]
};