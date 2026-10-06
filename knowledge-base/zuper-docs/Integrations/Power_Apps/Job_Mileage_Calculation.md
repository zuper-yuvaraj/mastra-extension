---
title: "Job Mileage Calculation"
source: https://docs.zuper.co/Integrations/Power_Apps/Job_Mileage_Calculation.md
fetched_at: 2026-10-06T13:30:37.598Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Job Mileage Calculation

Zuper Power Apps are created with the intention to satisfy unique user requirements, and each app plays a unique role in fulfilling business needs.

Mileage calculation is a significant part of the field service management process, and this specific Zuper Power App helps extract the number of miles driven by field technicians in a specific interval. By retrieving accurate mileage calculations, field service businesses can process payroll and reimbursement requests effortlessly.

## A. Connect Job Mileage Calculation with Zuper 

Listed below are the steps to enable the mileage calculation app on Zuper.

1. Open a new tab in your browser once you are logged in to your Zuper Account. Click your Profile Picture in the top right corner of the screen and select “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Power Apps**” option and choose “**Job Mileage Calculation**.”

<img src="https://mintcdn.com/zuperinc/x0vcRjWslvn2Wgua/images/Mileage3.png?fit=max&auto=format&n=x0vcRjWslvn2Wgua&q=85&s=ebdf63e9feaa95452c968b38468dbc3c" alt="Mileage3 Pn" width="1920" height="878" data-path="images/Mileage3.png" />

3. Click on the “**Install Job Mileage Calculation**” button.

<img src="https://mintcdn.com/zuperinc/x0vcRjWslvn2Wgua/images/Mileage7.png?fit=max&auto=format&n=x0vcRjWslvn2Wgua&q=85&s=7fdee5526e8d9b56f066942333f2f940" alt="Mileage7 Pn" width="1920" height="878" data-path="images/Mileage7.png" />

2. Now, you can enable “**Update Job Mileage Calculation Settings**” by entering the following details.

   **a. Start Location Type** (Mandatory Field) – The start point of the field executive’s location. The options can be either **Job Status** or **Employee Start Location**.

   * **Job Status** – Choose if the starting point mileage calculation is based on Job status.
   * **Employee Start Location**  – Choose if the starting point mileage calculation is based on the Employee Start Location.

   **b. Start Location Status** – Enter the status to be considered for the start location.

   **c. End Location Type** (Mandatory Field)  - The endpoint of the field executive’s location. The options can be either **Job Status** or **Job Service Address**.

   * **Job Status** – Choose if the ending point mileage calculation is based on the Job Status.
   * **Job Service Address** – Choose if the ending point mileage calculation is based on the Job Service Address.

   **d. End Location Status** – Enter the status to be considered for the end location.

   **e. Store mileage in** (Mandatory Field)  – The mileage can be stored in the **Custom Field** defined or in the **Job Line Item.**

   **f. Custom Field Name** – Enter the Custom Field Name where mileage values are stored. (Enter here if you choose “**Custom Field**” as an option in **Step (e**)).

   **g. Line Item Name** - Enter the Line Item Name where mileage values are stored.(Enter here if you choose “**Job Line Item**” as an option in **Step (e**)).

   **h. Cost per Mile** (Mandatory Field)  - Enter the rate per mile. The rate defined here will be calculated per mile for the distance covered by the field executive.

   **i. Mileage Type** (Mandatory Field)  - Choose the preferred mileage type. This can be either **KMS (Kilometers) or Miles**.

   **j. Zuper API Key** (Mandatory Field) - Enter the Zuper API key [(Click here: How to generate Zuper API Key).](https://docs.zuper.co/Settings/Developer_Hub/API_Keys)

   Select the “**Update**” button to connect the **Job Mileage Calculation** app with **Zuper**. 

<img src="https://mintcdn.com/zuperinc/x0vcRjWslvn2Wgua/images/Mileage4.png?fit=max&auto=format&n=x0vcRjWslvn2Wgua&q=85&s=43c13fc0b9ab3681095dec15c72ab133" alt="Mileage4 Pn" width="1920" height="878" data-path="images/Mileage4.png" />

The first mileage calculation setup in the “**Settings**” is complete. Next, we must proceed to the Zuper Mobile App for status updates.

## Update Job Status on the Zuper Mobile App:

As a part of the mileage calculation for the field executives, based on the status updates (as per your current settings), select an appropriate Job Status.

1. Select the "**Jobs**" module from the top-left hamburger icon.

   Update the “**Job Status**.” Based on this status, the mileage calculation will be automatically done on the Zuper Web App.

<img src="https://mintcdn.com/zuperinc/ZBur1ERhjjvW7MvU/images/jst4.png?fit=max&auto=format&n=ZBur1ERhjjvW7MvU&q=85&s=834ed5dff0d2c983235da911e739c554" alt="Jst4 Pn" width="1464" height="2978" data-path="images/jst4.png" />

Based on the different status updates on the Zuper Mobile App, the mileage calculations will be reflected on the Zuper Web App.

## View Mileage Calculation on the Zuper Web App:

By taking your Zuper App Store settings and status updates on the Zuper Mobile App into account, you can now view the mileage calculation for your field executive.

1. Select the “**Jobs**” icon from the left panel and choose the “**Job**” for which you want to view the mileage calculation for your field executive.
2. If you chose the **custom field** option during the initial setup, scroll down the job details page to view the mileage calculations under the “**Other Details**” section (*This is taken from* A. How to Connect Job Mileage Calculation with Zuper? 4) f) point in the initial Settings setup).

<img src="https://mintcdn.com/zuperinc/x0vcRjWslvn2Wgua/images/Mileage1.png?fit=max&auto=format&n=x0vcRjWslvn2Wgua&q=85&s=f090c6e5c6a900abb1f895431627077c" alt="Mileage1 Pn" width="1913" height="866" data-path="images/Mileage1.png" />

3. If you chose the **line item** option during the initial setup, scroll down the job details page to view the mileage calculations under the “**Parts / Services**” section (This is taken from A. How to Connect Job Mileage Calculation with Zuper? 4) g) point in the initial Settings setup).

<img src="https://mintcdn.com/zuperinc/x0vcRjWslvn2Wgua/images/Mileage2.png?fit=max&auto=format&n=x0vcRjWslvn2Wgua&q=85&s=d1968bb9e5182e91636e6d92503f2f64" alt="Mileage2 Pn" width="1920" height="878" data-path="images/Mileage2.png" />

The users require accurate mileage calculations to provide the exact amount for the field executives. With this Zuper Mileage Calculator, you need not worry about manual intervention for the field executive’s mileage calculation. 


## Related topics

- [Job Time Calculation](/Integrations/Power_Apps/Job_Time_Calculation.md)
- [Job Costing and Profitability](/Zuper_for_Roofing/Job_Costing.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.