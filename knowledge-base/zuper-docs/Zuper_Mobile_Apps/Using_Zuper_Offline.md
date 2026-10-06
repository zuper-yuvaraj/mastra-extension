---
title: "Using Zuper Offline"
source: https://docs.zuper.co/Zuper_Mobile_Apps/Using_Zuper_Offline.md
fetched_at: 2026-10-06T13:30:18.728Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Using Zuper Offline

## Offline Support

When the Zuper mobile app is connected to the Internet, it regularly synchronizes your data with the Zuper backend services to ensure that your data is always up to date. If the app is offline, users will see a message within the app indicating that data was loaded from an offline source. Zuper supports Offline Mode, allowing technicians to work in areas with poor connectivity or when they are completely offline.

When the app serves local data for an extended period, users will see an indicator that the information may be outdated.

## **How to turn on offline capability?**

The customer must request that the Zuper team enable the offline feature for their account. Our Zuper team can enable the offline feature for the company.

Once the offline feature has been enabled, the users of that company can find the offline settings under the '**configuration**' section on the in-app settings page. Users who require offline mode can enable it in their accounts as a one-time setup

Once offline mode is enabled and the required data has been downloaded, the app will display the status "**Ready for offline usage.**"

1. Go to app settings.

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob3.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=084437a4ce4af8c6570e69c5b1743956" alt="Offlinemob3" width="1419" height="2796" data-path="images/offlinemob3.png" />

2. Open offline mode settings.

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob2.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=b130d04ba7e0a92de4e5e6842c2726c5" alt="Offlinemob2" width="1419" height="2796" data-path="images/offlinemob2.png" />

3. Enable “**Cache data for offline usage**” feature.

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob1.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=fd8105df7749a234757b43adf20342a7" alt="Offlinemob1" width="1419" height="2796" data-path="images/offlinemob1.png" />

## **How does the data get synced?**

When a user logs in to the Zuper app, the app automatically downloads data for the **user’s assigned jobs**. This process is referred to as Data priming, and it ensures that all the data that a field technician needs is available even if internet connectivity is lost. If there's a large volume of data, the priming process can take some time after the initial app launch or after a user logs in. If a network error occurs during priming, an error message will appear, and priming will stop.

## **What data will be available offline?**

The app primes data for each field technician based on the user’s assigned jobs. Additionally, any records the user accesses while online are cached and available offline for a couple of days, regardless of their role

Related records are primed to a depth of 2, except as detailed in the table below.

| Module | What Gets Primed |
| - | - |
| **Jobs** | All primary job information and associated records (customer, organization, assets, property, parts & services) within a ±3 day window. Only jobs assigned to the user are primed. |
| **Routes** | Routes of the jobs assigned to the user are cached offline. |
| **Customers** | Customers linked to the assigned jobs are cached. |
| **Organizations** | Organizations linked to the assigned jobs are cached. |
| **Properties** | Properties linked to the assigned jobs are cached. |
| **Assets** | Assets belonging to the customers of assigned jobs are cached. |
| **Contracts** | Contracts linked to the assigned jobs are cached. |
| **Parts & Services** | Parts and services linked to the assigned jobs are cached. |
| **Quotes & Invoices** | Not supported. |

<Note>
  **Note:** For the Team Leader role, all jobs assigned to them and their team members are cached. For admin roles, only jobs directly assigned to them are cached
</Note>

## **What actions can be done offline?**

Zuper app currently supports only the following actions to be performed offline.

| Module | Supported Actions |
| - | - |
| **Jobs** | - View job details. - Update job status and checklist (including attachments). - Update job timer/timelog. - View and add job notes (including attachments). - Access job gallery and add attachments. |
| **Jobs → Service Tasks** | - a. View service tasks and details. - b. Submit / Edit inspection form. - c. Update service task status. |
| **Routes** | View route detail and timeline on the dashboard |
| **Customers** | View primary details |
| **Organizations** | View primary details |
| **Properties** | View primary details |
| **Assets** | View primary details |
| **Contracts** | View primary details |
| **Parts & Services** | View primary details |

* All the above-mentioned supported actions occur in the background by default (the user doesn't have to wait for the upload to complete), regardless of the user's online or offline status or network connection quality. However, this process only takes place if offline mode is enabled for the user.

### **Considerations for Offline Support:**

* Only 2 levels of associated records are primed offline. For example, customers linked to Jobs are primed, but customer cards and payment transactions are not primed
* Offline data is primed locally for a maximum of 1 day, post which it is automatically\
  invalidated.

### How do I know if I see an offline or outdated record?

* The app displays a *"***Poor connection. Showing saved jobs only***"* indicator when all listing pages/screens are showing data from cache only.

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob4.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=c0403b313932b2f4a715942fed136049" alt="Offlinemob4" width="1419" height="2796" data-path="images/offlinemob4.png" />

* Displays a *"***Last refreshed***"* indicator when a user accesses a record for an extended period under poor network conditions

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob5.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=477bfbf6d3e157fee8c5070ab74f2349" alt="Offlinemob5" width="1419" height="2796" data-path="images/offlinemob5.png" />

* Displays a "**Showing limited details**" indicator when the connection is poor, and the app is unable to load the complete record data.

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob6.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=4a3597c1560870f3997fc9d7c05e24c8" alt="Offlinemob6" width="1419" height="2796" data-path="images/offlinemob6.png" />

* Displays an **"Unable to load latest updates"** indicator when a record is outdated, and the app cannot refresh the latest information due to poor connectivity.

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob7.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=ac2ab6e8e300f0901624bcfa8d766a05" alt="Offlinemob7" width="1419" height="2796" data-path="images/offlinemob7.png" />

### How do I see status of my updates/uploads?

* Real-time progress of updates and uploads is displayed on both the dashboard and individual record pages.

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob8.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=c2611d8a3dde31c3242a770d1f7904d6" alt="Offlinemob8" width="1419" height="2796" data-path="images/offlinemob8.png" />

<img src="https://mintcdn.com/zuperinc/EtAaUOLN2KhVRFrQ/images/offlinemob9.png?fit=max&auto=format&n=EtAaUOLN2KhVRFrQ&q=85&s=b136a96abc99349b9cccb5798c45f907" alt="Offlinemob9" width="1419" height="2796" data-path="images/offlinemob9.png" />

### **Limitations**

* Job Accept/Reject can't be done offline. Technicians have to accept their respective jobs before going offline.
* File attachments such as images already added in notes, checklists, custom fields, etc, are not cached offline.
* Chat messages & notifications does not work offline.


## Related topics

- [Quickstart Guide](/Zuper_Mobile_Apps/Quickstart-guide-for-FE.md)
- [Login using Google](/Settings/Security/Login_using_google.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.