## Education

**Wuhan University**, M.S. in Applied Statistics, *2025.09 – 2027.06*
- GPA: 3.62/4.0 · Research: efficient sequence modeling, large models, data engineering

**Wuhan University**, B.S. in Information and Computing Science, *2021.09 – 2025.06*
- GPA: 3.35/4.0, top 30% of major
- Core courses: Numerical Analysis, Optimization, Multivariate Statistics, Machine Learning

## Experience

**BYD Auto Industry Co., Ltd.** — AI Algorithm Engineer Intern
Intelligent Speech & AI R&D Department
*2026.01 – 2026.04*
- **Multilingual speech data engineering:** cleaned and normalized ASR / S2TT / open-domain Chat data, built training sets, and unified JSONL / SCP formats with key/ID tracking; used audio-length filtering for Japanese and Korean and alignment-based word-level segmentation for others.
- **Data distribution & training sets:** balanced multilingual training by total duration and sample count; shuffled, sharded, and split large-scale data while keeping language, length, and task distributions traceable.
- **Large-scale speech synthesis & streaming:** synthesized ~6.5M utterances per language across 8 languages with CosyVoice3 (16 kHz / 16-bit PCM / mono); built multi-GPU parallel, streaming, and resumable pipelines.
- **Whisper multilingual training:** full-parameter fine-tuning of Whisper-large-v3 with 8-GPU BF16, DeepSpeed ZeRO Stage 2, and SpecAug; n-best checkpointing and model averaging for stability.
- **SLU multi-stage training:** Whisper Encoder + Adapter + Qwen3-8B with adapter pretraining, encoder+adapter joint training, and LLM LoRA fine-tuning.
- **Data quality & evaluation:** CER/WER tiered filtering (<6% high quality, 6–20% usable, >20% discarded); unified evaluation across ASR, S2TT, and general ability (COMET, LLM-as-a-Judge, MGSM, MMLU).

## Projects

**EarthMamba — High-Resolution Remote Sensing Vision Foundation Model** *2025.09 – 2026.07*
- Independently built the full pipeline: problem definition, architecture design, pretraining data construction, distributed training, downstream transfer, and ablation analysis.
- Designed ARMG, SparseSSM, and Latent Graph modules; built a ~3.67M-image MAE pretraining set; trained with Mamba3 Triton, BF16, DDP / FSDP.
- Downstream results: 78.41% macro-mAP (DFC15), 77.38% mIoU (INRIA), 68.06% mIoU (SECOND).

## Skills

- **Programming & frameworks:** Python, PyTorch, scikit-learn, Shell / Linux, MATLAB
- **Models & methods:** Transformer, SSM / Mamba, LLM fine-tuning, ASR / S2TT / SLU, TTS, multimodal speech modeling
- **Training & engineering:** DeepSpeed, DDP / FSDP, BF16, distributed training, data cleaning / sharding / streaming, model evaluation

## Awards

- Provincial First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM)
- Finalist (F Award), Mathematical Contest in Modeling (MCM / ICM)
- Provincial Third Prize, National College Mathematical Competition (Category A)

## Languages

- Chinese (native), English (CET-6)
