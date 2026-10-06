---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Asset Summary

Returns a cross-module digest for an asset — the latest and 3 most recent records (plus counts) from Job, Invoice, Estimate, Service Contract, Project, Request, and Activity, scoped by the `modules` query param.

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
    "/assets/{asset_uid}/summary": {
      "get": {
        "description": "Returns a cross-module digest for an asset — the latest and 3 most recent records (plus counts) from Job, Invoice, Estimate, Service Contract, Project, Request, and Activity, scoped by the `modules` query param.",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "transactions": {
                          "type": "object",
                          "description": "One key per requested module (see the `modules` query param).",
                          "properties": {
                            "job": {
                              "type": "object",
                              "properties": {
                                "latest_transaction": {
                                  "type": "object",
                                  "nullable": true
                                },
                                "recent_transactions": {
                                  "type": "array",
                                  "items": {
                                    "type": "object"
                                  },
                                  "description": "Most recent 3 records."
                                },
                                "count": {
                                  "type": "integer"
                                }
                              }
                            },
                            "invoice": {
                              "type": "object",
                              "properties": {
                                "latest_transaction": {
                                  "type": "object",
                                  "nullable": true
                                },
                                "recent_transactions": {
                                  "type": "array",
                                  "items": {
                                    "type": "object"
                                  },
                                  "description": "Most recent 3 records."
                                },
                                "count": {
                                  "type": "integer"
                                }
                              }
                            },
                            "estimate": {
                              "type": "object",
                              "properties": {
                                "latest_transaction": {
                                  "type": "object",
                                  "nullable": true
                                },
                                "recent_transactions": {
                                  "type": "array",
                                  "items": {
                                    "type": "object"
                                  },
                                  "description": "Most recent 3 records."
                                },
                                "count": {
                                  "type": "integer"
                                }
                              }
                            },
                            "service_contract": {
                              "type": "object",
                              "properties": {
                                "latest_transaction": {
                                  "type": "object",
                                  "nullable": true
                                },
                                "recent_transactions": {
                                  "type": "array",
                                  "items": {
                                    "type": "object"
                                  },
                                  "description": "Most recent 3 records."
                                },
                                "count": {
                                  "type": "integer"
                                }
                              }
                            },
                            "project": {
                              "type": "object",
                              "properties": {
                                "latest_transaction": {
                                  "type": "object",
                                  "nullable": true
                                },
                                "recent_transactions": {
                                  "type": "array",
                                  "items": {
                                    "type": "object"
                                  },
                                  "description": "Most recent 3 records."
                                },
                                "count": {
                                  "type": "integer"
                                }
                              }
                            },
                            "request": {
                              "type": "object",
                              "properties": {
                                "latest_transaction": {
                                  "type": "object",
                                  "nullable": true
                                },
                                "recent_transactions": {
                                  "type": "array",
                                  "items": {
                                    "type": "object"
                                  },
                                  "description": "Most recent 3 records."
                                },
                                "count": {
                                  "type": "integer"
                                }
                              }
                            },
                            "activity": {
                              "type": "object",
                              "properties": {
                                "latest_transaction": {
                                  "type": "object",
                                  "nullable": true
                                },
                                "recent_transactions": {
                                  "type": "array",
                                  "items": {
                                    "type": "object"
                                  },
                                  "description": "Most recent 3 records."
                                },
                                "count": {
                                  "type": "integer"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "message": "Asset summary fetched successfully",
                      "data": {
                        "transactions": {
                          "invoice": {
                            "latest_transaction": null,
                            "recent_transactions": [],
                            "count": 0
                          },
                          "estimate": {
                            "latest_transaction": {
                              "estimate_uid": "3ab76093-86ed-4cbd-983a-453860c6afb8",
                              "estimate_no": "1000014195",
                              "estimate_date": "2026-03-05T18:30:00.000Z",
                              "estimate_status": "DRAFT",
                              "expiry_date": "2026-03-07T18:29:00.000Z",
                              "is_proposal": false,
                              "total": 54050.734
                            },
                            "recent_transactions": [
                              {
                                "estimate_uid": "3ab76093-86ed-4cbd-983a-453860c6afb8",
                                "estimate_no": "1000014195",
                                "estimate_date": "2026-03-05T18:30:00.000Z",
                                "estimate_status": "DRAFT",
                                "expiry_date": "2026-03-07T18:29:00.000Z",
                                "is_proposal": false,
                                "total": 54050.734
                              },
                              {
                                "estimate_uid": "74c8cc15-97ef-42e2-a82a-25f6538a1a47",
                                "estimate_no": "1000014149",
                                "estimate_date": "2026-03-05T13:00:00.000Z",
                                "estimate_status": "ARCHIVED",
                                "expiry_date": "2026-03-07T12:59:00.000Z",
                                "is_proposal": false,
                                "total": 54050.734
                              },
                              {
                                "estimate_uid": "068718f5-9bdd-4199-ad5d-cca8618aab5c",
                                "estimate_no": "1000014148",
                                "estimate_date": "2026-03-05T13:00:00.000Z",
                                "estimate_status": "ARCHIVED",
                                "expiry_date": "2026-03-07T12:59:00.000Z",
                                "is_proposal": false,
                                "total": 54050.734
                              }
                            ],
                            "count": 6
                          },
                          "activity": {
                            "latest_transaction": {
                              "activity_type": "UPDATE",
                              "activity_action": "ASSET",
                              "activity_message": "updated Status of Asset Zync Asset with all details from READY TO INSTALL to INSTALLED",
                              "activity_module": "ASSET",
                              "created_at": "2025-12-30T11:44:58.000Z",
                              "user": {
                                "first_name": "Raghav",
                                "last_name": "Gurumani",
                                "email": "raghav@zuper.co",
                                "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/81c656eb-56e4-437c-8c28-5cbeff5c6d6a.jpeg"
                              }
                            },
                            "recent_transactions": [
                              {
                                "activity_type": "UPDATE",
                                "activity_action": "ASSET",
                                "activity_message": "updated Status of Asset Zync Asset with all details from READY TO INSTALL to INSTALLED",
                                "activity_module": "ASSET",
                                "created_at": "2025-12-30T11:44:58.000Z",
                                "user": {
                                  "first_name": "Raghav",
                                  "last_name": "Gurumani",
                                  "email": "raghav@zuper.co",
                                  "user_uid": "6c513b60-ff7c-11e7-b3a8-29b417a4f3fa",
                                  "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/81c656eb-56e4-437c-8c28-5cbeff5c6d6a.jpeg"
                                }
                              },
                              {
                                "activity_type": "CREATE",
                                "activity_action": "GENERIC_NOTE",
                                "activity_message": "added a new note",
                                "activity_module": "ASSET",
                                "created_at": "2025-12-04T11:55:04.000Z",
                                "user": {
                                  "first_name": "Heidi",
                                  "last_name": "S",
                                  "email": "manidevi.fe@zuper.co",
                                  "user_uid": "c9ce4b44-8961-44fd-8c7d-14edb0273141",
                                  "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/9be62393-944e-4e9e-acb7-512f6edeafd3.jpg"
                                }
                              },
                              {
                                "activity_type": "CREATE",
                                "activity_action": "GENERIC_NOTE",
                                "activity_message": "added a new note",
                                "activity_module": "ASSET",
                                "created_at": "2025-11-27T15:40:21.000Z",
                                "user": {
                                  "first_name": "Paxton",
                                  "last_name": "Hall-Yoshida",
                                  "email": "paxton.fe@gmail.com",
                                  "user_uid": "e397b171-a945-4a21-a3ec-3aeaabe37ef7",
                                  "profile_picture": null
                                }
                              }
                            ],
                            "count": 7
                          },
                          "job": {
                            "latest_transaction": {
                              "job_uid": "42a51a10-136f-11f1-866e-cb8ea3a64e54",
                              "prefix": "pre",
                              "work_order_number": "pre103165",
                              "job_title": "Job for PPM - 496",
                              "scheduled_start_time": "2026-02-28T01:30:00.000Z",
                              "scheduled_end_time": "2026-03-02T11:50:00.000Z",
                              "current_job_status": {
                                "status_uid": "54fc23a4-17a3-4987-ae00-86c1ffced383",
                                "status_name": "All checklist",
                                "status_type": "NEW",
                                "status_color": "#9b59b6"
                              }
                            },
                            "recent_transactions": [
                              {
                                "job_uid": "42a51a10-136f-11f1-866e-cb8ea3a64e54",
                                "prefix": "pre",
                                "work_order_number": "pre103165",
                                "job_title": "Job for PPM - 496",
                                "scheduled_start_time": "2026-02-28T01:30:00.000Z",
                                "scheduled_end_time": "2026-03-02T11:50:00.000Z",
                                "current_job_status": {
                                  "status_uid": "54fc23a4-17a3-4987-ae00-86c1ffced383",
                                  "status_name": "All checklist",
                                  "status_type": "NEW",
                                  "status_color": "#9b59b6"
                                }
                              },
                              {
                                "job_uid": "9f0f5f20-fd6e-11f0-bec6-2700a8fd914c",
                                "prefix": "pre",
                                "work_order_number": "pre102964",
                                "job_title": "Job for PPM - 496",
                                "scheduled_start_time": "2026-01-31T01:30:00.000Z",
                                "scheduled_end_time": "2026-02-02T11:50:00.000Z",
                                "current_job_status": {
                                  "status_uid": "54fc23a4-17a3-4987-ae00-86c1ffced383",
                                  "status_name": "All checklist",
                                  "status_type": "NEW",
                                  "status_color": "#9b59b6"
                                }
                              },
                              {
                                "job_uid": "7c37f760-e512-11f0-a9e2-fb517e36ab10",
                                "prefix": "pre",
                                "work_order_number": "pre102657",
                                "job_title": "Job for PPM - 496",
                                "scheduled_start_time": "2026-01-02T01:30:00.000Z",
                                "scheduled_end_time": "2026-01-04T11:50:00.000Z",
                                "current_job_status": {
                                  "status_uid": "54fc23a4-17a3-4987-ae00-86c1ffced383",
                                  "status_name": "All checklist",
                                  "status_type": "NEW",
                                  "status_color": "#9b59b6"
                                }
                              }
                            ],
                            "count": 41
                          },
                          "service_contract": {
                            "latest_transaction": {
                              "contract_uid": "b3bb882b-92f9-43e3-abf1-6f989c21d23c",
                              "contract_name": "Zync - Contract with all fields",
                              "prefix": "1456",
                              "contract_number": 6123,
                              "start_date": "2025-11-21T18:30:00.000Z",
                              "end_date": "2030-12-31T18:29:59.000Z",
                              "approval_status": "CUSTOMER_APPROVED",
                              "created_at": "2025-11-22T09:19:18.514Z"
                            },
                            "recent_transactions": [
                              {
                                "contract_uid": "b3bb882b-92f9-43e3-abf1-6f989c21d23c",
                                "contract_name": "Zync - Contract with all fields",
                                "prefix": "1456",
                                "contract_number": 6123,
                                "start_date": "2025-11-21T18:30:00.000Z",
                                "end_date": "2030-12-31T18:29:59.000Z",
                                "approval_status": "CUSTOMER_APPROVED",
                                "created_at": "2025-11-22T09:19:18.514Z"
                              }
                            ],
                            "count": 1
                          },
                          "project": {
                            "latest_transaction": {
                              "project_uid": "a5e1085c-a530-42a2-a0c1-5746b093de05",
                              "project_title": "vALIDATION sUMMARY",
                              "prefix": "",
                              "project_no": "865",
                              "current_project_status": {
                                "project_status_uid": "8a43a4a0-dd38-11ee-8946-ab7a896d5514",
                                "project_status_name": "New",
                                "project_status_type": "NEW",
                                "project_status_color": "#151B54"
                              }
                            },
                            "recent_transactions": [
                              {
                                "project_uid": "a5e1085c-a530-42a2-a0c1-5746b093de05",
                                "project_title": "vALIDATION sUMMARY",
                                "prefix": "",
                                "project_no": "865",
                                "current_project_status": {
                                  "project_status_uid": "8a43a4a0-dd38-11ee-8946-ab7a896d5514",
                                  "project_status_name": "New",
                                  "project_status_type": "NEW",
                                  "project_status_color": "#151B54"
                                }
                              }
                            ],
                            "count": 1
                          },
                          "request": {
                            "latest_transaction": {
                              "request_uid": "411571be-42ed-4c63-9cd3-4e3eaec5a8c4",
                              "request_title": "Zync request test",
                              "request_id": 713,
                              "request_priority": "HIGH",
                              "request_due_date": "2025-12-31T18:29:59.000Z",
                              "request_status": {
                                "status_type": "OPEN",
                                "status_uid": "26d89664-72c0-4280-b9fb-e9f4b38f8143",
                                "status_name": "New Request",
                                "status_color": "#3498db"
                              },
                              "created_at": "2025-11-22T10:13:34.068Z"
                            },
                            "recent_transactions": [
                              {
                                "request_uid": "411571be-42ed-4c63-9cd3-4e3eaec5a8c4",
                                "request_title": "Zync request test",
                                "request_id": 713,
                                "request_priority": "HIGH",
                                "request_due_date": "2025-12-31T18:29:59.000Z",
                                "request_status": {
                                  "status_type": "OPEN",
                                  "status_uid": "26d89664-72c0-4280-b9fb-e9f4b38f8143",
                                  "status_name": "New Request",
                                  "status_color": "#3498db"
                                },
                                "created_at": "2025-11-22T10:13:34.068Z"
                              }
                            ],
                            "count": 1
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
            "name": "asset_uid",
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
                "request",
                "project",
                "estimate",
                "invoice",
                "service_contract",
                "job",
                "activity"
              ]
            }
          }
        ],
        "operationId": "get_assets-asset-uid-summary",
        "summary": "Asset Summary"
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