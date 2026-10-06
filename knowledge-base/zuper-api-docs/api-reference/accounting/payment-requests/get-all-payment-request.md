---
updatedAt: 2026-06-16T10:59:00.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Payment Request

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
    "/payments/payment_request": {
      "get": {
        "description": "",
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
                    "total_records": {
                      "type": "string",
                      "default": "0"
                    },
                    "current_page": {
                      "type": "string",
                      "default": "1"
                    },
                    "total_pages": {
                      "type": "string",
                      "default": "1"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "payment_request_uid": {
                            "type": "string"
                          },
                          "payment_request_name": {
                            "type": "string"
                          },
                          "status": {
                            "type": "string"
                          },
                          "module": {
                            "type": "string"
                          },
                          "module_uid": {
                            "type": "string"
                          },
                          "requested_amount": {
                            "type": "string"
                          },
                          "payment_link": {
                            "type": "string"
                          },
                          "short_payment_link": {
                            "type": "string"
                          },
                          "notes": {
                            "type": "string"
                          },
                          "is_deleted": {
                            "type": "string"
                          },
                          "created_at": {
                            "type": "string"
                          },
                          "updated_at": {
                            "type": "string"
                          },
                          "created_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string"
                              },
                              "first_name": {
                                "type": "string"
                              },
                              "last_name": {
                                "type": "string"
                              },
                              "email": {
                                "type": "string"
                              },
                              "external_login_id": {
                                "type": "string"
                              },
                              "home_phone_number": {
                                "type": "string"
                              },
                              "designation": {
                                "type": "string"
                              },
                              "emp_code": {
                                "type": "string"
                              },
                              "prefix": {
                                "type": "string"
                              },
                              "work_phone_number": {
                                "type": "string"
                              },
                              "mobile_phone_number": {
                                "type": "string"
                              },
                              "profile_picture": {
                                "type": "string"
                              },
                              "hourly_labor_charge": {
                                "type": "string"
                              },
                              "is_active": {
                                "type": "string"
                              },
                              "is_deleted": {
                                "type": "string"
                              },
                              "created_at": {
                                "type": "string"
                              },
                              "updated_at": {
                                "type": "string"
                              },
                              "last_login_at": {
                                "type": "string"
                              },
                              "role": {
                                "type": "object",
                                "properties": {
                                  "role_key": {
                                    "type": "string"
                                  },
                                  "role_uid": {
                                    "type": "string"
                                  },
                                  "role_name": {
                                    "type": "string"
                                  }
                                }
                              }
                            }
                          },
                          "canceled_by": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string"
                              },
                              "first_name": {
                                "type": "string"
                              },
                              "last_name": {
                                "type": "string"
                              },
                              "email": {
                                "type": "string"
                              },
                              "external_login_id": {
                                "type": "string"
                              },
                              "home_phone_number": {
                                "type": "string"
                              },
                              "designation": {
                                "type": "string"
                              },
                              "emp_code": {
                                "type": "string"
                              },
                              "prefix": {
                                "type": "string"
                              },
                              "work_phone_number": {
                                "type": "string"
                              },
                              "mobile_phone_number": {
                                "type": "string"
                              },
                              "profile_picture": {
                                "type": "string"
                              },
                              "hourly_labor_charge": {
                                "type": "string"
                              },
                              "is_active": {
                                "type": "string"
                              },
                              "is_deleted": {
                                "type": "string"
                              },
                              "created_at": {
                                "type": "string"
                              },
                              "updated_at": {
                                "type": "string"
                              },
                              "last_login_at": {
                                "type": "string"
                              },
                              "role": {
                                "type": "object",
                                "properties": {
                                  "role_uid": {
                                    "type": "string"
                                  },
                                  "role_name": {
                                    "type": "string"
                                  },
                                  "role_key": {
                                    "type": "string"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "type": "object"
                      }
                    }
                  },
                  "required": [
                    "type"
                  ]
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "query",
            "name": "filter.module",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.module_uid",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.status",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.from_date",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.to_date",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.updated_at_from",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.updated_at_to",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.amount_from",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.amount_to",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "filter.created_by",
            "schema": {
              "type": "string"
            }
          }
        ],
        "operationId": "get_payments-payment-request",
        "summary": "Get All Payment Request"
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