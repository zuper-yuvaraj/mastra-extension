---
title: "Resetting Dialer Status"
source: https://docs.zuper.co/Zuper_Connect/Reset-dialer.md
fetched_at: 2026-10-06T13:30:04.615Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Resetting Dialer Status 

## **Overview**

Sometimes, your dialer status in Zuper Connect does not update automatically after a call ends. When this happens, your status remains **Unavailable** or **Busy**, and you cannot make or receive calls until you reset it manually.

## How to identify when a user needs a status reset?

When a call does not end cleanly, the dialer session occasionally stays open. Zuper Connect continues to treat the call as active, which keeps your status locked as **Unavailable** or **Busy**. The user will see one or more of the following signs:     

| **What the user sees** | **Detail** |
| :- | :- |
| Dialer icon | Shows Call in Progress continuously. |
| Dialer window | Does not open when selected. |
| Availability status | Shows as Unavailable or Busy — the user cannot change it. |
| Calls | The user cannot make or receive calls. |

<Note>
  **Note:** The available statuses in Zuper Connect are: **Available**, **Unavailable**, **Busy**, and **Offline**.
</Note>

## How to reset a User’s dialer status?

<Frame>
  **Navigation**:  *Settings  →  Zuper Connect  →  Numbers & User Permissions  →  User Permissions*
</Frame>

1.  Select the **Settings** module from the left navigation menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD1.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=50abcac1aee12237175b685a3c846e6c" alt="FRD1" width="1920" height="878" data-path="images/FRD1.png" />
</Frame>

 2. Select **Zuper Connect** from the settings menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD2.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=7ba1241134e9c888c2a3c9ca0ad914d0" alt="FRD2" width="1920" height="878" data-path="images/FRD2.png" />
</Frame>

3. Go to **Numbers & User Permissions**. The page opens on the **Phone Numbers** tab by default. Select the **User Permissions** tab.

<Frame>
  <img src="https://mintcdn.com/zuperinc/CWMUuGhnVrO20EzK/images/FRD3-1.png?fit=max&auto=format&n=CWMUuGhnVrO20EzK&q=85&s=90636350f978277408680e22a8388b39" alt="FRD3 1" width="1920" height="878" data-path="images/FRD3-1.png" />
</Frame>

<Tip>
  **Tip**: Use the **Search User** or **Email** field at the top-right of the table to quickly find the user.
</Tip>

4. Locate the user in the list. You will see all Zuper Connect users and their current status.
   <Note>
     Note: This action applies only when the user's status shows as **Unavailable** or **Busy**. If the status shows **Offline**, see the FAQ at the end.
   </Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD4.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=c93b0ff0cfb8d9ab70c04d7efb5f51b7" alt="FRD4" width="1764" height="701" data-path="images/FRD4.png" />
</Frame>

5. Select the user's status. A confirmation dialog appears. The display message depends on the user's current status: **If the status is Unavailable:** Are you sure you want to mark this user as Available?
   <Frame>
     <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD8.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=bb3100b3f7eb6fb6a7a19fdeab2812ba" alt="FRD8" width="1782" height="707" data-path="images/FRD8.png" />
   </Frame>
   **If the status is Busy:** 'Are you sure you want to mark this user as Available?' If the user is currently on a call, the call will be automatically disconnected.
   <Frame>
     <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD5.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=fae8b3d4b5b4c0b1d8e2cc2520b19463" alt="FRD5" width="1768" height="714" data-path="images/FRD5.png" />
   </Frame>
6. Select **Confirm** to proceed, or select **Cancel** to exit without making changes.

   <AccordionGroup>
     <Accordion title="Unavailability → Availability Status">
       • If the status shows **Unavailable**:  "*Are you sure you want to mark this user as Available?* "

       <Frame>
         <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD10.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=644c46aed55c0249b3e3db8f800e3768" alt="FRD10" width="1782" height="717" data-path="images/FRD10.png" />
       </Frame>
     </Accordion>

     <Accordion title="Busy → Availability Status">
       • If the status shows **Busy:** "*Are you sure you want to mark this user as Available*? If the user is currently on a call, the call will be automatically disconnected.

       <Frame>
         <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD6.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=e52522e7011e6af15b1ad2c18c66c42a" alt="FRD6" width="1772" height="716" data-path="images/FRD6.png" />
       </Frame>
     </Accordion>
   </AccordionGroup>
7. Your dialer status updates automatically.

<Frame>
  <img src="https://mintcdn.com/zuperinc/mujLtsQGAMCasb1B/images/FRD9.png?fit=max&auto=format&n=mujLtsQGAMCasb1B&q=85&s=5a6975ede920a4967f13acaa5fee923b" alt="FRD9" width="1773" height="712" data-path="images/FRD9.png" />
</Frame>

## What happens after you reset the dialer?

When you set the status to **Available**, Zuper automatically:

* Updates the user's availability status to **Available**
* Refreshes the user's dialer session
* Clears any previous call state associated with the user

The user's status updates to **Available** immediately. No logout, refresh, or further action is needed. They can start making and receiving calls right away.

***

## Troubleshooting

**The status does not update after the reset**

**Symptom:** The status badge still shows the previous state after you select **Available**.

1. Refresh the **User Permissions** page.
2. Locate the user and check the **Status** column.
3. If the status remains unchanged, wait 30 seconds and refresh again.
4. If the status does not update, ask the user to close and reopen their browser tab.

**The user can see the dialer, but cannot make or receive calls**

**Symptom:** The dialer opens after the reset but calls do not connect.

1. Confirm the user's status shows **Available** in the **User Permissions** tab.
2. Ask the user to check their availability status inside the dialer. It must also be set to **Available**.
3. Ask the user to verify that their browser microphone permissions are enabled.
4. Ask the user to use Google Chrome. This is the recommended browser for Zuper Connect.

If the issue continues, contact [support@zuper.co](mailto:support@zuper.co).

***

## FAQs

<AccordionGroup>
  <Accordion title="Does the user need to do anything after the admin resets their dialer?">
    No, the user does not need to do anything further. Their status updates to **Available** immediately, with no logout, refresh, or other action required. They can start making and receiving calls right away.
  </Accordion>

  <Accordion title="Will the reset affect any call recordings or call logs?">
    No, the reset only updates the user's session status. Zuper does not delete or modify any existing call logs or recordings.
  </Accordion>

  <Accordion title="Can I reset the dialer for multiple users at the same time?">
    No, you must update each user individually from the **User Permissions** tab.
  </Accordion>

  <Accordion title="What statuses can a user have in the User Permissions tab?">
    A user can show as **Available**, **Unavailable**, **Busy**, or **Offline**. The reset sets the user to **Available** and refreshes their dialer session.
  </Accordion>

  <Accordion title="What if the user's status shows Offline instead of Call in Progress?">
    If a user reports that they cannot use the dialer and their status shows **Offline**, confirm that they are logged in and that **Zuper Connect** is enabled for their account. This reset applies only to users whose status shows as **Unavailable** or **Busy**; it does not apply to users whose status shows as **Offline**.

    If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

## Related Articles

* [Using Zuper Connect on the web](https://docs.zuper.co/Zuper_Connect/Using_Connect_on_web)
* [Managing numbers and user permissions](https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/User_permissions)
* [Zuper Connect overview](https://docs.zuper.co/Zuper_Connect/Overview)


## Related topics

- [Connect Dialer in HubSpot](/Zuper_Connect/Zuper-Connect-Dialer-in-HS.md)
- [Using Chrome Extension](/Zuper_Connect/Chrome_Extension.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.