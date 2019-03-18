/**
 * TestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DescribedThing from '../Model/DescribedThing';
import Thing from '../Model/Thing';

/**
* Default service.
* @module Api/DefaultApi
* @version 0.1.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:Api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a DescribedThing
     * Creates a new instance of a &#x60;DescribedThing&#x60;.
     * @param {module:Model/DescribedThing} describedThing A new &#x60;DescribedThing&#x60; to be created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createDescribedThingWithHttpInfo(describedThing) {
      let postBody = describedThing;

      // verify the required parameter 'describedThing' is set
      if (describedThing === undefined || describedThing === null) {
        throw new Error("Missing the required parameter 'describedThing' when calling createDescribedThing");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/describedThings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a DescribedThing
     * Creates a new instance of a &#x60;DescribedThing&#x60;.
     * @param {module:Model/DescribedThing} describedThing A new &#x60;DescribedThing&#x60; to be created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createDescribedThing(describedThing) {
      return this.createDescribedThingWithHttpInfo(describedThing)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Thing
     * Creates a new instance of a &#x60;Thing&#x60;.
     * @param {module:Model/Thing} thing A new &#x60;Thing&#x60; to be created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createThingWithHttpInfo(thing) {
      let postBody = thing;

      // verify the required parameter 'thing' is set
      if (thing === undefined || thing === null) {
        throw new Error("Missing the required parameter 'thing' when calling createThing");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/things', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Thing
     * Creates a new instance of a &#x60;Thing&#x60;.
     * @param {module:Model/Thing} thing A new &#x60;Thing&#x60; to be created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createThing(thing) {
      return this.createThingWithHttpInfo(thing)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a DescribedThing
     * Deletes an existing &#x60;DescribedThing&#x60;.
     * @param {String} describedThingId A unique identifier for a &#x60;DescribedThing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDescribedThingWithHttpInfo(describedThingId) {
      let postBody = null;

      // verify the required parameter 'describedThingId' is set
      if (describedThingId === undefined || describedThingId === null) {
        throw new Error("Missing the required parameter 'describedThingId' when calling deleteDescribedThing");
      }


      let pathParams = {
        'describedThingId': describedThingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/describedThings/{describedThingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a DescribedThing
     * Deletes an existing &#x60;DescribedThing&#x60;.
     * @param {String} describedThingId A unique identifier for a &#x60;DescribedThing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDescribedThing(describedThingId) {
      return this.deleteDescribedThingWithHttpInfo(describedThingId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Thing
     * Deletes an existing &#x60;Thing&#x60;.
     * @param {String} thingId A unique identifier for a &#x60;Thing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteThingWithHttpInfo(thingId) {
      let postBody = null;

      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling deleteThing");
      }


      let pathParams = {
        'thingId': thingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/things/{thingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Thing
     * Deletes an existing &#x60;Thing&#x60;.
     * @param {String} thingId A unique identifier for a &#x60;Thing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteThing(thingId) {
      return this.deleteThingWithHttpInfo(thingId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a DescribedThing
     * Gets the details of a single instance of a &#x60;DescribedThing&#x60;.
     * @param {String} describedThingId A unique identifier for a &#x60;DescribedThing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DescribedThing} and HTTP response
     */
    getDescribedThingWithHttpInfo(describedThingId) {
      let postBody = null;

      // verify the required parameter 'describedThingId' is set
      if (describedThingId === undefined || describedThingId === null) {
        throw new Error("Missing the required parameter 'describedThingId' when calling getDescribedThing");
      }


      let pathParams = {
        'describedThingId': describedThingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DescribedThing;

      return this.apiClient.callApi(
        '/describedThings/{describedThingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a DescribedThing
     * Gets the details of a single instance of a &#x60;DescribedThing&#x60;.
     * @param {String} describedThingId A unique identifier for a &#x60;DescribedThing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DescribedThing}
     */
    getDescribedThing(describedThingId) {
      return this.getDescribedThingWithHttpInfo(describedThingId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List All DescribedThings
     * Gets a list of all &#x60;DescribedThing&#x60; entities.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Model/DescribedThing>} and HTTP response
     */
    getDescribedThingsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DescribedThing];

      return this.apiClient.callApi(
        '/describedThings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List All DescribedThings
     * Gets a list of all &#x60;DescribedThing&#x60; entities.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Model/DescribedThing>}
     */
    getDescribedThings() {
      return this.getDescribedThingsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Thing
     * Gets the details of a single instance of a &#x60;Thing&#x60;.
     * @param {String} thingId A unique identifier for a &#x60;Thing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Thing} and HTTP response
     */
    getThingWithHttpInfo(thingId) {
      let postBody = null;

      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling getThing");
      }


      let pathParams = {
        'thingId': thingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Thing;

      return this.apiClient.callApi(
        '/things/{thingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Thing
     * Gets the details of a single instance of a &#x60;Thing&#x60;.
     * @param {String} thingId A unique identifier for a &#x60;Thing&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Thing}
     */
    getThing(thingId) {
      return this.getThingWithHttpInfo(thingId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List All Things
     * Gets a list of all &#x60;Thing&#x60; entities.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Model/Thing>} and HTTP response
     */
    getThingsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Thing];

      return this.apiClient.callApi(
        '/things', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List All Things
     * Gets a list of all &#x60;Thing&#x60; entities.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Model/Thing>}
     */
    getThings() {
      return this.getThingsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a DescribedThing
     * Updates an existing &#x60;DescribedThing&#x60;.
     * @param {String} describedThingId A unique identifier for a &#x60;DescribedThing&#x60;.
     * @param {module:Model/DescribedThing} describedThing Updated &#x60;DescribedThing&#x60; information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateDescribedThingWithHttpInfo(describedThingId, describedThing) {
      let postBody = describedThing;

      // verify the required parameter 'describedThingId' is set
      if (describedThingId === undefined || describedThingId === null) {
        throw new Error("Missing the required parameter 'describedThingId' when calling updateDescribedThing");
      }

      // verify the required parameter 'describedThing' is set
      if (describedThing === undefined || describedThing === null) {
        throw new Error("Missing the required parameter 'describedThing' when calling updateDescribedThing");
      }


      let pathParams = {
        'describedThingId': describedThingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/describedThings/{describedThingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a DescribedThing
     * Updates an existing &#x60;DescribedThing&#x60;.
     * @param {String} describedThingId A unique identifier for a &#x60;DescribedThing&#x60;.
     * @param {module:Model/DescribedThing} describedThing Updated &#x60;DescribedThing&#x60; information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateDescribedThing(describedThingId, describedThing) {
      return this.updateDescribedThingWithHttpInfo(describedThingId, describedThing)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Thing
     * Updates an existing &#x60;Thing&#x60;.
     * @param {String} thingId A unique identifier for a &#x60;Thing&#x60;.
     * @param {module:Model/Thing} thing Updated &#x60;Thing&#x60; information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateThingWithHttpInfo(thingId, thing) {
      let postBody = thing;

      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateThing");
      }

      // verify the required parameter 'thing' is set
      if (thing === undefined || thing === null) {
        throw new Error("Missing the required parameter 'thing' when calling updateThing");
      }


      let pathParams = {
        'thingId': thingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/things/{thingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Thing
     * Updates an existing &#x60;Thing&#x60;.
     * @param {String} thingId A unique identifier for a &#x60;Thing&#x60;.
     * @param {module:Model/Thing} thing Updated &#x60;Thing&#x60; information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateThing(thingId, thing) {
      return this.updateThingWithHttpInfo(thingId, thing)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}