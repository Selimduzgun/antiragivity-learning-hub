# Antigravity'e Verilecek Prompt

Aşağıdaki metni olduğu gibi Antigravity Agent Manager'a yapıştır.
Yanında `antiragivity_knowledge_base_v2.md` dosyasını da workspace klasörüne koy.

---

## YAPISTIR VE ÇALIŞTIR ↓

---

I have a knowledge base file called `antiragivity_knowledge_base_v2.md` in this workspace. This file contains structured content extracted from 830+ training files covering leadership, HR, AI, career development, culture transformation, and coaching topics. The content is organized into sections A (LinkedIn carousels), B (educational PDFs), C (real corporate case studies), D (templates and tools), and E (visual content map).

**Your mission:** Build a complete, production-ready interactive learning web application based entirely on this knowledge base.

---

## TECH STACK

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + **shadcn/ui** for components
- **Anthropic Claude API** for the AI chat assistant
- **localStorage** for progress tracking (no auth required for MVP)
- Deploy-ready for **Vercel**

---

## APPLICATION STRUCTURE

Build the following pages:

### 1. Home Page (`/`)
- Hero section: title "Liderlik & HR Öğrenme Platformu", subtitle about AI-powered learning
- Stats bar: 20+ Modules, 727 Visual Resources, 8 Categories, AI-Powered
- Clickable category filter cards (8 categories from the knowledge base)
- Featured modules grid (6 cards)
- "Continue Learning" section using localStorage progress

### 2. Modules List (`/modules`)
- Grid of all module cards
- Filter by category, difficulty, language
- Search by title or keyword
- Each card shows: title, category badge, difficulty, estimated time, progress %

### 3. Module Detail (`/modules/[id]`)
Four tabs:
- **Content tab**: Key points as cards, stats/data boxes where available
- **Action Plan tab**: Checkbox list from actionItems, progress saved to localStorage
- **Quiz tab**: 5 multiple-choice questions, immediate feedback (green/red), score shown at end
- **AI Chat tab**: Inline chat widget using Claude API, pre-loaded with that module's context as system prompt

Related modules at the bottom (same category).

### 4. AI Assistant (`/chat`)
- Full-page chat interface
- System prompt grounded in the full knowledge base content
- Pre-suggested questions displayed as chips before first message:
  - "Networking görüşmesinde referans nasıl isterim?"
  - "Yeni terfim var, ne yapmalıyım?"
  - "Kültür dönüşümü için nereden başlarım?"
  - "AI agent nasıl kurarım?"
  - "2026'da HR öncelikleri neler?"
  - "Çalışanımı motive etmek için ne söyleyeyim?"

### 5. Progress (`/progress`)
- Completed modules list with dates and quiz scores
- Category-based completion donut chart
- Daily streak counter
- Total XP / badge system (localStorage)

### 6. Search (`/search`)
- Real-time search across all modules (debounced 300ms)
- Filters: category, language (TR/EN), difficulty
- Results as clickable cards

---

## MODULE DATA

Read `antiragivity_knowledge_base_v2.md` carefully and create a TypeScript data file at `data/modules.ts` with **at minimum these 20 modules**, fully populated with real content from the file:

| id | title | section |
|----|-------|---------|
| `networking-7q` | 7 Etkili Networking Sorusu | A1 |
| `promotion-7things` | Terfiden Sonra 7 Gerçek | A2 |
| `retention-9scripts` | Çalışanı Tutmanın 9 Scripti | A3 |
| `culture-90day` | 90 Günlük Kültür Dönüşümü | A4 |
| `ai-agent-roadmap` | İlk AI Agent'ını Kur (20 Adım) | A5 |
| `ai-consulting` | AI ile Danışmanlık | A6 |
| `ai-learning-notebooklm` | AI ile Her Şeyi Öğren | A7 |
| `habits-30` | Hayatı Değiştiren 30 Alışkanlık | B1 |
| `four-agreements` | Öz-Ustalık için 4 Kavram | B2 |
| `micromanager-signs` | Mikro Yönetici misiniz? 7 İşaret | B3 |
| `hr-priorities-2026` | HR Öncelikleri 2026 (AIHR) | B4 |
| `life-reset-2026` | 2026 İçin Hayat Sıfırlama | B5 |
| `hr-roi` | Stratejik HR'ın Gerçek ROI'si | B9 |
| `questions-shift-room` | Odayı Değiştiren Sorular | B10 |
| `unlock-potential` | Tam Potansiyelini Aç (7 Adım) | B11 |
| `change-story-mckinsey` | McKinsey: Değişim Hikayesi | B13 |
| `coaching-toolbox` | Breakthrough Koçluk Araç Kutusu | B14 |
| `agentic-ai-ibm` | IBM: Ajansal AI Kılavuzu | B15 |
| `culture-case-study` | Gerçek Vaka: Kültür Dönüşümü | C1 |
| `smart-goals-template` | SMART Hedef Çalışma Kağıdı | D1 |

Each module must include:
- `keyPoints`: array of {title, description, example?} extracted from the knowledge base
- `actionItems`: checklist items
- `quizQuestions`: 5 questions generated from the content
- `stats`: any numeric data points from the content
- `tags`, `category`, `difficulty`, `estimatedMinutes`, `language`

---

## AI CHAT SYSTEM PROMPT

Use this as the Claude system prompt for both the full chat page and the per-module inline chat:

```
You are an expert learning assistant for a leadership, HR, and AI training platform.

Your knowledge base covers:
- Career development: networking, promotions, habits, self-mastery
- Leadership: retention scripts, coaching, micromanagement, question techniques
- HR: 2026 priorities, ROI of strategic HR, McKinsey OHI, culture transformation
- AI & Technology: AI agents (20-step roadmap), agentic AI, AI tools for consulting
- Real case study: A major Turkish media company's 2024-2025 culture transformation
- Templates: SMART goals, interview guides, performance reviews, onboarding checklists

When answering:
1. Ground your answer in the knowledge base content
2. Be concise and actionable — give practical takeaways
3. Include a relevant stat or example when available
4. End with: "Daha fazlası için [modül adı] modülüne göz atabilirsiniz."
5. Respond in the same language as the question (Turkish or English)
```

---

## UI / DESIGN REQUIREMENTS

**Colors:**
```css
--primary: #4F46E5      /* indigo */
--secondary: #0EA5E9    /* sky */
--success: #10B981      /* emerald */
--warning: #F59E0B      /* amber */
--surface: #F8FAFC
--card: #FFFFFF
```

**Font:** Inter (via next/font)

**Dark mode:** implement with `next-themes`

**Responsive:** mobile-first, all pages work on 375px+ screens

**Animations:**
- Module cards: fade-in on scroll
- Quiz feedback: shake on wrong, bounce on correct
- Tab transitions: fade

**Category color coding:**
- AI → indigo
- Liderlik → purple  
- HR → blue
- Strateji → orange
- Kariyer → green
- Değişim → red
- Koçluk → teal

---

## ENVIRONMENT VARIABLES

Create `.env.local.example`:
```
ANTHROPIC_API_KEY=your_key_here
```

The API route for chat should be at `app/api/chat/route.ts` using the Anthropic SDK.

---

## LOCALSTORAGE SCHEMA

```typescript
// Progress per module
`module_${id}` = {
  completedItems: string[],   // action item IDs
  quizScore: number,          // 0-5
  lastVisited: string,        // ISO date
  completed: boolean
}

// Global progress
`user_progress` = {
  streak: number,
  lastActive: string,
  totalXP: number
}
```

---

## IMPORTANT NOTES

1. **Content source:** All module content MUST come from `antiragivity_knowledge_base_v2.md`. Do not invent content.
2. **Section C (corporate case study):** Mask all company names (use "Büyük Medya Şirketi") and person names (use role titles only like "CEO", "Partner").
3. **Images:** Use placeholder icons (Lucide React icons) for module visuals. Do not reference actual image files.
4. **Quiz questions:** Generate them from actual content in the knowledge base — factual recall and application questions.
5. **Build first, ask later:** Use Planning mode. Generate the implementation plan first, get approval, then build.

---

## DELIVERABLES CHECKLIST

Before considering the project complete, verify:
- [ ] `npm run build` completes without errors
- [ ] Home page loads with category cards
- [ ] At least 20 modules are listed and individually accessible
- [ ] Each module has all 4 tabs working
- [ ] Quiz gives correct/wrong feedback and shows final score
- [ ] AI chat responds to at least 3 different questions
- [ ] Progress page shows completed modules from localStorage
- [ ] Search returns results
- [ ] Mobile layout works at 375px
- [ ] Dark mode toggles correctly

---

Start with Planning mode. Read `antiragivity_knowledge_base_v2.md` first, then generate your implementation plan before writing any code.
