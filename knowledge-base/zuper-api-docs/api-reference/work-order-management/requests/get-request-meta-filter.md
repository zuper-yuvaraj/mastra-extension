---
updatedAt: 2026-10-02T16:04:54.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Request Meta Filter

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
    "/request/meta/filter": {
      "get": {
        "summary": "Get Request Meta Filter",
        "operationId": "get-request-meta-filter",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"request_priority\", \"displayName\": \"Priority\", \"fieldDataKey\": \"request_priority\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"default_field\", \"displayKey\": \"request_title\", \"displayName\": \"Title\", \"fieldDataKey\": \"request_title\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"request_due_date\", \"displayName\": \"Due Date\", \"fieldDataKey\": \"request_due_date\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"customer_uid\", \"displayName\": \"Customer\", \"fieldDataKey\": \"customer_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/customers\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"customer_uid\", \"bindLabel\": \"customer_first_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"organization_uid\", \"displayName\": \"Organization\", \"fieldDataKey\": \"organization_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true}, {\"type\": \"nested_field\", \"displayKey\": \"property_uid\", \"displayName\": \"Property\", \"fieldDataKey\": \"property_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true}, {\"type\": \"nested_field\", \"displayKey\": \"asset_uid\", \"displayName\": \"Asset\", \"fieldDataKey\": \"asset_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/assets\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"asset_uid\", \"bindLabel\": \"asset_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"request_status.status_uid\", \"displayName\": \"Status\", \"fieldDataKey\": \"request_status.status_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/request/status\", \"lazyLoad\": false, \"dataKey\": \"status_uid\", \"bindLabel\": \"status_name\"}}]}"
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