---
title: "Job Time Calculation"
source: https://docs.zuper.co/Integrations/Power_Apps/Job_Time_Calculation.md
fetched_at: 2026-10-06T13:30:37.635Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Job Time Calculation

Job Time Calculation helps field service businesses price their services accurately. This specific Zuper Power App helps calculate the working hours of field technicians by tracking their punch-in, break, and punch-out times.  

## **Connect Job Time Calculation with Zuper**

Listed below are the steps to enable the Job Time calculation app on Zuper.

1. Log in to your Zuper Account. Click on your Profile Picture in the top right corner of the screen and click on “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Power Apps**” option and choose “**Job Time Calculation**.”

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal1.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=09e9786b94580aabe65808167bcd4360" alt="Timecal1 Pn" width="1920" height="878" data-path="images/Timecal1.png" />

3. Click the “**Install Job Time Calculation**” button.

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal2.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=d383df0774216b498d0eaea7f780d972" alt="Timecal2 Pn" width="1920" height="878" data-path="images/Timecal2.png" />

4. Now, you can enable “**Update Job Time Calculation Settings**” by entering the following details.

* **Start Status** (Mandatory Field) – Enter the start status of the field executive.
* **End Status** (Mandatory Field) – Enter the end status of the field executive. 

<Note>
  **Note:** Enter different status options that you use to track the progress of your jobs (such as Started, Resumed) and use a comma to differentiate each status. Make sure that the status options that you enter in the settings match your job status list.
</Note>

If there is a status mismatch, the time calculation process will be impacted. 

* **Choose Time Metric** (Mandatory Field) - The time measurement of the Job (excluding break/waiting time). The options can be either **Minutes** or **Hours.**
* **Store Time in** (Mandatory Field) – The time calculation can be stored in the **Custom Field** defined or in the **Job Line Item.**
* **Custom Field Name** – Enter the Custom Field Name where time values are stored. (Enter here if you choose “**Custom Field**” as an option in **Step (d**)).
* **Line-Item Name** - Enter the Line-Item Name where time values are stored.

  (Enter here if you choose “**Job Line Item**” as an option in **Step (d**)).
* **Cost per Metric** (Mandatory Field) - Enter rate metrics. The rate defined here will be calculated per hour or minute for the Job done by the field executive.
* **Zuper API Key** (Mandatory Field) - Enter the Zuper API key [(Click here: How to generate Zuper API Key).](https://docs.zuper.co/Settings/Developer_Hub/API_Keys)

6. Select the “**Update**” button to connect the **Job Time Calculation** app with Zuper. 

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal3.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=5a47dd7bb4fdf739ca247a6aae559310" alt="Timecal3 Pn" width="1920" height="878" data-path="images/Timecal3.png" />

We need to set up the significant time calculation in the “**Settings**”. Next, we must proceed to the Zuper Mobile App for status updates. 

### Update Job Status on the Zuper Pro Mobile App:

As a part of the job time calculation process, you need to select an appropriate Job Status.

1. Select the "**Jobs**" module from the top-left hamburger icon.
2. Update the “**Job Status**.” Based on this status, the time calculation will be automatically done on the Zuper Web App.

<img src="https://mintcdn.com/zuperinc/ZBur1ERhjjvW7MvU/images/jst4.png?fit=max&auto=format&n=ZBur1ERhjjvW7MvU&q=85&s=834ed5dff0d2c983235da911e739c554" alt="Jst4 Pn" width="1464" height="2978" data-path="images/jst4.png" />

Based on the different status updates your field technicians make on the Zuper Mobile App, their working hours will be captured on the Zuper Web App. 

## View Time Calculation on the Zuper Web App: 

Job Time Calculations will depend on your Zuper App Store settings and the status updates made by your field executives on the Zuper Mobile App.

1. Select the “**Jobs**” icon from the left panel and choose the “**Job**” for which you want to view the mileage calculation for your field executive.
2. The status changes made on the mobile app are reflected in the Web App. Note: You can track the time spent on each status (such as **New, Started, Paused, Resumed**).

<img src="https://mintcdn.com/zuperinc/ERqxXetRMRPpdjr0/images/InvoiceAuto10.png?fit=max&auto=format&n=ERqxXetRMRPpdjr0&q=85&s=6d82d20183924daaeee90c4cddf88d25" alt="Invoice Auto10 Pn" width="1920" height="878" data-path="images/InvoiceAuto10.png" />

* If you chose the line item option during *A. How to Connect Job Time Calculation*: Scroll down the Job Details Page to view the time calculation under the “**Parts / Service Details**” section.

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal6.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=d26400c42d6af0fee6e8fe9019e8a27b" alt="Timecal6 Pn" width="1920" height="878" data-path="images/Timecal6.png" />

* If you chose the custom field option during *A. How to Connect Job Time Calculation*\_” scroll down the Job Details Page to view the time calculation under the “**Other Details**” section.

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal7.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=306a46526ec9c4abba90fa8804a39d25" alt="Timecal7 Pn" width="1906" height="757" data-path="images/Timecal7.png" />

## Uninstall Job Time Calculation

Listed below are the steps to disable the Geo Code app on Zuper.

1. Open a new tab in your browser after logging in to your Zuper Account. Click on your Profile Picture in the top right corner of the screen and click on “**App Store**.”

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Power Apps**” option and choose “**Job Time Calculation**.”

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal1.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=09e9786b94580aabe65808167bcd4360" alt="Timecal1 Pn" width="1920" height="878" data-path="images/Timecal1.png" />

3. Click "**Uninstall App**."

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal4.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=d45272ceac008b1097badb86cfc94661" alt="Timecal4 Pn" width="1920" height="878" data-path="images/Timecal4.png" />

3. The app will be uninstalled successfully.

<img src="https://mintcdn.com/zuperinc/TuZMzJ3ngOxbb4-l/images/Timecal5.png?fit=max&auto=format&n=TuZMzJ3ngOxbb4-l&q=85&s=832239f69f792be703898978d5944ddf" alt="Timecal5 Pn" width="1920" height="878" data-path="images/Timecal5.png" />

Field service businesses need to capture accurate working hours of their field workforce to price their services properly. With Zuper’s Job Time Calculator, you can stop worrying about inaccurate timesheets and estimates. 


## Related topics

- [Job Mileage Calculation](/Integrations/Power_Apps/Job_Mileage_Calculation.md)
- [Calculating Job Profitability for Time and Material Jobs](/Job_Costing/Time_and_Material.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.