---
title: "Weather Agent"
source: https://docs.zuper.co/Zuper_Sense/Marketplace_Agents/Weather_Agent.md
fetched_at: 2026-10-06T13:29:36.084Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Weather Agent

> A weather digest for every city your crews work in, delivered to Zuper Chat or email.

The Weather Agent sends your field crews a weather update for the cities they work in based on the schedule - daily, weekly etc. It assesses conditions, flags safety concerns and work impact, and delivers a structured digest without anyone checking a forecast by hand.

<Frame>**Navigation**: *Sense -> Agent Studio -> Marketplace*</Frame>

<Note>**Note**: Only admins can set up an agent.</Note>

## Set up the Weather Agent

1. Open **Sense** from the left navigation, then select **Agent Studio**.
2. Select **Marketplace** and find **Weather Agent**.
3. Select **Setup agent**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather%20agent%201.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=91677bc02aa4bc9a60b42bdac527e048" alt="The Weather Agent card in the Sense Agents Marketplace catalog, with its Setup agent button" width="3420" height="1972" data-path="images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather agent 1.png" />
</Frame>

4. Add every city your crews work in under **Cities to forecast**.
5. Turn on **Hail alerts** if you want today's hail probability included.
6. Add anything you want to change about the digest under **Custom Instructions**, or leave it as it is.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather%20Agent%202.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=60fcb49cde4dc9bcfd3060b63add61b0" alt="The Weather Agent configuration with five cities added, the Hail alerts toggle, and the built-in instructions describing each run" width="3420" height="1972" data-path="images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather Agent 2.png" />
</Frame>

<Info><Badge color="green">New</Badge> **Hail alerts** adds hail probability from the NOAA Storm Prediction Center outlook. US locations only.</Info>

## Choose where the digest goes

Under **Tools**, set one route or both:

* **Send Email**: Select **Configure** and enter the address the digest goes to.
* **Send Message (Chat)**: Select **Configure** and name the [Zuper Chat](/Chat/Channels)channel the digest is posted to.
* **Get Weather**: Select **Configure** to change the cities or the **Hail alerts** setting later.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather%20Agent%204.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=2819d1618fabf77c52cae04d254e8157" alt="The Get Weather tool dialog with the cities list and the Hail alerts toggle turned on, over the agent's Tools section" width="3420" height="1972" data-path="images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather Agent 4.png" />
</Frame>

<Note>The digest in Zuper Chat is available on the web app only.</Note>

## Set the daily time

1. Open the **Triggers** section and select the **Scheduled** trigger.
2. Choose **Every day** and set the time the digest should go out.
3. Check the timezone shown below the time, then select **Done**.
4. Select **Deploy agent**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather%20Agent%203.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=cb6b8c16f38b8cc41184978ff6b78e2a" alt="The Scheduled trigger dialog set to Every day at 9:00 AM, with the timezone shown below" width="3420" height="1972" data-path="images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather Agent 3.png" />
</Frame>

<Tip>Once the agent is deployed, select **Run now** to see the digest immediately and check it reads the way you want, rather than waiting for the first scheduled run.</Tip>

## What your team receives

Each run fetches the forecast for every configured city and produces one digest containing:

* An overall safety and work impact assessment is flagged when conditions need attention.
* Recommendations for the day, written for crews working outdoors.
* A city-by-city outlook, with hail probability where **Hail alerts** are on.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather%20Agent%205.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=d58cf70a0c8e7a8ece0591312712d6d0" alt="A Weather Digest posted to a Zuper Chat channel, with a hail risk table, safety and work impact assessments, recommendations and a city outlook" width="3420" height="1972" data-path="images/Zuper_Sense/Marketplace_Agents/Weather_Agent/Weather Agent 5.png" />
</Frame>

Open the **Chat** module and the channel you configured to read the update, or check the email address you set.

## Change the agent later

Open **Agent Studio -> My agents**, select **Weather Agent**, edit the cities, instructions, tools or schedule, and select **Save changes**.

<Warning>Removing the **Send Message (Chat)** or **Send Email** tool stops the digest from reaching your team by that route, even though the instructions still describe it.</Warning>


## Related topics

- [Marketplace agents](/Zuper_Sense/Agent_Studio/Marketplace.md)
- [Agent anatomy](/Zuper_Sense/Agent_Studio/Agent_Anatomy.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.