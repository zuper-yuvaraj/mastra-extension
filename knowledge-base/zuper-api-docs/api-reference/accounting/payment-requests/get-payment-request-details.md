---
updatedAt: 2026-06-16T10:59:00.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Payment Request Details

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
    "/payments/payment_request/{payment_request_uid}": {
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
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
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
                        "canceled_at": {
                          "type": "string"
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
                        },
                        "canceled_remarks": {
                          "type": "string"
                        }
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
            "in": "path",
            "name": "payment_request_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "get_payments-payment-request-payment-request-uid",
        "summary": "Get Payment Request Details"
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