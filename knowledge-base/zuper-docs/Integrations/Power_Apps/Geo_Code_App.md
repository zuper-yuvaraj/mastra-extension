---
title: "Geo Code"
source: https://docs.zuper.co/Integrations/Power_Apps/Geo_Code_App.md
fetched_at: 2026-10-06T13:30:39.383Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Geo Code

Bring pinpoint accuracy to your customers' addresses with our Geo-Code Power app! When you integrate third-party apps, you may end up fetching the customer’s address without geo-coordinates.

With this new Geo-Code power app, the exact location of your customers can be instantly and accurately captured. Get ready for reliable results every time - say goodbye to complex location tracking forever!

<Check>
  **Pre-Requisites:**\
  [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) and [Zuper API Key](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys)
</Check>

## **Connect Geo-Code with Zuper**

Listed below are the steps to enable the Geo Code app on Zuper.

1. Open a new tab in your browser after logging in to your Zuper Account. Click on your Profile Picture in the top right corner of the screen and click on “**App Store**.”

<img src="https://mintcdn.com/zuperinc/Dts7PUeiYTTTU1SD/images/Geocode1.png?fit=max&auto=format&n=Dts7PUeiYTTTU1SD&q=85&s=3a7a5a6e236189d85ebdd8c1ff1a9a9b" alt="Geocode1 Pn" width="1838" height="887" data-path="images/Geocode1.png" />

2. Under the “**Browse by Category**,” select the “**Power Apps**” option and choose “**Geo Code**.”

<Frame>
  <img src="https://mintcdn.com/zuperinc/I0qVpoO0vzrJBgwe/images/geocodeup1.png?fit=max&auto=format&n=I0qVpoO0vzrJBgwe&q=85&s=fed10d06bee20ac9c29e63c7d97d91b3" alt="Geocodeup1" width="1920" height="878" data-path="images/geocodeup1.png" />
</Frame>

3. Click on the “**Install Geo Code**” button.

<Frame>
  <img src="https://mintcdn.com/zuperinc/I0qVpoO0vzrJBgwe/images/geocodeup2.png?fit=max&auto=format&n=I0qVpoO0vzrJBgwe&q=85&s=eaf94e18c7276c4463a4be62e6b0257e" alt="Geocodeup2" width="1920" height="878" data-path="images/geocodeup2.png" />
</Frame>

4. Now, you can enable “**Update Geo Codes Settings**” by entering the following details.
   * **Google Maps API Key** (Mandatory Field) – Enter the Application Programming Interface key. (This is fetched from the [Google Maps API ](https://developers.google.com/maps/documentation/javascript/get-api-key)obtained from the Customer).
   * **Zuper API Key** (Mandatory Field) - Enter the Zuper API key [(Click here: How to generate Zuper API Key).](https://docs.zuper.co/Settings/Developer_Hub/API_Keys#api-keys)
   * **Apply geo-coding for Assets?**  – Choose “**Yes**” to enable geo-coding for the assets.
   * **Apply geo-coding for Organization?** – Choose “**Yes**” to enable geo-coding for your organization.
   * Select the “**Update**” button to connect the **Geo Code** app with **Zuper**.

<Frame>
  <img src="https://mintcdn.com/zuperinc/I0qVpoO0vzrJBgwe/images/geocodeup3.png?fit=max&auto=format&n=I0qVpoO0vzrJBgwe&q=85&s=9b678dd9c6d1f19aa4087047a3b439cb" alt="Geocodeup3" width="1920" height="878" data-path="images/geocodeup3.png" />

  4.
</Frame>

<Note>
  **Note**: If you choose “**Yes**” for the above settings, only the exact location of the assets or organization will be captured. 
</Note>

We need to set the significant geo code “**Settings**” up first, and then Next, and we must proceed to create a Job with Geo-codes.

### View Geo Codes on the Zuper

Based on your Zuper settings, whenever Customers, Jobs, Organizations, or Assets are created without specific geo-coordinates, the Google API will fire up and automatically fetch geo-coordinates for the address entered.

1. Select the “**Jobs**” icon from the left panel and choose the “**Job**” for which you want to view the Geo Coordinates of your Customer.
2. Under the “**Job Details**” tab, scroll down so you can view the Geo-Codes fetched by our Power Apps.

<Note>
  **Note:** You need to enable the settings for an organization or asset to capture the Geo-coordinates, whereas Job and Customer addresses are automatically fetched as a part of the in-built settings.

  If you want to enable the Geo-coordinates later in time, the update is possible. For this to happen, a user should visit the customer or job module and perform an edit action. 
</Note>

<video controls className="w-full aspect-video rounded-xl" src="https://drive.google.com/file/d/1wIBh-jYpyx6PYtV2xoLVPA-CC_r9HPn9/view" />

## Uninstall Geo-Code

Listed below are the steps to disable the Geo Code app on Zuper.

1. Open a new tab in your browser after logging in to your Zuper Account. Click on your Profile Picture in the top right corner of the screen and click on “**App Store**.”

<img src="https://mintcdn.com/zuperinc/Dts7PUeiYTTTU1SD/images/Geocode1.png?fit=max&auto=format&n=Dts7PUeiYTTTU1SD&q=85&s=3a7a5a6e236189d85ebdd8c1ff1a9a9b" alt="Geocode1 Pn" width="1838" height="887" data-path="images/Geocode1.png" />

2. Under the “**Browse by Category**,” select the “**Power Apps**” option and choose “**Geo Code**.”

<Frame>
  <img src="https://mintcdn.com/zuperinc/I0qVpoO0vzrJBgwe/images/geocodeup1.png?fit=max&auto=format&n=I0qVpoO0vzrJBgwe&q=85&s=fed10d06bee20ac9c29e63c7d97d91b3" alt="Geocodeup1" width="1920" height="878" data-path="images/geocodeup1.png" />
</Frame>

3. Click "**Uninstall App**." The Geo-code app will be uninstalled successfully.

<Frame>
  <img src="https://mintcdn.com/zuperinc/I0qVpoO0vzrJBgwe/images/geocodeup4.png?fit=max&auto=format&n=I0qVpoO0vzrJBgwe&q=85&s=8cbfca4a9bf08d25e5a12532d65e40be" alt="Geocodeup4" width="1920" height="878" data-path="images/geocodeup4.png" />
</Frame>

No more worries about finding customer locations: Zuper Geo-Code App's accuracy ensures field technicians can provide speedy service to your customers, keeping up with SLAs, and increasing customer satisfaction.


## Related topics

- [Job Time Calculation](/Integrations/Power_Apps/Job_Time_Calculation.md)
- [OTP and 2FA Codes on Connect Numbers](/Zuper_Connect/OTP/2FA Verification Codes.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.