import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  Sparkles,
  Settings,
  RotateCcw,
  Key,
  ExternalLink,
  ChefHat,
  Check,
  Bot,
  Copy,
  CheckCheck,
} from "lucide-react";
import {
  ChatMessage,
  DishContextInfo,
  getStoredGrokApiKey,
  setStoredGrokApiKey,
  getStoredGrokModel,
  setStoredGrokModel,
  sendChatMessageToGrok,
  DEFAULT_GROQ_KEY,
  DEFAULT_GROQ_MODEL,
} from "../services/grokService";
import { FormattedAiMessage } from "./FormattedAiMessage";

interface CulinaryChatbotProps {
  dish: DishContextInfo;
  isLight: boolean;
}

export const CulinaryChatbot: React.FC<CulinaryChatbotProps> = ({ dish, isLight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

  // Settings state
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [selectedModel, setSelectedModel] = useState(DEFAULT_GROQ_MODEL);
  const [keySavedNotification, setKeySavedNotification] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Load existing API Key & Model on mount
  useEffect(() => {
    const key = getStoredGrokApiKey();
    setApiKeyInput(key || DEFAULT_GROQ_KEY);
    setSelectedModel(getStoredGrokModel());
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && !showSettings) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, showSettings]);

  const handleCopyMessage = async (msgId: string, text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older environments
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedMessageId(msgId);
      setTimeout(() => {
        setCopiedMessageId(null);
      }, 1500);
    } catch (err) {
      console.warn("Failed to copy message:", err);
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredGrokApiKey(apiKeyInput.trim());
    setStoredGrokModel(selectedModel.trim());
    setKeySavedNotification(true);
    setTimeout(() => {
      setKeySavedNotification(false);
      setShowSettings(false);
    }, 900);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const responseText = await sendChatMessageToGrok(newMessages, dish);
      const botMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: responseText,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: "Sorry, I had trouble processing that request. Please try again or check your connection.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const promptSuggestions = [
    { label: "📜 Historical Origin", query: `What is the historical origin and story of ${dish.name}?` },
    { label: "🌿 Authentic Spices", query: `What authentic spices and ingredients define ${dish.name}?` },
    { label: "🍳 Cooking Technique", query: `What traditional cooking technique is used to make ${dish.name}?` },
    { label: "🌶️ Flavor Profile", query: `How would you describe the gastronomy and flavor profile of ${dish.name}?` },
  ];

  const mascotSrc = isLight ? "/images/chef-bot-light.png" : "/images/chef-bot-dark.png";
  const isGroqKey = apiKeyInput.startsWith("gsk_");

  return (
    <>
      {/* ─── FLOATING TRIGGER BUTTON (BOTTOM RIGHT) ─── */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 select-none print:hidden">
        {/* "Ask me anything!" Pill Badge */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Culinary AI Chatbot"
            className={`group cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-full font-bold text-xs shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border ${
              isLight
                ? "bg-white/95 text-amber-950 border-amber-300 shadow-amber-900/10 hover:border-amber-400"
                : "bg-slate-900/95 text-amber-300 border-amber-500/40 shadow-black/50 hover:border-amber-400"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="tracking-wide">Ask me anything!</span>
          </button>
        )}

        {/* Circular Mascot Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close chatbot" : "Open culinary chatbot"}
          className={`relative group cursor-pointer w-14 h-14 rounded-full p-1 shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 flex items-center justify-center overflow-hidden ${
            isOpen
              ? isLight
                ? "bg-amber-100 border-amber-500 ring-4 ring-amber-300/40"
                : "bg-amber-950/80 border-amber-400 ring-4 ring-amber-500/20"
              : isLight
              ? "bg-amber-500/10 border-amber-500 ring-4 ring-amber-400/30 hover:ring-amber-400/50"
              : "bg-slate-900 border-amber-400 ring-4 ring-amber-500/30 hover:ring-amber-400/60"
          }`}
        >
          <img
            src={mascotSrc}
            alt="Bhojan Mitra Chef AI Mascot"
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:rotate-6"
          />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-xs" />
        </button>
      </div>

      {/* ─── STANDING RECTANGLE CHAT WINDOW ─── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Culinary AI Assistant"
          className={`fixed bottom-24 right-6 z-50 w-[360px] sm:w-[410px] h-[550px] max-h-[82vh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
            isLight
              ? "bg-[#FCFAF7]/95 border-amber-900/15 text-slate-800 shadow-amber-950/20"
              : "bg-slate-900/95 border-amber-500/30 text-slate-100 shadow-black/70"
          }`}
        >
          {/* Header */}
          <div
            className={`p-3.5 px-4 border-b flex items-center justify-between transition-colors ${
              isLight
                ? "bg-amber-500/10 border-amber-900/10"
                : "bg-slate-800/80 border-slate-750"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500/60 overflow-hidden shadow-sm flex-shrink-0 bg-amber-500/20">
                <img
                  src={mascotSrc}
                  alt="Chef Bot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm tracking-tight text-amber-600 dark:text-amber-400">
                    Bhojan Mitra
                  </h3>
                  <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                    {isGroqKey ? "Groq Cloud" : "Grok AI"}
                  </span>
                </div>
                <p
                  className={`text-[11px] truncate max-w-[190px] ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                  title={`Context: ${dish.name} (${dish.state})`}
                >
                  Focus: {dish.name}
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSettings(!showSettings)}
                title="API Configuration"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  showSettings
                    ? "bg-amber-500 text-white"
                    : isLight
                    ? "text-slate-500 hover:bg-amber-100 hover:text-slate-800"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Settings className="w-4 h-4" />
              </button>

              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  title="Clear Chat History"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    isLight
                      ? "text-slate-500 hover:bg-amber-100 hover:text-slate-800"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isLight
                    ? "text-slate-500 hover:bg-amber-100 hover:text-slate-800"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Settings Drawer / View */}
          {showSettings && (
            <div
              className={`p-4 border-b text-xs flex-shrink-0 animate-in fade-in slide-in-from-top-2 ${
                isLight
                  ? "bg-amber-50/90 border-amber-200 text-slate-800"
                  : "bg-slate-850/95 border-slate-700 text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                  <Key className="w-3.5 h-3.5" /> Groq / Grok API Setup
                </span>
                <a
                  href="https://console.groq.com/keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-amber-500 hover:underline flex items-center gap-0.5 font-medium"
                >
                  Groq Console <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-2.5">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold opacity-70 mb-1">
                    API Key (Groq `gsk_...` or xAI `xai-...`)
                  </label>
                  <input
                    type="password"
                    placeholder="gsk_... or xai-..."
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    className={`w-full text-xs px-2.5 py-1.5 rounded-lg border focus:outline-hidden font-mono ${
                      isLight
                        ? "bg-white border-amber-300 text-slate-900 focus:border-amber-500"
                        : "bg-slate-900 border-slate-700 text-slate-100 focus:border-amber-400"
                    }`}
                  />
                </div>

                <div className="flex gap-2 items-center">
                  <div className="flex-1">
                    <label className="block text-[10px] uppercase tracking-wider font-semibold opacity-70 mb-1">
                      Model
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className={`w-full text-xs px-2 py-1.5 rounded-lg border focus:outline-hidden ${
                        isLight
                          ? "bg-white border-amber-300 text-slate-800"
                          : "bg-slate-900 border-slate-700 text-slate-200"
                      }`}
                    >
                      <option value="openai/gpt-oss-120b">openai/gpt-oss-120b (Groq Fast & Smart)</option>
                      <option value="openai/gpt-oss-20b">openai/gpt-oss-20b (Groq Ultra-Fast)</option>
                      <option value="qwen/qwen3.8-27b">qwen/qwen3.8-27b (Groq Multilingual)</option>
                      <option value="grok-beta">grok-beta (xAI Grok)</option>
                      <option value="grok-2-latest">grok-2-latest (xAI Grok 2)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="self-end px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs shadow-xs hover:from-amber-600 hover:to-orange-700 transition cursor-pointer flex items-center gap-1"
                  >
                    {keySavedNotification ? <Check className="w-3.5 h-3.5" /> : "Save"}
                  </button>
                </div>
              </form>

              <p className="text-[10px] opacity-65 mt-2 leading-tight">
                *Key is saved locally in your browser storage. Groq `gsk_...` keys connect instantly to high-speed Llama & OSS models.*
              </p>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs select-text">
            {messages.length === 0 ? (
              /* Welcome Screen with "Ask me anything!" */
              <div className="h-full flex flex-col justify-center items-center text-center px-2 py-4">
                <div className="w-16 h-16 rounded-full border-2 border-amber-500/50 p-1 mb-3 bg-amber-500/10 shadow-md">
                  <img
                    src={mascotSrc}
                    alt="Bhojan Mitra"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h4 className="font-extrabold text-base mb-1 text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Ask me anything!
                </h4>

                <p
                  className={`text-xs mb-4 leading-relaxed max-w-[280px] ${
                    isLight ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  I'm your AI culinary companion. Ask me anything about{" "}
                  <strong className="text-amber-600 dark:text-amber-400">
                    {dish.name}
                  </strong>
                  , spices, ingredients, ancient recipes, or gastronomy!
                </p>

                {/* Prompt Suggestions */}
                <div className="w-full space-y-1.5 text-left">
                  <p
                    className={`text-[10px] uppercase font-bold tracking-wider px-1 ${
                      isLight ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Quick prompts to start:
                  </p>
                  {promptSuggestions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(item.query)}
                      className={`w-full text-left p-2 px-3 rounded-xl border text-[11px] font-medium transition cursor-pointer flex items-center justify-between group ${
                        isLight
                          ? "bg-white hover:bg-amber-100/60 border-amber-900/10 text-slate-700 hover:border-amber-300"
                          : "bg-slate-800/70 hover:bg-slate-750 border-slate-700/80 text-slate-200 hover:border-amber-500/40"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Message Thread */
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`group/msg flex gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-1 border border-amber-500/50">
                      <img
                        src={mascotSrc}
                        alt="Bot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="relative max-w-[88%] group">
                    <div
                      className={`p-3 rounded-2xl leading-relaxed whitespace-pre-wrap break-words select-text ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-tr-xs shadow-md font-medium"
                          : isLight
                          ? "bg-white border border-amber-900/10 text-slate-800 rounded-tl-xs shadow-xs italic"
                          : "bg-slate-800 border border-slate-700 text-slate-100 rounded-tl-xs shadow-xs italic"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <FormattedAiMessage content={msg.content} isLight={isLight} />
                      ) : (
                        msg.content
                      )}
                    </div>

                    {/* Quick Copy Button on each message */}
                    <button
                      onClick={() => handleCopyMessage(msg.id, msg.content)}
                      title="Copy message to clipboard"
                      className={`absolute top-1.5 right-1.5 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-xs ${
                        msg.role === "user"
                          ? "bg-black/25 hover:bg-black/40 text-white"
                          : isLight
                          ? "bg-amber-100/90 hover:bg-amber-200 text-amber-900 border border-amber-300"
                          : "bg-slate-700/90 hover:bg-slate-650 text-amber-200 border border-slate-600"
                      }`}
                    >
                      {copiedMessageId === msg.id ? (
                        <div className="flex items-center gap-1 text-[9px] px-0.5 font-bold">
                          <CheckCheck className="w-3 h-3 text-emerald-400" />
                          <span>Copied</span>
                        </div>
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2 justify-start items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-amber-500/50">
                  <img
                    src={mascotSrc}
                    alt="Bot"
                    className="w-full h-full object-cover animate-pulse"
                  />
                </div>
                <div
                  className={`p-3 py-2.5 rounded-2xl rounded-tl-xs flex items-center gap-1.5 ${
                    isLight
                      ? "bg-white border border-amber-900/10 text-slate-500 shadow-xs"
                      : "bg-slate-800 border border-slate-700 text-slate-400 shadow-xs"
                  }`}
                >
                  <ChefHat className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
                  <span className="text-[11px] font-medium">Bhojan Mitra is thinking...</span>
                  <div className="flex gap-1 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            className={`p-3 px-3.5 border-t ${
              isLight
                ? "bg-white/80 border-amber-900/10"
                : "bg-slate-900/80 border-slate-750"
            }`}
          >
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about food..."
                disabled={isLoading}
                className={`w-full pl-3.5 pr-10 py-2.5 rounded-xl border text-xs focus:outline-hidden transition-all select-text ${
                  isLight
                    ? "bg-amber-50/50 border-amber-300/80 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:bg-white"
                    : "bg-slate-800/80 border-slate-750 text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:bg-slate-800"
                }`}
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                aria-label="Send query"
                className={`absolute right-1.5 p-1.5 rounded-lg transition-all cursor-pointer ${
                  inputValue.trim() && !isLoading
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xs hover:scale-105 active:scale-95"
                    : "opacity-40 cursor-not-allowed text-slate-400"
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-1.5 flex items-center justify-between px-1 text-[9px] opacity-60">
              <span className="flex items-center gap-1">
                <Bot className="w-2.5 h-2.5 text-amber-500" />
                {isGroqKey ? "Groq Cloud Llama / OSS" : "xAI Grok"}
              </span>
              <span>Only answers food & gastronomy</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CulinaryChatbot;
