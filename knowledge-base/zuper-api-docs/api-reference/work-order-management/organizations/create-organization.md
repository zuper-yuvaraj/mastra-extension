---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Organization

Create new Organization

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
    "/organization": {
      "post": {
        "summary": "Create Organization",
        "description": "Create new Organization",
        "operationId": "create-organization",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "organization"
                ],
                "properties": {
                  "organization": {
                    "type": "object",
                    "description": "Organization object",
                    "required": [
                      "organization_name"
                    ],
                    "properties": {
                      "organization_name": {
                        "type": "string",
                        "description": "Organization Name"
                      },
                      "organization_logo": {
                        "type": "string",
                        "description": "Organization Logo"
                      },
                      "organization_description": {
                        "type": "string",
                        "description": "Organization Description"
                      },
                      "organization_email": {
                        "type": "string",
                        "description": "Organization Email"
                      },
                      "pricelist": {
                        "type": "string",
                        "description": "Pricelist details"
                      },
                      "custom_fields": {
                        "type": "array",
                        "description": "Custom Field Details",
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
                      "customers": {
                        "type": "array",
                        "description": "Customer Lists",
                        "items": {
                          "properties": {
                            "customer": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "organization_address": {
                        "type": "object",
                        "description": "Address Details",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "organization_billing_address": {
                        "type": "object",
                        "properties": {
                          "landmark": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "street": {
                            "type": "string"
                          },
                          "country": {
                            "type": "string"
                          },
                          "zip_code": {
                            "type": "string"
                          },
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "phone_number": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "state": {
                            "type": "string"
                          }
                        }
                      },
                      "tax": {
                        "type": "object",
                        "description": "Organization Tax",
                        "properties": {
                          "tax_exempt": {
                            "type": "boolean",
                            "default": false
                          },
                          "tax_exempt_remarks": {
                            "type": "string"
                          },
                          "tax_exempt_number": {
                            "type": "string"
                          },
                          "customer_code": {
                            "type": "string"
                          },
                          "entity_use_code": {
                            "type": "string"
                          },
                          "tax_provider": {
                            "type": "string",
                            "enum": [
                              "AVALARA"
                            ]
                          }
                        }
                      },
                      "assigned_to": {
                        "type": "array",
                        "description": "Assigned User/Teams",
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
                      "additional_emails": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "organization": {
                      "organization_name": "North Tower to South",
                      "organization_logo": "",
                      "organization_email": "support@nts.com",
                      "organization_description": "<p>Generate random description</p>",
                      "organization_address": {
                        "city": "Chennai",
                        "geo_cordinates": [
                          -7.2410243,
                          112.7794419
                        ],
                        "landmark": "",
                        "state": "Jawa Timur",
                        "street": "Zuper Futsal 3 Lebak Jaya, Jalan Lebak Jaya III Utara, Gading, Surabaya, East Java, Indonesia",
                        "zip_code": "60134",
                        "first_name": "John",
                        "last_name": "Admin",
                        "email": "john@nts.com",
                        "phone_number": "02349-0985653",
                        "country": "Indonesia"
                      },
                      "organization_billing_address": {
                        "city": "Chennai",
                        "geo_cordinates": [
                          -7.2410243,
                          112.7794419
                        ],
                        "landmark": "",
                        "state": "Jawa Timur",
                        "street": "Zuper Futsal 3 Lebak Jaya, Jalan Lebak Jaya III Utara, Gading, Surabaya, East Java, Indonesia",
                        "zip_code": "60134",
                        "first_name": "John",
                        "last_name": "Admin",
                        "email": "john@nts.com",
                        "phone_number": "02349-0985653",
                        "country": "Indonesia"
                      },
                      "custom_fields": [
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 0,
                          "label": "Text Input",
                          "read_only": true,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": "Ine"
                        },
                        {
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 1,
                          "label": "File Input",
                          "read_only": false,
                          "type": "FILE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Test Group",
                          "group_uid": "86671760-ccc9-11ee-a15a-0785a4c20173",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 2,
                          "label": "Text Input",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Test Group",
                          "group_uid": "86671760-ccc9-11ee-a15a-0785a4c20173",
                          "hide_field": true,
                          "hide_to_fe": false,
                          "id": 3,
                          "label": "Time Input",
                          "read_only": false,
                          "type": "TIME",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Test Group",
                          "group_uid": "86671760-ccc9-11ee-a15a-0785a4c20173",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 4,
                          "label": "Testing fields",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Test Group",
                          "group_uid": "86671760-ccc9-11ee-a15a-0785a4c20173",
                          "hide_field": true,
                          "hide_to_fe": false,
                          "id": 5,
                          "label": "Org test",
                          "read_only": false,
                          "type": "MULTI_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        },
                        {
                          "group_name": "Test Group",
                          "group_uid": "86671760-ccc9-11ee-a15a-0785a4c20173",
                          "hide_field": false,
                          "hide_to_fe": false,
                          "id": 6,
                          "label": "Org testing",
                          "read_only": false,
                          "type": "SINGLE_LINE",
                          "dependent_on": "",
                          "dependent_options": [],
                          "module_name": "PRODUCT",
                          "value": ""
                        }
                      ],
                      "customers": [],
                      "pricelist": "9d2d8030-7654-11ef-9d2f-09988bda78f1",
                      "tax": {
                        "tax_exempt": false,
                        "tax_group": ""
                      }
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"New Organization Created successfully\",\n    \"data\": {\n        \"organization_uid\": \"219cf1e0-11ee-8cd0-516f5d67130d-***\"\n    }\n}"
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
                      "example": "New Organization Created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "organization_uid": {
                          "type": "string",
                          "example": "219cf1e0-11ee-8cd0-516f5d67130d-***"
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
                    "value": "{\n      \"message\": \"Organization name is missing\",\n      \"title\": \"Missing Organization name\",\n      \"type\": \"error\"\n }"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Organization name is missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Organization name"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
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