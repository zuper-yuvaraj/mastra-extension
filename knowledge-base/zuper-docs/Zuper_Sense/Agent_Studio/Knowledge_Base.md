---
title: "Knowledge Base"
source: https://docs.zuper.co/Zuper_Sense/Agent_Studio/Knowledge_Base.md
fetched_at: 2026-10-06T13:29:36.378Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Knowledge Base

> Teach your Zuper Sense agents your terminology, policies and calculation rules.

Knowledge Base is where you teach your agents how your business actually works. Once an entry is published and linked to an agent, Zuper Sense applies it every time it answers a related question, instead of falling back on a generic definition.

<Frame>**Navigation**: *Sense -> Agent Studio -> Knowledge base*</Frame>

## Add an entry

1. Open **Sense** from the left navigation, then select **Agent Studio**.
2. Select the **Knowledge base** in the left panel.
3. Select **+ Add Knowledge** at the bottom of the list.
4. Choose **Write knowledge** to type context, policies or FAQs directly.
   1. Paste a link to have Sense crawl a webpage, or upload a file to add a PDF, doc or sheet.
   2. Whichever way you add it, Sense extracts the content and shows it as text in the knowledge editor. For a link, select Refresh to re-crawl the page and pull in any changes..
5. Enter your content, then give the entry a clear title.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge%20base%201.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=fb54a5c94b1801447382753d99342e05" alt="The Knowledge Base list with the Add Knowledge menu open, showing the Write knowledge, Paste a link and Upload a file options" width="1400" height="702" data-path="images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge base 1.png" />
</Frame>

<Note>**Note**: Uploaded files are limited to 7 MB each. Use the **All**, **Docs** and **Links** filters above the list to find an entry later.</Note>

## Publish an entry

Select **Publish knowledge** when the entry is ready for agents to use. Until then, it stays a draft, and no agent reads it.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge%20base%202.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=27121b3649da435a06b9ac36f0fa0663" alt="A published Knowledge Base entry titled Completed Job Definition, showing the rule text and the Published state" width="1400" height="702" data-path="images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge base 2.png" />
</Frame>

A good entry states the rule and the reasoning behind its edge cases. An entry called "Completed Job Definition" might say a job counts as completed only once its status is Closed and its final invoice is paid in full, then explain why insurance payouts and financing delays are handled that way.

<Tip>**Tip**: Be specific about edge cases, not just the general rule. The "why it matters" context is what lets an agent apply a rule correctly rather than repeat it.</Tip>

## Link an entry to an agent

You can link an entry from either side.

### From the agent

1. Open the agent from **My agents**.
2. Go to its **Knowledge** section and select **Add knowledge**.
3. Toggle on the entries this agent should use, then select **Done**.
4. Select **Save changes**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge%20base%203.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=4628849d44c8ed71b613682e8befadd4" alt="The Business Intelligence Agent page with its Knowledge Base section and the Add knowledge button highlighted" width="1400" height="702" data-path="images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge base 3.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge%20base%204.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=d8bd3a6b6db3bf5b1f779210f24bbdfd" alt="The Add knowledge dialog listing every entry with a toggle beside each one" width="1400" height="702" data-path="images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge base 4.png" />
</Frame>

### From the entry

1. Open the entry from the **Knowledge base**.
2. Select **Add agents** next to **Used by** at the top right.
3. Select **+ Add** beside each agent that should use it.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge%20base%205.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=693bb228e2b403cc146dc2c02c8651b3" alt="The Used by panel on a Knowledge Base entry, listing the Business Intelligence Agent and Weather Agent with Add buttons" width="1400" height="702" data-path="images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge base 5.png" />
</Frame>

<Note>**Note**: One entry can be linked to several agents, and one agent can use several entries. Updating an entry updates it for every agent it is linked to.</Note>

## How agents use knowledge

Once an entry is published and linked, ask Sense a related question, and it applies your rule instead of guessing, and it names the entry it used.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge%20base%206.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=31a998c32cc002247e07bec8e766c430" alt="A Sense answer about completed jobs that applies the published rule and lists two Knowledge Base entries under 2 sources" width="3840" height="1926" data-path="images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge base 6.png" />
</Frame>

Select a source to read the entry that shaped the answer.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge%20base%207.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=3b01e9507c1cdb06d460ea19f7479678" alt="The Completed Job Definition entry opened from the Sources list of a Sense answer" width="3840" height="1926" data-path="images/Zuper_Sense/Agent_Studio/Knowledge_Base/Knowledge base 7.png" />
</Frame>

## Keep entries current

When your business rules or terminology change, edit the entry and publish it again so answers stay accurate. Editing an entry that is already linked takes effect for every agent using it, with nothing else to reconnect.

<Warning>Deleting an entry removes it from every agent linked to it, and their answers go back to generic definitions from the next question onwards.</Warning>


## Related topics

- [AI CSR Agent](/Zuper_Connect/CSR-Agent.md)
- [Agent anatomy](/Zuper_Sense/Agent_Studio/Agent_Anatomy.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.