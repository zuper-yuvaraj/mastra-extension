---
updatedAt: 2026-06-09T07:06:58.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Inspection form Details

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
    "/assets/inspection_form/{asset_form_uid}/{field_uid}": {
      "get": {
        "summary": "Get Inspection form Details",
        "description": "",
        "operationId": "get-inspection-form-details",
        "parameters": [
          {
            "name": "asset_form_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "field_uid",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": {\n    \"asset_form_uid\": \"d3fbe36f-6d40-4033-97a0-f190c02c68d8\",\n    \"asset_form_name\": \"doc test\",\n    \"asset_form_description\": \"\",\n    \"asset_category\": null,\n    \"is_active\": true,\n    \"is_deleted\": false,\n    \"created_by\": {\n      \"user_uid\": \"a912981c-f39d-413d-9f04-88b17f54f9d4\",\n      \"first_name\": \"XXXX\",\n      \"last_name\": \"XXXXX\",\n      \"email\": \"XXXXX@zuper.co\",\n      \"external_login_id\": null,\n      \"home_phone_number\": \"9898989898\",\n      \"designation\": \"CTO\",\n      \"emp_code\": \"Z0001\",\n      \"prefix\": null,\n      \"work_phone_number\": \"9898989898\",\n      \"mobile_phone_number\": null,\n      \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/3c0f3c2b-49de-44b1-95b5-57b44463df95.png\",\n      \"hourly_labor_charge\": null,\n      \"is_active\": true,\n      \"is_deleted\": false,\n      \"created_at\": \"2024-11-13T11:33:00.000Z\",\n      \"updated_at\": \"2025-05-09T09:44:47.000Z\"\n    },\n    \"asset_form_fields\": {\n      \"meta_options\": {\n        \"restrict_to_camera\": false,\n        \"watermark_timestamp\": false,\n        \"watermark_geo_cords\": false\n      },\n      \"field_uid\": \"05fcbdd7-6f69-4531-92f8-b366ffb80489\",\n      \"label\": \"test from doc\",\n      \"description\": \"test\",\n      \"placeholder\": \"\",\n      \"field_validation\": \"regex\",\n      \"is_dependent\": false,\n      \"dependent_on\": null,\n      \"dependent_options\": [],\n      \"type\": \"SINGLE_LINE\",\n      \"hide_to_fe\": false,\n      \"field_options\": [],\n      \"is_required\": false,\n      \"default_options\": [],\n      \"default_option\": false,\n      \"original_template\": {\n        \"id\": 1,\n        \"component\": \"textInput\",\n        \"editable\": true,\n        \"index\": 1,\n        \"label\": \"test from doc\",\n        \"description\": \"test\",\n        \"required\": false,\n        \"validation\": \"[regex]\",\n        \"hide_to_fe\": false,\n        \"is_dependent\": false,\n        \"dependent_on\": null,\n        \"dependent_options\": [],\n        \"default_options\": [],\n        \"hide_field\": false,\n        \"read_only\": true,\n        \"regex_value\": \"?\\\\\\\\d\",\n        \"min_value\": null,\n        \"max_value\": null,\n        \"group\": \"Default\",\n        \"dependents\": [],\n        \"restrict_to_camera\": false,\n        \"watermark_timestamp\": false,\n        \"watermark_geo_cords\": false,\n        \"meta_options\": {\n          \"restrict_to_camera\": false,\n          \"watermark_timestamp\": false,\n          \"watermark_geo_cords\": false\n        },\n        \"field_type\": \"SINGLE_LINE\"\n      },\n      \"regex_value\": \"?\\\\\\\\d\",\n      \"hide_field\": false,\n      \"read_only\": true\n    },\n    \"created_at\": \"2025-05-09T09:11:50.036Z\",\n    \"updated_at\": \"2025-05-09T10:07:30.719Z\",\n    \"__v\": 7\n  }\n}"
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
                        "asset_form_uid": {
                          "type": "string",
                          "example": "d3fbe36f-6d40-4033-97a0-f190c02c68d8"
                        },
                        "asset_form_name": {
                          "type": "string",
                          "example": "doc test"
                        },
                        "asset_form_description": {
                          "type": "string",
                          "example": ""
                        },
                        "asset_category": {},
                        "is_active": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "a912981c-f39d-413d-9f04-88b17f54f9d4"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "XXXX"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "XXXXX"
                            },
                            "email": {
                              "type": "string",
                              "example": "XXXXX@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {
                              "type": "string",
                              "example": "9898989898"
                            },
                            "designation": {
                              "type": "string",
                              "example": "CTO"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "Z0001"
                            },
                            "prefix": {},
                            "work_phone_number": {
                              "type": "string",
                              "example": "9898989898"
                            },
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/3c0f3c2b-49de-44b1-95b5-57b44463df95.png"
                            },
                            "hourly_labor_charge": {},
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2024-11-13T11:33:00.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2025-05-09T09:44:47.000Z"
                            }
                          }
                        },
                        "asset_form_fields": {
                          "type": "object",
                          "properties": {
                            "meta_options": {
                              "type": "object",
                              "properties": {
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
                            "field_uid": {
                              "type": "string",
                              "example": "05fcbdd7-6f69-4531-92f8-b366ffb80489"
                            },
                            "label": {
                              "type": "string",
                              "example": "test from doc"
                            },
                            "description": {
                              "type": "string",
                              "example": "test"
                            },
                            "placeholder": {
                              "type": "string",
                              "example": ""
                            },
                            "field_validation": {
                              "type": "string",
                              "example": "regex"
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
                            "type": {
                              "type": "string",
                              "example": "SINGLE_LINE"
                            },
                            "hide_to_fe": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "field_options": {
                              "type": "array"
                            },
                            "is_required": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "default_options": {
                              "type": "array"
                            },
                            "default_option": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "original_template": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "component": {
                                  "type": "string",
                                  "example": "textInput"
                                },
                                "editable": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "index": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "label": {
                                  "type": "string",
                                  "example": "test from doc"
                                },
                                "description": {
                                  "type": "string",
                                  "example": "test"
                                },
                                "required": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "validation": {
                                  "type": "string",
                                  "example": "[regex]"
                                },
                                "hide_to_fe": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
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
                                "default_options": {
                                  "type": "array"
                                },
                                "hide_field": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "read_only": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "regex_value": {
                                  "type": "string",
                                  "example": "?\\\\d"
                                },
                                "min_value": {},
                                "max_value": {},
                                "group": {
                                  "type": "string",
                                  "example": "Default"
                                },
                                "dependents": {
                                  "type": "array"
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
                                },
                                "meta_options": {
                                  "type": "object",
                                  "properties": {
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
                                "field_type": {
                                  "type": "string",
                                  "example": "SINGLE_LINE"
                                }
                              }
                            },
                            "regex_value": {
                              "type": "string",
                              "example": "?\\\\d"
                            },
                            "hide_field": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "read_only": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            }
                          }
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2025-05-09T09:11:50.036Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2025-05-09T10:07:30.719Z"
                        },
                        "__v": {
                          "type": "integer",
                          "example": 7,
                          "default": 0
                        }
                      }
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
                    "value": "{\n    \"message\": \"Error in Getting Inspection form\",\n    \"title\": \"Error in Getting Inspection form\",\n    \"type\": \"error\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Getting Inspection form"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Getting Inspection form"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "data": {
                      "type": "string",
                      "example": ""
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