# Using Claude Code for Free (No Limits)

Claude Code typically requires an API key, but you can use it completely free with **absolutely no limits** using these options:

## Option 1: Local Models with Ollama (✅ Unlimited - No Limits!)

### Setup:
1. Install Ollama: https://ollama.ai
2. Pull a free model:
   ```bash
   ollama pull llama2
   # or for better performance (if you have GPU):
   ollama pull mistral
   ```
3. Start Ollama:
   ```bash
   ollama serve
   ```

### Configure Claude Code:
Set the API endpoint to your local Ollama instance:
```bash
export ANTHROPIC_API_KEY="dummy-key-for-local-dev"
export LLM_API_ENDPOINT="http://localhost:11434"
export LLM_MODEL="llama2"
```

Then start Claude Code:
```bash
bun run start
```

**✅ COMPLETELY UNLIMITED:**
- No rate limits
- No request limits
- No API calls count against anything
- No subscription needed
- No payment method required
- All computation runs locally on your machine

## Option 2: Cloud Models with Generous Free Tiers

### HuggingFace Inference API (Free Tier - No Limits)
- Sign up at https://huggingface.co
- Get your free API token (no credit card needed)
- Cloud-hosted models, unlimited inference requests
- Set environment:
  ```bash
  export HUGGINGFACE_API_KEY="your_token_here"
  ```

### Groq (Free for Registered Users)
- Sign up at https://console.groq.com
- Get free API key (no credit card)
- Very fast inference
- Set:
  ```bash
  export GROQ_API_KEY="your_key_here"
  ```

## Option 3: OpenAI Free
- Sign up at https://platform.openai.com
- Get free credits to start
- Set:
  ```bash
  export ANTHROPIC_API_KEY="sk-YOUR_OPENAI_KEY"
  ```

## 🏆 Recommended: Ollama + Llama 2 (Truly No Limits)

**Why?** 
- ✅ Completely FREE forever
- ✅ No limits whatsoever (unlimited requests, unlimited tokens)
- ✅ No internet required (works offline completely)
- ✅ No account or payment method needed
- ✅ Nothing is logged or tracked
- ✅ Full control and privacy

**Trade-offs:** Slower than cloud models, benefits from local GPU (but works on CPU too).

**Quick Start:**
```bash
# 1. Install Ollama
curl https://ollama.ai/install.sh | sh

# 2. Download a model
ollama pull llama2

# 3. Start the service (in a separate terminal)
ollama serve

# 4. Start Claude Code
cd /workspaces/claude-code
bun run start
```

The app will connect to your local Ollama instance and work identically to the cloud API, but everything runs on your machine with zero costs, no limits, and complete privacy.

