The AnythingLLM Desktop application is currently in a public beta.  To download the application for your operating system go to [https://useanything.com/download](https://useanything.com/download)

The beta application is **unsigned**! Your internet browser may need you to verify you want to download and run the AnythingLLM Desktop app since it may be marked as "untrusted" depending on your security settings.

![You may see this during download. Selecting Keep will allow the download to continue.](files/Pdh5ZWeOAkUnWYbAmFd2.png)

After downloading the Linux  `.AppImage`  for AnythingLLM, you may need to give the file executable permissions so that it can run.

```sh
chmod a+x /Download/AnythingLLMDesktop.AppImage
```

You can use any AppImage installer application to mount, boot, or run the installer. In this tutorial we are using Ubuntu 22 LTS and no AppImage management Application.

After that, you can boot the AppImage like any other app image. Double-clicking or running via the terminal will boot the full application.

```sh
# Assuming we are running the AppImage from the /Downloads folder.
~/Downloads/AnythingLLMDesktop.AppImage
# This will run the application in this terminal pane. It will show all logs.
```

Click on the application to boot up AnythingLLM! You are done with installation.

## Uninstalling the Linux application

Remove the `.AppImage` from your machine. Done. See the instructions below to remove all associated data.

## Clear data from previous installations

This folder may vary depending on your Linux Distro. The below is for Ubuntu 22 LTS.

To completely clear all application data from your system like your local database, documents, and vector cache you can delete the folder located in `/home/{user}/.config/anythingllm-desktop`

You can delete the entire director or just the `storage` folder to `reset` your current install.

## Updating your application

As new releases are made available, you can simply download the latest `.AppImage` from the beta download page and then re-install over the existing AnythingLLM application. This will persist your data, but allow you to use the latest version of the software.

