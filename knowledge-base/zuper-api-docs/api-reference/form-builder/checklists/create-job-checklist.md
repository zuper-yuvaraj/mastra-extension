---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Job Checklist

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
    "/settings/checklist/new": {
      "post": {
        "summary": "Create Job Checklist",
        "description": "",
        "operationId": "create-job-checklist",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "category_uid",
                  "job_status_uid",
                  "checklist"
                ],
                "properties": {
                  "category_uid": {
                    "type": "string",
                    "description": "Job category UID"
                  },
                  "job_status_uid": {
                    "type": "string",
                    "description": "Job Status UID"
                  },
                  "prefill_checklist": {
                    "type": "boolean",
                    "default": false
                  },
                  "checklist": {
                    "type": "object",
                    "required": [
                      "field_name"
                    ],
                    "properties": {
                      "field_name": {
                        "type": "string"
                      },
                      "checklist_view_type": {
                        "type": "string",
                        "default": "MULTI_PAGE",
                        "enum": [
                          "SINGLE_PAGE",
                          "MULTI_PAGE"
                        ]
                      },
                      "field_meta": {
                        "type": "object",
                        "properties": {}
                      },
                      "field_type": {
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
                          "HEADER",
                          "VIDEO",
                          "FILE",
                          "TABLE"
                        ]
                      },
                      "field_description": {
                        "type": "string"
                      },
                      "field_placeholder": {
                        "type": "string"
                      },
                      "field_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "is_required": {
                        "type": "boolean"
                      },
                      "is_dependent": {
                        "type": "boolean"
                      },
                      "dependent_on": {
                        "type": "string"
                      },
                      "dependent_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "hide_to_fe": {
                        "type": "boolean"
                      },
                      "field_validation": {
                        "type": "string",
                        "description": "number/regex"
                      },
                      "min_value": {
                        "type": "string",
                        "description": "if field_validation is \"number\""
                      },
                      "max_value": {
                        "type": "string",
                        "description": "if field_validation is \"number\""
                      },
                      "regex_value": {
                        "type": "string",
                        "description": "if field_validation is \"regex\""
                      },
                      "copy_to_field": {
                        "type": "object",
                        "properties": {
                          "module": {
                            "type": "string",
                            "enum": [
                              "JOB",
                              "CUSTOMER"
                            ]
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "DEFAULT",
                              "CUSTOM_FIELD"
                            ]
                          },
                          "field_uid": {
                            "type": "string",
                            "description": "Custom field UID if type is CUSTOM_FIELD"
                          },
                          "default_field": {
                            "type": "string",
                            "description": "if type is DEFAULT. Eg: job_title / job_description / customer_first_name / customer_last_name "
                          }
                        }
                      },
                      "lookup_module": {
                        "type": "string",
                        "description": "if field_type is \"LOOKUP\"",
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
                      "default_option": {
                        "type": "boolean",
                        "default": false
                      },
                      "default_options": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "meta_options": {
                        "type": "object",
                        "properties": {
                          "restrict_to_camera": {
                            "type": "boolean"
                          },
                          "watermark_image": {
                            "type": "boolean"
                          },
                          "watermark_timestamp": {
                            "type": "boolean"
                          },
                          "watermark_geo_cords": {
                            "type": "boolean"
                          },
                          "restrict_status_update": {
                            "type": "object",
                            "properties": {
                              "is_enabled": {
                                "type": "boolean",
                                "default": false
                              },
                              "restricted_options": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              },
                              "message": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      },
                      "company_default_folder": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "folder_uid": {
                              "type": "string",
                              "description": "Default folder UID"
                            }
                          },
                          "type": "object"
                        },
                        "description": "Can be used to copy checklist images(field_type - IMAGE/MULTI_IMAGE) to job default albums"
                      }
                    }
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Your Checklist has been created successfully\",\n  \"data\": {\n    \"checklist_uid\": \"396dec16-88ad-467e-84de-a826c18a0a8a\"\n  }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Your Checklist has been created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "checklist_uid": {
                          "type": "string",
                          "example": "396dec16-88ad-467e-84de-a826c18a0a8a"
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
                    "value": "{\n    \"type\": \"error\",\n    \"message\": \"Error in creating checklist\",\n    \"title\": \"Error in creating checklist\",\n    \"data\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "error"
                    },
                    "message": {
                      "type": "string",
                      "example": "Error in creating checklist"
                    },
                    "title": {
                      "type": "string",
                      "example": "Error in creating checklist"
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