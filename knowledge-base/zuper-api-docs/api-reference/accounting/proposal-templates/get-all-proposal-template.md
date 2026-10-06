---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all Templates

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
    "/invoice_estimate/proposal_template": {
      "get": {
        "summary": "Get all Templates",
        "description": "",
        "operationId": "get-all-proposal-template",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "string",
              "default": "1"
            }
          },
          {
            "name": "count",
            "in": "query",
            "schema": {
              "type": "string",
              "default": "10"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ]
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "template_name",
                "created_at",
                "display_order"
              ]
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_deleted",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.template_uid",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": [\n        {\n            \"display_order\": 1,\n            \"template_uid\": \"84c44eb0-4262-11ee-b1a1-7372ef614376\",\n            \"template_name\": \"Proposal Template\",\n            \"proposal_options\": [\n                {\n                    \"option_uid\": \"b5533730-387a-11ef-b6d3-c3e8603df1ce\",\n                    \"option_name\": \"Option 1\",\n                    \"package\": {\n                        \"display_order\": 17,\n                        \"package_uid\": \"70c4bb10-5cf8-11ee-bf89-7dff9a634b35\",\n                        \"package_name\": \"Bug bash package 1\",\n                        \"line_items\": [\n                            {\n                                \"line_item_uid\": \"7860dc90-5cf9-11ee-bf89-7dff9a634b35\",\n                                \"line_item_type\": \"HEADER\",\n                                \"name\": \"Group 1 Header\",\n                                \"quantity\": 0,\n                                \"unit_price\": 0,\n                                \"total\": 0\n                            },\n                            {\n                                \"line_item_uid\": \"78652250-5cf9-11ee-bf89-7dff9a634b35\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"sample\",\n                                \"quantity\": 1,\n                                \"unit_price\": 1780,\n                                \"total\": 1958\n                            },\n                            {\n                                \"line_item_uid\": \"78696810-5cf9-11ee-bf89-7dff9a634b35\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"Product#2\",\n                                \"quantity\": 1,\n                                \"unit_price\": 123,\n                                \"total\": 123\n                            }\n                        ],\n                        \"sub_total\": 2081,\n                        \"total\": 2081,\n                        \"is_active\": true,\n                        \"is_deleted\": false\n                    }\n                },\n                {\n                    \"option_uid\": \"b5533731-387a-11ef-b6d3-c3e8603df1ce\",\n                    \"option_name\": \"Option 2\",\n                    \"package\": {\n                        \"display_order\": 5,\n                        \"package_uid\": \"bbad8ba0-426f-11ee-b1a1-7372ef614376\",\n                        \"package_name\": \"Package with Line item Discount\",\n                        \"line_items\": [\n                            {\n                                \"line_item_uid\": \"4b678390-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"MDF Coasters\",\n                                \"quantity\": 1,\n                                \"unit_price\": 500,\n                                \"total\": 500\n                            },\n                            {\n                                \"line_item_uid\": \"4b6adef0-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"sample\",\n                                \"quantity\": 1,\n                                \"unit_price\": 1780,\n                                \"total\": 1958\n                            },\n                            {\n                                \"line_item_uid\": \"4b6e3a50-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"Cleaning of Water Tank\",\n                                \"quantity\": 1,\n                                \"unit_price\": 1000,\n                                \"total\": 1000\n                            }\n                        ],\n                        \"sub_total\": 3458,\n                        \"total\": 3803.8,\n                        \"is_active\": true,\n                        \"is_deleted\": false\n                    }\n                },\n                {\n                    \"option_uid\": \"b5533732-387a-11ef-b6d3-c3e8603df1ce\",\n                    \"option_name\": \"Option 3\",\n                    \"package\": {\n                        \"display_order\": 26,\n                        \"package_uid\": \"ae99d5d0-32ed-11ef-828a-e55718b3f668\",\n                        \"package_name\": \"Service package with same items\",\n                        \"line_items\": [\n                            {\n                                \"line_item_uid\": \"4abe99c5-2493-4e97-a945-98812b4b32a2\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"213 ( 101 )\",\n                                \"quantity\": 1,\n                                \"unit_price\": 10,\n                                \"total\": 10\n                            },\n                            {\n                                \"line_item_uid\": \"b54fa28e-3bc8-46ff-ae4d-400631723504\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"213 ( 101 )\",\n                                \"quantity\": 2,\n                                \"unit_price\": 100,\n                                \"total\": 200\n                            },\n                            {\n                                \"line_item_uid\": \"e869ad7d-110d-4057-8f3a-9eaf0225e84e\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"#GLB-50-985 - Oxy-Brite® Non-Chlorine Shock Oxidizer #1\",\n                                \"quantity\": 1,\n                                \"unit_price\": 100,\n                                \"total\": 204\n                            }\n                        ],\n                        \"sub_total\": 414,\n                        \"total\": 414,\n                        \"is_active\": true,\n                        \"is_deleted\": false\n                    }\n                },\n                {\n                    \"option_uid\": \"b5533733-387a-11ef-b6d3-c3e8603df1ce\",\n                    \"option_name\": \"option 4\",\n                    \"package\": {\n                        \"display_order\": 1,\n                        \"package_uid\": \"72e0b360-3c21-11ee-82aa-858410f587b5\",\n                        \"package_name\": \"Applot 1\",\n                        \"line_items\": [\n                            {\n                                \"line_item_uid\": \"b4c7ff9d-412f-4e90-ba2b-ecefabdf66b1\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"Boat Watch\",\n                                \"quantity\": 1,\n                                \"unit_price\": 100,\n                                \"total\": 100\n                            },\n                            {\n                                \"line_item_uid\": \"910ac46b-2ce5-44c6-9aca-46a697762ace\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"Product#2\",\n                                \"quantity\": 5,\n                                \"unit_price\": 250,\n                                \"total\": 1250\n                            }\n                        ],\n                        \"is_active\": true,\n                        \"is_deleted\": false,\n                        \"sub_total\": 1350,\n                        \"total\": 1350\n                    }\n                }\n            ],\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n                \"first_name\": \"des\",\n                \"last_name\": \"des\",\n                \"email\": \"des@des.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Tech 123\",\n                \"emp_code\": \"2030303\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 10,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2020-05-09T04:52:02.000Z\",\n                \"updated_at\": \"2024-12-26T13:58:39.000Z\"\n            },\n            \"created_at\": \"2023-08-24T09:42:19.676Z\",\n            \"updated_at\": \"2024-07-02T13:55:15.109Z\",\n            \"id\": \"64e725fbda8efd43ca99743c\"\n        },\n        {\n            \"display_order\": 2,\n            \"template_uid\": \"056202b0-4727-11ee-be48-2d4d15977c73\",\n            \"template_name\": \"Template 1\",\n            \"proposal_options\": [\n                {\n                    \"option_uid\": \"80f39630-47c9-11ee-be48-2d4d15977c73\",\n                    \"option_name\": \"Option 1\",\n                    \"package\": {\n                        \"display_order\": 4,\n                        \"package_uid\": \"792462c0-4262-11ee-b1a1-7372ef614376\",\n                        \"package_name\": \"Package with Transaction Discount\",\n                        \"line_items\": [\n                            {\n                                \"line_item_uid\": \"ba860440-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"MDF Coasters\",\n                                \"quantity\": 1,\n                                \"unit_price\": 100,\n                                \"total\": 100\n                            },\n                            {\n                                \"line_item_uid\": \"ba8a4a00-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"Cleaning of Water Tank\",\n                                \"quantity\": 1,\n                                \"unit_price\": 1000,\n                                \"total\": 1000\n                            }\n                        ],\n                        \"sub_total\": 1100,\n                        \"total\": 1040,\n                        \"is_active\": true,\n                        \"is_deleted\": false\n                    }\n                },\n                {\n                    \"option_uid\": \"80f39631-47c9-11ee-be48-2d4d15977c73\",\n                    \"option_name\": \"Option 2\",\n                    \"package\": {\n                        \"display_order\": 5,\n                        \"package_uid\": \"bbad8ba0-426f-11ee-b1a1-7372ef614376\",\n                        \"package_name\": \"Package with Line item Discount\",\n                        \"line_items\": [\n                            {\n                                \"line_item_uid\": \"4b678390-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"MDF Coasters\",\n                                \"quantity\": 1,\n                                \"unit_price\": 500,\n                                \"total\": 500\n                            },\n                            {\n                                \"line_item_uid\": \"4b6adef0-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"sample\",\n                                \"quantity\": 1,\n                                \"unit_price\": 1780,\n                                \"total\": 1958\n                            },\n                            {\n                                \"line_item_uid\": \"4b6e3a50-c4d4-11ee-8427-f135042a115b\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"Cleaning of Water Tank\",\n                                \"quantity\": 1,\n                                \"unit_price\": 1000,\n                                \"total\": 1000\n                            }\n                        ],\n                        \"sub_total\": 3458,\n                        \"total\": 3803.8,\n                        \"is_active\": true,\n                        \"is_deleted\": false\n                    }\n                },\n                {\n                    \"option_uid\": \"80f39632-47c9-11ee-be48-2d4d15977c73\",\n                    \"option_name\": \"Option 3\",\n                    \"package\": {\n                        \"display_order\": 6,\n                        \"package_uid\": \"51d2a4c0-47c6-11ee-be48-2d4d15977c73\",\n                        \"package_name\": \"Package Aug 31\",\n                        \"line_items\": [\n                            {\n                                \"line_item_uid\": \"51ce8610-47c6-11ee-be48-2d4d15977c73\",\n                                \"line_item_type\": \"ITEM\",\n                                \"name\": \"Testing Product\",\n                                \"quantity\": 2,\n                                \"unit_price\": 153,\n                                \"total\": 309.06\n                            }\n                        ],\n                        \"sub_total\": 309.06,\n                        \"total\": 309.06,\n                        \"is_active\": true,\n                        \"is_deleted\": false\n                    }\n                }\n            ],\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_by\": {\n                \"user_uid\": \"ab6d4ab2-19ee-4093-9995-025fa9f78273\",\n                \"first_name\": \"des\",\n                \"last_name\": \"des\",\n                \"email\": \"esde@de.co\",\n                \"external_login_id\": null,\n                \"home_phone_number\": null,\n                \"designation\": \"Tech 123\",\n                \"emp_code\": \"2030303\",\n                \"prefix\": null,\n                \"work_phone_number\": null,\n                \"mobile_phone_number\": null,\n                \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg\",\n                \"hourly_labor_charge\": 10,\n                \"is_active\": true,\n                \"is_deleted\": false,\n                \"created_at\": \"2020-05-09T04:52:02.000Z\",\n                \"updated_at\": \"2024-12-26T13:58:39.000Z\"\n            },\n            \"created_at\": \"2023-08-30T11:19:01.470Z\",\n            \"updated_at\": \"2023-08-31T06:42:07.253Z\",\n            \"id\": \"64ef25a572c12fb888294977\"\n        }\n    ],\n    \"total_records\": 2,\n    \"current_page\": 1,\n    \"total_pages\": 1\n}"
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
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "display_order": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "template_uid": {
                            "type": "string",
                            "example": "84c44eb0-4262-11ee-b1a1-7372ef614376"
                          },
                          "template_name": {
                            "type": "string",
                            "example": "Proposal Template"
                          },
                          "proposal_options": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "option_uid": {
                                  "type": "string",
                                  "example": "b5533730-387a-11ef-b6d3-c3e8603df1ce"
                                },
                                "option_name": {
                                  "type": "string",
                                  "example": "Option 1"
                                },
                                "package": {
                                  "type": "object",
                                  "properties": {
                                    "display_order": {
                                      "type": "integer",
                                      "example": 17,
                                      "default": 0
                                    },
                                    "package_uid": {
                                      "type": "string",
                                      "example": "70c4bb10-5cf8-11ee-bf89-7dff9a634b35"
                                    },
                                    "package_name": {
                                      "type": "string",
                                      "example": "Bug bash package 1"
                                    },
                                    "line_items": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "line_item_uid": {
                                            "type": "string",
                                            "example": "7860dc90-5cf9-11ee-bf89-7dff9a634b35"
                                          },
                                          "line_item_type": {
                                            "type": "string",
                                            "example": "HEADER"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "Group 1 Header"
                                          },
                                          "quantity": {
                                            "type": "integer",
                                            "example": 0,
                                            "default": 0
                                          },
                                          "unit_price": {
                                            "type": "integer",
                                            "example": 0,
                                            "default": 0
                                          },
                                          "total": {
                                            "type": "integer",
                                            "example": 0,
                                            "default": 0
                                          }
                                        }
                                      }
                                    },
                                    "sub_total": {
                                      "type": "integer",
                                      "example": 2081,
                                      "default": 0
                                    },
                                    "total": {
                                      "type": "integer",
                                      "example": 2081,
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
                                    }
                                  }
                                }
                              }
                            }
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
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "ab6d4ab2-19ee-4093-9995-025fa9f78273"
                              },
                              "first_name": {
                                "type": "string",
                                "example": "des"
                              },
                              "last_name": {
                                "type": "string",
                                "example": "des"
                              },
                              "email": {
                                "type": "string",
                                "example": "des@des.co"
                              },
                              "external_login_id": {},
                              "home_phone_number": {},
                              "designation": {
                                "type": "string",
                                "example": "Tech 123"
                              },
                              "emp_code": {
                                "type": "string",
                                "example": "2030303"
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
                                "example": 10,
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
                                "example": "2020-05-09T04:52:02.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2024-12-26T13:58:39.000Z"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2023-08-24T09:42:19.676Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-07-02T13:55:15.109Z"
                          },
                          "id": {
                            "type": "string",
                            "example": "64e725fbda8efd43ca99743c"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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