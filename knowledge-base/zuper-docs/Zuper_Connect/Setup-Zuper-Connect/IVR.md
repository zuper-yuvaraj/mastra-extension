---
title: "Configuring IVR"
source: https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/IVR.md
fetched_at: 2026-10-06T13:30:01.435Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring IVR 

# Overview 

The IVR (Interactive Voice Response) feature in Zuper Connect allows you to create automated menu options for incoming calls, enabling callers to self-direct to the appropriate department or service by pressing keys on their phone. This simplified guide covers setup, configuration, and troubleshooting. 

# What is IVR? 

IVR is an automated phone system that allows callers to interact with a menu using their phone keypad. When a caller dials your business number, they hear a pre-recorded message with options like: "Press 1 for Sales, Press 2 for Support, Press 3 for Billing". The system then routes the call based on the caller's selection. 

## Key Features & Limitations 

**Features:** 

* Automated Call Routing: Direct callers to specific call groups or users based on their keypad selection 
* Custom Greeting Messages: Configure personalized welcome messages using Text-to-Speech 
* Multiple Voice Options: Choose from various voice profiles (Alice, Brian, etc.) 
* Flexible Ring Duration: Set how long calls ring before fallback options activate 
* Fallback Options: Configure voicemail or external number forwarding if no one answers 

**Important Limitations:** 

* **Single-Level IVR Only**: Zuper Connect supports one level of IVR with no branching. You cannot create sub-menus. 
* **Call Groups Disabled When IVR is Active**: When you enable IVR for a call route, the Call Groups feature will be automatically toggled OFF. You cannot use both simultaneously. 

# Prerequisites 

* Admin Access: You must have administrator permissions in Zuper Connect 
* Call Route Created: At least one call route must exist in your system 
* Call Groups Configured: Set up call groups that will receive routed calls 
* Phone Number: A phone number assigned to your Zuper Connect account 

# Setting Up IVR 

**Step 1: Navigate to Call Settings** 

* Log in to your Zuper Connect account 
* From the left navigation menu, select **Settings → Zuper Connect → Call Settings**. 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR3.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=14f474449d54d42631508525997f8db6" alt="IVR3 Pn" width="1915" height="774" data-path="images/IVR3.png" />

* On the Call Settings page, navigate to the **Call Routings** tab to view existing routes and associated phone numbers. 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR4.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=55ed47c2c0c2a33e8d7e0d3462093a0c" alt="IVR4 Pn" width="1635" height="515" data-path="images/IVR4.png" />

**Step 2: Edit an Existing Call Route** 

* Locate the call route you want to configure with IVR. 
* Click on the New Route or the Edit icon (pencil icon) next to it. 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR5.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=c7874a0d2ba9f546de84c49cc5b13b67" alt="IVR5 Pn" width="1626" height="679" data-path="images/IVR5.png" />

* The Edit Call Route panel will open on the right side 

**Step 3: Enable IVR** 

* In the Edit Call Route panel, locate the IVR section. 
* Toggle the IVR switch to ON (it will turn blue) 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR6.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=b8dc3813d08129859072066a891ceb5e" alt="IVR6 Pn" width="486" height="233" data-path="images/IVR6.png" />

* A confirmation dialog will appear. Click Continue to proceed 
* The Call Groups toggle will automatically turn OFF 

## Configuring IVR Options

**1. Greeting Message Configuration**

This is the message callers hear when they first connect to your IVR system. 

**Configuration Options:** 

* Type of Message: Select Text to Speech (default) 
* Voice: Choose from available voice profiles (Alice, Brian, etc.) 
* Message Text: Enter the greeting message that will be read to callers 

**Example Greeting:** 

"Thank you for calling Zuper Connect. Press 1 for Sales, Press 2 for Support, Press 3 for Billing." 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR7.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=facbc453947cb7eb3f213ad70e82627a" alt="IVR7 Pn" width="482" height="674" data-path="images/IVR7.png" />

**2. IVR Menu Options** 

Configure what happens when callers press specific keys. For each menu option, configure: 

**Press (Key Number)** 

* Select which key the caller should press (0-9) 
* Each key can only be assigned once. 

**Action** 

Choose what happens when the key is pressed: 

* **Call Group**: Route to a specific call group 
* **User**: Route to a specific user 
* **Voicemail**: Send directly to voicemail 
* **External Number**: Forward to an external phone number 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR11.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=9f825c028f85b354e9f1c43c12b9893e" alt="IVR11 Pn" width="430" height="309" data-path="images/IVR11.png" />

**Ring to** 

Select the destination (call group, user, etc.) based on your Action selection. 

**Ring for** 

Set the duration the call will ring before triggering fallback options (15, 30, 45, 60, 90, or 120 seconds). 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=923f6f6048b39c160837ca637bf8045f" alt="IVR Pn" width="475" height="296" data-path="images/IVR.png" />

**3. If No One Answers (Fallback Options)**

Configure what happens if the routed call is not answered within the specified ring duration. 

**Forward to an External Number** 

* Select this option and enter the external phone number. 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR9.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=4cb821c427b9a2d3f7760813eb0bbae8" alt="IVR9 Pn" width="422" height="334" data-path="images/IVR9.png" />

**Voicemail (Default)** 

Choose your preferred format to play a voicemail message for the caller. 

* Type of Message: Text to Speech 
* Voice: Select voice profile (e.g., Alice) 
* Message Text: Enter the voicemail greeting. 

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR10.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=2e5cccca176a7206ee95752566acc185" alt="IVR10 Pn" width="425" height="333" data-path="images/IVR10.png" />

 

**Step 4: Save Your Configuration** 

* Review all your IVR settings 
* Click the "**Update**" button at the bottom right of the panel 
* Your IVR configuration is now active.

<img src="https://mintcdn.com/zuperinc/SRi64imnmqNfn83u/images/IVR8.png?fit=max&auto=format&n=SRi64imnmqNfn83u&q=85&s=d70d36dc58e6fde2eea478a4db4140a3" alt="IVR8 Pn" width="429" height="826" data-path="images/IVR8.png" />

 

# Troubleshooting 

1. **IVR Toggle Won't Turn On** 

* Toggle Call Groups OFF first, then enable IVR 
* Ensure you have administrator access 
* Create a call route if one doesn't exist 

2. **Callers Not Hearing IVR Menu** 

* Re-edit the call route, verify IVR is ON, and click "**Update.**" 
* Ensure you've entered text in the greeting message field 
* Try changing the voice profile or re-entering the message text 

3. **Key Presses Not Working** 

* Verify each menu option has a key, an action, a destination, and a ring duration 
* Check that no two options use the same key number 
* Ensure the selected call group or user still exists and is active 

4. **Calls Not Routing to Correct Destination**

* Edit each option and verify the "Ring to" dropdown shows the correct destination 
* Check that call groups have active members 
* Verify that users in the destination group are logged in and available 

5. **Voicemail Not Working**

* Select "Voicemail" in the "If no one answers" section and configure the message 
* Enter text in the voicemail message field 
* Reduce the "Ring for" duration if calls are taking too long to reach voicemail 

# Important Behaviors 

1. **IVR and Call Groups Mutual Exclusivity:** 

IVR ON = Call Groups OFF | Call Groups ON = IVR OFF 

You cannot have both features active simultaneously on the same call route. When IVR is enabled, the system automatically disables Call Groups. 

2. **Configuration Loss Warning:** 

When you toggle IVR OFF, you will lose all your current IVR configuration (greeting messages, menu options, ring durations, and fallback settings). Before disabling IVR, document your configuration or take screenshots. 


## Related topics

- [Creating Call Routing ](/Zuper_Connect/Setup-Zuper-Connect/call_routing.md)
- [Configuring Expenses](/Settings/Modules/Jobs/Configuring_expense.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.