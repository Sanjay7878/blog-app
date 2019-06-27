define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/blog/create",
    "title": "Create A New Blog",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the blog</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the blog</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bodyHtml",
            "description": "<p>bodtHtml of the blog</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>author of the blog</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Blog Created Successfully\",\n\"status\": 200,\n\"data\": [\n          {\n              blogId: \"string\",\n              title: \"string\",\n              description: \"string\",\n              bodyHtml: \"string\",\n              views: number,\n              isPublished: boolean,\n              category: \"string\",\n              author: \"string\"\n              tags: Object(type = array),\n              created: \"date\",\n              lastModified: \"date\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"Failed to Create Blog\",\n\"status\": 500,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Create",
    "name": "PostApiV1BlogCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/blog/:blogId/delete",
    "title": "Delete a Blog",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog which needs to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n\"error\": false,\n\"message\": \"Blog deleted Successfully\",\n\"status\": 200,\n\"data\": [\n          {\n              \"n\": 0,\n        \"               ok\": 1\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No Blog found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Delete",
    "name": "PostApiV1BlogBlogidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/blog/:blogId/edit",
    "title": "Edit a Blog",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog that needs to be edited</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Blog Edited Succesfully\",\n\"status\": 200,\n\"data\": [\n          {\n              blogId: \"string\",\n              title: \"string\",\n              description: \"string\",\n              bodyHtml: \"string\",\n              views: number,\n              isPublished: boolean,\n              category: \"string\",\n              author: \"string\"\n              tags: Object(type = array),\n              created: \"date\",\n              lastModified: \"date\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No Blog found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Edit",
    "name": "PutApiV1BlogBlogidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/blog/all",
    "title": "Get All Blogs",
    "version": "0.0.1",
    "group": "View",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"All Blogs found\",\n\"status\": 200,\n\"data\": [\n          {\n              blogId: \"string\",\n              title: \"string\",\n              description: \"string\",\n              bodyHtml: \"string\",\n              views: number,\n              isPublished: boolean,\n              category: \"string\",\n              author: \"string\"\n              tags: Object(type = array),\n              created: \"date\",\n              lastModified: \"date\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No Blogs found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "View",
    "name": "GetApiV1BlogAll"
  },
  {
    "type": "get",
    "url": "/api/v1/blog/:author/view/author",
    "title": "View Blog by Author",
    "version": "0.0.1",
    "group": "View",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>author name to be viewed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Author found\",\n\"status\": 200,\n\"data\": [\n          {\n              blogId: \"string\",\n              title: \"string\",\n              description: \"string\",\n              bodyHtml: \"string\",\n              views: number,\n              isPublished: boolean,\n              category: \"string\",\n              author: \"string\"\n              tags: Object(type = array),\n              created: \"date\",\n              lastModified: \"date\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No author found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "View",
    "name": "GetApiV1BlogAuthorViewAuthor"
  },
  {
    "type": "get",
    "url": "/api/v1/blog/:blogId/view",
    "title": "Get Single Blog Details",
    "version": "0.0.1",
    "group": "View",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog to be viewed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Blog found\",\n\"status\": 200,\n\"data\": [\n          {\n              blogId: \"string\",\n              title: \"string\",\n              description: \"string\",\n              bodyHtml: \"string\",\n              views: number,\n              isPublished: boolean,\n              category: \"string\",\n              author: \"string\"\n              tags: Object(type = array),\n              created: \"date\",\n              lastModified: \"date\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No Blog found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "View",
    "name": "GetApiV1BlogBlogidView"
  },
  {
    "type": "get",
    "url": "/api/v1/blog/:blogId/view/count",
    "title": "Show the Blog View Count",
    "version": "0.0.1",
    "group": "View",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId to which the views need to be increased</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Blog View Updated Successfully\",\n\"status\": 200,\n\"data\": [\n          {\n              blogId: \"string\",\n              title: \"string\",\n              description: \"string\",\n              bodyHtml: \"string\",\n              views: number,\n              isPublished: boolean,\n              category: \"string\",\n              author: \"string\"\n              tags: Object(type = array),\n              created: \"date\",\n              lastModified: \"date\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No Blog found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "View",
    "name": "GetApiV1BlogBlogidViewCount"
  },
  {
    "type": "get",
    "url": "/api/v1/blog/:category/view/category",
    "title": "View Blog by Category",
    "version": "0.0.1",
    "group": "View",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category that needs to be viewed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Category found\",\n\"status\": 200,\n\"data\": [\n          {\n              blogId: \"string\",\n              title: \"string\",\n              description: \"string\",\n              bodyHtml: \"string\",\n              views: number,\n              isPublished: boolean,\n              category: \"string\",\n              author: \"string\"\n              tags: Object(type = array),\n              created: \"date\",\n              lastModified: \"date\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No category found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "View",
    "name": "GetApiV1BlogCategoryViewCategory"
  }
] });
