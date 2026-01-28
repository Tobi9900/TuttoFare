#!/usr/bin/env python3
"""
Script per esporre il sito pubblicamente usando expose.sh
"""
import subprocess
import sys

print("🚀 Creando tunnel pubblico con expose.sh...\n")
print("📍 Server locale: http://localhost:8080")
print("⏳ Attendere...\n")

try:
    # Scarica e usa expose
    result = subprocess.run([
        "powershell", "-NoProfile", "-Command",
        "Invoke-WebRequest -Uri 'http://expose.sh' | Select-Object -ExpandProperty Content | Out-String"
    ], capture_output=True, text=True)
    
    print(result.stdout)
    if result.stderr:
        print(f"Errore: {result.stderr}")
        
except Exception as e:
    print(f"❌ Errore: {e}")
    print("\nAlternativa: usa il comando manuale:")
    print("ssh -R 80:localhost:8080 ssh.expose.sh")
