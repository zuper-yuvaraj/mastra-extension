---
title: "Zapier"
source: https://docs.zuper.co/Integrations/Work_Flow_Automation/Zapier.md
fetched_at: 2026-10-06T13:30:27.465Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Zapier 

Zuper's first-class integration with Zapier seamlessly helps you set up automated workflows called Zaps, enabling you to connect apps to Zuper to deliver an exceptional customer experience.

## Installing Zapier in Zuper

Follow these steps to connect Zapier with Zuper:

1. Log in to your Zuper account. Click your profile picture in the top-right corner and select **App Store**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Workflow Automation**” option and choose “**Zapier**.”  Click **Install Zapier**.

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap2.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=4a38346ab18dcd0ac7d728ce1f19fdd1" alt="Zap2 Pn" width="1921" height="881" data-path="images/zap2.png" />

3. You will be redirected to the Zapier login page. Enter your Zapier **Email ID** (Mandatory) and click **Continue**.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap3.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=0af3f65f0319d07c8cc7219ecd074f1a" alt="Zap3 Pn" width="1911" height="828" data-path="images/zap3.png" />

7. Provide the following:
   * **API Key** (Mandatory): Generate a Zuper API key. Refer to [How to Create an API Key for Your Zuper Account ](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys)for guidance.
   * **API Region** (Optional): Specify the region for your Zuper account.
   * Click **Yes, Continue to Zuper**.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap4.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=1a733806d83b47ccdd4b032f24ead91b" alt="Zap4 Pn" width="1535" height="761" data-path="images/zap4.png" />

The integration between Zapier and Zuper is now established.

## How the Zuper-Zapier Integration Works

Zapier uses Zaps, or automated workflows triggered by events in one app to perform actions in another. Below are examples of common Zaps for Zuper modules. These can be combined or customized for complex workflows.

### i. Create an Organization

1. In Zapier, create a new Zap and select Zuper as the action app.
2. Choose **Create a New Organization** as the event and click **Continue**.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap5.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=81a02124938219a6c1b444bd32e99ea1" alt="Zap5 Pn" width="1922" height="849" data-path="images/zap5.png" />

6. Choose the Event. Fill in the Action, Account, and create an Organization, then validate the flow by 

   Enter the ***Organization Name (Mandatory)*** and fill in the optional fields. 

   **1) Event** - For creating the organization, use "**Create a New Organization**" from the drop-down list and click the "**Continue**" button. (As we are going to choose the Organization's UID, in this case, we are choosing an Organization). 

   **2) Account** - Choose the current Zuper account that you use to act. 

   **3) Action** - In the "**Choose Required Field**"  section, you can choose the organization, enter the organization's name, and enter the active or inactive status of the organization. 

   <img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap6.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=c69261f9224184a4406713031c90f218" alt="Zap6 Pn" width="1922" height="849" data-path="images/zap6.png" />

   <img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap7.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=29c5a78d2ed94e9795873e738c7bdc40" alt="Zap7 Pn" width="1922" height="849" data-path="images/zap7.png" />

   Click the "**Test Step**" button to create the **Organization UID**. Click the "**Continue**" button. 

   Click the "**Test**" button to create a new organization, and it generates the **Organization's UID**.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap8.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=17787789e163bf4839d0fb347177e814" alt="Zap8 Pn" width="1922" height="849" data-path="images/zap8.png" />

In the "**Custom**" section, you can choose the applicable custom fields. 

You can view the **organization UID** that is auto-generated. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap9.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=dd305722ae76e326c26bf44c8122cc17" alt="Zap9 Pn" width="1922" height="849" data-path="images/zap9.png" />

<Note>
  Note: Link each organization to one customer and one property only.
</Note>

The Organization is successfully added. 

### ii. Create a Customer

1. Enter the "**Event name**" and click the "**Continue**" button. Choose the Event. Fill in the Action, Account, and create a Customer, then validate the flow by 

Enter the ***Customer Name (Mandatory)*** and fill in the optional fields. 

**To create a new Customer UID:**

**1) Event** - For creating the Customer, use "**Create a New Customer**" from the drop-down list and click the "**Continue**" button.

**2) Account** - Choose the current Zuper account that you use to act. 

**3) Action** - In the "**Choose Required Field**"  section, you can choose the Customer, enter the customer's name, and enter the active or inactive status of the customer. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap10.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=ea8cdf0aa8c191acd535a4bb363e99b6" alt="Zap10 Pn" width="1921" height="896" data-path="images/zap10.png" />

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap11.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=3c0a40951baba77fed66f3ad2e8d4c52" alt="Zap11 Pn" width="1921" height="896" data-path="images/zap11.png" />

In the "**Custom**" section, you can choose the custom fields that are applicable. 

Click the "**Test Step**" button to create the **Customer UID**. Click the "**Continue**" button. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap12.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=7ff6f1a296f34eb20b5ff03890d2e36c" alt="Zap12 Pn" width="1921" height="896" data-path="images/zap12.png" />

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap13.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=c26e91fb05239db740342e82a1847d08" alt="Zap13 Pn" width="1921" height="896" data-path="images/zap13.png" />

The Customer is successfully added. 

### iii. Create a Property

1. Enter the "**Event name**" and click the "**Continue**" button. Choose the Event. Fill in the Action, Account and create a Property, then validate the flow by 

Enter the ***Property Name (Mandatory)*** and fill in the optional fields. 

**To create a new Property UIDs:**

**1) Event** - For creating the Property, use "**Create a New Property**" from the drop-down list and click the "**Continue**" button.

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap14.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=fef0e276374cf8be94258c328d5173a8" alt="Zap14 Pn" width="1922" height="849" data-path="images/zap14.png" />

**2) Account** - Choose the current Zuper account that you use to perform the action. 

**3) Action** - In the "**Choose Required Field**"  section, you can choose the Property, enter the Property's name, and enter the active or inactive status of the Property.

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap15.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=c5c36ff65def536d7e670b1aaa06b3d1" alt="Zap15 Pn" width="1922" height="849" data-path="images/zap15.png" />

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap16.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=49575d73d2733cb8b226be42a8809e95" alt="Zap16 Pn" width="1922" height="849" data-path="images/zap16.png" />

In the "**Custom**" section, you can choose the custom fields that are applicable. 

You can view the **Property UID** that is auto-generated. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap17.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=257ed04c617f3eb2aa8944cb3b64257b" alt="Zap17 Pn" width="1921" height="881" data-path="images/zap17.png" />

The Property is successfully added. 

### iv. Find Organization/Customer/Property

* The Find Organization, Customer, or Property Zap is used when creating a Job, Invoice, Quote, or Asset.
* This Zap is a one-stop solution for finding and selecting the exact organization/customer/property while using it in other modules. 

1. Select the "**Organization**" and create the new action. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap18.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=6011553d2e0be5923ec63c2e884bcddf" alt="Zap18 Pn" width="1922" height="849" data-path="images/zap18.png" />

**2) Account** - Choose the current Zuper account that you use to perform the action. 

**3) Action** - In the "**Choose Required Field**"  section, you can choose the Customer, enter the customer's name, and enter the active or inactive status of the customer and click the "**Continue**" button. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap19.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=8d54ea0c9c4583c1e8881cffae3a15af" alt="Zap19 Pn" width="1922" height="849" data-path="images/zap19.png" />

**Select Customer:**

Create the "**Customer**" by choosing the created Organization UID from i) Create an Organization section. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap21.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=0cb340a2e15c311a26b4e5577b314e0e" alt="Zap21 Pn" width="1922" height="849" data-path="images/zap21.png" />

**Select Property:**

Create the "**Property**" by choosing the created Organization UID and Customer UID from i) Create an Organization section. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap22.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=0ec8c09d4c6207abfb6201cac1ea2ee8" alt="Zap22 Pn" width="1922" height="849" data-path="images/zap22.png" />

The Find action is successfully added. 

### v. Create Parts & Services List

The same zap can be reused in the various modules with the predefined parts and services created.

The Product zap is first created, and we can link the same in the Jobs, Invoices, and Quotes creation process. 

1. Enter the "**Event name**" and click the "**Continue**" button. Choose the Event. Fill in the Action, Account, and create a Customer, then validate the flow by 

Enter the **Mandatory fields** and fill in the optional fields. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap23.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=d9690db8f01811364f30dfe4d4731ef5" alt="Zap23 Pn" width="1922" height="849" data-path="images/zap23.png" />

2. Under the "**Action**" section, enter the details. 

Product UID (Comma-Separated) - Enter the product UID, followed by - Enter the product UID followed by the commas. 

**Product Price (Comma-Separated)** - Enter the price of the product followed by the commas. 

**Product Quantity** **(Comma-Separated)**- Enter the quantity of the product, followed by the commas.

<Note>
  **Note**: The number of Product UIDs and Product Quantity count should be equal. 
</Note>

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap24.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=d22292e1b2cbcbaf0fb339dd8e37eb2a" alt="Zap24 Pn" width="1922" height="849" data-path="images/zap24.png" />

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap25.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=5c1239b861e441a244d06825164cb879" alt="Zap25 Pn" width="1921" height="881" data-path="images/zap25.png" />

### vi. Create an Asset

You can use the “Find Organization / Customer / Property” zap to create an asset. 

1. Enter the "**Event name**" and click the "**Continue**" button. Choose the Event. Fill in the Action, Account, and create a Customer, then validate the flow by 

Enter the **Mandatory fields** and fill in the optional fields. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap26.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=9ed138755521c66474fa343b717d879a" alt="Zap26 Pn" width="1921" height="896" data-path="images/zap26.png" />

2. Choose the **Organization UID**, **Customer UID**, and **Property UID** and other Custom fields. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap27.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=427bb9dd7afdeb7f04d767945add86cd" alt="Zap27 Pn" width="1921" height="896" data-path="images/zap27.png" />

 The asset action is successfully added. 

### vii. Create a New Job

With all the details created from the various steps in the above section. Now you can create a new job. 

1. Enter the mandatory Job details 

**Job Title (Mandatory)** - Enter the title of the Job. 

**Job Category (Mandatory)** - Choose the Job category. 

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap28.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=05177e773906f84015aaa046f3a3a6e7" alt="Zap28 Pn" width="1921" height="896" data-path="images/zap28.png" />

Job scheduled Start Date & Time (Mandatory)  - Choose the start date and time of the Job. \
Job scheduled End  Date & Time (Mandatory) - Choose the end date and time of the Job. 

<Note>
  Note: The date and time format should be YYYY-MM-DD HH:MM:SS
</Note>

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap29.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=97d75dc18583a8dceeb6a5f1e0ca7840" alt="Zap29 Pn" width="1921" height="896" data-path="images/zap29.png" />

Choose the **Product UID, Service Contract UID, Organization UID, Customer UID, Property UID, and Asset UID**. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap30.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=cd570e30dfe31a85ea7de5e48e5922c2" alt="Zap30 Pn" width="1921" height="896" data-path="images/zap30.png" />

Click the "**Test Step**" button to create the **Job**. Click the "**Continue**" button. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap31.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=2027ce7a649f0581549674d1acbd148b" alt="Zap31 Pn" width="1921" height="896" data-path="images/zap31.png" />

 The new Job is successfully added. 

### VIII. Create a Job Note 

You can create a Job note that is related to the work order. 

1. Enter the "**Event name**" and click the "**Continue**" button. Choose the Event. Fill in the Action, Account, and create a Job UID and Note, then validate the flow by, 

* Enter the (**Mandatory fields**) and fill in the optional fields. 
* **Job UID (Mandatory Field)** - Select the Job UID from the list. 
* **Note (Mandatory Field)** - Enter the job-related notes.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap32.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=56428528f9c9f470a49e57122dabeb7a" alt="Zap32 Pn" width="1921" height="896" data-path="images/zap32.png" />

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap33.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=609507c459d0bfd785c4b50ab01ea39e" alt="Zap33 Pn" width="1921" height="896" data-path="images/zap33.png" />

The Job note is successfully added. 

### ix. Reschedule a Job

When the Job schedule needs a change, you can reschedule the Job date and timings. 

1. Enter the "**Event name**" and click the "**Continue**" button. Choose the Event. Fill in the Action, Account, and Reschedule Job, then validate the flow by, 

Enter the **Mandatory fields** and fill in the optional fields. 

* **Job UID (Mandatory Field)** - Select the Job UID from the list. 
* **New Start Date & Time (Mandatory)**  - Choose the new start date and time of the Job. 
* **New End  Date & Time (Mandatory)** - Choose the new end date and time of the Job.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap34.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=751a5039bbd1879fe93d0d702f26062c" alt="Zap34 Pn" width="1921" height="896" data-path="images/zap34.png" />

Click the "**Test Step**" button to create the **Job Note**. Click the "**Continue**" button. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap35.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=8eb5f26550ab8d0f5db9ce10d2abdab9" alt="Zap35 Pn" width="1921" height="896" data-path="images/zap35.png" />

The Job rescheduling is successfully done. 

### x. Update a Job Status

When the Job status needs to changed,  you can update the Job status using the Job UID. 

1. Enter the "**Event name**" and click the "**Continue**" button. Choose the Event. Fill in the Action, Account, and status update, then validate the flow by, 

Enter the Mandatory fields and fill in the optional fields. 

* **Job UID (Mandatory Field)** - Select the Job UID from the list. 
* **Status UID (Mandatory)**  - Choose the status UID of the Job.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap36.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=9a82e405c6fb7ebffc482b7e1156fdbf" alt="Zap36 Pn" width="1921" height="896" data-path="images/zap36.png" />

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap37.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=49c4a82101a79d54fcde3acf5933af11" alt="Zap37 Pn" width="1921" height="896" data-path="images/zap37.png" />

### xi. Create a New Project

Creating a project involves multiple steps. We must enter/choose the various details and create a new project. 

1. Select the "**Action Event**” as “**Create a New Project**” and click the "**Continue**" button within the Zuper app action in the Zap. 
2. Connect your Zuper account to the Zap by entering your API key. 
3. In the “**Configure**” section, enter the project details in the respective fields. Ensure that you’ve added all the required fields. 
4. The Project Category values set in Zuper will appear for selection in a dropdown here. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap38.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=f76a93c078dc02506d0e373f5dd1d67f" alt="Zap38 Pn" width="1660" height="746" data-path="images/zap38.png" />

Click the "**Test Step**" button to create the **Project UID**. Click the "**Continue**" button. 

Click the "**Test**" button to create a new project, and it generates the **Project's UID**. 

### **Add job to the project**

1. Enter the "**Event name**" and click the "**Continue**" button. 
2. Choose the Event. Fill in the Action, Account and add job to project, then validate the flow by adding:

***Project UID, Job UIDs (Mandatory).***

Click the "**Continue**" button. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap39.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=2e30d7f35e873e14a14f83ae1bdce6ac" alt="Zap39 Pn" width="1666" height="765" data-path="images/zap39.png" />

### **Add Parts and Services**

1. Enter the "**Event name**" and click the "**Continue**" button. 
2. Choose the Event. Fill in the Action, Account and add parts and services, then validate the flow by 

***Project UID, Product UIDs (Mandatory).***

Click the "**Continue**" button. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap40.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=30565a8dc5285df86fed05b570c7e524" alt="Zap40 Pn" width="1668" height="765" data-path="images/zap40.png" />

You can create a new project, add the job to it, and add a parts and services list to it. 

### xii. Create a New Quote

There are two ways to provide organization/customer/property UID while creating the quote / invoice / job.

      a. Directly type and provide the UID. (We used this flow in Quote creation below).

      b. We can use “**find organization / customer / property**” zap (We used this flow in Invoice creation)

With all the details created from the various steps in the above section. Now you can create a new Quotation. 

1. Enter the Quotation details. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap41.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=3c07e59557c77191f367cd556f7b0529" alt="Zap41 Pn" width="1921" height="896" data-path="images/zap41.png" />

2. Enter the Mandatory Quotation fields. 

**Quote Date (Mandatory Field)** - Choose the quote creation date. 

**Expired Date (Mandatory Field)** - Choose the expired date of the Quote.

<Note>
  **Note**: The date and time format should be YYYY-MM-DD HH:MM:SS
</Note>

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap42.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=22b463006fe7973cf39cd22cbc0e2bb4" alt="Zap42 Pn" width="1921" height="896" data-path="images/zap42.png" />

Click the "**Test Step**" button to create the **Quotation**. Click the "**Continue**" button. 

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap43.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=e1b5d1c78c1ed893098d62bde2ebf9af" alt="Zap43 Pn" width="1921" height="896" data-path="images/zap43.png" />

The new quote is successfully created. 

### xiii. Create a New Invoice

There are two ways to provide organization/customer/property UID while creating the quote/invoice/job.

a. We can use “**find organization/customer/property**” zap (We used this flow in Invoice creation below).

b. Directly type and provide the **UID**. (We used this flow in Quote creation in the previous section). 

 With all the details created from the various steps in the above section. Now you can create a new Invoice. 

1. Enter the Invoice details.

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap44.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=2fb7a40653bc5c245bafbb89f3745246" alt="Zap44 Pn" width="1921" height="896" data-path="images/zap44.png" />

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap45.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=15239c52dda995dc192cfb4536c1639c" alt="Zap45 Pn" width="1921" height="896" data-path="images/zap45.png" />

<img src="https://mintcdn.com/zuperinc/ougohI7NeyCzaBaG/images/zap46.png?fit=max&auto=format&n=ougohI7NeyCzaBaG&q=85&s=08c95405741107d23f0d5ed4c18bd2f3" alt="Zap46 Pn" width="1921" height="896" data-path="images/zap46.png" />

The new invoice is successfully created.

## Uninstalling Zapier from Zuper

To remove the Zapier integration:

1. Log in to your Zuper account. Click your profile picture in the top-right corner and select **App Store**.

<img src="https://mintcdn.com/zuperinc/ft2RmjweBAspTMaP/images/ZH1.png?fit=max&auto=format&n=ft2RmjweBAspTMaP&q=85&s=62d51a7ce5ccfde7bf709c36fe15a00b" alt="ZH1 Pn" width="1920" height="878" data-path="images/ZH1.png" />

2. Under the “**Browse by Category**,” select the “**Workflow Automation**” option and choose “**Zapier**.”  Click "**Uninstall**."

<img src="https://mintcdn.com/zuperinc/6JVx1bVbsYWvM3_T/images/zap1.png?fit=max&auto=format&n=6JVx1bVbsYWvM3_T&q=85&s=30355c12abd41fbaec38f5665d419b4d" alt="Zap1 Pn" width="1920" height="878" data-path="images/zap1.png" />

3. **Uninstall the App**:
   * Click **Uninstall App**.
   * The Zapier app will be uninstalled successfully.

**Note**: This disables the integration in Zuper but does not affect existing Zaps in Zapier. Delete or pause Zaps in Zapier as needed.

**Key points to note:**

1. Product UID, Qty, and Price should be the exact count in Part & Service List Zap - Please ensure to map the respective count of product UID based on the count entered in the Zap
2. Org/Customer/Property are inter linked for the smooth integration to happen. - Please ensure that the organization, customer & property are associated in Zuper for smoother integration
3. Job, Invoice, and Quote need to use Part and Service List zap, and create Asset need to use Product UID - For modules that require parts & services, please use the Product UID in the Zap. You can also use the lookup action to find the product UID using the name or SKU
4. In new Assets, while adding asset parts UID, Qty should be in the exact count; also, we can only add "**parts**" and not add products and services. - While creating assets through Zap, please ensure to add only Product UID, which is of type "**PART**" configured in Zuper. Items of type "PRODUCT" / "SERVICE" are not supported for inclusion in Asset.

With our Zuper - Zapier integration, you can perform various module action by automating the flows. 


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.