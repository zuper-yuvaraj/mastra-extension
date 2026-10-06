---
title: "Formula Library"
source: https://docs.zuper.co/Zuper_for_Roofing/Formula_Library.md
fetched_at: 2026-10-06T13:30:40.965Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Formula Library

The **Formula Library** in Zuper lets you automate the calculations behind your proposals. Instead of manually figuring out quantities or pricing, you can use formulas that pull real data from the job, measurements, checklist fields, and product details to handle the math automatically. <br />Zuper includes pre-loaded formulas to help you get started, and you can view, duplicate, or create your own to match how your business prices work. With this, you'll achieve faster proposals, consistent pricing, and a more professional quoting experience for your customers.

<iframe width="650" height="350" src="https://drive.google.com/file/d/1-Id1NX_5Oba9T_jIG9mJRCrBk0QcYWOi/preview" />

## Accessing the Formula Library

Navigate to the **Settings** module from the left navigation menu and select **Module → Quotes & Invoice → Zuper IQ – Intelligent Quoting → Formula Library**.

<img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Formula-01.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=9bf21b3f74147a03b2c186a26c84f3a1" alt="Formula 01 Pn" width="1920" height="869" data-path="Settings/Modules/Quotes-Invoices/images/Formula-01.png" />

Here, you can view all your preloaded formulas and manage them whenever necessary.

**Pre-loaded Formulas**:  Access our [Formula Cheat Sheet](https://drive.google.com/file/d/1Z7rffb6QhCBKvY431oVJR60jYqDFoAHL/view?usp=drive_link) for a better understanding of how different formulas work and can be used.

## Creating a New Formula

You can create your own formulas in Zuper by adding measurement tokens, checklist fields, and custom fields from both products and jobs. These fields pull real-time data to calculate exactly what you need for each proposal.

When you click **+ New Formula**, the Formula Builder will open. The workspace where all your logic comes together.

<img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Formula-02.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=c82eb885cf994c5d11e103ec47c913ac" alt="Formula 02 Pn" width="1656" height="382" data-path="Settings/Modules/Quotes-Invoices/images/Formula-02.png" />

Let’s start adding your formula details in the steps below:

1. Give a **Formula Name** that your team will see later when applying the formula.
2. Enter a unique identifier. This **Formula** **Key** is the system reference that connects it to your templates.
3. Choose the relevant **category**, such as Area, material pricing, labor, and waste.
4. Add a short **description** if you want to remind yourself (or your team) what this formula does.
5. In the **Formula Expression** section, you can write your formula for calculations.
   * Use **@** to insert fields such as custom fields, checklist fields, or measurement tokens (like roof area or slope).
   * Use standard operators and functions like *CEIL(), FLOOR(), MAX()*, and others to build your equation.
   * You can include conditional logic using IF / ELSE statements.
     For example:
     IF ( Total Roof Area = "Hip Roof", 1.15,
     IF ( Total Roof Area = "Gable Roof", 1.10,
     IF (Total Roof Area = "Mansard Roof", 1.15,
     IF (Total Roof Area = "Hip and gable Roof", 1.12, 0 ))))
   * Click **Validate** to check your syntax before saving.

<img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Formula-03.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=4b0879a3dd5edfc479ba7baacfa078ac" alt="Formula 03 Pn" width="1920" height="869" data-path="Settings/Modules/Quotes-Invoices/images/Formula-03.png" />

6. **Test your formula**: A **Preview/Test** panel on the right side, where you can add sample values and see the result instantly.

<Note>
  **Note**: The preview focuses on your main expression only. IF/THEN conditions or advanced logic are ignored during testing.
</Note>

<img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Formula-04.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=def504beb65c03fdecd2af033700054b" alt="Formula 04 Pn" width="1721" height="702" data-path="Settings/Modules/Quotes-Invoices/images/Formula-04.png" />

7. In the **Rounding** section, you can choose how decimal results are rounded to fit real-world roofing needs.
   <img src="https://mintcdn.com/zuperinc/BdB86WRDU0AVlRVG/images/roundoff.png?fit=max&auto=format&n=BdB86WRDU0AVlRVG&q=85&s=a2b91c7cf12c5efa9b96278b7c3dd564" alt="Roundoff" width="1920" height="869" data-path="images/roundoff.png" />
8. Once you have confirmed that it works, click **Save Formula**.

<img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/Formula-06.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=6854fbbd5d8d1897e23d2f2e3e96a9c1" alt="Formula 06 Pn" width="1920" height="869" data-path="Settings/Modules/Quotes-Invoices/images/Formula-06.png" />

### Managing a formula

Once a formula is created, you can always go back whenever you want to modify.<br />From the Formula Library, click the **three-dot menu** beside a formula and choose **Edit, Deactivate,** or **Clone**.

Editing updates the formula directly, while duplicating allows you to create a new version without affecting the original one.

<img src="https://mintcdn.com/zuperinc/FpkWGxB0oAWPMhRb/Settings/Modules/Quotes-Invoices/images/formula-07.png?fit=max&auto=format&n=FpkWGxB0oAWPMhRb&q=85&s=70d2ed21248c57bc40c007127a08099d" alt="Formula 07 Pn" width="1920" height="869" data-path="Settings/Modules/Quotes-Invoices/images/formula-07.png" />

<Warning>
  **Remember**:

  * Templates that already use the old formula will continue to work until you choose to replace them manually.
  * Proposals that have already been created will not be updated retroactively.
</Warning>


## Related topics

- [How Zuper CPQ Works](/Zuper_for_Roofing/CPQ_works.md)
- [Overview](/Zuper_for_Roofing/Proposal_Template.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.