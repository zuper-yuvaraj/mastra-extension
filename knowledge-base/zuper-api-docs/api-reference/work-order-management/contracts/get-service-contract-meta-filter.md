---
updatedAt: 2026-10-02T16:04:41.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Service Contract Meta Filter

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
    "/service_contract/meta/filter": {
      "get": {
        "summary": "Get Service Contract Meta Filter",
        "operationId": "get-service-contract-meta-filter",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"contract_number\", \"displayName\": \"Contract Number\", \"fieldDataKey\": \"contract_number\", \"fieldType\": \"NUMBER\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"ref_no\", \"displayName\": \"Reference #\", \"fieldDataKey\": \"ref_no\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"contract_name\", \"displayName\": \"Contract Name\", \"fieldDataKey\": \"contract_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"start_date\", \"displayName\": \"Start Date\", \"fieldDataKey\": \"start_date\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"end_date\", \"displayName\": \"End Date\", \"fieldDataKey\": \"end_date\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"is_expired\", \"displayName\": \"Expired\", \"fieldDataKey\": \"is_expired\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": false, \"fieldOptions\": [{\"key\": \"true\", \"value\": \"Yes\"}, {\"key\": \"false\", \"value\": \"No\"}]}, {\"type\": \"nested_field\", \"displayKey\": \"customer_uid\", \"displayName\": \"Customer\", \"fieldDataKey\": \"customer_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/customers\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"customer_uid\", \"bindLabel\": \"customer_first_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"organization_uid\", \"displayName\": \"Organization\", \"fieldDataKey\": \"organization_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/organization\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"organization_uid\", \"bindLabel\": \"organization_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"package_uid\", \"displayName\": \"Package\", \"fieldDataKey\": \"package_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true}, {\"type\": \"nested_field\", \"displayKey\": \"team_uid\", \"displayName\": \"Team\", \"fieldDataKey\": \"team_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/team\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"team_uid\", \"bindLabel\": \"team_name\"}}]}"
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