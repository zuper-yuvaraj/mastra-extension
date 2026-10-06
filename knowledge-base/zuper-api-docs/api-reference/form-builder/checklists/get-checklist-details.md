---
updatedAt: 2026-08-11T14:43:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Checklist Details

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
    "/settings/checklist/{checklist_uid}": {
      "get": {
        "summary": "Get Checklist Details",
        "description": "",
        "operationId": "get-checklist-details",
        "parameters": [
          {
            "name": "checklist_uid",
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
                    "value": "{\n  \"type\": \"success\",\n  \"data\": {\n    \"checklist_uid\": \"396dec16-88ad-467e-84de-a826c18a0a8a\",\n    \"job_category\": {\n      \"category_uid\": \"14e25638-12d9-4cbe-8f43-b16e868042e3\",\n      \"category_name\": \"AC Installation\",\n      \"category_color\": \"#000\"\n    },\n    \"job_status\": {\n      \"job_statuses\": {\n        \"status_uid\": \"ac015bfe-653c-4f4f-ada0-32d20c58319b\",\n        \"status_name\": \"On My Way\",\n        \"status_type\": \"ON_MY_WAY\",\n        \"status_color\": \"#3498db\",\n        \"require_customer_signature\": false,\n        \"require_preview\": false,\n        \"require_customer_feedback\": false,\n        \"require_facial_authentication\": false,\n        \"require_geo_fencing\": false,\n        \"parent_status\": [],\n        \"enabled_for_field_executive\": true,\n        \"enabled_for_manager\": true,\n        \"allow_remarks\": false,\n        \"capture_geo_cords\": false,\n        \"has_parent\": false,\n        \"remarks_values\": [],\n        \"restrict_to_access_role\": false,\n        \"enabled_to_access_role\": []\n      }\n    },\n    \"field_name\": \"test readme doc\",\n    \"checklist_view_type\": \"SINGLE_PAGE\",\n    \"field_type\": \"SINGLE_LINE\",\n    \"field_description\": \"test readme doc\",\n    \"field_placeholder\": \"\",\n    \"field_options\": [],\n    \"display_order\": 1,\n    \"field_validation\": \"number\",\n    \"min_value\": 1,\n    \"max_value\": 2,\n    \"is_required\": true,\n    \"original_template\": {\n      \"id\": 1,\n      \"component\": \"textInput\",\n      \"editable\": true,\n      \"index\": 1,\n      \"label\": \"test readme doc\",\n      \"description\": \"test readme doc\",\n      \"required\": true,\n      \"validation\": \"[number]\",\n      \"hide_to_fe\": false,\n      \"is_dependent\": false,\n      \"dependent_on\": null,\n      \"dependent_options\": [],\n      \"prefill_checklist\": false,\n      \"default_options\": [],\n      \"hide_field\": false,\n      \"read_only\": false,\n      \"min_value\": 1,\n      \"max_value\": 2,\n      \"default_option\": false,\n      \"group\": \"Default\",\n      \"dependents\": [],\n      \"restrict_status_update\": null,\n      \"restrict_to_camera\": false,\n      \"watermark_image\": false,\n      \"watermark_timestamp\": false,\n      \"watermark_geo_cords\": false,\n      \"meta_options\": {\n        \"restrict_to_camera\": false,\n        \"watermark_image\": false,\n        \"watermark_timestamp\": false,\n        \"watermark_geo_cords\": false,\n        \"restrict_status_update\": {\n          \"is_enabled\": false,\n          \"restricted_options\": [],\n          \"message\": null\n        }\n      },\n      \"checklist_view_type\": \"SINGLE_PAGE\",\n      \"field_type\": \"SINGLE_LINE\"\n    },\n    \"is_dependent\": false,\n    \"dependent_on\": null,\n    \"dependent_options\": [],\n    \"prefill_checklist\": false,\n    \"default_option\": false,\n    \"default_options\": [],\n    \"hide_field\": false,\n    \"read_only\": false,\n    \"meta_options\": {\n      \"restrict_to_camera\": false,\n      \"watermark_timestamp\": false,\n      \"watermark_geo_cords\": false,\n      \"restrict_status_update\": {\n        \"is_enabled\": false,\n        \"restricted_options\": [],\n        \"message\": null\n      }\n    },\n    \"is_deleted\": false\n  }\n}"
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
                        "checklist_uid": {
                          "type": "string",
                          "example": "396dec16-88ad-467e-84de-a826c18a0a8a"
                        },
                        "job_category": {
                          "type": "object",
                          "properties": {
                            "category_uid": {
                              "type": "string",
                              "example": "14e25638-12d9-4cbe-8f43-b16e868042e3"
                            },
                            "category_name": {
                              "type": "string",
                              "example": "AC Installation"
                            },
                            "category_color": {
                              "type": "string",
                              "example": "#000"
                            }
                          }
                        },
                        "job_status": {
                          "type": "object",
                          "properties": {
                            "job_statuses": {
                              "type": "object",
                              "properties": {
                                "status_uid": {
                                  "type": "string",
                                  "example": "ac015bfe-653c-4f4f-ada0-32d20c58319b"
                                },
                                "status_name": {
                                  "type": "string",
                                  "example": "On My Way"
                                },
                                "status_type": {
                                  "type": "string",
                                  "example": "ON_MY_WAY"
                                },
                                "status_color": {
                                  "type": "string",
                                  "example": "#3498db"
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
                                "restrict_to_access_role": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "enabled_to_access_role": {
                                  "type": "array"
                                }
                              }
                            }
                          }
                        },
                        "field_name": {
                          "type": "string",
                          "example": "test readme doc"
                        },
                        "checklist_view_type": {
                          "type": "string",
                          "example": "SINGLE_PAGE"
                        },
                        "field_type": {
                          "type": "string",
                          "example": "SINGLE_LINE"
                        },
                        "field_description": {
                          "type": "string",
                          "example": "test readme doc"
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
                        "field_validation": {
                          "type": "string",
                          "example": "number"
                        },
                        "min_value": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "max_value": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "is_required": {
                          "type": "boolean",
                          "example": true,
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
                              "example": "test readme doc"
                            },
                            "description": {
                              "type": "string",
                              "example": "test readme doc"
                            },
                            "required": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "validation": {
                              "type": "string",
                              "example": "[number]"
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
                            "prefill_checklist": {
                              "type": "boolean",
                              "example": false,
                              "default": true
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
                              "example": false,
                              "default": true
                            },
                            "min_value": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "max_value": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            },
                            "default_option": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "group": {
                              "type": "string",
                              "example": "Default"
                            },
                            "dependents": {
                              "type": "array"
                            },
                            "restrict_status_update": {},
                            "restrict_to_camera": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "watermark_image": {
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
                                "watermark_image": {
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
                                }
                              }
                            },
                            "checklist_view_type": {
                              "type": "string",
                              "example": "SINGLE_PAGE"
                            },
                            "field_type": {
                              "type": "string",
                              "example": "SINGLE_LINE"
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
                          "example": false,
                          "default": true
                        },
                        "read_only": {
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
                            },
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
                            }
                          }
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
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"message\": \"Error in Getting Checklist\",\n    \"title\": \"Error in Getting Checklist\",\n    \"type\": \"error\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Error in Getting Checklist"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in Getting Checklist"
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