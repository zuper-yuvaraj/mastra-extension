---
title: "Reputation Agent"
source: https://docs.zuper.co/Zuper_Sense/Marketplace_Agents/Reputation_Agent.md
fetched_at: 2026-10-06T13:29:36.246Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Reputation Agent

> Every new Google review, matched to the customer and job it belongs to.

The Reputation Agent watches your Google reviews, matches each reviewer to a customer in Zuper, and surfaces the job behind the review. You stop digging to work out which crew earned a review, and which one caused a complaint.

<Frame>**Navigation**: *Sense -> Agent Studio -> Marketplace*</Frame>

<Note>**Note**: Your business must be listed on Google, and only admins can set up an agent.</Note>

## Set up the Reputation Agent

1. Open **Sense** from the left navigation, then select **Agent Studio**.
2. Select **Marketplace** and find **Reputation Agent**.
3. Select **Setup agent**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation%20agent%201.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=e875369dfd49d8d52e4523d4743d2e3b" alt="The Sense Agents Marketplace catalog with the Reputation Agent card highlighted, next to the Accounts Receivable Agent marked Coming Soon" width="1400" height="702" data-path="images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation agent 1.png" />
</Frame>

4. Search for your listing under **Business** and select it.
5. Add anything you want to change about how reviews are assessed under **Custom Instructions**, or leave it as it is.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation%20agent%202.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=e71862d532ca700ddd733fdf9cdb51c4" alt="The Reputation Agent configuration with a Google business listing selected in the Business field and the built-in instructions below" width="1400" height="702" data-path="images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation agent 2.png" />
</Frame>

## Choose where reviews go

Under **Tools**, set one route or both:

* **Send Email**: Select **Configure** and enter the address the digest goes to.
* **Send Message (Chat)**: Select **Configure**, then name a new [Zuper Chat](/Chat/Channels) channel or select **Use existing channel**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation%20agent%203.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=9044ea683bc12261a8847e202e64ce69" alt="The Send Message (Chat) dialog with a Review Digest channel named, and a note that the channel is created when the agent is deployed" width="1400" height="702" data-path="images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation agent 3.png" />
</Frame>

<Note>Reviews posted to Zuper Chat are available on the web app only.</Note>

## Set how often it checks

1. Open the **Triggers** section and select the **Scheduled** trigger.
2. Choose a **Frequency**, for example **Every hour**, **Every day** or **Custom**.
3. Check the timezone shown below the time, then select **Done**.
4. Select **Deploy agent**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation%20agent%204.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=cafb971049ed62cc4dfe721732e99fc3" alt="The Scheduled trigger dialog on the Reputation Agent set to Every day at 9:00 AM in America/New_York" width="1400" height="702" data-path="images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation agent 4.png" />
</Frame>

<Note>**Note**: Each run fetches up to 5 reviews. If your business receives reviews faster than that, set a more frequent schedule (every 3 to 4 hours, for example) so none are missed.</Note>

## What your team receives

Each run checks for reviews that arrived since the last one. Every new review is posted as its own message, showing the reviewer's name, star rating and review text, plus the matched customer, job and schedule when a match is found.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation%20agent%205.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=0670089f6967e91a686faaaa45f001d1" alt="Two reviews posted to a Zuper Chat channel, one flagged NO MATCH and one flagged MATCHED with the linked customer, job and schedule" width="1400" height="839" data-path="images/Zuper_Sense/Marketplace_Agents/Reputation_Agent/Reputation agent 5.png" />
</Frame>

* **MATCHED**: The reviewer's name matched a customer record, so the job and schedule are shown.
* **NO MATCH**: No customer matched the reviewer's name, so follow up manually.
* **AMBIGUOUS**: More than one customer shares that first or last name, so confirm which one it is before following up
* If there are no new reviews since the last run, the agent does nothing.

<Tip>**Note**: Once the agent is deployed, select **Run now** to see the current reviews immediately, rather than waiting for the first scheduled run.</Tip>

## Change the agent later

Open **Agent Studio -> My agents**, select **Reputation Agent**, edit the business listing, instructions, tools or schedule, and select **Save changes**.

<Warning>Changing the **Business** listing changes which reviews the agent watches from the next run onwards. Reviews already posted stay in the channel.</Warning>


## Related topics

- [Marketplace agents](/Zuper_Sense/Agent_Studio/Marketplace.md)
- [Agent anatomy](/Zuper_Sense/Agent_Studio/Agent_Anatomy.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.