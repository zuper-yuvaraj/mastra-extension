---
title: "Upload Measurements"
source: https://docs.zuper.co/Integrations/Measurements_and_estimations/Upload_measurements.md
fetched_at: 2026-10-06T13:30:35.541Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Upload Measurements

## **Overview**

The **Measurement Upload** feature allows you to upload CSV measurement files from supported providers and automatically populate measurement values within a job.

Instead of manually entering measurements, Zuper reads the uploaded CSV file and maps the data to predefined measurement tokens using built-in system templates. This helps reduce manual data entry, minimize errors, and accelerate job setup.

## **Access & permissions**

* Measurement upload is available to all users who have access to the **Job Details** page.
* No additional permission or configuration is required.

## **Prerequisites**

Before uploading measurements, ensure that:

* You have a valid **CSV file** from Roofr, RoofSnap, or Bid Engine, or a valid **XML file** from Pitch Gauge.

## **Access Measurement Upload**

Measurement upload is available within the **Measurements** section of a job.

1. Go to the Job details page and open the **Measurements** section. Click **+ New Measurement**, then select **Upload Measurement**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/U1t_dkbBz9zY0o-3/images/Uplmea1.png?fit=max&auto=format&n=U1t_dkbBz9zY0o-3&q=85&s=5dee583c69e252e79692469e5cb98adb" alt="Uplmea1" width="1920" height="878" data-path="images/Uplmea1.png" />
</Frame>

2. When the upload panel opens, you must select a **provider** before uploading the file. These templates contain predefined mappings between the provider’s measurement tokens and Zuper measurement tokens. After selecting a template, proceed to upload the CSV file

<Frame>
  <img src="https://mintcdn.com/zuperinc/U1t_dkbBz9zY0o-3/images/Uplmea2.png?fit=max&auto=format&n=U1t_dkbBz9zY0o-3&q=85&s=4abe47171c3ee575f1992ef285801949" alt="Uplmea2" width="1920" height="878" data-path="images/Uplmea2.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/Wxm-TO9_zrj7bGQ6/images/pitchgauge.png?fit=max&auto=format&n=Wxm-TO9_zrj7bGQ6&q=85&s=3969c48371b38d66dc6bc2dd70b28abf" alt="Pitchgauge" width="1891" height="782" data-path="images/pitchgauge.png" />
</Frame>

3. Upload or drag and drop your CSV file. It will be validated automatically. Then click **Next**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/U1t_dkbBz9zY0o-3/images/Uplmea3.png?fit=max&auto=format&n=U1t_dkbBz9zY0o-3&q=85&s=19d89725471c22161b5140f3bd0e6128" alt="Uplmea3" width="1920" height="878" data-path="images/Uplmea3.png" />
</Frame>

4. Use the attachments tab to upload the measurement PDF.
   <Note>
     **Note:** Only PDF files are supported.
   </Note>

<Frame>
  <img src="https://mintcdn.com/zuperinc/786b6lDOhLtVRtp0/images/Uplmea14-1.png?fit=max&auto=format&n=786b6lDOhLtVRtp0&q=85&s=1819f3333927e421e1ed94a8bf752d18" alt="Uplmea14 1" width="1920" height="878" data-path="images/Uplmea14-1.png" />
</Frame>

5. After reviewing the values, click **Create**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/786b6lDOhLtVRtp0/images/Uplmea21-1.png?fit=max&auto=format&n=786b6lDOhLtVRtp0&q=85&s=4478f4378192b97f9f6ecdec73c84316" alt="Uplmea21 1" width="1920" height="878" data-path="images/Uplmea21-1.png" />
</Frame>

Zuper generates measurement records within the Job using the values from the uploaded CSV file.

The first measurement card is active by default.

<Frame>
  <img src="https://mintcdn.com/zuperinc/U1t_dkbBz9zY0o-3/images/Uplmea16.png?fit=max&auto=format&n=U1t_dkbBz9zY0o-3&q=85&s=88c2482a92261a565453f5e7e56c0ec2" alt="Uplmea16" width="1906" height="869" data-path="images/Uplmea16.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/OqeVG7JRGTEp2gKA/images/Uplmea8.png?fit=max&auto=format&n=OqeVG7JRGTEp2gKA&q=85&s=5725ec1527b6306b03c0928c0e1252f6" alt="Uplmea8" width="1920" height="878" data-path="images/Uplmea8.png" />
</Frame>

## **Edit Measurement Values**

1. If you modify a value during the preview step, the system displays an **Edited** label on the measurement after creation.

<Frame>
  <img src="https://mintcdn.com/zuperinc/U1t_dkbBz9zY0o-3/images/Uplmea6.png?fit=max&auto=format&n=U1t_dkbBz9zY0o-3&q=85&s=f6630ec882f9665654c0f5b0f88db517" alt="Uplmea6" width="1920" height="878" data-path="images/Uplmea6.png" />
</Frame>

2. Upload measurement files by clicking the **Attachments** tab, then **Upload**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/OqeVG7JRGTEp2gKA/images/Uplmea8.png?fit=max&auto=format&n=OqeVG7JRGTEp2gKA&q=85&s=5725ec1527b6306b03c0928c0e1252f6" alt="Uplmea8" width="1920" height="878" data-path="images/Uplmea8.png" />
</Frame>

## **Activity Tracking**

* Every measurement upload automatically generates an **activity log** entry within the Job.

<Frame>
  <img src="https://mintcdn.com/zuperinc/U1t_dkbBz9zY0o-3/images/Uplmea18.png?fit=max&auto=format&n=U1t_dkbBz9zY0o-3&q=85&s=78436a9a35d54db6162aa333742bab60" alt="Uplmea18" width="1909" height="868" data-path="images/Uplmea18.png" />
</Frame>

## **Disabled Measurement Tokens**

In some cases, the customer configuration may turn off certain measurement tokens.

If the uploaded CSV contains values for those tokens:

* The tokens will still appear within the Job
* Their values remain visible

This ensures that measurement data from the uploaded file is not lost.

## **Best Practices**

* Always choose the template that matches the CSV file's source to ensure accurate data mapping.
* Verify all measurement values in the preview screen before creating measurements.

## FAQs

<AccordionGroup>
  <Accordion title="Do I need to manually set up system templates or field mappings?">
    No. Zuper automatically manages system templates and field mappings. No setup is required.
  </Accordion>

  <Accordion title="What happens if some measurement tokens are disabled in the configuration?">
    If the uploaded CSV contains values for disabled tokens, those tokens still appear in the job and their values remain visible. This ensures that no imported data is lost.
  </Accordion>

  <Accordion title="Why do I see a &#x22;No measurement data found in the uploaded CSV&#x22; error?">
    Each provider: Roofr, RoofSnap, Bid Engine, and Pitch Gauge, uses a different file format. If the file does not match the structure Zuper expects for the selected provider, the system cannot read it, and the upload fails. <br />To resolve this, confirm that the CSV file is from the provider you selected and that it has not been modified.
  </Accordion>

  <Accordion title="Why do I see a &#x22;No measurement data found in the uploaded XML file&#x22; error?">
    The **Pitch Gauge** XML file does not match the structure Zuper expects, or it is not a valid XML file. <br />To resolve this, confirm that the file was exported directly from Pitch Gauge and has not been modified or renamed. <br />If the issue continues, contact [Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>


## Related topics

- [Configuring Measurements](/Settings/Modules/Jobs/Configuring_Measurements.md)
- [Accept or Reject a Work Order](/Purchasing/Work Orders/Accept reject work order.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.