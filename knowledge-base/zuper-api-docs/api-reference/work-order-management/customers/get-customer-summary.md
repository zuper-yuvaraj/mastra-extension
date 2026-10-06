---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /customers/{customer_uid}/summary

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
    "/customers/{customer_uid}/summary": {
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
                    "message": {
                      "type": "string"
                    },
                    "estimate": {
                      "type": "object",
                      "properties": {}
                    }
                  }
                },
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "message": "Customer summary fetched successfully",
                      "data": {
                        "transactions": {
                          "job": {
                            "latest_transaction": {
                              "job_uid": "4de3e5cd-a89e-4221-906a-2c5f93948f7d",
                              "prefix": "pre",
                              "work_order_number": "pre105078",
                              "job_title": "COnsumption",
                              "scheduled_start_time": "2026-04-01T11:00:00.000Z",
                              "scheduled_end_time": "2026-04-01T11:00:00.000Z",
                              "current_job_status": {
                                "status_uid": "4d9ae176-797e-4f4d-86d2-51c582490547",
                                "status_name": "Address check",
                                "status_type": "NEW",
                                "status_color": "#02B875"
                              },
                              "job_timezone": "Asia/Kolkata"
                            },
                            "recent_transactions": [
                              {
                                "job_uid": "4de3e5cd-a89e-4221-906a-2c5f93948f7d",
                                "prefix": "pre",
                                "work_order_number": "pre105078",
                                "job_title": "COnsumption",
                                "scheduled_start_time": "2026-04-01T11:00:00.000Z",
                                "scheduled_end_time": "2026-04-01T11:00:00.000Z",
                                "current_job_status": {
                                  "status_uid": "4d9ae176-797e-4f4d-86d2-51c582490547",
                                  "status_name": "Address check",
                                  "status_type": "NEW",
                                  "status_color": "#02B875"
                                },
                                "job_timezone": "Asia/Kolkata"
                              }
                            ],
                            "count": 1
                          },
                          "project": {
                            "latest_transaction": {
                              "project_uid": "32b658f9-afa6-4aea-9a71-756714978ada",
                              "project_title": "Teimezone Validation Cloned",
                              "prefix": "",
                              "project_no": "856",
                              "current_project_status": {
                                "project_status_uid": "1aeb74e9-3d54-45c0-b603-75f0338af0ca",
                                "project_status_name": "test",
                                "project_status_type": "NEW",
                                "project_status_color": "#02B875"
                              }
                            },
                            "recent_transactions": [
                              {
                                "project_uid": "32b658f9-afa6-4aea-9a71-756714978ada",
                                "project_title": "Teimezone Validation Cloned",
                                "prefix": "",
                                "project_no": "856",
                                "current_project_status": {
                                  "project_status_uid": "1aeb74e9-3d54-45c0-b603-75f0338af0ca",
                                  "project_status_name": "test",
                                  "project_status_type": "NEW",
                                  "project_status_color": "#02B875"
                                }
                              },
                              {
                                "project_uid": "3e3ab0ed-ce65-4926-b942-12b247e853bc",
                                "project_title": "Teimezone Validation",
                                "prefix": "",
                                "project_no": "753",
                                "current_project_status": {
                                  "project_status_uid": "4a8ed100-d652-11ee-8016-3b6d11fab15c",
                                  "project_status_name": "In Progress",
                                  "project_status_type": "IN_PROGRESS",
                                  "project_status_color": "#27ae60"
                                }
                              }
                            ],
                            "count": 2
                          },
                          "estimate": {
                            "latest_transaction": {
                              "estimate_uid": "127d4aff-bd2f-4aef-8ee7-d07834c7cc19",
                              "estimate_title": "Proposal for Another tinge",
                              "proposal_title": "Proposal for Another tinge",
                              "estimate_no": "1000014846",
                              "estimate_date": "2026-03-29T07:19:35.025Z",
                              "estimate_status": "DRAFT",
                              "expiry_date": "2026-03-30T07:19:35.025Z",
                              "is_proposal": true,
                              "total": 652540
                            },
                            "recent_transactions": [
                              {
                                "estimate_uid": "127d4aff-bd2f-4aef-8ee7-d07834c7cc19",
                                "estimate_title": "Proposal for Another tinge",
                                "proposal_title": "Proposal for Another tinge",
                                "estimate_no": "1000014846",
                                "estimate_date": "2026-03-29T07:19:35.025Z",
                                "estimate_status": "DRAFT",
                                "expiry_date": "2026-03-30T07:19:35.025Z",
                                "is_proposal": true,
                                "total": 652540
                              }
                            ],
                            "count": 1
                          },
                          "invoice": {
                            "latest_transaction": {
                              "invoice_uid": "5c285ddb-69fc-4430-a2da-2a5540933d72",
                              "invoice_title": "Another tinge",
                              "invoice_no": "03 - 26 -10638",
                              "invoice_date": "2026-03-23T18:30:00.000Z",
                              "due_date": "2026-04-22T18:30:00.000Z",
                              "invoice_status": "DRAFT",
                              "total": 39693.68
                            },
                            "recent_transactions": [
                              {
                                "invoice_uid": "5c285ddb-69fc-4430-a2da-2a5540933d72",
                                "invoice_title": "Another tinge",
                                "invoice_no": "03 - 26 -10638",
                                "invoice_date": "2026-03-23T18:30:00.000Z",
                                "due_date": "2026-04-22T18:30:00.000Z",
                                "invoice_status": "DRAFT",
                                "total": 39693.68
                              }
                            ],
                            "count": 1
                          },
                          "payment": {
                            "latest_transaction": {
                              "payment_transaction_uid": "3d726048-d7f0-40b2-97bd-315f425beb3e",
                              "amount": 10.13,
                              "currency": "USD",
                              "status": "SUCCESS",
                              "payment_date_dt": "2026-03-19",
                              "action_module": "ESTIMATE",
                              "payment_mode": {
                                "payment_mode_uid": "bf5a70fc-bfa9-4b9a-8936-0e5c45c7c228",
                                "payment_mode_name": "STRIPE",
                                "payment_mode_type": "ONLINE",
                                "payment_mode_description": "*Insert LINK here*"
                              },
                              "description": "Transaction via online payment",
                              "created_at": "2026-03-19T09:17:05.206Z"
                            },
                            "recent_transactions": [
                              {
                                "payment_transaction_uid": "3d726048-d7f0-40b2-97bd-315f425beb3e",
                                "amount": 10.13,
                                "currency": "USD",
                                "status": "SUCCESS",
                                "payment_date_dt": "2026-03-19",
                                "action_module": "ESTIMATE",
                                "payment_mode": {
                                  "payment_mode_uid": "bf5a70fc-bfa9-4b9a-8936-0e5c45c7c228",
                                  "payment_mode_name": "STRIPE",
                                  "payment_mode_type": "ONLINE",
                                  "payment_mode_description": "*Insert LINK here*"
                                },
                                "description": "Transaction via online payment",
                                "created_at": "2026-03-19T09:17:05.206Z"
                              }
                            ],
                            "count": 1
                          },
                          "property": {
                            "latest_transaction": {},
                            "recent_transactions": [],
                            "count": 0
                          },
                          "request": {
                            "latest_transaction": {
                              "request_uid": "51695656-5ab8-4ae4-a1ed-88283e3889b4",
                              "request_title": "Validation REquest 2",
                              "request_id": 720,
                              "request_priority": "LOW",
                              "request_due_date": "2026-02-16T18:29:59.000Z",
                              "request_status": {
                                "status_type": "OPEN",
                                "status_uid": "26d89664-72c0-4280-b9fb-e9f4b38f8143",
                                "status_name": "New Request",
                                "status_color": "#3498db"
                              },
                              "created_at": "2026-02-11T15:18:52.602Z"
                            },
                            "recent_transactions": [
                              {
                                "request_uid": "51695656-5ab8-4ae4-a1ed-88283e3889b4",
                                "request_title": "Validation REquest 2",
                                "request_id": 720,
                                "request_priority": "LOW",
                                "request_due_date": "2026-02-16T18:29:59.000Z",
                                "request_status": {
                                  "status_type": "OPEN",
                                  "status_uid": "26d89664-72c0-4280-b9fb-e9f4b38f8143",
                                  "status_name": "New Request",
                                  "status_color": "#3498db"
                                },
                                "created_at": "2026-02-11T15:18:52.602Z"
                              },
                              {
                                "request_uid": "89f5f7e4-dc63-4ed4-84eb-562929f22b5f",
                                "request_title": "Validation REquest 1",
                                "request_id": 719,
                                "request_priority": "LOW",
                                "request_due_date": "2026-02-14T18:29:59.000Z",
                                "request_status": {
                                  "status_type": "OPEN",
                                  "status_uid": "26d89664-72c0-4280-b9fb-e9f4b38f8143",
                                  "status_name": "New Request",
                                  "status_color": "#3498db"
                                },
                                "created_at": "2026-02-11T15:18:09.586Z"
                              }
                            ],
                            "count": 2
                          },
                          "asset": {
                            "latest_transaction": {
                              "asset_uid": "720b7193-3271-4f33-b407-30b2dd94dffb",
                              "asset_name": "test ai",
                              "asset_code": "yttt",
                              "asset_status": "",
                              "created_at": "2026-03-31T09:45:31.043Z"
                            },
                            "recent_transactions": [
                              {
                                "asset_uid": "720b7193-3271-4f33-b407-30b2dd94dffb",
                                "asset_name": "test ai",
                                "asset_code": "yttt",
                                "asset_status": "",
                                "created_at": "2026-03-31T09:45:31.043Z"
                              },
                              {
                                "asset_uid": "74ddbe10-5fb3-4f6c-8f7a-f2a42e2f0913",
                                "asset_name": "#ZP #Product with custom tax ( 3110)",
                                "asset_code": "012034",
                                "asset_status": "INSTALLED",
                                "created_at": "2025-12-30T15:11:52.019Z"
                              }
                            ],
                            "count": 2
                          },
                          "service_contract": {
                            "latest_transaction": {
                              "contract_uid": "f543c7ef-ba32-4af1-9284-b09073e4a73b",
                              "contract_name": "Validation Contract Timezone",
                              "prefix": "C-001",
                              "contract_number": 6117,
                              "start_date": "2026-06-01T04:00:00.000Z",
                              "end_date": "2026-09-01T03:59:59.000Z",
                              "approval_status": "AWAIT_APPROVAL",
                              "created_at": "2025-11-14T11:14:45.581Z"
                            },
                            "recent_transactions": [
                              {
                                "contract_uid": "f543c7ef-ba32-4af1-9284-b09073e4a73b",
                                "contract_name": "Validation Contract Timezone",
                                "prefix": "C-001",
                                "contract_number": 6117,
                                "start_date": "2026-06-01T04:00:00.000Z",
                                "end_date": "2026-09-01T03:59:59.000Z",
                                "approval_status": "AWAIT_APPROVAL",
                                "created_at": "2025-11-14T11:14:45.581Z"
                              }
                            ],
                            "count": 1
                          },
                          "recurring_job": {
                            "latest_transaction": {
                              "recurring_job_uid": "aafadba5-0b4f-4ee5-b2b4-a97b84b01e3c",
                              "job_title": "COnsumption",
                              "repeat_frequency": "DAILY",
                              "repeat_every": 1,
                              "job_start": "2026-03-26T11:00:00.000Z",
                              "job_end": "2026-04-01T11:00:00.000Z",
                              "job_count": 3,
                              "job_category": {
                                "category_color": "#27ae60",
                                "category_name": "Proper Category",
                                "category_uid": "a02b1e10-f8ed-11eb-9024-55104a609d25"
                              },
                              "created_at": "2026-03-27T07:26:22.044Z"
                            },
                            "recent_transactions": [
                              {
                                "recurring_job_uid": "aafadba5-0b4f-4ee5-b2b4-a97b84b01e3c",
                                "job_title": "COnsumption",
                                "repeat_frequency": "DAILY",
                                "repeat_every": 1,
                                "job_start": "2026-03-26T11:00:00.000Z",
                                "job_end": "2026-04-01T11:00:00.000Z",
                                "job_count": 3,
                                "job_category": {
                                  "category_color": "#27ae60",
                                  "category_name": "Proper Category",
                                  "category_uid": "a02b1e10-f8ed-11eb-9024-55104a609d25"
                                },
                                "created_at": "2026-03-27T07:26:22.044Z"
                              },
                              {
                                "recurring_job_uid": "20eecf03-ec32-4651-a813-bbfdc39d059f",
                                "job_title": "COnsumption",
                                "repeat_frequency": "DAILY",
                                "repeat_every": 1,
                                "job_start": "2026-03-26T11:00:00.000Z",
                                "job_end": "2026-04-01T11:00:00.000Z",
                                "job_count": 7,
                                "job_category": {
                                  "category_color": "#27ae60",
                                  "category_name": "Proper Category",
                                  "category_uid": "a02b1e10-f8ed-11eb-9024-55104a609d25"
                                },
                                "created_at": "2026-03-27T05:30:23.257Z"
                              },
                              {
                                "recurring_job_uid": "ad8ffa0b-448a-47a3-bdff-c5a9cdafebb1",
                                "job_title": "COnsumption",
                                "repeat_frequency": "DAILY",
                                "repeat_every": 1,
                                "job_start": "2026-03-26T11:00:00.000Z",
                                "job_end": "2026-04-01T11:00:00.000Z",
                                "job_count": 7,
                                "job_category": {
                                  "category_color": "#27ae60",
                                  "category_name": "Proper Category",
                                  "category_uid": "a02b1e10-f8ed-11eb-9024-55104a609d25"
                                },
                                "created_at": "2026-03-26T16:17:40.711Z"
                              }
                            ],
                            "count": 17
                          },
                          "activity": {
                            "latest_transaction": {
                              "activity_type": "UPDATE",
                              "activity_action": "CUSTOMER",
                              "activity_message": "has sent SMS to 11234567890 for customer Another tinge",
                              "activity_module": "CUSTOMER",
                              "created_at": "2026-03-20T10:53:41.000Z",
                              "user": {
                                "first_name": "Test",
                                "last_name": "User",
                                "email": "testuser@gmail.com",
                                "user_uid": "3414331d-3c69-4cbc-bd51-c00309be76cd",
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                              }
                            },
                            "recent_transactions": [
                              {
                                "activity_type": "UPDATE",
                                "activity_action": "CUSTOMER",
                                "activity_message": "has sent SMS to 11234567890 for customer Another tinge",
                                "activity_module": "CUSTOMER",
                                "created_at": "2026-03-20T10:53:41.000Z",
                                "user": {
                                  "first_name": "Test",
                                  "last_name": "User ",
                                  "email": "testuser@gmail.com",
                                  "user_uid": "3414331d-3c69-4cbc-bd51-c00309be76cd",
                                  "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                                }
                              }
                            ],
                            "count": 1
                          }
                        },
                        "communication": {
                          "last_email_at": "2026-04-01T10:58:00.000Z",
                          "last_sms_at": "2026-04-01T10:45:00.000Z"
                        },
                        "customer_cards": {
                          "count": 0,
                          "cards": []
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
            "name": "customer_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "query",
            "name": "modules",
            "schema": {
              "type": "string",
              "enum": [
                "property",
                "request",
                "project",
                "estimate",
                "asset",
                "invoice",
                "payment",
                "service_contract",
                "recurring_job",
                "job"
              ]
            }
          }
        ],
        "operationId": "get_customers-customer-uid-summary"
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