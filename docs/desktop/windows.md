---
title: Windows Installation
---

:::note Operating system notice
AnythingLLM is intended to be used on an admin account of Windows Home. Other versions of windows (Enterprise or Server) may not work. We target for Windows 11.
:::

:::warning Application is not signed!
The AnythingLLM windows application is currently unsigned and Windows defender or other anti-virus software will sometimes flag the application as malicious. If you do not want to bypass that alert for any reason - please use AnythingLLM another way.
:::


### Downloading the application

[useanything.com/download](https://useanything.com/download)

Your internet browser may need you to verify you want to download and run the AnythingLLM Desktop app since it may be marked as "untrusted" depending on your browser security settings. Click "Keep" when downloading to allow the file to download.

<img src="/img/desktop/windows/download.png" />

### Installing the application
After downloading the windows `exe` installer for AnythingLLM, you can double-click the installer and it will display the installation process. 

:::note Anti-virus false positive
Since the application is unsigned. Native windows defender will want to ensure you mean to execute this application. Click on "more details" and the **"Run anyway"** button will be visible.

__this alert is temporary until the application signing process is completed on our end.__
:::

<img src="/img/desktop/windows/install-1.png" />

After which, now the regular installer can run to install AnythingLLM Desktop!


<img src="/img/desktop/windows/install-2.png" />
<img src="/img/desktop/windows/install-3.png" />

Click on the application to boot up AnythingLLM! You are done with installation.

## Uninstalling the Windows application

:::note
You should find the uninstall `executable` in `/Users/{user}/AppData/Local/Programs/AnythingLLM` or  `/Users/{user}/AppData/Local/Programs/anythingllm-desktop`
:::
<img src="/img/desktop/windows/uninstall.png" />

## Clear data from previous installations

To completely clear all application data from your system like your local database, documents, and vector cache you can delete the folder located in `/Users/{user}/AppData/Roaming/anythingllm-desktop/storage`

You can delete the entire `/Users/{user}/AppData/Roaming/anythingllm-desktop` folder or just the storage folder to `reset` your install.

## Updating your application

As new releases are made available, you can simply download the latest `exe` from the beta download page and then re-install over the existing AnythingLLM application. This will persist your data, but allow you to use the latest version of the software.