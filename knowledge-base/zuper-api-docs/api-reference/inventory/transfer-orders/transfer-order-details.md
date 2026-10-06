---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get a Transfer Order

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
    "/products/transfer_orders/{transfer_order_uid}": {
      "get": {
        "summary": "Get a Transfer Order",
        "description": "",
        "operationId": "transfer-order-details",
        "parameters": [
          {
            "name": "transfer_order_uid",
            "in": "path",
            "description": "transfer order uid",
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
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"prefix\": \"V2-004\",\n        \"transfer_order_uid\": \"eb3fea4e-a78d-4c97-833f-9bf5047134b5\",\n        \"from_location\": {\n            \"location_uid\": \"1a570534-cbce-487f-9d5e-23912a1ec1c7\",\n            \"location_name\": \"black team only\"\n        },\n        \"to_location\": {\n            \"location_uid\": \"070df7e0-ea60-11ee-9d1c-3169492ff8f3\",\n            \"location_name\": \"Aluva\"\n        },\n        \"required_by\": \"2024-07-25T04:44:00.000Z\",\n        \"sent_date\": null,\n        \"received_date\": null,\n        \"transfer_order_status\": \"DRAFT\",\n        \"status_history\": [\n            {\n                \"status_name\": \"DRAFT\",\n                \"status_date\": \"2024-06-07T05:36:04.381Z\",\n                \"created_at\": \"2024-06-07T05:36:04.381Z\",\n                \"done_by\": {\n                    \"user_uid\": \"5c6f734f-999b-453c-89b9-c0a5c2f9b4d5\",\n                    \"first_name\": \"Ashin\",\n                    \"last_name\": \"Thankachan\",\n                    \"email\": \"ashin.t@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": \"8301907278\",\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"001\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"9600086457\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"\",\n                    \"hourly_labor_charge\": null,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2024-01-25T05:30:47.000Z\",\n                    \"updated_at\": \"2024-05-03T07:47:20.000Z\",\n                    \"role\": {\n                        \"role_name\": \"Admin\",\n                        \"role_uid\": \"a355d556-6976-4e05-9842-fad5b9ebd081\"\n                    }\n                },\n                \"_id\": \"66629c44d27394308481562f\"\n            }\n        ],\n        \"line_items_count\": 1,\n        \"line_items\": [\n            {\n                \"line_item_uid\": \"1d26aa69-7bce-4d6b-9425-acc7f8562f88\",\n                \"product_ref_id\": {\n                    \"product_uid\": \"08d63fbe-d2f2-431c-ba22-3f96e9960558\",\n                    \"prefix\": \"PT\",\n                    \"product_id\": \"p11\",\n                    \"product_category\": {\n                        \"category_uid\": \"ae34de60-e50d-11ee-9575-e1d3cd673fd9\",\n                        \"category_name\": \"Product\"\n                    },\n                    \"product_image\": \"\",\n                    \"brand\": \"CAT\",\n                    \"product_name\": \"Product with S_NOS\",\n                    \"product_description\": \"product with serial nos\",\n                    \"product_type\": \"PRODUCT\",\n                    \"meta_data\": [\n                        {\n                            \"label\": \"Text Input\",\n                            \"value\": \"\",\n                            \"type\": \"SINGLE_LINE\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"6654367e9aa133537b1d33af\"\n                        },\n                        {\n                            \"label\": \"Time Input\",\n                            \"value\": \"\",\n                            \"type\": \"TIME\",\n                            \"hide_field\": false,\n                            \"hide_to_fe\": false,\n                            \"_id\": \"6654367e9aa133537b1d33b0\"\n                        }\n                    ],\n                    \"location_availability\": [\n                        {\n                            \"location\": {\n                                \"location_uid\": \"070df7e0-ea60-11ee-9d1c-3169492ff8f3\",\n                                \"location_name\": \"Aluva\",\n                                \"is_deleted\": false\n                            },\n                            \"quantity\": 101,\n                            \"min_quantity\": 50,\n                            \"serial_nos\": [\n                                \"test_1\",\n                                \"test_2\",\n                                \"test_3\",\n                                \"test_4\",\n                                \"test_5\",\n                                \"test_6\",\n                                \"test_7\",\n                                \"test_8\",\n                                \"test_9\",\n                                \"test_10\",\n                                \"test_11\"\n                            ],\n                            \"_id\": \"6654367e9aa133537b1d33b1\",\n                            \"created_at\": \"2024-05-27T07:30:06.497Z\"\n                        },\n                        {\n                            \"location\": {\n                                \"location_uid\": \"15fe4750-ea60-11ee-9d1c-3169492ff8f3\",\n                                \"location_name\": \"Broadway\",\n                                \"is_deleted\": false\n                            },\n                            \"quantity\": 100,\n                            \"min_quantity\": 50,\n                            \"serial_nos\": [\n                                \"test_1\",\n                                \"test_2\",\n                                \"test_3\",\n                                \"test_4\",\n                                \"test_5\",\n                                \"test_6\",\n                                \"test_7\",\n                                \"test_8\",\n                                \"test_9\",\n                                \"test_10\",\n                                \"test_11\"\n                            ],\n                            \"_id\": \"6654367e9aa133537b1d33b2\",\n                            \"created_at\": \"2024-05-27T07:30:06.497Z\"\n                        },\n                        {\n                            \"location\": {\n                                \"location_uid\": \"393aaa10-ea60-11ee-9d1c-3169492ff8f3\",\n                                \"location_name\": \"Swift ( red and black team)\",\n                                \"is_deleted\": false\n                            },\n                            \"quantity\": 89,\n                            \"min_quantity\": 50,\n                            \"serial_nos\": [\n                                \"test_2\",\n                                \"test_5\",\n                                \"test_6\",\n                                \"test_7\",\n                                \"test_8\",\n                                \"test_9\",\n                                \"test_10\",\n                                \"test_11\",\n                                \"test_3\"\n                            ],\n                            \"_id\": \"6654367e9aa133537b1d33b3\",\n                            \"created_at\": \"2024-05-27T07:30:06.497Z\"\n                        },\n                        {\n                            \"location\": {\n                                \"location_uid\": \"ed124970-ea61-11ee-9d1c-3169492ff8f3\",\n                                \"location_name\": \"Goa Warehouse\",\n                                \"is_deleted\": false\n                            },\n                            \"quantity\": 100,\n                            \"min_quantity\": 50,\n                            \"serial_nos\": [\n                                \"test_1\",\n                                \"test_2\",\n                                \"test_3\",\n                                \"test_4\",\n                                \"test_5\",\n                                \"test_6\",\n                                \"test_7\",\n                                \"test_8\",\n                                \"test_9\",\n                                \"test_10\",\n                                \"test_11\"\n                            ],\n                            \"_id\": \"6654367e9aa133537b1d33b4\",\n                            \"created_at\": \"2024-05-27T07:30:06.497Z\"\n                        },\n                        {\n                            \"location\": {\n                                \"location_uid\": \"1a570534-cbce-487f-9d5e-23912a1ec1c7\",\n                                \"location_name\": \"black team only\",\n                                \"is_deleted\": false\n                            },\n                            \"quantity\": 97,\n                            \"min_quantity\": null,\n                            \"serial_nos\": [],\n                            \"_id\": \"665f081c1454173772188701\",\n                            \"created_at\": \"2024-06-04T12:27:08.962Z\"\n                        }\n                    ],\n                    \"quantity\": 487,\n                    \"price\": 150,\n                    \"purchase_price\": 100,\n                    \"has_custom_tax\": false,\n                    \"tax\": {\n                        \"tax_exempt\": false\n                    },\n                    \"is_deleted\": false,\n                    \"created_at\": \"2024-05-27T07:30:06.498Z\",\n                    \"updated_at\": \"2024-06-04T12:27:08.978Z\",\n                    \"product_no\": 8\n                },\n                \"product_uid\": \"08d63fbe-d2f2-431c-ba22-3f96e9960558\",\n                \"name\": \"Product with S_NOS\",\n                \"quantity\": 1,\n                \"serial_nos\": [],\n                \"_id\": \"66629c44d273943084815630\"\n            }\n        ],\n        \"attachments\": [\n            {\n                \"attachment_uid\": \"9c690799-c8b1-4d35-a899-76b86552c6cb\",\n                \"file_name\": \"test\",\n                \"file_size\": 123,\n                \"url\": \"test\",\n                \"created_by\": {\n                    \"user_uid\": \"5c6f734f-999b-453c-89b9-c0a5c2f9b4d5\",\n                    \"first_name\": \"Ashin\",\n                    \"last_name\": \"Thankachan\",\n                    \"email\": \"ashin.t@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": \"8301907278\",\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"001\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"9600086457\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"\",\n                    \"hourly_labor_charge\": null,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2024-01-25T05:30:47.000Z\",\n                    \"updated_at\": \"2024-05-03T07:47:20.000Z\",\n                    \"role\": {\n                        \"role_name\": \"Admin\",\n                        \"role_uid\": \"a355d556-6976-4e05-9842-fad5b9ebd081\"\n                    }\n                },\n                \"_id\": \"66629c44d273943084815631\",\n                \"created_at\": \"2024-06-07T05:36:04.383Z\"\n            },\n            {\n                \"attachment_uid\": \"8ffda750-62bd-4789-ba93-5d90fbe9dc05\",\n                \"file_name\": \"test\",\n                \"file_size\": 123,\n                \"url\": \"test\",\n                \"created_by\": {\n                    \"user_uid\": \"5c6f734f-999b-453c-89b9-c0a5c2f9b4d5\",\n                    \"first_name\": \"Ashin\",\n                    \"last_name\": \"Thankachan\",\n                    \"email\": \"ashin.t@zuper.co\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": \"8301907278\",\n                    \"designation\": \"Admin\",\n                    \"emp_code\": \"001\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"9600086457\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"\",\n                    \"hourly_labor_charge\": null,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2024-01-25T05:30:47.000Z\",\n                    \"updated_at\": \"2024-05-03T07:47:20.000Z\",\n                    \"role\": {\n                        \"role_name\": \"Admin\",\n                        \"role_uid\": \"a355d556-6976-4e05-9842-fad5b9ebd081\"\n                    }\n                },\n                \"_id\": \"66629c44d273943084815632\",\n                \"created_at\": \"2024-06-07T05:36:04.383Z\"\n            }\n        ],\n        \"remarks\": \"coreect transfer_order\",\n        \"created_by\": {\n            \"user_uid\": \"5c6f734f-999b-453c-89b9-c0a5c2f9b4d5\",\n            \"first_name\": \"Ashin\",\n            \"last_name\": \"Thankachan\",\n            \"email\": \"ashin.t@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": \"8301907278\",\n            \"designation\": \"Admin\",\n            \"emp_code\": \"001\",\n            \"prefix\": null,\n            \"work_phone_number\": \"9600086457\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"\",\n            \"hourly_labor_charge\": null,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2024-01-25T05:30:47.000Z\",\n            \"updated_at\": \"2024-05-03T07:47:20.000Z\",\n            \"role\": {\n                \"role_name\": \"Admin\",\n                \"role_uid\": \"a355d556-6976-4e05-9842-fad5b9ebd081\"\n            }\n        },\n        \"created_at\": \"2024-06-07T05:36:04.386Z\",\n        \"updated_at\": \"2024-06-07T05:36:04.386Z\",\n        \"transfer_order_number\": 43\n    }\n}"
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
                        "prefix": {
                          "type": "string",
                          "example": "V2-004"
                        },
                        "transfer_order_uid": {
                          "type": "string",
                          "example": "eb3fea4e-a78d-4c97-833f-9bf5047134b5"
                        },
                        "from_location": {
                          "type": "object",
                          "properties": {
                            "location_uid": {
                              "type": "string",
                              "example": "1a570534-cbce-487f-9d5e-23912a1ec1c7"
                            },
                            "location_name": {
                              "type": "string",
                              "example": "black team only"
                            }
                          }
                        },
                        "to_location": {
                          "type": "object",
                          "properties": {
                            "location_uid": {
                              "type": "string",
                              "example": "070df7e0-ea60-11ee-9d1c-3169492ff8f3"
                            },
                            "location_name": {
                              "type": "string",
                              "example": "Aluva"
                            }
                          }
                        },
                        "required_by": {
                          "type": "string",
                          "example": "2024-07-25T04:44:00.000Z"
                        },
                        "sent_date": {},
                        "received_date": {},
                        "transfer_order_status": {
                          "type": "string",
                          "example": "DRAFT"
                        },
                        "status_history": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "status_name": {
                                "type": "string",
                                "example": "DRAFT"
                              },
                              "status_date": {
                                "type": "string",
                                "example": "2024-06-07T05:36:04.381Z"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2024-06-07T05:36:04.381Z"
                              },
                              "done_by": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "5c6f734f-999b-453c-89b9-c0a5c2f9b4d5"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Ashin"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "Thankachan"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "ashin.t@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {
                                    "type": "string",
                                    "example": "8301907278"
                                  },
                                  "designation": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "001"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {
                                    "type": "string",
                                    "example": "9600086457"
                                  },
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "hourly_labor_charge": {},
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
                                    "example": "2024-01-25T05:30:47.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-05-03T07:47:20.000Z"
                                  },
                                  "role": {
                                    "type": "object",
                                    "properties": {
                                      "role_name": {
                                        "type": "string",
                                        "example": "Admin"
                                      },
                                      "role_uid": {
                                        "type": "string",
                                        "example": "a355d556-6976-4e05-9842-fad5b9ebd081"
                                      }
                                    }
                                  }
                                }
                              },
                              "_id": {
                                "type": "string",
                                "example": "66629c44d27394308481562f"
                              }
                            }
                          }
                        },
                        "line_items_count": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "line_items": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "line_item_uid": {
                                "type": "string",
                                "example": "1d26aa69-7bce-4d6b-9425-acc7f8562f88"
                              },
                              "product_ref_id": {
                                "type": "object",
                                "properties": {
                                  "product_uid": {
                                    "type": "string",
                                    "example": "08d63fbe-d2f2-431c-ba22-3f96e9960558"
                                  },
                                  "prefix": {
                                    "type": "string",
                                    "example": "PT"
                                  },
                                  "product_id": {
                                    "type": "string",
                                    "example": "p11"
                                  },
                                  "product_category": {
                                    "type": "object",
                                    "properties": {
                                      "category_uid": {
                                        "type": "string",
                                        "example": "ae34de60-e50d-11ee-9575-e1d3cd673fd9"
                                      },
                                      "category_name": {
                                        "type": "string",
                                        "example": "Product"
                                      }
                                    }
                                  },
                                  "product_image": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "brand": {
                                    "type": "string",
                                    "example": "CAT"
                                  },
                                  "product_name": {
                                    "type": "string",
                                    "example": "Product with S_NOS"
                                  },
                                  "product_description": {
                                    "type": "string",
                                    "example": "product with serial nos"
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
                                          "example": "Text Input"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "type": {
                                          "type": "string",
                                          "example": "SINGLE_LINE"
                                        },
                                        "hide_field": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "hide_to_fe": {
                                          "type": "boolean",
                                          "example": false,
                                          "default": true
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "6654367e9aa133537b1d33af"
                                        }
                                      }
                                    }
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
                                              "example": "070df7e0-ea60-11ee-9d1c-3169492ff8f3"
                                            },
                                            "location_name": {
                                              "type": "string",
                                              "example": "Aluva"
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
                                          "example": 101,
                                          "default": 0
                                        },
                                        "min_quantity": {
                                          "type": "integer",
                                          "example": 50,
                                          "default": 0
                                        },
                                        "serial_nos": {
                                          "type": "array",
                                          "items": {
                                            "type": "string",
                                            "example": "test_1"
                                          }
                                        },
                                        "_id": {
                                          "type": "string",
                                          "example": "6654367e9aa133537b1d33b1"
                                        },
                                        "created_at": {
                                          "type": "string",
                                          "example": "2024-05-27T07:30:06.497Z"
                                        }
                                      }
                                    }
                                  },
                                  "quantity": {
                                    "type": "integer",
                                    "example": 487,
                                    "default": 0
                                  },
                                  "price": {
                                    "type": "integer",
                                    "example": 150,
                                    "default": 0
                                  },
                                  "purchase_price": {
                                    "type": "integer",
                                    "example": 100,
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
                                      "tax_exempt": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2024-05-27T07:30:06.498Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-06-04T12:27:08.978Z"
                                  },
                                  "product_no": {
                                    "type": "integer",
                                    "example": 8,
                                    "default": 0
                                  }
                                }
                              },
                              "product_uid": {
                                "type": "string",
                                "example": "08d63fbe-d2f2-431c-ba22-3f96e9960558"
                              },
                              "name": {
                                "type": "string",
                                "example": "Product with S_NOS"
                              },
                              "quantity": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "serial_nos": {
                                "type": "array"
                              },
                              "_id": {
                                "type": "string",
                                "example": "66629c44d273943084815630"
                              }
                            }
                          }
                        },
                        "attachments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attachment_uid": {
                                "type": "string",
                                "example": "9c690799-c8b1-4d35-a899-76b86552c6cb"
                              },
                              "file_name": {
                                "type": "string",
                                "example": "test"
                              },
                              "file_size": {
                                "type": "integer",
                                "example": 123,
                                "default": 0
                              },
                              "url": {
                                "type": "string",
                                "example": "test"
                              },
                              "created_by": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "5c6f734f-999b-453c-89b9-c0a5c2f9b4d5"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Ashin"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "Thankachan"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "ashin.t@zuper.co"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {
                                    "type": "string",
                                    "example": "8301907278"
                                  },
                                  "designation": {
                                    "type": "string",
                                    "example": "Admin"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "001"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {
                                    "type": "string",
                                    "example": "9600086457"
                                  },
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "hourly_labor_charge": {},
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
                                    "example": "2024-01-25T05:30:47.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-05-03T07:47:20.000Z"
                                  },
                                  "role": {
                                    "type": "object",
                                    "properties": {
                                      "role_name": {
                                        "type": "string",
                                        "example": "Admin"
                                      },
                                      "role_uid": {
                                        "type": "string",
                                        "example": "a355d556-6976-4e05-9842-fad5b9ebd081"
                                      }
                                    }
                                  }
                                }
                              },
                              "_id": {
                                "type": "string",
                                "example": "66629c44d273943084815631"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2024-06-07T05:36:04.383Z"
                              }
                            }
                          }
                        },
                        "remarks": {
                          "type": "string",
                          "example": "coreect transfer_order"
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "5c6f734f-999b-453c-89b9-c0a5c2f9b4d5"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Ashin"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "Thankachan"
                            },
                            "email": {
                              "type": "string",
                              "example": "ashin.t@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {
                              "type": "string",
                              "example": "8301907278"
                            },
                            "designation": {
                              "type": "string",
                              "example": "Admin"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "001"
                            },
                            "prefix": {},
                            "work_phone_number": {
                              "type": "string",
                              "example": "9600086457"
                            },
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": ""
                            },
                            "hourly_labor_charge": {},
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
                              "example": "2024-01-25T05:30:47.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-05-03T07:47:20.000Z"
                            },
                            "role": {
                              "type": "object",
                              "properties": {
                                "role_name": {
                                  "type": "string",
                                  "example": "Admin"
                                },
                                "role_uid": {
                                  "type": "string",
                                  "example": "a355d556-6976-4e05-9842-fad5b9ebd081"
                                }
                              }
                            }
                          }
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-06-07T05:36:04.386Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2024-06-07T05:36:04.386Z"
                        },
                        "transfer_order_number": {
                          "type": "integer",
                          "example": 43,
                          "default": 0
                        }
                      }
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
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Missing Mandatory Fields\",\n    \"message\": \"Transfer Order UID is mandatory\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Mandatory Fields"
                    },
                    "message": {
                      "type": "string",
                      "example": "Transfer Order UID is mandatory"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"error\",\n    \"title\": \"Invalid Transfer Order UID\",\n    \"message\": \"Invalid Transfer Order UID\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invalid Transfer Order UID"
                    },
                    "message": {
                      "type": "string",
                      "example": "Invalid Transfer Order UID"
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