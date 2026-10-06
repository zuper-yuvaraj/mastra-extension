---
updatedAt: 2026-09-28T05:46:22.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Checklists

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
    "/settings/checklist": {
      "get": {
        "summary": "Get Checklists",
        "description": "",
        "operationId": "get-checklists",
        "parameters": [
          {
            "name": "category_uid",
            "in": "query",
            "description": "Job Category UID",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "job_status_uid",
            "in": "query",
            "description": "Job Status UID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"type\": \"success\",\n  \"data\": [\n    {\n      \"meta_options\": {\n        \"restrict_status_update\": {\n          \"is_enabled\": false,\n          \"restricted_options\": [],\n          \"message\": null\n        },\n        \"restrict_to_camera\": false,\n        \"watermark_timestamp\": false,\n        \"watermark_geo_cords\": false\n      },\n      \"_id\": \"6823249de3c81159492f97f3\",\n      \"checklist_uid\": \"476376ff-4762-40db-be13-e43c99c00e5f\",\n      \"field_name\": \"test doc 1\",\n      \"checklist_view_type\": \"MULTI_PAGE\",\n      \"field_type\": \"SINGLE_LINE\",\n      \"field_description\": \"test\",\n      \"field_placeholder\": \"\",\n      \"field_options\": [],\n      \"display_order\": 1,\n      \"min_value\": null,\n      \"max_value\": null,\n      \"regex_value\": \"?\\\\\\\\d\",\n      \"is_required\": true,\n      \"original_template\": {\n        \"label\": \"test doc 1\",\n        \"component\": \"textInput\",\n        \"description\": \"test\",\n        \"required\": true,\n        \"hide_to_fe\": true,\n        \"is_dependent\": false,\n        \"validation\": \"[regex]\",\n        \"regex_value\": \"?\\\\\\\\d\",\n        \"default_option\": false,\n        \"read_only\": true,\n        \"hide_field\": true,\n        \"dependent_on\": null,\n        \"dependent_options\": [],\n        \"field_type\": \"SINGLE_LINE\",\n        \"id\": 1,\n        \"index\": 1\n      },\n      \"is_dependent\": false,\n      \"dependent_on\": null,\n      \"dependent_options\": [],\n      \"hide_to_fe\": true,\n      \"prefill_checklist\": false,\n      \"default_option\": false,\n      \"default_options\": [],\n      \"hide_field\": true,\n      \"read_only\": true,\n      \"is_deleted\": false\n    }\n  ]\n}"
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
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "meta_options": {
                            "type": "object",
                            "properties": {
                              "restrict_status_update": {
                                "type": "object",
                                "properties": {
                                  "is_enabled": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "restricted_options": {
                                    "type": "array"
                                  },
                                  "message": {}
                                }
                              },
                              "restrict_to_camera": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "watermark_timestamp": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "watermark_geo_cords": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "_id": {
                            "type": "string",
                            "example": "6823249de3c81159492f97f3"
                          },
                          "checklist_uid": {
                            "type": "string",
                            "example": "476376ff-4762-40db-be13-e43c99c00e5f"
                          },
                          "field_name": {
                            "type": "string",
                            "example": "test doc 1"
                          },
                          "checklist_view_type": {
                            "type": "string",
                            "example": "MULTI_PAGE"
                          },
                          "field_type": {
                            "type": "string",
                            "example": "SINGLE_LINE"
                          },
                          "field_description": {
                            "type": "string",
                            "example": "test"
                          },
                          "field_placeholder": {
                            "type": "string",
                            "example": ""
                          },
                          "field_options": {
                            "type": "array"
                          },
                          "display_order": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "min_value": {},
                          "max_value": {},
                          "regex_value": {
                            "type": "string",
                            "example": "?\\\\d"
                          },
                          "is_required": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "original_template": {
                            "type": "object",
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "test doc 1"
                              },
                              "component": {
                                "type": "string",
                                "example": "textInput"
                              },
                              "description": {
                                "type": "string",
                                "example": "test"
                              },
                              "required": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "hide_to_fe": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "is_dependent": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "validation": {
                                "type": "string",
                                "example": "[regex]"
                              },
                              "regex_value": {
                                "type": "string",
                                "example": "?\\\\d"
                              },
                              "default_option": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "read_only": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "hide_field": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "dependent_on": {},
                              "dependent_options": {
                                "type": "array"
                              },
                              "field_type": {
                                "type": "string",
                                "example": "SINGLE_LINE"
                              },
                              "id": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "index": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              }
                            }
                          },
                          "is_dependent": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "dependent_on": {},
                          "dependent_options": {
                            "type": "array"
                          },
                          "hide_to_fe": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "prefill_checklist": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "default_option": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "default_options": {
                            "type": "array"
                          },
                          "hide_field": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "read_only": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "is_deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          }
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
                    "value": "{\n  \"message\": \"Job Category / Status UID Missing\",\n  \"title\": \"Missing Category Status UID\",\n  \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Job Category / Status UID Missing"
                    },
                    "title": {
                      "type": "string",
                      "example": "Missing Category Status UID"
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
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n\ttype: \"error\",\n  message: \"Error in getting checklist\"\n  data: \"\"\n}"
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-internal": false
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