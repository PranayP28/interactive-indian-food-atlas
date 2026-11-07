/**
 * Groq / Grok Cloud AI Service for the Indian Food Atlas
 * Automatically supports both:
 * 1. Groq Cloud (API keys starting with 'gsk_', endpoint: https://api.groq.com/openai/v1)
 * 2. xAI Grok (API keys starting with 'xai-', endpoint: https://api.x.ai/v1)
 */

export interface ChatMessage {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface DishContextInfo {
  id: string;
  name: string;
  alternateName?: string;
  state: string;
  category?: string;
  description: string;
  ingredients: string[];
  tasteProfile: string;
  era: string;
  keyTechnique: string;
  culturalIntroduction?: string;
  earliestDocumentedEvidence?: string;
  stages?: Array<{ stageName: string; headline: string; detail?: string }>;
}

const STORAGE_KEY_API_KEY = "CULINARY_AI_API_KEY";
const STORAGE_KEY_MODEL = "CULINARY_AI_MODEL";

export const DEFAULT_GROQ_KEY = "";
export const DEFAULT_GROQ_MODEL = "openai/gpt-oss-120b";

export function getStoredGrokApiKey(): string {
  try {
    const local = localStorage.getItem(STORAGE_KEY_API_KEY) || localStorage.getItem("GROK_API_KEY");
    if (local && local.trim()) return local.trim();
  } catch {
    // ignore
  }
  const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};
  return env.VITE_GROQ_API_KEY || env.VITE_GROK_API_KEY || env.VITE_XAI_API_KEY || "";
}

export function setStoredGrokApiKey(key: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_API_KEY, key.trim());
    localStorage.setItem("GROK_API_KEY", key.trim());
  } catch {
    // ignore
  }
}

export function getStoredGrokModel(): string {
  try {
    const local = localStorage.getItem(STORAGE_KEY_MODEL) || localStorage.getItem("GROK_MODEL");
    if (local && local.trim()) return local.trim();
  } catch {
    // ignore
  }
  const key = getStoredGrokApiKey();
  if (key.startsWith("xai-")) {
    return "grok-beta";
  }
  return DEFAULT_GROQ_MODEL;
}

export function setStoredGrokModel(model: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_MODEL, model.trim());
    localStorage.setItem("GROK_MODEL", model.trim());
  } catch {
    // ignore
  }
}

/**
 * Builds the specialized culinary prompt with live dish grounding,
 * web knowledge instructions, and strict food-only guardrails.
 */
function buildSystemPrompt(dish: DishContextInfo): string {
  const stagesSummary =
    dish.stages && dish.stages.length > 0
      ? dish.stages
          .map(
            (s, idx) =>
              `Stage ${idx + 1} (${s.stageName}): ${s.headline}${s.detail ? ` — ${s.detail}` : ""}`
          )
          .join("\n")
      : "Historical stages detailed in the food atlas.";

  return `You are "Bhojan Mitra", an expert Indian Culinary Historian, Gastronomy Scientist, and Master Food Archivist embedded directly inside the Interactive Indian Food Atlas.

CURRENT VIEWED DISH CONTEXT:
- Dish Name: ${dish.name} ${dish.alternateName ? `("${dish.alternateName}")` : ""}
- State / Region: ${dish.state}
- Category: ${dish.category || "Traditional Indian Specialty"}
- Historical Era: ${dish.era}
- Key Technique: ${dish.keyTechnique}
- Taste & Flavor Profile: ${dish.tasteProfile}
- Description: ${dish.description}
- Key Ingredients: ${dish.ingredients.join(", ")}
${dish.culturalIntroduction ? `- Cultural Roots: ${dish.culturalIntroduction}` : ""}
${dish.earliestDocumentedEvidence ? `- Earliest Historical Record: ${dish.earliestDocumentedEvidence}` : ""}
- Historical Stages & Narrative:
${stagesSummary}

CAPABILITIES & KNOWLEDGE:
1. You have comprehensive culinary knowledge and live web grounding. If a user asks questions that expand beyond this card (e.g. "what is besan", authentic recipes, cooking tips, regional variants, spice chemistry, pairing recommendations, or stories about other Indian foods), use your deep culinary knowledge base to give rich, culturally authentic, and direct answers.
2. STRUCTURE & FORMATTING: Format your responses with high visual clarity. Use clean section headings (## and ###), bulleted lists (- ) for steps or items, and markdown tables (| Col 1 | Col 2 |) for ingredients/quantities. Keep explanations engaging, concise, and beautifully organized.

STRICT GUARDRAILS (CRITICAL):
1. STRICT ENGLISH LANGUAGE REQUIREMENT:
   - You MUST ALWAYS respond exclusively and strictly in English.
   - Do not write in Hindi, Devanagari script, or other regional scripts. All dialogue, descriptions, tables, and greetings must be written entirely in plain, clear English.
2. GREETINGS & POLITE PLEASANTRIES:
   - If the user says "Hi", "Hello", "Hey", "Good morning", "Who are you?", or similar greetings, respond warmly in English, introduce yourself as Bhojan Mitra (Culinary AI Companion), and invite them to explore ${dish.name} or any aspect of Indian gastronomy!
3. STRICT SCOPE - FOOD & GASTRONOMY ONLY:
   - You are exclusively dedicated to food, culinary traditions, gastronomy, recipes, ingredients, spices, food history, and cooking culture.
   - If the user asks a question that is COMPLETELY UNRELATED to food or culinary topics (for example: coding, math, general politics, software engineering, sports scores, stocks, physics, etc.), YOU MUST POLITELY DECLINE IN ENGLISH.
   - Decline with a courteous explanation, such as:
     "I specialize exclusively in food, culinary traditions, recipes, and gastronomy. I cannot assist with non-food topics, but I'd love to tell you anything about ${dish.name}, its spices, cooking secrets, or Indian food history!"
   - Never deviate into general non-food advice.`;
}

function isGreeting(text: string): boolean {
  const clean = text.trim().toLowerCase();
  return /^(hi|hello|hey|namaste|vanakkam|pranam|good\s*(morning|afternoon|evening)|hola|yo)\b/i.test(clean) && clean.length < 30;
}

function isOffTopicQuery(text: string): boolean {
  const clean = text.trim().toLowerCase();
  const offTopicKeywords = [
    "python", "javascript", "code", "programming", "react", "html", "css", "bug",
    "math", "calculate", "derivative", "integral", "solve", "equation",
    "crypto", "bitcoin", "stock", "invest", "finance", "forex",
    "football", "cricket match", "nba", "messi", "ronaldo",
    "politics", "election", "president", "minister", "war", "army"
  ];
  return offTopicKeywords.some((kw) => clean.includes(kw));
}

/**
 * Intelligent local culinary fallback for common ingredients and queries.
 */
function generateLocalFallbackResponse(query: string, dish: DishContextInfo): string {
  const q = query.toLowerCase();

  if (isGreeting(query)) {
    return `Hello! Welcome. I am **Bhojan Mitra**, your Indian culinary and gastronomy guide. I am here to explore the rich history, ingredients, and secret techniques of **${dish.name}** and Indian cuisine. What would you like to discover today?`;
  }

  if (isOffTopicQuery(query)) {
    return `I specialize exclusively in food, culinary traditions, recipes, and gastronomy. I cannot assist with non-food topics, but I'd be delighted to tell you about **${dish.name}**, its historical origins in ${dish.state}, or authentic Indian spice traditions!`;
  }

  if (q.includes("besan") || q.includes("gram flour") || q.includes("chickpea flour")) {
    return `### What is Besan (Gram Flour)?\n\n**Besan** (also known as gram flour or chickpea flour) is a pale yellow, protein-rich flour made by finely milling hulled split brown chickpeas (*Bengal gram* or *chana dal*).\n\n- **Culinary Role in ${dish.name}:** Besan is whisked with water, turmeric, ajwain (carom seeds), and salt into a smooth, silky batter to enrobe the spiced potato batata vada before deep frying, forming its iconic golden crisp shell.\n- **Flavor & Texture:** It imparts a nutty, earthy flavor with a naturally gluten-free structure that crisps up beautifully in hot oil.\n- **Pan-Indian Usage:** Beyond Vada Pav, besan is the cornerstone of Gujarati Dhokla, Rajasthani Gatte, Punjabi Kadhi, and festive sweets like Besan Ladoo and Mysore Pak.`;
  }

  if (q.includes("ingredient") || q.includes("what is in") || q.includes("spice") || q.includes("made of")) {
    return `### Key Ingredients of ${dish.name}\n\n${dish.name} relies on authentic regional ingredients carefully balanced for its signature **${dish.tasteProfile}** profile:\n\n` +
      dish.ingredients.map((ing) => `- **${ing}**`).join("\n") +
      `\n\nIn traditional ${dish.state} kitchens, these ingredients are processed using *${dish.keyTechnique}* to unlock their fullest aromatic potential.`;
  }

  if (q.includes("history") || q.includes("origin") || q.includes("born") || q.includes("story") || q.includes("era")) {
    return `### Historical Origins of ${dish.name}\n\n` +
      `The roots of **${dish.name}** trace back to the **${dish.era}** in **${dish.state}**.\n\n` +
      `${dish.culturalIntroduction || dish.description}\n\n` +
      (dish.earliestDocumentedEvidence ? `**Documented Record:** ${dish.earliestDocumentedEvidence}\n\n` : "") +
      `The preparation evolved from regional needs—balancing local climate, warfare logistics, or festive royal courts into the masterpiece savored today.`;
  }

  return `### About ${dish.name} (${dish.state})\n\n` +
    `**${dish.name}** (${dish.tasteProfile}) is one of the most celebrated dishes of **${dish.state}**, dating back to **${dish.era}**.\n\n` +
    `${dish.description}\n\n` +
    `It features **${dish.ingredients.slice(0, 3).join(", ")}** crafted with the traditional technique of **${dish.keyTechnique}**.\n\n` +
    `Feel free to ask me about its ingredients, step-by-step evolution, cultural significance, or how it compares to other regional delicacies!`;
}

/**
 * Sends a chat query to Groq Cloud or xAI Grok, auto-detecting the provider
 * from the key structure.
 */
export async function sendChatMessageToGrok(
  messages: ChatMessage[],
  dishContext: DishContextInfo
): Promise<string> {
  const apiKey = getStoredGrokApiKey();
  const latestUserMessage = messages[messages.length - 1]?.content || "";

  if (!apiKey) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return generateLocalFallbackResponse(latestUserMessage, dishContext);
  }

  const isGroq = apiKey.startsWith("gsk_");
  const defaultModelForProvider = isGroq ? DEFAULT_GROQ_MODEL : "grok-beta";
  const userModel = getStoredGrokModel();
  
  // Choose model appropriate for provider
  let modelToUse = userModel;
  if (isGroq && (userModel === "grok-beta" || userModel === "grok-2" || userModel === "grok-2-latest")) {
    modelToUse = DEFAULT_GROQ_MODEL;
  } else if (!isGroq && userModel.includes("gpt-oss")) {
    modelToUse = "grok-beta";
  }

  const systemPrompt = buildSystemPrompt(dishContext);

  const payload = {
    model: modelToUse,
    messages: [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    ],
    temperature: 0.6,
    max_tokens: 850,
  };

  // Endpoints to try (direct public CORS API first so browser connects directly)
  const endpoints = isGroq
    ? ["https://api.groq.com/openai/v1/chat/completions", "/api/groq/chat/completions"]
    : ["https://api.x.ai/v1/chat/completions", "/api/grok/chat/completions"];

  // Alternative fallback models if the first model is unavailable on the user's account
  const fallbackModels = isGroq
    ? [modelToUse, "openai/gpt-oss-20b", "qwen/qwen3.8-27b"]
    : [modelToUse, "grok-beta"];

  let lastError: Error | null = null;

  for (const currentModel of fallbackModels) {
    payload.model = currentModel;
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          let errorMsg = `API Error ${response.status}: ${response.statusText}`;
          try {
            const parsed = JSON.parse(errorBody);
            if (parsed.error?.message) {
              errorMsg = parsed.error.message;
            }
          } catch {
            // ignore
          }
          throw new Error(errorMsg);
        }

        const data = await response.json();
        const botReply = data.choices?.[0]?.message?.content;
        if (botReply && typeof botReply === "string") {
          return botReply.trim();
        }
        throw new Error("Empty response received from API");
      } catch (err: unknown) {
        lastError = err instanceof Error ? err : new Error(String(err));
        // If 401 Unauthorized, key itself is bad; stop retrying models
        if (lastError.message.includes("401") || lastError.message.toLowerCase().includes("invalid api key")) {
          break;
        }
      }
    }
    if (lastError?.message.includes("401")) {
      break;
    }
  }

  console.warn("Cloud AI call failed, falling back to local culinary knowledge:", lastError?.message);
  const fallback = generateLocalFallbackResponse(latestUserMessage, dishContext);
  return `${fallback}\n\n> ⚠️ *Note: Could not reach Cloud AI (${lastError?.message || "connection error"}). Showing local atlas knowledge.*`;
}
