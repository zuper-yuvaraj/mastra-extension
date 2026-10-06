---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get a Product Details

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{dc-region}.zuperpro.com/api",
      "variables": {
        "dc-region": {
          "default": "dc-region"
        }
      }
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "apiKey",
        "in": "header",
        "name": "x-api-key"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/product/{product_uid}": {
      "get": {
        "summary": "Get a Product Details",
        "description": "",
        "operationId": "get-a-product-details",
        "parameters": [
          {
            "name": "product_uid",
            "in": "path",
            "description": "Product UID",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"_id\": \"6618d5eb65b1bbb161a6930d\",\n        \"product_uid\": \"b13f69d0-f896-11ee-b23b-b9743bfe06c8\",\n        \"prefix\": \"PT\",\n        \"product_id\": \"PART005\",\n        \"product_category\": {\n            \"category_name\": \"Plumbing Tool\",\n            \"category_uid\": \"9e264c70-4813-11ea-85e2-91cf2fb0b4bb\"\n        },\n        \"product_image\": \"\",\n        \"product_barcode\": \"16\",\n        \"product_files\": [\n            {\n                \"attachment_uid\": \"cce94303-3153-497c-9f3a-4a9693a4f8f2\",\n                \"file_name\": \"10 mb .jpg\",\n                \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg\",\n                \"created_by\": 1,\n                \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg\"\n            },\n            {\n                \"attachment_uid\": \"39eb6882-132b-4546-8f8a-e6b8811efdad\",\n                \"file_name\": \"BlackMarble_2016_464m_caribbean.png\",\n                \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e8ed09c5-8e0d-4d75-8006-24d3d123b274.png\",\n                \"created_by\": 1,\n                \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e8ed09c5-8e0d-4d75-8006-24d3d123b274.png\"\n            },\n            {\n                \"attachment_uid\": \"53209c10-c9c2-4fe5-8855-5457862eb983\",\n                \"file_name\": \"BlackMarble_2016_928m_europe.png\",\n                \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2946f908-0756-45ab-acad-b5a85cf1b8ac.png\",\n                \"created_by\": 1,\n                \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/2946f908-0756-45ab-acad-b5a85cf1b8ac.png\"\n            },\n            {\n                \"attachment_uid\": \"ef06aa66-97be-4811-b1bd-bfbb4e2b21ed\",\n                \"file_name\": \"BlackMarble_2016_1200m_australia.png\",\n                \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e0128680-9eb5-4647-9ebe-b031d2107a1c.png\",\n                \"created_by\": 1,\n                \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/e0128680-9eb5-4647-9ebe-b031d2107a1c.png\"\n            },\n            {\n                \"attachment_uid\": \"ff30220a-e8ab-460c-8b62-a2470fdf6341\",\n                \"file_name\": \"sample 1.jpg\",\n                \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/65ddb4c8-f6a4-4153-b0a2-cac305b213ad.jpg\",\n                \"created_by\": 1,\n                \"file_url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/65ddb4c8-f6a4-4153-b0a2-cac305b213ad.jpg\"\n            }\n        ],\n        \"brand\": \"GLB\",\n        \"product_name\": \"#GLB-50-985 - Oxy-Brite® Non-Chlorine Shock Oxidizer #1\",\n        \"product_description\": \"<p>Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.</p>\",\n        \"product_type\": \"PRODUCT\",\n        \"meta_data\": [\n            {\n                \"label\": \"Xero Item Account\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82ee\"\n            },\n            {\n                \"label\": \"QBO Class\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82ef\"\n            },\n            {\n                \"label\": \"QB Product ID\",\n                \"value\": \"65\",\n                \"hide_field\": false,\n                \"hide_to_fe\": false,\n                \"_id\": \"677b7d1ff00d6b1ca766504b\"\n            },\n            {\n                \"label\": \"Text Area\",\n                \"value\": \"\",\n                \"type\": \"MULTI_LINE\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f1\"\n            },\n            {\n                \"label\": \"Hidden field\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_field\": true,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f2\"\n            },\n            {\n                \"label\": \"testitem\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_field\": true,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f3\"\n            },\n            {\n                \"label\": \"QBO Preferred Vendor\",\n                \"value\": \"Bob's Burger Joint\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f4\"\n            },\n            {\n                \"label\": \"New product\",\n                \"value\": \"\",\n                \"type\": \"LOOKUP\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f5\"\n            },\n            {\n                \"label\": \"QBO Inventory Account\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f6\"\n            },\n            {\n                \"label\": \"QBO Expense Account\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f7\"\n            },\n            {\n                \"label\": \"QBO Income Account\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"_id\": \"6763de60eaf9e660fc7d82f8\"\n            },\n            {\n                \"label\": \"Mobile test hidden to FE\",\n                \"value\": \"TEST DATA\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": true,\n                \"_id\": \"6763de60eaf9e660fc7d82f9\"\n            },\n            {\n                \"label\": \"QBO Item Class\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_ITEM\",\n                \"hide_field\": false,\n                \"hide_to_fe\": false,\n                \"_id\": \"666a9328aa7bec7667fefb44\"\n            },\n            {\n                \"label\": \"DateTime Input\",\n                \"value\": \"\",\n                \"type\": \"DATETIME\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"group_name\": \"Part/Product\",\n                \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                \"_id\": \"6763de60eaf9e660fc7d82fb\"\n            },\n            {\n                \"label\": \"Checkbox\",\n                \"value\": \"\",\n                \"type\": \"MULTI_ITEM\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"group_name\": \"Part/Product\",\n                \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                \"_id\": \"6763de60eaf9e660fc7d82fc\"\n            },\n            {\n                \"label\": \"Test Asset\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": true,\n                \"group_name\": \"Asset group for product\",\n                \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                \"_id\": \"6763de60eaf9e660fc7d82fd\"\n            },\n            {\n                \"label\": \"Vignesh Custom\",\n                \"value\": \"\",\n                \"type\": \"SINGLE_LINE\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"group_name\": \"Part/Product\",\n                \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                \"_id\": \"6763de60eaf9e660fc7d82fe\"\n            },\n            {\n                \"label\": \"Time Input\",\n                \"value\": \"\",\n                \"type\": \"TIME\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"group_name\": \"Part/Product\",\n                \"group_uid\": \"1901d190-877f-11ee-aa27-2d1135934da0\",\n                \"_id\": \"6763de60eaf9e660fc7d82ff\"\n            },\n            {\n                \"label\": \"Product description\",\n                \"value\": \"\",\n                \"type\": \"MULTI_LINE\",\n                \"hide_field\": false,\n                \"module_name\": \"PRODUCT\",\n                \"hide_to_fe\": false,\n                \"group_name\": \"Asset group for product\",\n                \"group_uid\": \"a3042dc0-9044-11ee-b81e-f95ba7e47d6e\",\n                \"_id\": \"6763de60eaf9e660fc7d8300\"\n            },\n            {\n                \"label\": \"Asset decription\",\n                \"value\": \"\",\n                \"type\": \"MULTI_LINE\",\n                \"hide_field\": false,\n                \"hide_to_fe\": false,\n                \"group_name\": \"New group\",\n                \"group_uid\": \"a862c080-9033-11ee-b81e-f95ba7e47d6e\",\n                \"_id\": \"66d01b95ddb31075168482d9\"\n            },\n            {\n                \"label\": \"Xero Item ID\",\n                \"value\": \"PART005\",\n                \"hide_field\": false,\n                \"hide_to_fe\": false,\n                \"_id\": \"6777b0af41dbf734c91fbfcb\"\n            }\n        ],\n        \"product_manual_link\": \"\",\n        \"location_availability\": [\n            {\n                \"location\": {\n                    \"location_uid\": \"4c90d230-87e6-11ec-a0b1-1bc079724999\",\n                    \"location_name\": \"W1 Warehouse\",\n                    \"is_deleted\": false\n                },\n                \"quantity\": -5,\n                \"min_quantity\": 1,\n                \"serial_nos\": [],\n                \"_id\": \"6763de60eaf9e660fc7d8309\",\n                \"created_at\": \"2024-12-19T08:50:40.784Z\"\n            },\n            {\n                \"location\": {\n                    \"location_uid\": \"9e1c2790-7542-11ed-b4a1-71af0364aa70\",\n                    \"location_name\": \"Los Angeles\",\n                    \"is_deleted\": false\n                },\n                \"quantity\": 109.87,\n                \"min_quantity\": 10,\n                \"serial_nos\": [\n                    \"345345\",\n                    \"234234\",\n                    \"123432432\"\n                ],\n                \"_id\": \"6763de60eaf9e660fc7d830a\",\n                \"created_at\": \"2024-12-19T08:50:40.785Z\"\n            },\n            {\n                \"location\": {\n                    \"is_deleted\": false,\n                    \"location_name\": \"1Team location\",\n                    \"location_uid\": \"86977dc0-151e-11ec-9f07-294a44e6be4e\"\n                },\n                \"quantity\": 1,\n                \"min_quantity\": 1,\n                \"serial_nos\": [\n                    \"2323\"\n                ],\n                \"_id\": \"6763de60eaf9e660fc7d830b\",\n                \"created_at\": \"2024-12-19T08:50:40.785Z\"\n            },\n            {\n                \"location\": {\n                    \"is_deleted\": false,\n                    \"location_name\": \"Team location 1\",\n                    \"location_uid\": \"afa47af0-1489-11ec-9f07-294a44e6be4e\"\n                },\n                \"quantity\": 1,\n                \"min_quantity\": 2,\n                \"serial_nos\": [],\n                \"_id\": \"6763de60eaf9e660fc7d830c\",\n                \"created_at\": \"2024-12-19T08:50:40.785Z\"\n            },\n            {\n                \"location\": {\n                    \"is_deleted\": false,\n                    \"location_name\": \"Chennai_1\",\n                    \"location_uid\": \"893005f0-eb7c-11eb-b156-7dd89e71c7c5\"\n                },\n                \"quantity\": 28.130000000000003,\n                \"min_quantity\": 1,\n                \"serial_nos\": [\n                    \"gdu1tdiqj\",\n                    \"7wyidy99\"\n                ],\n                \"_id\": \"6763de60eaf9e660fc7d830d\",\n                \"created_at\": \"2024-12-19T08:50:40.785Z\"\n            },\n            {\n                \"location\": {\n                    \"location_uid\": \"f1e6dac0-87ed-11ec-a0b1-1bc079724999\",\n                    \"location_name\": \"W2 Warehouse\",\n                    \"is_deleted\": false\n                },\n                \"quantity\": 8,\n                \"min_quantity\": 1,\n                \"serial_nos\": [],\n                \"_id\": \"6763de60eaf9e660fc7d830e\",\n                \"created_at\": \"2024-12-19T08:50:40.786Z\"\n            }\n        ],\n        \"track_quantity\": true,\n        \"quantity\": 143,\n        \"min_quantity\": 16,\n        \"currency\": \"\",\n        \"price\": 5.6,\n        \"has_custom_tax\": false,\n        \"tax\": {\n            \"tax_rate\": null,\n            \"tax_name\": \"\",\n            \"tax_exempt\": false\n        },\n        \"is_available\": true,\n        \"is_deleted\": false,\n        \"created_by\": {\n            \"user_uid\": \"06aaed4d-80de-41f2-a977-c32d67cce739\",\n            \"first_name\": \"def\",\n            \"last_name\": \"B\",\n            \"email\": \"def@def.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": null,\n            \"designation\": \"Admin\",\n            \"emp_code\": \"Z168\",\n            \"prefix\": null,\n            \"work_phone_number\": null,\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n            \"hourly_labor_charge\": 20,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2023-06-15T11:56:58.000Z\",\n            \"updated_at\": \"2025-01-06T07:02:58.000Z\"\n        },\n        \"created_at\": \"2024-04-12T06:34:19.760Z\",\n        \"product_no\": 814,\n        \"uom\": \"\",\n        \"specification\": \"\",\n        \"associated_products\": [],\n        \"purchase_price\": null,\n        \"is_billable\": false,\n        \"markdown_description\": \"Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.\",\n        \"plain_text_description\": \"Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "_id": {
                          "type": "string",
                          "example": "6618d5eb65b1bbb161a6930d"
                        },
                        "product_uid": {
                          "type": "string",
                          "example": "b13f69d0-f896-11ee-b23b-b9743bfe06c8"
                        },
                        "prefix": {
                          "type": "string",
                          "example": "PT"
                        },
                        "product_id": {
                          "type": "string",
                          "example": "PART005"
                        },
                        "product_category": {
                          "type": "object",
                          "properties": {
                            "category_name": {
                              "type": "string",
                              "example": "Plumbing Tool"
                            },
                            "category_uid": {
                              "type": "string",
                              "example": "9e264c70-4813-11ea-85e2-91cf2fb0b4bb"
                            }
                          }
                        },
                        "product_image": {
                          "type": "string",
                          "example": ""
                        },
                        "product_barcode": {
                          "type": "string",
                          "example": "16"
                        },
                        "product_files": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attachment_uid": {
                                "type": "string",
                                "example": "cce94303-3153-497c-9f3a-4a9693a4f8f2"
                              },
                              "file_name": {
                                "type": "string",
                                "example": "10 mb .jpg"
                              },
                              "url": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg"
                              },
                              "created_by": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "file_url": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/03b4ac7c-e0b0-4be5-b977-ed8862d196d3.jpg"
                              }
                            }
                          }
                        },
                        "brand": {
                          "type": "string",
                          "example": "GLB"
                        },
                        "product_name": {
                          "type": "string",
                          "example": "#GLB-50-985 - Oxy-Brite® Non-Chlorine Shock Oxidizer #1"
                        },
                        "product_description": {
                          "type": "string",
                          "example": "<p>Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami.</p>"
                        },
                        "product_type": {
                          "type": "string",
                          "example": "PRODUCT"
                        },
                        "meta_data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "Xero Item Account"
                              },
                              "value": {
                                "type": "string",
                                "example": ""
                              },
                              "type": {
                                "type": "string",
                                "example": "SINGLE_ITEM"
                              },
                              "hide_field": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "module_name": {
                                "type": "string",
                                "example": "PRODUCT"
                              },
                              "hide_to_fe": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "_id": {
                                "type": "string",
                                "example": "6763de60eaf9e660fc7d82ee"
                              }
                            }
                          }
                        },
                        "product_manual_link": {
                          "type": "string",
                          "example": ""
                        },
                        "location_availability": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "location": {
                                "type": "object",
                                "properties": {
                                  "location_uid": {
                                    "type": "string",
                                    "example": "4c90d230-87e6-11ec-a0b1-1bc079724999"
                                  },
                                  "location_name": {
                                    "type": "string",
                                    "example": "W1 Warehouse"
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "quantity": {
                                "type": "integer",
                                "example": -5,
                                "default": 0
                              },
                              "min_quantity": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "serial_nos": {
                                "type": "array"
                              },
                              "_id": {
                                "type": "string",
                                "example": "6763de60eaf9e660fc7d8309"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2024-12-19T08:50:40.784Z"
                              }
                            }
                          }
                        },
                        "track_quantity": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "quantity": {
                          "type": "integer",
                          "example": 143,
                          "default": 0
                        },
                        "min_quantity": {
                          "type": "integer",
                          "example": 16,
                          "default": 0
                        },
                        "currency": {
                          "type": "string",
                          "example": ""
                        },
                        "price": {
                          "type": "number",
                          "example": 5.6,
                          "default": 0
                        },
                        "has_custom_tax": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "tax": {
                          "type": "object",
                          "properties": {
                            "tax_rate": {},
                            "tax_name": {
                              "type": "string",
                              "example": ""
                            },
                            "tax_exempt": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "is_available": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "06aaed4d-80de-41f2-a977-c32d67cce739"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "def"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "B"
                            },
                            "email": {
                              "type": "string",
                              "example": "def@def.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Admin"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "Z168"
                            },
                            "prefix": {},
                            "work_phone_number": {},
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                            },
                            "hourly_labor_charge": {
                              "type": "integer",
                              "example": 20,
                              "default": 0
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2023-06-15T11:56:58.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2025-01-06T07:02:58.000Z"
                            }
                          }
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-04-12T06:34:19.760Z"
                        },
                        "product_no": {
                          "type": "integer",
                          "example": 814,
                          "default": 0
                        },
                        "uom": {
                          "type": "string",
                          "example": ""
                        },
                        "specification": {
                          "type": "string",
                          "example": ""
                        },
                        "associated_products": {
                          "type": "array"
                        },
                        "purchase_price": {},
                        "is_billable": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "markdown_description": {
                          "type": "string",
                          "example": "Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami."
                        },
                        "plain_text_description": {
                          "type": "string",
                          "example": "Some text for testing the long text so that description should be so so long and the long text should be like three lines in the mobile.\\nAkutami wrote the series with no themes to follow but wanted to write and draw cool-looking characters. They were often supported by their two editors while writing the manga. The manga was a commercial success in both Japan and North America. Critical response to the manga was generally positive; several reviewers praised Yuta's role and his relationship with Rika. Critics found Yuta more compelling than Jujutsu Kaisen's Yuji Itadori who, while having several similarities with Yuta, has different characterizations. The relationships of the main cast were also well-received and the manga's artwork was praised. Jujutsu Kaisen 0 received an anime film adaptation by MAPPA, which was directed by Sunghoo Park and premiered in Japan in December 2021. It was followed by a novelization and a new gag chapter written by Akutami."
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false
      }
    }
  },
  "x-readme": {
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```