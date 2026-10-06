---
updatedAt: 2026-06-09T09:16:40.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Financial Summary

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api-2",
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
    "/jobs/{job_uid}/finance/stats": {
      "get": {
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "data": {
                        "job": {
                          "job_uid": "f5ea00c5-9f0e-4091-ab28-afe8194f7a44",
                          "job_title": "Test Job"
                        },
                        "stats": {
                          "approved_amount": 416976.4,
                          "invoiced_amount": 784616.4,
                          "amount_left_to_invoice": -367640,
                          "collected_amount": 404400.64,
                          "balance_amount": 12575.76,
                          "invoiced_rate": 188.17,
                          "collection_rate": 51.54
                        },
                        "payments": [
                          {
                            "payment_transaction_uid": "2dea67c4-f530-4a99-b1af-169d36055f09",
                            "currency": "USD",
                            "amount": 367640,
                            "description": "Transaction via offline payment",
                            "payment_mode": {
                              "payment_mode_uid": "a9120231-0bac-4dd4-8d50-e45526a8a933",
                              "payment_mode_name": "Card",
                              "payment_mode_type": "ONLINE",
                              "payment_mode_description": "This is to test stripe"
                            },
                            "action_module": "INVOICE",
                            "action_uid": "b230f056-248f-43ce-88d9-c182d817fbcf",
                            "type": "OFFLINE",
                            "status": "SUCCESS",
                            "payment_via": "PAYMENT_METHOD",
                            "payment_date_dt": "2026-06-03",
                            "remarks": "",
                            "created_at": "2026-06-03T17:10:42.587Z"
                          },
                          {
                            "payment_transaction_uid": "30df1569-dedd-467e-9fbf-9c3776e42b83",
                            "currency": "USD",
                            "amount": 36760.64,
                            "description": "Transaction via offline payment",
                            "payment_mode": {
                              "payment_mode_uid": "da5ecf9a-32d0-4af9-970d-e89ce9718f1f",
                              "payment_mode_name": "Customer Credit",
                              "payment_mode_type": "ONLINE",
                              "payment_mode_description": "using customer credit c"
                            },
                            "action_module": "ESTIMATE",
                            "action_uid": "a4595b9b-9bbb-4285-a4e5-6ce11c769604",
                            "type": "OFFLINE",
                            "status": "SUCCESS",
                            "payment_via": "PAYMENT_METHOD",
                            "payment_date_dt": "2026-06-03",
                            "created_at": "2026-06-03T17:08:32.658Z"
                          }
                        ]
                      }
                    }
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
                        "job": {
                          "type": "object",
                          "properties": {
                            "job_uid": {
                              "type": "string",
                              "example": "f5ea00c5-9f0e-4091-ab28-afe8194f7a44"
                            },
                            "job_title": {
                              "type": "string",
                              "example": "Test Job"
                            }
                          }
                        },
                        "stats": {
                          "type": "object",
                          "properties": {
                            "approved_amount": {
                              "type": "number",
                              "example": 416976.4,
                              "default": 0
                            },
                            "invoiced_amount": {
                              "type": "number",
                              "example": 784616.4,
                              "default": 0
                            },
                            "amount_left_to_invoice": {
                              "type": "integer",
                              "example": -367640,
                              "default": 0
                            },
                            "collected_amount": {
                              "type": "number",
                              "example": 404400.64,
                              "default": 0
                            },
                            "balance_amount": {
                              "type": "number",
                              "example": 12575.76,
                              "default": 0
                            },
                            "invoiced_rate": {
                              "type": "number",
                              "example": 188.17,
                              "default": 0
                            },
                            "collection_rate": {
                              "type": "number",
                              "example": 51.54,
                              "default": 0
                            }
                          }
                        },
                        "payments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "payment_transaction_uid": {
                                "type": "string",
                                "example": "2dea67c4-f530-4a99-b1af-169d36055f09"
                              },
                              "currency": {
                                "type": "string",
                                "example": "USD"
                              },
                              "amount": {
                                "type": "integer",
                                "example": 367640,
                                "default": 0
                              },
                              "description": {
                                "type": "string",
                                "example": "Transaction via offline payment"
                              },
                              "payment_mode": {
                                "type": "object",
                                "properties": {
                                  "payment_mode_uid": {
                                    "type": "string",
                                    "example": "a9120231-0bac-4dd4-8d50-e45526a8a933"
                                  },
                                  "payment_mode_name": {
                                    "type": "string",
                                    "example": "Card"
                                  },
                                  "payment_mode_type": {
                                    "type": "string",
                                    "example": "ONLINE"
                                  },
                                  "payment_mode_description": {
                                    "type": "string",
                                    "example": "This is to test stripe"
                                  }
                                }
                              },
                              "action_module": {
                                "type": "string",
                                "example": "INVOICE"
                              },
                              "action_uid": {
                                "type": "string",
                                "example": "b230f056-248f-43ce-88d9-c182d817fbcf"
                              },
                              "type": {
                                "type": "string",
                                "example": "OFFLINE"
                              },
                              "status": {
                                "type": "string",
                                "example": "SUCCESS"
                              },
                              "payment_via": {
                                "type": "string",
                                "example": "PAYMENT_METHOD"
                              },
                              "payment_date_dt": {
                                "type": "string",
                                "example": "2026-06-03"
                              },
                              "remarks": {
                                "type": "string",
                                "example": ""
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2026-06-03T17:10:42.587Z"
                              }
                            }
                          }
                        }
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
            "name": "job_uid",
            "schema": {
              "type": "string"
            },
            "required": true,
            "description": "Job UID"
          }
        ],
        "summary": "Get Job Financial Summary",
        "operationId": "get_jobs-job-uid-finance-stats"
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