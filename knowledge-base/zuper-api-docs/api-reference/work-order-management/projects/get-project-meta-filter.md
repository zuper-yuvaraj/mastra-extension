---
updatedAt: 2026-10-02T16:05:26.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Project Meta Filter

Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.

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
    "/projects/meta/filter": {
      "get": {
        "summary": "Get Project Meta Filter",
        "operationId": "get-project-meta-filter",
        "description": "Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"project_number\", \"displayName\": \"Project #\", \"fieldDataKey\": \"project_number\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"project_name\", \"displayName\": \"Project Name\", \"fieldDataKey\": \"project_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"project_priority\", \"displayName\": \"Priority\", \"fieldDataKey\": \"project_priority\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"nested_field\", \"displayKey\": \"project_current_status.project_status_type\", \"displayName\": \"Status\", \"fieldDataKey\": \"project_current_status.project_status_type\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"project_tags\", \"displayName\": \"Tags\", \"fieldDataKey\": \"project_tags\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"nested_field\", \"displayKey\": \"project_category_uid\", \"displayName\": \"Category\", \"fieldDataKey\": \"project_category_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/projects/category\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"category_uid\", \"bindLabel\": \"category_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"project_assigned_to.team_uid\", \"displayName\": \"Assigned Team\", \"fieldDataKey\": \"project_assigned_to.team_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/team\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"team_uid\", \"bindLabel\": \"team_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"customer_uid\", \"displayName\": \"Customer\", \"fieldDataKey\": \"customer_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/customers\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"customer_uid\", \"bindLabel\": \"customer_first_name\"}}]}"
                  }
                }
              }
            }
          }
        }
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