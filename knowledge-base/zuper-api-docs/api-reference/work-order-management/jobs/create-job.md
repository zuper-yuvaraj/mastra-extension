---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Job

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
    "/jobs": {
      "post": {
        "summary": "Create a Job",
        "description": "",
        "operationId": "create-job",
        "parameters": [
          {
            "name": "check_assignment_conflict",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "job"
                ],
                "properties": {
                  "job": {
                    "type": "object",
                    "required": [
                      "job_title",
                      "job_category"
                    ],
                    "properties": {
                      "prefix": {
                        "type": "string"
                      },
                      "job_title": {
                        "type": "string"
                      },
                      "job_description": {
                        "type": "string"
                      },
                      "job_category": {
                        "type": "string"
                      },
                      "job_priority": {
                        "type": "string",
                        "default": "LOW",
                        "enum": [
                          "LOW",
                          "MEDIUM",
                          "HIGH",
                          "URGENT"
                        ]
                      },
                      "job_type": {
                        "type": "string",
                        "default": "NEW",
                        "enum": [
                          "NEW",
                          "REVISIT"
                        ]
                      },
                      "parent_job": {
                        "type": "string",
                        "description": "Job UID"
                      },
                      "job_tags": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "scheduled_start_time": {
                        "type": "string",
                        "format": "date-time",
                        "description": "Due date or scheduled date is mandatory"
                      },
                      "scheduled_end_time": {
                        "type": "string",
                        "format": "date-time",
                        "description": "Due date or scheduled date is mandatory"
                      },
                      "assigned_to_team": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "team_uid": {
                              "type": "string",
                              "description": "Team UID"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "assigned_to": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "user_uid": {
                              "type": "string"
                            },
                            "team_uid": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "due_date": {
                        "type": "string",
                        "format": "date-time",
                        "description": "Due date or scheduled date is mandatory"
                      },
                      "work_mins_required": {
                        "type": "number",
                        "format": "double"
                      },
                      "organization": {
                        "type": "string",
                        "description": "Either customer or Organization is mandatory"
                      },
                      "customer": {
                        "type": "object",
                        "required": [
                          "customer_first_name"
                        ],
                        "properties": {
                          "customer_first_name": {
                            "type": "string"
                          },
                          "customer_last_name": {
                            "type": "string"
                          },
                          "customer_category": {
                            "type": "string"
                          },
                          "customer_organization": {
                            "type": "string"
                          },
                          "account_manager": {
                            "type": "string"
                          },
                          "customer_contact_no": {
                            "type": "string"
                          },
                          "customer_email": {
                            "type": "string"
                          },
                          "customer_tags": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "properties": {
                                "label": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                },
                                "ref_uid": {
                                  "type": "string"
                                },
                                "module_name": {
                                  "type": "string",
                                  "enum": [
                                    "JOB",
                                    "CUSTOMER",
                                    "EMPLOYEE",
                                    "ESTIMATE",
                                    "INVOICE",
                                    "PRODUCT",
                                    "PURCHASE_ORDER",
                                    "SERVICE_CONTRACT",
                                    "ASSET",
                                    "PROPERTY",
                                    "ORGANIZATION",
                                    "TEAM",
                                    "REQUEST",
                                    "PROJECT"
                                  ]
                                },
                                "hide_to_fe": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "hide_field": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "read_only": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "group_name": {
                                  "type": "string"
                                },
                                "group_uid": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "label",
                                "value",
                                "type"
                              ],
                              "type": "object"
                            }
                          },
                          "customer_company_name": {
                            "type": "string"
                          }
                        }
                      },
                      "customer_address": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "double"
                            },
                            "description": "Spelled geo_cordinates (missing the second \"o\") — this is the actual field name accepted by the API, not a typo in this documentation. A correctly-spelled geo_coordinates is silently ignored."
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string",
                            "description": "Customer phone number"
                          },
                          "email": {
                            "type": "string",
                            "description": "Customer email"
                          },
                          "label": {
                            "type": "string",
                            "description": "Label"
                          }
                        }
                      },
                      "customer_billing_address": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "landmark": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number",
                              "format": "double"
                            },
                            "description": "Spelled geo_cordinates (missing the second \"o\") — this is the actual field name accepted by the API, not a typo in this documentation. A correctly-spelled geo_coordinates is silently ignored."
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string",
                            "description": "Customer phone number"
                          },
                          "email": {
                            "type": "string",
                            "description": "Customer email"
                          },
                          "label": {
                            "type": "string",
                            "description": "Label"
                          }
                        }
                      },
                      "custom_fields": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "label": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            },
                            "ref_uid": {
                              "type": "string"
                            },
                            "module_name": {
                              "type": "string",
                              "enum": [
                                "JOB",
                                "CUSTOMER",
                                "EMPLOYEE",
                                "ESTIMATE",
                                "INVOICE",
                                "PRODUCT",
                                "PURCHASE_ORDER",
                                "SERVICE_CONTRACT",
                                "ASSET",
                                "PROPERTY",
                                "ORGANIZATION",
                                "TEAM",
                                "REQUEST",
                                "PROJECT"
                              ]
                            },
                            "hide_to_fe": {
                              "type": "boolean",
                              "default": false
                            },
                            "hide_field": {
                              "type": "boolean",
                              "default": false
                            },
                            "read_only": {
                              "type": "boolean",
                              "default": false
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "label",
                            "value",
                            "type"
                          ],
                          "type": "object"
                        }
                      },
                      "products": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "line_item_type": {
                              "type": "string",
                              "default": "ITEM",
                              "enum": [
                                "ITEM",
                                "HEADER"
                              ]
                            },
                            "product_uid": {
                              "type": "string"
                            },
                            "product_category": {
                              "type": "string"
                            },
                            "product_no": {
                              "type": "string"
                            },
                            "product_image": {
                              "type": "string"
                            },
                            "product_name": {
                              "type": "string"
                            },
                            "product_description": {
                              "type": "string"
                            },
                            "brand": {
                              "type": "string"
                            },
                            "specification": {
                              "type": "string"
                            },
                            "uom": {
                              "type": "string"
                            },
                            "product_manual_link": {
                              "type": "string"
                            },
                            "quantity": {
                              "type": "string"
                            },
                            "currency": {
                              "type": "string"
                            },
                            "price": {
                              "type": "string"
                            },
                            "product_type": {
                              "type": "string"
                            },
                            "meta_data": {
                              "type": "string"
                            },
                            "serial_nos": {
                              "type": "array",
                              "default": [],
                              "items": {
                                "type": "string"
                              }
                            },
                            "location_uid": {
                              "type": "string"
                            },
                            "location_name": {
                              "type": "string"
                            },
                            "group_uid": {
                              "type": "string"
                            },
                            "group_name": {
                              "type": "string"
                            },
                            "discount": {
                              "type": "string"
                            },
                            "purchase_price": {
                              "type": "string"
                            },
                            "discount_type": {
                              "type": "string"
                            },
                            "total": {
                              "type": "string"
                            },
                            "section_name": {
                              "type": "string"
                            },
                            "section_uid": {
                              "type": "string"
                            },
                            "section_type": {
                              "type": "string",
                              "default": "EXPANDED",
                              "enum": [
                                "COLLAPSED",
                                "EXPANDED",
                                "HIDDEN"
                              ]
                            },
                            "show_child_prices": {
                              "type": "boolean",
                              "default": false
                            },
                            "show_section_total": {
                              "type": "boolean",
                              "default": false
                            },
                            "tax": {
                              "type": "object",
                              "properties": {
                                "tax_name": {
                                  "type": "string"
                                },
                                "tax_rate": {
                                  "type": "string"
                                },
                                "tax_amount": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "type": "object"
                        }
                      },
                      "customer_uid": {
                        "type": "string",
                        "description": "1st priority to read customer data and map accordingly\nEither customer or organization is mandatory"
                      },
                      "assets": {
                        "type": "array",
                        "description": "Asset UID",
                        "items": {
                          "properties": {
                            "asset": {
                              "type": "string",
                              "description": "asset uid"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "ppm": {
                        "type": "string"
                      },
                      "service_contract": {
                        "type": "string"
                      },
                      "route": {
                        "type": "string"
                      },
                      "property": {
                        "type": "string"
                      },
                      "request": {
                        "type": "string"
                      },
                      "order_id": {
                        "type": "string"
                      },
                      "skills": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "skill_uid": {
                              "type": "string"
                            },
                            "skill_name": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "invoice": {
                        "type": "string"
                      },
                      "service_task": {
                        "type": "object",
                        "properties": {
                          "is_enabled": {
                            "type": "boolean"
                          },
                          "execution_type": {
                            "type": "string",
                            "enum": [
                              "SERIES",
                              "PARALLEL"
                            ]
                          },
                          "service_tasks": {
                            "type": "array",
                            "items": {
                              "properties": {
                                "sequence_no": {
                                  "type": "integer",
                                  "format": "int32"
                                },
                                "service_task_master": {
                                  "type": "string"
                                },
                                "service_task_title": {
                                  "type": "string"
                                },
                                "service_task_description": {
                                  "type": "string"
                                },
                                "estimated_duration": {
                                  "type": "object",
                                  "properties": {
                                    "days": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "hours": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "minutes": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                },
                                "inspection_form": {
                                  "type": "string"
                                },
                                "asset": {
                                  "type": "string"
                                }
                              },
                              "type": "object"
                            }
                          }
                        }
                      },
                      "attachments": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "file_name": {
                              "type": "string"
                            },
                            "url": {
                              "type": "string"
                            },
                            "file_size": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "visible_to_customer": {
                              "type": "boolean",
                              "default": false
                            }
                          },
                          "required": [
                            "file_name",
                            "url"
                          ],
                          "type": "object"
                        }
                      },
                      "recurrence_dates": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "scheduled_start_time": {
                              "type": "string",
                              "format": "date-time"
                            },
                            "scheduled_end_time": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "rrule": {
                        "type": "object",
                        "properties": {
                          "rule_string": {
                            "type": "string"
                          },
                          "duration": {
                            "type": "object",
                            "properties": {
                              "value": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      },
                      "secondary_customers": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "customer": {
                              "type": "string",
                              "description": "customer_uid"
                            }
                          },
                          "required": [
                            "customer"
                          ],
                          "type": "object"
                        }
                      },
                      "bu_uid": {
                        "type": "string",
                        "description": "Trade Type UID"
                      },
                      "appointment": {
                        "type": "object",
                        "properties": {
                          "appointment_title": {
                            "type": "string"
                          },
                          "scheduled_start_time": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "scheduled_end_time": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "bu_uid": {
                            "type": "string"
                          },
                          "users": {
                            "type": "array",
                            "items": {
                              "properties": {
                                "user_uid": {
                                  "type": "string"
                                },
                                "team_uid": {
                                  "type": "string"
                                }
                              },
                              "type": "object"
                            }
                          },
                          "description": {
                            "type": "string"
                          }
                        },
                        "description": "Only if appointments is enabled and for dispatchable jobs"
                      },
                      "source_uid": {
                        "type": "string",
                        "description": "Lead source"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": "{\n  \"job\": {\n    \"job_priority\": \"LOW\",\n    \"prefix\": \"V2-004\",\n    \"job_type\": \"NEW\",\n    \"customer\": {\n      \"customer_uid\": \"4185a6c0-58d0-11e8-a06a-f1f7062602d6\",\n      \"customer_email\": \"suraj@zuper.com\",\n      \"customer_first_name\": \"Stephen\",\n      \"customer_last_name\": \"Randall\",\n      \"customer_contact_no\": {\n        \"mobile\": \"+919952147212\",\n        \"home\": \"+919952147275\",\n        \"work\": \"+919952147275\"\n      },\n      \"customer_billing_address\": {\n        \"city\": \"Salem\",\n        \"state\": \"Tamil Nadu\",\n        \"street\": \"Govindammal Nagar Main Road\",\n        \"country\": \"INDIA\",\n        \"landmark\": \"Near\",\n        \"zip_code\": \"636010\",\n        \"geo_cordinates\": [\n          11.6211541121359,\n          78.1438666954637\n        ],\n        \"first_name\": \"Stephen\",\n        \"last_name\": \"Randall\",\n        \"phone_number\": \"+919952147212\",\n        \"email\": \"suraj@zuper.com\"\n      },\n      \"customer_address\": {\n        \"city\": \"Chennai\",\n        \"state\": \"Tamil Nadu\",\n        \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu, India\",\n        \"country\": \"India\",\n        \"landmark\": \"Near\",\n        \"zip_code\": \"600017\",\n        \"geo_cordinates\": [\n          13.0494706,\n          80.2452214\n        ],\n        \"_id\": \"64df0dee7c0c9e18fa1777e1\",\n        \"label\": \"Property - 'Testing_Sp' Address\",\n        \"entity_uid\": \"9d9a84f0-dbf6-11ec-8c58-0d3bf4d5a49f\",\n        \"first_name\": \"Stephen\",\n        \"last_name\": \"Randall\",\n        \"email\": \"suraj@zuper.com\",\n        \"phone_number\": \"+919952147212\"\n      }\n    },\n    \"customer_billing_address\": {\n      \"city\": \"Salem\",\n      \"state\": \"Tamil Nadu\",\n      \"street\": \"Govindammal Nagar Main Road\",\n      \"country\": \"INDIA\",\n      \"landmark\": \"Near\",\n      \"zip_code\": \"636010\",\n      \"geo_cordinates\": [\n        11.6211541121359,\n        78.1438666954637\n      ],\n      \"first_name\": \"Stephen\",\n      \"last_name\": \"Randall\",\n      \"phone_number\": \"+919952147212\",\n      \"email\": \"suraj@zuper.com\"\n    },\n    \"customer_address\": {\n      \"city\": \"Chennai\",\n      \"state\": \"Tamil Nadu\",\n      \"street\": \"SKCL Harmony Square, Prakasam Street, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu, India\",\n      \"country\": \"India\",\n      \"landmark\": \"Near\",\n      \"zip_code\": \"600017\",\n      \"geo_cordinates\": [\n        13.0494706,\n        80.2452214\n      ],\n      \"_id\": \"64df0dee7c0c9e18fa1777e1\",\n      \"label\": \"Property - 'Testing_Sp' Address\",\n      \"entity_uid\": \"9d9a84f0-dbf6-11ec-8c58-0d3bf4d5a49f\",\n      \"first_name\": \"Stephen\",\n      \"last_name\": \"Randall\",\n      \"email\": \"suraj@zuper.com\",\n      \"phone_number\": \"+919952147212\"\n    },\n    \"organization\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n    \"ppm\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n    \"route\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n    \"request\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n    \"estimate\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n    \"invoice\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n    \"order_id\": \"040c4610-0ea5-11ee-9f8e-0f93d9851045\",\n    \"assets\": [\n      {\n        \"asset\": \"0035e270-d552-11ee-8fd2-71593de923ba\",\n        \"remarks\": \"w\",\n        \"asset_serial_number\": \"123\"\n      }\n    ],\n    \"due_date\": \"2024-02-05 09:15:00\",\n    \"property\": \"9d9a84f0-dbf6-11ec-8c58-0d3bf4d5a49f\",\n    \"job_title\": \"New Job\",\n    \"job_category\": \"3fee25f0-74a1-11ea-8ca5-df1d176880cb\",\n    \"job_description\": \"Home Cleaning for Service Square.\",\n    \"parent_job\": \"552f7990-7557-11e9-afc4-23147a602621\",\n    \"is_recurrence\": true,\n    \"service_contract\": \"8295b3f0-d172-11ee-8824-f378626de6e5\",\n    \"products\": [\n      {\n        \"product_uid\": \"535dcdf0-8228-11e9-851f-4dd105dd2b46\",\n        \"prefix\": \"Z\",\n        \"product_no\": \"111\",\n        \"product_image\": \"https://en.wikipedia.org/wiki/Image\",\n        \"brand\": \"Zuper\",\n        \"specification\": \"Service\",\n        \"uom\": \"\",\n        \"product_manual_link\": \"https://www.wikidata.org/wiki/Property:P2078\",\n        \"currency\": \"INR\",\n        \"serial_nos\": [\n          \"12345\"\n        ],\n        \"product_name\": \"sample\",\n        \"product_category\": \"c4d9a2e0-7bc2-11e9-af27-a5e2b7a037f7\",\n        \"quantity\": 1,\n        \"price\": 15002,\n        \"product_description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\n        \"product_type\": \"SERVICE\",\n        \"meta\": [],\n        \"location_uid\": \"535dcdf0-8228-11e9-851f-4dd105dd2b46\",\n        \"location_name\": \"Chennai\",\n        \"group_name\": \"Warehose 1\",\n        \"group_uid\": \"535dcdf0-8228-11e9-851f-4dd105dd2b46\",\n        \"discount\": 5,\n        \"purchase_price\": 90,\n        \"discount_type\": \"PERCENTAGE\",\n        \"total\": 1000,\n        \"tax\": {\n          \"tax_name\": \"GST\",\n          \"tax_rate\": 5,\n          \"tax_amount\": 100\n        }\n      }\n    ],\n    \"job_tags\": [\n      \"jobtest\",\n      \"iOS_2\"\n    ],\n    \"attachments\": [\n      {\n        \"file_name\": \"New attachement\",\n        \"url\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/39c4c0a0-d6e3-11ee-839f-418ff021ceed.jpg\",\n        \"file_size\": 8496.337,\n        \"visible_to_customer\": true\n      }\n    ],\n    \"team_uid\": \"75c131e5-9fdf-433b-8032-e5282750330b\",\n    \"recurrence_dates\": [\n      {\n        \"scheduled_start_time\": \"2024-03-07 09:15:00\",\n        \"scheduled_end_time\": \"2024-03-07 10:20:00\"\n      },\n      {\n        \"scheduled_start_time\": \"2024-04-04 09:15:00\",\n        \"scheduled_end_time\": \"2024-04-04 10:20:00\"\n      }\n    ],\n    \"scheduled_start_time\": \"2024-02-05 09:15:00\",\n    \"scheduled_end_time\": \"2024-04-01 10:20:00\",\n    \"rrule\": {\n      \"rule_string\": \"FREQ=WEEKLY;INTERVAL=1;WKST=SU;BYDAY=SU;DTSTART=20240201T091500;UNTIL=20240401T102000\",\n      \"duration\": {\n        \"value\": 2,\n        \"type\": \"MONTHS\"\n      }\n    },\n    \"skills\": [\n      {\n        \"skill_uid\": \"984fb623-ee58-4894-8edf-2b50d4bac217\",\n        \"skill_name\": \"Kitchen Installation\"\n      },\n      {\n        \"skill_uid\": \"e131b9a0-fd78-4a9b-a7ce-89ab51f59b4c\",\n        \"skill_name\": \"kitchen floor cleaning\"\n      }\n    ],\n    \"custom_fields\": [\n      {\n        \"label\": \"Sage Customer ID\",\n        \"value\": \"Z81\",\n        \"type\": \"SINGLE_LINE\",\n        \"module_name\": \"PROJECT\",\n        \"ref_uid\": \"51e984e1-964d-11ed-a3d1-295b79eb7eaa\",\n        \"group_name\": \"group A\",\n        \"group_uid\": \"51e984e1-964d-11ed-a3d1-295b79eb7eaa\",\n        \"hide_to_fe\": true,\n        \"hide_field\": true,\n        \"read_only\": true\n      }\n    ],\n    \"assigned_to\": [\n      {\n        \"team_uid\": \"94d84b0f-ca91-40b6-b8b6-69c811476de9\",\n        \"user_uid\": \"86b98e7a-1de8-4b24-904c-bc2c7811e0e4\"\n      }\n    ],\n    \"assigned_to_team\": [\n      {\n        \"team_uid\": \"94d84b0f-ca91-40b6-b8b6-69c811476de9\"\n      },\n      {\n        \"team_uid\": \"84d84b0f-ca91-40b6-b8b6-69c811476de9\"\n      }\n    ],\n    \"customer_uid\": \"4185a6c0-58d0-11e8-a06a-f1f7062602d6\",\n    \"work_mins_required\": 10,\n    \"service_task\": {\n      \"is_enabled\": true,\n      \"execution_type\": \"PARALLEL\",\n      \"service_tasks\": [\n        {\n          \"sequence_no\": 1,\n          \"service_task_master\": \"f5850050-f487-11ed-8436-d1e0a7ce17c7\",\n          \"service_task_title\": \"Service Task Test\",\n          \"service_task_description\": \"Service Task Test\",\n          \"estimated_duration\": {\n            \"days\": 1,\n            \"hours\": 1,\n            \"minutes\": 1\n          },\n          \"inspection_form\": \"f5850050-f487-11ed-8436-d1e0a7ce17c7\",\n          \"asset\": \"f5850050-f487-11ed-8436-d1e0a7ce17c7\"\n        }\n      ]\n    },\n\t\t\"email_config_uid\": \"f5850050-f487-11ed-8436-d1e0a7ce17c7\"\n  }\n}_"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"New Job Created successfully\",\n  \"job_uid\": \"6fa6fec0-d6f9-11ee-bf60-d1e9e2f3bc94\",\n  \"customer_uid\": \"4185a6c0-58d0-11e8-a06a-f1f7062602d6\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "New Job Created successfully"
                    },
                    "job_uid": {
                      "type": "string",
                      "example": "6fa6fec0-d6f9-11ee-bf60-d1e9e2f3bc94"
                    },
                    "customer_uid": {
                      "type": "string",
                      "example": "4185a6c0-58d0-11e8-a06a-f1f7062602d6"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n      message: \"Either customer or organization data is required\",\n      title: \"Customer or Organization data is required\",\n      type: \"error\"\n}"
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