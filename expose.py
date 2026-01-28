#!/usr/bin/env python3
"""
Script per esporre il sito pubblicamente online usando ngrok
"""
import os
import time
from pyngrok import ngrok

# URL del server locale
local_url = "http://localhost:8080"

# Avvia il tunnel ngrok
print("🚀 Creando tunnel pubblico...")
print(f"📍 Server locale: {local_url}")

try:
    public_url = ngrok.connect(8080, "http")
    print(f"\n✅ URL PUBBLICO ONLINE:")
    print(f"🌐 {public_url}")
    print(f"\nIl sito è ora accessibile da qualsiasi dispositivo!")
    print("\nPremi Ctrl+C per fermare...\n")
    
    # Tieni il tunnel attivo
    ngrok_process = ngrok.get_ngrok_process()
    ngrok_process.proc.wait()
    
except Exception as e:
    print(f"❌ Errore: {e}")
    print("Verifica che il server locale (porta 8080) sia attivo!")
