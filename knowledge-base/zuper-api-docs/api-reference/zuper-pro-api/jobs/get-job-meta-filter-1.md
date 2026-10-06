---
updatedAt: 2026-10-02T15:32:32.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Job Meta Filter

Returns the set of fields available to filter this module on, along with each field's supported operators and (for LOOKUP/nested fields) the companion API to call for typeahead options. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.

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
    "/jobs/meta/filter": {
      "get": {
        "summary": "Get Job Meta Filter",
        "description": "Returns the set of fields available to filter this module on, along with each field's supported operators and (for LOOKUP/nested fields) the companion API to call for typeahead options. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.",
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
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "default_field",
                              "nested_field",
                              "custom_field"
                            ]
                          },
                          "displayKey": {
                            "type": "string"
                          },
                          "displayName": {
                            "type": "string"
                          },
                          "fieldDataKey": {
                            "type": "string",
                            "description": "The exact value to use as `key` in this module's generic-filter endpoint's filter_rules."
                          },
                          "fieldType": {
                            "type": "string",
                            "enum": [
                              "TEXT",
                              "NUMBER",
                              "DATE",
                              "DECIMAL",
                              "DROPDOWN",
                              "LOOKUP"
                            ]
                          },
                          "multiSelect": {
                            "type": "boolean"
                          },
                          "fieldOptions": {
                            "type": "array",
                            "items": {
                              "type": "object"
                            }
                          },
                          "operators": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "displayKey": {
                                  "type": "string"
                                },
                                "displayValue": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "data": {
                            "type": "object",
                            "description": "Present on LOOKUP/nested fields — tells the client which API to call for typeahead options.",
                            "properties": {
                              "url": {
                                "type": "string"
                              },
                              "lazyLoad": {
                                "type": "boolean"
                              },
                              "searchParam": {
                                "type": "string"
                              },
                              "dataKey": {
                                "type": "string"
                              },
                              "bindLabel": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"work_order_number\", \"displayName\": \"Work Order #\", \"fieldDataKey\": \"work_order_number\", \"fieldType\": \"NUMBER\", \"multiSelect\": false, \"operators\": [{\"displayKey\": \"EQUAL_TO\", \"displayValue\": \"Is\"}, {\"displayKey\": \"GREATER_THAN\", \"displayValue\": \"Greater Than\"}]}, {\"type\": \"default_field\", \"displayKey\": \"job_title\", \"displayName\": \"Job Title\", \"fieldDataKey\": \"job_title\", \"fieldType\": \"TEXT\", \"multiSelect\": false, \"operators\": [{\"displayKey\": \"CONTAINS\", \"displayValue\": \"Contains\"}]}, {\"type\": \"nested_field\", \"displayKey\": \"job_category_uid\", \"displayName\": \"Job Category\", \"fieldDataKey\": \"job_category_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/job/category\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"category_uid\", \"bindLabel\": \"category_name\"}}, {\"type\": \"default_field\", \"displayKey\": \"job_priority\", \"displayName\": \"Priority\", \"fieldDataKey\": \"job_priority\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true, \"fieldOptions\": [{\"key\": \"LOW\", \"value\": \"Low\"}, {\"key\": \"NORMAL\", \"value\": \"Normal\"}, {\"key\": \"HIGH\", \"value\": \"High\"}, {\"key\": \"URGENT\", \"value\": \"Urgent\"}]}, {\"type\": \"nested_field\", \"displayKey\": \"assigned_to\", \"displayName\": \"Assigned To\", \"fieldDataKey\": \"assigned_to\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/users\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"user_uid\", \"bindLabel\": \"name\"}}, {\"type\": \"default_field\", \"displayKey\": \"scheduled_date_range\", \"displayName\": \"Scheduled Date\", \"fieldDataKey\": \"scheduled_date_range\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"custom_field\", \"displayKey\": \"Inspection Passed\", \"displayName\": \"Inspection Passed\", \"fieldDataKey\": \"custom_field\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false}]}"
                  }
                }
              }
            }
          }
        },
        "operationId": "get-job-meta-filter"
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