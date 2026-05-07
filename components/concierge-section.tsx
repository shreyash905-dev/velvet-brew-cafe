"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type Message = {
  id: number;
  type: "user" | "bot";
  text: string;
  isTyping: boolean;
};

export function ConciergeSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: "Good day! I'm your café concierge. What can I recommend for you today?",
      isTyping: false,
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const recommendations = [
    "What should I order today?",
    "Tell me about your coffee",
    "Best pastries?",
    "Quiet spot recommendations?",
  ];

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userInput = input.trim();

    const userMsg: Message = {
      id: Date.now(),
      type: "user",
      text: userInput,
      isTyping: false,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const typingMsg: Message = {
      id: Date.now() + 1,
      type: "bot",
      text: "",
      isTyping: true,
    };

    setMessages((prev) => [...prev, typingMsg]);

    let botText =
      "The concierge is temporarily unavailable. Please try again shortly.";

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
        }),
      });

      const data = await response.json();
      botText = data.reply || botText;
    } catch (error) {
      console.error("Chat error:", error);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    let currentText = "";

    for (let i = 0; i < botText.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 18));
      currentText += botText[i];

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === typingMsg.id ? { ...msg, text: currentText } : msg
        )
      );
    }

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === typingMsg.id ? { ...msg, isTyping: false } : msg
      )
    );

    setIsLoading(false);
  };

  return (
    <section id="concierge" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase mb-4">
            Personal Assistant
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-5">
            Digital Concierge
          </h2>

          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Ask for refined coffee pairings, pastry suggestions, quiet seating,
            and reservation guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-card/80 backdrop-blur-xl border border-border/60 overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-background/50">
            <div>
              <p className="text-sm font-medium text-foreground">
                Velvet Brew Concierge
              </p>
              <p className="text-xs text-muted-foreground">
                Online · Ready to assist
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[#d4b06a]" />
              Live Demo
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs sm:max-w-md px-5 py-3 rounded-2xl text-sm leading-relaxed font-light ${
                    msg.type === "user"
                      ? "bg-[#d4b06a] text-black shadow-lg"
                      : "bg-muted/70 text-foreground border border-border/60"
                  }`}
                >
                  {msg.text}
                  {msg.isTyping && <span className="animate-pulse">▌</span>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-border/60 bg-background/40">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.25em] mb-3">
              Try asking
            </p>

            <div className="flex flex-wrap gap-2">
              {recommendations.map((rec) => (
                <button
                  key={rec}
                  onClick={() => setInput(rec)}
                  className="text-xs px-4 py-2 border border-border/70 rounded-full text-muted-foreground hover:text-foreground hover:border-[#d4b06a] hover:bg-[#d4b06a]/10 transition-all duration-300 cursor-pointer"
                >
                  {rec}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-border/60 flex gap-3 bg-card/50">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask for recommendations..."
              disabled={isLoading}
              className="flex-1 bg-background/80 border border-border/70 rounded-full px-5 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#d4b06a]/40 hover:border-[#d4b06a]/60 transition-all duration-300 disabled:opacity-50"
            />

            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 rounded-full bg-[#d4b06a] text-black hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}