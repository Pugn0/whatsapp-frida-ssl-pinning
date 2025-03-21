# WhatsApp Business SSL Bypass

This repository provides a Frida script to disable SSL Pinning on WhatsApp Business (com.whatsapp.w4b). This allows you to analyze network traffic without restrictions imposed by certificate pinning.

## 📚 Requirements
- A rooted Android device or an emulator with Frida support
- A computer with Linux/macOS/Windows
- Python 3 installed
- Frida and Frida-Server

## ✨ Installation

### 1. Installing Frida CLI on your computer
```sh
pip install frida-tools
```

### 2. Installing Frida-Server on the Android device

1. Check the Frida version installed:
   ```sh
   frida --version
   ```

2. Download the compatible Frida-Server version for your device from: [https://github.com/frida/frida/releases](https://github.com/frida/frida/releases)

3. Extract the file and push it to the Android device:
   ```sh
   adb push frida-server /data/local/tmp/
   ```

4. Grant execution permissions and start the server:
   ```sh
   adb shell
   su
   chmod +x /data/local/tmp/frida-server
   /data/local/tmp/frida-server &
   ```

## 🚀 How to Use the Script

1. Connect to Frida and start WhatsApp Business with the script:
   ```sh
   frida -U -f com.whatsapp.w4b -l index.js --no-pause
   ```

2. The script will automatically disable SSL Pinning.
3. You can now intercept the traffic using tools like **Burp Suite** or **mitmproxy**.

## 🛠️ Common Issues
- "Device not found": Make sure the Frida-Server is running on the Android device.
- "Permission denied": Run the commands with root access on Android.
- "Script not working": WhatsApp may have updated its SSL Pinning implementation. Try modifying the script.

## 🌐 Legal Disclaimer
This repository is for educational and research purposes only. Misuse may violate WhatsApp's terms of service.

---
Created by [pugno_fc]
