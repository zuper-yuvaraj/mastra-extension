---
title: "Hover Mobile"
source: https://docs.zuper.co/Integrations/Measurements_and_estimations/Hover_mobile.md
fetched_at: 2026-10-06T13:30:34.524Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Hover Mobile

## **Overview**

The Zuper Hover integration enables field technicians and users to order professional roof measurements seamlessly, directly from the Zuper mobile app. This enables quick capture of accurate measurements for roofing inspections, estimates, and job planning without manual entry. Once ordered, Hover processes the request, syncs the data back to Zuper, and provides a summary report with key metrics like roof area, ridge lengths, and more.

This mobile integration builds on the web-based setup, allowing on-the-go ordering and real-time viewing of synced measurements. Benefits include:

* Reduced errors in manual data entry.
* Instant access to Hover's 3D models and PDFs.
* Support for both new orders and linking existing Hover projects.
* Visual indicators for manual edits.

<Note>
  **Note:** The integration must be enabled via the Zuper web portal first (see [Zuper Hover Integration (Web)](https://docs.zuper.co/Integrations/Measurements_and_estimations/Zuper_Hover) for setup details).
</Note>

## **Plan Requirements for Hover Integration**

To use Hover on mobile, ensure your Zuper and Hover subscriptions meet these requirements:

The minimum subscription requirement for Zuper is a **Professional** or **Enterprise** plan. For Hover, the minimum requirement is **Scale** or **Transform**.

## **How to Order a New Hover Measurement on Mobile**

From a job in the Zuper mobile app, add measurements using Hover's professional service.

### **Prerequisites**

* Active job with a service address.
* Hover integration is enabled via the web.
* Sufficient measurement tokens.

**Steps**

1. Open the job in the Zuper Mobile.
2. Tap **+ New Measurement** in the Measurements section.

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH30-landscape.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=6826475df3cbda2e57015363fa76e2d5" data-path="images/ZH30-landscape.png" />

In the App, you can create a new measurement or search for an existing measurement.

**Create New**: Order a new Hover project.

**Search Existing**: Search by project name, ID, or street address, then select the project

### **Create New Measurement**

1. Select **Create New**.
2. Fill **Primary Information**:
   * **Project Name** – Prefilled from the measurement.
   * **Deliverable Type**
   * **User Assigned** – Users from Hover.
3. Fill **Capturer Information**:
   * **Captured By** – The person who captures the property image.
   * **Name** – The name of the image capturer.
   * **Email** – The Email ID of the capturer.
   * **Phone Number** – The Phone number of the capturer.
4. Tap **Place Order**.

5.    Once the order is placed, the field technician will receive the success message.

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH31-portrait.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=cfb029bf74a19e05572fee60a7bea3b0" data-path="images/ZH31-portrait.png" />

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH35-portrait.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=6891de8ee34fe7d791e67dee798f616d" data-path="images/ZH35-portrait.png" />

### **Select an Existing Project**

1. Select **Search Existing.**
2. Search by project name, ID, or street address in the search bar.
3. Select the project from the results.

Tap 'Add' to sync measurements and results automatically.

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH34-portrait.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=3651957ae03a11d7a4d5f87b21254367" data-path="images/ZH34-portrait.png" />

### **Viewing Synced Measurements**

Once synced, view summaries directly on your mobile device, with options to search and filter tokens.

**Steps**

1. In the job, go to the **Measurements** section.
2. Tap the synced measurement.
3. In **Measurement Summary**:
   * Use the search bar to filter tokens.
   * View **Measurement Categories**.
   * Check for manual update indicators: An orange indicator shows the manually updated values.

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH38-portrait.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=d709752038c26dc5efcb4bb857881298" data-path="images/ZH38-portrait.png" />

### **Editing Synced Measurements**

Edit for accuracy post-sync; changes are flagged as manual updates.

**Steps**

1. In **Measurement Summary**, tap the pencil icon next to the **Measurement Category**.
2. In **Edit Measurements**, update fields.
3. Tap **Save**.

<img width="250" height="200" src="https://mintcdn.com/zuperinc/368ysttn4fVVgrEZ/images/ZH42-portrait.png?fit=max&auto=format&n=368ysttn4fVVgrEZ&q=85&s=b0ce13055453e556a66417ff02727e79" data-path="images/ZH42-portrait.png" />

<Note>
  **Note**: Manual edits are flagged with orange dots (•) in the summary and contribute to the manual update count. They don't affect the original Hover data.
</Note>

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH37-portrait.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=a2a2605b281d5c6daf40dfdd614f6ebc" data-path="images/ZH37-portrait.png" />

**Downloading Files**

1. In **Measurement Summary**, click the Ellipsis icon (three vertical dots).
2. Select View PDF and save to files.  

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH39-portrait.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=786e8334d9c8bd7c834ba2a5e49c8f2a" data-path="images/ZH39-portrait.png" />

**Removing Measurements**

Remove synced measurements from the job without affecting the original Hover project.

**Steps**

1. In the **Measurements** section, click the Ellipsis icon (three vertical dots) and select Remove.
2. On the confirmation dialog box, click **Yes** to remove the measurement from the job only.

<img width="250" height="200" src="https://mintcdn.com/zuperinc/368ysttn4fVVgrEZ/images/ZH42-portrait.png?fit=max&auto=format&n=368ysttn4fVVgrEZ&q=85&s=b0ce13055453e556a66417ff02727e79" data-path="images/ZH42-portrait.png" />

<img width="250" height="200" src="https://mintcdn.com/zuperinc/yxnhNuWmu3ZFjFOm/images/ZH40-portrait.png?fit=max&auto=format&n=yxnhNuWmu3ZFjFOm&q=85&s=a0f97a47422cc19c63a2e925997454df" data-path="images/ZH40-portrait.png" />

## **FAQs**

<AccordionGroup>
  <Accordion title="How long does Hover syncing take on mobile?">
    Sync duration varies depending on the size and complexity of the measurement. Check the **status badge** on the measurement card for real-time progress.
  </Accordion>

  <Accordion title="Why are some values shown in orange in the summary?">
    Orange indicators — dots (•) and banners — flag values that have been manually edited after the initial sync. For example, you may see a banner stating **"3 value(s) have been manually updated"** to indicate the number of overridden fields.
  </Accordion>

  <Accordion title="How does token search work?">
    Type a keyword in the search bar to filter the measurement summary and display only relevant metrics. For example, searching **"Total Valleys Length"** will surface that token and hide unrelated values.
  </Accordion>

  <Accordion title="Does mobile support manual entry alongside Hover?">
    Yes. In the **New Measurement** modal, select **Manual Entry** to input measurement values directly without placing a Hover order. Both methods can be used on the same job.
  </Accordion>

  <Accordion title="How do I troubleshoot a failed order?">
    1. Verify the **service address** in Zuper is complete and accurate — partial or mismatched addresses are the most common cause of failed orders.
    2. If the order status does not update after correcting the address, contact **Zuper Support** at [support@zuper.co](mailto:support@zuper.co).

    For web setup or advanced configuration, refer to the [Zuper Hover Integration (Web)](https://docs.zuper.co/Integrations/Measurements_and_estimations/Zuper_Hover) article.
  </Accordion>
</AccordionGroup>


## Related topics

- [Create Your First Inspection Job](/Zuper_for_Roofing/create_inspection.md)
- [Hover Web](/Integrations/Measurements_and_estimations/Zuper_Hover.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.