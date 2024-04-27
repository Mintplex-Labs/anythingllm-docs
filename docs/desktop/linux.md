---
title: Linux Installation
---

:::warning Operating system notice
AnythingLLM is built on an Ubuntu system and may not work well on other distros. **Please** open a Github issue if you have installation or bootup troubles. We want to have Linux OS's to have the same experience with AnythingLLM.
:::


### Downloading the application

[useanything.com/download](https://useanything.com/download)

Your internet browser may need you to verify you want to download and run the AnythingLLM Desktop app since it may be marked as "untrusted" depending on your browser security settings. Click "Keep" when downloading to allow the file to download.

<img src="/img/desktop/linux/download.png" />


### Installing the application

After downloading the Linux `.AppImage` for AnythingLLM, you may need to give the file executable permissions so that it can run.

```shell
chmod a+x /Downloads/AnythingLLMDesktop.AppImage
```

After that, you can boot the AppImage like any other app image. Double-clicking or running via the terminal will boot the full application.

```shell
# Assuming we are running the AppImage from the /Downloads folder.
./AnythingLLMDesktop.AppImage
# This will run the application in this terminal pane. It will show all logs.
```

### Uninstalling the Linux application

Remove the `.AppImage` from your machine. Done. See the instructions below to remove all associated data.

### Clear data from previous installations

To completely clear all application data from your system like your local database, documents, and vector cache you can delete the folder located in `/home/{user}/.config/anythingllm-desktop`

You can delete the entire directory or just the storage folder to reset your current install.

### Updating your application

As new releases are made available, you can simply download the latest `.AppImage` from the beta download page and then execute this new appImage and delete the old one. This will persist your data, but allow you to use the latest version of the software.