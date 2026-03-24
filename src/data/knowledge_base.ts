export interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  contentType: string;
  author?: string;
  summary: string;
  items?: Array<{ title?: string; description?: string; detail?: string }>;
}

export const knowledgeData: KnowledgeItem[] = [
  {
    id: "a1",
    title: "7 Unique Questions To Ask When Networking",
    category: "Career",
    contentType: "Carousel",
    author: "Cultivated Culture",
    summary: "Turn strangers into referrals with powerful networking questions.",
    items: [
      { description: "What's a skill or mindset shift that helped you the most in your career?" },
      { description: "Who's been a major influence in your career, and what's the best lesson they taught you?" },
      { description: "What's something exciting happening in your field?" },
      { description: "What's a misconception people have about your role or industry?" },
      { description: "My goal is to improve [X]. Would you recommend [A] or [B]?" },
      { description: "If you were in my shoes looking for your next opportunity, how would you go about it?" },
      { description: "Who are one or two people you'd recommend I connect with next?" }
    ]
  },
  {
    id: "a2",
    title: "7 Things After Promotion",
    category: "Career",
    contentType: "Carousel",
    author: "Dora Vanourek",
    summary: "Navigating your new role: power moves for new managers.",
    items: [
      { title: "Olağanüstünüz artık ortalama", description: "Bir beceri seçin, üstüne gidin; kazanımlarınızı kaydedin." },
      { title: "Sizi iyi yapana daha az zaman", description: "Uygulamalı çalışma için zaman bloklayın." },
      { title: "Hatalarınız daha görünür", description: "10 saniye dur, erken geri bildirim al, hataların sahibi ol." },
      { title: "Başarınız ilişkileri değiştirir", description: "Değişimi kabul et, sınır koy, önce dinle." },
      { title: "Yukarı çıkmanın yalnızlığı", description: "Benzer meslektaşlarla bağ kur, güvenli alan yarat." },
      { title: "Sahtekarlık sendromu güçlenir", description: "Düşünceleri yaz, gerçeklerle çürüt, haftalık hedef koy." },
      { title: "Beyin hiç kapanmaz", description: "İyileşme molaları planla, zihinsel enerjiyi kaynak say." }
    ]
  },
  {
    id: "a3",
    title: "9 Ways to Make People Stay",
    category: "HR / Leadership",
    contentType: "Carousel",
    author: "Harvey Lee",
    summary: "Scripts for retaining your top employees through positive conversations.",
    items: [
      { description: "What's working well for you right now?" },
      { description: "What did we learn? How do we prevent this next time?" },
      { description: "What can I take off your plate this week?" },
      { description: "What solutions have you already considered?" },
      { description: "Here's what you're doing that others should copy..." },
      { description: "This reminds me of when I faced something similar..." },
      { description: "You've got this. Here's exactly why..." },
      { description: "I want to make sure [senior leader] knows about this win." },
      { description: "I'm sharing this because I believe in your potential." }
    ]
  },
  {
    id: "a7",
    title: "How to Learn Anything with AI",
    category: "AI",
    contentType: "Carousel",
    author: "Charlie Hills",
    summary: "AI learning paths and tools (NotebookLM).",
    items: [
      { title: "Audio Overview", description: "Podcast gibi (Yürüyüş, komüt)" },
      { title: "Video Overview", description: "Yapılandırılmış açıklama" },
      { title: "Mind Map", description: "Yapıyı hızlı gör" },
      { title: "Report", description: "Quiz + özet" },
      { title: "Flashcards", description: "Aktif hatırlama" },
      { title: "Quiz", description: "Anlık geri bildirim" },
      { title: "Infographic", description: "Hızlı tara" },
      { title: "Slide Deck", description: "Kavram başına slayt" }
    ]
  },
  {
    id: "b4",
    title: "HR Priorities 2026",
    category: "HR",
    contentType: "Report",
    author: "AIHR",
    summary: "Top priorities for HR leaders in the AI era.",
    items: [
      { description: "Organizasyonel AI dönüşümüne ortak liderlik et" },
      { description: "AI kapasite kazanımlarını büyümeye yeniden yatır" },
      { description: "HR'ı çapraz fonksiyonel sonuçlar için yeniden tasarla" },
      { description: "Baş sayısından beceri sayısına geç" },
      { description: "AI akıcılığını çekirdek HR yetkinliği olarak inşa et" }
    ]
  },
  {
    id: "c1",
    title: "Digital Culture Transformation Project",
    category: "Culture",
    contentType: "Case Study",
    author: "McKinsey",
    summary: "Case study of a digital cultural transformation at beIN/Digiturk.",
    items: [
      { title: "beINcares", description: "Özenli liderlik (Supportive leadership micro-practices, weekly appreciation)" },
      { title: "beINcharge", description: "Sahiplik + inisiyatif (Ownership modelling, change agents)" }
    ]
  }
];

export const statistics = {
  totalFiles: 830,
  visualFiles: 727,
  coreCategories: ["HR / HRTech", "Leadership", "AI", "Strategy", "Productivity", "Culture"]
};
