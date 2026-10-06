---
title: "GAF Quick Measure"
source: https://docs.zuper.co/Integrations/Measurements_and_estimations/GAF.md
fetched_at: 2026-10-06T13:30:35.089Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# GAF Quick Measure

## Overview

The Zuper-GAF QuickMeasure integration allows roofing teams to order and manage roof measurement reports directly within Zuper. Key features include:

* Ordering new measurements from a Zuper job.
* Searching and integrating existing GAF QuickMeasure reports with Zuper jobs.
* Viewing, editing, and exporting measurement data.
* Central monitoring of measurements in Zuper's Measurements Tab.

This integration improves accuracy, efficiency, and workflow for roofing professionals.

## **Plan Availability**

* Available on **Zuper Core** and **Premium** plans.

## **Zuper Prerequisites**

* Jobs module activated in the settings.
* Applicable to Zuper Core and Premium plan users.
* The email ID used in Zuper should match the one used for the GAF quick measure to authenticate the account successfully.

## **Managing Measurement Tokens**

Measurement tokens represent specific data points (e.g., roof areas, pitches) imported from providers. Customize by enabling/disabling tokens in the Measurement object within job details. See [Configuring Measurements](https://docs.zuper.co/Settings/Modules/Jobs/Configuring_Measurements) for details. 

## **How to Install the GAF QuickMeasure Integration?**

1. Log in to Zuper, click the **User** icon, and select **App Store**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/nNoa-R0ZKv3XbxIR/images/GAF9.png?fit=max&auto=format&n=nNoa-R0ZKv3XbxIR&q=85&s=11f5fef8bf812367825d02d2bb15df41" alt="GAF9" width="1920" height="878" data-path="images/GAF9.png" />
</Frame>

2. In **Browse by Category**, navigate to **Measurements & Estimations** > **GAF QuickMeasure**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/nNoa-R0ZKv3XbxIR/images/GAF29.png?fit=max&auto=format&n=nNoa-R0ZKv3XbxIR&q=85&s=6c6641570ff7e2ea7f5f1cac941ca1e8" alt="GAF29" width="1920" height="878" data-path="images/GAF29.png" />
</Frame>

3. On the app page, click **Install GAF QuickMeasure**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/F4YloN0eKkbdCP7y/images/GAF10-1.png?fit=max&auto=format&n=F4YloN0eKkbdCP7y&q=85&s=c892f23e3dfa2198d80d347fd5a46ec7" alt="GAF10 1" width="1920" height="878" data-path="images/GAF10-1.png" />
</Frame>

**How to Generate a Zuper API Key**

You need a Zuper API Key to complete GAF QuickMeasure setup:

Zuper API Keys are essential for securely authenticating and authorizing access to the Zuper API. These keys enable seamless integration with Zuper's services, allowing developers to build robust applications that leverage real-time data and functionality. Click [here](https://docs.zuper.co/Settings/Developer_Hub/API_Keys) to know more.

* Navigation: **Settings -> Developer Hub -> API Keys**
* Enter your Zuper API Key.
* Click "**Update**" to activate GAF QuickMeasure.

4. Enter the Zuper API Key.

<Note>
  Note: The email ID used in Zuper should match the one used for the GAF QuickMeasure to authenticate the account successfully.
</Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/F4YloN0eKkbdCP7y/images/GAF11.png?fit=max&auto=format&n=F4YloN0eKkbdCP7y&q=85&s=c9c92357f429d83beceeb6cfa4cf2def" alt="GAF11" width="1920" height="878" data-path="images/GAF11.png" />
</Frame>

## **Order a New GAF QuickMeasure Measurement**

1. Access the **Job Details** page. Select the **Measurements** tab. Click **+ New Measurement** and choose GAF **QuickMeasure**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/F4YloN0eKkbdCP7y/images/GAF1.png?fit=max&auto=format&n=F4YloN0eKkbdCP7y&q=85&s=628f48ece0755802ae51b579feb65897" alt="GAF1" width="1920" height="878" data-path="images/GAF1.png" />
</Frame>

## **Order New Measurement Fields**

* **Property Type (Mandatory)**: Select from options: Single Family, Multiple Family, and Commercial.
* **What structures would you like included in your report? (Mandatory)**: Choose from Primary Structure Only, All Structures on Parcel, or All Structures except Primary Structure – **Applicable only for Single Family option.**
* **Include applicable codes and weather details in your order** – Add relevant compliance and historical data based on your project type:
  * For **Single** and **Multiple** projects: Building Codes and Weather History.
  * For **Commercial** projects: Design Criteria and Weather History. This ensures your order includes the appropriate regulatory and weather-related information required for your project type.
* **Provide any additional information**: Enter notes or special instructions for the measurement.
* **Email(s) to receive this report**: Add email addresses (separate with commas) to send the report to.
* Click **Place Order** to submit.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF5.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=bd49374a3d446159453c08a664490e6b" alt="GAF5" width="1920" height="878" data-path="images/GAF5.png" />
</Frame>

## **Select an Existing Project**

* The service address pre-fills in the search bar under the **Search Existing** tab.
* Results show matching GAF QuickMeasure reports for the address.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF16.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=ade7654a58243f68e56717a48c9985cb" alt="GAF16" width="1920" height="878" data-path="images/GAF16.png" />
</Frame>

* Select the desired report to sync it with the Zuper job.
* After creating the measurements, click **+ New Measurement** → **Choose Existing** to manually complete the sync.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF17.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=f782927d35998cf2f98dafe621e28c42" alt="GAF17" width="1920" height="878" data-path="images/GAF17.png" />
</Frame>

## **Viewing Synced Measurements**

* Measurements automatically sync from GAF QuickMeasure.
* Appear in the **Measurements** tab as a **Completed Measurement Card**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF17.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=f782927d35998cf2f98dafe621e28c42" alt="GAF17" width="1920" height="878" data-path="images/GAF17.png" />
</Frame>

* Inspect values aligned with Zuper's standard measurement tokens.

**View PDF**

* Click "**View In**" to view the measurements in PDFs or as a 3D view.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF18.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=ef389688cc1dad86713e870e365773ed" alt="GAF18" width="1920" height="878" data-path="images/GAF18.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF20.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=097b0de26b7f2e7c6e23ed1468ddab7d" alt="GAF20" width="1920" height="878" data-path="images/GAF20.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF21.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=f9d54c8e51b41903bb179629255be7e8" alt="GAF21" width="1920" height="878" data-path="images/GAF21.png" />
</Frame>

## **Edit Measurements**

* Click the "**Kebab**" menu to edit the measurements.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF23.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=4770ed2dfd89150ce207fbe749afb4db" alt="GAF23" width="1920" height="878" data-path="images/GAF23.png" />
</Frame>

* Modify the measurements and click "**Save**."

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF22.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=13b107f6f01ad81eb9472bc0aa1c1c6d" alt="GAF22" width="1920" height="878" data-path="images/GAF22.png" />
</Frame>

**Download PDF**

* Click the "**Kebab**" menu to download the PDF.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF24.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=05fc8bd8e0f8d436ef3eb62aff986380" alt="GAF24" width="1909" height="871" data-path="images/GAF24.png" />
</Frame>

## Manually sync measurement data

When you place a measurement order, GAF processes the request and automatically sends the data back to Zuper. However, if your order status shows **Completed** in GAF but the measurement data has not yet synced in Zuper, you can trigger a manual sync to pull the measurement data.

1. Locate the GAF measurement card you want to sync.
2. Select the context menu icon (three-dot icon) on the right side of the measurement card.
3. Select **Sync from GAF** from the menu.

<Frame>
  <img src="https://mintcdn.com/zuperinc/gVuF8x8sTxUbM74i/images/GAFnew1.png?fit=max&auto=format&n=gVuF8x8sTxUbM74i&q=85&s=f8b563b93dec09f31ff6f097807dd3ef" alt="GA Fnew1" width="1920" height="878" data-path="images/GAFnew1.png" />
</Frame>

**Removing Measurements**

* From the measurement card, click the **⋮ Menu** > **Remove**.
* Confirm the action.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF25.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=99fca4f64010439b041d5cd64e845c9c" alt="GAF25" width="1920" height="878" data-path="images/GAF25.png" />
</Frame>

* The measurement is unlinked from the job, with the activity logged in **Job Activity**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/fAF7Q-a1cRvd7Sto/images/GAF27.png?fit=max&auto=format&n=fAF7Q-a1cRvd7Sto&q=85&s=5c9645a2c8a20e0c9466f69babad3675" alt="GAF27" width="1920" height="878" data-path="images/GAF27.png" />
</Frame>

* Images from the measurement can be viewed in the **Gallery** tab

## **Uninstall GAF QuickMeasure from Zuper**

1. Click **Profile Picture** > **App Store**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/nNoa-R0ZKv3XbxIR/images/GAF9.png?fit=max&auto=format&n=nNoa-R0ZKv3XbxIR&q=85&s=11f5fef8bf812367825d02d2bb15df41" alt="GAF9" width="1920" height="878" data-path="images/GAF9.png" />
</Frame>

2. Go to **Measurements and Estimations** > **GAF QuickMeasure**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/nNoa-R0ZKv3XbxIR/images/GAF29.png?fit=max&auto=format&n=nNoa-R0ZKv3XbxIR&q=85&s=6c6641570ff7e2ea7f5f1cac941ca1e8" alt="GAF29" width="1920" height="878" data-path="images/GAF29.png" />
</Frame>

3. Click **Uninstall** **App**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-NWGf1HDPRUlgdmv/images/GAF134.png?fit=max&auto=format&n=-NWGf1HDPRUlgdmv&q=85&s=f03e50582bb7559d4e617f9e73e17dca" alt="GAF134" width="1920" height="878" data-path="images/GAF134.png" />
</Frame>

4. The integration is uninstalled.

<Frame>
  <img src="https://mintcdn.com/zuperinc/-NWGf1HDPRUlgdmv/images/GAF14.png?fit=max&auto=format&n=-NWGf1HDPRUlgdmv&q=85&s=0bd5f00e77895f099997849dfd879883" alt="GAF14" width="1920" height="878" data-path="images/GAF14.png" />
</Frame>

## GAF Mobile

Field executives rarely get to plan measurement orders from a desk, most of the need comes up mid-visit. A few situations where that matters:<br />

* A storm damage inspection turns into an on-the-spot scope conversation, and the report needs to be started before the field executive leaves the property.
* The homeowner points out a detached garage or shed that wasn't part of the original job, changing which structures the order should include.
* A same-day follow-up reveals the original order was never placed, and routing it through the front office would mean a second trip just to submit it.

GAF QuickMeasure is now available directly in the Zuper mobile app, so none of these have to wait. Field executives can place a new measurement order with the same Building Codes and Weather History add-ons available on the web. They can also search for and link an existing GAF QuickMeasure report, or edit synced measurement values, all without routing anything through the front office.

<Note>
  **Note**: Field executives need the appropriate custom role and permission enabled to place or edit orders from mobile.
</Note>

<br />

<img src="https://mintcdn.com/zuperinc/1aT-DXABtNUgkkUv/images/GAFMob.png?fit=max&auto=format&n=1aT-DXABtNUgkkUv&q=85&s=2915cf6945f21438055bd7a0061d5773" style={{ height:"690px",width:"350px" }} className="rounded-lg" width="1419" height="2796" data-path="images/GAFMob.png" />

<br />

## **FAQs**

<AccordionGroup>
  <Accordion title="What if the API key or credentials are incorrect?">
    Syncing will fail. Update your credentials by navigating to **Settings → App Store → GAF QuickMeasure → Configure Settings** and click **Save**.
  </Accordion>

  <Accordion title="Can multiple GAF QuickMeasure reports be linked to one Zuper job?">
    Yes, you can link multiple GAF QuickMeasure reports to a single Zuper job. This is particularly useful for complex roofing projects involving multiple structures.
  </Accordion>

  <Accordion title="Why isn't my existing GAF QuickMeasure report appearing in search?">
    Once a GAF QuickMeasure report has been completed and added to a job, it will no longer appear in search results.
  </Accordion>

  <Accordion title="Do changes in Zuper update back to GAF QuickMeasure?">
    No. Changes made in Zuper do not sync back to GAF QuickMeasure. The integration is one-way — measurement reports and data are imported from GAF QuickMeasure into Zuper only.
  </Accordion>

  <Accordion title="How do I add a weather code to a job?">
    When add-ons are selected, the related criteria and weather code details sync automatically.

    If the sync does not trigger automatically, complete it manually:

    1. After creating the measurement, click **+ New Measurement**.
    2. Select **Choose Existing**.
    3. The weather code details will sync to the job.
  </Accordion>

  <Accordion title="Can field technicians order measurements?">
    Yes. Field technicians can order GAF QuickMeasure measurements directly within Zuper, provided they have the appropriate **custom roles and permissions** assigned. See [Custom Roles](#custom-roles) for steps to enable the required permission.
  </Accordion>

  <Accordion title="I added the API key but I'm still seeing an error — what should I check?">
    Verify that the **email address** used in Zuper matches the one registered with your GAF QuickMeasure account exactly. A mismatch between the two will cause authentication to fail even when the API key is correct.
  </Accordion>
</AccordionGroup>

 


## Related topics

- [Hover Mobile](/Integrations/Measurements_and_estimations/Hover_mobile.md)
- [Proposal Template with CPQ](/Zuper_for_Roofing/Proposal_Template_with_CPQ.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.