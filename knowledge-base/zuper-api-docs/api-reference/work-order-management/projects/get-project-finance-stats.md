---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /projects/{project_uid}/finance/stats

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
    "/projects/{project_uid}/finance/stats": {
      "get": {
        "description": "",
        "operationId": "get_projects{project_uid}financestats",
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "default": "success"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "project": {
                          "type": "object",
                          "properties": {
                            "project_uid": {
                              "type": "string"
                            },
                            "project_name": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "project_uid",
                            "project_name"
                          ]
                        },
                        "stats": {
                          "type": "object",
                          "properties": {
                            "approved_amount": {
                              "type": "number"
                            },
                            "invoiced_amount": {
                              "type": "number"
                            },
                            "amount_left_to_invoice": {
                              "type": "number"
                            },
                            "collected_amount": {
                              "type": "number"
                            },
                            "balance_amount": {
                              "type": "number"
                            },
                            "invoiced_rate": {
                              "type": "number"
                            },
                            "collection_rate": {
                              "type": "number"
                            }
                          },
                          "required": [
                            "approved_amount",
                            "invoiced_amount",
                            "amount_left_to_invoice",
                            "collected_amount",
                            "balance_amount",
                            "invoiced_rate",
                            "collection_rate"
                          ]
                        }
                      },
                      "required": [
                        "project",
                        "stats"
                      ]
                    }
                  },
                  "required": [
                    "data"
                  ]
                },
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "data": {
                        "project": {
                          "project_uid": "326f1d2a-4d76-4ab6-af87-fa2bb97c7d19",
                          "project_name": "Project Name"
                        },
                        "stats": {
                          "approved_amount": 55014.982,
                          "invoiced_amount": 55014.982,
                          "amount_left_to_invoice": 0,
                          "collected_amount": 4000,
                          "balance_amount": 51014.982,
                          "invoiced_rate": 100,
                          "collection_rate": 7.271
                        },
                        "payments": [
                          {
                            "payment_transaction_uid": "7dbe9fcd-ae4e-4adc-9ef2-b6123f54e5cf",
                            "currency": "USD",
                            "amount": 4000,
                            "description": "Transaction description",
                            "payment_mode": {
                              "payment_mode_uid": "bf5a70fc-bfa9-4b9a-8936-0e5c45c7c228",
                              "payment_mode_name": "STRIPE",
                              "payment_mode_type": "ONLINE",
                              "payment_mode_description": "Payment mode description"
                            },
                            "action_module": "INVOICE",
                            "action_uid": "916999e5-089d-4bfd-b39c-12728650a550",
                            "type": "OFFLINE",
                            "status": "SUCCESS",
                            "payment_via": "PAYMENT_METHOD",
                            "payment_date_dt": "2026-05-04",
                            "remarks": "",
                            "created_at": "2026-05-04T11:56:41.195Z"
                          }
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "project_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ]
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