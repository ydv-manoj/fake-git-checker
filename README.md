# 🕵️ Fake Git Checker

A sophisticated web application that analyzes GitHub profiles to detect fake contributions and distinguish between authentic developer activity and artificially generated commits.

## 🎯 Project Overview

This tool helps identify GitHub profiles that use contribution padding techniques such as:
- Automated commit bots
- Backdated commit manipulation  
- Fake git history generators
- Empty repository contribution farming
- Pattern-based contribution graph manipulation

## ✨ Features

- **Profile Analysis**: Comprehensive scanning of GitHub usernames
- **Pattern Detection**: Advanced algorithms to identify suspicious commit patterns
- **AI-Enhanced Analysis**: Integration with Groq LLM for commit message authenticity
- **Scoring System**: Detailed authenticity scores with explanations
- **Real-time Results**: Fast analysis with intelligent caching
- **MongoDB Integration**: Efficient data storage and retrieval

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose
- **AI**: Groq API for intelligent analysis
- **APIs**: GitHub REST API & GraphQL API
- **Deployment**: Vercel (planned)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or Atlas)
- GitHub Personal Access Token
- Groq API Key

### Installation

```bash
# Clone the repository
git clone https://github.com/ydv-manoj/fake-git-checker.git
cd fake-git-checker

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

## 📁 Project Structure

```
fake-git-checker/
├── src/
│   ├── app/                 # Next.js 14 app directory
│   │   ├── api/            # API routes
│   │   ├── analyze/        # Analysis page
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── analysis/      # Analysis-specific components
│   │   └── layout/        # Layout components
│   ├── lib/               # Utility libraries
│   │   ├── github/        # GitHub API integration
│   │   ├── database/      # MongoDB connection
│   │   ├── ai/           # Groq AI integration
│   │   └── utils/        # Helper functions
│   ├── types/             # TypeScript type definitions
│   └── styles/            # Global styles
├── docs/                  # Documentation
├── tests/                 # Test files
└── public/               # Static assets
```

## 🔍 Detection Algorithms

### Temporal Pattern Analysis
- Regular interval detection
- Timezone anomaly identification  
- Weekend/holiday activity patterns
- Backdating detection

### Repository Analysis
- Empty commit detection
- File modification patterns
- Repository authenticity scoring
- Branch activity analysis

### Commit Message Analysis
- AI-powered content evaluation
- Template message detection
- Language consistency checking
- Relevance to code changes

### Contribution Graph Analysis
- Perfect pattern identification
- Unnatural intensity detection
- Activity clustering analysis
- Suspicious gap identification

## 🤖 AI Integration

The application leverages Groq's powerful LLM capabilities to:
- Analyze commit message authenticity
- Detect auto-generated content
- Evaluate code change relevance
- Identify automation patterns

## 📊 Database Schema

### User Analysis Cache
```javascript
{
  username: String,
  authenticity_score: Number,
  analysis_result: Object,
  red_flags: Array,
  last_updated: Date,
  expires_at: Date
}
```

### Detection Patterns
```javascript
{
  pattern_type: String,
  description: String,
  weight: Number,
  examples: Array
}
```

## 🔐 Environment Variables

```bash
# GitHub API
GITHUB_TOKEN=your_github_personal_access_token

# Groq AI
GROQ_API_KEY=your_groq_api_key

# MongoDB
MONGODB_URI=mongodb://localhost:27017/fake-git-checker
# or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/fake-git-checker

# Next.js
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## 🚧 Development Roadmap

### Phase 1: Foundation (Week 1-2)
- [x] Project setup and basic structure
- [ ] GitHub API integration
- [ ] MongoDB connection
- [ ] Basic UI components

### Phase 2: Core Analysis (Week 2-3)  
- [ ] Temporal pattern detection
- [ ] Repository analysis algorithms
- [ ] Commit quality evaluation
- [ ] Basic scoring system

### Phase 3: AI Enhancement (Week 3-4)
- [ ] Groq API integration
- [ ] Commit message analysis
- [ ] AI-powered insights
- [ ] Enhanced scoring

### Phase 4: Frontend & UX (Week 4-5)
- [ ] Complete UI implementation
- [ ] Results visualization
- [ ] Performance optimization
- [ ] Error handling

### Phase 5: Deployment (Week 5-6)
- [ ] Production setup
- [ ] Performance monitoring
- [ ] Security hardening
- [ ] Documentation completion

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Daily Development Log

This project follows a daily commit practice. Check our commit history to see daily progress updates and feature implementations.

## ⚠️ Disclaimer

This tool is designed for educational and research purposes. It aims to:
- Promote authentic contribution practices
- Help identify potential misrepresentation
- Encourage genuine open source participation

**Not intended for:**
- Harassment or discrimination
- Absolute judgment of developer skills
- Replacement for proper technical evaluation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/ydv-manoj/fake-git-checker)
- [Live Demo](https://fake-git-checker.vercel.app) (Coming Soon)
- [Documentation](./docs/) (In Progress)

## 📧 Contact

**Manoj Yadav**
- GitHub: [@ydv-manoj](https://github.com/ydv-manoj)

---

⭐ If this project helps you, please consider giving it a star!