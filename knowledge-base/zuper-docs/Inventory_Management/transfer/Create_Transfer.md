---
title: "Create a new transfer order"
source: https://docs.zuper.co/Inventory_Management/transfer/Create_Transfer.md
fetched_at: 2026-10-06T13:29:49.273Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a new transfer order

In Zuper, transfer order enables seamless inventory movement between locations by specifying the required date and the number of parts and products to be transferred.

Once the order has been created, you can also view and update the transfer status throughout the process, ensuring clear visibility and control over inventory movements.

<Frame as="div">
  **Navigation:** *Inventory & Pricebook* -> *Transfer Orders*
</Frame>

To create a new Transfer Order, follow these steps: 

1\. Select the **"Inventory & Pricebook**” module from the left navigation menu and choose "**Transfer Orders.**" The listing page displays the list of transfer orders created earlier.  

2\. Click the "**+ New Transfer Order**" button at the top right corner of the page.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-3.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=7de9f24fffd3b704e2561a4a8ca9933f" alt="" width="1920" height="970" data-path="Inventory_Management/transfer/transfer-3.png" />

3\. A new Transfer Order creation page appears. Fill in the following subsections:

## 1. Primary Details

1\. **From Location** (mandatory): Select the location from where you want to initiate the transfer of parts and products.

2\. **To Location** (mandatory): Select the location of the parts and products that need to be sent.

<Note>
  **Note**: The "From Location" cannot be the same as the "To Location."
</Note>

3\. **Required By Date**: Select the date the line items need to reach the destination using the date picker. The Required By date allows you to plan logistics and ensure that transfers are initiated in the order of priority.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-4.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=03b3aa31b0d3c251b4c8d4248a4287ef" alt="" width="1437" height="472" data-path="Inventory_Management/transfer/transfer-4.png" />

4\. **Remarks**: Add any additional comments or notes regarding the transfer. 

<Note>
  **Note**: The From and To locations that appear here are those configured under Product Locations under Parts & Services settings.
</Note>

## 2. Line Items 

1\. You can add the Parts and Products to be transferred here. To do so, click the “**+ Add**” button.  

2\. A pop-up will appear with the existing parts and products from the chosen "**From Location**." 

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-5.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=24f62826044e1a7a766ad47668fa8436" alt="" width="1918" height="1935" data-path="Inventory_Management/transfer/transfer-5.png" />

<Note>
  **Note**: You cannot add parts or products to Transfer Orders until you choose the "**From**" and "**To**" locations in the Primary Details section. 
</Note>

3\. Select the part/product(s) and enter the quantity to be transferred under “**Quantity**.” Once you've done this, click the “**Add**” button. 

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-6.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=7ae67c035b7bc521e94421933c41519b" alt="" width="1918" height="968" data-path="Inventory_Management/transfer/transfer-6.png" />

<Note>
  **Note**: You can also add serial numbers as needed for each quantity under Serial No.  
</Note>

4\. The chosen part/product(s) will be successfully added under the **Line Items** section, along with the quantity, and serial numbers if any. Next to, Qty & serial column, you can also view a column called “**Post Transfer Qty**” indicates availability in the From and To Locations once the transfer is completed.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-7.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=9072367e682888dfb9b8592cdc0cea34" alt="" width="1918" height="970" data-path="Inventory_Management/transfer/transfer-7.png" />

5\. You can also view details and edit or remove any of the added parts and products by clicking the “**ellipsis**” icon under the “**Actions**” column. 

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-8.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=abd8e1991ba2726899a5b8bceec4b0da" alt="" width="1918" height="968" data-path="Inventory_Management/transfer/transfer-8.png" />

#### Edit Line Items

1\. To edit any line item, click the "**Edit**" button under the Action column. A pop-up will appear, allowing you to update the selected line item.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-9.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=7f35b23d15ef9cef5e159bf2f58d494e" alt="" width="1918" height="960" data-path="Inventory_Management/transfer/transfer-9.png" />

2\. Update the quantity to be transferred under “**Quantity**” and modify the serial numbers for each quantity as needed under "**Serial Number.**"  Once done, click "**Update Line Item**" to save the changes.

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-10.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=56397b432313ad39ace645314f9a7711" alt="" width="1918" height="965" data-path="Inventory_Management/transfer/transfer-10.png" />

<Note>
  **Note**: When you click "**Edit**," you can only update the quantity and the serial numbers of the product, not the product/parts themselves. However, you can remove part/product(s) and add new parts and products if necessary by clicking the "**Remove**" button.
</Note>

## 3. Attachments 

Attach files or documents related to the Transfer Order. The attachment can either be an **image** (supported file formats: png, jpg, jpeg, gif), **video** (supported file formats: mp4, avi, flv, mov, mpg, 3gp), **audio** (supported file formats: mp3, wav, m4a, wma)**, Document (**supported file formats: doc, docx, xls, xlsx, txt, pdf, webp, msg, eml) that you can add to the Transfer Order for more clarity. To add an attachment, follow these steps:  

1\. Click “**+ Add Attachment**.” A pop-up appears.  

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-11.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=f0804cfaae6417afa8fd718b6240024e" alt="" width="1918" height="968" data-path="Inventory_Management/transfer/transfer-11.png" />

2. Click to upload or drag and drop the file from your computer. Once uploaded, click "**Close**". You can also preview or remove attachments as needed.  

<img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-12.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=9988b7613637d77d933a5f5e56c45576" alt="" width="1918" height="968" data-path="Inventory_Management/transfer/transfer-12.png" />

Once all mandatory fields in the sub-sections are complete, you can choose to save the transfer order in one of the following ways: 

* **Save as Draft**

* **Save & Initiate Transfer**

* **Save and Complete Order**

  <img src="https://mintcdn.com/zuperinc/dhu0hiPNK0pAwMPN/Inventory_Management/transfer/transfer-13.png?fit=max&auto=format&n=dhu0hiPNK0pAwMPN&q=85&s=b3cbf06fd32f230ac4a53dc751fe08db" alt="" width="1920" height="970" data-path="Inventory_Management/transfer/transfer-13.png" />

This comprehensive information allows you to quickly create Transfer Orders with specified parts, products, and required dates.


## Related topics

- [Manage your transfer order](/Inventory_Management/transfer/managing_transfer.md)
- [Create, edit, and delete a pricelist](/Inventory_Management/Pricelists/Create_Pricelist.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.