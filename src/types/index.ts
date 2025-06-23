// ===== GitHub API Types =====
export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubUser;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
  } | null;
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface GitHubCommit {
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: string | null;
      payload: string | null;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: GitHubUser | null;
  committer: GitHubUser | null;
  parents: Array<{
    sha: string;
    url: string;
    html_url: string;
  }>;
  stats?: {
    total: number;
    additions: number;
    deletions: number;
  };
  files?: Array<{
    sha: string;
    filename: string;
    status: string;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch?: string;
  }>;
}

export interface GitHubContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// ===== Analysis Types =====
export interface TemporalPatternAnalysis {
  timingRegularity: number; // 0-100 score
  weekendActivityRatio: number;
  timeDistributionScore: number;
  hasBackdatedCommits: boolean;
  suspiciousPatterns: string[];
  commitFrequencyConsistency: number;
  timezoneConsistency: number;
}

export interface RepositoryAnalysis {
  emptyCommitPercentage: number;
  meaningfulChangesRatio: number;
  fileTypeDistribution: Record<string, number>;
  averageCommitSize: number;
  branchDiversity: number;
  repositoryAgeVsActivity: number;
  suspiciousRepositories: string[];
  contributionPaddingScore: number;
}

export interface CommitQualityAnalysis {
  messageDiversity: number;
  messageLength: number;
  templateDetectionScore: number;
  languageConsistency: number;
  commitMessageQuality: number;
  codeChangeRelevance: number;
  automationPatterns: string[];
}

export interface AIAnalysisResult {
  overallAuthenticityScore: number; // 0-100
  commitMessageAuthenticity: number;
  codeChangeAuthenticity: number;
  patternAuthenticity: number;
  insights: string[];
  confidence: number;
  reasoning: string;
}

export interface RedFlag {
  type: 'temporal' | 'repository' | 'commit' | 'pattern' | 'ai';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  evidence: string[];
  impact: number; // Impact on overall score (0-100)
}

export interface AnalysisResult {
  username: string;
  analyzedAt: Date;
  authenticity_score: number; // 0-100, where 100 is most authentic
  confidence: number; // 0-100, confidence in the analysis
  red_flags: RedFlag[];
  detailed_analysis: {
    temporal_patterns: TemporalPatternAnalysis;
    repository_analysis: RepositoryAnalysis;
    commit_quality: CommitQualityAnalysis;
    ai_insights: AIAnalysisResult;
  };
  recommendations: string[];
  summary: string;
  metadata: {
    totalCommitsAnalyzed: number;
    repositoriesAnalyzed: number;
    analysisVersion: string;
    processingTimeMs: number;
  };
}

// ===== Database Models =====
export interface UserAnalysisCache {
  _id?: string;
  username: string;
  authenticity_score: number;
  analysis_result: AnalysisResult;
  red_flags: RedFlag[];
  last_updated: Date;
  expires_at: Date;
  version: string;
}

export interface DetectionPattern {
  _id?: string;
  pattern_type: 'temporal' | 'repository' | 'commit' | 'ai';
  name: string;
  description: string;
  weight: number; // Impact weight in final score calculation
  examples: string[];
  detection_algorithm: string;
  created_at: Date;
  updated_at: Date;
  is_active: boolean;
}

export interface AnalysisStatistics {
  _id?: string;
  total_analyses: number;
  fake_detections: number;
  authentic_profiles: number;
  average_score: number;
  common_red_flags: Array<{
    type: string;
    count: number;
  }>;
  last_updated: Date;
}

// ===== API Response Types =====
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
    details?: any;
  };
  metadata?: {
    timestamp: string;
    version: string;
    requestId: string;
  };
}

export interface AnalysisAPIResponse extends APIResponse<AnalysisResult> {
  data?: AnalysisResult;
}

export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  used: number;
}

// ===== Configuration Types =====
export interface AnalysisConfig {
  temporal: {
    minCommitsForAnalysis: number;
    maxDaysToAnalyze: number;
    suspiciousRegularityThreshold: number;
  };
  repository: {
    minReposForAnalysis: number;
    emptyCommitThreshold: number;
    meaningfulChangeThreshold: number;
  };
  ai: {
    model: string;
    maxTokens: number;
    temperature: number;
    confidenceThreshold: number;
  };
  scoring: {
    weights: {
      temporal: number;
      repository: number;
      commit: number;
      ai: number;
    };
    penalties: {
      noCommits: number;
      privateRepos: number;
      recentAccount: number;
    };
  };
}

// ===== Utility Types =====
export type AnalysisStatus = 'pending' | 'analyzing' | 'completed' | 'failed';

export interface AnalysisJob {
  id: string;
  username: string;
  status: AnalysisStatus;
  progress: number; // 0-100
  startedAt: Date;
  completedAt?: Date;
  error?: string;
  result?: AnalysisResult;
}

export interface GitHubRateLimit {
  core: RateLimitInfo;
  search: RateLimitInfo;
  graphql: RateLimitInfo;
  integration_manifest: RateLimitInfo;
  source_import: RateLimitInfo;
  code_scanning_upload: RateLimitInfo;
  actions_runner_registration: RateLimitInfo;
  scim: RateLimitInfo;
}

// ===== Component Props Types =====
export interface AnalysisResultProps {
  result: AnalysisResult;
  onReanalyze?: () => void;
}

export interface RedFlagListProps {
  redFlags: RedFlag[];
  showSeverityFilter?: boolean;
}

export interface ContributionGraphProps {
  contributions: GitHubContribution[];
  suspicious?: boolean;
}

export interface LoadingStateProps {
  message?: string;
  progress?: number;
}

// ===== Environment Variables =====
export interface EnvironmentConfig {
  GITHUB_TOKEN: string;
  GROQ_API_KEY: string;
  MONGODB_URI: string;
  NEXTAUTH_SECRET: string;
  NEXTAUTH_URL: string;
  NODE_ENV: 'development' | 'production' | 'test';
  APP_URL: string;
  RATE_LIMIT_REQUESTS_PER_HOUR: number;
  CACHE_TTL_SECONDS: number;
  REDIS_URL?: string;
  REDIS_PASSWORD?: string;
}