#!/usr/bin/env python3
"""
Script per esporre il sito pubblicamente usando localtunnel
"""
import subprocess
import sys

print("🚀 Creando tunnel pubblico con localtunnel...\n")
print("📍 Server locale: http://localhost:8080")
print("⏳ Attendere...\n")

try:
    subprocess.run([sys.executable, "-m", "localtunnel", "--port", "8080"], check=True)
except KeyboardInterrupt:
    print("\n\n⛔ Tunnel chiuso.")
except Exception as e:
    print(f"❌ Errore: {e}")
