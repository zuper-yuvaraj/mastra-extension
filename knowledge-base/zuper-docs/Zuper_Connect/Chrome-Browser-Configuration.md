---
title: "Chrome Browser Configuration"
source: https://docs.zuper.co/Zuper_Connect/Chrome-Browser-Configuration.md
fetched_at: 2026-10-06T13:30:02.707Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Chrome Browser Configuration

# Overview 

**Why Browser Configuration Matters** 

For Zuper Connect to function properly, your browser needs specific permissions and configurations to: 

* Access your computer's microphone for incoming and outgoing calls 
* Display notifications when calls arrive 
* Maintain stable performance while handling voice data 
* Allow popups for call interactions 

Without proper configuration, you may experience: 

* Microphone not detected 
* Missed incoming call notifications 
* Poor audio quality 
* Dropped calls 
* Inability to receive calls 

**Browser Requirements** 

* **Supported Browser:** Google Chrome (latest version recommended) 
* **Operating System:** Windows 10/11 or macOS 
* **Internet Connection:** Stable connection with a minimum 2.5 Mbps upload/download speed 
* **Hardware:** Computer with microphone and speakers (or headset)

# System-Level Microphone Setup 

## Windows 10/11 Configuration 

**Complete Steps:** 

1. **Open Privacy & Security Settings** 
   * Click the Windows Start icon in the bottom left corner
   * Type "**Privacy & Security**" in the search box
   * Click "**Privacy & Security**" from the results (it opens System Settings) 
2. **Navigate to Microphone Settings** 
   * In the left sidebar of Settings, click "**Microphone**."
   * You are now in the Microphone privacy settings 
3. **Enable Microphone Access** 
   * Look for the toggle labeled "**Microphone access**."
   * Ensure it is turned ON (the toggle should be blue)
   * If it's grey/off, click it to turn it on 
4. **Allow Chrome to Access Microphone** 
   * Scroll down to the section "Allow apps to access your microphone."
   * Look for "**Google Chrome**" in the list
   * Ensure the toggle next to Chrome is ON (blue)
   * If you don't see Chrome listed yet, don't worry—it will appear after you first use it in Chrome 
5. **Confirm and Close** 
   * Close the Settings window
   * Your Windows system is now configured to allow Chrome to use the microphone 

**Verification:** 

* The microphone toggle should be blue (ON) 
* Chrome's toggle should be blue (ON) 
* No red warning icons should appear 

### Troubleshooting Windows Setup: 

**If toggles are greyed out:** 

* You may not have administrator permissions on your computer 
* Contact your IT administrator to enable these settings 

**If Chrome doesn't appear in the list:** 

* Open Chrome and use Zuper Connect once 
* Return to these settings 
* Chrome should now appear in the list 

## macOS Configuration 

**Complete Steps:** 

1. **Open System Settings** 
   * Click the Apple menu in the top-left corner of your screen 
   * Select "**System Settings**" (or "System Preferences" on older macOS versions) 
2. **Navigate to Privacy & Security** 
   * In the left sidebar, click "**Privacy & Security**." 
   * You may need to scroll down to find this option 
3. **Select Microphone** 
   * Look for "**Microphone**" in the list of privacy settings 
   * Click on "**Microphone**" 
4. **Allow Chrome to Access Microphone** 
   * You will see a list of applications 
   * Look for "**Google Chrome**" in the list 
   * If Chrome is listed but has NO checkmark, click to check it 
   * If Chrome is not listed, it will appear after you first use it in Chrome 
5. **Confirm and Close** 
   * Close System Settings 
   * Your macOS system is now configured to allow Chrome to use the microphone 

**Verification:** 

* Chrome should be listed under Microphone 
* Chrome should have a check mark next to it 
* No lock icons or warnings should appear 

### Troubleshooting macOS Setup: 

**If Chrome doesn't appear in the list:** 

* Open Chrome and use Zuper Connect once 
* Return to System Settings → Privacy & Security → Microphone 
* Chrome should now appear 

**If you cannot modify settings:** 

* Your Mac may be locked by an administrator 
* Contact your IT administrator for help 

# Chrome Browser Microphone Permissions 

Once your operating system allows microphone access, you must configure Chrome to specifically allow Zuper Connect to use your microphone. 

## Method 1: Granting Permissions via Chrome Settings 

This method allows you to pre-configure permissions before using Zuper Connect. 

**Step-by-Step Instructions:** 

1. **Open Chrome Settings** 
   * Open Google Chrome on your computer 
   * Click the three-dot menu icon in the top-right corner (☰) 
   * Select "**Settings**" from the dropdown menu 
   * You are now in Chrome Settings 
2. **Navigate to Privacy and Security** 
   * In the left sidebar of Settings, click "**Privacy and security.**" 
   * This section controls all permission-related settings 
3. **Access Site Settings** 
   * Click "**Site settings**" (usually under the Privacy and security section) 
   * You will see a list of different permission types 
4. **Configure Microphone Permissions** 
   * From the list, click "**Microphone**." 
   * Under "**Default permission**," select "Ask (sites can ask to use your microphone)" or "Allow."  
     1. "**Ask**" means you'll be prompted each time (more secure) \\
     2. "**Allow**" means selected sites can use your microphone without asking (more convenient) 
5. **Add Zuper Connect URL to Allowed List** 
   * Look for the section "**Allowed to use your microphone**." 
   * Click the "**Add**" button. 
   * In the text field, enter your Zuper Connect domain. Example: [web.zuperpro.com](http://web.zuperpro.com), Or: [app.zuper.com](http://app.zuper.com), Or: your company's specific Zuper Connect URL 
   * Click the "**Add**" button to save 
6. **Verify Zuper Connect is Not Blocked** 
   * Look at the section "**Not allowed to use your microphone**" 
   * If your Zuper Connect URL appears here, click the trash/delete icon next to it. This ensures the URL is not in the blocked list 
7. **Close Settings** 
   * Close the Settings tab 
   * Your Chrome microphone permissions are now configured 

**What You Should See:** 

* Under "**Allowed to use your microphone**": Your Zuper Connect URL should be listed 
* Under "**Not allowed to use your microphone**": Your Zuper Connect URL should NOT be listed 
* The default permission should be set to either "**Ask**" or "**Allow.**" 

## Method 2: Granting Permissions When First Using Zuper Connect 

This is the easiest method if you want to allow permissions on-demand. 

**Step-by-Step Instructions:** 

1. **Open Zuper Connect in Chrome** 
   * Go to your Zuper Connect application URL in Chrome 
   * Wait for the page to fully load 
   * Log in to your account 
2. **Respond to Permission Prompt** 
   * When Zuper Connect detects you have a microphone, Chrome will display a pop-up notification 
   * The notification will say: "Chrome wants to use your microphone." 
   * There will be two buttons: "**Allow**" and "**Block**." 
3. **Click "Allow"** 
   * Click the "**Allow**" button to grant Zuper Connect permission to use your microphone 
   * This permission is automatically saved for future sessions 
   * You will not be prompted again unless you later block the permission 
4. **Permission is Saved** 
   * Zuper Connect now has permanent permission to use your microphone.
   * The next time you open Zuper Connect, no prompt will appear 

**Tips:** 

* Make sure you are logged into your Google account when granting permissions (they are tied to your Google account) 
* Allow permissions from the first use to avoid issues later 
* If the prompt doesn't appear, your microphone may not be detected—see the troubleshooting section 

## Method 3: Fixing Previously Blocked Microphone Access 

If you previously clicked "**Block**" when Chrome asked for microphone permission, you need to unblock it. 

**Step-by-Step Instructions:** 

1. **Open Zuper Connect** 
   * Go to your Zuper Connect application URL in Chrome 
2. **Access Site Information** 
   * Click the lock icon next to the URL in the address bar 
   * A small pop-up menu will appear 
   * Click "**Site settings**" in the pop-up 
3. **Find and Change Microphone Permission** 
   * You will see a list of permissions for this site 
   * Find "**Microphone**" in the list 
   * The setting should currently show "**Block**." 
   * Click on "**Microphone**" to expand the options 
4. **Change from Block to Allow** 
   * Change the microphone setting from "**Block**" to "**Allow**" 
   * The change is saved automatically.
5. **Refresh Zuper Connect** 
   * Go back to the Zuper Connect tab 
   * Press F5 to refresh the page 
   * Chrome will now ask for microphone permission again 
   * Click "**Allow**" when prompted 
6. **Verify Permission is Granted** 
   * After refreshing, the microphone should be detected 
   * Zuper Connect should show that your microphone is ready 

**If This Doesn't Work:** 

* Clear your browser cache: Chrome Menu → Settings → Privacy and security → Clear browsing data 
* Close and reopen Chrome completely 
* Try the steps above again 

# Desktop Notifications Setup 

Desktop notifications alert you when someone calls, even if you're not looking at the Zuper Connect tab. This is critical for receiving incoming calls. 

**Why Desktop Notifications Matter** 

Without notifications enabled, you may miss incoming calls if: 

* You're working on a different browser tab 
* You're working on a different application 
* The Zuper Connect window is minimized 
* Your focus is elsewhere on your screen 

## Method 1: Enable Notifications in Chrome Settings 

**Step-by-Step Instructions:** 

1. **Open Chrome Settings** 
   * Click the three-dot menu in Chrome (☰) 
   * Select "**Settings**" 
2. **Navigate to Notifications Settings** 
   * In the left sidebar, click "**Privacy and security**." 
   * Click "**Site settings**." 
   * From the permissions list, click "**Notifications**." 
3. **Set Default Notification Permission** 
   * Under "**Default permission**," select "**Ask (recommended).**" 
   * This means Chrome will ask each site if it wants to send notifications 
   * Alternatively, you can select "**Allow**" to automatically allow all sites (not recommended) 
4. **Add Zuper Connect to Allowed Notifications** 
   * Look for the section "**Allowed to send notifications.**" 
   * Click the "**Add**" button 
   * Enter your Zuper Connect domain (e.g., [web.zuperpro.com](http://web.zuperpro.com)) 
   * Click "**Add**" to save 
5. **Verify Zuper Connect is Not Blocked** 
   * Check the section "**Not allowed to send notifications**." 
   * If your Zuper Connect URL appears here, click the trash icon to remove it 
6. **Close Settings** 
   * Your notification settings are now configured 

**Verification:** 

* Your Zuper Connect URL should appear under "**Allowed to send notifications**." 
* It should NOT appear under "**Not allowed to send notifications**." 

## Method 2: Enable Notifications When First Using Zuper Connect 

**Step-by-Step Instructions:** 

1. **Open Zuper Connect** 
   * Go to your Zuper Connect application in Chrome 
   * Log in to your account 
2. **Respond to Notification Permission Prompt** 
   * Chrome will display a pop-up asking: "[web.zuperpro.com](http://web.zuperpro.com) wants to show notifications." 
   * Two buttons will appear: "Allow" and "Block." 
3. **Click "Allow"** 
   * Click the "Allow" button 
   * Zuper Connect now has permission to send you notifications 
   * This permission is saved for future sessions 
4. **Verify Notifications Work** 
   * Try having a colleague call your Zuper Connect number 
   * You should receive a notification on your screen even if you're on a different tab 
   * The notification will show the caller's name and number 

**Tips:** 

* Ensure your computer's volume is not muted so you hear the notification sound 
* Make sure Windows/macOS notifications are enabled (see sections below) 
* Notifications may appear in different places depending on your notification settings 

## Method 3: Fixing Previously Blocked Notifications 

**Step-by-Step Instructions:** 

1. **Open Zuper Connect** 
   * Go to your Zuper Connect application URL in Chrome 
2. **Access Site Settings** 
   * Click the lock icon next to the URL.
   * Click "**Site settings**." 
3. **Change Notification Permission** 
   * Find "**Notifications**" in the permissions list 
   * The current setting should show "Block." 
   * Click on "**Notifications**" to change it 
4. **Change from Block to Allow** 
   * Change the setting from "Block" to "Allow." 
   * Changes are saved automatically 
5. **Refresh Zuper Connect** 
   * Return to the Zuper Connect tab 
   * Press F5 to refresh 
   * Chrome will ask for notification permission again 
   * Click "**Allow**" 

# Enable Windows Notifications

For Chrome notifications to appear even when Chrome is in the background, Windows must have notifications enabled for Chrome. 

**Step-by-Step Instructions:** 

1. **Open Windows Notifications Settings** 
   * Click the Windows Start icon 
   * Type "**Notifications**" in the search box 
   * Click "**Notifications & actions.**" 
2. **Find Google Chrome** 
   * Scroll down to the section "**Notifications from apps and other senders.**" 
   * Find "**Google Chrome**" in the list 
3. **Enable Chrome Notifications** 
   * Ensure the toggle next to Chrome is turned ON (blue) 
   * This allows Chrome notifications to appear on your screen 
4. **Verify** 
   * Chrome notifications should now appear as pop-ups on your screen 
   * You may hear a notification sound when a call comes in 

# Enable macOS Notifications  

For Chrome notifications to appear, macOS must allow notifications for Chrome. 

**Step-by-Step Instructions:** 

1. **Open System Settings** 
   * Click the Apple menu 
   * Select "**System Settings**" (or "System Preferences") 
2. **Navigate to Notifications** 
   * Click "**Notification**s" in the sidebar 
3. **Find Google Chrome** 
   * Look for "**Google Chrome**" in the list of applications 
4. **Enable Notifications for Chrome** 
   * Click on Chrome 
   * Ensure "**Allow notifications**" is toggled ON 
   * This allows Chrome notifications to appear on your screen 
5. **Configure Notification Style (Optional)** 
   * You can choose how notifications appear:  
     1. "Banners" - appear briefly at the top of the screen 
     2. "Alerts" - stay on screen until you interact with them 

# Chrome Performance Settings for VoIP (Important) 

Chrome has performance optimization features that can interfere with VoIP if not configured correctly. These settings are critical for reliable call reception. 

**Why Performance Settings Matter** 

Chrome is designed to optimize performance by closing unused tabs and throttling background processes. For VoIP to work properly, Zuper Connect must stay active in the background even when you're not actively using it. If Chrome closes the tab or throttles it, you will miss incoming calls. 

## Memory Saver Setting 

**What Memory Saver Does:** 

Memory Saver is a Chrome feature that automatically closes inactive browser tabs to reduce memory usage. This helps if you have many tabs open, but it can prevent Zuper Connect from receiving calls if the tab is closed. 

**Why You Need to Configure It:** 

If Memory Saver closes your Zuper Connect tab, you won't receive incoming call notifications. Configuring Memory Saver to exclude Zuper Connect ensures the tab stays active. 

**Step-by-Step Configuration:** 

1. **Open Chrome Settings** 
   * Click the three-dot menu (☰) 
   * Select "**Settings**" 
2. **Navigate to Performance Settings** 
   * In the left sidebar, click "**Performance.**" 
   * You are now in the Performance section 
3. **Find Memory Saver Section** 
   * Look for a section labeled "**Memory Saver**." 
   * You should see text explaining that Memory Saver optimizes memory usage 
4. **Add Zuper Connect to Exceptions** 
   * Find the subsection "**Never save memory for these sites**." 
   * Click the "**Add**" button 
5. **Enter Zuper Connect URL** 
   * A text field will appear 
   * Type your Zuper Connect domain (e.g., [web.zuperpro.com](http://web.zuperpro.com)) 
   * Click the "**Add**" button 
6. **Verify Zuper Connect is Listed** 
   * Your Zuper Connect URL should now appear in the "**Never save memory for these sites**" list 
   * This means Chrome will never close this tab 

**What This Does:** 

* Chrome will keep your Zuper Connect tab active even if you haven't used it in a while 
* You will reliably receive incoming call notifications 
* The tab will continue running in the background 

**Verification:** 

* Your Zuper Connect URL should appear under "**Never save memory for these sites.**" 
* If you click "**Add**" again, it should not allow you to add the same URL twice (already in the list) 

## Energy Saver Setting 

**What Energy Saver Does:** 

Energy Saver throttles (slows down) background tabs to save battery life on laptops. This reduces CPU and resource usage but can degrade audio quality and cause lag. 

**Why You Need to Turn It Off:** 

For VoIP calls to work properly, Zuper Connect needs full processing power even when the tab is in the background. Throttling causes audio quality issues, delays, and potential call drops. 

**Step-by-Step Configuration:** 

1. **Open Chrome Settings** 
   * Click the three-dot menu (☰) 
   * Select "**Settings**" 
2. **Navigate to Performance Settings** 
   * In the left sidebar, click "**Performance**." 
3. **Find Energy Saver Option** 
   * Look for a toggle or setting labeled "**Energy Saver.**" 
   * It may be described as "**Efficiency mode**" or similar 
   * You should see an on/off toggle 
4. **Turn Off Energy Saver** 
   * Click the toggle to turn it OFF 
   * The toggle should be grey/white, not blue 
   * Changes are applied immediately 
5. **Verify It's Off** 
   * The Energy Saver toggle should show as OFF (grey) 
   * You may see text like "**Energy Saver is off.**" 

**What This Does:** 

* Chrome runs Zuper Connect at full performance 
* Audio quality is clearer and more stable 
* No lag or delays in audio transmission 
* Calls are less likely to drop 

**Important Note:** 

Turning off Energy Saver may slightly increase battery usage on laptops, but this is necessary for clear VoIP communication. 

# Popup & Redirection Settings 

Zuper Connect may use popups or redirects for certain features (call transfers, warm transfers, conference calls, etc.). Chrome must allow these. 

**Step-by-Step Configuration:** 

1. **Open Chrome Settings** 
   * Click the three-dot menu (☰) 
   * Select "**Settings**" 
2. **Navigate to Site Settings** 
   * In the left sidebar, click "**Privacy and security.**" 
   * Click "**Site settings**." 
3. **Find Pop-ups and Redirects** 
   * From the permissions list, click "**Pop-ups and redirects**." 
4. **Add Zuper Connect to Allowed List** 
   * Look for "**Allowed to send pop-ups and redirects.**" 
   * Click the "**Add**" button 
   * Enter your Zuper Connect domain (e.g., [web.zuperpro.com](http://web.zuperpro.com)) 
   * Click "**Add**" 
5. **Verify Configuration** 
   * Your Zuper Connect URL should appear under "**Allowed to send pop-ups and redirects.**" 
   * It should NOT appear under "**Not allowed to send pop-ups and redirects**." 

**What This Allows:** 

* Call transfer popups to work properly 
* Warm transfer features to function 
* Conference call windows to open 
* IVR features to display correctly 

# Hardware & Microphone Configuration 

**Verify Microphone is Connected** 

**Physical Connection:** 

1. Check that your microphone or headset is physically connected to your computer 
2. Look for a visible connection (USB cable or 3.5mm audio jack) 
3. Ensure the cable is fully inserted and not loose 
4. If using Bluetooth, ensure it's paired to your computer 

**System Recognition:** 

1. Ensure your operating system recognizes the microphone (check Section 2 above) 
2. Your microphone should appear in Windows Sound settings or macOS Sound preferences 
3. If not recognized, try:  
   * Disconnecting and reconnecting the microphone 
   * Restarting your computer 
   * Updating audio drivers 

**Select the Correct Microphone in Chrome** 

**Step-by-Step Instructions:** 

1. **Open Chrome Microphone Settings** 
   * Open Chrome 
   * Type this into the address bar: chrome://settings/content/microphone 
   * Press Enter 
   * You are now at the Microphone settings page 
2. **View Available Microphones** 
   * Under the "**Microphone**" section at the top of the page, click the dropdown menu 
   * A list of available microphones will appear 
   * You may see options like:  
     1. "Default" (your system's default device) 
     2. "Built-in Microphone" 
     3. "USB Headset Microphone" 
     4. Brand names of connected devices 
3. **Select Your Microphone** 
   * Click on the microphone you want to use 
   * If unsure, select "**Default**" (your system's default recording device) 
   * The selection is saved automatically 

**Troubleshooting: If No Microphone Appears:** 

1. **Check Physical Connection** 
   * Plug in your microphone or headset 
   * Wait 10 seconds for your computer to recognize it 
2. **Restart Chrome** 
   * Close Chrome completely 
   * Wait 5 seconds 
   * Reopen Chrome 
   * Return to the microphone settings page 
3. **Check System Settings** 
   * Verify microphone access is enabled in Windows/macOS (Section 2) 
   * Verify Chrome has microphone permission in system settings 
4. **Update Audio Drivers** 
   * Your audio drivers may need updating 
   * For Windows: Windows Update or manufacturer website 
   * For macOS: System Settings → Software Update 
5. **Try a Different USB Port** 
   * If using a USB microphone, try a different USB port 
   * Some USB ports may have power or compatibility issues 

 **Test Your Microphone** 

Testing your microphone before using Zuper Connect ensures it's working properly. 

**Windows Test:** 

1. Click the Windows Start icon 
2. Type "**Sound settings**" in the search box 
3. Click "**Volume and device preferences**." 
4. Under the "**Input**" section, select your microphone from the dropdown 
5. Look for the "**Test your microphone**" section 
6. Speak into your microphone 
7. You should see a blue input level bar move as you speak 
8. If the bar doesn't move, your microphone isn't working:  
   * Check physical connection 
   * Try a different microphone 
   * Check system settings 

**macOS Test:** 

1. Click the Apple menu 
2. Select "**System Settings**" 
3. Click "**Sound**" in the sidebar 
4. Click the "**Input**" tab 
5. Select your microphone from the list 
6. Look at the "**Input level**" meter at the bottom 
7. Speak into your microphone 
8. You should see the meter move as you speak 
9. If the meter doesn't move:  
   * Check physical connection 
   * Try a different microphone 
   * Check system settings 

 **Headset Setup:** 

1. Connect your headset to your computer (USB or audio jack) 
2. Allow your computer to install drivers if needed 
3. In Chrome microphone settings (chrome://settings/content/microphone), select your headset from the dropdown 
4. Test the microphone using the steps above 
5. Verify volume levels are appropriate (not too loud, not too soft) 

**Before Accepting Calls:** 

* Test that you can hear audio through the headset speakers 
* Test that the microphone works by speaking 
* Verify the microphone is not muted (check headset buttons) 
* Verify system volume is adequate (not too low) 

# Site-Specific Configuration (Optional but Recommended) 

This method prevents you from being repeatedly prompted for permissions every time you use Zuper Connect. 

**Benefits of Site-Specific Configuration:** 

* Faster access to Zuper Connect 
* No repeated permission prompts 
* Cleaner user experience 
* All permissions pre-configured 

**Step-by-Step Instructions:** 

1. **Open Zuper Connect** 
   * Go to your Zuper Connect application URL in Chrome 
   * Log in to your account 
2. **Access Site Settings** 
   * Click the lock icon next to the URL in the address bar 
   * A dropdown menu will appear 
   * Click "Site settings" in the menu 
3. **Configure All Required Permissions** 
   * You will see a list of permissions for this site 
   * Configure each one: 

**Microphone Permission:** 

* Find "Microphone" in the list 
* Change it from "Ask" to "Allow" (or ensure it's already set to "Allow") 

**Notifications Permission:** 

* Find "Notifications" in the list 
* Change it from "Ask" to "Allow" (or ensure it's already set to "Allow") 

**Popups and Redirects Permission:** 

* Find "Pop-ups and redirects" in the list 
* Change it from "Block" to "Allow" 

4. **Refresh Zuper Connect** 
   * Return to the Zuper Connect tab 
   * Press F5 to refresh the page 
   * All permissions are now pre-configured 
5. **Verify Configuration** 
   * After refresh, you should NOT see any permission prompts 
   * Zuper Connect should work without asking for permissions 

**What You Should See:** 

After configuration, all site-specific permissions should show "Allow": 

* Microphone: Allow 
* Notifications: Allow 
* Pop-ups and redirects: Allow 

# Keeping the Browser Active for Incoming Calls 

For Zuper Connect to receive calls reliably, the browser and application must remain active. 

**Critical Requirement:** 

**Your Chrome browser must be running at all times during your work hours.** 

The Zuper Connect tab can be minimized or not in focus, but: 

* Chrome must be running (not closed) 
* The Zuper Connect tab must be open (not closed) 
* Your computer must not be in sleep mode 

## Desktop Users: 

**Requirements:** 

1. Keep the Zuper Connect tab open in Chrome at all times during work hours 
2. Chrome window can be minimized to the taskbar (not required to be visible) 
3. Do NOT close the Zuper Connect tab 
4. Do NOT close the Chrome browser 
5. Do NOT restart your computer during work hours without notifying your manager 
6. If your computer goes to sleep, wake it before the next expected call 

**Best Practices:** 

* Pin the Zuper Connect tab so it doesn't close accidentally 
* Make Chrome one of your startup applications (opens when the computer starts) 
* Put a sticky note on your monitor reminding you to keep Chrome open 
* Inform your manager before restarting your computer 

## Laptop Users with Memory Saver: 

**Why This Matters:** 

If Memory Saver is enabled on your laptop, Chrome may close inactive tabs to save memory. You've already configured an exception for Zuper Connect, so: 

**Requirements:** 

1. Ensure Zuper Connect is added to Memory Saver exceptions (see Above) 
2. The exception prevents Chrome from closing the tab 
3. You can safely leave the Zuper Connect tab open all shift 
4. The tab will remain active even if you don't use it for hours 

**Verification:** 

* Go to Chrome Settings → Performance → Memory Saver 
* Verify your Zuper Connect URL is listed under "**Never save memory for these sites.**" 
* If not listed, add it now 

## Laptop Users with Sleep Mode: 

Laptops automatically go to sleep to save battery. You must prevent this during work hours. 

**Step-by-Step Configuration:** 

**Windows Laptop:** 

1. Click the Windows Start icon 
2. Type "**Power settings**" in the search box 
3. Click "**Power and battery**" or "**Power settings.**" 
4. Find "**Screen timeout**" or "**Sleep**" setting 
5. Change it to "**Never**" while working 
6. Change it back to normal after work hours 

**macOS Laptop:** 

1. Click the Apple menu 
2. Select "**System Settings**" 
3. Click "**Lock Screen**" in the sidebar 
4. Find the sleep timeout setting 
5. Change it to "**Never**" or set a very long time 
6. After work, change it back to normal 

**Why This Matters:** 

* If your laptop sleeps, it can't receive calls 
* Zuper Connect needs your computer to be active 
* Configured exceptions in Chrome don't work if the entire computer sleeps 

# Pre-Call Checklist 

Before starting your shift, verify all these items. This checklist ensures everything is configured correctly. 

**System Level:** 

**Verification:** 

* Computer is powered on 
* Computer is NOT in sleep mode 
* Computer is fully booted (all startup programs loaded) 
* Internet connection is active and stable 
* Microphone is plugged in and connected 
* Microphone is not obviously damaged 

**Operating System Level (Windows/macOS):** 

**Verification:** 

* Microphone access is enabled in system settings 
* Google Chrome has microphone permission in system settings 
* Notifications are enabled for Chrome in system settings 
* Computer is NOT set to sleep mode 

**Chrome Browser:** 

**Verification:** 

* Google Chrome is open and running 
* Zuper Connect tab is open (can be minimized) 
* Zuper Connect tab is loaded (not showing error page) 
* You are logged into Zuper Connect 
* Microphone permission shows as "Allow" 
* Notifications permission shows as "Allow" 
* Memory Saver excludes Zuper Connect 
* Energy Saver is turned OFF 

**Hardware:** 

**Verification:** 

* Headset is plugged in (if using headset) 
* Microphone is not muted (check hardware mute button) 
* Headset volume is audible (not too low) 
* System volume is adequate (not muted) 

**Network:** 

**Verification:** 

* Internet connection is stable 
* Connection type is wired Ethernet or strong WiFi (4-5 bars) 
* No bandwidth-heavy activities running (streaming, downloads, etc.) 
* VPN is disabled (if previously configured) 

**Zuper Connect Application:** 

**Verification:** 

* You are logged in to Zuper Connect 
* Your status shows as "Available" or "Ready" 
* Your name appears in the call queue or agents list 
* You are assigned to your call group (e.g., "Back Office") 
* Call group is active and accepting calls 

**Quick Check:** 

If everything above is verified, you are ready to receive calls. If anything is NOT verified, troubleshoot using the section below before starting your shift. 

# Troubleshooting Common Issues 

**Issue 1: "Chrome wants to use your microphone" message appears on every visit** 

This message reappearing means your permission is not being saved. 

**Possible Causes:** 

* You're not logged into your Google account 
* You clicked "Block" previously and need to unblock 
* You clicked “Allow this time” or “only this time” 
* Browser cache is interfering 
* Using Incognito/Private mode 

**Solutions:** 

**Solution A - Ensure Google Account Login:** 

1. Sign out of Chrome (if signed out) 
2. Click your Chrome profile icon in the top-right corner 
3. Sign into your Google account 
4. Go back to Zuper Connect 
5. When prompted for microphone, click "Allow" 
6. The permission should now be saved 

**Solution B - Clear Browser Cache:** 

1. Open Chrome Settings 
2. Click "Privacy and security" 
3. Click "Clear browsing data" 
4. Select "All time" for time range 
5. Check "Cookies and other site data" 
6. Check "Cached images and files" 
7. Click "Clear data" 
8. Close and reopen Chrome 
9. Go to Zuper Connect 
10. Click "Allow" when prompted 

**Solution C - Manually Configure in Settings:** 

1. Follow the instructions in Section 3, Method 1 
2. Manually add Zuper Connect URL to the allowed microphone list 
3. This overrides the permission prompt behavior 

**Solution D - Use Non-Incognito Mode:** 

1. Ensure you're using regular Chrome, not Incognito/Private mode 
2. Incognito doesn't save permissions 
3. Close the Incognito window 
4. Open Zuper Connect in a regular Chrome window 

 **Issue 2: Microphone is not detected or appears as "Not Set"** 

The microphone exists but Chrome can't find it. 

**Possible Causes:** 

* Microphone not physically connected 
* System-level microphone access not granted 
* Chrome microphone permission not granted 
* Microphone drivers need updating 
* Wrong microphone selected 

**Solutions:** 

**Solution 1 - Hardware Check (START HERE):** 

1. Physically disconnect your microphone 
2. Wait 5 seconds 
3. Reconnect it firmly 
4. Wait 10 seconds for system to recognize 
5. Check Windows/macOS system settings (Section 2) to verify it appears 
6. Restart Chrome browser 
7. Go to chrome://settings/content/microphone 
8. Check if microphone now appears in the dropdown 

**Solution 2 - System Settings Check:** 

1. Verify microphone access is enabled in Windows/macOS (Section 2) 
2. Verify Chrome has microphone permission in system settings 
3. Restart your computer 
4. Try Chrome again 

**Solution 3 - Chrome Reset:** 

1. Go to chrome://settings/content/microphone 
2. Click the dropdown under "Microphone" at the top 
3. If dropdown is empty, no microphones are detected 
4. Close Chrome completely 
5. Wait 10 seconds 
6. Reopen Chrome 
7. Return to microphone settings 
8. Try selecting from dropdown again 

**Solution 4 - Update Audio Drivers:** 

**Windows**: 

1. Click Start icon 
2. Type "Device Manager" 
3. Click "Device Manager" 
4. Expand "Audio inputs and outputs" 
5. Right-click your microphone 
6. Select "Update driver" 
7. Select "Search automatically for updated driver software" 
8. Wait for update 
9. Restart computer 

**macOS**: 

1. Click Apple menu 
2. Select "System Settings" 
3. Click "General" 
4. Click "Software Update" 
5. Install any available updates 
6. Restart computer 

**Solution 5 - Try System Sound Test:** 

**Windows**: 

1. Open Windows Settings 
2. Click "System" 
3. Click "Sound" 
4. Under "Input," select your microphone 
5. Under "Test your microphone," speak 
6. Input level bar should move 
7. If no movement, hardware isn't working 

**macOS**: 

1. Open System Settings 
2. Click "Sound" 
3. Click "Input" tab 
4. Select your microphone 
5. Speak and watch the input level meter 
6. If no movement, hardware isn't working 

**Issue 3: Not receiving incoming call notifications** 

Calls might be coming in but you're not seeing notifications. 

**Possible Causes:** 

* Notifications not enabled in Chrome settings 
* Notifications blocked for Zuper Connect 
* Windows/macOS notifications disabled 
* Chrome notifications not enabled at system level 
* Sound muted 

**Solutions:** 

**Solution 1 - Check Chrome Notification Settings:** 

1. Open Chrome Settings 
2. Click "Privacy and security" 
3. Click "Site settings" 
4. Click "Notifications" 
5. Verify Zuper Connect URL is under "Allowed to send notifications" 
6. If under "Not allowed," click trash icon to remove it 
7. Refresh Zuper Connect 

**Solution 2 - Check Windows Notifications:** 

1. Click Windows Start icon 
2. Type "Notifications" 
3. Click "Notifications & actions" 
4. Find "Google Chrome" in the list 
5. Ensure toggle is ON (blue) 
6. Have colleague test by calling you 

**Solution 3 - Check macOS Notifications:** 

1. Click Apple menu 
2. Click "System Settings" 
3. Click "Notifications" 
4. Find "Google Chrome" in the list 
5. Ensure "Allow notifications" is toggled ON 
6. Test by having colleague call you 

**Solution 4 - Reallow Notifications:** 

1. Open Zuper Connect 
2. Click lock icon next to URL 
3. Click "Site settings" 
4. Find "Notifications" 
5. Change from "Block" to "Allow" 
6. Refresh page 
7. Click "Allow" when Chrome prompts 

**Solution 5 - Check System Volume:** 

1. Verify computer volume is NOT muted 
2. Check volume level (not too low) 
3. Have colleague test call 
4. Notification should appear and play sound 

**Solution 6 - Check Browser Notification Center:** 

1. Click notification icon in Chrome address bar 
2. Verify it shows "Allow" for Zuper Connect 
3. If shows "Block," click to unblock 
4. Have colleague test call 

 **Issue 4: Incoming calls are not reaching the agent** 

Calls are coming in but not reaching you. 

**Possible Causes:** 

* Your status is not "Available" 
* Your status is "Busy" or "Offline" 
* Zuper Connect tab is closed 
* You're not assigned to the call group 
* Call group is inactive 
* Business hours settings are wrong 

**Solutions:** 

**Solution 1 - Check Agent Status:** 

1. Open Zuper Connect 
2. Look for your status indicator 
3. Status should show "Available" or "Ready" 
4. If status shows "Busy," click to change to "Available" 
5. If status shows "Offline," click to change to "Available" 
6. Have manager or colleague test call to you 

**Solution 2 - Verify Tab is Open:** 

1. Check Chrome to ensure Zuper Connect tab is open 
2. If closed, reopen it immediately 
3. Log in 
4. Set status to "Available" 
5. Refresh the page (F5) 
6. Test call 

**Solution 3 - Verify Call Group Assignment:** 

1. Go to Zuper Connect settings (if available to you) 
2. Look for your user profile or user settings 
3. Verify you are assigned to your call group 
4. If not assigned, ask administrator to assign you 
5. Contact: \[Administrator name and contact] 

**Solution 4 - Check Call Group Status:** 

1. Look for call group settings in Zuper Connect 
2. Verify your call group is "active" or "enabled" 
3. Verify the group has agents assigned (including you) 
4. Verify group has incoming calls enabled 
5. Contact administrator if any issues 

**Solution 5 - Verify Business Hours:** 

1. Ask administrator to verify business hours are set correctly 
2. If currently outside business hours, calls may route differently 
3. After-hours calls may go to voicemail or CSR Agent 
4. Contact: \[Administrator name and contact] 

**Solution 6 - Restart Chrome:** 

1. Close all Chrome windows 
2. Wait 10 seconds 
3. Reopen Chrome 
4. Open Zuper Connect 
5. Log in and set status to "Available" 
6. Have colleague test call  

**Issue 5: Poor call quality, echo, or audio lag** 

You're receiving calls but audio quality is bad. 

**Possible Causes:** 

* Weak WiFi connection 
* Bandwidth being used by other applications 
* Headset quality issues 
* Chrome using too much memory 
* Network congestion 
* VPN interference 

**Solutions:** 

**Solution 1 - Check Network Connection (START HERE):** 

1. Test internet speed at [speedtest.net](http://speedtest.net) 
2. Verify speeds are at least 2.5 Mbps up/down 
3. If below minimum, contact IT or ISP 
4. Switch from WiFi to wired Ethernet if possible 
5. Reconnect to router 
6. Have colleague test call after connection change 

**Solution 2 - Close Bandwidth-Heavy Applications:** 

1. Close streaming applications (YouTube, Netflix, Spotify) 
2. Stop any downloads or uploads 
3. Close video conferencing applications (Zoom, Teams) 
4. Close cloud sync (OneDrive, Google Drive, iCloud) 
5. Pause automatic backups 
6. Close other heavy browser tabs 
7. Have colleague test call 

**Solution 3 - Check Headset Quality:** 

1. If using Bluetooth headset, try wired headset instead 
2. Verify headset is fully plugged in 
3. Try a different headset if available 
4. Check if headset cable is damaged 
5. Verify headset speakers and mic work 
6. Have colleague test call with different headset 

**Solution 4 - Free Up Browser Memory:** 

1. Close other Chrome tabs (keep only Zuper Connect) 
2. Go to Chrome Settings → Privacy and security → Clear browsing data 
3. Clear cache and cookies 
4. Restart Chrome 
5. Reopen Zuper Connect 
6. Have colleague test call 

**Solution 5 - Check for Browser Extensions:** 

1. Some extensions can interfere with audio 
2. Go to chrome://extensions 
3. Disable extensions one by one (except critical ones) 
4. Test call after each disable 
5. Re-enable non-problematic extensions 
6. Keep problematic extensions disabled 

**Solution 6 - Isolate Network Issues:** 

1. Ask colleague with good audio quality to check their setup 
2. If their audio is good and yours is poor, likely your internet 
3. Try moving closer to WiFi router 
4. Try different computer on same network 
5. If multiple people have issues, network upgrade needed 
6. Contact IT or ISP 

**Solution 7 - Disable VPN:** 

1. If using VPN, temporarily disable it 
2. Test call without VPN 
3. If call quality improves, VPN is the issue 
4. Contact IT to enable split-tunneling for Zuper Connect 
5. Or use direct internet connection without VPN 

 **Issue 6: Call drops suddenly or disconnects** 

Calls start fine but suddenly disconnect. 

**Possible Causes:** 

* Unstable internet connection 
* WiFi signal drops 
* Energy Saver throttling the browser 
* Memory Saver closing the tab 
* Router resets or disconnects 
* Network congestion 

**Solutions:** 

**Solution 1 - Check Network Stability:** 

1. Check WiFi signal strength (look for 4-5 bars) 
2. If signal weak, move closer to router 
3. Check if router is overheating (let it cool down) 
4. Restart router (unplug 30 seconds, plug back in) 
5. Switch to wired Ethernet if available 
6. Have colleague test call 

**Solution 2 - Verify Browser Configuration:** 

1. Ensure Energy Saver is turned OFF (Section 5) 
2. Ensure Zuper Connect is in Memory Saver exceptions (Section 5) 
3. Go to Chrome Settings → Performance 
4. Verify Memory Saver shows Zuper Connect in exceptions 
5. Verify Energy Saver toggle is OFF 
6. Restart Chrome 
7. Test call 

**Solution 3 - Close Resource-Heavy Applications:** 

1. Close other applications using internet 
2. Close streaming services 
3. Stop downloads/uploads 
4. Close other browser windows 
5. Close video conferencing apps 
6. Test call 

**Solution 4 - Test Internet Stability:** 

1. Go to [speedtest.net](http://speedtest.net) 
2. Run speed test 
3. Verify speeds are stable 
4. If speeds fluctuate significantly, network issue 
5. Contact IT or ISP about unstable connection 
6. Ask about QoS (Quality of Service) configuration for VoIP 

**Solution 5 - Check Firewall/Security:** 

1. If using corporate network, ask IT to check firewall logs 
2. Verify Zuper Connect domains are whitelisted 
3. Verify firewall isn't timeout connections 
4. Ask IT to check QoS prioritization for Zuper 
5. Ensure WebRTC is not being blocked 

# Initial Testing & Verification 

Before fully relying on Zuper Connect, perform these tests to verify everything is working. 

**Step 1: Test Microphone Access** 

**Objective:** Verify Chrome can detect and access your microphone. 

**Instructions:** 

1. Open Zuper Connect in Chrome 
2. Look for an audio or microphone test feature in the application 
3. If available, click "Test Microphone" or "Audio Test" 
4. Speak into your microphone at normal conversation volume 
5. Verify that Zuper Connect detects your audio:  
   * Audio level meter should show green/active 
   * System should indicate "Microphone detected" 
   * System should display input level moving as you speak 

**If Test Passes:** 

* Your microphone is working correctly 
* Continue to Step 2 

**If Test Fails:** 

* Microphone is not detected 
* Return to Section 7: Hardware & Microphone Configuration 
* Troubleshoot using Issue 2 (microphone not detected) 
* Retry test after troubleshooting 

**Step 2: Test Incoming Call Notification** 

**Objective:** Verify that you receive notifications when called. 

**Instructions:** 

1. Ensure your Zuper Connect status is set to "Available" 
2. Have a colleague or manager call your Zuper Connect number  
   * Example: If your number is +1 570 227 5019, have them call that number 
3. Verify that you receive a notification:  
   * You should see a notification on your computer screen 
   * Notification should show caller's name/number 
   * You should hear a notification sound (if not muted) 
   * The notification should appear even if you're on a different browser tab 

**If Test Passes:** 

* Incoming call notifications are working 
* Continue to Step 3 

**If Test Fails:** 

* Notifications are not working 
* Return to Section 4: Desktop Notifications Setup 
* Troubleshoot using Issue 3 (not receiving notifications) 
* Retry test after troubleshooting 

**Step 3: Test Call Connection & Audio Quality** 

**Objective:** Verify you can answer a call and hear/speak clearly. 

**Instructions:** 

1. When notification appears, answer the call using the Zuper Connect interface 
2. Once a call is answered:  
   * **Verify you can hear:** Ask the caller to speak. You should hear them clearly through your headset/speakers 
   * **Verify they can hear you:** Speak naturally. Ask the caller to confirm they can hear you 
   * **Test audio quality:** Have a brief conversation. Listen for:  
   * Clear audio (no distortion) 
   * No echo 
   * No lag (conversation flows naturally) 
   * Appropriate volume levels 
3. If everything sounds good, end the call 

**If Test Passes:** 

* Call audio is clear and working correctly 
* Continue to Step 4 

**If Test Fails:** 

* Audio quality is poor (echo, lag, distortion, etc.) 
* Return to Section 8: Network & Internet Requirements 
* Troubleshoot using Issue 5 (poor call quality) 
* Retry test after troubleshooting 

**Step 4: Test Voicemail Fallback** 

**Objective:** Verify that calls are routed to voicemail when you're unavailable. 

**Instructions:** 

1. Set your status to "Offline" or "Unavailable" in Zuper Connect 
2. Have a colleague call your Zuper Connect number 
3. Verify that you do NOT receive a notification (since you're offline) 
4. Verify that the caller reaches voicemail:  
   * Caller should hear a voicemail greeting 
   * Caller should be able to leave a message 
   * Voicemail should be saved in Zuper Connect 
5. After the test, log back in and check your voicemail:  
   * You should see the test voicemail in your voicemail inbox 
   * Listen to the recorded message 
   * Verify audio quality is good 

**If Test Passes:** 

* Voicemail system is working correctly 
* Continue to Step 5 

**If Test Fails:** 

* Voicemail not capturing calls correctly 
* Contact Zuper support: \[support contact] 
* Your administrator may need to check voicemail settings 

**Step 5: Test After-Hours Routing** 

**Objective:** Verify that after-hours calls are handled by the AI Responder. 

**Instructions:** 

1. (This may require administrator help) Simulate after-hours status in Zuper Connect  
   * Or ask administrator to temporarily set after-hours 
   * Or wait until after actual business hours 
2. Have a colleague call your Zuper Connect number 
3. Verify that the caller does NOT reach an agent 
4. Verify that the caller reaches the AI Responder:  
   * Caller should hear an automated greeting message 
   * Caller should be able to interact with the AI system 
   * Call should be recorded or logged 
5. Ask the colleague what they experienced:  
   * Did they hear a greeting message? 
   * Could they understand the message? 
   * Were they able to leave a message? 

**If Test Passes:** 

* After-hours handling is working correctly 
* All systems are ready for production 
* Proceed to Part 3 (Daily Operating Procedures) 

**If Test Fails:** 

* After-hours routing needs adjustment 
* Contact administrator: \[administrator contact] 
* Check after-hours settings in Zuper Connect 

**During Your Shift** 

These are the procedures to follow while working. 

**Chrome Browser:** 

* Keep the Zuper Connect tab open and visible (or minimized but open) 
* Keep Chrome browser running (do not close it) 
* Do NOT close the Zuper Connect tab 
* Chrome can be in the background; it doesn't need to be your active window 

**Zuper Connect:** 

* Maintain your "Available" status when you're ready to accept calls 
* Change your status to "Busy" if you need to complete a task (new calls won't route to you) 
* Change your status to "On Break" if you need a break (but stay logged in) 
* Do NOT set status to "Offline" unless you're leaving for the day 

**Calls:** 

* Use your headset for all calls 
* Speak clearly and professionally 
* Follow your company's call handling procedures 
* Take notes as needed 

**If You Need to Step Away:** 

* Do NOT close Chrome 
* Do NOT close Zuper Connect tab 
* Do NOT log out 
* Instead, set your status to "On Break" or "Busy" 
* This prevents new calls from routing to you 
* Other agents in your call group will receive the calls 
* When you return, set status back to "Available" 

**Notifications:** 

* If you'll be in meetings, you can silence notifications 
* Click the notification bell icon if you need to temporarily silence calls 
* But do NOT go offline or log out 
* Return notification settings to normal before resuming calls 

**End of Shift** 

Follow these steps when you finish work. 

**Step-by-Step:** 

1. **Set Your Status to Offline** 
   * Click your status indicator 
   * Select "Offline" or "Unavailable" 
   * This tells the system you're no longer available for calls 
2. **Check for Voicemails** 
   * Look for voicemail inbox in Zuper Connect 
   * Note any voicemails that came in after you went offline 
   * Listen to any important voicemails 
   * Make notes of any action items 
3. **Close the Zuper Connect Tab** 
   * You can now close the Zuper Connect tab 
   * This is optional; you can leave it open for the next shift 
4. **Close Chrome** (Optional) 
   * You can close Chrome if you're finished for the day 
   * Or leave it open if you'll return later 
5. **Log Off Your Computer** (Optional) 
   * If finished for the day, you can log off 
   * Or lock your computer if you'll return later 
   * Or shut down if leaving for the day 

**Important:** 

* Never leave your status as "Available" overnight 
* Always set the status to "Offline" before leaving 
* Otherwise, calls may come in to you when you're not working 
* This affects service to your customers 

# Quick Reference Guide 

**Common Chrome URLs (Paste into Address Bar):** 

* **Microphone Settings:** chrome://settings/content/microphone 
* **Notification Settings:** chrome://settings/content/notifications 
* **Performance Settings:** chrome://settings/performance 
* **Site Settings:** chrome://settings/content 
* **All Settings:** chrome://settings 
* **Extensions:** chrome://extensions 
* **Clear Browsing Data:** chrome://settings/clearBrowserData 

**Common Keyboard Shortcuts:** 

* **Refresh Page:** F5 
* **Hard Refresh (clear cache):** Ctrl+Shift+R (Windows) or Cmd+Shift+R (macOS) 
* **Open Settings:** Ctrl+Comma (Windows) or Cmd+Comma (macOS) 
* **Open Developer Tools:** F12 or Ctrl+Shift+I (Windows) 
* **Find:** Ctrl+F (Windows) or Cmd+F (macOS) 

**Quick Troubleshooting Flow:** 

1. **Can't hear anything?** → Check speaker volume → Check headset → Check audio settings 
2. **Microphone not working?** → Check physical connection → Restart Chrome → Check system settings 
3. **Missing calls?** → Check status (should be "Available") → Check notifications → Restart Chrome 
4. **Poor audio quality?** → Check internet speed → Close other apps → Try wired connection 
5. **Chrome keeps crashing?** → Close other tabs → Clear cache → Restart computer 

**When to Contact Support:** 

| **Issue** | **Contact** | **When** |
| :- | :- | :- |
| Microphone not detected | IT Support | Immediately |
| Not receiving calls | Call Admin | Immediately |
| Poor call quality | Zuper Support | After testing internet |
| Notification not working | Zuper Support | After checking settings |
| Password reset | IT Support | Before shift |
| General training | Manager | Before shift |

# FAQs 

<AccordionGroup>
  <Accordion title="Do I need to keep Chrome open all day?">
    Yes, Chrome must run for your entire shift. You can minimize the Zuper Connect tab, but Chrome must stay active in the background so that you continue to receive calls.
  </Accordion>

  <Accordion title="What if I need to restart my computer during my shift?">
    Inform your manager before you restart your computer, and then follow these steps:

    1. Set your status to **Offline**, and close Zuper Connect.
    2. Restart your computer.
    3. Open Chrome after your computer restarts.
    4. Go to Zuper Connect, and log in.
    5. Set your status to **Available**.

    Your colleagues cover your calls while you are unavailable.
  </Accordion>

  <Accordion title="Can I use Zuper Connect on my phone?">
    The Zuper Connect web application is designed for Chrome browsers on computers. Some features might work on mobile browsers, but the full application is optimized for desktop Chrome. Contact your administrator to ask about mobile options.
  </Accordion>

  <Accordion title="What if my internet goes down?">
    If your internet disconnects, Zuper Connect disconnects immediately, and incoming calls route to voicemail or to other agents.

    When your internet reconnects, follow these steps:

    1. Open Zuper Connect, and log in.
    2. Set your status to **Available**.
    3. Check for voicemails you might have missed while you were offline.
  </Accordion>

  <Accordion title="Can I use two browsers, such as Chrome and Firefox, at the same time?">
    Zuper Connect is optimized for Chrome. Using another browser might cause issues, for example:

    * Firefox might handle permissions differently.
    * Safari has different notification support.

    Use only Chrome for Zuper Connect.
  </Accordion>

  <Accordion title="What if I forget to set my status to Offline when I leave?">
    Zuper Connect continues to route calls to you if you forget to set your status to **Offline**. The following might happen as a result:

    * You are not at your computer to answer.
    * Calls ring repeatedly, and then go to voicemail.
    * Your manager might reach out to you.
    * You see missed calls and voicemails the next morning.

    Always set your status to **Offline** at the end of your shift.
  </Accordion>

  <Accordion title="Can I take calls on Wi-Fi, or do I need wired internet?">
    You can use either connection type:

    * Wi-Fi works well if the signal is strong, for example, four to five bars, and you are close to the router.
    * Wired Ethernet offers more reliable call quality.

    Use wired Ethernet whenever possible for the best call quality.
  </Accordion>

  <Accordion title="Why do I get echo on calls?">
    Echo usually results from one of the following causes:

    * Your microphone is picking up sound from your speakers.
    * Network lag is causing delayed audio feedback.
    * Your headset is causing feedback.
    * Another application is using your audio.

    To fix echo, follow these steps:

    1. Use a headset instead of speakers.
    2. Close other applications that use audio.
    3. Check your network connection.
    4. Restart Chrome.
  </Accordion>

  <Accordion title="What if Zuper Connect runs very slowly?">
    Slow performance might result from one of the following causes:

    * You have too many browser tabs open.
    * Your system has low memory available.
    * Your internet connection is slow.
    * Your Chrome version is outdated.
    * Your browser cache needs clearing.

    To fix slow performance, follow these steps:

    1. Close other browser tabs.
    2. Restart Chrome.
    3. Clear your browser cache.
    4. Update Chrome to the latest version.
    5. Check your internet speed.

    If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>

  <Accordion title="Can multiple people use Zuper Connect on the same computer?">
    Only one person can log in to Zuper Connect at a time. If two people need to share a computer, follow these steps:

    1. Ask the first person to log off Zuper Connect.
    2. Ask the first person to log off their Chrome account, or open an Incognito window for the second person.
    3. Ask the second person to log in with their own credentials.

    We recommend that each person uses their own computer where possible.
  </Accordion>

  <Accordion title="Do I need to install Zuper Connect or anything else?">
    No, you do not need to install anything. Zuper Connect is a web application that works entirely within your Chrome browser, with no plugins or extensions required. Go to the URL provided by your administrator, and log in.
  </Accordion>
</AccordionGroup>


## Related topics

- [Using Chrome Extension](/Zuper_Connect/Chrome_Extension.md)
- [Using Connect on Web](/Zuper_Connect/Using_Connect_on_web.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.