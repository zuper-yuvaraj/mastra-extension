---
title: "Using Conditional Rules"
source: https://docs.zuper.co/Zuper_for_Roofing/Conditional_Rule.md
fetched_at: 2026-10-06T13:30:40.966Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Using Conditional Rules 

> If this condition is true, then perform this action. Otherwise, take another action

**Conditional Rules** control how individual line items behave when a proposal is automatically generated from a CPQ-based template. Each rule is defined directly on a product, service, bundle, or service package in the **Package Configuration** stage of the template. While generating a proposal, Zuper checks real job data, such as measurement token values, checklist responses, and job details, and then automatically decides whether that line item should be added, removed, or markup should be adjusted.

For example, if the roof pitch is greater than 6/12, you can set the rule to add the premium underlayment line item to the proposal automatically; otherwise, the standard underlayment option is included instead.

In this guide, we will explore how to access and define the condition rule for the line item in the CPQ proposal template.

## Accessing the Conditional Rules

You’ll find **Conditional Rules** when you’re setting up your **CPQ Proposal template** in the Quote Builder.

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect32.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=de9b8398985f9031dad586c6e96bc223" alt="Sect32" width="1920" height="878" data-path="images/Sect32.png" />
</Frame>

When you add a material, service, or bundle, you’ll see an **Add Rule** option beside it. Click that, and the **Conditional Rule** panel will open.

<Tip>
  **Tip:** To apply the same rule to multiple items at once, select the checkboxes next to the required items, and then click **Add Rule** from the toolbar. The **Conditional Rule** panel opens, allowing you to configure the rule once and apply it to all selected items when you save it.

  <Frame>
    <img src="https://mintcdn.com/zuperinc/8IPo8gCNznaw0EIk/images/bulkrule.png?fit=max&auto=format&n=8IPo8gCNznaw0EIk&q=85&s=558697539091599e64dc592bcf8bedc6" alt="Bulkrule" width="1920" height="912" data-path="images/bulkrule.png" />
  </Frame>
</Tip>

<Note>
  **Note:** For a **Fixed Bundle**, the Conditional Rule is applied at the bundle level. For a **Roll-Up Bundle**, the rule is stored against each individual item within the bundle. If you no longer need a rule, click the **X** icon next to it to remove it.
</Note>

That’s where you’ll build your rule, and it’s divided into three simple sections: **IF**, **THEN**, and **ELSE**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect34.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=54404761973d39e2602dbbb916550a87" alt="Sect34" width="1920" height="878" data-path="images/Sect34.png" />
</Frame>

### **Set the Condition (IF section)**

In the **IF** section, you define what should be checked before deciding how to handle the line item. You can add multiple conditions using **ALL (AND)** or **ANY (OR)** logic.

* Click “**+ Add condition**”.
* Choose the **data source** (*Job, Checklist, or System*) and select the **field** .
* Set an **operator** such as *is*, *is not*, *greater than*, *less than*, etc.
* Enter a comparison **value** .<br /><br />`IF Job Category = Roofing ALL “New Job” = Yes`

### **Define the Action (THEN Section)**

The **THEN** section tells what to do with the line item when the IF condition is true.<br />Available actions include:

* **Add Item**
* **Remove Item**
* **Adjust Markup**

`THEN Adjust markup = 5`

### **Define the Alternate Action (ELSE Section)**

The **ELSE** section defines what happens if the condition is not met.<br />Similar to then actions:

`ELSE Add item`

When you’re finished, use the **Rule** toggle at the top to enable or disable the rule, then click **Save.**

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect33-1.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=a27fa02385fbf57bed75e8b2abd896c6" alt="Sect33 1" width="1920" height="878" data-path="images/Sect33-1.png" />
</Frame>

### **Section Rules - CPQ**

Rules can be applied at the [section](https://docs.zuper.co/Accounting/Sections) level in CPQ templates, in addition to individual item rules. Here is how the precedence rules work:

<AccordionGroup>
  <Accordion title="Add Section Rule">
    * If the section-level rule allows the section to be added, each item's rule is evaluated individually.
    * Items whose rules do not meet the conditions are excluded.
    * The section is added with only the eligible items.
  </Accordion>

  <Accordion title="Remove Section Rule">
    * If a rule removes a section, it overrides all item-level rules within it.
    * All items in that section are removed, regardless of their individual rule conditions.
  </Accordion>

  <Accordion title="Empty Section Handling">
    If a section is added but no items qualify after item-level rules are evaluated, the section is not displayed on the proposal.
  </Accordion>

  <Accordion title="If Section Handling">
    Note that Products are not available as a source within the IF condition for sections.  
  </Accordion>
</AccordionGroup>

<Frame>
  <img src="https://mintcdn.com/zuperinc/r_ueXa0MUhgIBr_E/images/Sect28.png?fit=max&auto=format&n=r_ueXa0MUhgIBr_E&q=85&s=07bccd6dd26c919bf8baa9e26840b598" alt="Sect28" width="1920" height="878" data-path="images/Sect28.png" />
</Frame>

Your rule will now automatically evaluate every time a user interacts with that item. Click [here ](https://docs.zuper.co/Accounting/Sections)to know more about the Sections.


## Related topics

- [Proposal Template with CPQ](/Zuper_for_Roofing/Proposal_Template_with_CPQ.md)
- [Build and Sign Proposal](/Zuper_for_Roofing/create_your_proposal.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.