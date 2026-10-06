---
title: "Square"
source: https://docs.zuper.co/Integrations/Accounting_and_payments/Square.md
fetched_at: 2026-10-06T13:30:26.334Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Square

**Square** is a popular point-of-sale (POS) system that enables merchants to accept credit and debit card payments through a mobile app or card reader. Known for its simple setup, quick deposits, and affordable transaction fees, Square is now integrated with **Zuper**, allowing you to collect full or partial payments for estimates and invoices directly from the app.

### A. Connecting Your Square Account

To connect your Square account, follow these steps:

1. **Log in** to your Square Developer Dashboard at [https://developer.squareup.com/apps](https://developer.squareup.com/apps).

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square4.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=8192288082337d665b3b847b11ee3994" alt="Square4 Pn" width="1899" height="843" data-path="images/square4.png" />

2. **Create a new developer application.**
   * Once created, you can find your **App ID** on the application details page.

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square5.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=1fe74763b07bf2791316a3a82849e2e0" alt="Square5 Pn" width="3088" height="1818" data-path="images/square5.png" />

3. **Generate an Access Token** from your **Sandbox** or **Production** environment.

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square6.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=29ab4403efc8680cb04d677180dc8868" alt="Square6 Pn" width="3092" height="1812" data-path="images/square6.png" />

4. **Locate your Location ID** from the **Locations** page.

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square7.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=7363812f8d1c5c69d626ebc79001d873" alt="Square7 Pn" width="3088" height="1822" data-path="images/square7.png" />

You will need the following three values to configure the integration in Zuper:

* **App ID**
* **Access Token**
* **Location ID**

### B. Integrating and Using Square with Zuper

#### I. How to Connect Square with Zuper

1. Log in to your **Zuper account**.
2. Click your **Profile Picture** (top-right corner) and select **App Store**.

<img src="https://mintcdn.com/zuperinc/O_89AcJlszYp3SQ6/images/Appstore.jpg?fit=max&auto=format&n=O_89AcJlszYp3SQ6&q=85&s=8e4caacebd1921966a1b9c42ade8aa21" alt="Appstore Jp" width="1903" height="872" data-path="images/Appstore.jpg" />

3. Under **Browse by Category**, choose **Accounting & payments** → select **Square**.

<img src="https://mintcdn.com/zuperinc/VPseS_V6EZJW9QRw/images/Square.png?fit=max&auto=format&n=VPseS_V6EZJW9QRw&q=85&s=7bf6eacc72bea7e46e479e1d775cc061" alt="Square Pn" width="1875" height="782" data-path="images/Square.png" />

4. Click **Configure Settings**.

<img src="https://mintcdn.com/zuperinc/VPseS_V6EZJW9QRw/images/Square1.png?fit=max&auto=format&n=VPseS_V6EZJW9QRw&q=85&s=f9e02288ac1b81cf5c912098178ea98e" alt="Square1 Pn" width="1864" height="751" data-path="images/Square1.png" />

5. Fill in the configuration fields:

   | **Field** | **Description** |
   | :-: | :-: |
   | **App ID (Mandatory)** | Enter the App ID from your Square Developer Application. |
   | **Access Token (Mandatory)** | Enter the Access Token from the Credentials page. |
   | **Location ID (Mandatory)** | Enter the Location ID from your Square Locations page. |
   | **Zuper API Key (Mandatory)** | Enter your Zuper API key. [Learn how to generate it.](https://developers.zuper.co/reference/generate-api-key) |
6. Click **Update** to connect your Square app with Zuper.

<img src="https://mintcdn.com/zuperinc/VPseS_V6EZJW9QRw/images/Square2.png?fit=max&auto=format&n=VPseS_V6EZJW9QRw&q=85&s=1dd9051bbcb2680715ee6ca3514221f8" alt="Square2 Pn" width="1526" height="731" data-path="images/Square2.png" />

<Note>
  Note: Ensure that the Zuper API key is linked to a dedicated account for smooth integration.
</Note>

#### II. How the Zuper–Square Integration Works

Zuper integrates with Square to collect payments for **Jobs**, **Estimates**, and **Invoices**.

<Frame>
  **Navigation**: Accounting → Quotations → Collect Deposit

  Accounting → Invoices → Payment
</Frame>

**To collect a payment:**

1. Go to the **Quotes** module from the top-left menu.
2. Select the quote for which you want to collect a payment.
3. Click **Collect Deposit** → select **Credit/Debit Card**.

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square8.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=9327144bd000c9b8d7581b118f844779" alt="Square8 Pn" width="1480" height="2740" data-path="images/square8.png" />

4. If the customer’s card is saved, you’ll see it listed. Otherwise, select **Add New Card**.

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square9.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=55e13cb68b6b1b1429b17f8e3aa552fb" alt="Square9 Pn" width="1480" height="2740" data-path="images/square9.png" />

5. After entering new card details, the customer will be prompted to either:
   * **Skip** (proceed to payment directly), or
   * **Save and Pay** (save the card for future transactions).

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square10.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=f4ba3ec11c83985b17ec4905fa45d59c" alt="Square10 Pn" width="1480" height="2740" data-path="images/square10.png" />

<Note>
  Note: The same process applies when collecting payments for invoices.
</Note>

With Square integrated, customers can securely pay and sign using the merchant’s mobile device, while merchants can process credit card payments effortlessly.

### C. Uninstalling the Integration

You can uninstall the integration from either **Zuper** or **Square**.

#### I. Uninstall Square from Zuper

1. Log in to your **Zuper account**.
2. Click your **Profile Picture** → select **App Store**.
3. Under **Accounting and Payments**, select **Square**.
4. Click **Deactivate**.

<img src="https://mintcdn.com/zuperinc/VPseS_V6EZJW9QRw/images/Square3.png?fit=max&auto=format&n=VPseS_V6EZJW9QRw&q=85&s=9d48cf8d9e3a74d508bd702783f6c60f" alt="Square3 Pn" width="1526" height="731" data-path="images/Square3.png" />

The Square integration will be deactivated successfully.

#### II. Uninstall Zuper from Square

1. Log in to your **Square account**.
2. Navigate to **Settings → App Integrations**.
3. Next to **Zuper**, click **Manage** to open the developer console: [https://developer.squareup.com/console/en/apps](https://developer.squareup.com/console/en/apps).
4. From the left menu, select **OAuth**.

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square11.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=1455075cd78dd29bd6ed75234795ea82" alt="Square11 Pn" width="1863" height="835" data-path="images/square11.png" />

5. Click **Replace Secret** to regenerate your **Application Secret**.

<img src="https://mintcdn.com/zuperinc/9APM-OHzPzkuguJc/images/square12.png?fit=max&auto=format&n=9APM-OHzPzkuguJc&q=85&s=609428a9ecb6c0da036079045532d296" alt="Square12 Pn" width="1863" height="835" data-path="images/square12.png" />

6. Return to **App Integrations**, click the **ellipsis (⋮)** icon next to Zuper, and select **Disconnect**.

Zuper will now be successfully disconnected from your Square account.

Once connected, the **Zuper–Square Integration** allows you to:

* Accept secure payments for estimates and invoices.
* Save customer cards for future use (with consent).
* Manage payments seamlessly from the Zuper mobile or web app.


## Related topics

- [Get roof insights with Property Intelligence](/Get-Roof-Property-Intelligence.md)
- [Annotating Images](/Zuper_Mobile_Apps/Mobile-image-annotations.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.