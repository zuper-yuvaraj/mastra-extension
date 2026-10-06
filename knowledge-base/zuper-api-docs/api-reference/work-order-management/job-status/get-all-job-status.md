---
updatedAt: 2026-08-11T14:46:49.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get All Job Status

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
    "/jobs/status/{category_uid}": {
      "get": {
        "summary": "Get All Job Status",
        "description": "",
        "operationId": "get-all-job-status",
        "parameters": [
          {
            "name": "category_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"type\": \"success\",\n  \"data\": {\n    \"_id\": \"63bd113767d3c2d76e647e42\",\n    \"job_statuses\": [\n      {\n        \"status_uid\": \"b34f479c-2dcd-45fd-874d-9f8858566edf\",\n        \"status_name\": \"New\",\n        \"status_type\": \"NEW\",\n        \"status_color\": \"#02B875\",\n        \"require_customer_signature\": false,\n        \"require_preview\": false,\n        \"require_customer_feedback\": false,\n        \"require_facial_authentication\": false,\n        \"require_geo_fencing\": false,\n        \"parent_status\": [],\n        \"enabled_for_field_executive\": true,\n        \"enabled_for_manager\": true,\n        \"allow_remarks\": false,\n        \"capture_geo_cords\": false,\n        \"has_parent\": false,\n        \"remarks_values\": [],\n        \"_id\": \"63bd113767d3c2d76e647e43\",\n        \"checklist_view_type\": \"\",\n        \"prefill_checklist\": false\n      },\n      {\n        \"status_uid\": \"da2c107f-fa5c-492e-8658-49ea884fb3b0\",\n        \"status_name\": \"Scheduled\",\n        \"status_type\": \"SCHEDULED\",\n        \"status_color\": \"#1abc9c\",\n        \"require_customer_signature\": false,\n        \"require_preview\": false,\n        \"require_customer_feedback\": false,\n        \"require_facial_authentication\": false,\n        \"require_geo_fencing\": false,\n        \"parent_status\": [],\n        \"enabled_for_field_executive\": true,\n        \"enabled_for_manager\": true,\n        \"allow_remarks\": false,\n        \"capture_geo_cords\": false,\n        \"has_parent\": false,\n        \"remarks_values\": [],\n        \"_id\": \"63bd114267d3c2d76e647fdf\",\n        \"checklist_view_type\": \"\",\n        \"prefill_checklist\": false\n      },\n      {\n        \"status_uid\": \"1e0cf1bb-1ec9-41d0-83f3-b8dd6775e1b4\",\n        \"status_name\": \"On My Way\",\n        \"status_type\": \"ON_MY_WAY\",\n        \"status_color\": \"#3498db\",\n        \"require_customer_signature\": false,\n        \"require_preview\": false,\n        \"require_customer_feedback\": false,\n        \"require_facial_authentication\": false,\n        \"require_geo_fencing\": false,\n        \"parent_status\": [],\n        \"enabled_for_field_executive\": true,\n        \"enabled_for_manager\": true,\n        \"allow_remarks\": false,\n        \"capture_geo_cords\": false,\n        \"has_parent\": false,\n        \"remarks_values\": [],\n        \"_id\": \"63bd115567d3c2d76e648330\",\n        \"checklist_view_type\": \"\",\n        \"prefill_checklist\": false\n      },\n      {\n        \"status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n        \"status_name\": \"Install Asset\",\n        \"status_type\": \"OTHER\",\n        \"status_color\": \"#34495e\",\n        \"require_customer_signature\": false,\n        \"require_preview\": false,\n        \"require_customer_feedback\": false,\n        \"require_facial_authentication\": false,\n        \"require_geo_fencing\": false,\n        \"parent_status\": [],\n        \"enabled_for_field_executive\": true,\n        \"enabled_for_manager\": true,\n        \"allow_remarks\": false,\n        \"capture_geo_cords\": false,\n        \"has_parent\": false,\n        \"remarks_values\": [],\n        \"_id\": \"63bd116b67d3c2d76e64861a\",\n        \"checklist\": [\n          {\n            \"_id\": \"63bfe183da05c2e6b0c86bc9\",\n            \"job_status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n            \"field_name\": \"ASSET CODE\",\n            \"checklist_view_type\": \"SINGLE_PAGE\",\n            \"field_type\": \"SINGLE_LINE\",\n            \"field_description\": \"description\",\n            \"field_placeholder\": \"placeholder\",\n            \"field_options\": [],\n            \"min_value\": null,\n            \"max_value\": null,\n            \"regex_value\": \"\",\n            \"is_required\": true,\n            \"original_template\": {\n              \"id\": 0,\n              \"component\": \"textInput\",\n              \"editable\": true,\n              \"index\": 0,\n              \"label\": \"ASSET CODE\",\n              \"description\": \"description\",\n              \"placeholder\": \"placeholder\",\n              \"options\": [],\n              \"required\": true,\n              \"validation\": \"/.*/\",\n              \"hide_to_fe\": false,\n              \"is_dependent\": false,\n              \"dependent_on\": \"\",\n              \"dependent_options\": [],\n              \"hide_field\": false,\n              \"read_only\": false,\n              \"regex_value\": \"\",\n              \"min_value\": null,\n              \"max_value\": null,\n              \"default_option\": null,\n              \"group\": \"Default\",\n              \"dependents\": [],\n              \"checklist_view_type\": \"SINGLE_PAGE\"\n            },\n            \"is_dependent\": false,\n            \"dependent_on\": \"\",\n            \"dependent_options\": [],\n            \"prefill_checklist\": false,\n            \"default_option\": false,\n            \"is_deleted\": false\n          },\n          {\n            \"_id\": \"63bfe183da05c2e6b0c86bca\",\n            \"job_status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n            \"field_name\": \"ASSET NAME\",\n            \"checklist_view_type\": \"SINGLE_PAGE\",\n            \"field_type\": \"SINGLE_LINE\",\n            \"field_description\": \"description\",\n            \"field_placeholder\": \"placeholder\",\n            \"field_options\": [],\n            \"min_value\": null,\n            \"max_value\": null,\n            \"regex_value\": \"\",\n            \"is_required\": true,\n            \"original_template\": {\n              \"id\": 1,\n              \"component\": \"textInput\",\n              \"editable\": true,\n              \"index\": 1,\n              \"label\": \"ASSET NAME\",\n              \"description\": \"description\",\n              \"placeholder\": \"placeholder\",\n              \"options\": [],\n              \"required\": true,\n              \"validation\": \"/.*/\",\n              \"hide_to_fe\": false,\n              \"is_dependent\": false,\n              \"dependent_on\": \"\",\n              \"dependent_options\": [],\n              \"hide_field\": false,\n              \"read_only\": false,\n              \"regex_value\": \"\",\n              \"min_value\": null,\n              \"max_value\": null,\n              \"default_option\": null,\n              \"group\": \"Default\",\n              \"dependents\": [],\n              \"checklist_view_type\": \"SINGLE_PAGE\"\n            },\n            \"is_dependent\": false,\n            \"dependent_on\": \"\",\n            \"dependent_options\": [],\n            \"prefill_checklist\": false,\n            \"default_option\": false,\n            \"is_deleted\": false\n          },\n          {\n            \"_id\": \"63bfe183da05c2e6b0c86bcb\",\n            \"job_status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n            \"field_name\": \"ASSET SERIAL NO.\",\n            \"checklist_view_type\": \"SINGLE_PAGE\",\n            \"field_type\": \"SINGLE_LINE\",\n            \"field_description\": \"description\",\n            \"field_placeholder\": \"placeholder\",\n            \"field_options\": [],\n            \"min_value\": null,\n            \"max_value\": null,\n            \"regex_value\": \"\",\n            \"is_required\": false,\n            \"original_template\": {\n              \"id\": 2,\n              \"component\": \"textInput\",\n              \"editable\": true,\n              \"index\": 2,\n              \"label\": \"ASSET SERIAL NO.\",\n              \"description\": \"description\",\n              \"placeholder\": \"placeholder\",\n              \"options\": [],\n              \"required\": false,\n              \"validation\": \"/.*/\",\n              \"hide_to_fe\": false,\n              \"is_dependent\": false,\n              \"dependent_on\": \"\",\n              \"dependent_options\": [],\n              \"hide_field\": false,\n              \"read_only\": false,\n              \"regex_value\": \"\",\n              \"min_value\": null,\n              \"max_value\": null,\n              \"default_option\": null,\n              \"group\": \"Default\",\n              \"dependents\": [],\n              \"checklist_view_type\": \"SINGLE_PAGE\"\n            },\n            \"is_dependent\": false,\n            \"dependent_on\": \"\",\n            \"dependent_options\": [],\n            \"prefill_checklist\": false,\n            \"default_option\": false,\n            \"is_deleted\": false\n          },\n          {\n            \"_id\": \"63bfe183da05c2e6b0c86bcc\",\n            \"job_status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n            \"field_name\": \"ASSET CATEGORY\",\n            \"checklist_view_type\": \"SINGLE_PAGE\",\n            \"field_type\": \"SINGLE_ITEM\",\n            \"field_description\": \"description\",\n            \"field_placeholder\": \"placeholder\",\n            \"field_options\": [\n              \"NEUROLOGY\",\n              \"AMBULATORY DEVICE\",\n              \"AMBULATORY INFUSION PUMP\",\n              \"ANALYZER\",\n              \"CARDIOLOGY\",\n              \"CRITICAL CARE\",\n              \"END USER DEVICE\",\n              \"GEL WARMER\",\n              \"INCUBATOR\",\n              \"INFUSION PUMP\",\n              \"JUNOMIXER\",\n              \"MEDICAL DEVICE INTEGRATON\",\n              \"MONITORING SYSTEM\",\n              \"PATHOLOGY\",\n              \"PATIENT BED\",\n              \"PHARMACY AUTOMATION\",\n              \"RESPIRATORY DEVICES\",\n              \"SMART HOMECARE SOLUTION\",\n              \"SYRINGE PUMP\",\n              \"TELEMEDICINE\",\n              \"ULTRASOUND\",\n              \"WHEELCHAIR\"\n            ],\n            \"min_value\": null,\n            \"max_value\": null,\n            \"regex_value\": \"\",\n            \"is_required\": true,\n            \"original_template\": {\n              \"id\": 5,\n              \"component\": \"select\",\n              \"editable\": true,\n              \"index\": 3,\n              \"label\": \"ASSET CATEGORY\",\n              \"description\": \"description\",\n              \"placeholder\": \"placeholder\",\n              \"options\": [\n                \"NEUROLOGY\",\n                \"AMBULATORY DEVICE\",\n                \"AMBULATORY INFUSION PUMP\",\n                \"ANALYZER\",\n                \"CARDIOLOGY\",\n                \"CRITICAL CARE\",\n                \"END USER DEVICE\",\n                \"GEL WARMER\",\n                \"INCUBATOR\",\n                \"INFUSION PUMP\",\n                \"JUNOMIXER\",\n                \"MEDICAL DEVICE INTEGRATON\",\n                \"MONITORING SYSTEM\",\n                \"PATHOLOGY\",\n                \"PATIENT BED\",\n                \"PHARMACY AUTOMATION\",\n                \"RESPIRATORY DEVICES\",\n                \"SMART HOMECARE SOLUTION\",\n                \"SYRINGE PUMP\",\n                \"TELEMEDICINE\",\n                \"ULTRASOUND\",\n                \"WHEELCHAIR\"\n              ],\n              \"required\": true,\n              \"validation\": \"/.*/\",\n              \"hide_to_fe\": false,\n              \"is_dependent\": false,\n              \"dependent_on\": \"\",\n              \"dependent_options\": [],\n              \"hide_field\": false,\n              \"read_only\": false,\n              \"regex_value\": \"\",\n              \"min_value\": null,\n              \"max_value\": null,\n              \"default_option\": null,\n              \"group\": \"Default\",\n              \"dependents\": [],\n              \"checklist_view_type\": \"SINGLE_PAGE\"\n            },\n            \"is_dependent\": false,\n            \"dependent_on\": \"\",\n            \"dependent_options\": [],\n            \"prefill_checklist\": false,\n            \"default_option\": false,\n            \"is_deleted\": false\n          },\n          {\n            \"_id\": \"63bfe183da05c2e6b0c86bcd\",\n            \"job_status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n            \"field_name\": \"LPO NO\",\n            \"checklist_view_type\": \"SINGLE_PAGE\",\n            \"field_type\": \"SINGLE_LINE\",\n            \"field_description\": \"description\",\n            \"field_placeholder\": \"placeholder\",\n            \"field_options\": [],\n            \"min_value\": null,\n            \"max_value\": null,\n            \"regex_value\": \"\",\n            \"is_required\": false,\n            \"original_template\": {\n              \"id\": 6,\n              \"component\": \"textInput\",\n              \"editable\": true,\n              \"index\": 4,\n              \"label\": \"LPO NO\",\n              \"description\": \"description\",\n              \"placeholder\": \"placeholder\",\n              \"options\": [],\n              \"required\": false,\n              \"validation\": \"/.*/\",\n              \"hide_to_fe\": false,\n              \"is_dependent\": false,\n              \"dependent_on\": \"\",\n              \"dependent_options\": [],\n              \"hide_field\": false,\n              \"read_only\": false,\n              \"regex_value\": \"\",\n              \"min_value\": null,\n              \"max_value\": null,\n              \"default_option\": null,\n              \"group\": \"Default\",\n              \"dependents\": [],\n              \"checklist_view_type\": \"SINGLE_PAGE\"\n            },\n            \"is_dependent\": false,\n            \"dependent_on\": \"\",\n            \"dependent_options\": [],\n            \"prefill_checklist\": false,\n            \"default_option\": false,\n            \"is_deleted\": false\n          },\n          {\n            \"_id\": \"63bfe183da05c2e6b0c86bce\",\n            \"job_status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n            \"field_name\": \"MODEL NO\",\n            \"checklist_view_type\": \"SINGLE_PAGE\",\n            \"field_type\": \"SINGLE_LINE\",\n            \"field_description\": \"description\",\n            \"field_placeholder\": \"placeholder\",\n            \"field_options\": [],\n            \"min_value\": null,\n            \"max_value\": null,\n            \"regex_value\": \"\",\n            \"is_required\": false,\n            \"original_template\": {\n              \"id\": 7,\n              \"component\": \"textInput\",\n              \"editable\": true,\n              \"index\": 5,\n              \"label\": \"MODEL NO\",\n              \"description\": \"description\",\n              \"placeholder\": \"placeholder\",\n              \"options\": [],\n              \"required\": false,\n              \"validation\": \"/.*/\",\n              \"hide_to_fe\": false,\n              \"is_dependent\": false,\n              \"dependent_on\": \"\",\n              \"dependent_options\": [],\n              \"hide_field\": false,\n              \"read_only\": false,\n              \"regex_value\": \"\",\n              \"min_value\": null,\n              \"max_value\": null,\n              \"default_option\": null,\n              \"group\": \"Default\",\n              \"dependents\": [],\n              \"checklist_view_type\": \"SINGLE_PAGE\"\n            },\n            \"is_dependent\": false,\n            \"dependent_on\": \"\",\n            \"dependent_options\": [],\n            \"prefill_checklist\": false,\n            \"default_option\": false,\n            \"is_deleted\": false\n          },\n          {\n            \"_id\": \"63bfe183da05c2e6b0c86bcf\",\n            \"job_status_uid\": \"a64a7a70-135c-44f1-b38b-f4dd490b0c6c\",\n            \"field_name\": \"CUSTOMER ASSET ID\",\n            \"checklist_view_type\": \"SINGLE_PAGE\",\n            \"field_type\": \"SINGLE_LINE\",\n            \"field_description\": \"description\",\n            \"field_placeholder\": \"placeholder\",\n            \"field_options\": [],\n            \"min_value\": null,\n            \"max_value\": null,\n            \"regex_value\": \"\",\n            \"is_required\": false,\n            \"original_template\": {\n              \"id\": 8,\n              \"component\": \"textInput\",\n              \"editable\": true,\n              \"index\": 6,\n              \"label\": \"CUSTOMER ASSET ID\",\n              \"description\": \"description\",\n              \"placeholder\": \"placeholder\",\n              \"options\": [],\n              \"required\": false,\n              \"validation\": \"/.*/\",\n              \"hide_to_fe\": false,\n              \"is_dependent\": false,\n              \"dependent_on\": \"\",\n              \"dependent_options\": [],\n              \"hide_field\": false,\n              \"read_only\": false,\n              \"regex_value\": \"\",\n              \"min_value\": null,\n              \"max_value\": null,\n              \"default_option\": null,\n              \"group\": \"Default\",\n              \"dependents\": [],\n              \"checklist_view_type\": \"SINGLE_PAGE\"\n            },\n            \"is_dependent\": false,\n            \"dependent_on\": \"\",\n            \"dependent_options\": [],\n            \"prefill_checklist\": false,\n            \"default_option\": false,\n            \"is_deleted\": false\n          }\n        ],\n        \"checklist_view_type\": \"SINGLE_PAGE\",\n        \"prefill_checklist\": false\n      }\n    ],\n    \"is_deleted\": false,\n    \"created_at\": \"2023-01-10T07:18:15.930Z\",\n    \"updated_at\": \"2023-01-10T07:19:07.534Z\"\n  }\n}"
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
                        "_id": {
                          "type": "string",
                          "example": "63bd113767d3c2d76e647e42"
                        },
                        "job_statuses": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "status_uid": {
                                "type": "string",
                                "example": "b34f479c-2dcd-45fd-874d-9f8858566edf"
                              },
                              "status_name": {
                                "type": "string",
                                "example": "New"
                              },
                              "status_type": {
                                "type": "string",
                                "example": "NEW"
                              },
                              "status_color": {
                                "type": "string",
                                "example": "#02B875"
                              },
                              "require_customer_signature": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "require_preview": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "require_customer_feedback": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "require_facial_authentication": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "require_geo_fencing": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "parent_status": {
                                "type": "array"
                              },
                              "enabled_for_field_executive": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "enabled_for_manager": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "allow_remarks": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "capture_geo_cords": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "has_parent": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "remarks_values": {
                                "type": "array"
                              },
                              "_id": {
                                "type": "string",
                                "example": "63bd113767d3c2d76e647e43"
                              },
                              "checklist_view_type": {
                                "type": "string",
                                "example": ""
                              },
                              "prefill_checklist": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          }
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2023-01-10T07:18:15.930Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2023-01-10T07:19:07.534Z"
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
                    "value": "{\n    \"message\": \"Category UID Missing\",\n    \"title\": \"Missing Category ID to get Status\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Category UID Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Category ID to get Status"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
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
                    "value": "{\n    \"message\": \"No Category is found for given Category UID\",\n    \"title\": \"No Category is found\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "No Category is found for given Category UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "No Category is found"
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