---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Status & Checklist

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
    "/jobs/{job_uid}/status": {
      "put": {
        "summary": "Update Status & Checklist",
        "description": "",
        "operationId": "update-job-status",
        "parameters": [
          {
            "name": "job_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "job_uid",
                  "status_uid"
                ],
                "properties": {
                  "job_uid": {
                    "type": "string",
                    "description": "Job UID"
                  },
                  "status_uid": {
                    "type": "string"
                  },
                  "status_name": {
                    "type": "string"
                  },
                  "remarks": {
                    "type": "string"
                  },
                  "remarks_free_text": {
                    "type": "string"
                  },
                  "customer_signature": {
                    "type": "string"
                  },
                  "customer_signature_name": {
                    "type": "string"
                  },
                  "facial_auth_picture": {
                    "type": "string"
                  },
                  "facial_auth_status": {
                    "type": "string"
                  },
                  "geo_cordinates": {
                    "type": "string"
                  },
                  "eta": {
                    "type": "string"
                  },
                  "feedback": {
                    "type": "object",
                    "properties": {
                      "rating": {
                        "type": "string",
                        "enum": [
                          "HAPPY",
                          "NEUTRAL",
                          "UNHAPPY",
                          "VERY_HAPPY",
                          "VERY_UNHAPPY"
                        ]
                      },
                      "message": {
                        "type": "string"
                      }
                    }
                  },
                  "checklist": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "question": {
                          "type": "string"
                        },
                        "answer": {
                          "type": "string"
                        },
                        "hide_to_fe": {
                          "type": "boolean",
                          "default": false
                        },
                        "type": {
                          "type": "string",
                          "enum": [
                            "SINGLE_LINE",
                            "MULTI_LINE",
                            "SINGLE_ITEM",
                            "MULTI_ITEM",
                            "RADIO",
                            "NUMBER",
                            "DATE",
                            "TIME",
                            "BARCODE",
                            "IMAGE",
                            "MULTI_IMAGE",
                            "DATETIME",
                            "LOOKUP",
                            "SIGNATURE",
                            "HEADER"
                          ]
                        },
                        "module": {
                          "type": "string",
                          "enum": [
                            "JOB",
                            "CUSTOMER",
                            "EMPLOYEE",
                            "ESTIMATE",
                            "INVOICE",
                            "PRODUCT",
                            "JOB_PRODUCT",
                            "PURCHASE_ORDER",
                            "SERVICE_CONTRACT",
                            "ASSET",
                            "PROPERTY",
                            "ORGANIZATION"
                          ]
                        },
                        "meta_data": {
                          "type": "string",
                          "description": "{}",
                          "format": "json"
                        }
                      },
                      "required": [
                        "hide_to_fe"
                      ],
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "job_uid": "0defb660-a796-11ed-ba8f-f1ee7595122c",
                    "status_uid": "50524d38-70ad-43f8-905b-19cc6b30e7c6",
                    "status_name": "New Request",
                    "remarks": "Customer Unavailable",
                    "remarks_free_text": "Test",
                    "customer_signature": "",
                    "customer_signature_name": "",
                    "facial_auth_picture": "",
                    "facial_auth_status": "",
                    "geo_cordinates": "",
                    "eta": "",
                    "feedback": {
                      "rating": "HAPPY",
                      "message": "Zuper service"
                    },
                    "checklist": [
                      {
                        "question": "Do you have a insurance policy",
                        "answer": "Yes",
                        "type": "SINGLE_ITEM",
                        "meta_data": {
                          "description": "Select an option"
                        },
                        "hide_to_fe": false
                      },
                      {
                        "question": "Text Input",
                        "answer": "",
                        "type": "SINGLE_LINE",
                        "meta_data": {
                          "description": "description"
                        },
                        "hide_to_fe": false
                      }
                    ]
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
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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
                    "value": "{\n      message: \"Invalid Created at Timestamp\",\n      title: \"Missing Created at\",\n      type: \"error\"\n}"
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
                    "value": "{\n      message: \"Job Status Not found for given UID\",\n\t\t\ttitle: \"Job Status Not found\",\n      type: \"error\"\n}"
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n      message: \"Error in updating Job Status\",\n      title: \"Error in updating Job Status\",\n\t\t\tdata: \"\",\n      type: \"error\"\n}"
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