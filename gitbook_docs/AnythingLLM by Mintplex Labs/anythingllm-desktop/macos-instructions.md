The AnythingLLM Desktop application is currently in a public beta.  To download the application for your operating system go to [https://useanything.com/download](https://useanything.com/download)

**Make sure you downloaded the correct **`**dmg**`** for your device!** We support both types of chips found in MacOS devices.**
**
**Apple Silicon devices (M1/M2/M3)** - `AnythingLLMDesktop-AppleSilicon.dmg`

**Apple (Intel)** - `AnythingLLMDesktop.dmg`

Your internet browser may need you to verify you want to download and run the AnythingLLM Desktop app since it may be marked as "untrusted" depending on your browser security settings. Click "Keep" when downloading to allow the file to download.



![You may see this during download. Selecting Keep will allow the download to continue.](undefined)

After downloading the `.dmg` file from the link in the invitation email, you will want to double-click on the resulting installed file.

Once the dmg opens, you can drag the AnythingLLM logo into `Applications`

![](files/dFMdGxb2tCTULb1DUprd.png)

Once installed, you will find `AnythingLLM` in your Applications folder as well as you can use `cmd + spacebar` and type in `AnythingLLM` to run.

The very first boot of Anything LLM may take up to 5-15 seconds to fully load depending on your device. Please allow it time to set up and boot. Subsequent boots are much faster.

## Debugging & Other Tips

All of your documents, vectors, and database will be stored in the `~/Library/Application Support/anythingllm-desktop` folder. Should you uninstall the application, you should remove this folder as well as it still contains your application's data should you install it again.

To run the AnythingLLM Application in `debug` mode (if you are getting errors) you can open a `Terminal` and navigate to `~/Applications/AnythingLLM/Content/MacOs` where you can then run the executable and see all application logs while running `AnythingLLM`



## Uninstalling the Application

In the `Finder` you can drag the application into the `Trashcan` and the application will be uninstalled.

To remove all AnythingLLM desktop data from your system please also remove the `/Library/Application Support/anythingllm-desktop` folder. That folder is where your database, documents, and vector cache are located.



## Updating the Application

Simply download the latest version of the `dmg` from the beta download page and then re-install the app and it will overwrite the existing application while persisting your storage and progress.

