---
title: "Tracking users’ real time location"
source: https://docs.zuper.co/Timesheets_Management/Timelogs/Tracking_Users.md
fetched_at: 2026-10-06T13:29:55.247Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Tracking users’ real time location

Users (field technicians) often travel to various locations throughout their workday, and it’s helpful for schedulers to know where users are at any given time. In Zuper, GPS-based user location tracking ensures that schedulers and team leads always have visibility into users’ locations, directly within the platform.

You can view a technician’s live location in the following areas:

* **Maps module** in the Zuper web app
* **Dispatch Board – Maps View** in the Zuper web app
* **Maps module** in the Zuper mobile app

## Enable users’ location tracking

To begin tracking the real-time location of users in Zuper, you must first enable the User location tracking feature in the organization settings. To do so,

1. Select the **Settings** module from the left navigation menu and choose “**Organization** **Settings**.”\\
   <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/track-1.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=4e7f46af6274abe458fda7edbe911a97" alt="Track 1 Pn" width="1354" height="611" data-path="Timesheets_Management/Timelogs/track-1.png" />
2. Click “**User Settings”**.\\
   <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/track-2.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=b9dfad0f143b9893ad697758e362510d" alt="Track 2 Pn" width="1909" height="709" data-path="Timesheets_Management/Timelogs/track-2.png" />
3. Choose one of the following options for the “**Track User location using?**” field.
   * **Timesheet**- The user’s live location will be tracked based on their **Punch In** and **Punch Out** times. This is ideal when location data is only needed during logged work hours.
   * **Timelog**- The location is tracked when the user is actively working on a **job**. This is useful for teams that want location data tied specifically to job progress.
   * **Choose an option**- Select this if you do not want to track user location.\\
     <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/track-3.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=47a0a19e2dff71daba02ff3bdb5d6af5" alt="Track 3 Pn" width="1910" height="701" data-path="Timesheets_Management/Timelogs/track-3.png" />

4. Click “**Save** **Settings**” to apply the changes.

Once enabled, the system will begin updating the user’s location. In the Maps view of the Dispatch Board and Maps module in the Zuper Web and Mobile apps, the user's current <Icon icon="location-dot" color="#000" /> icon, along with a profile photo. The time at which the location information was last updated (if available) will be displayed.

**Web:**\\

<img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/track-4.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=82f21fd734c824cbe7021101b81d989c" alt="Track 4 Pn" width="1915" height="624" data-path="Timesheets_Management/Timelogs/track-4.png" />

**Mobile:**

<img width="250" height="200" src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/track-5.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=4fc57ed9193b78974f70deb796ccefcc" data-path="Timesheets_Management/Timelogs/track-5.png" />

## Disabling location tracking for specific days

Sometimes, you may not want to track a user’s location, for example, on non-working days, holidays, or when the technician is working remotely on tasks that don’t require site visits.

To turn off tracking for specific days:

1. Select the **Settings** module from the left navigation menu and click **Users & Teams**.\\
   <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/track-6.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=29a542e5c6fde3b4943c95b823947cd0" alt="Track 6 Pn" width="1892" height="621" data-path="Timesheets_Management/Timelogs/track-6.png" />
2. Edit the user whose tracking you want to adjust.
3. Under the **Work Hour**s section, set **Track Location** to *No* for the applicable days.\\

   <img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Timesheets_Management/Timelogs/track-7.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=f857005f42d2b532a745e1d525ecb32d" alt="Track 7 Pn" width="1442" height="929" data-path="Timesheets_Management/Timelogs/track-7.png" />

   This allows you to maintain a balance between operational visibility and respecting privacy preferences when necessary.


## Related topics

- [Managing your users](/Settings/Users_Teams/Users_Creation.md)
- [Inventory sync](/Integrations/Accounting_and_payments/QBD_Reverse_Inventory.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.