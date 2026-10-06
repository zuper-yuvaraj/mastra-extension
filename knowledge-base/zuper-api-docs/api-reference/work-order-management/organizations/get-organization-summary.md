---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# /organization/{organization_uid}/summary

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
    "/organization/{organization_uid}/summary": {
      "get": {
        "description": "",
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
                      "message": "Organization summary fetched successfully",
                      "data": {
                        "transactions": {
                          "job": {
                            "latest_transaction": {
                              "job_uid": "6b471113-4f47-4f3b-bccd-6209bd46f44e",
                              "prefix": "pre",
                              "work_order_number": "pre94961",
                              "job_title": "WF Job",
                              "scheduled_start_time": "2025-05-28T17:47:34.000Z",
                              "scheduled_end_time": "2025-05-30T03:54:34.000Z",
                              "current_job_status": {
                                "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                                "status_name": "New Request",
                                "status_type": "NEW",
                                "status_color": "#02B875"
                              },
                              "due_date": "2025-05-28T17:47:34.054Z"
                            },
                            "recent_transactions": [
                              {
                                "job_uid": "6b471113-4f47-4f3b-bccd-6209bd46f44e",
                                "prefix": "pre",
                                "work_order_number": "pre94961",
                                "job_title": "WF Job",
                                "scheduled_start_time": "2025-05-28T17:47:34.000Z",
                                "scheduled_end_time": "2025-05-30T03:54:34.000Z",
                                "current_job_status": {
                                  "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                                  "status_name": "New Request",
                                  "status_type": "NEW",
                                  "status_color": "#02B875"
                                },
                                "due_date": "2025-05-28T17:47:34.054Z"
                              },
                              {
                                "job_uid": "9de8aff4-feee-4f4a-8119-d356a796735f",
                                "prefix": "",
                                "work_order_number": "89515",
                                "job_title": "WF Job",
                                "scheduled_start_time": "2025-04-11T10:37:26.000Z",
                                "scheduled_end_time": "2025-04-12T20:44:26.000Z",
                                "current_job_status": {
                                  "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                                  "status_name": "New Request",
                                  "status_type": "NEW",
                                  "status_color": "#02B875"
                                },
                                "due_date": "2025-04-11T10:37:26.880Z"
                              },
                              {
                                "job_uid": "98a51399-1dbc-49b5-86e6-93870b70b4b3",
                                "prefix": "",
                                "work_order_number": "88306",
                                "job_title": "WF Job",
                                "scheduled_start_time": "2025-04-09T05:39:41.000Z",
                                "scheduled_end_time": "2025-04-10T15:46:41.000Z",
                                "current_job_status": {
                                  "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                                  "status_name": "New Request",
                                  "status_type": "NEW",
                                  "status_color": "#02B875"
                                },
                                "due_date": "2025-04-09T05:39:41.516Z"
                              }
                            ],
                            "count": 118
                          },
                          "property": {
                            "latest_transaction": {
                              "property_uid": "a3ec53f0-f27e-11ef-9e0f-69d6cc01aa35",
                              "property_name": "Casagrand Cloud 9",
                              "property_address": {
                                "city": "nkl",
                                "state": "Tamil Nadu",
                                "street": "Casagrand Cloud9, TNHB, Sholinganallur",
                                "country": "India",
                                "landmark": "",
                                "zip_code": "600119",
                                "geo_cordinates": [
                                  12.8941272,
                                  80.2359687
                                ],
                                "point_coordinates": {
                                  "type": "Point",
                                  "coordinates": [
                                    80.2359687,
                                    12.8941272
                                  ]
                                },
                                "_id": "67bc417e6bbb7ca242396fe0"
                              },
                              "created_at": "2025-02-24T07:12:00.184Z"
                            },
                            "recent_transactions": [
                              {
                                "property_uid": "a3ec53f0-f27e-11ef-9e0f-69d6cc01aa35",
                                "property_name": "Casagrand Cloud 9",
                                "property_address": {
                                  "city": "nkl",
                                  "state": "Tamil Nadu",
                                  "street": "Casagrand Cloud9, TNHB, Sholinganallur",
                                  "country": "India",
                                  "landmark": "",
                                  "zip_code": "600119",
                                  "geo_cordinates": [
                                    12.8941272,
                                    80.2359687
                                  ],
                                  "point_coordinates": {
                                    "type": "Point",
                                    "coordinates": [
                                      80.2359687,
                                      12.8941272
                                    ]
                                  },
                                  "_id": "67bc417e6bbb7ca242396fe0"
                                },
                                "created_at": "2025-02-24T07:12:00.184Z"
                              },
                              {
                                "property_uid": "62702510-f03e-11ef-939e-75045755e57c",
                                "property_name": "FR Validation",
                                "property_address": {
                                  "city": "nkl",
                                  "state": "Tamil Nadu",
                                  "street": "Chrompet Railway Station, Railway, Radha Nagar, Chromepet",
                                  "country": "India",
                                  "landmark": "",
                                  "zip_code": "600044",
                                  "geo_cordinates": [
                                    12.9514922,
                                    80.1408089
                                  ],
                                  "point_coordinates": {
                                    "type": "Point",
                                    "coordinates": [
                                      80.1408089,
                                      12.9514922
                                    ]
                                  },
                                  "_id": "67bc41956bbb7ca242397038"
                                },
                                "created_at": "2025-02-21T10:27:00.200Z"
                              },
                              {
                                "property_uid": "99cf0d50-ee81-11ef-939e-75045755e57c",
                                "property_name": "Org and Customer empty",
                                "property_address": {
                                  "city": "nkl",
                                  "state": "Tamil Nadu",
                                  "street": "Chennai International Airport (MAA), Airport Road, Meenambakkam",
                                  "country": "India",
                                  "landmark": "",
                                  "zip_code": "600027",
                                  "geo_cordinates": [
                                    12.9939595,
                                    80.1706653
                                  ],
                                  "point_coordinates": {
                                    "type": "Point",
                                    "coordinates": [
                                      80.1706653,
                                      12.9939595
                                    ]
                                  },
                                  "_id": "67b717c70e8f87e04264643d"
                                },
                                "created_at": "2025-02-19T05:23:07.050Z"
                              }
                            ],
                            "count": 3
                          },
                          "invoice": {
                            "latest_transaction": {
                              "invoice_uid": "35d7cbde-ff31-423f-ac60-61f958e72fd9",
                              "invoice_title": "Lavanya G",
                              "invoice_no": "200007494",
                              "invoice_date": "2025-06-29T18:30:00.000Z",
                              "due_date": "2025-09-27T18:29:00.000Z",
                              "invoice_status": "PAID",
                              "total": 197.046
                            },
                            "recent_transactions": [
                              {
                                "invoice_uid": "35d7cbde-ff31-423f-ac60-61f958e72fd9",
                                "invoice_title": "Lavanya G",
                                "invoice_no": "200007494",
                                "invoice_date": "2025-06-29T18:30:00.000Z",
                                "due_date": "2025-09-27T18:29:00.000Z",
                                "invoice_status": "PAID",
                                "total": 197.046
                              },
                              {
                                "invoice_uid": "187a1f0b-ae41-48a0-bfc7-cf20b16b22d4",
                                "invoice_title": "Lavanya G",
                                "invoice_no": "200007449",
                                "invoice_date": "2025-06-29T18:30:00.000Z",
                                "due_date": "2025-09-27T18:29:00.000Z",
                                "invoice_status": "PAID",
                                "total": 197.046
                              },
                              {
                                "invoice_uid": "6364f89b-5a0c-4ea3-9d17-d6f5f4556823",
                                "invoice_title": "Lavanya G",
                                "invoice_no": "7441",
                                "invoice_date": "2025-06-29T18:30:00.000Z",
                                "due_date": "2025-08-29T18:29:00.000Z",
                                "invoice_status": "PAID",
                                "total": 710
                              }
                            ],
                            "count": 83
                          },
                          "estimate": {
                            "latest_transaction": {
                              "estimate_uid": "6a8d2800-5dba-11ee-bf89-7dff9a634b35",
                              "estimate_title": "Testing Proposal",
                              "proposal_title": "Testing Proposal",
                              "estimate_no": "ACQ_Showroom_Quotes5067",
                              "estimate_date": "2025-07-31T00:00:00.000Z",
                              "estimate_status": "REQUEST_CHANGE",
                              "expiry_date": "2025-08-01T00:00:00.000Z",
                              "is_proposal": true,
                              "total": 3957.88
                            },
                            "recent_transactions": [
                              {
                                "estimate_uid": "6a8d2800-5dba-11ee-bf89-7dff9a634b35",
                                "estimate_title": "Testing Proposal",
                                "proposal_title": "Testing Proposal",
                                "estimate_no": "ACQ_Showroom_Quotes5067",
                                "estimate_date": "2025-07-31T00:00:00.000Z",
                                "estimate_status": "REQUEST_CHANGE",
                                "expiry_date": "2025-08-01T00:00:00.000Z",
                                "is_proposal": true,
                                "total": 3957.88
                              },
                              {
                                "estimate_uid": "0a97ec4c-c5b6-481f-8901-e2f5bc70e86c",
                                "estimate_no": "100009081",
                                "estimate_date": "2025-03-26T18:30:00.000Z",
                                "estimate_status": "APPROVED",
                                "expiry_date": "2025-04-10T18:29:00.000Z",
                                "is_proposal": false,
                                "total": 1600
                              },
                              {
                                "estimate_uid": "8e61a9e1-95c7-40fa-84ed-da0e82493437",
                                "estimate_no": "100009080",
                                "estimate_date": "2025-03-26T18:30:00.000Z",
                                "estimate_status": "APPROVED",
                                "expiry_date": "2025-04-10T18:29:00.000Z",
                                "is_proposal": false,
                                "total": 1600
                              }
                            ],
                            "count": 214
                          },
                          "service_contract": {
                            "latest_transaction": {
                              "contract_uid": "e0d2bf4a-a8a9-4f07-8b69-50115c6dd9c2",
                              "contract_name": "tetsing_contract_customfields",
                              "prefix": "CO_0001",
                              "contract_number": 1062,
                              "start_date": "2024-07-24T18:30:00.000Z",
                              "end_date": "2025-07-24T18:29:59.000Z",
                              "approval_status": "APPROVED",
                              "created_at": "2024-07-26T07:01:49.952Z"
                            },
                            "recent_transactions": [
                              {
                                "contract_uid": "e0d2bf4a-a8a9-4f07-8b69-50115c6dd9c2",
                                "contract_name": "tetsing_contract_customfields",
                                "prefix": "CO_0001",
                                "contract_number": 1062,
                                "start_date": "2024-07-24T18:30:00.000Z",
                                "end_date": "2025-07-24T18:29:59.000Z",
                                "approval_status": "APPROVED",
                                "created_at": "2024-07-26T07:01:49.952Z"
                              },
                              {
                                "contract_uid": "665185f6-4caa-4ca4-a5f2-bc66fba9b9dd",
                                "contract_name": "tetsing_contract_customfields",
                                "prefix": "CO_0001",
                                "contract_number": 1061,
                                "start_date": "2024-07-24T18:30:00.000Z",
                                "end_date": "2025-07-24T18:29:59.000Z",
                                "approval_status": "AWAIT_APPROVAL",
                                "created_at": "2024-07-26T06:57:50.320Z"
                              },
                              {
                                "contract_uid": "9aa2c709-e54d-439b-8de3-dd5520751e81",
                                "contract_name": "test_customerportal",
                                "prefix": "123",
                                "contract_number": 1023,
                                "start_date": "2024-06-26T18:30:00.000Z",
                                "end_date": "2024-09-26T18:29:59.000Z",
                                "approval_status": "APPROVED",
                                "created_at": "2024-06-26T12:36:09.168Z"
                              }
                            ],
                            "count": 36
                          },
                          "activity": {
                            "latest_transaction": {
                              "activity_type": "UPDATE",
                              "activity_action": "ORGANIZATION",
                              "activity_message": "updated Organization Ranson Electric Vehicle Company",
                              "activity_module": "ORGANIZATION",
                              "created_at": "2025-05-27T17:47:45.000Z",
                              "user": {
                                "first_name": "Deva",
                                "last_name": "Admin",
                                "email": "admin@gmail.com",
                                "user_uid": "ce08910b-7e8e-4971-ae39-038aebd5d9cb",
                                "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                              }
                            },
                            "recent_transactions": [
                              {
                                "activity_type": "UPDATE",
                                "activity_action": "ORGANIZATION",
                                "activity_message": "updated Organization Ranson Electric Vehicle Company",
                                "activity_module": "ORGANIZATION",
                                "created_at": "2025-05-27T17:47:45.000Z",
                                "user": {
                                  "first_name": "Deva",
                                  "last_name": "Admin",
                                  "email": "admin@gmail.com",
                                  "user_uid": "ce08910b-7e8e-4971-ae39-038aebd5d9cb",
                                  "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                                }
                              },
                              {
                                "activity_type": "UPDATE",
                                "activity_action": "ORGANIZATION",
                                "activity_message": "updated Organization Ranson Electric Vehicle Company",
                                "activity_module": "ORGANIZATION",
                                "created_at": "2025-01-02T11:53:38.000Z",
                                "user": {
                                  "first_name": "Admin",
                                  "last_name": "B",
                                  "email": "admin@gmail.com",
                                  "user_uid": "06aaed4d-80de-41f2-a977-c32d67cce739",
                                  "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                                }
                              },
                              {
                                "activity_type": "UPDATE",
                                "activity_action": "ORGANIZATION",
                                "activity_message": "updated Organization Ranson Electric Vehicle Company",
                                "activity_module": "ORGANIZATION",
                                "created_at": "2024-05-06T11:05:46.000Z",
                                "user": {
                                  "first_name": "Admin",
                                  "last_name": "SS",
                                  "email": "admin@gmail.com",
                                  "user_uid": "a1cf8f90-f573-4d94-b933-b125396c866f",
                                  "profile_picture": "https://s3.ap-south-1.amazonaws.com/prod.app.zuperpro/assets/profile_picture.jpg"
                                }
                              }
                            ],
                            "count": 3
                          },
                          "asset": {
                            "latest_transaction": {
                              "asset_uid": "f8cca3a3-ff4d-4bfc-8d8a-f91c8b6a422f",
                              "asset_name": "custom_field test",
                              "asset_code": "2345",
                              "asset_status": "READY_TO_INSTALL",
                              "created_at": "2024-07-26T07:03:59.641Z"
                            },
                            "recent_transactions": [
                              {
                                "asset_uid": "f8cca3a3-ff4d-4bfc-8d8a-f91c8b6a422f",
                                "asset_name": "custom_field test",
                                "asset_code": "2345",
                                "asset_status": "READY_TO_INSTALL",
                                "created_at": "2024-07-26T07:03:59.641Z"
                              },
                              {
                                "asset_uid": "c9bf9d11-677c-4be2-970e-798db4dc9b0a",
                                "asset_name": "Genrator",
                                "asset_code": "1234",
                                "asset_status": "OBSOLETE",
                                "created_at": "2024-07-26T06:55:47.139Z"
                              },
                              {
                                "asset_uid": "16655b74-b791-49c7-9d5f-7def189d3071",
                                "asset_name": "Genrator",
                                "asset_code": "1234",
                                "asset_status": "",
                                "created_at": "2024-07-26T06:54:14.008Z"
                              }
                            ],
                            "count": 34
                          },
                          "project": {
                            "latest_transaction": null,
                            "recent_transactions": [],
                            "count": 0
                          },
                          "request": {
                            "latest_transaction": {
                              "request_uid": "51be749e-abc6-4ea9-b99e-5d29d1fa39a9",
                              "request_title": "Display Service",
                              "request_id": 612,
                              "request_priority": "HIGH",
                              "request_due_date": null,
                              "request_status": {
                                "status_type": "OPEN",
                                "status_color": "",
                                "status_uid": "568a205e-8879-4cf4-b00a-84a5b9a32660",
                                "status_name": "Open",
                                "_id": "67b2fc0b9b3c4a3117f2750b",
                                "created_at": "2025-02-21T05:54:11.292Z"
                              },
                              "created_at": "2025-02-17T09:06:19.127Z"
                            },
                            "recent_transactions": [
                              {
                                "request_uid": "51be749e-abc6-4ea9-b99e-5d29d1fa39a9",
                                "request_title": "Display Service",
                                "request_id": 612,
                                "request_priority": "HIGH",
                                "request_due_date": null,
                                "request_status": {
                                  "status_type": "OPEN",
                                  "status_color": "",
                                  "status_uid": "568a205e-8879-4cf4-b00a-84a5b9a32660",
                                  "status_name": "Open",
                                  "_id": "67b2fc0b9b3c4a3117f2750b",
                                  "created_at": "2025-02-21T05:54:11.292Z"
                                },
                                "created_at": "2025-02-17T09:06:19.127Z"
                              },
                              {
                                "request_uid": "2286d13c-f62a-4ae6-b7e2-7d6f8c50eb56",
                                "request_title": "test",
                                "request_id": 611,
                                "request_priority": "HIGH",
                                "request_due_date": "2025-02-20T18:29:59.000Z",
                                "request_status": {
                                  "status_type": "OPEN",
                                  "status_uid": "568a205e-8879-4cf4-b00a-84a5b9a32660",
                                  "status_name": "Open",
                                  "status_color": "",
                                  "created_at": "2025-02-21T05:54:11.292Z"
                                },
                                "created_at": "2025-02-14T05:40:21.916Z"
                              },
                              {
                                "request_uid": "733e9d20-e7c8-4d40-9e97-8d5e6fa06117",
                                "request_title": "New Service Request",
                                "request_id": 609,
                                "request_priority": "HIGH",
                                "request_due_date": null,
                                "request_status": {
                                  "status_type": "OPEN",
                                  "status_color": "",
                                  "status_uid": "568a205e-8879-4cf4-b00a-84a5b9a32660",
                                  "status_name": "Open",
                                  "_id": "679b69cf57086843c3c56c51",
                                  "created_at": "2025-02-21T05:54:11.292Z"
                                },
                                "created_at": "2025-01-30T12:00:15.111Z"
                              }
                            ],
                            "count": 59
                          }
                        }
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {}
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
            "name": "organization_uid",
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
                "service_contract",
                "job",
                "activity"
              ]
            }
          }
        ],
        "operationId": "get_organization-organization-uid-summary"
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