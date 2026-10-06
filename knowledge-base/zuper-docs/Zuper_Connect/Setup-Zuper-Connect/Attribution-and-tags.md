---
title: "Configuring Attribution and Tags"
source: https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/Attribution-and-tags.md
fetched_at: 2026-10-06T13:30:01.569Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Attribution and Tags

## Overview 

The Attribution feature in Zuper Connect lets you assign a marketing source (such as Google Ads, Facebook, Yelp, or TikTok) to each Zuper Connect phone number and organize them with tags. 

This provides better visibility into where inbound calls and messages originate, helping you analyze marketing ROI and campaign performance directly within Dialer and Analytics. 

By linking each number to marketing sources, admins can also identify which campaigns drive the highest customer engagement and make informed, data-driven marketing decisions. 

## Key Features 

1. **Attribution Assignment** 

Link each Zuper Connect phone number to a marketing source such as Google Ads, Facebook, Yelp, Instagram, TikTok, or YouTube. 

This helps you track which campaign each number belongs to and easily identify where your inbound leads and calls are coming from. 

2. **Custom Attribution** 

Create and name custom attributions for campaigns that are not included in the predefined library. 

This flexibility allows you to include niche or internal campaigns, ensuring all your marketing sources are accurately represented and recorded. 

3. **Date and Time Scheduling** 

Define start and end dates and times to control when each attribution to be active. 

This ensures campaign data remains accurate, only active campaigns contribute to your analytics while expired ones are automatically archived. 

4. **Notes Field** 

Add campaign context such as ID, offer details, creative references, or tracking parameters. 

This allows marketing and operations teams to quickly understand campaign intent and performance without switching between tools. 

5. **Attribution Status Tracking** 

Automatically view each attribution’s status as **Active**, **Upcoming**, **Expired**, or **Always Active**, based on your date and time settings. 

This makes it easy to monitor campaign lifecycles and maintain up-to-date visibility into active promotions. 

6. **Integrated Display Across Zuper Modules** 

* **Dialer**: Shows the attribution icon and name beside the caller ID in the Dialer, making the lead source instantly visible for incoming and outgoing calls. 
* **Sidekick**: Displays the active attribution for the phone number in the call context, helping agents understand the lead source during live calls and follow-ups. 
* **Analytics**: Enables filtering and reporting by attribution, helping teams measure campaign effectiveness and ROI. 
* **Settings → Numbers**: Displays attribution icons next to each number for quick visual recognition and easier number management. 

7. **Tag Organization** 

Group and manage phone numbers by campaign or source using tags. 

Tags improve searchability, simplify campaign management, and help teams filter and organize communication sources efficiently. 

## Limitations 

1. **No Automated Attribution:** The system does not yet auto-assign attributions based on call source or UTM parameters. 
2. **Single Attribution per Number:** Each phone number supports only one active attribution at a time. 
3. **No API Integration:** Direct integration with third-party ad platforms (e.g., Google Ads API, Facebook Ads Manager) is not yet supported. 
4. **Manual Updates Required:** Changes to campaigns or dates must be updated manually by admins. 
5. **Reporting Scope:** Attribution filtering is currently limited to Dialer and Analytics modules (exportable reports planned for future release). 
6. **Date Range Conflicts:** Overlapping date ranges may cause attribution visibility issues if not managed properly. 

## Prerequisites 

* Available for customers with Zuper Connect enabled. 
* You must have the required permissions to configure phone numbers and manage attribution sources in Zuper Connect. 

## Configuring Attributions & Tags 

**Step 1: Open Phone Numbers Settings**

* Log in to your Zuper Connect account. 
* From the left navigation menu, select **Settings**→ **Zuper Connect**→ **Numbers & User Permissions**→ **Phone Numbers**. 

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri2.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=6bffbda5bac31f283e45d034ba487bdb" alt="Attri2" width="1920" height="878" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri2.png" />

* On the Phone Numbers listing page, you can view the following details:
  <Accordion title="Phone number listing page details">
    1. **Phone Number**: Displays the registered business phone number along with its number type (Local or Toll-Free).
    2. **Alias Name**: The custom name assigned to the phone number to help identify its purpose.
    3. **Attribution**: Shows the marketing or attribution source linked to the number (such as Google Ads, Instagram, YouTube), along with its attribution status:
       | Status | Description |
       | :-: | :-: |
       | Active | The attribution source is currently enabled and actively tracking calls. |
       | Upcoming | The attribution source is scheduled to become active at a future date. |
       | Always Active | The attribution source remains enabled continuously with no start or end date. |
       | Expired | The attribution source remains enabled continuously with no start or end date. |
         <Note>
           Note: The attribution and its status appear on the Phone Numbers listing page only after you configure and save the attribution settings. See step 3 for configuring attribution details.
         </Note>
    4. **Capabilities**: Indicates the enabled capabilities for the number, such as Voice and the Call Recording status (Recording on or recording off). 
    5. **Call Route**: Displays the configured routing for incoming calls. If not set, select “**Click to setup”** to create or assign an existing route. For more information on creating a new call route, refer to the "[*Creating a Call Route*](https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/call_routing)" article.   
    6. **Configuration**: Shows the compliance and registration status of the number.
    7. **Actions**: Provides options to edit or delete the phone number configuration. 
  </Accordion>
* Locate the phone number you want to configure. 

**Step 2: Assign a Marketing Attribution** 

On the phone number listing page, assign a marketing attribution to either a new number or edit an existing number to add one. 

**For an existing phone number:** 

* Click “**Add”** under the **Attribution** column to associate a marketing attribution. See *step 3 for configuring attribution details*.

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri3.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=2cee111f4ca11cef00ec8cca36583f41" alt="Attri3" width="1920" height="878" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri3.png" />

**For a new phone number:** 

* Click “**Add a New Number**” on the top right of the page. 

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri4.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=a59229ed764674fb3df0580082e9e9dd" alt="Attri4" width="1920" height="878" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri4.png" />

* Select the number type (**Local** or **Toll-Free**). 
* Review the assigned phone number. 
* Enter an **Alias Name**. 
* Configure the **Call Route (optional).** 

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri5.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=8028751f2fc613a635fb77b2cdd090df" alt="Attri5" width="1920" height="878" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri5.png" />

For detailed steps, refer to the "*[Adding a New Phone Number](https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/getting_zuper_phone_number)"* article. 

**Step 3: Configuring Attribution Details (optional)** 

On the Add Attribution page: 

* Select an existing attribution source from the library (Google Ads, Facebook, Yelp, Instagram, etc.) or create a custom source.  

<Note>
  **Note**: Each phone number can have only one attribution. 
</Note>

* When creating or editing an attribution, you can configure: 
  1. Attribution Name 
  2. Attribution Active Period 
     * Check the **Always Active** box to keep the attribution active continuously, or 
     * Uncheck the box and specify the start and end date. 
     <Note>
       **Note**: Calls received during the active dates are automatically attributed to the selected source.  
     </Note>
  3. Notes for campaign context (such as campaign ID, promo name, or offer details) 
  4. Tags for the phone number. Add one or more tags (e.g., Google, Emergency, Q1-Campaign). See *Step 6 for creating & managing tags*.

<Note>
  **Note**: A phone number can have multiple tags. 
</Note>

* Click **Save Attribution**. The attribution is now linked to that number.  

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri6.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=a4795ccb30be6f770e0b2fc7366b06cf" alt="Attri6" width="1920" height="878" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri6.png" />

**Step 5: Verify Where Attributions Appear**

After setup, attributions appear in: 

| Module | Behavior |
| :-: | :-: |
| Dialer | Shows the attribution icon and name beside the caller ID. |
| Sidekick | Displays the active attribution for the number. |
| Analytics | Enables filtering calls and messages by attribution. |

<Note>
  **Note**: If attributions are not visible in any of the modules above, ensure the phone number is correctly linked to an attribution and that the changes are saved and published.
</Note>

**Step 6: Manage or Delete Tags** 

* Go to **Settings**→ **Zuper Connect**→ **Call Settings** → **Call Tags**. 
* On the call tags listing page, you can add a new tag or delete it if needed.

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri7.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=f79ffdaa3916680b5c96bec187ab6504" alt="Attri7" width="1920" height="878" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri7.png" />

**To add a new tag**:

1. In the Enter new tag name field, enter a descriptive name (for example, Black Friday 2026 or Referral Campaign).
2. Click **Add Tag**.

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri8.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=06da4877680bf54d93482c77bcd360f0" alt="Attri8" width="1916" height="830" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri8.png" />

The new tag appears in the list with the following details:

* **Tag Name**: The label assigned to the tag.
* **Created On**: The date & time the tag was created.
* **Usage Count**: The number of attributions currently using this tag.

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri9.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=b230e8cf878b31439c3871abb8fc1b8c" alt="Attri9" width="1919" height="831" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri9.png" />

<Tip>
  Tip: Use short, meaningful tag names to make reports easier to scan and filter in Analytics. Duplicate tag names are not allowed.
</Tip>

**To delete a tag**:

1. Click the Delete icon <Icon icon="trash-can" />under Actions.

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri10.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=2b144b9574149087c15aa284935cf1f4" alt="Attri10" width="1915" height="771" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri10.png" />

<Note>
  **Note**: Deleting a call tag removes it from all phone numbers.
</Note>

### Edit Attribution 

* On the **Phone Numbers** listing page, hover over the **Attribution** field for the required phone number.  
* Click the **Edit** icon to update the attribution details, such as the active duration, notes, and tags. 

### Delete Attribution 

* On the **Phone Numbers** listing page, hover over the **Attribution** field. 
* Click the **Delete** icon to remove the attribution from the phone number.  

<img src="https://mintcdn.com/zuperinc/0F0WbBImE6wuAe_6/Zuper_Connect/Setup-Zuper-Connect/Attri11.png?fit=max&auto=format&n=0F0WbBImE6wuAe_6&q=85&s=5c893666d6ec262ebeb1a7788ef1ee32" alt="Attri11" width="1915" height="840" data-path="Zuper_Connect/Setup-Zuper-Connect/Attri11.png" />

<Note>
  **Note**: Once deleted, the phone number will no longer be associated with that attribution source. 
</Note>

## Quick Rules to Remember 

1. One attribution per phone number 
2. Tags are optional and for internal grouping 
3. Tags do not affect analytics logic 
4. Attributions are not auto-assigned  

## Best Practices 

1. Use attributions for campaigns 
2. Use tags for internal organization 
3. Keep naming consistent 
4. Review expired attributions regularly 


## Related topics

- [Overview](/Zuper_Connect/Overview.md)
- [Configuring Quotes and Invoices](/Settings/Modules/Quotes-Invoices/Quotes-Invoices-Settings.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.