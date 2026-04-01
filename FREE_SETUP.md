# Using Claude Code for Free

Claude Code typically requires an API key, but you can use it for free with these options:

## Option 1: Local Models with Ollama (Completely Free & Offline)

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

## Option 2: Free Cloud Models

### HuggingFace Inference API (Free Tier)
- Sign up at https://huggingface.co
- Get your free API token
- Set environment:
  ```bash
  export HUGGINGFACE_API_KEY="your_token_here"
  ```

### Groq (Fast Free API - 8000 requests/day)
- Sign up at https://console.groq.com
- Get free API key
- Set:
  ```bash
  export GROQ_API_KEY="your_key_here"
  ```

## Option 3: OpenAI Free Trial Credits
- Sign up at https://platform.openai.com
- Get $5-$18 free trial credits (valid 3 months)
- Set:
  ```bash
  export ANTHROPIC_API_KEY="sk-YOUR_OPENAI_KEY"
  ```

## Recommended: Ollama + Llama 2

**Why:** Completely free, no internet required, runs locally, no costs ever.

**Limitations:** Slower than cloud models, requires local GPU for good performance (can run on CPU).

**Steps:**
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

The app will connect to your local Ollama instance and work identically, but everything runs on your machine with no API costs.
