---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Project

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
    "/projects": {
      "post": {
        "summary": "Create Project",
        "description": "",
        "operationId": "create-project",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "project": {
                    "type": "object",
                    "properties": {
                      "project_prefix": {
                        "type": "string"
                      },
                      "project_icon": {
                        "type": "string"
                      },
                      "project_name": {
                        "type": "string"
                      },
                      "project_category": {
                        "type": "string"
                      },
                      "project_priority": {
                        "type": "string",
                        "enum": [
                          "URGENT",
                          "HIGH",
                          "MEDIUM",
                          "LOW"
                        ]
                      },
                      "project_description": {
                        "type": "string"
                      },
                      "project_completion_percentage": {
                        "type": "integer",
                        "format": "int32"
                      },
                      "project_start_date": {
                        "type": "string",
                        "format": "date-time",
                        "description": ""
                      },
                      "project_end_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "project_actual_start_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "project_actual_end_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "project_due_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "project_template": {
                        "type": "string"
                      },
                      "organization": {
                        "type": "string",
                        "description": "Customer or Organization is mandatory"
                      },
                      "customer": {
                        "type": "string",
                        "description": "Customer or Organization is mandatory"
                      },
                      "project_manager": {
                        "type": "string"
                      },
                      "project_current_status": {
                        "type": "object",
                        "properties": {}
                      },
                      "project_service_address": {
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
                            }
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
                      "project_billing_address": {
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
                            }
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
                      "assets": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "asset": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "jobs": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "job": {
                              "type": "string"
                            },
                            "sequence": {
                              "type": "integer",
                              "format": "int32"
                            },
                            "phase_uid": {
                              "type": "string"
                            }
                          },
                          "type": "object"
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
                      "project_tags": {
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
                      "project_assigned_to": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "team": {
                              "type": "string"
                            },
                            "user": {
                              "type": "string"
                            }
                          },
                          "type": "object"
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
                      "type": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "items": {
                        "properties": {
                          "property": {
                            "type": "string"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "required": [
                      "project_category",
                      "project_name"
                    ]
                  }
                },
                "required": [
                  "project"
                ]
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "project": {
                      "project_prefix": "IN ",
                      "project_icon": "https://images.yourwebsite.com/project.png",
                      "project_name": "Solar Installation",
                      "project_category": "63932f00-c3f8-11ee-8e97-5d343b8a24b1",
                      "project_priority": "MEDIUM",
                      "project_description": "some description about project",
                      "project_completion_percentage": 90,
                      "project_start_date": "2021-11-02 00:00:00",
                      "project_end_date": "2021-12-02 00:00:00",
                      "project_actual_start_date": "2021-11-02 00:00:00",
                      "project_actual_end_date": "2021-12-02 00:00:00",
                      "project_due_date": "2021-12-02 00:00:00",
                      "project_public_url": "https://hello.com",
                      "project_template": "51e984e1-964d-11ed-a3d1-295b79eb7eaa",
                      "organization": "11d86a70-8212-11eb-ab1f-1ddf213d24b4",
                      "customer": "63bc8020-4858-11e8-83d8-9df89bc5d31b",
                      "project_manager": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                      "project_service_address": {
                        "first_name": "Test",
                        "last_name": "User",
                        "phone_number": "1234567890",
                        "email": "testuser@yopmail.com",
                        "city": "Thoraipakkam ",
                        "state": "Tamil Nadu ",
                        "street": "Jain College, D B Jain College main enterence, Jothi Nagar",
                        "country": "India",
                        "landmark": "near jain college",
                        "zip_code": "600097",
                        "geo_cordinates": [
                          12.9469543,
                          80.2400814
                        ]
                      },
                      "project_billing_address": {
                        "first_name": "Test",
                        "last_name": "User",
                        "phone_number": "1234567890",
                        "email": "testuser@yopmail.com",
                        "city": "Thoraipakkam ",
                        "state": "Tamil Nadu ",
                        "street": "Jain College, D B Jain College main enterence, Jothi Nagar",
                        "country": "India",
                        "landmark": "near jain college",
                        "zip_code": "600097",
                        "geo_cordinates": [
                          12.9469543,
                          80.2400814
                        ]
                      },
                      "properties": [
                        {
                          "property": "b7c98360-5e9f-11eb-98dc-79c25d781098"
                        }
                      ],
                      "assets": [
                        {
                          "asset": "596b4dc0-025d-11ea-af45-bd1d48d9fadb"
                        }
                      ],
                      "jobs": [
                        {
                          "job": "b917bbf0-c64b-11ec-a683-c7d53138532e",
                          "sequence": 1
                        }
                      ],
                      "attachments": [
                        {
                          "file_name": "profile.png",
                          "file_size": 100,
                          "url": "https://images.yourwebsite.com/profile.png",
                          "visible_to_customer": false
                        }
                      ],
                      "project_tags": [
                        "tag 1",
                        "tag 2"
                      ],
                      "custom_fields": [
                        {
                          "label": "Sage Customer ID",
                          "value": "Z81",
                          "type": "SINGLE_LINE",
                          "module_name": "PROJECT",
                          "ref_uid": "51e984e1-964d-11ed-a3d1-295b79eb7eaa",
                          "group_name": "group A",
                          "group_uid": "51e984e1-964d-11ed-a3d1-295b79eb7eaa",
                          "hide_to_fe": true,
                          "hide_field": true,
                          "read_only": true
                        }
                      ],
                      "project_assigned_to": [
                        {
                          "team": "18cada40-021b-11e8-8127-43a5add1a9e2",
                          "user": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa"
                        }
                      ],
                      "day_shifting": "MAINTAIN",
                      "consider_weekend": true,
                      "products": [
                        {
                          "line_item_type": "HEADER",
                          "name": "HEADER - 1"
                        },
                        {
                          "line_item_type": "ITEM",
                          "product_uid": "853ba100-02d2-11ef-a901-1f3e4d8db41e",
                          "location_uid": "7d905c10-03c8-11ef-94cd-01f7121eb721",
                          "group_uid": "a03a735c-65a7-4aca-b692-be803413f5e2",
                          "group_name": "general",
                          "location_name": "chennai",
                          "image": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/702eaeb0-02d2-11ef-a901-1f3e4d8db41e.png",
                          "name": "HEADER MODIFIED",
                          "brand": "ups",
                          "description": "ups",
                          "planned": {
                            "quantity": 1900
                          },
                          "unit_price": 20,
                          "unit_price_premarkup": 43,
                          "discount": 100,
                          "purchase_price": 300,
                          "discount_type": "FIXED",
                          "total": 37900,
                          "markup": {
                            "markup_type": "FLAT",
                            "markup_value": 1,
                            "markup_price": 1
                          }
                        }
                      ]
                    }
                  }
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Project created successfully\",\n    \"data\": {\n        \"project_uid\": \"2870bc10-d15b-11ee-8e74-61efa9ae50a0\"\n    }\n}"
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
                      "example": "Project created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project_uid": {
                          "type": "string",
                          "example": "2870bc10-d15b-11ee-8e74-61efa9ae50a0"
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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